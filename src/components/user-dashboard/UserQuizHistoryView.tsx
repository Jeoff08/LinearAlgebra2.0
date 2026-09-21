import React from "react";
import { History } from "lucide-react";
import type { StudentQuizAttemptItem } from "../../types/dashboard";

interface UserQuizHistoryViewProps {
  myAttempts: StudentQuizAttemptItem[];
  totalQuizzesTaken: number;
  passedQuizzesCount: number;
  studentAverageScore: number;
  totalTimeSpentSeconds: number;
  onNavigate: (navKey: string) => void;
  onReviewAttempt: (att: StudentQuizAttemptItem) => void;
  formatSeconds: (sec: number) => string;
}

export const UserQuizHistoryView: React.FC<UserQuizHistoryViewProps> = ({
  myAttempts,
  totalQuizzesTaken,
  passedQuizzesCount,
  studentAverageScore,
  totalTimeSpentSeconds,
  onNavigate,
  onReviewAttempt,
  formatSeconds,
}) => {
  return (
    <div className="flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#166534] flex items-center justify-center text-white shrink-0 shadow-xs">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-slate-100 tracking-tight">
                Your Quiz Attempts History
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 mt-1">
                Review all previous quiz submissions, grading details, and track
                your performance over time.
              </p>
            </div>
          </div>

          <span className="inline-flex items-center rounded-full bg-[#166534]/10 dark:bg-emerald-950/40 border border-[#166534]/20 dark:border-emerald-800/40 px-3.5 py-1 text-xs font-bold text-[#166534] dark:text-emerald-400">
            {myAttempts.length} Total Submission
            {myAttempts.length === 1 ? "" : "s"}
          </span>
        </div>

        {/* Summary Stat Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-gray-100 dark:border-slate-700/60">
          <div className="bg-[#F8F9FA] dark:bg-slate-800/60 p-3 rounded-2xl border border-gray-100 dark:border-slate-700">
            <p className="text-[11px] text-gray-500 dark:text-slate-400 font-medium">
              Total Attempts
            </p>
            <p className="text-lg font-bold text-[#111827] dark:text-slate-100">
              {totalQuizzesTaken}
            </p>
          </div>
          <div className="bg-[#F8F9FA] dark:bg-slate-800/60 p-3 rounded-2xl border border-gray-100 dark:border-slate-700">
            <p className="text-[11px] text-gray-500 dark:text-slate-400 font-medium">
              Quizzes Passed
            </p>
            <p className="text-lg font-bold text-green-700 dark:text-emerald-400">
              {passedQuizzesCount}
            </p>
          </div>
          <div className="bg-[#F8F9FA] dark:bg-slate-800/60 p-3 rounded-2xl border border-gray-100 dark:border-slate-700">
            <p className="text-[11px] text-gray-500 dark:text-slate-400 font-medium">
              Average Score
            </p>
            <p className="text-lg font-bold text-[#166534] dark:text-emerald-400">
              {studentAverageScore} pts
            </p>
          </div>
          <div className="bg-[#F8F9FA] dark:bg-slate-800/60 p-3 rounded-2xl border border-gray-100 dark:border-slate-700">
            <p className="text-[11px] text-gray-500 dark:text-slate-400 font-medium">
              Time Practicing
            </p>
            <p className="text-lg font-bold text-gray-800 dark:text-slate-200">
              {formatSeconds(totalTimeSpentSeconds)}
            </p>
          </div>
        </div>
      </div>

      {/* History Table Card */}
      {myAttempts.length === 0 ? (
        <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#FFF1F2] dark:bg-slate-800 border border-[#FFE4E6] dark:border-slate-700 flex items-center justify-center text-[#166534] dark:text-emerald-400 mb-4">
            <History className="w-8 h-8 stroke-[1.8]" />
          </div>
          <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
            No Quiz Attempts Yet
          </h3>
          <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
            Take your first quiz from the catalog to build your study track record!
          </p>
          <button
            onClick={() => onNavigate("quizzes")}
            className="mt-4 px-4 py-2 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl cursor-pointer"
          >
            Browse Practice Quizzes
          </button>
        </div>
      ) : (
        <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                  <th className="pb-3 px-3">Quiz Title</th>
                  <th className="pb-3 px-3">Topic</th>
                  <th className="pb-3 px-3">Points</th>
                  <th className="pb-3 px-3">Time</th>
                  <th className="pb-3 px-3">Submitted</th>
                  <th className="pb-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                {myAttempts.map((att) => (
                  <tr
                    key={att.id}
                    className="hover:bg-[#F9FAFB] dark:hover:bg-slate-800/40 transition"
                  >
                    <td className="py-3.5 px-3 font-semibold text-[#111827] dark:text-slate-100">
                      {att.quizTitle}
                    </td>
                    <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-300">
                      <span className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 px-2 py-0.5 rounded-md font-medium">
                        {att.topic}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-xs font-bold text-[#166534] dark:text-emerald-400">
                      {att.score} / {att.totalQuestions} pts
                    </td>
                    <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                      {formatSeconds(att.timeSpentSeconds)}
                    </td>
                    <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                      {att.submittedAt}
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <button
                        type="button"
                        onClick={() => onReviewAttempt(att)}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-200 text-xs font-bold rounded-lg transition cursor-pointer"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserQuizHistoryView;
