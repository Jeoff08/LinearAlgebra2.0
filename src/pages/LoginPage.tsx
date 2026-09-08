import { useState, useEffect, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { LogIn, Lock, Mail, Eye, EyeOff, ArrowLeft } from "lucide-react";
import imageLogo from "../assets/image logo.png";

export default function LoginPage() {
  const { login, isAuthenticated, loading, user } = useAuth();
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
    const err = await login(email, password);
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
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#201D1D] overflow-x-hidden font-sans">
      {/* Subtle Floating Back to Home Button */}
      <Link
        to="/"
        className="absolute top-5 left-5 z-30 inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white/80 hover:bg-white text-gray-800 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold shadow-md transition-all hover:scale-105"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {/* ── LEFT COLUMN: 3D Mathematics Art Visual ── */}
      <div className="w-full md:w-1/2 h-44 sm:h-60 md:h-auto md:min-h-screen relative bg-[#231D1D] overflow-hidden flex items-center justify-center shrink-0">
        <img
          src={imageLogo}
          alt="MathWorkspace Mathematics Artwork"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle inner shadow overlay for seamless blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 pointer-events-none hidden md:block" />
      </div>

      {/* ── RIGHT COLUMN: Authentication Form Matching Design ── */}
      <div className="w-full md:w-1/2 min-h-0 md:min-h-screen bg-gradient-to-b from-[#565050] via-[#3C3737] to-[#201D1D] flex items-center justify-center px-4 sm:px-10 lg:px-16 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full max-w-[430px] flex flex-col justify-center"
        >
          {/* Header Title & Subtitle */}
          <div className="text-center mb-7">
            <h1 className="text-3xl sm:text-[2.65rem] font-black tracking-tight leading-tight">
              <span className="text-white">Welcome </span>
              <span className="text-[#DE3848]">Back</span>
            </h1>
            <p className="text-xs sm:text-[13px] text-[#D1D5DB] leading-relaxed mt-2 font-normal">
              Sign in to continue your mathematics journey with{" "}
              <span className="text-[#DE3848] font-semibold">
                MathWorkspace.
              </span>
            </p>
            {/* Small red underline bar matching reference */}
            <div className="w-9 h-[2.5px] bg-[#DE3848] mx-auto mt-2.5 rounded-full" />
          </div>

          {/* Feedback Alerts */}
          {message && (
            <div className="mb-4 rounded-xl border border-blue-400/30 bg-blue-500/10 p-3 text-xs font-medium text-blue-300">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-medium text-red-300">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Email Address */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-200"
              >
                <Mail className="w-3.5 h-3.5 text-[#DE3848]" />
                <span>Email Address</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                autoComplete="email"
                className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 hover:bg-[#3D3838] focus:bg-[#3D3838] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-[#DE3848]/60 transition-all duration-200"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-200"
              >
                <Lock className="w-3.5 h-3.5 text-[#DE3848]" />
                <span>Password</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 hover:bg-[#3D3838] focus:bg-[#3D3838] pl-4 pr-11 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-[#DE3848]/60 transition-all duration-200 font-mono tracking-wider"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition p-1 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-0.5">
              <button
                type="button"
                onClick={() =>
                  alert("Password reset is managed by your administrator.")
                }
                className="text-[#DE3848] hover:text-[#ff5968] font-medium transition cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            {/* Sign in Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 rounded-xl sm:rounded-2xl bg-[#8B1A24] hover:bg-[#72121B] active:scale-[0.99] text-white py-3.5 px-4 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#8B1A24]/30 hover:shadow-xl hover:shadow-[#8B1A24]/40 transition-all duration-200 cursor-pointer disabled:opacity-50"
            >
              <LogIn className="w-4 h-4" />
              <span>{submitting ? "Signing in..." : "Sign in"}</span>
            </button>


          </form>

          {/* Footer Navigation */}
          <p className="text-center text-xs text-gray-400 mt-6 font-normal">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-[#DE3848] hover:text-[#ff5968] font-semibold transition ml-0.5"
            >
              Create an account
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
