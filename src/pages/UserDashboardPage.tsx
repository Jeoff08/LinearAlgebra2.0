import type { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { ArrowRight, BookOpen, Globe, GraduationCap } from "lucide-react";
import dashboardBg from "../assets/Dashboard BG User.png";

export default function UserDashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePublicClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sessionStorage.setItem("currentActiveNavTab", "home");
    window.dispatchEvent(new CustomEvent("navtabchange", { detail: "home" }));
    navigate("/?tab=home");
  };

  const handleTopicsClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sessionStorage.setItem("currentActiveNavTab", "topics");
    window.dispatchEvent(new CustomEvent("navtabchange", { detail: "topics" }));
    navigate("/?tab=topics");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4 pt-12 sm:pt-14">
      {/* Background Blackboard Image — full visibility of notebook, Calculus 2, and all formulas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={dashboardBg}
          alt="Linear Algebra & Calculus Dashboard Background"
          className="h-full w-full object-fill object-center select-none"
        />
        {/* Subtle dark ambient overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Center Floating Glass Card */}
      <div className="relative z-10 w-full max-w-[500px] px-2 py-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[28px] sm:rounded-[32px] border border-white/15 bg-[#171a21]/85 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(0,0,0,0.4)] flex flex-col items-center text-center"
        >
          {/* Crimson Sigma Badge */}
          <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#8E1B27] flex items-center justify-center shadow-lg shadow-[#8E1B27]/40 mb-3.5 transition-transform duration-200 hover:scale-105">
            <span className="font-serif text-2xl font-bold text-white leading-none select-none">
              Σ
            </span>
          </div>

          {/* Welcome User Title in pure white */}
          <h1
            className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold tracking-tight leading-tight mb-1 !text-white"
            style={{ color: "#ffffff" }}
          >
            Welcome, {user?.name || "Jeoff"}
          </h1>

          {/* Decorative Divider with Graduation Cap */}
          <div className="flex items-center justify-center gap-3 my-2.5 w-full max-w-[180px]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/30" />
            <GraduationCap className="w-4 h-4 text-[#D9B26A]/90" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/30" />
          </div>

          {/* Action Buttons Container */}
          <div className="mt-3.5 inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 p-1.5 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md shadow-inner">
            {/* Go to public page button */}
            <button
              type="button"
              onClick={handlePublicClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm active:scale-98"
            >
              <Globe className="w-4 h-4 text-white/90" />
              <span>Go to public page</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80" />
            </button>

            {/* Subtle Divider (on desktop) */}
            <div className="hidden sm:block w-[1px] h-5 bg-white/20" />

            {/* Browse All Topics button */}
            <button
              type="button"
              onClick={handleTopicsClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-white/10 text-[#E5BF77] hover:text-[#F3D190] text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer active:scale-98"
            >
              <BookOpen className="w-4 h-4 text-[#E5BF77]" />
              <span>Browse All Topics</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


