import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightLeft,
  X,
  CheckCircle2,
  Loader2,
  Check,
} from "lucide-react";
import type { StudentItem } from "../../types/dashboard";

interface AdminMoveBlockModalProps {
  editingBlockStudent: StudentItem | null;
  setEditingBlockStudent: (s: StudentItem | null) => void;
  isUpdatingStudentBlock: boolean;
  blockUpdateSuccessMessage: string | null;
  setBlockUpdateSuccessMessage: (msg: string | null) => void;
  targetBlockInput: string;
  setTargetBlockInput: (val: string) => void;
  availableBlocks: string[];
  handleSaveStudentBlock: (e: React.FormEvent) => void;
}

export const AdminMoveBlockModal: React.FC<AdminMoveBlockModalProps> = ({
  editingBlockStudent,
  setEditingBlockStudent,
  isUpdatingStudentBlock,
  blockUpdateSuccessMessage,
  setBlockUpdateSuccessMessage,
  targetBlockInput,
  setTargetBlockInput,
  availableBlocks,
  handleSaveStudentBlock,
}) => {
  if (!editingBlockStudent) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#EAEBED] flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#166534] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-[#166534]/20">
                <ArrowRightLeft className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111827]">
                  Move Student Block
                </h3>
                <p className="text-xs text-gray-500">
                  Change block assignment for this student
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                if (!isUpdatingStudentBlock) {
                  setEditingBlockStudent(null);
                  setBlockUpdateSuccessMessage(null);
                }
              }}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Student Info Card */}
          <div className="bg-[#F9FAFB] rounded-2xl p-4 my-4 border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {editingBlockStudent.avatarUrl ? (
                <img
                  src={editingBlockStudent.avatarUrl}
                  alt={editingBlockStudent.name}
                  className="w-9 h-9 rounded-xl object-cover shrink-0 border border-gray-200"
                />
              ) : (
                <div className="w-9 h-9 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {editingBlockStudent.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#111827]">
                  {editingBlockStudent.name}
                </span>
                <span className="text-xs text-gray-500">
                  {editingBlockStudent.email}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-gray-400 uppercase font-bold block">
                Current
              </span>
              {editingBlockStudent.block ? (
                <span className="inline-flex items-center px-2 py-0.5 rounded-md font-bold text-xs bg-[#166534]/10 text-[#166534] border border-[#166534]/20 uppercase">
                  Block {editingBlockStudent.block}
                </span>
              ) : (
                <span className="text-xs text-gray-400 italic">None</span>
              )}
            </div>
          </div>

          {/* Success Message Banner */}
          {blockUpdateSuccessMessage && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{blockUpdateSuccessMessage}</span>
            </div>
          )}

          {/* Block Selection Form */}
          <form
            onSubmit={handleSaveStudentBlock}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                Assign to Block (Letter or Name):
              </label>
              <input
                type="text"
                value={targetBlockInput}
                onChange={(e) =>
                  setTargetBlockInput(e.target.value.toUpperCase())
                }
                placeholder="e.g. A, B, C, D, or 1A..."
                maxLength={10}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-bold text-gray-800 tracking-wider placeholder:font-normal placeholder:tracking-normal focus:outline-none focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 uppercase transition"
                autoFocus
              />
              <span className="text-[11px] text-gray-500 mt-1 block">
                Type a block letter/name, or click any existing block below:
              </span>
            </div>

            {/* Quick Select Chips */}
            {availableBlocks.length > 0 && (
              <div>
                <span className="text-[11px] font-bold text-gray-600 block mb-1.5">
                  Existing Blocks in Class:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {availableBlocks.map((blk) => (
                    <button
                      type="button"
                      key={blk}
                      onClick={() => setTargetBlockInput(blk)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
                        targetBlockInput.trim().toUpperCase() === blk
                          ? "bg-[#166534] text-white border-[#166534] shadow-xs"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      Block {blk}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100 mt-2">
              <button
                type="button"
                onClick={() => setTargetBlockInput("")}
                disabled={isUpdatingStudentBlock || !targetBlockInput}
                className="text-xs font-semibold text-gray-500 hover:text-red-600 transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                Clear Block
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setEditingBlockStudent(null);
                    setBlockUpdateSuccessMessage(null);
                  }}
                  disabled={isUpdatingStudentBlock}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdatingStudentBlock}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold shadow-md shadow-[#166534]/20 transition cursor-pointer disabled:opacity-60"
                >
                  {isUpdatingStudentBlock ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Save & Move Block</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
