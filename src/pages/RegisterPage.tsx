import { useState, useEffect, useMemo, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import {
  UserPlus,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  BookOpen,
  Hash,
  CheckCircle2,
  LogIn,
  Check,
  ChevronRight,
  AlertCircle,
  LayoutGrid,
} from "lucide-react";
import { isSameStudentName } from "../utils/studentMatching";

export default function RegisterPage() {
  const { register, isAuthenticated, loading, user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [block, setBlock] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [offerNumber, setOfferNumber] = useState("");
  const [availableSubjects, setAvailableSubjects] = useState<
    Array<{ subjectCode: string; offerNumber: string; subjectName: string }>
  >([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [rosterMatchNotice, setRosterMatchNotice] = useState<string | null>(null);

  // Live input validations
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isNameValid = name.trim().length >= 3;
  const isIdValid = studentId.trim().length >= 4;

  // Dynamic Password Strength Calculator
  const passwordStrength = useMemo(() => {
    if (!password) return { score: 0, label: "", color: "bg-gray-200" };
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    switch (score) {
      case 1:
        return { score: 1, label: "Weak", color: "bg-red-500", text: "text-red-600" };
      case 2:
        return { score: 2, label: "Fair", color: "bg-amber-500", text: "text-amber-600" };
      case 3:
        return { score: 3, label: "Good", color: "bg-emerald-500", text: "text-emerald-600" };
      case 4:
        return { score: 4, label: "Strong & Secure", color: "bg-[#166534]", text: "text-[#166534] font-bold" };
      default:
        return { score: 0, label: "Too short", color: "bg-red-400", text: "text-red-500" };
    }
  }, [password]);

  const checkRosterMatch = (idVal: string, nameVal: string) => {
    try {
      const raw = localStorage.getItem("mathworkspace_grading_data");
      if (!raw) return;
      const records = JSON.parse(raw);
      if (!Array.isArray(records)) return;

      const cleanId = idVal.trim().toUpperCase();
      const cleanName = nameVal.trim();

      for (const rec of records) {
        if (Array.isArray(rec.students)) {
          const match = rec.students.find(
            (s: any) =>
              (cleanId && s.studentId && s.studentId.trim().toUpperCase() === cleanId) ||
              (cleanName && cleanName.length >= 3 && s.fullName && isSameStudentName(s.fullName, cleanName))
          );
          if (match) {
            if (match.fullName && (!nameVal || isSameStudentName(match.fullName, nameVal))) {
              setName(match.fullName);
            }
            if (match.studentId && !idVal) {
              setStudentId(match.studentId);
            }
            if (rec.subject?.subjectCode) {
              setSubjectCode(rec.subject.subjectCode);
            }
            if (rec.subject?.offerNumber) {
              setOfferNumber(rec.subject.offerNumber);
            }
            if (match.block && !block) {
              setBlock(match.block);
            }
            const subLabel = rec.subject?.offerNumber
              ? `${rec.subject.subjectCode} - ${rec.subject.offerNumber}`
              : rec.subject?.subjectCode || "Class Roster";
            setRosterMatchNotice(`Verified Class Roster Match: ${match.fullName} • ${subLabel}`);
            return;
          }
        }
      }
      setRosterMatchNotice(null);
    } catch {
      // non-blocking
    }
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem("mathworkspace_grading_data");
      if (raw) {
        const records = JSON.parse(raw);
        if (Array.isArray(records) && records.length > 0) {
          const list = records
            .filter((r: any) => r.subject?.subjectCode)
            .map((r: any) => ({
              subjectCode: r.subject.subjectCode,
              offerNumber: r.subject.offerNumber || "",
              subjectName: r.subject.subjectName || "",
            }));
          if (list.length > 0) {
            setAvailableSubjects(list);
            return;
          }
        }
      }
    } catch {
      // ignore
    }
    setAvailableSubjects([
      { subjectCode: "MATH 101", offerNumber: "80062", subjectName: "Calculus with Analytic Geometry" },
      { subjectCode: "MATH 102", offerNumber: "80063", subjectName: "Integral Calculus" },
      { subjectCode: "MATH 103", offerNumber: "80132", subjectName: "Linear Algebra" },
      { subjectCode: "GEC 4", offerNumber: "50371", subjectName: "Mathematics in the Modern World" },
    ]);
  }, []);

  const handleSubjectCodeChange = (val: string) => {
    setSubjectCode(val);
    const matched = availableSubjects.find(
      (s) => s.subjectCode.toLowerCase().trim() === val.toLowerCase().trim()
    );
    if (matched && matched.offerNumber && !offerNumber) {
      setOfferNumber(matched.offerNumber);
    }
  };

  useEffect(() => {
    if (!loading && isAuthenticated) {
      if (
        user?.role === "admin" ||
        user?.email?.toLowerCase().trim() === "admin@gmail.com"
      ) {
        navigate("/admin", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    }
  }, [loading, isAuthenticated, user, navigate]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    let finalName = name.trim();
    let finalStudentId = studentId.trim();
    let finalSubjectCode = subjectCode.trim();
    let finalOfferNumber = offerNumber.trim();
    let finalBlock = block.trim();

    try {
      const raw = localStorage.getItem("mathworkspace_grading_data");
      if (raw) {
        const records = JSON.parse(raw);
        if (Array.isArray(records)) {
          for (const rec of records) {
            if (Array.isArray(rec.students)) {
              const matched = rec.students.find(
                (st: any) =>
                  (finalStudentId && st.studentId && st.studentId.trim().toUpperCase() === finalStudentId.toUpperCase()) ||
                  (finalName && st.fullName && isSameStudentName(st.fullName, finalName))
              );
              if (matched) {
                if (matched.fullName) finalName = matched.fullName.trim();
                if (matched.studentId && !matched.studentId.startsWith("2026-") && matched.studentId !== "2026-0000") {
                  finalStudentId = matched.studentId.trim();
                }
                if (rec.subject?.subjectCode) finalSubjectCode = rec.subject.subjectCode.trim();
                if (rec.subject?.offerNumber) finalOfferNumber = rec.subject.offerNumber.trim();
                if (matched.block && !finalBlock) finalBlock = matched.block.trim();
                break;
              }
            }
          }
        }
      }
    } catch {
      // non-blocking
    }

    const err = await register(
      finalName,
      email,
      password,
      finalBlock,
      finalSubjectCode,
      finalOfferNumber,
      finalStudentId
    );
    setSubmitting(false);
    if (err) {
      setError(err);
      return;
    }
    if (email.toLowerCase().trim() === "admin@gmail.com") {
      navigate("/admin", { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
    }
  }

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          AUTH FORM CARD (Glassmorphism Design)
         ───────────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#0b1610]/75 backdrop-blur-2xl backdrop-saturate-150 rounded-3xl p-5 sm:p-7 lg:p-8 border border-white/20 border-t-white/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08)_inset] relative">
        {/* Heading & Subtitle */}
        <div className="mb-4 text-left">
          <h2
            className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            <span className="text-white select-none" style={{ color: "#FFFFFF" }}>
              Create Student{" "}
            </span>
            <span className="text-emerald-400 select-none" style={{ color: "#34d399" }}>
              Account
            </span>
          </h2>
          <p className="text-[11px] sm:text-xs text-emerald-100/70 font-normal mt-0.5 leading-relaxed">
            Join your class roster and start exploring interactive mathematics.
          </p>
        </div>

        {/* Error Feedback */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 p-2.5 rounded-2xl bg-red-950/70 backdrop-blur-md border border-red-500/40 text-red-200 text-xs font-semibold flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </motion.div>
        )}

        {/* Class Roster Auto-Detection Match Notice */}
        <AnimatePresence>
          {rosterMatchNotice && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mb-3 p-2 rounded-2xl bg-emerald-950/70 backdrop-blur-md border border-emerald-500/40 text-emerald-200 text-xs font-semibold flex items-center gap-2"
            >
              <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className="leading-snug text-[11px]">{rosterMatchNotice}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Registration Form */}
        <form onSubmit={onSubmit} className="space-y-3">
          {/* Full Name */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-emerald-100/80 mb-1.5 text-left">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full Name</span>
            </label>
            <div className="relative flex items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-500/25 transition-all overflow-hidden">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400/80 pointer-events-none z-10 flex items-center">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                autoComplete="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  checkRosterMatch(studentId, e.target.value);
                }}
                className="auth-input has-left-icon has-right-icon w-full bg-transparent py-2.5 text-xs sm:text-sm font-normal text-white placeholder-zinc-500 outline-none rounded-full border-0 !bg-transparent"
              />
              {isNameValid && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none z-10 flex items-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>

          {/* Student ID & Block (2-Columns on tablets and desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-emerald-100/80 mb-1.5 text-left">
                <Hash className="w-3.5 h-3.5 text-emerald-400" />
                <span>Student ID</span>
              </label>
              <div className="relative flex items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-500/25 transition-all overflow-hidden">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400/80 pointer-events-none z-10 flex items-center">
                  <Hash className="w-3.5 h-3.5" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Student ID"
                  value={studentId}
                  onChange={(e) => {
                    setStudentId(e.target.value);
                    checkRosterMatch(e.target.value, name);
                  }}
                  className="auth-input has-left-icon has-right-icon w-full bg-transparent py-2.5 text-xs sm:text-sm font-normal text-white placeholder-zinc-500 outline-none font-mono rounded-full border-0 !bg-transparent"
                />
                {isIdValid && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none z-10 flex items-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-emerald-100/80 mb-1.5 text-left">
                <LayoutGrid className="w-3.5 h-3.5 text-emerald-400" />
                <span>Block <span className="text-emerald-300/50 font-normal lowercase">(optional)</span></span>
              </label>
              <div className="relative flex items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-500/25 transition-all overflow-hidden">
                <input
                  type="text"
                  placeholder="Block (optional)"
                  value={block}
                  onChange={(e) => setBlock(e.target.value)}
                  className="auth-input w-full bg-transparent py-2.5 px-4 text-xs sm:text-sm font-normal text-white placeholder-zinc-500 outline-none rounded-full border-0 !bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Subject Code & Offer Number (2-Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-emerald-100/80 mb-1.5 text-left">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>Subject Code</span>
              </label>
              <div className="relative flex items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-500/25 transition-all overflow-hidden">
                <input
                  list="subject-code-suggestions"
                  type="text"
                  placeholder="Subject Code"
                  value={subjectCode}
                  onChange={(e) => handleSubjectCodeChange(e.target.value)}
                  className="auth-input w-full bg-transparent py-2.5 px-4 text-xs sm:text-sm font-normal text-white placeholder-zinc-500 outline-none rounded-full border-0 !bg-transparent"
                />
              </div>
              <datalist id="subject-code-suggestions">
                {availableSubjects.map((s, idx) => (
                  <option key={idx} value={s.subjectCode}>
                    {s.subjectName ? `${s.subjectCode} — ${s.subjectName}` : s.subjectCode}
                  </option>
                ))}
              </datalist>
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-emerald-100/80 mb-1.5 text-left">
                <Hash className="w-3.5 h-3.5 text-emerald-400" />
                <span>Offer Number</span>
              </label>
              <div className="relative flex items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-500/25 transition-all overflow-hidden">
                <input
                  list="offer-number-suggestions"
                  type="text"
                  placeholder="Offer Number"
                  value={offerNumber}
                  onChange={(e) => setOfferNumber(e.target.value)}
                  className="auth-input w-full bg-transparent py-2.5 px-4 text-xs sm:text-sm font-normal text-white placeholder-zinc-500 outline-none font-mono rounded-full border-0 !bg-transparent"
                />
              </div>
              <datalist id="offer-number-suggestions">
                {availableSubjects
                  .filter((s) => s.offerNumber)
                  .map((s, idx) => (
                    <option key={idx} value={s.offerNumber}>
                      {s.subjectCode ? `${s.offerNumber} (${s.subjectCode})` : s.offerNumber}
                    </option>
                  ))}
              </datalist>
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-emerald-100/80 mb-1.5 text-left">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Email Address</span>
            </label>
            <div className="relative flex items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-500/25 transition-all overflow-hidden">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400/80 pointer-events-none z-10 flex items-center">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input has-left-icon has-right-icon w-full bg-transparent py-2.5 text-xs sm:text-sm font-normal text-white placeholder-zinc-500 outline-none rounded-full border-0 !bg-transparent"
              />
              {isEmailValid && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none z-10 flex items-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>

          {/* Password with Strength Meter */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-emerald-100/80 mb-1.5 text-left">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Password</span>
            </label>
            <div className="relative flex items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-500/25 transition-all overflow-hidden">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400/80 pointer-events-none z-10 flex items-center">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                autoComplete="new-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input has-left-icon has-right-icon w-full bg-transparent py-2.5 text-xs sm:text-sm font-normal text-white placeholder-zinc-500 outline-none rounded-full border-0 !bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer p-1.5 z-10 flex items-center"
              >
                {showPassword ? (
                  <Eye className="w-4 h-4 text-emerald-400" />
                ) : (
                  <EyeOff className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Dynamic Password Strength Indicator */}
            {password && (
              <div className="mt-1.5 space-y-1">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
                        passwordStrength.score >= step
                          ? passwordStrength.color
                          : "bg-emerald-950/80 border border-emerald-900/60"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-emerald-100/60">Strength:</span>
                  <span className={passwordStrength.text}>
                    {passwordStrength.label}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Primary CTA Submit Button (Clean Modern Flat Design) */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-3 rounded-full py-3 px-6 bg-[#166534] hover:bg-[#15803d] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-50 shadow-lg shadow-emerald-950/40"
          >
            <UserPlus className="w-4 h-4" />
            <span>{submitting ? "Creating Account..." : "Create Student Account"}</span>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-300 ml-1" />
          </button>
        </form>

        {/* Footer Navigation */}
        <div className="pt-4 border-t border-white/10 text-center mt-4">
          <p className="text-xs text-emerald-100/60">
            Already registered?{" "}
            <Link
              to="/login"
              className="text-emerald-400 font-semibold hover:text-emerald-300 hover:underline ml-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
