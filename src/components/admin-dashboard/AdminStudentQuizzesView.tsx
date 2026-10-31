import React from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  ClipboardList,
  FileQuestion,
  Star,
  Plus,
  FileText,
  ListOrdered,
  Users,
  Play,
  Lock,
  Eye,
} from "lucide-react";
import type { QuizItem } from "../../types/dashboard";

interface AdminStudentQuizzesViewProps {
  quizzes: QuizItem[];
  handleNavClick: (nav: any) => void;
  handleStartStudentPreviewQuiz: (quiz: QuizItem) => void;
  onToggleQuizReview?: (quizId: string, currentStatus?: boolean) => void;
}

export const AdminStudentQuizzesView: React.FC<
  AdminStudentQuizzesViewProps
> = ({ quizzes, handleNavClick, handleStartStudentPreviewQuiz, onToggleQuizReview }) => {
  return (
    <motion.div
      key="student-quizzes-view"
      initial={{ opacity: 0, y: 15, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.99 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 sm:p-7 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-16"
    >
      {/* Top Preview Banner */}
      <div className="bg-gradient-to-r from-[#166534]/10 via-[#15803d]/5 to-white border border-[#166534]/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center text-white shadow-md shadow-[#166534]/25 shrink-0 border border-white/20">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base sm:text-lg font-bold text-[#1F242D]">
                Quizzes & Practice
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#166534]/15 text-[#166534] border border-[#166534]/25">
                Student View
              </span>
            </div>
            <p className="text-xs text-[#6B7280] mt-0.5">
              Browse and preview all published quizzes as a student would see
              them
            </p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-[#ECEFF3] rounded-[20px] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_6px_16px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center">
            <ClipboardList className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-[#8C93A0]">
              Total Quizzes
            </span>
            <span className="text-xl font-extrabold text-[#1F242D] tracking-tight">
              {quizzes.length}
            </span>
          </div>
        </div>
        <div className="bg-white border border-[#ECEFF3] rounded-[20px] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_6px_16px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center">
            <FileQuestion className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-[#8C93A0]">
              Total Questions
            </span>
            <span className="text-xl font-extrabold text-[#1F242D] tracking-tight">
              {quizzes.reduce(
                (sum, q) =>
                  sum + (q.questionsCount || q.questions?.length || 0),
                0
              )}
            </span>
          </div>
        </div>
        <div className="bg-white border border-[#ECEFF3] rounded-[20px] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_6px_16px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center">
            <Star className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-[#8C93A0]">
              Avg Points/Item
            </span>
            <span className="text-xl font-extrabold text-[#1F242D] tracking-tight">
              {quizzes.length > 0
                ? Math.round(
                    quizzes.reduce(
                      (sum, q) => sum + (q.pointsPerItem || 1),
                      0
                    ) / quizzes.length
                  )
                : 0}{" "}
              pts
            </span>
          </div>
        </div>
      </div>

      {/* Quiz Cards Grid */}
      <div className="bg-white border border-[#ECEFF3] rounded-[24px] p-5 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <h3 className="text-base sm:text-lg font-bold text-[#1F242D]">
              Available Quizzes
            </h3>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#166534]/10 text-[#166534]">
              {quizzes.length} Published
            </span>
          </div>
        </div>

        {quizzes.length === 0 ? (
          <div className="py-16 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center mb-4">
              <HelpCircle className="w-9 h-9 text-[#166534] stroke-[1.5]" />
            </div>
            <h4 className="text-lg font-bold text-[#1F242D] mb-2">
              No Quizzes Published Yet
            </h4>
            <p className="text-sm text-[#6B7280] max-w-md mb-5">
              Students will see quizzes here once the admin publishes them via
              the Add Quiz section.
            </p>
            <button
              onClick={() => handleNavClick("add-quiz")}
              className="bg-[#166534] hover:bg-[#14532d] text-white text-sm font-bold px-5 py-2.5 rounded-xl cursor-pointer transition shadow-sm"
            >
              <Plus className="w-4 h-4 inline mr-1.5" />
              Create a Quiz
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="group relative bg-[#FAFBFD] hover:bg-white border border-[#ECEFF3] hover:border-[#166534]/30 rounded-2xl p-5 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(22,101,52,0.08)] flex flex-col justify-between"
              >
                {/* Quiz Header */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#166534]/10 text-[#166534]">
                        {quiz.topic}
                      </span>
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                        {quiz.questionType === "identification"
                          ? "Identification"
                          : "Multiple Choice"}
                      </span>
                      {onToggleQuizReview && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleQuizReview(quiz.id, quiz.allowReview);
                          }}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold transition cursor-pointer shadow-xs ${
                            quiz.allowReview
                              ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-300"
                              : "bg-amber-100 text-amber-800 hover:bg-amber-200 border border-amber-300"
                          }`}
                          title={
                            quiz.allowReview
                              ? "Review is ALLOWED: Students can view answers. Click to lock."
                              : "Review is LOCKED: Students cannot view answers. Click to allow."
                          }
                        >
                          {quiz.allowReview ? (
                            <>
                              <Eye className="w-2.5 h-2.5 text-emerald-700" />
                              <span>Review: Allowed</span>
                            </>
                          ) : (
                            <>
                              <Lock className="w-2.5 h-2.5 text-amber-700" />
                              <span>Review: Locked</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#166534]/8 group-hover:bg-[#166534]/15 flex items-center justify-center transition">
                      <FileText className="w-4 h-4 text-[#166534]" />
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-[#1F242D] group-hover:text-[#166534] transition mb-1.5 line-clamp-2">
                    {quiz.title}
                  </h4>

                  <p className="text-[11px] text-[#8C93A0] mb-4">
                    Created {quiz.createdAt}
                  </p>

                  {/* Quiz Info Row */}
                  <div className="flex items-center gap-3 text-[11px] text-[#6B7280] mb-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <ListOrdered className="w-3.5 h-3.5 text-[#166534]" />
                      <span className="font-semibold">
                        {quiz.questionsCount || quiz.questions?.length || 0}{" "}
                        Questions
                      </span>
                    </div>
                    <span className="text-[#D1D5DB]">•</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500" />
                      <span className="font-semibold">
                        {quiz.pointsPerItem || 1} pt/item
                      </span>
                    </div>
                    <span className="text-[#D1D5DB]">•</span>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-blue-500" />
                      <span className="font-semibold">
                        {quiz.attempts} attempts
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleStartStudentPreviewQuiz(quiz)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] hover:from-[#166534] hover:to-[#052e16] text-white text-xs font-bold transition-all duration-200 cursor-pointer shadow-[0_4px_12px_rgba(22,101,52,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] active:scale-[0.98] flex items-center justify-center gap-2 border border-white/10"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Start Quiz</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
