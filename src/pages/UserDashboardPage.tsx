import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { supabase } from "../lib/supabase";

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
import { UserExitQuizModal } from "../components/user-dashboard/UserExitQuizModal";
import { UserReviewAttemptModal } from "../components/user-dashboard/UserReviewAttemptModal";
import { UserDashboardSidebar } from "../components/user-dashboard/UserDashboardSidebar";
import { UserDashboardHeader } from "../components/user-dashboard/UserDashboardHeader";

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
        // Fallback in case allow_review is not yet migrated in Supabase
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
    const existingAttempt = myAttempts.find((att) => att.quizId === quiz.id);
    if (existingAttempt) {
      setReviewingAttempt(existingAttempt);
      return;
    }

    setActiveTakingQuiz(quiz);
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
            const submissionChannel = supabase.channel("quiz-submissions");
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

  const totalQuizzesTaken = myAttempts.length;
  const passedQuizzesCount = myAttempts.filter((a) => a.passed).length;
  const studentAverageScore =
    totalQuizzesTaken > 0
      ? Math.round(
          myAttempts.reduce((acc, a) => acc + a.score, 0) / totalQuizzesTaken
        )
      : 0;
  const studentHighestScore =
    totalQuizzesTaken > 0 ? Math.max(...myAttempts.map((a) => a.score)) : 0;
  const totalTimeSpentSeconds = myAttempts.reduce(
    (acc, a) => acc + a.timeSpentSeconds,
    0
  );

  const pendingAvailableQuizzes = useMemo(() => {
    return availableQuizzes.filter(
      (quiz) => !myAttempts.some((attempt) => attempt.quizId === quiz.id)
    );
  }, [availableQuizzes, myAttempts]);

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
    <div className="fixed inset-0 z-40 bg-[#F8F9FA] dark:bg-[#0B0F19] text-[#1F242D] dark:text-slate-100 font-sans antialiased flex overflow-hidden select-none">
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
              onSubmitQuiz={handleSubmitQuiz}
              formatSeconds={formatSeconds}
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
