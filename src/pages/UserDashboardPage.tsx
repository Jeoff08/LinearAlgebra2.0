import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useTransition } from '../context/TransitionContext';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function UserDashboardPage() {
  const { user } = useAuth();
  const { triggerTransition } = useTransition();
  const navigate = useNavigate();

  const handlePublicClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    triggerTransition(() => {
      navigate('/');
    });
  };

  const handleTopicsClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    triggerTransition(() => {
      navigate('/topics');
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-2xl mx-auto my-10 border border-[var(--line)] bg-[var(--panel)] p-8 shadow-[var(--shadow)] backdrop-blur-md rounded-2xl"
    >
      <h1 className="m-0 font-[Fraunces] text-4xl">Welcome, {user?.name}</h1>
      <p className="mt-3 text-[var(--muted)]">
        You are signed in as a public user ({user?.email}). You can use the calculator anytime and open
        admin-uploaded PDFs from the public page.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handlePublicClick}
          className="btn primary no-underline inline-flex items-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>Go to public page</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleTopicsClick}
          className="btn secondary no-underline inline-flex items-center gap-2 cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Browse All Topics</span>
        </button>
      </div>
    </motion.section>
  );
}