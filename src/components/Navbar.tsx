import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import {
  LogIn,
  UserPlus,
  LogOut,
  Home,
  Calculator,
  BookOpen,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<
    "home" | "dashboard" | "calculators" | "topics"
  >("home");
  const [currentView, setCurrentView] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab === "topics") return "categories";
    return "main";
  });

  useEffect(() => {
    const handlePageView = (e: Event) => {
      const customEvent = e as CustomEvent<{ view: string }>;
      if (customEvent.detail?.view) {
        setCurrentView(customEvent.detail.view);
      }
    };
    window.addEventListener("pageviewchange", handlePageView);
    return () => window.removeEventListener("pageviewchange", handlePageView);
  }, []);

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setActiveTab("dashboard");
    } else if (location.pathname.includes("calculator")) {
      setActiveTab("calculators");
    } else if (location.pathname.startsWith("/topics")) {
      setActiveTab("topics");
    } else if (location.pathname === "/") {
      const params = new URLSearchParams(location.search);
      const tabParam = params.get("tab");
      if (tabParam === "topics") {
        setActiveTab("topics");
      } else if (tabParam === "home") {
        setActiveTab("home");
      } else {
        const saved = sessionStorage.getItem("currentActiveNavTab");
        if (saved === "topics") {
          setActiveTab("topics");
        } else {
          setActiveTab("home");
        }
      }
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<
        "home" | "calculators" | "topics" | "dashboard"
      >;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
        sessionStorage.setItem("currentActiveNavTab", customEvent.detail);
      }
    };
    window.addEventListener("navtabchange", handleTabChange);
    return () => window.removeEventListener("navtabchange", handleTabChange);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab("home");
    setMobileMenuOpen(false);
    sessionStorage.setItem("currentActiveNavTab", "home");
    window.dispatchEvent(new CustomEvent("navtabchange", { detail: "home" }));
    navigate("/?tab=home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCalculatorsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab("calculators");
    setMobileMenuOpen(false);
    sessionStorage.setItem("currentActiveNavTab", "calculators");
    window.dispatchEvent(
      new CustomEvent("navtabchange", { detail: "calculators" }),
    );
    navigate("/calculator-hub");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTopicsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab("topics");
    setMobileMenuOpen(false);
    sessionStorage.setItem("currentActiveNavTab", "topics");
    window.dispatchEvent(new CustomEvent("navtabchange", { detail: "topics" }));
    navigate("/?tab=topics");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDashboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab("dashboard");
    setMobileMenuOpen(false);
    sessionStorage.setItem("currentActiveNavTab", "dashboard");
    window.dispatchEvent(
      new CustomEvent("navtabchange", { detail: "dashboard" }),
    );
    navigate("/dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Determine if we're on the dark background view (dark navbar needed)
  const isHeroPage =
    location.pathname === "/dashboard" ||
    location.pathname.startsWith("/topics") ||
    location.pathname.startsWith("/calculators") ||
    (location.pathname === "/" &&
      (activeTab === "home" ||
        currentView === "main" ||
        currentView === "categories" ||
        currentView === "topics-linear" ||
        currentView === "topics-calculus" ||
        currentView === "topics-calculus-2")) ||
    location.pathname === "/calculator-hub" ||
    location.pathname === "/calculus-calculators" ||
    location.pathname === "/calculator" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  const navLinkClass = (tab: string) =>
    `relative flex items-center gap-2 py-2 text-[0.9rem] font-semibold transition-colors duration-200 ${
      activeTab === tab
        ? isHeroPage
          ? "text-white"
          : "text-[#8B1A24]"
        : isHeroPage
          ? "text-white/70 hover:text-white"
          : "text-[#4B5563] hover:text-[#111827]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isHeroPage
          ? "bg-black/40 backdrop-blur-md border-b border-white/10"
          : "bg-white border-b border-[#E5E7EB] shadow-xs"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 sm:h-[4.5rem]">
        {/* Brand Logo — MathVerse style with tagline */}
        <Link
          to="/?tab=home"
          onClick={handleHomeClick}
          className="group flex items-center gap-3 no-underline"
        >
          {/* Sigma icon in crimson square */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B1824] shadow-sm transition-transform duration-200 group-hover:scale-105">
            <span className="font-serif text-xl font-bold text-white leading-none">
              Σ
            </span>
          </div>

          <div className="flex flex-col">
            <span
              className={`text-lg font-bold tracking-tight ${isHeroPage ? "text-white" : "text-[#111827]"}`}
            >
              Math
              <span
                className={isHeroPage ? "text-[#E05260]" : "text-[#8B1A24]"}
              >
                Workspace
              </span>
            </span>
            <span
              className={`text-[0.65rem] font-medium leading-none ${isHeroPage ? "text-white/70" : "text-[#9CA3AF]"}`}
            >
              Learn. Think. Create.
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            to="/?tab=home"
            onClick={handleHomeClick}
            className={navLinkClass("home")}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
            {activeTab === "home" && (
              <motion.span
                layoutId="activeNavUnderline"
                className={`absolute -bottom-[1.15rem] left-0 right-0 h-[2.5px] rounded-full ${
                  isHeroPage ? "bg-white" : "bg-[#8B1A24]"
                }`}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          <Link
            to="/calculator-hub"
            onClick={handleCalculatorsClick}
            className={navLinkClass("calculators")}
          >
            <Calculator className="w-4 h-4" />
            <span>Calculators</span>
            {activeTab === "calculators" && (
              <motion.span
                layoutId="activeNavUnderline"
                className={`absolute -bottom-[1.15rem] left-0 right-0 h-[2.5px] rounded-full ${
                  isHeroPage ? "bg-white" : "bg-[#8B1A24]"
                }`}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          <Link
            to="/?tab=topics"
            onClick={handleTopicsClick}
            className={navLinkClass("topics")}
          >
            <BookOpen className="w-4 h-4" />
            <span>Topics</span>
            {activeTab === "topics" && (
              <motion.span
                layoutId="activeNavUnderline"
                className="absolute -bottom-[1.15rem] left-0 right-0 h-[2.5px] rounded-full bg-[#E05260]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {isAuthenticated && (
            <Link
              to="/dashboard"
              onClick={handleDashboardClick}
              className={navLinkClass("dashboard")}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
              {activeTab === "dashboard" && (
                <motion.span
                  layoutId="activeNavUnderline"
                  className="absolute -bottom-[1.15rem] left-0 right-0 h-[2.5px] rounded-full bg-[#E05260]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          )}
        </nav>

        {/* Right Nav Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {!isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                  isHeroPage
                    ? "border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
                    : "border-[#D1D5DB] bg-white text-[#1F2937] hover:bg-[#F9FAFB] hover:border-[#9CA3AF]"
                }`}
              >
                <LogIn
                  className={`w-4 h-4 ${isHeroPage ? "text-white" : "text-[#6B7280]"}`}
                />
                <span>Login</span>
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-4 py-2 text-sm font-bold text-white shadow-sm transition-all duration-200 active:scale-95"
              >
                <UserPlus className="w-4 h-4" />
                <span>Register</span>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col text-right">
                <span
                  className={`text-xs font-medium ${
                    isHeroPage ? "text-white/80" : "text-[#374151]"
                  }`}
                >
                  {user?.name}
                </span>
                <span
                  className={`text-[0.65rem] font-bold uppercase tracking-wider ${
                    isHeroPage ? "text-[#E05260]" : "text-[#8B1A24]"
                  }`}
                >
                  {user?.role}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  navigate("/");
                  void logout();
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isHeroPage
                    ? "border-[#E05260]/60 bg-[#7B1824]/20 text-[#E05260] hover:bg-[#7B1824]/40 hover:border-[#E05260]"
                    : "bg-red-50 border-red-200 text-red-600 hover:bg-red-100 hover:border-red-300"
                }`}
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden flex items-center justify-center w-9 h-9 rounded-lg border transition-colors ${
              isHeroPage
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-[#E5E7EB] text-[#6B7280] hover:text-[#111827] hover:bg-[#F9FAFB]"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-4 py-3 space-y-1">
          <Link
            to="/?tab=home"
            onClick={handleHomeClick}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === "home"
                ? "bg-[#EFF6FF] text-[#2563EB]"
                : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
            }`}
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          {isAuthenticated && (
            <Link
              to="/dashboard"
              onClick={handleDashboardClick}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === "dashboard"
                  ? "bg-[#EFF6FF] text-[#2563EB]"
                  : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
          )}
          <Link
            to="/calculator-hub"
            onClick={handleCalculatorsClick}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === "calculators"
                ? "bg-[#EFF6FF] text-[#2563EB]"
                : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
            }`}
          >
            <Calculator className="w-4 h-4" />
            Calculators
          </Link>
          <Link
            to="/?tab=topics"
            onClick={handleTopicsClick}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === "topics"
                ? "bg-[#EFF6FF] text-[#2563EB]"
                : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Topics
          </Link>
        </div>
      )}
    </header>
  );
}
