import { useState, useEffect, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { UserPlus, Lock, Mail, User, Eye, EyeOff, ArrowLeft, LayoutGrid } from "lucide-react";
import imageLogo from "../assets/image logo.png";

export default function RegisterPage() {
  const { register, isAuthenticated, loading, user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [block, setBlock] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    const err = await register(name, email, password, block);
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
        className="absolute top-5 left-5 z-30 inline-flex items-center gap-1.5 rounded-full border border-gray-200/60 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-gray-800 dark:text-slate-100 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold shadow-md transition-all hover:scale-105"
      >
        <ArrowLeft className="w-3.5 h-3.5 text-gray-600 dark:text-slate-300" />
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

      {/* ── RIGHT COLUMN: Registration Form Matching Design ── */}
      <div className="w-full md:w-1/2 min-h-0 md:min-h-screen bg-gradient-to-b from-[#565050] via-[#3C3737] to-[#201D1D] flex items-center justify-center px-4 sm:px-10 lg:px-16 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full max-w-[430px] flex flex-col justify-center"
        >
          {/* Header Title & Subtitle */}
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-[2.65rem] font-black tracking-tight leading-tight">
              <span className="text-white">Create </span>
              <span className="text-[#16a34a]">Account</span>
            </h1>
            <p className="text-xs sm:text-[13px] text-[#D1D5DB] leading-relaxed mt-2 font-normal">
              Join us to start your mathematics journey with{" "}
              <span className="text-[#16a34a] font-semibold">
                MathWorkspace.
              </span>
            </p>
            {/* Small red underline bar matching reference */}
            <div className="w-9 h-[2.5px] bg-[#16a34a] mx-auto mt-2.5 rounded-full" />
          </div>

          {/* Feedback Alert */}
          {error && (
            <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-xs font-medium text-green-300">
              {error}
            </div>
          )}

          {/* Register Form */}
          <form onSubmit={onSubmit} className="space-y-3.5">
            {/* Full Name Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-200"
              >
                <User className="w-3.5 h-3.5 text-[#16a34a]" />
                <span>Full Name</span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Morgan"
                required
                autoComplete="name"
                className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 hover:bg-[#3D3838] focus:bg-[#3D3838] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-[#16a34a]/60 transition-all duration-200"
              />
            </div>

            {/* Block Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="block"
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-200"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-[#16a34a]" />
                <span>Block / Section</span>
              </label>
              <input
                id="block"
                type="text"
                value={block}
                onChange={(e) => setBlock(e.target.value)}
                placeholder="e.g. A, B, C..."
                required
                className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 hover:bg-[#3D3838] focus:bg-[#3D3838] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-[#16a34a]/60 transition-all duration-200"
              />
            </div>

            {/* Email Address Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-200"
              >
                <Mail className="w-3.5 h-3.5 text-[#16a34a]" />
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
                className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 hover:bg-[#3D3838] focus:bg-[#3D3838] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-[#16a34a]/60 transition-all duration-200"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-200"
              >
                <Lock className="w-3.5 h-3.5 text-[#16a34a]" />
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
                  autoComplete="new-password"
                  className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#3D3838]/85 hover:bg-[#3D3838] focus:bg-[#3D3838] pl-4 pr-11 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-[#16a34a]/60 transition-all duration-200 font-mono tracking-wider"
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

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 rounded-xl sm:rounded-2xl bg-[#166534] hover:bg-[#166534] active:scale-[0.99] text-white py-3.5 px-4 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#166534]/30 hover:shadow-xl hover:shadow-[#166534]/40 transition-all duration-200 cursor-pointer disabled:opacity-50"
            >
              <UserPlus className="w-4 h-4" />
              <span>{submitting ? "Creating account..." : "Sign up"}</span>
            </button>


          </form>

          {/* Footer Navigation */}
          <p className="text-center text-xs text-gray-400 mt-6 font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#16a34a] hover:text-[#4ade80] font-semibold transition ml-0.5"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}