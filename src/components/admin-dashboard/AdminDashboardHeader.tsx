import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Menu,
  X,
  Trash2,
  ChevronDown,
  LayoutDashboard,
  GraduationCap,
  Calculator,
  BookOpen,
  Moon,
  Sun,
  LogOut,
  ArrowLeft,
  ShieldAlert,
  CheckCircle2,
  Unlock,
} from "lucide-react";
import type { ActivityItem } from "../../types/dashboard";
import {
  getAdminUnlockNotifications,
  markAdminUnlockNotificationAsRead,
  deleteAdminUnlockNotification,
  adminUnlockQuiz,
  type AdminUnlockNotification,
} from "../../utils/quizLockManager";

interface AdminDashboardHeaderProps {
  recentSubmissionToast: any;
  setRecentSubmissionToast: (t: any) => void;
  unlockRequestToast?: any;
  setUnlockRequestToast?: (t: any) => void;
  handleNavClick: (nav: any) => void;
  setMobileSidebarOpen: (open: boolean) => void;
  isNotificationsOpen: boolean;
  setIsNotificationsOpen: (open: boolean) => void;
  isAdminDropdownOpen: boolean;
  setIsAdminDropdownOpen: (open: boolean) => void;
  unreadActivities: ActivityItem[];
  activeAdminNotifications: ActivityItem[];
  readNotificationIds: string[];
  markAllAdminNotificationsAsRead: () => void;
  handleDeleteAllAdminNotifications: () => void;
  handleAdminNotificationClick: (id: string) => void;
  handleDeleteAdminNotification: (id: string, e: React.MouseEvent) => void;
  activities: ActivityItem[];
  isStudentViewMode: boolean;
  setIsStudentViewMode: (val: boolean) => void;
  user: any;
  activeNav: string;
  theme: "light" | "dark";
  toggleTheme: (e: React.MouseEvent) => void;
  logout: () => Promise<void>;
  navigate: (path: string, opts?: any) => void;
}

export const AdminDashboardHeader: React.FC<AdminDashboardHeaderProps> = ({
  recentSubmissionToast,
  setRecentSubmissionToast,
  unlockRequestToast,
  setUnlockRequestToast,
  handleNavClick,
  setMobileSidebarOpen,
  isNotificationsOpen,
  setIsNotificationsOpen,
  isAdminDropdownOpen,
  setIsAdminDropdownOpen,
  unreadActivities,
  activeAdminNotifications,
  readNotificationIds,
  markAllAdminNotificationsAsRead,
  handleDeleteAllAdminNotifications,
  handleAdminNotificationClick,
  handleDeleteAdminNotification,
  activities,
  isStudentViewMode,
  setIsStudentViewMode,
  user,
  activeNav,
  theme,
  toggleTheme,
  logout,
  navigate,
}) => {
  const [adminUnlockNotifs, setAdminUnlockNotifs] = useState<
    AdminUnlockNotification[]
  >([]);

  const loadAdminNotifs = () => {
    setAdminUnlockNotifs(getAdminUnlockNotifications());
  };

  useEffect(() => {
    loadAdminNotifs();
    const handleUpdate = () => loadAdminNotifs();
    window.addEventListener("quiz_lock_updated", handleUpdate);
    window.addEventListener("quiz_unlock_requested", handleUpdate);
    return () => {
      window.removeEventListener("quiz_lock_updated", handleUpdate);
      window.removeEventListener("quiz_unlock_requested", handleUpdate);
    };
  }, []);

  const unreadUnlockCount = adminUnlockNotifs.filter((n) => !n.isRead).length;
  const totalUnreadCount = unreadActivities.length + unreadUnlockCount;
  return (
    <header className="sticky top-0 z-20 bg-[#F8F9FA]/95 dark:bg-[#0E1726]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between gap-4 border-b border-[#EAEBED] dark:border-slate-800 transition-colors">
      {/* Floating Realtime Submission Alert Toast */}
      <AnimatePresence>
        {recentSubmissionToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => {
              setRecentSubmissionToast(null);
              handleNavClick("history-quizzes");
            }}
            className="fixed top-5 right-6 z-[120] bg-white dark:bg-[#161F30] border border-[#166534]/20 dark:border-slate-700 rounded-2xl shadow-xl p-4 flex items-center gap-3.5 max-w-sm cursor-pointer hover:shadow-2xl transition"
          >
            <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs animate-bounce">
              <Bell className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#166534] dark:text-emerald-400 uppercase tracking-wide">
                  New Quiz Submission!
                </span>
                <span className="text-[10px] text-gray-400 dark:text-slate-500">
                  Just now
                </span>
              </div>
              <p className="text-xs font-bold text-gray-900 dark:text-slate-100 truncate">
                {recentSubmissionToast.studentName}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-slate-400 truncate">
                {recentSubmissionToast.quizTitle} • Score:{" "}
                <span className="font-bold text-[#166534] dark:text-emerald-400">
                  {recentSubmissionToast.score}/
                  {recentSubmissionToast.totalQuestions}
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setRecentSubmissionToast(null);
              }}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Realtime Unlock Request Alert Toast */}
      <AnimatePresence>
        {unlockRequestToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => {
              if (setUnlockRequestToast) setUnlockRequestToast(null);
              handleNavClick("published-quizzes");
            }}
            className="fixed top-20 right-6 z-[125] bg-white dark:bg-[#161F30] border-2 border-amber-500 rounded-2xl shadow-2xl p-4 flex items-center gap-3.5 max-w-sm cursor-pointer hover:shadow-2xl transition"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs animate-bounce">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                  Quiz Unlock Requested!
                </span>
                <span className="text-[10px] text-gray-400 dark:text-slate-500">
                  Just now
                </span>
              </div>
              <p className="text-xs font-bold text-gray-900 dark:text-slate-100 truncate mt-0.5">
                {unlockRequestToast.studentName}
              </p>
              <p className="text-[11px] text-gray-600 dark:text-slate-300 truncate">
                Quiz: {unlockRequestToast.quizTitle}
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (setUnlockRequestToast) setUnlockRequestToast(null);
              }}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileSidebarOpen(true)}
        className="lg:hidden p-2 rounded-xl border border-[#E2E4E8] dark:border-slate-700 bg-white dark:bg-[#161F30] text-[#4B5565] dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Right Header Controls (Notifications & Admin Profile) */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Notification Bell Button & Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen);
              setIsAdminDropdownOpen(false);
            }}
            className="relative p-2.5 rounded-xl text-gray-600 dark:text-slate-300 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-gray-100/80 dark:hover:bg-slate-800/80 transition-colors cursor-pointer border border-gray-200 dark:border-slate-700/80 shadow-2xs"
            title="Student Submission Notifications"
          >
            <Bell className="w-4 h-4" />
            {totalUnreadCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-amber-600 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-[#0E1726] shadow-xs">
                {totalUnreadCount > 9 ? "9+" : totalUnreadCount}
              </span>
            )}
          </button>

          <AnimatePresence>
            {isNotificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl shadow-xl z-40 overflow-hidden"
              >
                {/* Pending Student Unlock Requests Section */}
                {adminUnlockNotifs.length > 0 && (
                  <div className="p-3 bg-amber-50/90 dark:bg-amber-950/60 border-b border-amber-200 dark:border-amber-900/60 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black text-amber-900 dark:text-amber-200 uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                        Unlock Requests ({adminUnlockNotifs.length})
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setIsNotificationsOpen(false);
                          handleNavClick("published-quizzes");
                        }}
                        className="text-[10px] font-bold text-amber-700 dark:text-amber-400 hover:underline cursor-pointer"
                      >
                        Manage All →
                      </button>
                    </div>
                    {adminUnlockNotifs.map((req) => (
                      <div
                        key={req.id}
                        className="flex items-center justify-between gap-2 p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-amber-200/80 dark:border-slate-700 shadow-2xs"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-gray-900 dark:text-slate-100 truncate">
                            {req.studentName}
                          </p>
                          <p className="text-[10px] text-gray-500 dark:text-slate-400 truncate">
                            Quiz: {req.quizTitle}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              adminUnlockQuiz(req.quizId, req.studentKey, req.quizTitle);
                              deleteAdminUnlockNotification(req.id);
                              loadAdminNotifs();
                            }}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold rounded-lg shadow-xs transition flex items-center gap-1 cursor-pointer shrink-0"
                            title="Approve and unlock quiz for this student"
                          >
                            <Unlock className="w-3 h-3" />
                            <span>Approve</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              deleteAdminUnlockNotification(req.id);
                              loadAdminNotifs();
                            }}
                            className="p-1 hover:bg-amber-100 dark:hover:bg-slate-700 text-gray-400 hover:text-red-500 rounded-lg transition cursor-pointer"
                            title="Dismiss / remove unlock request"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-3.5 border-b border-gray-100 dark:border-slate-700/80 flex items-center justify-between bg-[#FAFBFD] dark:bg-slate-800/60">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-green-50 dark:bg-emerald-950/50 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-gray-900 dark:text-slate-100">
                      Student Submissions
                    </span>
                    {unreadActivities.length > 0 && (
                      <span className="px-2 py-0.5 bg-green-100 dark:bg-emerald-900/50 text-[#166534] dark:text-emerald-400 text-[10px] font-extrabold rounded-full">
                        {unreadActivities.length} new
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2.5">
                    {unreadActivities.length > 0 && (
                      <button
                        type="button"
                        onClick={markAllAdminNotificationsAsRead}
                        className="text-[11px] font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
                      >
                        Mark all read
                      </button>
                    )}
                    {activeAdminNotifications.length > 0 && (
                      <button
                        type="button"
                        onClick={handleDeleteAllAdminNotifications}
                        className="text-[11px] font-semibold text-gray-400 dark:text-slate-400 hover:text-green-600 dark:hover:text-emerald-400 transition cursor-pointer"
                        title="Clear all notifications"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-gray-100 dark:divide-slate-700/60">
                  {activeAdminNotifications.length === 0 ? (
                    <div className="p-8 text-center text-gray-400 dark:text-slate-500 text-xs">
                      No notifications right now.
                    </div>
                  ) : (
                    activeAdminNotifications.slice(0, 15).map((act) => {
                      const isUnread = !readNotificationIds.includes(act.id);
                      return (
                        <div
                          key={act.id}
                          onClick={() => handleAdminNotificationClick(act.id)}
                          className={`group/notif relative w-full text-left p-3.5 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition cursor-pointer flex items-start gap-3 ${
                            isUnread
                              ? "bg-emerald-50/40 dark:bg-emerald-950/30"
                              : "bg-white dark:bg-[#161F30]"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-2xs">
                            {act.studentName.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0 pr-6">
                            <div className="flex items-center justify-between gap-1">
                              <p className="text-xs font-bold text-gray-900 dark:text-slate-100 truncate">
                                {act.studentName}
                              </p>
                              {isUnread && (
                                <span className="w-2 h-2 rounded-full bg-[#166534] dark:bg-emerald-400 shrink-0" />
                              )}
                            </div>
                            <p className="text-[11px] text-gray-600 dark:text-slate-300 truncate mt-0.5">
                              Submitted{" "}
                              <span className="font-semibold text-gray-900 dark:text-slate-100">
                                {act.quizTitle}
                              </span>
                            </p>
                            <div className="flex items-center justify-between mt-1 text-[10px] text-gray-400 dark:text-slate-500">
                              <span className="font-bold text-[#166534] dark:text-emerald-400">
                                {act.score} / {act.totalQuestions} pts
                              </span>
                              <span>{act.submittedAt}</span>
                            </div>
                          </div>
                          {/* Individual Delete Button */}
                          <button
                            type="button"
                            onClick={(e) =>
                              handleDeleteAdminNotification(act.id, e)
                            }
                            className="opacity-60 group-hover/notif:opacity-100 p-1 text-gray-400 dark:text-slate-400 hover:text-green-600 dark:hover:text-emerald-400 hover:bg-green-50 dark:hover:bg-emerald-950/40 rounded-lg transition-all shrink-0 cursor-pointer"
                            title="Delete notification"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>

                {activities.length > 0 && (
                  <div className="p-2.5 bg-gray-50/70 dark:bg-slate-800/80 border-t border-gray-100 dark:border-slate-700 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setIsNotificationsOpen(false);
                        handleNavClick("history-quizzes");
                      }}
                      className="text-xs font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      View All in History →
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Admin Profile Details */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsAdminDropdownOpen(!isAdminDropdownOpen);
              setIsNotificationsOpen(false);
            }}
            className="flex items-center gap-2.5 py-1 px-2 rounded-2xl hover:bg-gray-100/70 dark:hover:bg-slate-800/60 transition-colors cursor-pointer group"
          >
            <div className="hidden sm:flex flex-col text-right leading-tight">
              <span className="text-sm font-bold text-[#1F242D] dark:text-slate-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                {isStudentViewMode ? "Student Learner" : user?.name || "User"}
              </span>
              <span className="text-[0.72rem] font-medium text-[#8C93A0] dark:text-slate-400">
                {isStudentViewMode ? "Learner View (Preview)" : "Administrator"}
              </span>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#166534]/25 border border-white/20 dark:border-slate-700 shrink-0">
              {isStudentViewMode
                ? "S"
                : user?.name
                ? user.name.charAt(0).toUpperCase()
                : "U"}
            </div>
            <ChevronDown className="w-4 h-4 text-[#717A8A] dark:text-slate-400 group-hover:text-[#1F242D] dark:group-hover:text-slate-200 transition-colors" />
          </button>

          {/* Admin Dropdown Menu */}
          <AnimatePresence>
            {isAdminDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl shadow-xl py-2 z-30"
              >
                <div className="px-4 py-2 border-b border-[#F0F1F3] dark:border-slate-700/80">
                  <p className="text-xs font-bold text-[#1F242D] dark:text-slate-100">
                    {isStudentViewMode
                      ? "Student Learner"
                      : user?.name || "User"}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <p className="text-[0.72rem] text-[#8C93A0] dark:text-slate-400 truncate">
                      {isStudentViewMode
                        ? "learner.preview@workspace.local"
                        : user?.email || "admin@gmail.com"}
                    </p>
                    {user?.block && (
                      <span className="inline-flex items-center shrink-0 rounded-md bg-[#166534]/10 dark:bg-emerald-950/40 border border-[#166534]/20 dark:border-emerald-700/50 px-1.5 py-0.5 text-[10px] font-bold text-[#166534] dark:text-emerald-400 leading-none">
                        Block {user.block.trim().toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>

                {isStudentViewMode ? (
                  <button
                    onClick={() => {
                      setIsStudentViewMode(false);
                      handleNavClick("dashboard");
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-[#166534] dark:text-emerald-400 hover:bg-[#F0FDF4] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
                    <span>Return to Admin Dashboard</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleNavClick("dashboard")}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold hover:bg-[#F6F7F9] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors ${
                        activeNav === "dashboard"
                          ? "text-[#166534] dark:text-emerald-400 font-bold bg-[#F0FDF4] dark:bg-slate-800"
                          : "text-[#4B5565] dark:text-slate-300"
                      }`}
                    >
                      <LayoutDashboard className="w-4 h-4 text-[#717A8A] dark:text-slate-400" />
                      <span>Admin Overview</span>
                    </button>
                    <button
                      onClick={() => handleNavClick("student-overview")}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold hover:bg-[#F6F7F9] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors ${
                        activeNav === "student-overview"
                          ? "text-[#166534] dark:text-emerald-400 font-bold bg-[#F0FDF4] dark:bg-slate-800"
                          : "text-[#4B5565] dark:text-slate-300"
                      }`}
                    >
                      <GraduationCap className="w-4 h-4 text-[#717A8A] dark:text-slate-400" />
                      <span>Student Overview</span>
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleNavClick("calculators")}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-[#4B5565] dark:text-slate-300 hover:bg-[#F6F7F9] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors"
                >
                  <Calculator className="w-4 h-4 text-[#717A8A] dark:text-slate-400" />
                  <span>Calculators Hub</span>
                </button>
                <button
                  onClick={() => handleNavClick("topics")}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-[#4B5565] dark:text-slate-300 hover:bg-[#F6F7F9] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#717A8A] dark:text-slate-400" />
                  <span>Curriculum Topics</span>
                </button>
                {/* Light / Dark Mode Toggle */}
                <button
                  type="button"
                  onClick={(e) => toggleTheme(e)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-[#4B5565] dark:text-slate-300 hover:bg-[#F6F7F9] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    {theme === "dark" ? (
                      <Moon className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Sun className="w-4 h-4 text-amber-500" />
                    )}
                    <span className="font-semibold">
                      {theme === "dark" ? "Dark Mode" : "Light Mode"}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-300">
                    {theme === "dark" ? "On" : "Off"}
                  </span>
                </button>
                <div className="my-1 border-t border-[#F0F1F3] dark:border-slate-700/80" />
                <button
                  onClick={async () => {
                    setIsAdminDropdownOpen(false);
                    await logout();
                    navigate("/login", { replace: true });
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 text-left cursor-pointer transition-colors"
                >
                  <LogOut className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span>Sign Out</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
