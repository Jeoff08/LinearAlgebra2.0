import { useState, useEffect, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import FloatingMathBackground from "../components/FloatingMathBackground";
import teachImg from "../assets/Teach.png";
import teacherImg from "../assets/Teacher.png";
import { UserPlus, ArrowRight, ArrowLeft, Lock, Mail, User, Sparkles } from "lucide-react";

export default function RegisterPage() {
  const { register, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [loading, isAuthenticated, navigate]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const err = await register(name, email, password);
    setSubmitting(false);
    if (err) {
      setError(err);
      return;
    }
    navigate("/dashboard");
  }

  return (
    <motion.div
      className="auth-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Live moving math symbols in the background */}
      <FloatingMathBackground />

      {/* Left teacher character */}
      <motion.div
        className="auth-character auth-character--left"
        initial={{ opacity: 0, x: -80, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src={teachImg}
          alt="Female teacher character"
          draggable={false}
          animate={{ y: [0, -10, 0], rotate: [0, 0.8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Center form card */}
      <motion.div
        className="auth-card relative"
        initial={{ opacity: 0, y: 30, scale: 0.94, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -25, scale: 0.96, filter: "blur(6px)" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top Back to Public Navigation */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#00D2FF] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Public</span>
          </button>
          <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#00D2FF] bg-cyan-950/60 border border-cyan-500/20 px-2 py-0.5 rounded-full">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Workspace</span>
          </div>
        </div>

        {/* Animated Segmented Tab Switcher (Login / Register) */}
        <div className="flex items-center p-1 mb-5 rounded-xl bg-slate-900/70 border border-white/10 relative">
          <div className="relative flex-1">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full py-1.5 text-xs font-bold rounded-lg relative z-10 text-slate-400 hover:text-white transition-colors duration-200"
            >
              Sign in
            </button>
          </div>

          <div className="relative flex-1">
            <button
              type="button"
              className="w-full py-1.5 text-xs font-bold rounded-lg relative z-10 transition-colors duration-200 text-white cursor-default"
            >
              Register
            </button>
            <motion.div
              layoutId="auth-active-pill"
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00D2FF] to-[#10B981] shadow-md shadow-cyan-500/25"
              transition={{ type: "spring", stiffness: 450, damping: 35 }}
            />
          </div>
        </div>

        <h1 className="auth-card__title">Create account</h1>
        <p className="auth-card__subtitle">
          Register as a public user to unlock calculators, solvers, and your workspace.
        </p>

        <form onSubmit={onSubmit} className="auth-form">
          <motion.label
            className="auth-label"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
          >
            <span className="flex items-center gap-1.5 mb-1 text-xs text-slate-300 font-semibold">
              <User className="w-3.5 h-3.5 text-[#00D2FF]" />
              Full Name
            </span>
            <input
              className="auth-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
            />
          </motion.label>

          <motion.label
            className="auth-label"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.16, duration: 0.4 }}
          >
            <span className="flex items-center gap-1.5 mb-1 text-xs text-slate-300 font-semibold">
              <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
              Email
            </span>
            <input
              className="auth-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
            />
          </motion.label>

          <motion.label
            className="auth-label"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.24, duration: 0.4 }}
          >
            <span className="flex items-center gap-1.5 mb-1 text-xs text-slate-300 font-semibold">
              <Lock className="w-3.5 h-3.5 text-[#10B981]" />
              Password
            </span>
            <input
              className="auth-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 6 characters"
              minLength={6}
              required
            />
          </motion.label>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, height: 0, y: -6 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                className="auth-card__error"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="auth-btn flex items-center justify-center gap-2 mt-2"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#00D2FF" strokeWidth="3" />
                  <path
                    className="opacity-90"
                    fill="#10B981"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Creating account…</span>
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Register</span>
              </>
            )}
          </motion.button>
        </form>

        <p className="auth-card__footer flex items-center justify-between">
          <span>Already have an account?</span>
          <Link
            to="/login"
            className="auth-link inline-flex items-center gap-1 group font-bold text-[#00D2FF] hover:text-[#10B981] transition-colors"
          >
            <span>Login</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </p>
      </motion.div>

      {/* Right teacher character */}
      <motion.div
        className="auth-character auth-character--right"
        initial={{ opacity: 0, x: 80, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          src={teacherImg}
          alt="Male teacher character"
          draggable={false}
          animate={{ y: [0, -12, 0], rotate: [0, -0.8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}
