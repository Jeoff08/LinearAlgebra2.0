import React from "react";
import {
  Users,
  Sliders,
  Search,
  Loader2,
  Edit,
  ArrowRightLeft,
} from "lucide-react";
import type { StudentItem } from "../../types/dashboard";

interface AdminViewStudentsViewProps {
  students: StudentItem[];
  isBlockCustomizationMode: boolean;
  setIsBlockCustomizationMode: React.Dispatch<React.SetStateAction<boolean>>;
  studentSearchQuery: string;
  setStudentSearchQuery: (q: string) => void;
  availableBlocks: string[];
  selectedStudentBlockFilter: string;
  setSelectedStudentBlockFilter: (b: string) => void;
  isLoadingQuizzes: boolean;
  filteredStudents: StudentItem[];
  onlineStudentKeys: Set<string>;
  handleOpenMoveBlockModal: (st: StudentItem) => void;
}

export const AdminViewStudentsView: React.FC<AdminViewStudentsViewProps> = ({
  students,
  isBlockCustomizationMode,
  setIsBlockCustomizationMode,
  studentSearchQuery,
  setStudentSearchQuery,
  availableBlocks,
  selectedStudentBlockFilter,
  setSelectedStudentBlockFilter,
  isLoadingQuizzes,
  filteredStudents,
  onlineStudentKeys,
  handleOpenMoveBlockModal,
}) => {
  return (
    <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
      {/* Header Banner */}
      <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#166534] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#166534]/20">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Enrolled Students Directory
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                Manage registered learners, monitor individual test scores, and
                track overall student performance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-center flex-wrap">
            <button
              type="button"
              onClick={() => setIsBlockCustomizationMode((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border shadow-xs ${
                isBlockCustomizationMode
                  ? "bg-[#166534] text-white border-[#166534] shadow-[#166534]/20"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-[#166534] hover:border-[#166534]/30"
              }`}
              title="Toggle customization controls for block assignments"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Customize</span>
              {isBlockCustomizationMode && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>

            <span className="inline-flex items-center rounded-full bg-[#166534]/10 border border-[#166534]/20 px-3.5 py-1 text-xs font-bold text-[#166534]">
              {students.length} Registered Student
              {students.length === 1 ? "" : "s"}
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={studentSearchQuery}
              onChange={(e) => setStudentSearchQuery(e.target.value)}
              placeholder="Search by student name or email..."
              className="w-full pl-10 pr-4 py-2 bg-[#F9FAFB] border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
            />
          </div>
          {studentSearchQuery && (
            <button
              onClick={() => setStudentSearchQuery("")}
              className="text-xs text-gray-500 hover:text-gray-800 underline cursor-pointer"
            >
              Clear search
            </button>
          )}
        </div>
      </div>

      {/* Block Filter Buttons — show when there are blocks */}
      {availableBlocks.length > 0 && (
        <div className="bg-white border border-[#166534]/20 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-gray-500 mr-1">
              Filter by Block:
            </span>
            <button
              onClick={() => setSelectedStudentBlockFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                selectedStudentBlockFilter === "all"
                  ? "bg-[#166534] text-white border-[#166534] shadow-sm"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              All Blocks
            </button>
            {availableBlocks.map((block) => (
              <button
                key={block}
                onClick={() => setSelectedStudentBlockFilter(block)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  selectedStudentBlockFilter === block
                    ? "bg-[#166534] text-white border-[#166534] shadow-sm"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                Block {block}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Students Table */}
      {isLoadingQuizzes ? (
        <div className="py-16 flex flex-col items-center justify-center text-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#166534] mb-3" />
          <p className="text-xs font-semibold text-gray-600">
            Loading student directory...
          </p>
        </div>
      ) : filteredStudents.length === 0 ? (
        <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center justify-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#166534] mb-4">
            <Users className="w-8 h-8 stroke-[1.8]" />
          </div>
          <h3 className="text-base font-bold text-[#111827]">
            No Students Found
          </h3>
          <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
            {studentSearchQuery
              ? `No students matching "${studentSearchQuery}". Try a different query.`
              : "No registered students found yet. Once students sign up, their profiles and performance will appear here."}
          </p>
        </div>
      ) : (
        <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                  <th className="pb-3 px-4">Student Name</th>
                  <th className="pb-3 px-4">Email Address</th>
                  <th className="pb-3 px-6 text-center w-28">Block</th>
                  <th className="pb-3 px-6 text-center">Joined Date</th>
                  <th className="pb-3 px-6 text-right">Last Active</th>
                  {isBlockCustomizationMode && (
                    <th className="pb-3 px-4 text-center">Action</th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                {filteredStudents.map((st) => {
                  const isOnline =
                    onlineStudentKeys.has(st.id.toLowerCase()) ||
                    onlineStudentKeys.has(st.email.toLowerCase());

                  return (
                    <tr
                      key={st.id}
                      className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150"
                    >
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            {st.avatarUrl ? (
                              <img
                                src={st.avatarUrl}
                                alt={st.name}
                                className="w-9 h-9 rounded-xl object-cover shrink-0 shadow-xs border border-gray-200"
                              />
                            ) : (
                              <div className="w-9 h-9 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                                {st.name.slice(0, 2).toUpperCase()}
                              </div>
                            )}
                            {isOnline && (
                              <span
                                title="Online now"
                                className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full shadow-xs animate-pulse ring-1 ring-emerald-500/40"
                              />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#111827] dark:text-slate-100">
                                {st.name}
                              </span>
                              {isOnline && (
                                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                  Online
                                </span>
                              )}
                            </div>
                            {st.studentId && (
                              <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400">
                                ID: {st.studentId}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-[#4B5563] dark:text-slate-300">
                        {st.email}
                      </td>
                      <td className="py-3.5 px-6 text-xs font-bold text-center">
                        {isBlockCustomizationMode ? (
                          <button
                            type="button"
                            onClick={() => handleOpenMoveBlockModal(st)}
                            className="group/blk inline-flex items-center gap-1 cursor-pointer transition hover:opacity-80"
                            title="Click to move/change student's block"
                          >
                            {st.block ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-bold text-xs bg-[#166534]/10 text-[#166534] border border-[#166534]/20 uppercase group-hover/blk:bg-[#166534] group-hover/blk:text-white transition">
                                {st.block}
                                <Edit className="w-2.5 h-2.5 opacity-60 group-hover/blk:opacity-100" />
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] text-gray-400 bg-gray-50 border border-dashed border-gray-300 hover:border-[#166534] hover:text-[#166534]">
                                <span>+ Assign</span>
                              </span>
                            )}
                          </button>
                        ) : st.block ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md font-bold text-xs bg-[#166534]/10 text-[#166534] border border-[#166534]/20 uppercase">
                            {st.block}
                          </span>
                        ) : (
                          <span className="text-gray-400 font-normal italic">
                            —
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-6 text-xs text-[#6B7280] dark:text-slate-400 text-center">
                        {st.joinedDate}
                      </td>
                      <td className="py-3.5 px-6 text-xs text-[#6B7280] dark:text-slate-400 text-right">
                        {st.lastActive}
                      </td>
                      {isBlockCustomizationMode && (
                        <td className="py-3.5 px-3 text-center">
                          <button
                            type="button"
                            onClick={() => handleOpenMoveBlockModal(st)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-[#166534] bg-[#166534]/10 hover:bg-[#166534] hover:text-white border border-[#166534]/20 transition cursor-pointer"
                            title="Move student to another block"
                          >
                            <ArrowRightLeft className="w-3 h-3" />
                            <span>Move Block</span>
                          </button>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
