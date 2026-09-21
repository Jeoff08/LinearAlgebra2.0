import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface UserExitQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const UserExitQuizModal: React.FC<UserExitQuizModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="w-full max-w-md bg-white dark:bg-[#161F30] rounded-[28px] p-6 sm:p-7 shadow-2xl border border-gray-100 dark:border-[#1E2D45] flex flex-col items-center text-center"
          >
            {/* Warning Badge Icon */}
            <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200/60 dark:border-amber-700/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 shadow-xs">
              <AlertCircle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-extrabold text-[#111827] dark:text-[#F1F5F9] tracking-tight">
              Exit Quiz?
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-[#94A3B8] mt-2 leading-relaxed max-w-xs">
              Are you sure you want to exit? Your progress on this quiz will{" "}
              <strong className="text-green-600 dark:text-[#4ADE80] font-bold">
                not be saved
              </strong>
              .
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full mt-6 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl border border-gray-200 dark:border-[#263347] text-xs sm:text-sm font-bold text-gray-700 dark:text-[#CBD5E1] hover:bg-gray-50 dark:hover:bg-[#1E2D45] transition cursor-pointer"
              >
                Continue Quiz
              </button>
              <button
                type="button"
                onClick={onConfirm}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-green-600 to-[#166534] hover:opacity-95 text-white text-xs sm:text-sm font-bold shadow-md shadow-green-600/20 transition cursor-pointer"
              >
                Yes, Exit
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default UserExitQuizModal;
