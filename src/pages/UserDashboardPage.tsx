import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { supabase } from "../lib/supabase";
import {
  generateStudentPersonalizedQuizQuestions,
} from "../utils/quizGenerator";

import type {
  StudentAvailableQuiz,
  StudentQuizAttemptItem,
  QuizAnswerRecord,
  QuizQuestionItem,
  QuizQuestionType,
  CalculatorCardMeta,
  UnifiedTopicItem,
} from "../types/dashboard";

import { CalculatorsView } from "../components/dashboard/CalculatorsView";
import { TopicsView } from "../components/dashboard/TopicsView";
import { UserOverviewView } from "../components/user-dashboard/UserOverviewView";
import { UserQuizzesView } from "../components/user-dashboard/UserQuizzesView";
import { UserQuizTakingView } from "../components/user-dashboard/UserQuizTakingView";
import { UserQuizResultView } from "../components/user-dashboard/UserQuizResultView";
import { UserQuizHistoryView } from "../components/user-dashboard/UserQuizHistoryView";
import { UserProfileView } from "../components/user-dashboard/UserProfileView";
import { UserAttendanceView } from "../components/user-dashboard/UserAttendanceView";
import { UserExitQuizModal } from "../components/user-dashboard/UserExitQuizModal";
import { UserReviewAttemptModal } from "../components/user-dashboard/UserReviewAttemptModal";
import { UserDashboardSidebar } from "../components/user-dashboard/UserDashboardSidebar";
import { UserDashboardHeader } from "../components/user-dashboard/UserDashboardHeader";
import {
  getQuizLockStatus,
  requestQuizUnlock,
} from "../utils/quizLockManager";
import { isSameStudentName, isSubjectMatch } from "../utils/studentMatching";

/**
 * Resolves the designated academic subject (MATH 101, MATH 102, or MATH 103)
 * for any given quiz based on explicit assignment, local storage metadata,
 * title, and topic classification.
 */
export const resolveQuizDesignatedSubject = (q: any): string => {
  if (!q) return "MATH 101";

  // 1. Direct designatedSubject property
  if (q.designatedSubject) {
    const s = String(q.designatedSubject).toUpperCase();
    if (s.includes("103")) return "MATH 103";
    if (s.includes("102")) return "MATH 102";
    if (s.includes("101")) return "MATH 101";
    return s;
  }

  // 2. Direct explicit assigned subject code or id (from DB or localStorage)
  const explicitCode =
    (q.id ? localStorage.getItem(`quiz_subject_code_${q.id}`) : "") ||
    q.assignedSubject ||
    q.subject_id ||
    q.subjectId ||
    (q.id ? localStorage.getItem(`quiz_subject_${q.id}`) : "") ||
    "";

  const lowerExplicit = String(explicitCode).toLowerCase().trim();
  if (lowerExplicit.includes("103") || lowerExplicit.includes("linear")) {
    return "MATH 103";
  }
  if (
    lowerExplicit.includes("102") ||
    lowerExplicit.includes("integral") ||
    lowerExplicit.includes("calculus 2") ||
    lowerExplicit.includes("calculus-2")
  ) {
    return "MATH 102";
  }
  if (
    lowerExplicit.includes("101") ||
    lowerExplicit.includes("analytic") ||
    lowerExplicit.includes("differential") ||
    lowerExplicit.includes("calculus 1") ||
    lowerExplicit.includes("calculus-1")
  ) {
    return "MATH 101";
  }

  // 3. Infer from topic or title
  const title = (q.title || "").toLowerCase();
  const topic = (q.topic || "").toLowerCase();

  if (
    topic.includes("103") ||
    topic.includes("linear-algebra") ||
    topic.includes("linear algebra") ||
    title.includes("103") ||
    title.includes("linear algebra") ||
    title.includes("matrix") ||
    title.includes("matrices") ||
    title.includes("vector")
  ) {
    return "MATH 103";
  }
  if (
    topic.includes("102") ||
    topic.includes("calculus-2") ||
    topic.includes("calculus 2") ||
    topic.includes("integral") ||
    title.includes("102") ||
    title.includes("integral")
  ) {
    return "MATH 102";
  }
  if (
    topic.includes("101") ||
    topic.includes("calculus-1") ||
    topic.includes("calculus 1") ||
    topic.includes("differential") ||
    title.includes("101") ||
    title.includes("differential") ||
    title.includes("analytic geometry")
  ) {
    return "MATH 101";
  }

  // Default fallback
  return "MATH 101";
};

export default function UserDashboardPage() {
  const { user, logout, refreshUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  // Navigation State
  const [activeNav, setActiveNav] = useState<
    | "dashboard"
    | "calculators"
    | "topics"
    | "quizzes"
    | "quizzes-history"
    | "attendance"
    | "profile"
  >("dashboard");

  // Mobile sidebar state
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Time dropdown filter
  const [timeRange, setTimeRange] = useState<
    "Today" | "This Week" | "This Month" | "All Time"
  >("This Week");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  // Calculator Filter Category & Active State
  const [calcCategoryFilter, setCalcCategoryFilter] = useState<
    "all" | "linear-algebra" | "calculus-1" | "calculus-2"
  >("linear-algebra");
  const [activeCalculator, setActiveCalculator] =
    useState<CalculatorCardMeta | null>(null);
  const [calcSearchQuery, setCalcSearchQuery] = useState("");

  // Topics Filter Category & Active State
  const [topicCategoryFilter, setTopicCategoryFilter] = useState<
    "all" | "linear-algebra" | "calculus-1" | "calculus-2"
  >("linear-algebra");
  const [activeTopic, setActiveTopic] = useState<UnifiedTopicItem | null>(null);
  const [topicSearchQuery, setTopicSearchQuery] = useState("");
  const [selectedChapterFilter, setSelectedChapterFilter] =
    useState<string>("all");
  const [isTopicCalculatorOpen, setIsTopicCalculatorOpen] = useState(false);

  // Quizzes Data (Real Supabase state)
  const [availableQuizzes, setAvailableQuizzes] = useState<
    StudentAvailableQuiz[]
  >([]);
  const [myAttempts, setMyAttempts] = useState<StudentQuizAttemptItem[]>([]);
  const [isLoadingQuizzes, setIsLoadingQuizzes] = useState(false);
  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState(false);

  // Active Quiz Taking & Result State
  const [activeTakingQuiz, setActiveTakingQuiz] =
    useState<StudentAvailableQuiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [quizTimerSeconds, setQuizTimerSeconds] = useState(0);
  const [submittedResult, setSubmittedResult] =
    useState<StudentQuizAttemptItem | null>(null);
  const [reviewingAttempt, setReviewingAttempt] =
    useState<StudentQuizAttemptItem | null>(null);
  const [showExitConfirmModal, setShowExitConfirmModal] = useState(false);
  const [quizFilterTopic, setQuizFilterTopic] = useState<string>("all");
  const [quizSearchTerm, setQuizSearchTerm] = useState<string>("");

  // Global transitions prevention on navigation change
  const handleNavClick = (navKey: any) => {
    document.documentElement.classList.add("no-transitions");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("no-transitions");
      });
    });

    setActiveNav(navKey);
    setActiveCalculator(null);
    setActiveTopic(null);
    setActiveTakingQuiz(null);
    setSubmittedResult(null);
    setReviewingAttempt(null);
    setMobileSidebarOpen(false);
  };

  // Fetch Quizzes and student's attempts from Supabase
  const fetchStudentQuizData = async () => {
    if (!supabase) return;
    setIsLoadingQuizzes(true);
    try {
      // 1. Fetch quizzes and questions (with allow_review column if migrated)
      let quizzesData: any = null;
      let qError: any = null;

      const resWithReview = await supabase
        .from("quizzes")
        .select(`
          id,
          title,
          topic,
          created_at,
          points_per_item,
          allow_review,
          subject_id,
          quiz_questions (
            id,
            question_index,
            prompt,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer
          )
        `)
        .order("created_at", { ascending: false });

      if (resWithReview.error) {
        // Fallback in case subject_id or allow_review is not yet migrated in Supabase
        const fallbackRes = await supabase
          .from("quizzes")
          .select(`
            id,
            title,
            topic,
            created_at,
            points_per_item,
            quiz_questions (
              id,
              question_index,
              prompt,
              option_a,
              option_b,
              option_c,
              option_d,
              correct_answer
            )
          `)
          .order("created_at", { ascending: false });
        quizzesData = fallbackRes.data;
        qError = fallbackRes.error;
      } else {
        quizzesData = resWithReview.data;
      }

      if (qError) {
        console.error("Error loading student quizzes:", qError);
      }

      // 2. Fetch student's own attempts if logged in
      let studentAttempts: any[] = [];
      if (user?.id) {
        const { data: attemptsData, error: aError } = await supabase
          .from("quiz_attempts")
          .select(`
            id,
            quiz_id,
            user_id,
            score,
            total_questions,
            answers_json,
            time_spent_seconds,
            submitted_at
          `)
          .eq("user_id", user.id)
          .order("submitted_at", { ascending: false });

        if (aError) {
          console.error("Error loading student quiz attempts:", aError);
        } else if (attemptsData) {
          studentAttempts = attemptsData;
        }
      }

      // Process attempts
      const quizMap = new Map<string, any>((quizzesData || []).map((q: any) => [q.id, q]));
      const formattedAttempts: StudentQuizAttemptItem[] = studentAttempts.map(
        (att: any) => {
          const parentQuiz = quizMap.get(att.quiz_id);
          const isReviewAllowed = parentQuiz?.allow_review !== undefined
            ? Boolean(parentQuiz.allow_review)
            : localStorage.getItem(`quiz_allow_review_${att.quiz_id}`) === "true";

          let parsedAnswers: QuizAnswerRecord[] = [];
          try {
            const raw = JSON.parse(att.answers_json || "[]");
            if (Array.isArray(raw)) {
              parsedAnswers = raw;
            } else if (
              raw &&
              typeof raw === "object" &&
              Array.isArray(raw.answers)
            ) {
              parsedAnswers = raw.answers;
            }
          } catch {
            parsedAnswers = [];
          }

          const pct =
            att.total_questions > 0
              ? Math.round((att.score / att.total_questions) * 100)
              : 0;

          return {
            id: att.id,
            quizId: att.quiz_id,
            quizTitle: parentQuiz?.title || "Practice Quiz",
            topic: parentQuiz?.topic || "Mathematics",
            score: att.score,
            totalQuestions: att.total_questions,
            percentage: pct,
            passed: pct >= 60,
            timeSpentSeconds: att.time_spent_seconds || 0,
            submittedAt: new Date(att.submitted_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
            answers: parsedAnswers,
            allowReview: isReviewAllowed,
          };
        }
      );

      setMyAttempts(formattedAttempts);

      // Process available quizzes
      if (quizzesData) {
        const formattedQuizzes: StudentAvailableQuiz[] = quizzesData.map(
          (q: any) => {
            const rawQ = Array.isArray(q.quiz_questions)
              ? q.quiz_questions
              : [];
            const sortedQ = [...rawQ].sort(
              (a: any, b: any) =>
                (a.question_index ?? 0) - (b.question_index ?? 0)
            );
            const qItems: QuizQuestionItem[] = sortedQ.map(
              (sq: any, idx: number) => {
                const isNonMC =
                  sq.option_c === "identification" ||
                  sq.option_c === "enumeration" ||
                  sq.option_c === "problem_solving";
                const qType: QuizQuestionType = isNonMC
                  ? (sq.option_c as QuizQuestionType)
                  : ((sq.question_type as QuizQuestionType) ||
                    "multiple_choice");
                const ansText = isNonMC
                  ? sq.correct_answer_text || sq.option_a
                  : sq.correct_answer === "A"
                  ? sq.option_a
                  : sq.correct_answer === "B"
                  ? sq.option_b
                  : sq.correct_answer === "C"
                  ? sq.option_c
                  : sq.option_d;

                return {
                  id: sq.id,
                  questionIndex: sq.question_index ?? idx + 1,
                  prompt: sq.prompt,
                  questionType: qType,
                  optionA: sq.option_a,
                  optionB: sq.option_b,
                  optionC: sq.option_c,
                  optionD: sq.option_d,
                  correctAnswer: (sq.correct_answer || "A") as
                    | "A"
                    | "B"
                    | "C"
                    | "D",
                  correctAnswerText: ansText,
                  explanation: isNonMC ? sq.option_b : "",
                };
              }
            );

            const relevantAttempts = formattedAttempts.filter(
              (att) => att.quizId === q.id
            );
            const attemptsCount = relevantAttempts.length;
            const bestScore =
              relevantAttempts.length > 0
                ? Math.max(...relevantAttempts.map((a) => a.score))
                : undefined;
            const lastScore =
              attemptsCount > 0 ? relevantAttempts[0].score : undefined;

            const isQuizReviewAllowed = q.allow_review !== undefined
              ? Boolean(q.allow_review)
              : localStorage.getItem(`quiz_allow_review_${q.id}`) === "true";

            const assignedSubject = q.subject_id || localStorage.getItem(`quiz_subject_${q.id}`) || "";
            const designatedSubject = resolveQuizDesignatedSubject(q);
            const quizPeriod = (q.period || localStorage.getItem(`quiz_period_${q.id}`) || "prelim") as "prelim" | "midterm" | "semi-final" | "final";

            return {
              id: q.id,
              title: q.title,
              topic: q.topic,
              questionsCount: qItems.length,
              questions: qItems,
              createdAt: new Date(q.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
              attemptsCount,
              bestScore,
              lastScore,
              pointsPerItem: q.points_per_item || 1,
              allowReview: isQuizReviewAllowed,
              subjectId: q.subject_id || "",
              assignedSubject,
              designatedSubject,
              period: quizPeriod,
            };
          }
        );

        setAvailableQuizzes(formattedQuizzes);
      }
    } catch (err) {
      console.error("Failed to load student quiz catalog:", err);
    } finally {
      setIsLoadingQuizzes(false);
    }
  };

  useEffect(() => {
    fetchStudentQuizData();
  }, [user?.id]);

  // Real-time listener for Admin toggling quiz review permissions
  useEffect(() => {
    if (!supabase) return;
    const reviewChannel = supabase.channel("quiz-review-sync");
    reviewChannel
      .on("broadcast", { event: "quiz-review-toggled" }, ({ payload }) => {
        if (payload?.quizId === "all") {
          const newStatus = Boolean(payload.allowReview);
          setAvailableQuizzes((prev) =>
            prev.map((q) => ({ ...q, allowReview: newStatus }))
          );
          setMyAttempts((prev) =>
            prev.map((att) => ({ ...att, allowReview: newStatus }))
          );
          setReviewingAttempt((prev) =>
            prev ? { ...prev, allowReview: newStatus } : prev
          );
          setSubmittedResult((prev) =>
            prev ? { ...prev, allowReview: newStatus } : prev
          );
        } else if (payload?.quizId) {
          const newStatus = Boolean(payload.allowReview);
          try {
            localStorage.setItem(
              `quiz_allow_review_${payload.quizId}`,
              String(newStatus)
            );
          } catch {}
          setAvailableQuizzes((prev) =>
            prev.map((q) =>
              q.id === payload.quizId ? { ...q, allowReview: newStatus } : q
            )
          );
          setMyAttempts((prev) =>
            prev.map((att) =>
              att.quizId === payload.quizId
                ? { ...att, allowReview: newStatus }
                : att
            )
          );
          setReviewingAttempt((prev) =>
            prev && prev.quizId === payload.quizId
              ? { ...prev, allowReview: newStatus }
              : prev
          );
          setSubmittedResult((prev) =>
            prev && prev.quizId === payload.quizId
              ? { ...prev, allowReview: newStatus }
              : prev
          );
        }
      })
      .subscribe();

    const handleStorageEvent = (e: StorageEvent) => {
      if (e.key === "quiz_allow_review_all") {
        const newStatus = e.newValue === "true";
        setAvailableQuizzes((prev) =>
          prev.map((q) => ({ ...q, allowReview: newStatus }))
        );
        setMyAttempts((prev) =>
          prev.map((att) => ({ ...att, allowReview: newStatus }))
        );
        setReviewingAttempt((prev) =>
          prev ? { ...prev, allowReview: newStatus } : prev
        );
        setSubmittedResult((prev) =>
          prev ? { ...prev, allowReview: newStatus } : prev
        );
      } else if (e.key?.startsWith("quiz_allow_review_")) {
        const quizId = e.key.replace("quiz_allow_review_", "");
        const newStatus = e.newValue === "true";
        setAvailableQuizzes((prev) =>
          prev.map((q) =>
            q.id === quizId ? { ...q, allowReview: newStatus } : q
          )
        );
        setMyAttempts((prev) =>
          prev.map((att) =>
            att.quizId === quizId ? { ...att, allowReview: newStatus } : att
          )
        );
        setReviewingAttempt((prev) =>
          prev && prev.quizId === quizId
            ? { ...prev, allowReview: newStatus }
            : prev
        );
        setSubmittedResult((prev) =>
          prev && prev.quizId === quizId
            ? { ...prev, allowReview: newStatus }
            : prev
        );
      }
    };
    window.addEventListener("storage", handleStorageEvent);

    return () => {
      if (supabase && reviewChannel) {
        supabase.removeChannel(reviewChannel);
      }
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, [supabase]);

  // Timer effect when taking quiz
  useEffect(() => {
    let interval: any = null;
    if (activeTakingQuiz && !submittedResult) {
      interval = setInterval(() => {
        setQuizTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeTakingQuiz, submittedResult]);

  const handleStartQuiz = (quiz: StudentAvailableQuiz) => {
    const studentKey =
      user?.student_id ||
      user?.id_number ||
      user?.id ||
      user?.email ||
      user?.name ||
      "student";

    const lockStatus = getQuizLockStatus(quiz.id, studentKey);
    if (lockStatus.isLocked) {
      if (!lockStatus.unlockRequested) {
        const doRequest = window.confirm(
          `This quiz is locked due to exceeding tab-switching warnings (3/3 warnings).\n\nWould you like to send an unlock request to your instructor/admin now?`
        );
        if (doRequest) {
          requestQuizUnlock(
            quiz.id,
            studentKey,
            user?.name || user?.email || "Student",
            quiz.title
          );
          alert("Unlock request has been sent to your instructor/admin!");
        }
      } else {
        alert(
          "This quiz is locked. Your unlock request has already been submitted and is currently pending admin approval."
        );
      }
      return;
    }

    const existingAttempt = myAttempts.find((att) => att.quizId === quiz.id);
    if (existingAttempt) {
      setReviewingAttempt(existingAttempt);
      return;
    }
    const isGenericStudent = studentKey === "student" || studentKey === "unknown";
    const cacheKey = `quiz_student_qset_v4_${quiz.id}_${studentKey}`;
    let personalizedQuestions: QuizQuestionItem[] = [];

    if (!isGenericStudent) {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          personalizedQuestions = JSON.parse(cached);
        }
      } catch {
        personalizedQuestions = [];
      }
    }

    if (!Array.isArray(personalizedQuestions) || personalizedQuestions.length === 0) {
      let storedTopics: any[] | undefined = undefined;
      try {
        const rawTopics = localStorage.getItem(`quiz_chosen_topics_${quiz.id}`);
        if (rawTopics) {
          storedTopics = JSON.parse(rawTopics);
        }
      } catch {
        storedTopics = undefined;
      }

      const storedCategory = (localStorage.getItem(`quiz_category_${quiz.id}`) || undefined) as any;

      personalizedQuestions = generateStudentPersonalizedQuizQuestions(
        quiz.id,
        studentKey,
        quiz.topic,
        quiz.questions,
        storedTopics,
        storedCategory,
        quiz.title
      );

      if (!isGenericStudent) {
        try {
          localStorage.setItem(cacheKey, JSON.stringify(personalizedQuestions));
        } catch (err) {
          console.warn("Could not cache student quiz questionnaire:", err);
        }
      }
    }

    console.log(
      `[Quiz Personalization] Student "${studentKey}" loaded ${personalizedQuestions.length} questions for quiz "${quiz.title}" (${quiz.id})`
    );

    const activeQuiz: StudentAvailableQuiz = {
      ...quiz,
      questions: personalizedQuestions,
      questionsCount: personalizedQuestions.length,
    };

    setActiveTakingQuiz(activeQuiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizTimerSeconds(0);
    setSubmittedResult(null);
    setReviewingAttempt(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectAnswer = (questionId: string, choiceOrText: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: choiceOrText,
    }));
  };

  const handleSubmitQuiz = async () => {
    if (!activeTakingQuiz) return;

    const questions = activeTakingQuiz.questions;
    const answeredCount = Object.keys(selectedAnswers).filter(
      (k) => (selectedAnswers[k] || "").trim() !== ""
    ).length;

    if (answeredCount < questions.length) {
      const confirmSubmit = window.confirm(
        `You have answered ${answeredCount} of ${questions.length} questions. Do you want to submit your answers now?`
      );
      if (!confirmSubmit) return;
    }

    setIsSubmittingQuiz(true);
    try {
      let calculatedScore = 0;
      const detailedAnswers: QuizAnswerRecord[] = questions.map((q) => {
        const studentChoice = (selectedAnswers[q.id] || "").trim();
        const qType = q.questionType || "multiple_choice";
        let isRight = false;

        if (qType === "multiple_choice") {
          isRight =
            studentChoice.toUpperCase() === q.correctAnswer.toUpperCase();
        } else if (qType === "identification" || qType === "problem_solving") {
          const target = (q.correctAnswerText || q.optionA || "")
            .trim()
            .toLowerCase();
          const given = studentChoice.toLowerCase();
          isRight =
            given.length > 0 &&
            (given === target ||
              target.includes(given) ||
              given.includes(target) ||
              target.replace(/\s+/g, "") === given.replace(/\s+/g, ""));
        } else if (qType === "enumeration") {
          const target = (q.correctAnswerText || q.optionA || "")
            .trim()
            .toLowerCase();
          const given = studentChoice.toLowerCase();
          const items = target
            .split(/[\n,;]+/)
            .map((s) => s.replace(/^\d+\.\s*/, "").trim())
            .filter((s) => s.length > 2);
          const matched = items.filter((item) =>
            given.includes(item.toLowerCase())
          );
          isRight =
            items.length > 0
              ? matched.length / items.length >= 0.5
              : given.length > 0;
        }

        if (isRight) calculatedScore += 1;

        const correctDisplay =
          qType === "multiple_choice"
            ? q.correctAnswer
            : q.correctAnswerText || q.optionA;

        return {
          questionId: q.id,
          prompt: q.prompt,
          questionType: qType,
          selected: studentChoice,
          correct: correctDisplay,
          correctAnswerText: q.correctAnswerText || q.optionA,
          isCorrect: isRight,
          explanation: q.explanation || q.optionB,
          options: {
            A: q.optionA,
            B: q.optionB,
            C: q.optionC,
            D: q.optionD,
          },
        };
      });

      const ppi = activeTakingQuiz.pointsPerItem || 1;
      const totalEarnedPoints = calculatedScore * ppi;
      const totalPossiblePoints = questions.length * ppi;
      const pct =
        totalPossiblePoints > 0
          ? Math.round((totalEarnedPoints / totalPossiblePoints) * 100)
          : 0;
      const timeSpent = quizTimerSeconds;

      const studentName =
        user?.name?.trim() || user?.email?.split("@")[0] || "Student";
      const studentEmail = user?.email?.trim() || "";

      const submissionPayload = {
        student_name: studentName,
        student_email: studentEmail,
        answers: detailedAnswers,
      };

      let attemptId = Date.now().toString();

      if (supabase && user?.id) {
        try {
          await supabase.from("profiles").upsert(
            {
              id: user.id,
              name: studentName,
              email: studentEmail,
            },
            { onConflict: "id" }
          );
        } catch (profErr) {
          console.warn("Could not sync profile name:", profErr);
        }

        const { data: attemptData, error: attemptError } = await supabase
          .from("quiz_attempts")
          .insert([
            {
              quiz_id: activeTakingQuiz.id,
              user_id: user.id,
              score: totalEarnedPoints,
              total_questions: totalPossiblePoints,
              answers_json: JSON.stringify(submissionPayload),
              time_spent_seconds: timeSpent,
            },
          ])
          .select("id")
          .single();

        if (attemptError) {
          console.error("Error inserting quiz attempt:", attemptError);
        } else if (attemptData) {
          attemptId = attemptData.id;

          try {
            const submissionChannel = supabase.channel("quiz-submissions-broadcast");
            submissionChannel.subscribe((status) => {
              if (status === "SUBSCRIBED") {
                submissionChannel.send({
                  type: "broadcast",
                  event: "new-quiz-submission",
                  payload: {
                    id: attemptId,
                    studentName: studentName,
                    quizTitle: activeTakingQuiz.title,
                    score: totalEarnedPoints,
                    totalQuestions: totalPossiblePoints,
                    submittedAt: new Date().toISOString(),
                  },
                });
                setTimeout(() => submissionChannel.unsubscribe(), 1500);
              }
            });
          } catch (broadcastErr) {
            console.warn("Could not broadcast quiz submission:", broadcastErr);
          }
        }
      }

      // Automatically record score into Grading Sheet
      try {
        const rawGrading = localStorage.getItem("mathworkspace_grading_data");
        let gradingRecords = rawGrading ? JSON.parse(rawGrading) : [];
        if (!Array.isArray(gradingRecords) || gradingRecords.length === 0) {
          gradingRecords = [
            {
              subject: { id: "math-101", subjectCode: "MATH 101", offerNumber: "80062", subjectName: "Calculus with Analytic Geometry" },
              students: [],
              periods: {
                prelim: {
                  period: "prelim",
                  quizActivities: Array.from({ length: 10 }, (_, i) => ({
                    id: `quiz-act-101-${i + 1}-${Date.now()}`,
                    type: "quiz",
                    label: `Quiz ${i + 1}`,
                    maxScore: 0,
                    index: i,
                  })),
                  participationActivities: [],
                  examActivity: { id: "exam-101", type: "exam", label: "Exam", maxScore: 0, index: 0 },
                  scores: [],
                },
              },
            },
            {
              subject: { id: "math-102", subjectCode: "MATH 102", offerNumber: "80063", subjectName: "Integral Calculus" },
              students: [],
              periods: {
                prelim: {
                  period: "prelim",
                  quizActivities: Array.from({ length: 10 }, (_, i) => ({
                    id: `quiz-act-102-${i + 1}-${Date.now()}`,
                    type: "quiz",
                    label: `Quiz ${i + 1}`,
                    maxScore: 0,
                    index: i,
                  })),
                  participationActivities: [],
                  examActivity: { id: "exam-102", type: "exam", label: "Exam", maxScore: 0, index: 0 },
                  scores: [],
                },
              },
            },
          ];
        }

        // -------------------------------------------------------------
        // Strict Subject Matching: base on what is the subject for the quiz
        // e.g. MATH 101, MATH 102, or MATH 103 (from "Add Quiz" / assigned)
        // -------------------------------------------------------------
        const resolvedQuizSub = resolveQuizDesignatedSubject(activeTakingQuiz);
        let isFor103 = resolvedQuizSub === "MATH 103";
        let isFor102 = resolvedQuizSub === "MATH 102";
        let isFor101 = resolvedQuizSub === "MATH 101";

        if (!isFor103 && !isFor102 && !isFor101) {
          const userSubCode = (user?.subject_code || "").toLowerCase().trim();
          if (userSubCode.includes("103")) isFor103 = true;
          else if (userSubCode.includes("102")) isFor102 = true;
          else isFor101 = true;
        }

        let targetRec = gradingRecords.find((r: any) => {
          const subCode = (r.subject?.subjectCode || "").toLowerCase().trim();
          const subOffer = (r.subject?.offerNumber || "").toLowerCase().trim();
          const subId = (r.subject?.id || "").toLowerCase().trim();

          if (isFor103 && (subCode.includes("103") || subId.includes("103"))) {
            return true;
          }
          if (isFor102 && (subCode.includes("102") || subId.includes("102"))) {
            return true;
          }
          if (isFor101 && (subCode.includes("101") || subId.includes("101"))) {
            return true;
          }
          return false;
        });

        // If target is MATH 103 and doesn't exist yet, create it
        if (!targetRec && isFor103) {
          const new103 = {
            subject: {
              id: "math-103-" + Date.now(),
              subjectCode: "MATH 103",
              subjectName: "Linear Algebra",
              offerNumber: "80064",
              academicYear: "2025-2026",
              semester: "2nd Semester",
              section: "Section A",
              instructorName: "Instructor",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
            students: [],
            periods: {
              prelim: {
                period: "prelim",
                quizActivities: Array.from({ length: 10 }, (_, i) => ({
                  id: `quiz-act-103-${i + 1}-${Date.now()}`,
                  type: "quiz",
                  label: `Quiz ${i + 1}`,
                  maxScore: 0,
                  index: i,
                })),
                participationActivities: Array.from({ length: 5 }, (_, i) => ({
                  id: `part-act-103-${i + 1}-${Date.now()}`,
                  type: "participation",
                  label: `Class Participation ${i + 1}`,
                  maxScore: 0,
                  index: i,
                })),
                examActivity: { id: `exam-act-103-${Date.now()}`, type: "exam", label: "Exam", maxScore: 0, index: 0 },
                scores: [],
              },
              midterm: { period: "midterm", quizActivities: [], participationActivities: [], examActivity: { id: "exam", type: "exam", label: "Exam", maxScore: 0, index: 0 }, scores: [] },
              "semi-final": { period: "semi-final", quizActivities: [], participationActivities: [], examActivity: { id: "exam", type: "exam", label: "Exam", maxScore: 0, index: 0 }, scores: [] },
              final: { period: "final", quizActivities: [], participationActivities: [], examActivity: { id: "exam", type: "exam", label: "Exam", maxScore: 0, index: 0 }, scores: [] },
            },
          };
          gradingRecords.push(new103);
          targetRec = new103;
        }

        // If target is MATH 102 and doesn't exist yet, create it
        if (!targetRec && isFor102) {
          const new102 = {
            subject: {
              id: "math-102-" + Date.now(),
              subjectCode: "MATH 102",
              subjectName: "Integral Calculus",
              offerNumber: "80063",
              academicYear: "2025-2026",
              semester: "2nd Semester",
              section: "Section A",
              instructorName: "Instructor",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
            students: [],
            periods: {
              prelim: {
                period: "prelim",
                quizActivities: Array.from({ length: 10 }, (_, i) => ({
                  id: `quiz-act-102-${i + 1}-${Date.now()}`,
                  type: "quiz",
                  label: `Quiz ${i + 1}`,
                  maxScore: 0,
                  index: i,
                })),
                participationActivities: Array.from({ length: 5 }, (_, i) => ({
                  id: `part-act-102-${i + 1}-${Date.now()}`,
                  type: "participation",
                  label: `Class Participation ${i + 1}`,
                  maxScore: 0,
                  index: i,
                })),
                examActivity: { id: `exam-act-102-${Date.now()}`, type: "exam", label: "Exam", maxScore: 0, index: 0 },
                scores: [],
              },
              midterm: { period: "midterm", quizActivities: [], participationActivities: [], examActivity: { id: "exam", type: "exam", label: "Exam", maxScore: 0, index: 0 }, scores: [] },
              "semi-final": { period: "semi-final", quizActivities: [], participationActivities: [], examActivity: { id: "exam", type: "exam", label: "Exam", maxScore: 0, index: 0 }, scores: [] },
              final: { period: "final", quizActivities: [], participationActivities: [], examActivity: { id: "exam", type: "exam", label: "Exam", maxScore: 0, index: 0 }, scores: [] },
            },
          };
          gradingRecords.push(new102);
          targetRec = new102;
        }

        // Fallback to first record if not matched
        if (!targetRec) {
          targetRec = gradingRecords[0];
        }

        if (targetRec) {
          // 1. Ensure student exists in target record
          const resolvedStudentId = (
            user?.student_id ||
            user?.id_number ||
            `2026-${(user?.id || Date.now().toString()).slice(0, 5)}`
          ).toUpperCase();

          let studentObj = targetRec.students.find(
            (s: any) =>
              s.id === user?.id ||
              s.studentId === resolvedStudentId ||
              s.fullName.toLowerCase() === studentName.toLowerCase()
          );

          if (!studentObj) {
            studentObj = {
              id: user?.id || Date.now().toString(),
              studentNumber: String(targetRec.students.length + 1),
              studentId: resolvedStudentId,
              fullName: studentName,
            };
            targetRec.students.push(studentObj);
          }

          // 2. Resolve target grading period (prelim, midterm, semi-final, final)
          const rawQuizPeriod = activeTakingQuiz.period || localStorage.getItem(`quiz_period_${activeTakingQuiz.id}`) || "prelim";
          const quizPeriodKey: "prelim" | "midterm" | "semi-final" | "final" =
            rawQuizPeriod === "midterm" || rawQuizPeriod === "semi-final" || rawQuizPeriod === "final"
              ? rawQuizPeriod
              : "prelim";

          const targetPeriod = targetRec.periods[quizPeriodKey];
          if (!Array.isArray(targetPeriod.quizActivities) || targetPeriod.quizActivities.length === 0) {
            targetPeriod.quizActivities = Array.from({ length: 10 }, (_, i) => ({
              id: `quiz-act-${(targetRec.subject.subjectCode || 'sub').replace(/\s+/g, '')}-${quizPeriodKey}-${i + 1}`,
              type: "quiz",
              label: `Quiz ${i + 1}`,
              maxScore: 0,
              index: i,
            }));
          } else if (targetPeriod.quizActivities.length < 10) {
            while (targetPeriod.quizActivities.length < 10) {
              const nextIdx = targetPeriod.quizActivities.length;
              targetPeriod.quizActivities.push({
                id: `quiz-act-${(targetRec.subject.subjectCode || 'sub').replace(/\s+/g, '')}-${quizPeriodKey}-${nextIdx + 1}`,
                type: "quiz",
                label: `Quiz ${nextIdx + 1}`,
                maxScore: 0,
                index: nextIdx,
              });
            }
          } else if (targetPeriod.quizActivities.length > 10) {
            targetPeriod.quizActivities = targetPeriod.quizActivities.slice(0, 10);
          }

          // Ensure exactly 10 slots with proper labels Quiz 1..10
          targetPeriod.quizActivities.forEach((qAct: any, idx: number) => {
            qAct.index = idx;
            qAct.label = `Quiz ${idx + 1}`;
          });

          // 3. Slot determination:
          // A single quiz must ALWAYS map to its corresponding quiz slot.
          // - If title explicitly says "Quiz N" (e.g. Quiz 1, Quiz 2), use slot N - 1.
          // - Otherwise, match its position among quizzes for this subject (1st quiz = Quiz 1, 2nd quiz = Quiz 2).
          // - Retaking Quiz 1 will update Quiz 1 and will NEVER duplicate into Quiz 2!
          let quizSlotIdx = -1;

          // Check if this student already has a dedicated slot for this quiz ID
          const slotStorageKey = `quiz_slot_${studentObj.id}_${activeTakingQuiz.id}`;
          const rememberedSlot = localStorage.getItem(slotStorageKey);
          if (rememberedSlot !== null) {
            const parsed = parseInt(rememberedSlot, 10);
            if (!isNaN(parsed) && parsed >= 0 && parsed < targetPeriod.quizActivities.length) {
              quizSlotIdx = parsed;
            }
          }

          // Check if explicit quiz_number exists in localStorage or activeTakingQuiz
          if (quizSlotIdx === -1) {
            const storedQuizNum = localStorage.getItem(`quiz_number_${activeTakingQuiz.id}`);
            if (storedQuizNum) {
              const pNum = parseInt(storedQuizNum, 10);
              if (pNum >= 1 && pNum <= 10) {
                quizSlotIdx = pNum - 1;
              }
            } else if (activeTakingQuiz.quizNumber && activeTakingQuiz.quizNumber >= 1 && activeTakingQuiz.quizNumber <= 10) {
              quizSlotIdx = activeTakingQuiz.quizNumber - 1;
            }
          }

          // If title explicitly says "Quiz N" (e.g. Quiz 3), use that slot (if not already taken by another quiz)
          if (quizSlotIdx === -1) {
            const numMatch = (activeTakingQuiz.title || "").match(/quiz\s*(\d+)/i);
            if (numMatch && numMatch[1]) {
              const pNum = parseInt(numMatch[1], 10);
              if (pNum >= 1 && pNum <= 10) {
                quizSlotIdx = pNum - 1;
              }
            }
          }

          // If no explicit number in title, find its index among the subject's quizzes for THIS period
          if (quizSlotIdx === -1 && Array.isArray(availableQuizzes)) {
            const subjQuizzes = availableQuizzes.filter((q) => {
              const qPeriod = q.period || localStorage.getItem(`quiz_period_${q.id}`) || "prelim";
              if (qPeriod !== quizPeriodKey) return false;

              const qSub = (q.assignedSubject || q.subjectId || localStorage.getItem(`quiz_subject_code_${q.id}`) || "").toLowerCase();
              const qTopic = (q.topic || "").toLowerCase();
              const qTitle = (q.title || "").toLowerCase();
              if (isFor102) {
                return qSub.includes("102") || qTopic.includes("102") || qTitle.includes("102") || qTopic.includes("calculus-2") || qTopic.includes("integral");
              }
              return qSub.includes("101") || qTopic.includes("101") || qTitle.includes("101") || qTopic.includes("calculus-1") || qTopic.includes("differential") || (!qSub && !qTopic.includes("102"));
            });
            const qPos = subjQuizzes.findIndex((q) => q.id === activeTakingQuiz.id);
            if (qPos >= 0 && qPos < 10) {
              quizSlotIdx = qPos;
            }
          }

          // Default fallback: Always Quiz 1 (index 0)
          if (quizSlotIdx === -1) {
            quizSlotIdx = 0;
          }

          // Remember this slot for this quiz so retakes update the same slot
          try {
            localStorage.setItem(slotStorageKey, String(quizSlotIdx));
          } catch {}

          const targetActivity = targetPeriod.quizActivities[quizSlotIdx];
          if (targetActivity.maxScore < totalPossiblePoints || targetActivity.maxScore === 0) {
            targetActivity.maxScore = totalPossiblePoints;
          }

          // 4. Set student's score in the target constant quiz column
          if (!Array.isArray(targetPeriod.scores)) {
            targetPeriod.scores = [];
          }

          const existingScoreIdx = targetPeriod.scores.findIndex(
            (s: any) => s.studentId === studentObj.id && s.activityId === targetActivity.id
          );

          if (existingScoreIdx >= 0) {
            targetPeriod.scores[existingScoreIdx].score = totalEarnedPoints;
          } else {
            targetPeriod.scores.push({
              studentId: studentObj.id,
              activityId: targetActivity.id,
              score: totalEarnedPoints,
            });
          }

          // Ensure student is in the right subject (e.g. if quiz is for 102, clean from 101)
          if (isFor102) {
            gradingRecords.forEach((r: any) => {
              if (r.subject.id !== targetRec.subject.id && Array.isArray(r.students)) {
                const initLen = r.students.length;
                r.students = r.students.filter((st: any) => {
                  const nameLower = (st.fullName || "").toLowerCase();
                  if (st.id === studentObj.id) return false;
                  if (nameLower.includes("jeoff") || nameLower.includes("montebon")) return false;
                  return true;
                });
                if (r.students.length !== initLen) {
                  r.students.forEach((st: any, i: number) => { st.studentNumber = String(i + 1); });
                  if (Array.isArray(r.periods?.prelim?.scores)) {
                    r.periods.prelim.scores = r.periods.prelim.scores.filter((s: any) => s.studentId !== studentObj.id);
                  }
                }
              }
            });
          }

          localStorage.setItem("mathworkspace_grading_data", JSON.stringify(gradingRecords));
          window.dispatchEvent(new CustomEvent("mathworkspace-quiz-submitted"));
        }
      } catch (gradingSyncErr) {
        console.warn("Could not sync attempt to local grading sheet:", gradingSyncErr);
      }

      const isReviewAllowed = activeTakingQuiz?.allowReview !== undefined
        ? Boolean(activeTakingQuiz.allowReview)
        : localStorage.getItem(`quiz_allow_review_${activeTakingQuiz.id}`) === "true";

      const newAttempt: StudentQuizAttemptItem = {
        id: attemptId,
        quizId: activeTakingQuiz.id,
        quizTitle: activeTakingQuiz.title,
        topic: activeTakingQuiz.topic,
        score: totalEarnedPoints,
        totalQuestions: totalPossiblePoints,
        percentage: pct,
        passed: pct >= 60,
        timeSpentSeconds: timeSpent,
        submittedAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        answers: detailedAnswers,
        allowReview: isReviewAllowed,
      };

      setSubmittedResult(newAttempt);
      await fetchStudentQuizData();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Failed to submit quiz:", err);
      alert("An error occurred while submitting your quiz. Please try again.");
    } finally {
      setIsSubmittingQuiz(false);
    }
  };

  const handleExitQuiz = () => {
    if (!submittedResult) {
      setShowExitConfirmModal(true);
      return;
    }
    confirmExitAction();
  };

  const confirmExitAction = () => {
    setShowExitConfirmModal(false);
    setActiveTakingQuiz(null);
    setSubmittedResult(null);
    setSelectedAnswers({});
    setQuizTimerSeconds(0);
    setCurrentQuestionIndex(0);
    setActiveNav("quizzes");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReturnToQuizzes = () => {
    setShowExitConfirmModal(false);
    setActiveTakingQuiz(null);
    setSubmittedResult(null);
    setSelectedAnswers({});
    setQuizTimerSeconds(0);
    setCurrentQuestionIndex(0);
    setActiveNav("quizzes");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatSeconds = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (mins >= 60) {
      const hrs = Math.floor(mins / 60);
      const remMins = mins % 60;
      return `${hrs}h ${remMins}m`;
    }
    return `${mins}m ${secs < 10 ? "0" : ""}${secs}s`;
  };

  const userEnrolledSubject = useMemo(() => {
    // 1. Look up in localStorage grading data first (official enrolled subject from Excel upload)
    try {
      const rawGrading = localStorage.getItem("mathworkspace_grading_data");
      if (rawGrading) {
        const records = JSON.parse(rawGrading);
        if (Array.isArray(records)) {
          const userName = (user?.name || "").trim();
          const userId = user?.id;
          const userStudentId = ((user as any)?.student_id || (user as any)?.id_number || "").toString().trim().toUpperCase();
          for (const rec of records) {
            const found = rec.students?.some(
              (st: any) =>
                (userId && (st.id === userId || st.userId === userId)) ||
                (userStudentId && st.studentId && st.studentId.toString().trim().toUpperCase() === userStudentId) ||
                (userName && isSameStudentName(st.fullName, userName))
            );
            if (found && rec.subject?.subjectCode) {
              const code = rec.subject.subjectCode.toUpperCase().trim();
              const offer = (rec.subject.offerNumber || "").trim();
              return offer ? `${code} - ${offer}` : code;
            }
          }
        }
      }
    } catch {}

    // 2. Direct from user profile if available
    const subCode = (user as any)?.subject_code || (user as any)?.subjectCode;
    const offerNum = (user as any)?.offer_number || (user as any)?.offerNumber;
    if (subCode) {
      const code = String(subCode).toUpperCase().trim();
      const offer = offerNum ? String(offerNum).trim() : "";
      if (offer && !code.includes(offer)) {
        return `${code} - ${offer}`;
      }
      return code;
    }

    return "MATH 101";
  }, [user]);

  const enrolledAttempts = useMemo(() => {
    return myAttempts.filter((att) => {
      const parentQuiz = availableQuizzes.find((q) => q.id === att.quizId);
      if (parentQuiz && parentQuiz.designatedSubject) {
        return isSubjectMatch(parentQuiz.designatedSubject, userEnrolledSubject);
      }

      const t = (att.topic || "").toLowerCase();
      const title = (att.quizTitle || "").toLowerCase();
      const enrolled = (userEnrolledSubject || "").toUpperCase().trim();
      if (enrolled.includes("102")) {
        return (
          t.includes("calculus 2") ||
          t.includes("calculus-2") ||
          t.includes("integral") ||
          title.includes("102") ||
          title.includes("calculus 2")
        );
      }
      if (enrolled.includes("103")) {
        return (
          t.includes("linear") ||
          title.includes("103") ||
          title.includes("linear")
        );
      }
      if (enrolled.includes("GEC") || enrolled.includes("4")) {
        return (
          t.includes("modern") ||
          t.includes("gec") ||
          title.includes("gec") ||
          title.includes("modern")
        );
      }
      return (
        t.includes("calculus 1") ||
        t.includes("calculus-1") ||
        t.includes("differential") ||
        title.includes("101")
      );
    });
  }, [myAttempts, availableQuizzes, userEnrolledSubject]);

  const activeAttemptsForStats =
    enrolledAttempts.length > 0 ? enrolledAttempts : myAttempts;

  const totalQuizzesTaken = activeAttemptsForStats.length;
  const passedQuizzesCount = activeAttemptsForStats.filter((a) => a.passed).length;
  const studentAverageScore =
    totalQuizzesTaken > 0
      ? Math.round(
          activeAttemptsForStats.reduce((acc, a) => acc + a.score, 0) /
            totalQuizzesTaken
        )
      : 0;
  const studentHighestScore =
    totalQuizzesTaken > 0
      ? Math.max(...activeAttemptsForStats.map((a) => a.score))
      : 0;
  const totalTimeSpentSeconds = activeAttemptsForStats.reduce(
    (acc, a) => acc + a.timeSpentSeconds,
    0
  );

  const pendingAvailableQuizzes = useMemo(() => {
    // Filter available published quizzes to only the student's enrolled subject
    return availableQuizzes.filter((quiz) => {
      const notTaken = !myAttempts.some((attempt) => attempt.quizId === quiz.id);
      return notTaken && isSubjectMatch(quiz.designatedSubject, userEnrolledSubject);
    });
  }, [availableQuizzes, myAttempts, userEnrolledSubject]);

  const displayName =
    user?.name || (user?.email ? user.email.split("@")[0] : "Student");
  const userInitial = displayName.charAt(0).toUpperCase() || "S";
  const userAvatarUrl = user?.avatar_url || "";

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 18) return "Good afternoon";
    return "Good evening";
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };



  return (
    <div className="fixed inset-0 z-40 bg-[#F8F9FA] dark:bg-[#0B0F19] text-[#1F242D] dark:text-slate-100 font-sans antialiased flex overflow-hidden select-none animate-in fade-in duration-300">
      {/* 1. LEFT SIDEBAR */}
      <UserDashboardSidebar
        activeNav={activeNav}
        onNavigate={handleNavClick}
        mobileSidebarOpen={mobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
        isTopicCalculatorOpen={isTopicCalculatorOpen}
        onLogout={handleLogout}
      />

      {/* 2. MAIN VIEWPORT & TOPBAR */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#F8F9FA] dark:bg-[#0B0F19]">
        <UserDashboardHeader
          displayName={displayName}
          userInitial={userInitial}
          userAvatarUrl={userAvatarUrl}
          user={user}
          theme={theme}
          toggleTheme={toggleTheme}
          onNavigate={handleNavClick}
          onLogout={handleLogout}
          setMobileSidebarOpen={setMobileSidebarOpen}
          availableQuizzes={availableQuizzes}
          myAttempts={myAttempts}
          onStartQuiz={handleStartQuiz}
        />

        {/* Scrollable Main Content Container */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 flex flex-col gap-6">
          {/* VIEW A: DASHBOARD OVERVIEW */}
          {activeNav === "dashboard" && (
            <UserOverviewView
              greeting={greeting}
              displayName={displayName}
              user={user}
              onNavigate={handleNavClick}
              timeRange={timeRange}
              setTimeRange={setTimeRange}
              isTimeDropdownOpen={isTimeDropdownOpen}
              setIsTimeDropdownOpen={setIsTimeDropdownOpen}
              studentAverageScore={studentAverageScore}
              studentHighestScore={studentHighestScore}
              totalQuizzesTaken={totalQuizzesTaken}
              totalTimeSpentSeconds={totalTimeSpentSeconds}
              pendingAvailableQuizzes={pendingAvailableQuizzes}
              myAttempts={myAttempts}
              onStartQuiz={handleStartQuiz}
              onReviewAttempt={setReviewingAttempt}
              formatSeconds={formatSeconds}
              userEnrolledSubject={userEnrolledSubject}
            />
          )}

          {/* VIEW B: CALCULATORS HUB */}
          {activeNav === "calculators" && (
            <CalculatorsView
              activeCalculator={activeCalculator}
              setActiveCalculator={setActiveCalculator}
              calcCategoryFilter={calcCategoryFilter}
              setCalcCategoryFilter={setCalcCategoryFilter}
              calcSearchQuery={calcSearchQuery}
              setCalcSearchQuery={setCalcSearchQuery}
            />
          )}

          {/* VIEW C: TOPICS CURRICULUM */}
          {activeNav === "topics" && (
            <TopicsView
              activeTopic={activeTopic}
              setActiveTopic={setActiveTopic}
              topicCategoryFilter={topicCategoryFilter}
              setTopicCategoryFilter={setTopicCategoryFilter}
              selectedChapterFilter={selectedChapterFilter}
              setSelectedChapterFilter={setSelectedChapterFilter}
              topicSearchQuery={topicSearchQuery}
              setTopicSearchQuery={setTopicSearchQuery}
              isTopicCalculatorOpen={isTopicCalculatorOpen}
              setIsTopicCalculatorOpen={setIsTopicCalculatorOpen}
            />
          )}

          {/* VIEW D: ACTIVE QUIZ TAKING */}
          {activeTakingQuiz && !submittedResult && (
            <UserQuizTakingView
              activeTakingQuiz={activeTakingQuiz}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              selectedAnswers={selectedAnswers}
              onSelectAnswer={handleSelectAnswer}
              quizTimerSeconds={quizTimerSeconds}
              isSubmittingQuiz={isSubmittingQuiz}
              onExitQuiz={handleExitQuiz}
              onReturnToQuizzes={handleReturnToQuizzes}
              onSubmitQuiz={handleSubmitQuiz}
              formatSeconds={formatSeconds}
              studentKey={
                user?.student_id ||
                user?.id_number ||
                user?.id ||
                user?.email ||
                user?.name ||
                "student"
              }
              studentName={user?.name || user?.email || "Student"}
              onQuizLocked={(quizId) => {
                console.warn(`[Anti-Cheat] Quiz ${quizId} locked due to tab switching.`);
              }}
            />
          )}

          {/* VIEW E: QUIZ RESULTS SCREEN */}
          {submittedResult && (
            <UserQuizResultView
              submittedResult={submittedResult}
              onViewHistory={() => {
                setSubmittedResult(null);
                setActiveTakingQuiz(null);
                handleNavClick("quizzes-history");
              }}
              onAllQuizzes={() => {
                setSubmittedResult(null);
                setActiveTakingQuiz(null);
                handleNavClick("quizzes");
              }}
              formatSeconds={formatSeconds}
            />
          )}

          {/* VIEW F: AVAILABLE QUIZZES CATALOG */}
          {!activeTakingQuiz &&
            !submittedResult &&
            activeNav === "quizzes" && (
              <UserQuizzesView
                availableQuizzes={availableQuizzes}
                myAttempts={myAttempts}
                isLoadingQuizzes={isLoadingQuizzes}
                quizFilterTopic={quizFilterTopic}
                setQuizFilterTopic={setQuizFilterTopic}
                quizSearchTerm={quizSearchTerm}
                setQuizSearchTerm={setQuizSearchTerm}
                onStartQuiz={handleStartQuiz}
                onReviewAttempt={setReviewingAttempt}
                userEnrolledSubject={userEnrolledSubject}
                studentKey={
                  user?.student_id ||
                  user?.id_number ||
                  user?.id ||
                  user?.email ||
                  user?.name ||
                  "student"
                }
                studentName={user?.name || user?.email || "Student"}
              />
            )}

          {/* VIEW G: QUIZZES HISTORY */}
          {!activeTakingQuiz &&
            !submittedResult &&
            activeNav === "quizzes-history" && (
              <UserQuizHistoryView
                myAttempts={myAttempts}
                totalQuizzesTaken={totalQuizzesTaken}
                passedQuizzesCount={passedQuizzesCount}
                studentAverageScore={studentAverageScore}
                totalTimeSpentSeconds={totalTimeSpentSeconds}
                onNavigate={handleNavClick}
                onReviewAttempt={setReviewingAttempt}
                formatSeconds={formatSeconds}
              />
            )}

          {/* VIEW H: MY PROFILE */}
          {activeNav === "profile" && (
            <UserProfileView
              user={user}
              refreshUser={refreshUser}
              onNavigate={handleNavClick}
              userInitial={userInitial}
            />
          )}

          {/* VIEW I: STUDENT ATTENDANCE */}
          {!activeTakingQuiz && !submittedResult && activeNav === "attendance" && (
            <UserAttendanceView
              user={user}
              onNavigate={handleNavClick}
              userEnrolledSubject={userEnrolledSubject}
            />
          )}

          {/* EXIT QUIZ CONFIRMATION MODAL */}
          <UserExitQuizModal
            isOpen={showExitConfirmModal}
            onClose={() => setShowExitConfirmModal(false)}
            onConfirm={confirmExitAction}
          />

          {/* REVIEW PAST ATTEMPT MODAL */}
          <UserReviewAttemptModal
            reviewingAttempt={reviewingAttempt}
            onClose={() => setReviewingAttempt(null)}
          />
        </main>
      </div>
    </div>
  );
}
