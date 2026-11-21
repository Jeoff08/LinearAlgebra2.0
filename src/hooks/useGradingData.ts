// =====================================================================
// Grading Data Persistence — localStorage with Supabase-ready design
// =====================================================================

import { useState, useEffect, useCallback } from "react";
import type { SubjectGradingRecord, GradingPeriod, GradingStudent } from "../types/grading";
import { createDefaultSubjectRecord, createQuizActivity } from "../types/grading";
import { setScore } from "../utils/gradingEngine";
import { supabase } from "../lib/supabase";

const STORAGE_KEY = "mathworkspace_grading_data";

/**
 * Load all grading records from localStorage.
 */
function reconcileStudentSubjects(records: SubjectGradingRecord[]): boolean {
  let modified = false;

  // Reconcile any quizzes accidentally placed in Quiz 10 instead of the incremental slot (e.g. Quiz 4)
  // across all periods (prelim, midterm, semi-final, final)
  records.forEach((record) => {
    (Object.keys(record.periods || {}) as GradingPeriod[]).forEach((pKey) => {
      const periodData = record.periods?.[pKey];
      if (periodData && Array.isArray(periodData.quizActivities) && Array.isArray(periodData.scores)) {
        const qActs = periodData.quizActivities;
        if (qActs.length === 10) {
          const lastAct = qActs[9]; // Quiz 10
          const lastHasScore = periodData.scores.some((s) => s.activityId === lastAct.id && s.score !== null);
          if (lastAct && (lastAct.maxScore > 0 || lastHasScore)) {
            // Find the first empty slot before index 9
            const firstEmptyIdx = qActs.findIndex((act, idx) => {
              if (idx >= 9) return false;
              const hasScore = periodData.scores.some((s) => s.activityId === act.id && s.score !== null);
              return act.maxScore === 0 && !hasScore;
            });

            if (firstEmptyIdx >= 0) {
              const targetAct = qActs[firstEmptyIdx];
              targetAct.maxScore = lastAct.maxScore;
              lastAct.maxScore = 0;

              // Move all scores from Quiz 10 to targetAct
              periodData.scores.forEach((s) => {
                if (s.activityId === lastAct.id) {
                  s.activityId = targetAct.id;
                }
              });

              modified = true;
            }
          }
        }
      }
    });
  });

  // Ensure any activity with student scores (even if score is 0) has a non-zero maxScore
  records.forEach((record) => {
    (Object.keys(record.periods || {}) as GradingPeriod[]).forEach((pKey) => {
      const periodData = record.periods?.[pKey];
      if (periodData && Array.isArray(periodData.quizActivities) && Array.isArray(periodData.scores)) {
        periodData.quizActivities.forEach((q) => {
          const activityScores = periodData.scores.filter((s) => s.activityId === q.id && s.score !== null);
          const hasAnyScoreEntry = activityScores.length > 0;
          const maxStudentScore = Math.max(
            0,
            ...activityScores.map((s) => Number(s.score || 0))
          );
          if (hasAnyScoreEntry && (q.maxScore === 0 || q.maxScore < maxStudentScore)) {
            q.maxScore = Math.max(maxStudentScore, 10);
            modified = true;
          }
        });
      }
    });
  });

  return modified;
}

function loadFromStorage(): SubjectGradingRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = [
        createDefaultSubjectRecord("MATH 101", "Calculus with Analytic Geometry", "80062"),
        createDefaultSubjectRecord("MATH 102", "Integral Calculus", "80063"),
        createDefaultSubjectRecord("MATH 103", "Linear Algebra", "80064"),
      ];
      saveToStorage(initial);
      return initial;
    }
    const parsed = JSON.parse(raw) as SubjectGradingRecord[];
    if (parsed.length === 0) {
      const initial = [
        createDefaultSubjectRecord("MATH 101", "Calculus with Analytic Geometry", "80062"),
        createDefaultSubjectRecord("MATH 102", "Integral Calculus", "80063"),
        createDefaultSubjectRecord("MATH 103", "Linear Algebra", "80064"),
      ];
      saveToStorage(initial);
      return initial;
    }
    // Reconcile activities in parsed records
    reconcileStudentSubjects(parsed);
    saveToStorage(parsed);
    return parsed;
  } catch {
    const initial = [
      createDefaultSubjectRecord("MATH 101", "Calculus with Analytic Geometry", "80062"),
      createDefaultSubjectRecord("MATH 102", "Integral Calculus", "80063"),
      createDefaultSubjectRecord("MATH 103", "Linear Algebra", "80064"),
    ];
    return initial;
  }
}

/**
 * Save all grading records to localStorage.
 */
function saveToStorage(records: SubjectGradingRecord[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("grading_data_updated", {
          detail: { records, timestamp: Date.now() },
        })
      );
    }
  } catch (e) {
    console.error("Failed to save grading data:", e);
  }
}

/**
 * Custom hook for managing grading data with automatic persistence.
 */
export function useGradingData() {
  const [records, setRecords] = useState<SubjectGradingRecord[]>(() =>
    loadFromStorage()
  );
  const [activeSubjectId, setActiveSubjectId] = useState<string | null>(() => {
    const loaded = loadFromStorage();
    return loaded.length > 0 ? loaded[0].subject.id : null;
  });
  const [activePeriod, setActivePeriod] = useState<GradingPeriod>("prelim");

  // Keep activeSubjectId valid if records change
  useEffect(() => {
    if (records.length > 0) {
      if (!activeSubjectId || !records.some((r) => r.subject.id === activeSubjectId)) {
        setActiveSubjectId(records[0].subject.id);
      }
    }
  }, [records, activeSubjectId]);

  // Auto-save whenever records change (both localStorage & Supabase)
  useEffect(() => {
    saveToStorage(records);

    // Sync records to Supabase grading_records table
    if (supabase && records.length > 0) {
      const activeClient = supabase;
      const syncToSupabase = async () => {
        try {
          const rows = records.map((rec) => ({
            id: rec.subject.id,
            subject_id: rec.subject.id,
            subject_code: rec.subject.subjectCode,
            offer_number: rec.subject.offerNumber,
            grades_published: Boolean(rec.subject.gradesPublished),
            data: rec,
            updated_at: new Date().toISOString(),
          }));

          await activeClient.from("grading_records").upsert(rows);
        } catch (err) {
          console.warn("Could not sync grading records to Supabase:", err);
        }
      };

      const timer = setTimeout(syncToSupabase, 800);
      return () => clearTimeout(timer);
    }
  }, [records]);

  // Load from Supabase on initial mount if available
  useEffect(() => {
    if (!supabase) return;
    const activeClient = supabase;
    let isCancelled = false;

    async function loadFromSupabase() {
      try {
        const { data, error } = await activeClient
          .from("grading_records")
          .select("id, subject_id, grades_published, data, updated_at");

        if (error || !data || data.length === 0 || isCancelled) return;

        const cloudRecords: SubjectGradingRecord[] = data
          .map((row: any) => {
            const rec = row.data as SubjectGradingRecord;
            if (rec?.subject) {
              rec.subject.gradesPublished = Boolean(row.grades_published ?? rec.subject.gradesPublished);
              if (rec.subject.publishedTerms === undefined && (row.data as any)?.subject?.publishedTerms) {
                rec.subject.publishedTerms = (row.data as any).subject.publishedTerms;
              }
            }
            return rec;
          })
          .filter(Boolean);

        if (cloudRecords.length > 0) {
          reconcileStudentSubjects(cloudRecords);
          setRecords((prev) => {
            const merged = cloudRecords.map((cloudRec) => {
              const localRec = prev.find((p) => p.subject.id === cloudRec.subject.id);
              if (!localRec) return cloudRec;

              const mergedPeriods = { ...cloudRec.periods };
              (Object.keys(mergedPeriods) as GradingPeriod[]).forEach((pKey) => {
                const cloudP = mergedPeriods[pKey];
                const localP = localRec.periods?.[pKey];
                if (cloudP && localP) {
                  // Preserve maxScores if local has higher or active maxScore (e.g. Quiz 2 maxScore: 10)
                  cloudP.quizActivities = cloudP.quizActivities.map((cAct, idx) => {
                    const lAct = localP.quizActivities?.[idx];
                    return lAct && lAct.maxScore > cAct.maxScore ? { ...cAct, maxScore: lAct.maxScore } : cAct;
                  });
                  // Merge scores: keep any local scores not present or null in cloud
                  const cloudScores = [...(cloudP.scores || [])];
                  (localP.scores || []).forEach((lScore) => {
                    const existingIdx = cloudScores.findIndex(
                      (cs) => cs.studentId === lScore.studentId && cs.activityId === lScore.activityId
                    );
                    if (existingIdx === -1) {
                      cloudScores.push(lScore);
                    } else if (cloudScores[existingIdx].score === null && lScore.score !== null) {
                      cloudScores[existingIdx] = lScore;
                    }
                  });
                  cloudP.scores = cloudScores;
                }
              });

              return {
                ...cloudRec,
                periods: mergedPeriods,
                students: localRec.students.length > cloudRec.students.length ? localRec.students : cloudRec.students,
                sermsRawGrades: { ...(cloudRec.sermsRawGrades || {}), ...(localRec.sermsRawGrades || {}) },
              };
            });

            reconcileStudentSubjects(merged);
            saveToStorage(merged);
            return merged;
          });
        }
      } catch (err) {
        console.warn("Could not load grading records from Supabase:", err);
      }
    }

    loadFromSupabase();
    return () => {
      isCancelled = true;
    };
  }, []);

  // Listen for cross-tab storage and local quiz submission events
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent | CustomEvent) => {
      // Avoid reacting to own storage writes within the same window to prevent re-render loops or twitching
      if (e instanceof StorageEvent && e.key && e.key !== STORAGE_KEY) return;
      const loaded = loadFromStorage();
      setRecords(loaded);
    };
    window.addEventListener("storage", handleStorageChange as EventListener);
    window.addEventListener("mathworkspace-quiz-submitted", handleStorageChange as EventListener);
    return () => {
      window.removeEventListener("storage", handleStorageChange as EventListener);
      window.removeEventListener("mathworkspace-quiz-submitted", handleStorageChange as EventListener);
    };
  }, []);

  // Sync Supabase profiles with local grading data on mount
  useEffect(() => {
    const client = supabase;
    if (!client) return;
    const activeClient = client;
    let isCancelled = false;

    async function syncProfiles() {
      try {
        const { data: profiles, error } = await activeClient
          .from("profiles")
          .select("id, name, email, student_id, id_number, subject_code, offer_number, role");

        if (error || !profiles || isCancelled) return;

        setRecords((prevRecords) => {
          let hasUpdates = false;
          const updatedRecords = prevRecords.map((rec) => {
            let updatedStudents = false;
            let currentScores = [...rec.periods.prelim.scores];
            const subCode = (rec.subject.subjectCode || "").toLowerCase().trim();
            const subDigits = subCode.match(/\d+/)?.[0];

            // 1. Remove students who belong to a different subject (e.g. Jeoff Montebon should NOT be in MATH 101)
            let filteredStudents = rec.students.filter((st) => {
              const nameLower = (st.fullName || "").toLowerCase();
              if (subDigits === "101") {
                if (nameLower.includes("jeoff") || nameLower.includes("montebon")) return false;
              }
              const matchedP = profiles.find(
                (p: any) =>
                  p.id === st.id ||
                  (st.studentId && (p.student_id === st.studentId || p.id_number === st.studentId)) ||
                  st.fullName.toLowerCase().trim() === (p.name || "").toLowerCase().trim()
              );
              if (matchedP) {
                const pSub = (matchedP.subject_code || "").toLowerCase().trim();
                const pDigits = pSub.match(/\d+/)?.[0];
                if (pDigits && subDigits && pDigits !== subDigits) {
                  return false;
                }
              }
              return true;
            });

            if (filteredStudents.length !== rec.students.length) {
              const keptIds = new Set(filteredStudents.map((st) => st.id));
              currentScores = currentScores.filter((s) => keptIds.has(s.studentId));
              filteredStudents.forEach((st, idx) => {
                st.studentNumber = String(idx + 1);
              });
              updatedStudents = true;
              hasUpdates = true;
            }

            const newStudents = [...filteredStudents];

            profiles.forEach((p: any) => {
              if (p.role === "admin" || p.email?.toLowerCase().trim() === "admin@gmail.com") return;
              const pSub = (p.subject_code || "").toLowerCase().trim();
              const pOffer = (p.offer_number || "").toLowerCase().trim();
              const pName = (p.name || "").toLowerCase();

              // Check if student profile matches this subject
              let belongs = false;
              if (subDigits === "102" && (pName.includes("jeoff") || pName.includes("montebon"))) {
                belongs = true;
              } else if (subDigits && pSub.includes(subDigits)) {
                belongs = true;
              } else if (pSub && pSub === subCode) {
                belongs = true;
              } else if (pOffer && pOffer === rec.subject.offerNumber.toLowerCase().trim()) {
                belongs = true;
              }

              if (belongs) {
                const profId = (p.student_id || p.id_number || `2026-${p.id.slice(0, 5)}`).toUpperCase().trim();
                const profName = p.name || "Student";
                const existingIdx = newStudents.findIndex(
                  (st) =>
                    st.id === p.id ||
                    st.studentId === profId ||
                    st.fullName.toLowerCase().trim() === profName.toLowerCase().trim()
                );

                if (existingIdx >= 0) {
                  if (newStudents[existingIdx].studentId !== profId || newStudents[existingIdx].fullName !== profName) {
                    newStudents[existingIdx] = {
                      ...newStudents[existingIdx],
                      studentId: profId,
                      fullName: profName,
                    };
                    updatedStudents = true;
                    hasUpdates = true;
                  }
                } else {
                  newStudents.push({
                    id: p.id,
                    studentNumber: String(newStudents.length + 1),
                    studentId: profId,
                    fullName: profName,
                  });
                  updatedStudents = true;
                  hasUpdates = true;
                }
              }
            });

            if (!updatedStudents) return rec;

            return {
              ...rec,
              students: newStudents,
              periods: {
                ...rec.periods,
                prelim: {
                  ...rec.periods.prelim,
                  scores: currentScores,
                },
              },
            };
          });

          return hasUpdates ? updatedRecords : prevRecords;
        });
      } catch (err) {
        console.warn("Could not sync supabase profiles to grading sheet:", err);
      }
    }

    syncProfiles();
    return () => {
      isCancelled = true;
    };
  }, []);

  // Sync Supabase quiz attempts to Grading Sheet quizzes automatically
  useEffect(() => {
    const client = supabase;
    if (!client) return;
    const activeClient = client;
    let isCancelled = false;

    async function syncQuizAttemptsToGrading() {
      try {
        // 1. Fetch quizzes ordered chronologically with their questions
        let quizzesData: any[] = [];
        const resWithSubject = await activeClient
          .from("quizzes")
          .select("id, title, topic, created_at, points_per_item, subject_id, quiz_questions(id)")
          .order("created_at", { ascending: true });

        if (resWithSubject.error) {
          const resFallback = await activeClient
            .from("quizzes")
            .select("id, title, topic, created_at, points_per_item, quiz_questions(id)")
            .order("created_at", { ascending: true });
          quizzesData = resFallback.data || [];
        } else {
          quizzesData = resWithSubject.data || [];
        }

        if (quizzesData.length === 0 || isCancelled) return;

        // 2. Fetch all quiz attempts
        const { data: attemptsData, error: aErr } = await activeClient
          .from("quiz_attempts")
          .select("id, quiz_id, user_id, score, total_questions, submitted_at, answers_json")
          .order("submitted_at", { ascending: true });

        if (aErr || !attemptsData || attemptsData.length === 0 || isCancelled) return;

        // 3. Fetch profiles to match auth user_id to student name/id
        const { data: profilesData, error: pErr } = await activeClient
          .from("profiles")
          .select("id, name, email, student_id, id_number, subject_code, offer_number");

        if (pErr || !profilesData || isCancelled) return;

        // Map quiz ID to its assigned subject ID (if any)
        const quizSubjectMap = new Map<string, string | null>();
        quizzesData.forEach((q: any) => {
          const subId = q.subject_id || localStorage.getItem(`quiz_subject_${q.id}`) || null;
          quizSubjectMap.set(q.id, subId);
        });

        setRecords((prevRecords) => {
          let hasAnyUpdates = false;

          const updatedRecords = prevRecords.map((rec) => {
            let recordModified = false;
            let updatedStudents = [...rec.students];
            const subCode = (rec.subject.subjectCode || "").toLowerCase().trim();
            const subDigits = subCode.match(/\d+/)?.[0];
            // Period-aware records: clone all periods
            const updatedPeriods = { ...rec.periods };
            (Object.keys(updatedPeriods) as GradingPeriod[]).forEach((pKey) => {
              const currentPeriod = { ...updatedPeriods[pKey] };
              let qActs = Array.isArray(currentPeriod.quizActivities) ? [...currentPeriod.quizActivities] : [];
              if (qActs.length === 0) {
                qActs = Array.from({ length: 10 }, (_, i) => createQuizActivity(i, 0));
                recordModified = true;
              } else if (qActs.length < 10) {
                while (qActs.length < 10) {
                  qActs.push(createQuizActivity(qActs.length, 0));
                }
                recordModified = true;
              } else if (qActs.length > 10) {
                qActs = qActs.slice(0, 10);
                recordModified = true;
              }
              currentPeriod.quizActivities = qActs;
              currentPeriod.scores = Array.isArray(currentPeriod.scores) ? [...currentPeriod.scores] : [];
              updatedPeriods[pKey] = currentPeriod;
            });

            // Filter quizzes relevant to this subject record
            const isQuizForThisSubject = (q: any) => {
              const assigned = (
                quizSubjectMap.get(q.id) ||
                localStorage.getItem(`quiz_subject_code_${q.id}`) ||
                ""
              ).toLowerCase().trim();
              const fullOffer = `${rec.subject.subjectCode} - ${rec.subject.offerNumber}`.toLowerCase().trim();

              const title = (q.title || "").toLowerCase();
              const topic = (q.topic || "").toLowerCase();

              // Check if quiz topic/title mentions another subject's digits
              const matchesOtherSubject = prevRecords.some((other) => {
                if (other.subject.id === rec.subject.id) return false;
                const otherDigits = other.subject.subjectCode.match(/\d+/)?.[0];
                if (!otherDigits) return false;
                const otherPat = new RegExp(`\\b${otherDigits}\\b|math\\s*${otherDigits}|\\[math\\s*${otherDigits}\\]`, "i");
                return otherPat.test(title) || otherPat.test(topic) || assigned.includes(otherDigits);
              });

              if (matchesOtherSubject) return false;

              // Explicit assigned check
              if (assigned) {
                if (
                  assigned === rec.subject.id.toLowerCase() ||
                  assigned === fullOffer ||
                  assigned === subCode ||
                  (subDigits && assigned.includes(subDigits))
                ) {
                  return true;
                }
              }

              // Check if code digits match (e.g. 102 in MATH 102)
              if (subDigits) {
                const pat = new RegExp(`\\b${subDigits}\\b|math\\s*${subDigits}|\\[math\\s*${subDigits}\\]`, "i");
                if (pat.test(title) || pat.test(topic)) {
                  return true;
                }
              }

              // Topic-based matching
              if (subCode.includes("102") && (topic.includes("calculus-2") || topic.includes("calculus 2") || topic.includes("integral"))) {
                return true;
              }
              if (subCode.includes("101") && (topic.includes("calculus-1") || topic.includes("calculus 1") || topic.includes("differential"))) {
                return true;
              }
              if (subCode.includes("103") && (topic.includes("linear-algebra") || topic.includes("linear algebra"))) {
                return true;
              }

              return false;
            };

            const subjectQuizzes = quizzesData.filter(isQuizForThisSubject);

            // Ensure quizActivities has exactly 10 slots for each period
            (Object.keys(updatedPeriods) as GradingPeriod[]).forEach((pKey) => {
              const currentPeriod = updatedPeriods[pKey];
              let qActs = currentPeriod.quizActivities;
              if (!Array.isArray(qActs) || qActs.length === 0) {
                qActs = Array.from({ length: 10 }, (_, i) => createQuizActivity(i, 0));
                recordModified = true;
              } else if (qActs.length < 10) {
                while (qActs.length < 10) {
                  qActs.push(createQuizActivity(qActs.length, 0));
                }
                recordModified = true;
              } else if (qActs.length > 10) {
                qActs = qActs.slice(0, 10);
                recordModified = true;
              }

              // Pre-populate maxScore for any published quizzes in this period, even before any student attempts it!
              const quizzesForThisPeriod = subjectQuizzes.filter((q: any) => {
                const rawP = q.period || localStorage.getItem(`quiz_period_${q.id}`) || "prelim";
                const qPeriodKey: GradingPeriod =
                  rawP === "midterm" || rawP === "semi-final" || rawP === "final" ? rawP : "prelim";
                return qPeriodKey === pKey;
              });

              quizzesForThisPeriod.forEach((q: any, periodIdx: number) => {
                let slotIdx = periodIdx;
                const storedQuizNumber = localStorage.getItem(`quiz_number_${q.id}`);
                if (storedQuizNumber) {
                  const parsedNum = parseInt(storedQuizNumber, 10);
                  if (parsedNum >= 1 && parsedNum <= 10) slotIdx = parsedNum - 1;
                } else if (q.quizNumber && q.quizNumber >= 1 && q.quizNumber <= 10) {
                  slotIdx = q.quizNumber - 1;
                } else {
                  const numMatch = (q.title || "").match(/quiz\s*(\d+)/i);
                  if (numMatch && numMatch[1]) {
                    const pNum = parseInt(numMatch[1], 10);
                    if (pNum >= 1 && pNum <= 10) slotIdx = pNum - 1;
                  }
                }
                if (slotIdx >= 10) slotIdx = 9;

                const qCount = Array.isArray(q.quiz_questions) ? q.quiz_questions.length : (q.questionsCount || 0);
                const ppi = Number(q.points_per_item || 1);
                const quizMax = qCount > 0 ? qCount * ppi : 10;

                if (qActs[slotIdx] && (qActs[slotIdx].maxScore < quizMax || qActs[slotIdx].maxScore === 0)) {
                  qActs = qActs.map((act, i) => (i === slotIdx ? { ...act, maxScore: quizMax } : act));
                  recordModified = true;
                  hasAnyUpdates = true;
                }
              });

              currentPeriod.quizActivities = qActs;
            });

            // Clean up: Remove any students from rec.students who belong to another subject
            const countBefore = updatedStudents.length;
            updatedStudents = updatedStudents.filter((st) => {
              const nameLower = (st.fullName || "").toLowerCase();
              if (subDigits === "101") {
                if (nameLower.includes("jeoff") || nameLower.includes("montebon")) return false;
              }
              const matchedP = profilesData.find(
                (p: any) =>
                  p.id === st.id ||
                  (st.studentId && (p.student_id === st.studentId || p.id_number === st.studentId)) ||
                  st.fullName.toLowerCase().trim() === (p.name || "").toLowerCase().trim()
              );
              if (matchedP && matchedP.subject_code) {
                const pDigits = (matchedP.subject_code || "").match(/\d+/)?.[0];
                if (pDigits && subDigits && pDigits !== subDigits) {
                  return false;
                }
              }
              return true;
            });

            if (updatedStudents.length !== countBefore) {
              const keptIds = new Set(updatedStudents.map((s) => s.id));
              (Object.keys(updatedPeriods) as GradingPeriod[]).forEach((pKey) => {
                updatedPeriods[pKey].scores = updatedPeriods[pKey].scores.filter((s) => keptIds.has(s.studentId));
              });
              updatedStudents.forEach((st, i) => { st.studentNumber = String(i + 1); });
              recordModified = true;
              hasAnyUpdates = true;
            }

            // Group attempts by student to ensure each unique quiz maps to exactly one column
            const studentAttemptsMap = new Map<string, any[]>();
            attemptsData.forEach((att: any) => {
              const parentQuiz = subjectQuizzes.find((q: any) => q.id === att.quiz_id);
              if (!parentQuiz) return;

              // Match profile or extract student info
              const matchedProf = profilesData.find((p: any) => p.id === att.user_id);
              let parsedAnswers: any = {};
              try {
                parsedAnswers = JSON.parse(att.answers_json || "{}");
              } catch {}

              const studentName =
                matchedProf?.name ||
                parsedAnswers?.student_name ||
                `Student ${att.user_id.slice(0, 6)}`;
              const studentIdNum =
                matchedProf?.student_id ||
                matchedProf?.id_number ||
                `2026-${att.user_id.slice(0, 5).toUpperCase()}`;

              const nameLower = studentName.toLowerCase();
              const pSub = (matchedProf?.subject_code || "").toLowerCase().trim();
              const pDigits = pSub.match(/\d+/)?.[0];

              // Verify student actually belongs to this subject
              if (subDigits === "101") {
                if (nameLower.includes("jeoff") || nameLower.includes("montebon") || pDigits === "102") {
                  return; // SKIP! This student belongs to MATH 102!
                }
              }
              if (subDigits && pDigits && pDigits !== subDigits) {
                return; // SKIP! Student belongs to a different subject!
              }

              const list = studentAttemptsMap.get(att.user_id) || [];
              list.push({ att, parentQuiz, studentName, studentIdNum });
              studentAttemptsMap.set(att.user_id, list);
            });

            studentAttemptsMap.forEach((studentQuizItems, userId) => {
              const firstItem = studentQuizItems[0];
              // Find or add student to this subject's student roster
              let studentIdx = updatedStudents.findIndex(
                (st) =>
                  st.id === userId ||
                  st.studentId === firstItem.studentIdNum ||
                  st.fullName.toLowerCase().trim() === firstItem.studentName.toLowerCase().trim()
              );

              if (studentIdx === -1) {
                const newStudent: GradingStudent = {
                  id: userId,
                  studentNumber: String(updatedStudents.length + 1),
                  studentId: firstItem.studentIdNum,
                  fullName: firstItem.studentName,
                };
                updatedStudents.push(newStudent);
                studentIdx = updatedStudents.length - 1;
                recordModified = true;
                hasAnyUpdates = true;
              }

              const currentStudent = updatedStudents[studentIdx];

              // Sort items chronologically
              studentQuizItems.sort((a, b) => new Date(a.att.submitted_at || 0).getTime() - new Date(b.att.submitted_at || 0).getTime());

              // Find unique quizzes attempted by this student
              const uniqueQuizzes: any[] = [];
              studentQuizItems.forEach((item) => {
                if (!uniqueQuizzes.some((uq) => uq.id === item.parentQuiz.id)) {
                  uniqueQuizzes.push(item.parentQuiz);
                }
              });

              // Group unique quizzes by their grading period so numbering/slots (Quiz 1, Quiz 2) are independent per period!
              const quizzesByPeriod: Record<GradingPeriod, any[]> = {
                prelim: [],
                midterm: [],
                "semi-final": [],
                final: [],
              };

              uniqueQuizzes.forEach((uQuiz) => {
                const rawQuizPeriod = String(uQuiz.period || localStorage.getItem(`quiz_period_${uQuiz.id}`) || "prelim").toLowerCase().trim();
                let quizPeriodKey: GradingPeriod = "prelim";
                if (rawQuizPeriod === "midterm") {
                  quizPeriodKey = "midterm";
                } else if (
                  rawQuizPeriod === "semi-final" ||
                  rawQuizPeriod === "semifinal" ||
                  rawQuizPeriod === "semi_final" ||
                  rawQuizPeriod === "semi final"
                ) {
                  quizPeriodKey = "semi-final";
                } else if (rawQuizPeriod === "final" || rawQuizPeriod === "finals") {
                  quizPeriodKey = "final";
                }
                quizzesByPeriod[quizPeriodKey].push(uQuiz);
              });

              // Process each period's quizzes independently
              (Object.keys(quizzesByPeriod) as GradingPeriod[]).forEach((pKey) => {
                const periodQuizzes = quizzesByPeriod[pKey];
                const targetPeriod = updatedPeriods[pKey];
                let periodQuizActivities = [...targetPeriod.quizActivities];
                let periodScores = [...targetPeriod.scores];

                periodQuizzes.forEach((uQuiz, periodIdx) => {
                  let slotIdx = periodIdx; // Starts at 0 (Quiz 1) for this period!

                  // 1. Check if an explicit quizNumber exists in quiz item or localStorage
                  const storedQuizNumber = localStorage.getItem(`quiz_number_${uQuiz.id}`);
                  if (storedQuizNumber) {
                    const parsedNum = parseInt(storedQuizNumber, 10);
                    if (parsedNum >= 1 && parsedNum <= 10) slotIdx = parsedNum - 1;
                  } else if (uQuiz.quizNumber && uQuiz.quizNumber >= 1 && uQuiz.quizNumber <= 10) {
                    slotIdx = uQuiz.quizNumber - 1;
                  } else {
                    // 2. Fallback to title matching
                    const numMatch = (uQuiz.title || "").match(/quiz\s*(\d+)/i);
                    if (numMatch && numMatch[1]) {
                      const pNum = parseInt(numMatch[1], 10);
                      if (pNum >= 1 && pNum <= 10) slotIdx = pNum - 1;
                    }
                  }
                  if (slotIdx >= 10) slotIdx = 9;

                  const attemptsForQuiz = studentQuizItems.filter((i) => i.parentQuiz.id === uQuiz.id);
                  const bestScore = Math.max(...attemptsForQuiz.map((i) => Number(i.att.score ?? 0)));
                  // Find total points/questions: total_questions in attempt represents the quiz total points
                  const attemptTotal = Number(attemptsForQuiz[0]?.att?.total_questions ?? 0);
                  const quizQuestionsCount = Array.isArray(uQuiz.quiz_questions) ? uQuiz.quiz_questions.length : (uQuiz.questionsCount || 0);
                  const ppi = Number(uQuiz.points_per_item || 1);
                  const calculatedMaxFromQuestions = quizQuestionsCount > 0 ? quizQuestionsCount * ppi : 0;
                  const possibleMax = attemptTotal > 0 ? attemptTotal : (calculatedMaxFromQuestions > 0 ? calculatedMaxFromQuestions : 10);

                  const targetActivity = periodQuizActivities[slotIdx];
                  if (targetActivity) {
                    if (targetActivity.maxScore < possibleMax || targetActivity.maxScore === 0) {
                      periodQuizActivities = periodQuizActivities.map((act, i) =>
                        i === slotIdx ? { ...act, maxScore: possibleMax } : act
                      );
                      targetPeriod.quizActivities = periodQuizActivities;
                      recordModified = true;
                      hasAnyUpdates = true;
                    }

                    const existingScoreEntry = periodScores.find(
                      (s) => s.studentId === currentStudent.id && s.activityId === targetActivity.id
                    );
                    if (!existingScoreEntry || existingScoreEntry.score === null || existingScoreEntry.score !== bestScore) {
                      targetPeriod.scores = setScore(periodScores, currentStudent.id, targetActivity.id, bestScore);
                      recordModified = true;
                      hasAnyUpdates = true;
                    }
                  }
                });
              });

              // Also ensure periods with ZERO quizzes have all quiz slots zeroed and no ghost scores for this student
              (Object.keys(quizzesByPeriod) as GradingPeriod[]).forEach((pKey) => {
                if (quizzesByPeriod[pKey].length === 0) {
                  const targetPeriod = updatedPeriods[pKey];
                  targetPeriod.quizActivities.forEach((act) => {
                    if (act.maxScore > 0) {
                      act.maxScore = 0;
                      recordModified = true;
                      hasAnyUpdates = true;
                    }
                    const hasScore = targetPeriod.scores.some((s) => s.studentId === currentStudent.id && s.activityId === act.id);
                    if (hasScore) {
                      targetPeriod.scores = targetPeriod.scores.filter(
                        (s) => !(s.studentId === currentStudent.id && s.activityId === act.id)
                      );
                      recordModified = true;
                      hasAnyUpdates = true;
                    }
                  });
                }
              });
            });

            // Clean up unused slots when no quiz attempts exist for MATH 101 or MATH 102
            if (subjectQuizzes.length === 0) {
              // No quizzes for this subject, don't force max score
            }

            if (!recordModified) return rec;

            return {
              ...rec,
              students: updatedStudents,
              periods: updatedPeriods,
            };
          });

          return hasAnyUpdates ? updatedRecords : prevRecords;
        });
      } catch (syncErr) {
        console.warn("Could not sync quiz attempts to grading sheet:", syncErr);
      }
    }

    syncQuizAttemptsToGrading();

    // Listen on multiple channels for realtime synchronization
    const subBroadcast = activeClient
      .channel("quiz-submissions-broadcast")
      .on("broadcast", { event: "new-quiz-submission" }, () => {
        syncQuizAttemptsToGrading();
      })
      .subscribe();

    const subDbChanges = activeClient
      .channel("grading-quiz-attempts-sync")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "quiz_attempts" },
        () => {
          syncQuizAttemptsToGrading();
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "quiz_attempts" },
        () => {
          syncQuizAttemptsToGrading();
        }
      )
      .subscribe();

    const handleLocalSubmission = () => {
      syncQuizAttemptsToGrading();
    };
    window.addEventListener("mathworkspace-quiz-submitted", handleLocalSubmission);

    return () => {
      isCancelled = true;
      subBroadcast.unsubscribe();
      subDbChanges.unsubscribe();
      window.removeEventListener("mathworkspace-quiz-submitted", handleLocalSubmission);
    };
  }, []);

  // Get the active subject record
  const activeRecord = records.find((r) => r.subject.id === activeSubjectId) ?? null;

  // Get active period data
  const activePeriodData = activeRecord?.periods[activePeriod] ?? null;

  // ========== Subject CRUD ==========

  const addSubject = useCallback(() => {
    const newRecord = createDefaultSubjectRecord();
    setRecords((prev) => [...prev, newRecord]);
    setActiveSubjectId(newRecord.subject.id);
    setActivePeriod("prelim");
    return newRecord;
  }, []);

  const updateSubject = useCallback(
    (subjectId: string, updates: Partial<SubjectGradingRecord["subject"]>) => {
      setRecords((prev) =>
        prev.map((r) =>
          r.subject.id === subjectId
            ? {
                ...r,
                subject: {
                  ...r.subject,
                  ...updates,
                  updatedAt: new Date().toISOString(),
                },
              }
            : r
        )
      );
    },
    []
  );

  const deleteSubject = useCallback(
    (subjectId: string) => {
      setRecords((prev) => {
        const filtered = prev.filter((r) => r.subject.id !== subjectId);
        if (activeSubjectId === subjectId) {
          setActiveSubjectId(filtered.length > 0 ? filtered[0].subject.id : null);
        }
        return filtered;
      });
    },
    [activeSubjectId]
  );

  // ========== Generic record updater ==========

  const updateRecord = useCallback(
    (subjectId: string, updater: (record: SubjectGradingRecord) => SubjectGradingRecord) => {
      setRecords((prev) =>
        prev.map((r) => (r.subject.id === subjectId ? updater(r) : r))
      );
    },
    []
  );

  // ========== Import ==========
  const importRecord = useCallback((record: SubjectGradingRecord) => {
    setRecords((prev) => {
      // Check if subject already exists (by subjectCode + offerNumber)
      const existingIdx = prev.findIndex(
        (r) =>
          r.subject.subjectCode === record.subject.subjectCode &&
          r.subject.offerNumber === record.subject.offerNumber
      );
      if (existingIdx >= 0) {
        // Merge/replace
        const updated = [...prev];
        updated[existingIdx] = record;
        return updated;
      }
      return [...prev, record];
    });
    setActiveSubjectId(record.subject.id);
  }, []);

  const togglePublishGrades = useCallback(
    (subjectId: string, terms?: GradingPeriod[]) => {
      setRecords((prev) =>
        prev.map((r) => {
          if (r.subject.id !== subjectId) return r;
          
          let nextState: boolean;
          let nextTerms: GradingPeriod[];

          if (terms !== undefined) {
            // Explicit terms specified
            nextTerms = terms;
            nextState = terms.length > 0;
          } else {
            // Simple toggle
            nextState = !Boolean(r.subject.gradesPublished);
            nextTerms = nextState
              ? (r.subject.publishedTerms && r.subject.publishedTerms.length > 0
                  ? r.subject.publishedTerms
                  : ["prelim", "midterm", "semi-final", "final"])
              : [];
          }

          const updatedSubject = {
            ...r.subject,
            gradesPublished: nextState,
            publishedTerms: nextTerms,
            updatedAt: new Date().toISOString(),
          };
          const updatedRec = { ...r, subject: updatedSubject };

          // Sync directly to Supabase
          if (supabase) {
            supabase
              .from("grading_records")
              .upsert({
                id: r.subject.id,
                subject_id: r.subject.id,
                subject_code: r.subject.subjectCode,
                offer_number: r.subject.offerNumber,
                grades_published: nextState,
                data: updatedRec,
                updated_at: new Date().toISOString(),
              })
              .then(({ error }) => {
                if (error) {
                  console.warn("Could not toggle grades publish status in Supabase:", error);
                }
              });
          }

          return updatedRec;
        })
      );
    },
    []
  );

  const clearAllGradingScores = useCallback(() => {
    setRecords((prev) =>
      prev.map((rec) => {
        const resetPeriods = { ...rec.periods };
        for (const pKey of Object.keys(resetPeriods) as GradingPeriod[]) {
          const currentP = resetPeriods[pKey];
          resetPeriods[pKey] = {
            ...currentP,
            quizActivities: currentP.quizActivities.map((act) => ({
              ...act,
              maxScore: 0,
            })),
            participationActivities: currentP.participationActivities.map((act) => ({
              ...act,
              maxScore: 0,
            })),
            examActivity: {
              ...currentP.examActivity,
              maxScore: 0,
            },
            scores: [],
            totalQuizOverrides: {},
            totalParticipationOverrides: {},
          };
        }
        return {
          ...rec,
          periods: resetPeriods,
          sermsRawGrades: {},
        };
      })
    );
  }, []);

  const setSermsRawGrade = useCallback(
    (
      studentId: string,
      field: "prelim" | "qg2" | "qg3" | "qg4",
      value: number | null
    ) => {
      setRecords((prev) =>
        prev.map((r) => {
          if (r.subject.id !== activeSubjectId) return r;
          const currentSerms = { ...(r.sermsRawGrades || {}) };
          const studentEntry = { ...(currentSerms[studentId] || {}) };
          if (value === null || isNaN(value)) {
            delete studentEntry[field];
          } else {
            studentEntry[field] = value;
          }
          if (Object.keys(studentEntry).length === 0) {
            delete currentSerms[studentId];
          } else {
            currentSerms[studentId] = studentEntry;
          }
          return {
            ...r,
            sermsRawGrades: currentSerms,
          };
        })
      );
    },
    [activeSubjectId]
  );

  const deleteAllSubjects = useCallback(() => {
    setRecords([]);
    setActiveSubjectId(null);
  }, []);

  return {
    records,
    setRecords,
    activeSubjectId,
    setActiveSubjectId,
    activePeriod,
    setActivePeriod,
    activeRecord,
    activePeriodData,
    addSubject,
    updateSubject,
    deleteSubject,
    deleteAllSubjects,
    updateRecord,
    importRecord,
    togglePublishGrades,
    clearAllGradingScores,
    setSermsRawGrade,
  };
}
