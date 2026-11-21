import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Bell,
  Sparkles,
  Trash2,
  ChevronDown,
  User,
  GraduationCap,
  BookOpen,
  Calculator,
  Sun,
  Moon,
  LogOut,
  CheckCircle2,
  X,
  Unlock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import type {
  StudentAvailableQuiz,
  StudentQuizAttemptItem,
} from "../../types/dashboard";
import {
  getStudentIdentifier,
  getStudentUnlockApprovedNotifications,
  markStudentUnlockNotificationAsRead,
  clearStudentUnlockNotifications,
  type StudentUnlockApprovedNotification,
} from "../../utils/quizLockManager";

interface UserDashboardHeaderProps {
  displayName: string;
  userInitial: string;
  userAvatarUrl?: string;
  user: any;
  theme: string;
  toggleTheme: (e?: React.MouseEvent) => void;
  onNavigate: (navKey: string) => void;
  onLogout: () => Promise<void>;
  setMobileSidebarOpen: (open: boolean) => void;
  availableQuizzes: StudentAvailableQuiz[];
  myAttempts: StudentQuizAttemptItem[];
  onStartQuiz: (quiz: StudentAvailableQuiz) => void;
}

export const UserDashboardHeader: React.FC<UserDashboardHeaderProps> = ({
  displayName,
  userInitial,
  userAvatarUrl,
  user,
  theme,
  toggleTheme,
  onNavigate,
  onLogout,
  setMobileSidebarOpen,
  availableQuizzes,
  myAttempts,
  onStartQuiz,
}) => {
  const navigate = useNavigate();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const [readQuizNotificationIds, setReadQuizNotificationIds] = useState<
    string[]
  >(() => {
    try {
      return JSON.parse(
        localStorage.getItem("student_read_quiz_notifications") || "[]"
      );
    } catch {
      return [];
    }
  });

  const [deletedQuizNotificationIds, setDeletedQuizNotificationIds] = useState<
    string[]
  >(() => {
    try {
      return JSON.parse(
        localStorage.getItem("student_deleted_quiz_notifications") || "[]"
      );
    } catch {
      return [];
    }
  });

  const activeStudentNotifications = availableQuizzes.filter(
    (q) => !deletedQuizNotificationIds.includes(q.id)
  );

  const unreadQuizzes = activeStudentNotifications.filter(
    (q) => !readQuizNotificationIds.includes(q.id)
  );

  const markAllStudentNotificationsAsRead = () => {
    const allIds = activeStudentNotifications.map((q) => q.id);
    setReadQuizNotificationIds(allIds);
    try {
      localStorage.setItem(
        "student_read_quiz_notifications",
        JSON.stringify(allIds)
      );
    } catch {}
  };

  const handleDeleteStudentNotification = (
    quizId: string,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    const updated = [...deletedQuizNotificationIds, quizId];
    setDeletedQuizNotificationIds(updated);
    try {
      localStorage.setItem(
        "student_deleted_quiz_notifications",
        JSON.stringify(updated)
      );
    } catch {}
  };

  const handleDeleteAllStudentNotifications = () => {
    const allIds = availableQuizzes.map((q) => q.id);
    setDeletedQuizNotificationIds(allIds);
    try {
      localStorage.setItem(
        "student_deleted_quiz_notifications",
        JSON.stringify(allIds)
      );
    } catch {}
  };

  const handleStudentNotificationClick = (quiz: StudentAvailableQuiz) => {
    if (!readQuizNotificationIds.includes(quiz.id)) {
      const updated = [...readQuizNotificationIds, quiz.id];
      setReadQuizNotificationIds(updated);
      try {
        localStorage.setItem(
          "student_read_quiz_notifications",
          JSON.stringify(updated)
        );
      } catch {}
    }
    setIsNotificationsOpen(false);
    onStartQuiz(quiz);
  };

  const studentKey = getStudentIdentifier(user);
  const [approvedUnlockNotifs, setApprovedUnlockNotifs] = useState<
    StudentUnlockApprovedNotification[]
  >([]);
  const [unlockedNotificationToast, setUnlockedNotificationToast] =
    useState<StudentUnlockApprovedNotification | null>(null);

  const loadApprovedNotifs = () => {
    setApprovedUnlockNotifs(getStudentUnlockApprovedNotifications(studentKey));
  };

  useEffect(() => {
    loadApprovedNotifs();

    const handleApproved = (e: any) => {
      loadApprovedNotifs();
      const detail = e.detail;
      if (
        !detail ||
        !detail.studentKey ||
        detail.studentKey.toLowerCase() === studentKey.toLowerCase()
      ) {
        setUnlockedNotificationToast({
          id: Date.now().toString(),
          quizId: detail?.quizId || "",
          studentKey: detail?.studentKey || studentKey,
          quizTitle: detail?.quizTitle || "Quiz",
          approvedAt: new Date().toISOString(),
          isRead: false,
        });
      }
    };

    const handleLockUpdated = () => {
      loadApprovedNotifs();
    };

    window.addEventListener("quiz_unlock_approved", handleApproved);
    window.addEventListener("quiz_lock_updated", handleLockUpdated);

    return () => {
      window.removeEventListener("quiz_unlock_approved", handleApproved);
      window.removeEventListener("quiz_lock_updated", handleLockUpdated);
    };
  }, [studentKey]);

  useEffect(() => {
    if (!unlockedNotificationToast) return;
    const timer = setTimeout(() => {
      setUnlockedNotificationToast(null);
    }, 7000);
    return () => clearTimeout(timer);
  }, [unlockedNotificationToast]);

  const unreadApprovedCount = approvedUnlockNotifs.filter((n) => !n.isRead).length;
  const totalStudentUnread = unreadQuizzes.length + unreadApprovedCount;

  return (
    <>
      {/* Floating Quiz Unlocked Realtime Toast Alert */}
      <AnimatePresence>
        {unlockedNotificationToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => {
              setUnlockedNotificationToast(null);
              onNavigate("quizzes");
            }}
            className="fixed top-5 right-6 z-[130] bg-white dark:bg-[#161F30] border-2 border-emerald-500 rounded-2xl shadow-2xl p-4 flex items-center gap-3.5 max-w-sm cursor-pointer hover:shadow-2xl transition"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs animate-bounce">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                  Quiz Unlocked by Admin!
                </span>
                <span className="text-[10px] text-gray-400 dark:text-slate-500">
                  Just now
                </span>
              </div>
              <p className="text-xs font-bold text-gray-900 dark:text-slate-100 truncate mt-0.5">
                {unlockedNotificationToast.quizTitle}
              </p>
              <p className="text-[11px] text-gray-600 dark:text-slate-300 truncate">
                Your unlock request was approved! Click to view in quizzes catalog.
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setUnlockedNotificationToast(null);
              }}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="h-16 bg-white dark:bg-[#161F30] border-b border-[#EAEBED] dark:border-slate-800 px-4 sm:px-8 flex items-center justify-between shrink-0 z-20">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Right Header Controls: Notifications & User Profile */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto">
          {/* Notification Bell Button & Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen);
                setIsUserDropdownOpen(false);
              }}
              className="relative p-2 rounded-xl text-gray-600 dark:text-slate-300 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-gray-100/80 dark:hover:bg-slate-800 transition cursor-pointer border border-gray-200 dark:border-slate-700 shadow-2xs"
              title="Quiz Notifications"
            >
              <Bell className="w-4 h-4" />
              {totalStudentUnread > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-emerald-600 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-[#161F30] shadow-xs">
                  {totalStudentUnread > 9 ? "9+" : totalStudentUnread}
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
                  className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl shadow-xl z-50 overflow-hidden"
                >
                  {/* Approved Quiz Unlocks Section */}
                  {approvedUnlockNotifs.length > 0 && (
                    <div className="p-3 bg-emerald-50/90 dark:bg-emerald-950/50 border-b border-emerald-200 dark:border-emerald-900/60 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-black text-emerald-900 dark:text-emerald-200 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Approved Quizzes ({approvedUnlockNotifs.length})
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            clearStudentUnlockNotifications(studentKey);
                            loadApprovedNotifs();
                          }}
                          className="text-[10px] font-semibold text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer"
                        >
                          Clear
                        </button>
                      </div>
                      {approvedUnlockNotifs.map((appr) => (
                        <div
                          key={appr.id}
                          onClick={() => {
                            markStudentUnlockNotificationAsRead(appr.id);
                            loadApprovedNotifs();
                            setIsNotificationsOpen(false);
                            const matchingQuiz = availableQuizzes.find(
                              (q) => q.id === appr.quizId
                            );
                            if (matchingQuiz) onStartQuiz(matchingQuiz);
                            else onNavigate("quizzes");
                          }}
                          className={`flex items-center justify-between gap-2 p-2.5 rounded-xl border transition cursor-pointer ${
                            !appr.isRead
                              ? "bg-white dark:bg-slate-800 border-emerald-300 dark:border-emerald-700 shadow-xs"
                              : "bg-white/60 dark:bg-slate-800/60 border-gray-200 dark:border-slate-700"
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-gray-900 dark:text-slate-100 truncate">
                                {appr.quizTitle}
                              </span>
                              {!appr.isRead && (
                                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                              )}
                            </div>
                            <p className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold truncate mt-0.5">
                              Unlocked by Instructor • Ready to take
                            </p>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-lg shrink-0">
                            Take Now →
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                <div className="p-3.5 border-b border-gray-100 dark:border-slate-700 flex items-center justify-between bg-[#FAFBFD] dark:bg-slate-800/60">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-green-50 dark:bg-emerald-950/40 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-gray-900 dark:text-slate-100">
                      New Quizzes Available
                    </span>
                    {unreadQuizzes.length > 0 && (
                      <span className="px-2 py-0.5 bg-green-100 dark:bg-emerald-950/60 text-[#166534] dark:text-emerald-300 text-[10px] font-extrabold rounded-full">
                        {unreadQuizzes.length} new
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2.5">
                    {unreadQuizzes.length > 0 && (
                      <button
                        type="button"
                        onClick={markAllStudentNotificationsAsRead}
                        className="text-[11px] font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
                      >
                        Mark all read
                      </button>
                    )}
                    {activeStudentNotifications.length > 0 && (
                      <button
                        type="button"
                        onClick={handleDeleteAllStudentNotifications}
                        className="text-[11px] font-semibold text-gray-400 hover:text-green-600 transition cursor-pointer"
                        title="Clear all notifications"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-gray-100 dark:divide-slate-700/60">
                  {activeStudentNotifications.length === 0 ? (
                    <div className="p-8 text-center text-gray-400 text-xs">
                      No notifications right now.
                    </div>
                  ) : (
                    activeStudentNotifications.slice(0, 15).map((quiz) => {
                      const isUnread = !readQuizNotificationIds.includes(
                        quiz.id
                      );
                      const userAttemptsOnThis = myAttempts.filter(
                        (a) => a.quizId === quiz.id
                      );
                      const isCompleted = userAttemptsOnThis.length > 0;

                      return (
                        <div
                          key={quiz.id}
                          onClick={() => handleStudentNotificationClick(quiz)}
                          className={`group/notif relative w-full text-left p-3.5 hover:bg-gray-50 dark:hover:bg-slate-800/60 transition cursor-pointer flex items-start gap-3 ${
                            isUnread
                              ? "bg-emerald-50/40 dark:bg-emerald-950/30"
                              : "bg-white dark:bg-[#161F30]"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-xl bg-green-100 dark:bg-emerald-900/40 text-[#166534] dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0 pr-6">
                            <div className="flex items-center justify-between gap-1">
                              <p className="text-xs font-bold text-gray-900 dark:text-slate-100 truncate">
                                {quiz.title}
                              </p>
                              {isUnread && (
                                <span className="w-2 h-2 rounded-full bg-[#166534] dark:bg-emerald-400 shrink-0" />
                              )}
                            </div>
                            <p className="text-[11px] text-gray-500 dark:text-slate-400 truncate mt-0.5">
                              {quiz.designatedSubject ? `${quiz.designatedSubject} • ` : ""}{quiz.topic} • {quiz.questionsCount} items (
                              {quiz.pointsPerItem || 1} pts/item)
                            </p>
                            <div className="flex items-center justify-between mt-1 text-[10px]">
                              <span className="text-gray-400 dark:text-slate-500">
                                {quiz.createdAt}
                              </span>
                              {isCompleted ? (
                                <span className="font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                                  Completed
                                </span>
                              ) : (
                                <span className="font-bold text-[#166534] dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                                  Take Quiz →
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) =>
                              handleDeleteStudentNotification(quiz.id, e)
                            }
                            className="opacity-60 group-hover/notif:opacity-100 p-1 text-gray-400 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700/80 rounded-lg transition-all shrink-0 cursor-pointer"
                            title="Delete notification"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>

                {availableQuizzes.length > 0 && (
                  <div className="p-2.5 bg-gray-50/70 dark:bg-slate-800/60 border-t border-gray-100 dark:border-slate-700 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setIsNotificationsOpen(false);
                        onNavigate("quizzes");
                      }}
                      className="text-xs font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      View All Quizzes →
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Profile Pill & Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsUserDropdownOpen(!isUserDropdownOpen);
              setIsNotificationsOpen(false);
            }}
            className="flex items-center gap-2.5 cursor-pointer group py-1 pl-1 pr-1.5 rounded-xl hover:bg-gray-100/70 dark:hover:bg-slate-800 transition"
          >
            <div className="flex flex-col text-right hidden sm:flex leading-tight">
              <span className="text-xs font-bold text-[#1F242D] dark:text-slate-100">
                {displayName}
              </span>
              <div className="flex items-center justify-end gap-1.5">
                <span className="text-[11px] font-medium text-[#8C93A0] dark:text-slate-400">
                  Student
                </span>
              </div>
            </div>

            {userAvatarUrl ? (
              <img
                src={userAvatarUrl}
                alt={displayName}
                className="w-9 h-9 rounded-full object-cover shadow-xs border border-gray-200 dark:border-slate-700"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-[#166534] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                {userInitial}
              </div>
            )}

            <ChevronDown className="w-3.5 h-3.5 text-[#8C93A0] group-hover:text-[#1F242D] dark:group-hover:text-slate-100 transition-transform" />
          </button>

          {/* Profile Dropdown Menu */}
          <AnimatePresence>
            {isUserDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-[#1E293B] rounded-2xl border border-[#EAEBED] dark:border-slate-700 shadow-xl p-1.5 z-50 flex flex-col gap-1"
              >
                <div className="px-3 py-2 border-b border-gray-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-gray-800 dark:text-gray-100">
                    {displayName}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                      {user?.email || "student@mathworkspace.edu"}
                    </p>
                    {user?.block && (
                      <span className="inline-flex items-center shrink-0 rounded-md bg-[#166534]/10 border border-[#166534]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#166534] dark:text-emerald-400 leading-none">
                        Block {user.block.trim().toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsUserDropdownOpen(false);
                    onNavigate("profile");
                  }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-left cursor-pointer transition-colors"
                >
                  <User className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    My Profile
                  </span>
                </button>

                <button
                  onClick={() => {
                    setIsUserDropdownOpen(false);
                    navigate("/?tab=home");
                  }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-left cursor-pointer transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span>Public Home</span>
                </button>

                <button
                  onClick={() => {
                    setIsUserDropdownOpen(false);
                    onNavigate("topics");
                  }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-left cursor-pointer transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span>Browse Curriculum</span>
                </button>

                <button
                  onClick={() => {
                    setIsUserDropdownOpen(false);
                    onNavigate("calculators");
                  }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-left cursor-pointer transition-colors"
                >
                  <Calculator className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span>Math Calculators</span>
                </button>

                {/* Light / Dark Mode Toggle Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    toggleTheme(e);
                  }}
                  className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-left cursor-pointer transition-colors"
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
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    {theme === "dark" ? "On" : "Off"}
                  </span>
                </button>

                <div className="h-[1px] bg-gray-100 dark:bg-gray-800 my-0.5" />

                <button
                  onClick={async () => {
                    setIsUserDropdownOpen(false);
                    await onLogout();
                  }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 text-left cursor-pointer transition-colors"
                >
                  <LogOut className="w-4 h-4 text-red-600" />
                  <span>Sign Out</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  </>
);
};

export default UserDashboardHeader;
