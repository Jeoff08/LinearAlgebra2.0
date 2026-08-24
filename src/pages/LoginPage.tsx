import { useState, useEffect, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { LogIn, Lock, Mail, Eye, EyeOff } from "lucide-react";
import mathBg from "../assets/math.jpeg";

export default function LoginPage() {
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const message = (location.state as { message?: string } | null)?.message;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [loading, isAuthenticated, navigate]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const err = await login(email, password);
    setSubmitting(false);
    if (err) {
      setError(err);
      return;
    }
    navigate("/");
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0c1017] flex flex-col justify-between pt-20 pb-8 px-4 sm:px-6">
      {/* Background Blackboard Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={mathBg}
          alt="Math chalkboard background"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-black/50" />
      </div>

      {/* Center Floating Glass Card */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-[400px] rounded-[30px] border border-white/10 bg-[#151922]/92 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
        >
          {/* Header Title */}
          <div className="text-center space-y-1 mb-5">
            <h1 className="text-2xl font-extrabold tracking-tight">
              <span className="text-white">Welcome</span> <span className="text-[#E05260]">Back</span>
            </h1>
            <p className="text-[0.7rem] sm:text-[0.75rem] text-white/70 leading-relaxed max-w-xs mx-auto">
              Sign in to continue your mathematics journey with <span className="text-[#E05260] font-medium">MathVerse</span>.
            </p>
            <div className="w-7 h-[2px] bg-[#E05260] mx-auto mt-1.5 rounded-full" />
          </div>

          {/* Feedback Alerts */}
          {message && (
            <div className="mb-3 rounded-xl border border-blue-400/30 bg-blue-500/10 p-2.5 text-xs font-medium text-blue-300">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-3 rounded-xl border border-red-500/30 bg-red-500/10 p-2.5 text-xs font-medium text-red-300">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-3.5">
            {/* Email Address Field */}
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-[0.65rem] font-semibold text-white/80">
                <Mail className="w-3 h-3 text-[#E05260]" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full rounded-xl border border-white/10 bg-[#1E232E]/90 px-3.5 py-2.5 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#E05260] focus:ring-1 focus:ring-[#E05260]/40 transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-[0.65rem] font-semibold text-white/80">
                <Lock className="w-3 h-3 text-[#E05260]" />
                <span>Password</span>
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#1E232E]/90 pl-3.5 pr-10 py-2.5 text-sm text-white placeholder-white/35 focus:outline-none focus:border-[#E05260] focus:ring-1 focus:ring-[#E05260]/40 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-3.5 h-3.5" />
                  ) : (
                    <Eye className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer select-none text-[0.65rem] text-white/70">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-3 w-3 rounded border-white/20 bg-[#1E232E] text-[#7B1824] accent-[#7B1824] focus:ring-0 cursor-pointer"
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                onClick={() => alert("Password reset functionality will be sent to your email address.")}
                className="text-[0.65rem] text-[#E05260] hover:underline font-medium cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            {/* Sign in Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] disabled:opacity-60 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#7B1824]/30 transition-all duration-200 cursor-pointer active:scale-98"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{submitting ? "Signing in..." : "Sign in"}</span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-[10px]">
              <span className="bg-[#151922] px-3 text-white/40">or</span>
            </div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={() => {
              setEmail("student@mathverse.edu");
              setPassword("password123");
            }}
            className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-white hover:bg-gray-100 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#111827] shadow-sm transition-all duration-200 cursor-pointer active:scale-98"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Create an account link */}
          <div className="mt-4 text-center text-[0.65rem] text-white/70">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-[#E05260] hover:underline ml-1"
            >
              Create an account
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Security Notice */}
      <div className="relative z-10 mt-5 flex items-center justify-center gap-2 text-[0.6rem] text-white/60 text-center">
        <Lock className="w-3 h-3 text-white/50 shrink-0" />
        <span>Your data is secure with us. We never share your information.</span>
      </div>
    </div>
  );
}