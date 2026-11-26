import { useState, useEffect, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import {
  LogIn,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  Check,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import WrongPasswordAnimation from "../components/WrongPasswordAnimation";

export default function LoginPage() {
  const { login, isAuthenticated, loading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const message = (location.state as { message?: string } | null)?.message;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorType, setErrorType] = useState<"password" | "email">("password");
  const [errorKey, setErrorKey] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  // Live email validation for instant interactive feedback
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

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

    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailPattern.test(trimmedEmail)) {
      setSubmitting(false);
      setErrorType("email");
      setError("Please enter a valid academic email address.");
      setErrorKey((prev) => prev + 1);
      return;
    }

    const err = await login(trimmedEmail, password);
    setSubmitting(false);
    if (err) {
      const lower = err.toLowerCase();
      if (
        lower.includes("not found") ||
        lower.includes("no account") ||
        lower.includes("invalid email")
      ) {
        setErrorType("email");
        setError("Account not found with this email.");
      } else {
        setErrorType("password");
        setError("Incorrect password. Please try again.");
      }
      setErrorKey((prev) => prev + 1);
      return;
    }

    if (trimmedEmail.toLowerCase() === "admin@gmail.com") {
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
      <div className="w-full bg-[#0b1610]/75 backdrop-blur-2xl backdrop-saturate-150 rounded-3xl p-6 sm:p-8 lg:p-9 border border-white/20 border-t-white/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08)_inset] relative">
        {/* Heading & Subtitle */}
        <div className="mb-6 text-left">
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            <span className="text-white select-none" style={{ color: "#FFFFFF" }}>
              Welcome{" "}
            </span>
            <span className="text-emerald-400 select-none" style={{ color: "#34d399" }}>
              Back
            </span>
          </h2>
          <p className="text-xs sm:text-[13px] text-emerald-100/70 font-normal mt-1 leading-relaxed">
            Enter your credentials to access your math workspace and class records.
          </p>
        </div>

        {/* Redirect Notice Banner (from registration) */}
        {message && !error && (
          <div className="mb-4 rounded-2xl bg-emerald-950/70 backdrop-blur-md border border-emerald-500/40 p-3 text-xs text-emerald-200 font-medium flex items-center gap-2.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{message}</span>
          </div>
        )}

        {/* Dynamic Error Animation & Banner */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              key={errorKey}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mb-4"
            >
              {errorType === "password" ? (
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-red-950/70 backdrop-blur-md border border-red-500/40 text-red-200 text-xs font-semibold">
                  <WrongPasswordAnimation
                    triggerKey={errorKey}
                    type="password"
                    size="xs"
                    className="shrink-0"
                  />
                  <span>{error}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-red-950/70 backdrop-blur-md border border-red-500/40 text-red-200 text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Login Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          {/* EMAIL ADDRESS Field */}
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                className="auth-input has-left-icon has-right-icon w-full bg-transparent py-2.5 text-sm font-normal text-white placeholder-zinc-500 outline-none rounded-full border-0 !bg-transparent"
              />
              {isEmailValid && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none z-10 flex items-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>

          {/* PASSWORD Field */}
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
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(null);
                }}
                className="auth-input has-left-icon has-right-icon w-full bg-transparent py-2.5 text-sm font-normal text-white placeholder-zinc-500 outline-none rounded-full border-0 !bg-transparent"
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
          </div>

          {/* Primary CTA Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-3 rounded-full py-3 px-6 bg-[#166534] hover:bg-[#15803d] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-50 shadow-lg shadow-emerald-950/40"
          >
            <LogIn className="w-4 h-4" />
            <span>{submitting ? "Signing in..." : "Sign In to Account"}</span>
            <ChevronRight className="w-4 h-4 text-emerald-300 ml-1" />
          </button>
        </form>

        {/* Footer Navigation */}
        <div className="pt-5 border-t border-white/10 text-center mt-5">
          <p className="text-xs text-emerald-100/60">
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className="text-emerald-400 font-semibold hover:text-emerald-300 hover:underline ml-1"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
