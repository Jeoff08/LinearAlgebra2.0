import React from "react";
import {
  History,
  Archive,
  Search,
  ArchiveRestore,
  Trash2,
} from "lucide-react";
import type { ActivityItem } from "../../types/dashboard";

interface AdminHistoryQuizzesViewProps {
  activities: ActivityItem[];
  archivedActivityIds: string[];
  historyTab: "active" | "archived";
  setHistoryTab: (tab: "active" | "archived") => void;
  archivedSearchQuery: string;
  setArchivedSearchQuery: (q: string) => void;
  handleArchiveActivity: (id: string) => void;
  handleDeleteActivity: (id: string) => void;
  handleRestoreActivity: (id: string) => void;
}

export const getMonthYearLabel = (
  rawDateStr?: string,
  fallbackFormatted?: string
) => {
  if (rawDateStr) {
    const d = new Date(rawDateStr);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    }
  }
  if (fallbackFormatted) {
    const d = new Date(fallbackFormatted);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    }
  }
  return "Earlier Submissions";
};

export const AdminHistoryQuizzesView: React.FC<
  AdminHistoryQuizzesViewProps
> = ({
  activities,
  archivedActivityIds,
  historyTab,
  setHistoryTab,
  archivedSearchQuery,
  setArchivedSearchQuery,
  handleArchiveActivity,
  handleDeleteActivity,
  handleRestoreActivity,
}) => {
  const activeActivities = activities
    .filter((a) => !archivedActivityIds.includes(a.id))
    .sort((a, b) => a.studentName.localeCompare(b.studentName));
  const archivedActivities = activities.filter((a) =>
    archivedActivityIds.includes(a.id)
  );
  const filteredArchivedActivities = archivedActivities.filter((act) => {
    if (!archivedSearchQuery.trim()) return true;
    const q = archivedSearchQuery.toLowerCase().trim();
    const monthYear = getMonthYearLabel(
      act.rawDate,
      act.submittedAt
    ).toLowerCase();
    return (
      act.studentName.toLowerCase().includes(q) ||
      act.quizTitle.toLowerCase().includes(q) ||
      monthYear.includes(q)
    );
  });
  const archivedByMonthYear = filteredArchivedActivities.reduce((acc, act) => {
    const key = getMonthYearLabel(act.rawDate, act.submittedAt);
    if (!acc[key]) acc[key] = [];
    acc[key].push(act);
    return acc;
  }, {} as Record<string, ActivityItem[]>);

  // Sort each archived month/year group by student name alphabetically
  Object.keys(archivedByMonthYear).forEach((key) => {
    archivedByMonthYear[key].sort((a, b) =>
      a.studentName.localeCompare(b.studentName)
    );
  });

  return (
    <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
      {/* Header Banner & Tabs */}
      <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#166534] flex items-center justify-center text-white shrink-0 shadow-xs">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-slate-100 tracking-tight">
                Quiz Submission History
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 mt-1">
                Chronological record of student quiz attempts with archive &
                deletion controls.
              </p>
            </div>
          </div>

          {/* Active / Archived Tab Selector */}
          <div className="flex items-center gap-2 p-1 bg-gray-100 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 self-start sm:self-center">
            <button
              type="button"
              onClick={() => setHistoryTab("active")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                historyTab === "active"
                  ? "bg-white dark:bg-slate-700 text-[#166534] dark:text-emerald-400 shadow-xs"
                  : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
              }`}
            >
              <span>Active</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                  historyTab === "active"
                    ? "bg-[#166534] text-white"
                    : "bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-slate-300"
                }`}
              >
                {activeActivities.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setHistoryTab("archived")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                historyTab === "archived"
                  ? "bg-white dark:bg-slate-700 text-[#166534] dark:text-emerald-400 shadow-xs"
                  : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
              }`}
            >
              <Archive className="w-3.5 h-3.5" />
              <span>Archived</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                  historyTab === "archived"
                    ? "bg-[#166534] text-white"
                    : "bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-slate-300"
                }`}
              >
                {archivedActivities.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: ACTIVE SUBMISSIONS */}
      {historyTab === "active" && (
        <>
          {activeActivities.length === 0 ? (
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-[#166534] dark:text-emerald-400 mb-3">
                <History className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                No Active Submissions
              </h4>
              <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
                {archivedActivities.length > 0
                  ? "All submissions have been archived. You can view them in the Archived tab."
                  : "Student quiz attempts and scores will automatically appear here as they take quizzes."}
              </p>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                      <th className="pb-3 px-3">Student</th>
                      <th className="pb-3 px-3">Quiz Title</th>
                      <th className="pb-3 px-3">Points Earned</th>
                      <th className="pb-3 px-3">Submitted At</th>
                      <th className="pb-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                    {activeActivities.map((act) => {
                      return (
                        <tr
                          key={act.id}
                          className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150"
                        >
                          <td className="py-3.5 px-3 font-semibold text-[#111827] dark:text-slate-100">
                            {act.studentName}
                          </td>
                          <td className="py-3.5 px-3 text-xs text-[#4B5563] dark:text-slate-300">
                            {act.quizTitle}
                          </td>
                          <td className="py-3.5 px-3 text-xs font-bold text-[#166534] dark:text-emerald-400">
                            {act.score} / {act.totalQuestions} pts
                          </td>
                          <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                            {act.submittedAt}
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                type="button"
                                onClick={() => handleArchiveActivity(act.id)}
                                title="Archive submission (hide from active history)"
                                className="px-2.5 py-1 rounded-xl text-gray-600 dark:text-slate-300 hover:text-[#166534] dark:hover:text-emerald-300 bg-transparent hover:bg-emerald-50 dark:hover:bg-emerald-900/30 border border-gray-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-700/50 transition-all duration-150 cursor-pointer flex items-center gap-1 text-xs font-semibold shadow-xs"
                              >
                                <Archive className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">
                                  Archive
                                </span>
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteActivity(act.id)}
                                title="Delete submission permanently"
                                className="p-1.5 rounded-xl text-gray-400 dark:text-slate-400 hover:text-red-600 dark:hover:text-rose-300 bg-transparent hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-gray-200 dark:border-slate-700 hover:border-rose-200 dark:hover:border-rose-800/50 transition-all duration-150 cursor-pointer shadow-xs"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {/* TAB 2: ARCHIVED SUBMISSIONS GROUPED BY MONTH AND YEAR */}
      {historyTab === "archived" && (
        <>
          {/* Search Bar for Archived Submissions */}
          {archivedActivities.length > 0 && (
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-4 shadow-xs flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={archivedSearchQuery}
                  onChange={(e) => setArchivedSearchQuery(e.target.value)}
                  placeholder="Search archived by student name, quiz title, or month/year..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl text-xs font-semibold text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#166534] dark:focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-800 transition"
                />
              </div>
              {archivedSearchQuery && (
                <button
                  type="button"
                  onClick={() => setArchivedSearchQuery("")}
                  className="px-3 py-2 text-xs font-bold text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-xl transition cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          )}

          {archivedActivities.length === 0 ? (
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-500 dark:text-slate-400 mb-3">
                <Archive className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                No Archived Records
              </h4>
              <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
                When you click "Archive" on any active history entry, it will be
                categorized here grouped by Month and Year.
              </p>
            </div>
          ) : filteredArchivedActivities.length === 0 ? (
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-400 dark:text-slate-500 mb-3">
                <Search className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                No Matching Archived Records
              </h4>
              <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
                No archived records match "{archivedSearchQuery}". Try another
                keyword or clear search.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(archivedByMonthYear).map(
                ([monthYear, groupItems]) => (
                  <div
                    key={monthYear}
                    className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  >
                    {/* Month & Year Group Header */}
                    <div className="bg-[#FAFBFD] dark:bg-slate-800/80 border-b border-[#EAEBED] dark:border-slate-700 px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-emerald-950/50 border border-green-100 dark:border-emerald-800 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
                          <Archive className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-slate-100">
                            {monthYear}
                          </h3>
                          <span className="text-[10px] text-gray-500 dark:text-slate-400 font-medium">
                            Archived Submissions
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#166534] dark:text-emerald-400 bg-green-50 dark:bg-emerald-950/40 border border-green-100 dark:border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                        {groupItems.length} record
                        {groupItems.length === 1 ? "" : "s"}
                      </span>
                    </div>

                    {/* Group Items Table */}
                    <div className="p-6 overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                            <th className="pb-3 px-3">Student</th>
                            <th className="pb-3 px-3">Quiz Title</th>
                            <th className="pb-3 px-3">Points Earned</th>
                            <th className="pb-3 px-3">Submitted At</th>
                            <th className="pb-3 px-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                          {groupItems.map((act) => {
                            return (
                              <tr
                                key={act.id}
                                className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150"
                              >
                                <td className="py-3.5 px-3 font-semibold text-[#111827] dark:text-slate-100">
                                  {act.studentName}
                                </td>
                                <td className="py-3.5 px-3 text-xs text-[#4B5563] dark:text-slate-300">
                                  {act.quizTitle}
                                </td>
                                <td className="py-3.5 px-3 text-xs font-bold text-[#166534] dark:text-emerald-400">
                                  {act.score} / {act.totalQuestions} pts
                                </td>
                                <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                                  {act.submittedAt}
                                </td>
                                <td className="py-3.5 px-3 text-right">
                                  <div className="flex items-center justify-end gap-1.5">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleRestoreActivity(act.id)
                                      }
                                      title="Restore back to active history"
                                      className="px-2.5 py-1 rounded-xl text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 bg-transparent hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-700/60 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-150 cursor-pointer flex items-center gap-1 text-xs font-semibold shadow-xs"
                                    >
                                      <ArchiveRestore className="w-3.5 h-3.5" />
                                      <span>Restore</span>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleDeleteActivity(act.id)
                                      }
                                      title="Permanently delete from archive"
                                      className="p-1.5 rounded-xl text-gray-400 dark:text-slate-400 hover:text-red-600 dark:hover:text-rose-300 bg-transparent hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-gray-200 dark:border-slate-700 hover:border-rose-200 dark:hover:border-rose-800/50 transition-all duration-150 cursor-pointer shadow-xs"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
