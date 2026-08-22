import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Sparkles, Calculator, LogIn, UserPlus, LogOut, Layers, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const isDark = theme === "dark";

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
      isActive
        ? "text-[#00D2FF] bg-sky-500/15 shadow-sm shadow-sky-500/20"
        : "text-slate-200 hover:text-[#00D2FF] hover:bg-sky-500/10"
    }`;

  return (
    <header className="relative z-30 mb-6 py-2 transition-colors duration-300 text-white">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <Link
          to="/"
          className="group flex items-center gap-3 no-underline"
        >
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D2FF] via-sky-400 to-[#1E293B] p-0.5 shadow-lg shadow-cyan-500/25 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-cyan-500/40">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0A101D] transition-colors group-hover:bg-[#0F172A]">
              <span className="font-mono text-base font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-[#00D2FF] via-cyan-200 to-white drop-shadow-[0_0_8px_rgba(0,210,255,0.7)]">
                λ
              </span>
            </div>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-sky-300">
                Linear Algebra Lab
              </span>
            </div>
            <h1 className="m-0 font-[Fraunces] text-lg sm:text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#00D2FF]">
              Math Workspace
            </h1>
          </div>
        </Link>

        {/* Navigation Actions */}
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <NavLink to="/" end className={navLinkClass}>
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Public</span>
          </NavLink>
          {isAuthenticated && (
            <NavLink to="/dashboard" className={navLinkClass}>
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>Dashboard</span>
            </NavLink>
          )}

          {/* Theme Toggle Button */}
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#00D2FF] hover:bg-white/20 transition-colors duration-200 shadow-sm"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            <div className="relative flex h-4 w-4 items-center justify-center">
              <Sun
                className={`absolute h-4 w-4 text-[#00D2FF] transition-all duration-300 ease-out transform ${
                  isDark
                    ? "rotate-0 scale-100 opacity-100 drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]"
                    : "rotate-90 scale-0 opacity-0 pointer-events-none"
                }`}
              />
              <Moon
                className={`absolute h-4 w-4 text-[#00D2FF] transition-all duration-300 ease-out transform ${
                  !isDark
                    ? "rotate-0 scale-100 opacity-100 drop-shadow-[0_0_6px_rgba(0,210,255,0.6)]"
                    : "-rotate-90 scale-0 opacity-0 pointer-events-none"
                }`}
              />
            </div>
          </motion.button>

          <div className="h-5 w-px mx-1 hidden sm:block bg-cyan-900/40" />

          {!isAuthenticated ? (
            <div className="flex items-center gap-2">
              <NavLink
                to="/login"
                className="px-3.5 py-1.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-[#00D2FF] hover:bg-white/5 transition-colors duration-200 flex items-center gap-1.5 rounded-xl"
              >
                <LogIn className="w-3.5 h-3.5 text-cyan-400" />
                <span>Login</span>
              </NavLink>

              <NavLink
                to="/register"
                className="relative inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#00D2FF] via-sky-500 to-[#2563EB] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-sky-500/30 transition-all duration-300 hover:scale-105 hover:from-[#38BDF8] hover:to-[#1D4ED8] hover:shadow-lg hover:shadow-cyan-500/40"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register</span>
              </NavLink>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs font-medium text-slate-200">
                  {user?.name}
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#00D2FF]">
                  {user?.role}
                </span>
              </div>
              <button
                type="button"
                onClick={() => { navigate("/"); void logout(); }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-rose-950/20 px-3 py-1.5 text-xs sm:text-sm font-semibold text-rose-400 transition-all duration-200 hover:bg-rose-900/30 hover:text-rose-300"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
