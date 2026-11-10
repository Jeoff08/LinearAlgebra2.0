import React, { useState, useMemo } from "react";
import {
  HelpCircle,
  Search,
  Loader2,
  FileText,
  Trophy,
  CheckCircle2,
  Eye,
  Play,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import type {
  StudentAvailableQuiz,
  StudentQuizAttemptItem,
} from "../../types/dashboard";

interface UserQuizzesViewProps {
  availableQuizzes: StudentAvailableQuiz[];
  myAttempts: StudentQuizAttemptItem[];
  isLoadingQuizzes: boolean;
  quizFilterTopic: string;
  setQuizFilterTopic: (t: string) => void;
  quizSearchTerm: string;
  setQuizSearchTerm: (s: string) => void;
  onStartQuiz: (quiz: StudentAvailableQuiz) => void;
  onReviewAttempt: (attempt: StudentQuizAttemptItem) => void;
  userEnrolledSubject?: string;
}

export const UserQuizzesView: React.FC<UserQuizzesViewProps> = ({
  availableQuizzes,
  myAttempts,
  isLoadingQuizzes,
  quizFilterTopic,
  setQuizFilterTopic,
  quizSearchTerm,
  setQuizSearchTerm,
  onStartQuiz,
  onReviewAttempt,
  userEnrolledSubject = "MATH 101",
}) => {
  // Default filter to "enrolled" so the student immediately sees the quizzes designated for their enrolled course
  const [selectedSubjectFilter, setSelectedSubjectFilter] =
    useState<string>("enrolled");

  // Calculate counts for each subject
  const counts = useMemo(() => {
    const norm = (s?: string) => (s || "MATH 101").toUpperCase().trim();
    const enrolledNorm = norm(userEnrolledSubject);

    let enrolled = 0;
    let math101 = 0;
    let math102 = 0;
    let math103 = 0;

    availableQuizzes.forEach((q) => {
      const qSub = norm(q.designatedSubject);
      if (qSub === enrolledNorm) enrolled++;
      if (qSub === "MATH 101") math101++;
      if (qSub === "MATH 102") math102++;
      if (qSub === "MATH 103") math103++;
    });

    return {
      enrolled,
      math101,
      math102,
      math103,
      all: availableQuizzes.length,
    };
  }, [availableQuizzes, userEnrolledSubject]);

  const filteredAvailableQuizzes = useMemo(() => {
    const norm = (s?: string) => (s || "MATH 101").toUpperCase().trim();
    const enrolledNorm = norm(userEnrolledSubject);

    return availableQuizzes.filter((quiz) => {
      const quizSub = norm(quiz.designatedSubject);

      // Subject Filtering
      let matchesSubject = true;
      if (selectedSubjectFilter === "enrolled") {
        matchesSubject = quizSub === enrolledNorm;
      } else if (selectedSubjectFilter !== "all") {
        matchesSubject = quizSub === selectedSubjectFilter.toUpperCase().trim();
      }

      // Topic Filtering
      const matchesTopic =
        quizFilterTopic === "all" ||
        quiz.topic.toLowerCase() === quizFilterTopic.toLowerCase();

      // Search Term Filtering
      const term = quizSearchTerm.toLowerCase().trim();
      const matchesSearch =
        term === "" ||
        quiz.title.toLowerCase().includes(term) ||
        quiz.topic.toLowerCase().includes(term) ||
        quizSub.toLowerCase().includes(term);

      return matchesSubject && matchesTopic && matchesSearch;
    });
  }, [
    availableQuizzes,
    selectedSubjectFilter,
    userEnrolledSubject,
    quizFilterTopic,
    quizSearchTerm,
  ]);

  const getSubjectBadgeStyle = (subject?: string) => {
    const s = (subject || "MATH 101").toUpperCase();
    if (s.includes("102")) {
      return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800";
    }
    if (s.includes("103")) {
      return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800";
    }
    return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800";
  };

  const activeSubjectLabel =
    selectedSubjectFilter === "enrolled"
      ? `My Subject (${userEnrolledSubject})`
      : selectedSubjectFilter === "all"
      ? "All Subjects"
      : selectedSubjectFilter;

  return (
    <div className="flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-[#1E2D45] rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#166534] flex items-center justify-center text-white shrink-0 shadow-xs">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-[#F1F5F9] tracking-tight">
                  Practice Quizzes Catalog
                </h2>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                  <span>Enrolled: {userEnrolledSubject}</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#94A3B8] mt-1">
                Quizzes are designated based on your enrolled subject ({userEnrolledSubject}).
              </p>
            </div>
          </div>

          <span className="inline-flex items-center rounded-full bg-[#166534]/10 border border-[#166534]/20 px-3.5 py-1 text-xs font-bold text-[#166534] dark:text-emerald-400 self-start sm:self-center">
            {counts.enrolled} Available Quiz
            {counts.enrolled === 1 ? "" : "zes"}
          </span>
        </div>

        {/* 1. Academic Subject Badge */}
        <div className="mt-6 pt-5 border-t border-gray-100 dark:border-[#1E2D45]">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500 dark:text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#166534] dark:text-emerald-400" />
              <span>Enrolled Course:</span>
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {/* Active Enrolled Course Tag */}
            <div className="px-4 py-2 rounded-2xl text-xs font-black bg-[#166534] text-white shadow-sm flex items-center gap-2 whitespace-nowrap">
              <span>🎯 My Subject ({userEnrolledSubject})</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full font-bold bg-white/20 text-white">
                {counts.enrolled}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Topic Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-[#1E2D45]">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {[
              ["all", "All Topics"],
              ["Calculus 1", "Calculus 1"],
              ["Calculus 2", "Calculus 2"],
              ["Linear Algebra", "Linear Algebra"],
              ["Differential Equations", "Diff. Equations"],
            ].map(([topicKey, label]) => (
              <button
                key={topicKey}
                onClick={() => setQuizFilterTopic(topicKey)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition whitespace-nowrap cursor-pointer ${
                  quizFilterTopic === topicKey
                    ? "bg-[#166534] text-white shadow-xs font-bold"
                    : "bg-gray-100 dark:bg-[#1E2D45] text-gray-600 dark:text-[#94A3B8] hover:bg-gray-200 dark:hover:bg-[#263347]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={quizSearchTerm}
              onChange={(e) => setQuizSearchTerm(e.target.value)}
              placeholder="Search quiz title or topic..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#F9FAFB] dark:bg-[#1E2D45] border border-gray-200 dark:border-[#263347] rounded-xl text-xs text-[#111827] dark:text-[#E2E8F0] placeholder:text-gray-400 dark:placeholder:text-[#4B6080] focus:outline-none focus:border-[#166534] dark:focus:border-[#22C55E]"
            />
          </div>
        </div>
      </div>

      {/* Quizzes List Cards */}
      {isLoadingQuizzes ? (
        <div className="py-20 flex flex-col items-center justify-center text-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#166534] mb-3" />
          <p className="text-sm font-semibold text-gray-600 dark:text-slate-400">
            Loading available quizzes...
          </p>
        </div>
      ) : filteredAvailableQuizzes.length === 0 ? (
        <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-[#1E2D45] rounded-3xl p-12 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#FFF1F2] dark:bg-slate-800 border border-[#FFE4E6] dark:border-slate-700 flex items-center justify-center text-[#166534] dark:text-emerald-400 mb-4">
            <HelpCircle className="w-8 h-8 stroke-[1.8]" />
          </div>
          <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
            No Quizzes Found for {userEnrolledSubject}
          </h3>
          <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mt-1 max-w-sm">
            {quizSearchTerm || quizFilterTopic !== "all"
              ? "No quizzes match your search and topic filter. Try resetting your filter."
              : `There are currently no quizzes designated for ${userEnrolledSubject}. Check back soon!`}
          </p>
          {(quizSearchTerm || quizFilterTopic !== "all") && (
            <button
              onClick={() => {
                setQuizFilterTopic("all");
                setQuizSearchTerm("");
              }}
              className="mt-4 px-4 py-2 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredAvailableQuizzes.map((quiz) => {
            const designatedSub = quiz.designatedSubject || "MATH 101";
            const isEnrolledMatch =
              designatedSub.toUpperCase().trim() ===
              (userEnrolledSubject || "").toUpperCase().trim();

            return (
              <div
                key={quiz.id}
                className={`bg-white dark:bg-[#161F30] border rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${
                  isEnrolledMatch
                    ? "border-[#166534]/30 dark:border-emerald-800/60 ring-1 ring-[#166534]/10 dark:ring-emerald-900/20"
                    : "border-[#EAEBED] dark:border-[#1E2D45] hover:border-[#166534]/40 dark:hover:border-[#22C55E]/40"
                }`}
              >
                <div>
                  {/* Subject and Topic Badges Row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {/* Designated Subject Tag */}
                      <span
                        className={`text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full border shadow-xs ${getSubjectBadgeStyle(
                          designatedSub
                        )}`}
                      >
                        {designatedSub}
                      </span>

                      {/* Topic Tag */}
                      <span className="text-[11px] font-bold text-gray-700 dark:text-slate-300 bg-gray-100 dark:bg-[#1E2D45] px-2.5 py-0.5 rounded-full">
                        {quiz.topic}
                      </span>

                      {/* Grading Period Badge */}
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border shadow-xs ${
                        (quiz.period || "prelim") === "prelim"
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                          : (quiz.period || "prelim") === "midterm"
                          ? "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                          : (quiz.period || "prelim") === "semi-final"
                          ? "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                          : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                      }`}>
                        {quiz.period === "semi-final"
                          ? "Semi-Final"
                          : quiz.period === "midterm"
                          ? "Midterm"
                          : quiz.period === "final"
                          ? "Final"
                          : "Prelim"}
                      </span>

                      {/* Enrolled Match Highlight Tag */}
                      {isEnrolledMatch && (
                        <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-900/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                          <span>Enrolled Course</span>
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] text-gray-400 dark:text-[#4B6080] font-medium shrink-0">
                      {quiz.createdAt}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#111827] dark:text-[#F1F5F9] group-hover:text-[#166534] dark:group-hover:text-[#4ADE80] transition line-clamp-2">
                    {quiz.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-4 text-xs text-gray-600 dark:text-[#94A3B8] flex-wrap">
                    <div className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-gray-400" />
                      <span>{quiz.questionsCount} Questions</span>
                    </div>
                    <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800/40">
                      Total: {quiz.questionsCount * (quiz.pointsPerItem || 1)} pts
                    </span>
                    {quiz.pointsPerItem && quiz.pointsPerItem > 1 && (
                      <span className="text-[11px] text-gray-500 font-medium">
                        ({quiz.pointsPerItem} pts/item)
                      </span>
                    )}
                    {quiz.bestScore !== undefined && (
                      <div className="flex items-center gap-1 font-bold text-green-700 dark:text-emerald-400">
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        <span>Best: {quiz.bestScore}%</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-[#1E2D45] flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-[#4B6080] font-medium">
                    {quiz.attemptsCount > 0 ? (
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                      </span>
                    ) : (
                      "1 Attempt Allowed"
                    )}
                  </span>

                  {quiz.attemptsCount > 0 ? (
                    <button
                      onClick={() => {
                        const past = myAttempts.find(
                          (a) => a.quizId === quiz.id
                        );
                        if (past) onReviewAttempt(past);
                      }}
                      className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Result</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => onStartQuiz(quiz)}
                      className="px-4 py-2 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer group-hover:scale-102"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Start Quiz</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserQuizzesView;
