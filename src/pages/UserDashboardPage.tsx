import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Calculator,
  BookOpen,
  HelpCircle,
  History,
  Trophy,
  Search,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  FileText,
  Users,
  CheckCircle2,
  X,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  LogOut,
  Menu,
  GraduationCap,
  Award,
  Clock,
  ExternalLink,
  BookMarked,
  Zap,
  Layers,
  ChevronLeft,
  Filter,
  Check,
  Play,
  RotateCcw,
  AlertCircle,
  Loader2,
  ArrowUpRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";

// Linear Algebra Real Interactive Calculators (All 23 Solvers)
import SystemOfEquations from "../calculators/SystemOfEquations";
import MatrixCalculator from "../calculators/MatrixCalculator";
import MatrixOperations from "../calculators/MatrixOperations";
import MatrixInverse from "../calculators/MatrixInverse";
import DeterminantCalculator from "../calculators/DeterminantCalculator";
import RankCalculator from "../calculators/RankCalculator";
import EigenCalculator from "../calculators/EigenCalculator";
import VectorCalculator from "../calculators/VectorCalculator";
import DotProduct from "../calculators/DotProduct";
import CrossProduct from "../calculators/CrossProduct";
import VectorProjection from "../calculators/VectorProjection";
import LinearIndependence from "../calculators/LinearIndependence";
import LinearCombination from "../calculators/LinearCombination";
import BasisCalculator from "../calculators/BasisCalculator";
import SpanCalculator from "../calculators/SpanCalculator";
import LUDecomposition from "../calculators/LUDecomposition";
import QRDecomposition from "../calculators/QRDecomposition";
import SVDCalculator from "../calculators/SVDCalculator";
import TransposeCalculator from "../calculators/TransposeCalculator";
import Diagonalization from "../calculators/Diagonalization";
import LeastSquares from "../calculators/LeastSquares";
import LinearTransformation from "../calculators/LinearTransformation";
import QuadraticForm from "../calculators/QuadraticForm";

// Calculus Unified Interactive Calculator and Definitions
import CalculusCalculator from "../Calculus_One_Calculator/Calculator";
import {
  CALCULATOR_DEFINITIONS,
  type CalculatorDefinition,
} from "../Calculus_One_Calculator/CalculatorData";

// Real Complete Topic Data from Codebase
import { TOPICS as LINEAR_ALGEBRA_TOPICS_RAW } from "../data/topics/index";
import { ALL_CALCULUS_TOPICS } from "../data/calculus-topics";
import { ALL_CALCULUS_2_TOPICS } from "../data/calculus-2-topics";
import studentIllustration from "../assets/Image 1.png";

interface CalculatorCardMeta {
  id: string;
  title: string;
  category: "linear-algebra" | "calculus-1" | "calculus-2";
  categoryLabel: string;
  formula: string;
  description: string;
  badge: string;
  type: "linear" | "calculus";
  calculusDefId?: string;
}

interface UnifiedTopicItem {
  id: string;
  title: string;
  category: "linear-algebra" | "calculus-1" | "calculus-2";
  categoryLabel: string;
  chapter: string;
  chapterNumber?: number;
  summary: string;
  details: string;
  examples: string[];
}

export interface QuizQuestionItem {
  id: string;
  questionIndex: number;
  prompt: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: "A" | "B" | "C" | "D";
}

export interface StudentAvailableQuiz {
  id: string;
  title: string;
  topic: string;
  questionsCount: number;
  questions: QuizQuestionItem[];
  createdAt: string;
  attemptsCount: number;
  bestScore?: number;
  lastScore?: number;
}

export interface QuizAnswerRecord {
  questionId: string;
  prompt: string;
  selected: "A" | "B" | "C" | "D" | "";
  correct: "A" | "B" | "C" | "D";
  isCorrect: boolean;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export interface StudentQuizAttemptItem {
  id: string;
  quizId: string;
  quizTitle: string;
  topic: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  timeSpentSeconds: number;
  submittedAt: string;
  answers: QuizAnswerRecord[];
}

interface StudentQuizRecord {
  id: string;
  quizTitle: string;
  topic: string;
  questions: number;
  attempts: number;
  bestScore: number;
  status: "Completed" | "In Progress" | "Not Started";
}

interface StudentQuizHistory {
  id: string;
  quizTitle: string;
  score: number;
  takenAt: string;
  timeSpent: string;
  result: "Passed" | "Failed";
}

interface QuizSummaryRecord {
  id: string;
  quizTitle: string;
  totalStudents: number;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
}

// Registry of 23 Linear Algebra calculators
const LINEAR_ALGEBRA_CALCULATORS: CalculatorCardMeta[] = [
  {
    id: "la-matrix-ops",
    title: "Matrix Operations",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A + B, \\; A - B, \\; A \\times B, \\; kA",
    description:
      "Perform addition, subtraction, matrix multiplication, and scalar scaling on matrices.",
    badge: "Operations",
    type: "linear",
  },
  {
    id: "la-determinant",
    title: "Determinant Calculator",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\det(A) = |A|",
    description:
      "Computes determinants via Gaussian elimination and cofactor expansion with full steps.",
    badge: "Core",
    type: "linear",
  },
  {
    id: "la-matrix-inv",
    title: "Matrix Inverse",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)",
    description:
      "Calculates the inverse of square invertible matrices using Gauss-Jordan elimination.",
    badge: "Essential",
    type: "linear",
  },
  {
    id: "la-eigenvalues",
    title: "Eigenvalues & Eigenvectors",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula:
      "A\\mathbf{v} = \\lambda\\mathbf{v}, \\; \\det(A - \\lambda I) = 0",
    description:
      "Finds characteristic polynomials, roots, eigenvalues, and eigenvector basis vectors.",
    badge: "Advanced",
    type: "linear",
  },
  {
    id: "la-system-equations",
    title: "System of Linear Equations",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A\\mathbf{x} = \\mathbf{b}",
    description:
      "Solves systems of linear equations using Gaussian elimination, Gauss-Jordan, and Cramer's rule.",
    badge: "Solvers",
    type: "linear",
  },
  {
    id: "la-dot-product",
    title: "Dot Product & Angles",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i",
    description:
      "Calculates vector dot products, vector magnitudes, cosine similarity, angle, and orthogonality.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-cross-product",
    title: "Cross Product",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathbf{u} \\times \\mathbf{v}",
    description:
      "Computes 3D cross products, perpendicular normal vectors, and area of parallelograms in R³.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-vector-proj",
    title: "Vector Projection",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula:
      "\\text{proj}_{\\mathbf{u}}(\\mathbf{v}) = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\|\\mathbf{u}\\|^2}\\mathbf{u}",
    description:
      "Finds orthogonal projection of vectors onto lines/subspaces and orthogonal complements.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-vector-calc",
    title: "Vector Arithmetic & Norms",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\|\\mathbf{v}\\|_2 = \\sqrt{v_1^2 + \\dots + v_n^2}",
    description:
      "Evaluates vector addition, scalar multiplication, Euclidean norm, Manhattan norm, and unit vectors.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-rank-nullity",
    title: "Rank & Nullity Calculator",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\text{rank}(A) + \\text{nullity}(A) = n",
    description:
      "Computes row echelon form, pivot columns, row space basis, null space basis, and dimension.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-linear-indep",
    title: "Linear Independence",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "c_1\\mathbf{v}_1 + \\dots + c_k\\mathbf{v}_k = \\mathbf{0}",
    description:
      "Tests sets of vectors for linear independence and determines if non-trivial combinations exist.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-linear-comb",
    title: "Linear Combination",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathbf{w} = c_1\\mathbf{v}_1 + \\dots + c_k\\mathbf{v}_k",
    description:
      "Determines if a target vector can be expressed as a linear combination of a set of vectors.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-basis-calculator",
    title: "Basis & Dimension",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\text{span}(\\mathcal{B}) = V, \\quad |\\mathcal{B}| = \\dim(V)",
    description:
      "Finds minimal spanning sets, basis for column spaces, and basis for row spaces.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-span-calc",
    title: "Span Calculator",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\text{span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}",
    description:
      "Calculates the subspace spanned by vectors, detects redundant vectors, and finds spanning dimension.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-lu-decomp",
    title: "LU Decomposition",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A = LU, \\quad PA = LU",
    description:
      "Decomposes a matrix into lower and upper triangular factors with partial pivoting permutations.",
    badge: "Decomposition",
    type: "linear",
  },
  {
    id: "la-qr-decomp",
    title: "QR Decomposition",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A = QR",
    description:
      "Gram-Schmidt orthonormalization producing orthogonal matrix Q and upper triangular matrix R.",
    badge: "Decomposition",
    type: "linear",
  },
  {
    id: "la-svd",
    title: "Singular Value Decomposition (SVD)",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A = U \\Sigma V^T",
    description:
      "Computes singular values, left and right singular vectors for dimensionality reduction and pseudo-inverses.",
    badge: "Decomposition",
    type: "linear",
  },
  {
    id: "la-diagonalization",
    title: "Matrix Diagonalization",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A = PDP^{-1}",
    description:
      "Finds modal matrix P and diagonal matrix D containing eigenvalues for matrix powers Aᵏ.",
    badge: "Advanced",
    type: "linear",
  },
  {
    id: "la-transpose",
    title: "Matrix Transpose & Symmetry",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "(A^T)_{ij} = A_{ji}, \\quad A^T = A",
    description:
      "Computes matrix transpose, trace, tests for symmetry, skew-symmetry, and orthogonality.",
    badge: "Operations",
    type: "linear",
  },
  {
    id: "la-least-squares",
    title: "Least Squares Solution",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A^T A \\mathbf{\\hat{x}} = A^T \\mathbf{b}",
    description:
      "Finds optimal least-squares approximate solution for inconsistent overdetermined linear systems.",
    badge: "Advanced",
    type: "linear",
  },
  {
    id: "la-linear-trans",
    title: "Linear Transformation",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "T(\\mathbf{x}) = A\\mathbf{x}",
    description:
      "Applies 2D and 3D linear mappings, rotations, reflections, dilations, and shears.",
    badge: "Transformations",
    type: "linear",
  },
  {
    id: "la-quadratic-form",
    title: "Quadratic Form & Definiteness",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}",
    description:
      "Classifies symmetric quadratic forms as positive definite, negative definite, or indefinite via eigenvalues.",
    badge: "Advanced",
    type: "linear",
  },
  {
    id: "la-matrix-calc",
    title: "Comprehensive Matrix Workbench",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "f(A, B, c)",
    description:
      "All-in-one matrix solver suite for simultaneous matrix calculations and multi-step workflows.",
    badge: "Suite",
    type: "linear",
  },
];

export default function UserDashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Navigation State
  const [activeNav, setActiveNav] = useState<
    | "dashboard"
    | "calculators"
    | "topics"
    | "quizzes"
    | "quizzes-history"
    | "quiz-results"
  >("dashboard");

  // Mobile sidebar state
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Time dropdown filter
  const [timeRange, setTimeRange] = useState<
    "Today" | "This Week" | "This Month" | "All Time"
  >("This Week");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  // User Profile Menu Dropdown
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Calculator Filter Category ("all" | "linear-algebra" | "calculus-1" | "calculus-2")
  const [calcCategoryFilter, setCalcCategoryFilter] = useState<
    "all" | "linear-algebra" | "calculus-1" | "calculus-2"
  >("all");
  const [activeCalculator, setActiveCalculator] =
    useState<CalculatorCardMeta | null>(null);

  // Topics Filter Category ("all" | "linear-algebra" | "calculus-1" | "calculus-2")
  const [topicCategoryFilter, setTopicCategoryFilter] = useState<
    "all" | "linear-algebra" | "calculus-1" | "calculus-2"
  >("all");
  const [activeTopic, setActiveTopic] = useState<UnifiedTopicItem | null>(null);

  // Chapter sub-filter for Topics
  const [selectedChapterFilter, setSelectedChapterFilter] =
    useState<string>("all");

  // User Student Quizzes Data (Real Supabase states)
  const [availableQuizzes, setAvailableQuizzes] = useState<StudentAvailableQuiz[]>([]);
  const [myAttempts, setMyAttempts] = useState<StudentQuizAttemptItem[]>([]);
  const [isLoadingQuizzes, setIsLoadingQuizzes] = useState(false);
  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState(false);

  // Active Quiz Taking & Result State
  const [activeTakingQuiz, setActiveTakingQuiz] = useState<StudentAvailableQuiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});
  const [quizTimerSeconds, setQuizTimerSeconds] = useState(0);
  const [submittedResult, setSubmittedResult] = useState<StudentQuizAttemptItem | null>(null);
  const [reviewingAttempt, setReviewingAttempt] = useState<StudentQuizAttemptItem | null>(null);
  const [quizFilterTopic, setQuizFilterTopic] = useState<string>("all");
  const [quizSearchTerm, setQuizSearchTerm] = useState<string>("");

  // Redirect admin to /admin if accidentally here
  useEffect(() => {
    if (
      user?.email?.toLowerCase().trim() === "admin@gmail.com" ||
      user?.role === "admin"
    ) {
      navigate("/admin", { replace: true });
    }
  }, [user, navigate]);

  // Keyboard shortcut Ctrl+K to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.getElementById("student-search-input");
        searchInput?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Combined Calculators Registry (All 52+ solvers)
  const allCombinedCalculators = useMemo<CalculatorCardMeta[]>(() => {
    const list: CalculatorCardMeta[] = [...LINEAR_ALGEBRA_CALCULATORS];

    if (Array.isArray(CALCULATOR_DEFINITIONS)) {
      CALCULATOR_DEFINITIONS.forEach((def) => {
        const isCalc1 = def.category === "Calculus 1";
        list.push({
          id: `calc-${def.id}`,
          title: def.name,
          category: isCalc1 ? "calculus-1" : "calculus-2",
          categoryLabel: def.category,
          formula: def.example,
          description: def.description,
          badge: def.badge || (isCalc1 ? "Calculus 1" : "Calculus 2"),
          type: "calculus",
          calculusDefId: def.id,
        });
      });
    }

    return list;
  }, []);

  // Filtered calculators
  const filteredCalculators = useMemo(() => {
    return allCombinedCalculators.filter((calc) => {
      const matchesCategory =
        calcCategoryFilter === "all" || calc.category === calcCategoryFilter;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;
      return (
        matchesCategory &&
        (calc.title.toLowerCase().includes(query) ||
          calc.description.toLowerCase().includes(query) ||
          calc.formula.toLowerCase().includes(query) ||
          calc.badge.toLowerCase().includes(query) ||
          calc.categoryLabel.toLowerCase().includes(query))
      );
    });
  }, [allCombinedCalculators, calcCategoryFilter, searchQuery]);

  // Combined Topics Registry (All Linear Algebra, Calculus 1 & Calculus 2 topics)
  const allCombinedTopics = useMemo<UnifiedTopicItem[]>(() => {
    const list: UnifiedTopicItem[] = [];

    // 1. Linear Algebra
    if (Array.isArray(LINEAR_ALGEBRA_TOPICS_RAW)) {
      LINEAR_ALGEBRA_TOPICS_RAW.forEach((t, idx) => {
        if (t && t.title) {
          list.push({
            id: t.id || `la-${idx}`,
            title: t.title,
            category: "linear-algebra",
            categoryLabel: "Linear Algebra",
            chapter: `Module ${idx + 1}`,
            chapterNumber: idx + 1,
            summary:
              t.summary ||
              "Explore linear transformations, spaces, and matrices.",
            details:
              t.details ||
              "Comprehensive guide and formal mathematical treatment.",
            examples: Array.isArray(t.examples) ? t.examples : [],
          });
        }
      });
    }

    // 2. Calculus 1
    if (Array.isArray(ALL_CALCULUS_TOPICS)) {
      ALL_CALCULUS_TOPICS.forEach((t) => {
        if (t && t.title) {
          list.push({
            id: t.id,
            title: t.title,
            category: "calculus-1",
            categoryLabel: "Calculus 1",
            chapter: t.subCategoryLabel || `Chapter ${t.chapterNumber}`,
            chapterNumber: t.chapterNumber,
            summary:
              t.summary || "Core differential and integral calculus concepts.",
            details: t.details || "Step-by-step principles and theorems.",
            examples: Array.isArray(t.examples) ? t.examples : [],
          });
        }
      });
    }

    // 3. Calculus 2
    if (Array.isArray(ALL_CALCULUS_2_TOPICS)) {
      ALL_CALCULUS_2_TOPICS.forEach((t) => {
        if (t && t.title) {
          list.push({
            id: t.id,
            title: t.title,
            category: "calculus-2",
            categoryLabel: "Calculus 2",
            chapter: t.subCategoryLabel || `Chapter ${t.chapterNumber}`,
            chapterNumber: t.chapterNumber,
            summary:
              t.summary ||
              "Advanced techniques of integration, series, and geometry.",
            details:
              t.details || "In-depth analytical methods and applications.",
            examples: Array.isArray(t.examples) ? t.examples : [],
          });
        }
      });
    }

    return list;
  }, []);

  // Filtered topics
  const filteredTopics = useMemo(() => {
    return allCombinedTopics.filter((top) => {
      const matchesCategory =
        topicCategoryFilter === "all" || top.category === topicCategoryFilter;

      const matchesChapter =
        selectedChapterFilter === "all" ||
        top.chapter === selectedChapterFilter;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory && matchesChapter;

      return (
        matchesCategory &&
        matchesChapter &&
        (top.title.toLowerCase().includes(query) ||
          top.summary.toLowerCase().includes(query) ||
          top.chapter.toLowerCase().includes(query) ||
          top.details.toLowerCase().includes(query) ||
          top.categoryLabel.toLowerCase().includes(query))
      );
    });
  }, [
    allCombinedTopics,
    topicCategoryFilter,
    selectedChapterFilter,
    searchQuery,
  ]);

  // Unique chapters for active category
  const availableChapters = useMemo(() => {
    const chapters = new Set<string>();
    allCombinedTopics.forEach((t) => {
      if (topicCategoryFilter === "all" || t.category === topicCategoryFilter) {
        if (t.chapter) chapters.add(t.chapter);
      }
    });
    return Array.from(chapters);
  }, [allCombinedTopics, topicCategoryFilter]);

  const handleNavClick = (navKey: typeof activeNav) => {
    setActiveNav(navKey);
    setActiveCalculator(null);
    setActiveTopic(null);
    setActiveTakingQuiz(null);
    setSubmittedResult(null);
    setReviewingAttempt(null);
    setMobileSidebarOpen(false);
  };

  // Fetch Quizzes and student's attempts from Supabase
  const fetchStudentQuizData = async () => {
    if (!supabase) return;
    setIsLoadingQuizzes(true);
    try {
      // 1. Fetch quizzes and questions
      const { data: quizzesData, error: qError } = await supabase
        .from("quizzes")
        .select(`
          id,
          title,
          topic,
          created_at,
          quiz_questions (
            id,
            question_index,
            prompt,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer
          )
        `)
        .order("created_at", { ascending: false });

      if (qError) {
        console.error("Error loading student quizzes:", qError);
      }

      // 2. Fetch student's own attempts if logged in
      let studentAttempts: any[] = [];
      if (user?.id) {
        const { data: attemptsData, error: aError } = await supabase
          .from("quiz_attempts")
          .select(`
            id,
            quiz_id,
            user_id,
            score,
            total_questions,
            answers_json,
            time_spent_seconds,
            submitted_at
          `)
          .eq("user_id", user.id)
          .order("submitted_at", { ascending: false });

        if (aError) {
          console.error("Error loading student quiz attempts:", aError);
        } else if (attemptsData) {
          studentAttempts = attemptsData;
        }
      }

      // Process attempts
      const quizMap = new Map((quizzesData || []).map((q: any) => [q.id, q]));
      const formattedAttempts: StudentQuizAttemptItem[] = studentAttempts.map(
        (att: any) => {
          const parentQuiz = quizMap.get(att.quiz_id);
          let parsedAnswers: QuizAnswerRecord[] = [];
          try {
            parsedAnswers = JSON.parse(att.answers_json || "[]");
          } catch {
            parsedAnswers = [];
          }

          const pct =
            att.total_questions > 0
              ? Math.round((att.score / att.total_questions) * 100)
              : 0;

          return {
            id: att.id,
            quizId: att.quiz_id,
            quizTitle: parentQuiz?.title || "Practice Quiz",
            topic: parentQuiz?.topic || "Mathematics",
            score: att.score,
            totalQuestions: att.total_questions,
            percentage: pct,
            passed: pct >= 60,
            timeSpentSeconds: att.time_spent_seconds || 0,
            submittedAt: new Date(att.submitted_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
            answers: parsedAnswers,
          };
        },
      );

      setMyAttempts(formattedAttempts);

      // Process available quizzes
      if (quizzesData) {
        const formattedQuizzes: StudentAvailableQuiz[] = quizzesData.map(
          (q: any) => {
            const rawQ = Array.isArray(q.quiz_questions)
              ? q.quiz_questions
              : [];
            const sortedQ = [...rawQ].sort(
              (a: any, b: any) =>
                (a.question_index ?? 0) - (b.question_index ?? 0),
            );
            const qItems: QuizQuestionItem[] = sortedQ.map(
              (sq: any, idx: number) => ({
                id: sq.id,
                questionIndex: sq.question_index ?? idx + 1,
                prompt: sq.prompt,
                optionA: sq.option_a,
                optionB: sq.option_b,
                optionC: sq.option_c,
                optionD: sq.option_d,
                correctAnswer: (sq.correct_answer || "A") as
                  | "A"
                  | "B"
                  | "C"
                  | "D",
              }),
            );

            const relevantAttempts = formattedAttempts.filter(
              (att) => att.quizId === q.id,
            );
            const attemptsCount = relevantAttempts.length;
            const bestScore =
              attemptsCount > 0
                ? Math.max(...relevantAttempts.map((a) => a.percentage))
                : undefined;
            const lastScore =
              attemptsCount > 0 ? relevantAttempts[0].percentage : undefined;

            return {
              id: q.id,
              title: q.title,
              topic: q.topic,
              questionsCount: qItems.length,
              questions: qItems,
              createdAt: new Date(q.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
              attemptsCount,
              bestScore,
              lastScore,
            };
          },
        );

        setAvailableQuizzes(formattedQuizzes);
      }
    } catch (err) {
      console.error("Failed to load student quiz catalog:", err);
    } finally {
      setIsLoadingQuizzes(false);
    }
  };

  useEffect(() => {
    fetchStudentQuizData();
  }, [user?.id]);

  // Timer effect when taking quiz
  useEffect(() => {
    let interval: any = null;
    if (activeTakingQuiz && !submittedResult) {
      interval = setInterval(() => {
        setQuizTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeTakingQuiz, submittedResult]);

  const handleStartQuiz = (quiz: StudentAvailableQuiz) => {
    setActiveTakingQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizTimerSeconds(0);
    setSubmittedResult(null);
    setReviewingAttempt(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectAnswer = (
    questionId: string,
    choice: "A" | "B" | "C" | "D",
  ) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: choice,
    }));
  };

  const handleSubmitQuiz = async () => {
    if (!activeTakingQuiz) return;

    const questions = activeTakingQuiz.questions;
    const answeredCount = Object.keys(selectedAnswers).length;

    if (answeredCount < questions.length) {
      const confirmSubmit = window.confirm(
        `You have answered ${answeredCount} of ${questions.length} questions. Do you want to submit your answers now?`,
      );
      if (!confirmSubmit) return;
    }

    setIsSubmittingQuiz(true);
    try {
      // Calculate score & detailed answer records
      let calculatedScore = 0;
      const detailedAnswers: QuizAnswerRecord[] = questions.map((q) => {
        const studentChoice = selectedAnswers[q.id] || "";
        const isRight = studentChoice === q.correctAnswer;
        if (isRight) calculatedScore += 1;

        return {
          questionId: q.id,
          prompt: q.prompt,
          selected: studentChoice as any,
          correct: q.correctAnswer,
          isCorrect: isRight,
          options: {
            A: q.optionA,
            B: q.optionB,
            C: q.optionC,
            D: q.optionD,
          },
        };
      });

      const totalQuestions = questions.length;
      const pct =
        totalQuestions > 0
          ? Math.round((calculatedScore / totalQuestions) * 100)
          : 0;
      const timeSpent = quizTimerSeconds;

      let attemptId = Date.now().toString();

      // Store in Supabase
      if (supabase && user?.id) {
        const { data: attemptData, error: attemptError } = await supabase
          .from("quiz_attempts")
          .insert([
            {
              quiz_id: activeTakingQuiz.id,
              user_id: user.id,
              score: calculatedScore,
              total_questions: totalQuestions,
              answers_json: JSON.stringify(detailedAnswers),
              time_spent_seconds: timeSpent,
            },
          ])
          .select("id")
          .single();

        if (attemptError) {
          console.error("Error inserting quiz attempt:", attemptError);
        } else if (attemptData) {
          attemptId = attemptData.id;
        }
      }

      const newAttempt: StudentQuizAttemptItem = {
        id: attemptId,
        quizId: activeTakingQuiz.id,
        quizTitle: activeTakingQuiz.title,
        topic: activeTakingQuiz.topic,
        score: calculatedScore,
        totalQuestions,
        percentage: pct,
        passed: pct >= 60,
        timeSpentSeconds: timeSpent,
        submittedAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        answers: detailedAnswers,
      };

      setSubmittedResult(newAttempt);
      await fetchStudentQuizData();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Failed to submit quiz:", err);
      alert("An error occurred while submitting your quiz. Please try again.");
    } finally {
      setIsSubmittingQuiz(false);
    }
  };

  const handleExitQuiz = () => {
    if (!submittedResult) {
      const confirmExit = window.confirm(
        "Are you sure you want to exit? Your progress on this quiz will not be saved.",
      );
      if (!confirmExit) return;
    }
    setActiveTakingQuiz(null);
    setSubmittedResult(null);
    setSelectedAnswers({});
    setQuizTimerSeconds(0);
    setCurrentQuestionIndex(0);
  };

  // Format time in mm:ss or hh:mm:ss
  const formatSeconds = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (mins >= 60) {
      const hrs = Math.floor(mins / 60);
      const remMins = mins % 60;
      return `${hrs}h ${remMins}m`;
    }
    return `${mins}m ${secs < 10 ? "0" : ""}${secs}s`;
  };

  // Student analytics computations
  const totalQuizzesTaken = myAttempts.length;
  const passedQuizzesCount = myAttempts.filter((a) => a.passed).length;
  const studentAverageScore =
    totalQuizzesTaken > 0
      ? Math.round(
          myAttempts.reduce((acc, a) => acc + a.percentage, 0) /
            totalQuizzesTaken,
        )
      : 0;
  const studentHighestScore =
    totalQuizzesTaken > 0
      ? Math.max(...myAttempts.map((a) => a.percentage))
      : 0;
  const totalTimeSpentSeconds = myAttempts.reduce(
    (acc, a) => acc + a.timeSpentSeconds,
    0,
  );

  // Filtered available quizzes list
  const filteredAvailableQuizzes = useMemo(() => {
    return availableQuizzes.filter((quiz) => {
      const matchesTopic =
        quizFilterTopic === "all" ||
        quiz.topic.toLowerCase() === quizFilterTopic.toLowerCase();
      const matchesSearch =
        !quizSearchTerm ||
        quiz.title.toLowerCase().includes(quizSearchTerm.toLowerCase()) ||
        quiz.topic.toLowerCase().includes(quizSearchTerm.toLowerCase());
      return matchesTopic && matchesSearch;
    });
  }, [availableQuizzes, quizFilterTopic, quizSearchTerm]);

  const displayName =
    user?.name || (user?.email ? user.email.split("@")[0] : "Jeoff");
  const userInitial = displayName.charAt(0).toUpperCase() || "J";

  // Counts for category badges
  const laCalcCount = allCombinedCalculators.filter(
    (c) => c.category === "linear-algebra",
  ).length;
  const c1CalcCount = allCombinedCalculators.filter(
    (c) => c.category === "calculus-1",
  ).length;
  const c2CalcCount = allCombinedCalculators.filter(
    (c) => c.category === "calculus-2",
  ).length;

  const laTopicCount = allCombinedTopics.filter(
    (t) => t.category === "linear-algebra",
  ).length;
  const c1TopicCount = allCombinedTopics.filter(
    (t) => t.category === "calculus-1",
  ).length;
  const c2TopicCount = allCombinedTopics.filter(
    (t) => t.category === "calculus-2",
  ).length;

  // Helper to render active linear algebra solver
  const renderLinearAlgebraComponent = (calcId: string) => {
    switch (calcId) {
      case "la-matrix-ops":
        return <MatrixOperations />;
      case "la-determinant":
        return <DeterminantCalculator />;
      case "la-matrix-inv":
        return <MatrixInverse />;
      case "la-eigenvalues":
        return <EigenCalculator />;
      case "la-system-equations":
        return <SystemOfEquations />;
      case "la-dot-product":
        return <DotProduct />;
      case "la-cross-product":
        return <CrossProduct />;
      case "la-vector-proj":
        return <VectorProjection />;
      case "la-vector-calc":
        return <VectorCalculator />;
      case "la-rank-nullity":
        return <RankCalculator />;
      case "la-linear-indep":
        return <LinearIndependence />;
      case "la-linear-comb":
        return <LinearCombination />;
      case "la-basis-calculator":
        return <BasisCalculator />;
      case "la-span-calc":
        return <SpanCalculator />;
      case "la-lu-decomp":
        return <LUDecomposition />;
      case "la-qr-decomp":
        return <QRDecomposition />;
      case "la-svd":
        return <SVDCalculator />;
      case "la-diagonalization":
        return <Diagonalization />;
      case "la-transpose":
        return <TransposeCalculator />;
      case "la-least-squares":
        return <LeastSquares />;
      case "la-linear-trans":
        return <LinearTransformation />;
      case "la-quadratic-form":
        return <QuadraticForm />;
      default:
        return <MatrixCalculator />;
    }
  };

  const getCalculusDefinition = (
    defId?: string,
  ): CalculatorDefinition | undefined => {
    if (!defId) return undefined;
    return CALCULATOR_DEFINITIONS.find((d) => d.id === defId);
  };

  return (
    <div className="fixed inset-0 z-40 bg-[#F8F9FA] text-[#1F242D] font-sans antialiased flex overflow-hidden select-none">
      {/* ========================================================================= */}
      {/* 1. LEFT SIDEBAR (Desktop Fixed + Mobile Slide-over Drawer)                */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex w-[260px] bg-white border-r border-[#EAEBED] flex-col justify-between p-5 h-full shrink-0 select-none z-30 shadow-[1px_0_4px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col gap-6">
          {/* Brand Logo Header */}
          <div className="flex items-center gap-3 px-1 py-1">
            <div className="w-10 h-10 rounded-xl bg-[#801424] flex items-center justify-center shadow-md shadow-[#801424]/20 shrink-0">
              <span className="font-serif text-2xl font-bold text-white leading-none select-none">
                Σ
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[1.05rem] font-black tracking-tight text-[#1F242D]">
                Math
                <span className="font-semibold text-[#801424]">Workspace</span>
              </span>
              <span className="text-[0.68rem] font-medium text-[#8C93A0]">
                Learn. Think. Create.
              </span>
            </div>
          </div>

          {/* Main Navigation Links */}
          <nav className="flex flex-col gap-1 mt-1">
            {/* Dashboard Link (Active Maroon Pill) */}
            <button
              onClick={() => handleNavClick("dashboard")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "dashboard"
                  ? "bg-[#801424] text-white shadow-sm shadow-[#801424]/25"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <LayoutDashboard className="w-4 h-4 shrink-0" />
              <span>Dashboard</span>
            </button>

            {/* LEARN Section */}
            <div className="pt-4 pb-1">
              <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                LEARN
              </span>
            </div>

            {/* Calculators Link */}
            <button
              onClick={() => handleNavClick("calculators")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "calculators"
                  ? "bg-[#801424] text-white shadow-sm shadow-[#801424]/25 font-semibold"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-4 h-4 shrink-0" />
                <span>Calculators</span>
              </div>
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                  activeNav === "calculators"
                    ? "bg-white/20 text-white"
                    : "bg-[#F0F1F3] text-[#6B7280]"
                }`}
              >
                {allCombinedCalculators.length}
              </span>
            </button>

            {/* Topics Link */}
            <button
              onClick={() => handleNavClick("topics")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "topics"
                  ? "bg-[#801424] text-white shadow-sm shadow-[#801424]/25 font-semibold"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Topics</span>
              </div>
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                  activeNav === "topics"
                    ? "bg-white/20 text-white"
                    : "bg-[#F0F1F3] text-[#6B7280]"
                }`}
              >
                {allCombinedTopics.length}
              </span>
            </button>

            {/* PRACTICE Section */}
            <div className="pt-4 pb-1">
              <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                PRACTICE
              </span>
            </div>

            {/* Quizzes */}
            <button
              onClick={() => handleNavClick("quizzes")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "quizzes"
                  ? "bg-[#801424] text-white shadow-sm shadow-[#801424]/25 font-semibold"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>Quizzes</span>
            </button>

            {/* Quizzes History */}
            <button
              onClick={() => handleNavClick("quizzes-history")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "quizzes-history"
                  ? "bg-[#801424] text-white shadow-sm shadow-[#801424]/25 font-semibold"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <History className="w-4 h-4 shrink-0" />
              <span>Quizzes History</span>
            </button>

            {/* Quiz Results */}
            <button
              onClick={() => handleNavClick("quiz-results")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "quiz-results"
                  ? "bg-[#801424] text-white shadow-sm shadow-[#801424]/25 font-semibold"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <Trophy className="w-4 h-4 shrink-0" />
              <span>Quiz Results</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Bottom Card: Keep Learning Widget */}
        <div className="mt-auto pt-4">
          <div className="bg-[#F8F9FA] border border-[#EAEBED] rounded-2xl p-4 relative overflow-hidden flex flex-col shadow-xs">
            <div className="flex flex-col mb-1 z-10">
              <span className="text-[0.78rem] font-bold text-[#4B5565]">
                Keep learning,
              </span>
              <span className="text-[0.95rem] font-extrabold text-[#801424] flex items-center gap-1">
                {displayName}! 🚀
              </span>
              <p className="text-[0.7rem] text-[#6B7280] leading-snug mt-1 max-w-[170px]">
                Solve more quizzes and track your progress.
              </p>
            </div>

            {/* Student Study Illustration */}
            <div className="w-full mt-2 flex justify-center items-center relative">
              <img
                src={studentIllustration}
                alt="Student Illustration"
                className="w-full h-auto max-h-32 object-contain select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Drawer Backdrop */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-50 lg:hidden backdrop-blur-xs"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Slide-over */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 left-0 bottom-0 w-[270px] bg-white z-50 lg:hidden flex flex-col justify-between p-5 border-r border-[#EAEBED] shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#801424] flex items-center justify-center shadow-md text-white font-serif text-2xl font-bold">
                    Σ
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1F242D] text-base">
                      MathWorkspace
                    </span>
                    <span className="text-[0.68rem] text-[#8C93A0]">
                      Student Portal
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                <button
                  onClick={() => handleNavClick("dashboard")}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm ${
                    activeNav === "dashboard"
                      ? "bg-[#801424] text-white"
                      : "text-[#4B5565] hover:bg-[#F4F5F7]"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </button>

                <div className="pt-3 pb-1">
                  <span className="text-[0.68rem] font-bold text-[#9AA1B0] uppercase px-3.5">
                    LEARN
                  </span>
                </div>

                <button
                  onClick={() => handleNavClick("calculators")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "calculators"
                      ? "bg-[#801424] text-white font-semibold"
                      : "text-[#4B5565] hover:bg-[#F4F5F7]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Calculator className="w-4 h-4" />
                    <span>Calculators</span>
                  </div>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                    {allCombinedCalculators.length}
                  </span>
                </button>

                <button
                  onClick={() => handleNavClick("topics")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "topics"
                      ? "bg-[#801424] text-white font-semibold"
                      : "text-[#4B5565] hover:bg-[#F4F5F7]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4" />
                    <span>Topics</span>
                  </div>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                    {allCombinedTopics.length}
                  </span>
                </button>

                <div className="pt-3 pb-1">
                  <span className="text-[0.68rem] font-bold text-[#9AA1B0] uppercase px-3.5">
                    PRACTICE
                  </span>
                </div>

                <button
                  onClick={() => handleNavClick("quizzes")}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "quizzes"
                      ? "bg-[#801424] text-white font-semibold"
                      : "text-[#4B5565] hover:bg-[#F4F5F7]"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Quizzes</span>
                </button>

                <button
                  onClick={() => handleNavClick("quizzes-history")}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "quizzes-history"
                      ? "bg-[#801424] text-white font-semibold"
                      : "text-[#4B5565] hover:bg-[#F4F5F7]"
                  }`}
                >
                  <History className="w-4 h-4" />
                  <span>Quizzes History</span>
                </button>

                <button
                  onClick={() => handleNavClick("quiz-results")}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm ${
                    activeNav === "quiz-results"
                      ? "bg-[#801424] text-white font-semibold"
                      : "text-[#4B5565] hover:bg-[#F4F5F7]"
                  }`}
                >
                  <Trophy className="w-4 h-4" />
                  <span>Quiz Results</span>
                </button>
              </nav>

              {/* Mobile Keep Learning Card */}
              <div className="bg-[#F8F9FA] border border-[#EAEBED] rounded-2xl p-3 mt-2 flex flex-col">
                <span className="text-[0.72rem] font-bold text-[#4B5565]">
                  Keep learning,
                </span>
                <span className="text-[0.85rem] font-extrabold text-[#801424]">
                  {displayName}! 🚀
                </span>
                <div className="w-full mt-2 flex justify-center">
                  <img
                    src={studentIllustration}
                    alt="Student Illustration"
                    className="w-full h-auto max-h-24 object-contain select-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAEBED]">
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-red-600 hover:bg-red-50 text-sm font-medium"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 2. MAIN VIEWPORT & TOPBAR                                                 */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#F8F9FA]">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-[#EAEBED] px-4 sm:px-8 flex items-center justify-between shrink-0 z-20">
          {/* Mobile Hamburger & Search Bar */}
          <div className="flex items-center gap-3 flex-1 max-w-[560px]">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Search Input Box */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#8C93A0] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="student-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search calculators, topics, formulas..."
                className="w-full bg-[#F5F6F8] hover:bg-[#EFF0F3] focus:bg-white text-xs sm:text-sm text-[#1F242D] placeholder-[#8C93A0] pl-10 pr-16 py-2.5 rounded-xl border border-transparent focus:border-[#801424]/30 focus:ring-2 focus:ring-[#801424]/10 outline-none transition-all duration-200"
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 pointer-events-none">
                <span className="text-[10px] font-semibold text-[#8C93A0] bg-white border border-[#E0E2E6] px-1.5 py-0.5 rounded shadow-2xs">
                  Ctrl
                </span>
                <span className="text-[10px] font-semibold text-[#8C93A0] bg-white border border-[#E0E2E6] px-1.5 py-0.5 rounded shadow-2xs">
                  K
                </span>
              </div>
            </div>
          </div>

          {/* Right Header Controls: User Profile */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* User Profile Pill & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center gap-2.5 cursor-pointer group py-1 pl-1 pr-1.5 rounded-xl hover:bg-gray-100/70 transition"
              >
                <div className="flex flex-col text-right hidden sm:flex leading-tight">
                  <span className="text-xs font-bold text-[#1F242D]">
                    {displayName}
                  </span>
                  <span className="text-[11px] font-medium text-[#8C93A0]">
                    Student
                  </span>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#801424] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                  {userInitial}
                </div>

                <ChevronDown className="w-3.5 h-3.5 text-[#8C93A0] group-hover:text-[#1F242D] transition-transform" />
              </button>

              {/* Profile Dropdown Menu */}
              <AnimatePresence>
                {isUserDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl border border-[#EAEBED] shadow-xl p-1.5 z-50 flex flex-col gap-1"
                  >
                    <div className="px-3 py-2 border-b border-gray-100">
                      <p className="text-xs font-bold text-gray-800">
                        {displayName}
                      </p>
                      <p className="text-[11px] text-gray-500 truncate">
                        {user?.email || "student@mathworkspace.edu"}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        navigate("/?tab=home");
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-100 text-left cursor-pointer"
                    >
                      <GraduationCap className="w-4 h-4 text-gray-500" />
                      <span>Public Home</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        handleNavClick("topics");
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-100 text-left cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-gray-500" />
                      <span>Browse Curriculum</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        handleNavClick("calculators");
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-100 text-left cursor-pointer"
                    >
                      <Calculator className="w-4 h-4 text-gray-500" />
                      <span>Math Calculators</span>
                    </button>

                    <div className="h-[1px] bg-gray-100 my-0.5" />

                    <button
                      onClick={() => {
                        setIsUserDropdownOpen(false);
                        logout();
                        navigate("/login");
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 text-left cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 text-red-500" />
                      <span>Sign Out</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Scrollable Main Content Container */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 flex flex-col gap-6">
          {/* ===================================================================== */}
          {/* VIEW A: MAIN DASHBOARD VIEW                                           */}
          {/* ===================================================================== */}
          {activeNav === "dashboard" && (
            <>
              {/* TOP ROW: HERO WELCOME BANNER (LEFT) & YOUR PROGRESS CARD (RIGHT) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* 1. Left Hero Banner (7 cols) */}
                <div className="lg:col-span-7 bg-white border border-[#EAEBED] rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
                  {/* Left Column Text & Buttons */}
                  <div className="flex flex-col items-start z-10 max-w-sm">
                    <span className="text-base sm:text-lg font-bold text-[#1F242D]">
                      Welcome back,
                    </span>
                    <h1 className="text-3xl sm:text-[2.35rem] font-extrabold text-[#801424] tracking-tight leading-tight mt-0.5 mb-1.5 flex items-center gap-2">
                      {displayName}! <span>👋</span>
                    </h1>
                    <p className="text-xs sm:text-sm font-medium text-[#6B7280] mb-6 leading-relaxed">
                      Let's continue your math journey today.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => handleNavClick("quizzes")}
                        className="bg-[#801424] hover:bg-[#6b111e] active:scale-98 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                      >
                        <span>Start Practicing</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleNavClick("topics")}
                        className="bg-white hover:bg-[#F8F9FA] active:scale-98 text-[#1F242D] border border-[#E0E2E6] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-200 cursor-pointer"
                      >
                        <BookOpen className="w-4 h-4 text-[#801424]" />
                        <span>Browse Topics</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Hero Desktop Workspace Illustration */}
                  <div className="w-full sm:w-56 md:w-64 h-44 sm:h-48 shrink-0 flex items-center justify-center relative">
                    <svg
                      viewBox="0 0 240 180"
                      className="w-full h-full object-contain"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="120"
                        cy="165"
                        rx="100"
                        ry="10"
                        fill="#F3F4F6"
                      />
                      <path
                        d="M 125 125 L 125 152 L 110 156 L 140 156 L 125 152"
                        stroke="#4B5563"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M 100 156 L 150 156"
                        stroke="#374151"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />

                      <rect
                        x="68"
                        y="28"
                        width="114"
                        height="84"
                        rx="7"
                        fill="#1F242D"
                      />
                      <rect
                        x="73"
                        y="33"
                        width="104"
                        height="74"
                        rx="4"
                        fill="#FFFFFF"
                      />

                      <circle cx="80" cy="40" r="2.5" fill="#EF4444" />
                      <line
                        x1="88"
                        y1="40"
                        x2="110"
                        y2="40"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />

                      <circle
                        cx="98"
                        cy="68"
                        r="15"
                        stroke="#F3F4F6"
                        strokeWidth="5"
                        fill="none"
                      />
                      <circle
                        cx="98"
                        cy="68"
                        r="15"
                        stroke="#801424"
                        strokeWidth="5"
                        strokeDasharray="60 40"
                        strokeDashoffset="10"
                        fill="none"
                      />

                      <rect
                        x="126"
                        y="70"
                        width="6"
                        height="18"
                        rx="2"
                        fill="#801424"
                      />
                      <rect
                        x="136"
                        y="58"
                        width="6"
                        height="30"
                        rx="2"
                        fill="#801424"
                      />
                      <rect
                        x="146"
                        y="64"
                        width="6"
                        height="24"
                        rx="2"
                        fill="#9CA3AF"
                      />
                      <rect
                        x="156"
                        y="52"
                        width="6"
                        height="36"
                        rx="2"
                        fill="#801424"
                      />

                      <path
                        d="M 44 140 L 46 156 L 58 156 L 60 140 Z"
                        fill="#FFFFFF"
                        stroke="#D1D5DB"
                        strokeWidth="1.5"
                      />
                      <ellipse
                        cx="52"
                        cy="140"
                        rx="8"
                        ry="2.5"
                        fill="#9CA3AF"
                      />
                      <path
                        d="M 52 138 C 50 126, 42 128, 45 136 Z"
                        fill="#059669"
                      />
                      <path
                        d="M 52 138 C 54 124, 62 128, 59 136 Z"
                        fill="#10B981"
                      />
                      <path
                        d="M 52 138 C 52 120, 52 120, 52 134 Z"
                        fill="#34D399"
                      />

                      <rect
                        x="175"
                        y="148"
                        width="46"
                        height="9"
                        rx="2"
                        fill="#801424"
                      />
                      <rect
                        x="177"
                        y="149"
                        width="40"
                        height="7"
                        rx="1"
                        fill="#FFFFFF"
                      />
                      <rect
                        x="178"
                        y="139"
                        width="42"
                        height="9"
                        rx="2"
                        fill="#374151"
                      />
                      <rect
                        x="180"
                        y="140"
                        width="36"
                        height="7"
                        rx="1"
                        fill="#F3F4F6"
                      />
                      <rect
                        x="182"
                        y="130"
                        width="36"
                        height="9"
                        rx="2"
                        fill="#801424"
                      />
                      <rect
                        x="184"
                        y="131"
                        width="30"
                        height="7"
                        rx="1"
                        fill="#FFFFFF"
                      />

                      <path
                        d="M 194 116 L 195 130 L 207 130 L 208 116 Z"
                        fill="#801424"
                      />
                      <path
                        d="M 207 119 C 212 119, 212 127, 207 127"
                        stroke="#801424"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M 198 112 Q 199 107, 197 103"
                        stroke="#9CA3AF"
                        strokeWidth="1"
                        strokeLinecap="round"
                        opacity="0.6"
                      />
                      <path
                        d="M 203 112 Q 204 106, 202 101"
                        stroke="#9CA3AF"
                        strokeWidth="1"
                        strokeLinecap="round"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                </div>

                {/* 2. Right "Your Progress" Card (5 cols) */}
                <div className="lg:col-span-5 bg-white border border-[#EAEBED] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                  {/* Card Header + Time Dropdown */}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm sm:text-base font-bold text-[#1F242D]">
                      Your Progress
                    </h2>

                    <div className="relative">
                      <button
                        onClick={() =>
                          setIsTimeDropdownOpen(!isTimeDropdownOpen)
                        }
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E0E2E6] bg-white hover:bg-[#F8F9FA] text-xs font-semibold text-[#4B5565] transition cursor-pointer"
                      >
                        <span>{timeRange}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-[#8C93A0]" />
                      </button>

                      <AnimatePresence>
                        {isTimeDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="absolute right-0 top-full mt-1.5 w-32 bg-white rounded-xl border border-[#EAEBED] shadow-lg p-1 z-30 flex flex-col"
                          >
                            {(
                              [
                                "Today",
                                "This Week",
                                "This Month",
                                "All Time",
                              ] as const
                            ).map((opt) => (
                              <button
                                key={opt}
                                onClick={() => {
                                  setTimeRange(opt);
                                  setIsTimeDropdownOpen(false);
                                }}
                                className={`px-2.5 py-1.5 text-xs text-left rounded-lg font-medium transition cursor-pointer ${
                                  timeRange === opt
                                    ? "bg-[#801424] text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Circular Donut & Legend Column */}
                  <div className="flex items-center justify-between gap-4 py-2">
                    {/* Donut Chart */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 flex items-center justify-center">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full -rotate-90"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          className="stroke-[#EAEBED]"
                          strokeWidth="10"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          className="stroke-[#801424] transition-all duration-1000"
                          strokeWidth="10"
                          strokeDasharray="251.2"
                          strokeDashoffset={
                            251.2 - (251.2 * studentAverageScore) / 100
                          }
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-xl sm:text-2xl font-extrabold text-[#1F242D] leading-none">
                          {studentAverageScore}%
                        </span>
                        <span className="text-[10px] font-semibold text-[#8C93A0] mt-1">
                          Overall Progress
                        </span>
                      </div>
                    </div>

                    {/* Legend Stat Items */}
                    <div className="flex flex-col gap-2 flex-1 pl-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-xs bg-[#10B981]" />
                          <span className="text-[#4B5565] font-medium text-[11px] sm:text-xs">
                            Quizzes Taken
                          </span>
                        </div>
                        <span className="font-bold text-[#1F242D] text-xs">
                          {totalQuizzesTaken}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-xs bg-[#F59E0B]" />
                          <span className="text-[#4B5565] font-medium text-[11px] sm:text-xs">
                            Average Score
                          </span>
                        </div>
                        <span className="font-bold text-[#1F242D] text-xs">
                          {studentAverageScore}%
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-xs bg-[#801424]" />
                          <span className="text-[#4B5565] font-medium text-[11px] sm:text-xs">
                            Highest Score
                          </span>
                        </div>
                        <span className="font-bold text-[#1F242D] text-xs">
                          {studentHighestScore}%
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-xs bg-[#1F242D]" />
                          <span className="text-[#4B5565] font-medium text-[11px] sm:text-xs">
                            Time Spent
                          </span>
                        </div>
                        <span className="font-bold text-[#1F242D] text-xs">
                          {formatSeconds(totalTimeSpentSeconds)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Dual Mini Stat Boxes */}
                  <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-[#F0F1F3]">
                    <div className="bg-[#F8F9FA] border border-[#EAEBED] rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#801424] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-[10px] font-medium text-[#8C93A0]">
                          Average Score
                        </span>
                        <span className="text-base font-bold text-[#1F242D]">
                          {studentAverageScore}%
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#F8F9FA] border border-[#EAEBED] rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F8E9EB] text-[#801424] flex items-center justify-center shrink-0">
                        <Trophy className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-[10px] font-medium text-[#8C93A0]">
                          Highest Score
                        </span>
                        <span className="text-base font-bold text-[#1F242D]">
                          {studentHighestScore}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MIDDLE ROW: 4 STAT METRIC CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {/* 1. Quizzes Taken */}
                <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4 transition hover:shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#FCE8EB] text-[#801424] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#8C93A0]">
                      Quizzes Available
                    </span>
                    <span className="text-2xl font-bold text-[#1F242D] leading-tight my-0.5">
                      {availableQuizzes.length}
                    </span>
                    <span className="text-[11px] font-medium text-[#9AA1B0]">
                      From Admin
                    </span>
                  </div>
                </div>

                {/* 2. Total Attempts */}
                <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4 transition hover:shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#FCE8EB] text-[#801424] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#8C93A0]">
                      Total Submissions
                    </span>
                    <span className="text-2xl font-bold text-[#1F242D] leading-tight my-0.5">
                      {totalQuizzesTaken}
                    </span>
                    <span className="text-[11px] font-medium text-[#9AA1B0]">
                      {passedQuizzesCount} passed
                    </span>
                  </div>
                </div>

                {/* 3. Average Score */}
                <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4 transition hover:shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#8C93A0]">
                      Average Score
                    </span>
                    <span className="text-2xl font-bold text-[#1F242D] leading-tight my-0.5">
                      {studentAverageScore}%
                    </span>
                    <span className="text-[11px] font-medium text-[#9AA1B0]">
                      Best: {studentHighestScore}%
                    </span>
                  </div>
                </div>

                {/* 4. Time Studied */}
                <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4 transition hover:shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#FCE8EB] text-[#801424] flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#8C93A0]">
                      Time Practicing
                    </span>
                    <span className="text-2xl font-bold text-[#1F242D] leading-tight my-0.5">
                      {formatSeconds(totalTimeSpentSeconds)}
                    </span>
                    <span className="text-[11px] font-medium text-[#9AA1B0]">
                      All attempts
                    </span>
                  </div>
                </div>
              </div>

              {/* LOWER ROW: 2 SPLIT CARDS (RECENT QUIZZES & RECENT QUIZ HISTORY) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                {/* Card Left: Recent Quizzes */}
                <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                        Available Quizzes
                      </h3>
                      <button
                        onClick={() => handleNavClick("quizzes")}
                        className="bg-[#801424] hover:bg-[#6b111e] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition cursor-pointer"
                      >
                        View All ({availableQuizzes.length})
                      </button>
                    </div>

                    {/* Table Headers */}
                    <div className="grid grid-cols-6 text-[11px] font-semibold text-[#8C93A0] py-2 border-b border-[#F0F1F3] px-1">
                      <span className="col-span-3">Quiz Title</span>
                      <span className="col-span-1">Topic</span>
                      <span className="col-span-1 text-center">Questions</span>
                      <span className="col-span-1 text-right">Action</span>
                    </div>
                  </div>

                  {availableQuizzes.length === 0 ? (
                    <div className="py-10 flex flex-col items-center justify-center text-center">
                      <div className="w-14 h-14 rounded-full bg-[#FCE8EB] flex items-center justify-center mb-3 text-[#801424]">
                        <HelpCircle className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1F242D] mb-1">
                        No quizzes added yet
                      </h4>
                      <p className="text-xs text-[#8C93A0] mb-4">
                        Quizzes published by instructors will appear here.
                      </p>
                    </div>
                  ) : (
                    <div className="divide-y divide-[#F3F4F6] my-2">
                      {availableQuizzes.slice(0, 4).map((quiz) => (
                        <div
                          key={quiz.id}
                          className="grid grid-cols-6 items-center py-3 px-1 text-xs hover:bg-[#F9FAFB] rounded-lg transition"
                        >
                          <div className="col-span-3 min-w-0 pr-2">
                            <p className="font-bold text-[#1F242D] truncate">
                              {quiz.title}
                            </p>
                            <p className="text-[11px] text-[#8C93A0]">
                              {quiz.createdAt}
                            </p>
                          </div>
                          <div className="col-span-1">
                            <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                              {quiz.topic}
                            </span>
                          </div>
                          <div className="col-span-1 text-center font-medium text-[#4B5565]">
                            {quiz.questionsCount}
                          </div>
                          <div className="col-span-1 text-right">
                            <button
                              onClick={() => handleStartQuiz(quiz)}
                              className="px-2.5 py-1 bg-[#801424] hover:bg-[#68101D] text-white text-[11px] font-bold rounded-lg transition cursor-pointer"
                            >
                              {quiz.attemptsCount > 0 ? "Retake" : "Start"}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Right: Recent Quiz History */}
                <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                        Recent Quiz History
                      </h3>
                      <button
                        onClick={() => handleNavClick("quizzes-history")}
                        className="bg-white border border-[#E0E2E6] hover:bg-[#F8F9FA] text-[#4B5565] text-xs font-semibold px-3 py-1.5 rounded-lg transition cursor-pointer"
                      >
                        View All ({myAttempts.length})
                      </button>
                    </div>

                    {/* Table Headers */}
                    <div className="grid grid-cols-5 text-[11px] font-semibold text-[#8C93A0] py-2 border-b border-[#F0F1F3] px-1">
                      <span className="col-span-2">Quiz Title</span>
                      <span className="text-center">Score</span>
                      <span>Taken At</span>
                      <span className="text-right">Result</span>
                    </div>
                  </div>

                  {myAttempts.length === 0 ? (
                    <div className="py-10 flex flex-col items-center justify-center text-center">
                      <div className="w-14 h-14 rounded-full bg-[#FCE8EB] flex items-center justify-center mb-3 text-[#801424]">
                        <Clock className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1F242D] mb-1">
                        No quiz attempts yet
                      </h4>
                      <p className="text-xs text-[#8C93A0] mb-3">
                        Start taking quizzes to see your score history here.
                      </p>
                      <button
                        onClick={() => handleNavClick("quizzes")}
                        className="bg-[#801424] text-white text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer"
                      >
                        Take a Quiz
                      </button>
                    </div>
                  ) : (
                    <div className="divide-y divide-[#F3F4F6] my-2">
                      {myAttempts.slice(0, 4).map((att) => (
                        <div
                          key={att.id}
                          className="grid grid-cols-5 items-center py-3 px-1 text-xs hover:bg-[#F9FAFB] rounded-lg transition"
                        >
                          <div className="col-span-2 min-w-0 pr-2">
                            <p className="font-bold text-[#1F242D] truncate">
                              {att.quizTitle}
                            </p>
                            <p className="text-[11px] text-[#8C93A0]">
                              {att.topic}
                            </p>
                          </div>
                          <div className="text-center font-bold text-[#111827]">
                            {att.score}/{att.totalQuestions} ({att.percentage}%)
                          </div>
                          <div className="text-[11px] text-[#6B7280]">
                            {att.submittedAt}
                          </div>
                          <div className="text-right">
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                att.passed
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {att.passed ? "Passed" : "Failed"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* BOTTOM FULL-WIDTH CARD: QUIZ RESULTS SUMMARY */}
              <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between mb-6">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                      Quiz Results Summary
                    </h3>
                    <button
                      onClick={() => handleNavClick("quiz-results")}
                      className="bg-white border border-[#E0E2E6] hover:bg-[#F8F9FA] text-[#4B5565] text-xs font-semibold px-3 py-1.5 rounded-lg transition cursor-pointer"
                    >
                      View All
                    </button>
                  </div>

                  {/* Table Headers */}
                  <div className="grid grid-cols-5 text-[11px] font-semibold text-[#8C93A0] py-2.5 border-b border-[#F0F1F3] px-1">
                    <span>Quiz Title</span>
                    <span className="text-center">Total Students</span>
                    <span className="text-center">Average Score</span>
                    <span className="text-center">Highest Score</span>
                    <span className="text-right">Lowest Score</span>
                  </div>
                </div>

                {/* Empty State */}
                <div className="py-10 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#FCE8EB] flex items-center justify-center mb-3 text-[#801424]">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1F242D] mb-1">
                    No results available
                  </h4>
                  <p className="text-xs text-[#8C93A0]">
                    Results will appear here once students attempt quizzes.
                  </p>
                </div>
              </div>
            </>
          )}

          {/* ===================================================================== */}
          {/* VIEW B: CALCULATORS DIRECT INTERACTIVE SUITE (ALL 52+ SOLVERS)        */}
          {/* ===================================================================== */}
          {activeNav === "calculators" && (
            <div className="flex flex-col gap-6">
              {activeCalculator ? (
                /* Active Calculator Solver View */
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between bg-white border border-[#EAEBED] rounded-2xl p-4 shadow-xs">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveCalculator(null)}
                        className="p-2 rounded-xl bg-[#F8F9FA] hover:bg-gray-200 text-gray-700 transition flex items-center gap-1 text-xs font-semibold cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Calculators</span>
                      </button>
                      <div className="h-6 w-[1px] bg-gray-200 hidden sm:block" />
                      <div>
                        <h2 className="text-base font-bold text-[#1F242D]">
                          {activeCalculator.title}
                        </h2>
                        <span className="text-xs font-medium text-[#801424]">
                          {activeCalculator.categoryLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Calculator Component Container */}
                  <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs">
                    {activeCalculator.type === "linear"
                      ? renderLinearAlgebraComponent(activeCalculator.id)
                      : (() => {
                          const def = getCalculusDefinition(
                            activeCalculator.calculusDefId,
                          );
                          if (def) {
                            return <CalculusCalculator definition={def} />;
                          }
                          return (
                            <div className="p-8 text-center text-sm text-gray-500">
                              Solver definition not found.
                            </div>
                          );
                        })()}
                  </div>
                </div>
              ) : (
                /* Calculators List & Filter */
                <div className="flex flex-col gap-6">
                  {/* Header Banner */}
                  <div className="bg-white border border-[#EAEBED] rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#801424]" />
                        <h2 className="text-xl font-extrabold text-[#1F242D]">
                          All Math Calculators ({allCombinedCalculators.length})
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-[#6B7280]">
                        Full suite of 52+ solvers for Linear Algebra (23),
                        Calculus 1 (17), and Calculus 2 (12).
                      </p>
                    </div>

                    {/* Category Selector Tabs with Count Badges */}
                    <div className="flex flex-wrap items-center p-1 bg-[#F4F5F7] rounded-xl border border-[#EAEBED] gap-1">
                      <button
                        onClick={() => setCalcCategoryFilter("all")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                          calcCategoryFilter === "all"
                            ? "bg-[#801424] text-white shadow-xs"
                            : "text-[#4B5565] hover:text-[#1F242D]"
                        }`}
                      >
                        <span>All</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-md ${calcCategoryFilter === "all" ? "bg-white/20 text-white" : "bg-gray-200/80 text-gray-600"}`}
                        >
                          {allCombinedCalculators.length}
                        </span>
                      </button>

                      <button
                        onClick={() => setCalcCategoryFilter("linear-algebra")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                          calcCategoryFilter === "linear-algebra"
                            ? "bg-[#801424] text-white shadow-xs"
                            : "text-[#4B5565] hover:text-[#1F242D]"
                        }`}
                      >
                        <span>Linear Algebra</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-md ${calcCategoryFilter === "linear-algebra" ? "bg-white/20 text-white" : "bg-gray-200/80 text-gray-600"}`}
                        >
                          {laCalcCount}
                        </span>
                      </button>

                      <button
                        onClick={() => setCalcCategoryFilter("calculus-1")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                          calcCategoryFilter === "calculus-1"
                            ? "bg-[#801424] text-white shadow-xs"
                            : "text-[#4B5565] hover:text-[#1F242D]"
                        }`}
                      >
                        <span>Calculus 1</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-md ${calcCategoryFilter === "calculus-1" ? "bg-white/20 text-white" : "bg-gray-200/80 text-gray-600"}`}
                        >
                          {c1CalcCount}
                        </span>
                      </button>

                      <button
                        onClick={() => setCalcCategoryFilter("calculus-2")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                          calcCategoryFilter === "calculus-2"
                            ? "bg-[#801424] text-white shadow-xs"
                            : "text-[#4B5565] hover:text-[#1F242D]"
                        }`}
                      >
                        <span>Calculus 2</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-md ${calcCategoryFilter === "calculus-2" ? "bg-white/20 text-white" : "bg-gray-200/80 text-gray-600"}`}
                        >
                          {c2CalcCount}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Calculator Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filteredCalculators.map((calc) => (
                      <div
                        key={calc.id}
                        onClick={() => setActiveCalculator(calc)}
                        className="bg-white border border-[#EAEBED] hover:border-[#801424]/40 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-bold text-[#801424] bg-[#FCE8EB] px-2.5 py-0.5 rounded-full">
                              {calc.badge}
                            </span>
                            <span className="text-[11px] font-medium text-[#8C93A0]">
                              {calc.categoryLabel}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-[#1F242D] group-hover:text-[#801424] transition">
                            {calc.title}
                          </h3>

                          <p className="text-xs text-[#6B7280] line-clamp-2 my-2">
                            {calc.description}
                          </p>

                          <div className="bg-[#F8F9FA] rounded-xl p-2.5 text-xs font-mono text-[#801424] border border-[#EAEBED] truncate my-2">
                            {calc.formula}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#801424]">
                          <span>Launch Solver</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===================================================================== */}
          {/* VIEW C: TOPICS CURRICULUM BROWSER (ALL CHAPTERS & MODULES)            */}
          {/* ===================================================================== */}
          {activeNav === "topics" && (
            <div className="flex flex-col gap-6">
              {activeTopic ? (
                /* Topic Details Reader View */
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between bg-white border border-[#EAEBED] rounded-2xl p-4 shadow-xs">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveTopic(null)}
                        className="p-2 rounded-xl bg-[#F8F9FA] hover:bg-gray-200 text-gray-700 transition flex items-center gap-1 text-xs font-semibold cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Topics</span>
                      </button>
                      <div className="h-6 w-[1px] bg-gray-200 hidden sm:block" />
                      <div>
                        <h2 className="text-base font-bold text-[#1F242D]">
                          {activeTopic.title}
                        </h2>
                        <span className="text-xs font-medium text-[#801424]">
                          {activeTopic.chapter} • {activeTopic.categoryLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Topic Reader Body */}
                  <div className="bg-white border border-[#EAEBED] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-6 leading-relaxed">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1F242D] mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#801424]" />
                        <span>Executive Summary</span>
                      </h3>
                      <p className="text-sm text-gray-700 bg-[#F8F9FA] p-4 rounded-xl border border-gray-100 leading-relaxed">
                        {activeTopic.summary}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1F242D] mb-2 flex items-center gap-2">
                        <BookMarked className="w-4 h-4 text-[#801424]" />
                        <span>Core Mathematical Theory & Principles</span>
                      </h3>
                      <div className="text-sm text-gray-700 whitespace-pre-line leading-loose bg-white p-2">
                        {activeTopic.details}
                      </div>
                    </div>

                    {activeTopic.examples &&
                      activeTopic.examples.length > 0 && (
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-[#1F242D] mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#801424]" />
                            <span>Worked Examples & Practical Exercises</span>
                          </h3>
                          <div className="space-y-3">
                            {activeTopic.examples.map((ex, idx) => (
                              <div
                                key={idx}
                                className="p-4 rounded-xl bg-[#FDF2F4] border border-[#F8D7DA] text-xs sm:text-sm text-[#801424] font-mono leading-relaxed"
                              >
                                <div className="text-[11px] font-bold uppercase tracking-wider text-[#801424]/70 mb-1">
                                  Example {idx + 1}
                                </div>
                                {ex}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              ) : (
                /* Topics List & Category/Chapter Filter */
                <div className="flex flex-col gap-6">
                  {/* Header Banner */}
                  <div className="bg-white border border-[#EAEBED] rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#801424]" />
                        <h2 className="text-xl font-extrabold text-[#1F242D]">
                          All Curriculum Topics ({allCombinedTopics.length})
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-[#6B7280]">
                        Complete mathematical lessons for Linear Algebra,
                        Calculus 1 (Chapters 1-8), and Calculus 2 (Chapters
                        9-16).
                      </p>
                    </div>

                    {/* Category Selector Tabs */}
                    <div className="flex flex-wrap items-center p-1 bg-[#F4F5F7] rounded-xl border border-[#EAEBED] gap-1">
                      <button
                        onClick={() => {
                          setTopicCategoryFilter("all");
                          setSelectedChapterFilter("all");
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                          topicCategoryFilter === "all"
                            ? "bg-[#801424] text-white shadow-xs"
                            : "text-[#4B5565] hover:text-[#1F242D]"
                        }`}
                      >
                        <span>All</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-md ${topicCategoryFilter === "all" ? "bg-white/20 text-white" : "bg-gray-200/80 text-gray-600"}`}
                        >
                          {allCombinedTopics.length}
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setTopicCategoryFilter("linear-algebra");
                          setSelectedChapterFilter("all");
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                          topicCategoryFilter === "linear-algebra"
                            ? "bg-[#801424] text-white shadow-xs"
                            : "text-[#4B5565] hover:text-[#1F242D]"
                        }`}
                      >
                        <span>Linear Algebra</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-md ${topicCategoryFilter === "linear-algebra" ? "bg-white/20 text-white" : "bg-gray-200/80 text-gray-600"}`}
                        >
                          {laTopicCount}
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setTopicCategoryFilter("calculus-1");
                          setSelectedChapterFilter("all");
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                          topicCategoryFilter === "calculus-1"
                            ? "bg-[#801424] text-white shadow-xs"
                            : "text-[#4B5565] hover:text-[#1F242D]"
                        }`}
                      >
                        <span>Calculus 1</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-md ${topicCategoryFilter === "calculus-1" ? "bg-white/20 text-white" : "bg-gray-200/80 text-gray-600"}`}
                        >
                          {c1TopicCount}
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setTopicCategoryFilter("calculus-2");
                          setSelectedChapterFilter("all");
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                          topicCategoryFilter === "calculus-2"
                            ? "bg-[#801424] text-white shadow-xs"
                            : "text-[#4B5565] hover:text-[#1F242D]"
                        }`}
                      >
                        <span>Calculus 2</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-md ${topicCategoryFilter === "calculus-2" ? "bg-white/20 text-white" : "bg-gray-200/80 text-gray-600"}`}
                        >
                          {c2TopicCount}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filteredTopics.map((top) => (
                      <div
                        key={top.id}
                        onClick={() => setActiveTopic(top)}
                        className="bg-white border border-[#EAEBED] hover:border-[#801424]/40 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-bold text-[#801424] bg-[#FCE8EB] px-2.5 py-0.5 rounded-full">
                              {top.chapter}
                            </span>
                            <span className="text-[11px] font-medium text-[#8C93A0]">
                              {top.categoryLabel}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-[#1F242D] group-hover:text-[#801424] transition">
                            {top.title}
                          </h3>

                          <p className="text-xs text-[#6B7280] line-clamp-3 my-2.5">
                            {top.summary}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#801424]">
                          <span>Read Module</span>
                          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===================================================================== */}
          {/* VIEW D: ACTIVE QUIZ TAKING SCREEN                                     */}
          {/* ===================================================================== */}
          {activeTakingQuiz && !submittedResult && (
            <div className="max-w-4xl mx-auto flex flex-col gap-6 pb-24">
              {/* Top Navigation & Status Bar */}
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={handleExitQuiz}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold text-[#4B5565] hover:bg-gray-100 transition cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Exit Quiz</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-[#801424]/10 text-[#801424] px-3 py-1 rounded-full">
                      {activeTakingQuiz.topic}
                    </span>
                    <div className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#801424] animate-pulse" />
                      <span>{formatSeconds(quizTimerSeconds)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-gray-100 pt-3">
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#111827]">
                      {activeTakingQuiz.title}
                    </h2>
                    <p className="text-xs text-[#6B7280]">
                      Question {currentQuestionIndex + 1} of{" "}
                      {activeTakingQuiz.questions.length}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#801424]">
                      {Object.keys(selectedAnswers).length} /{" "}
                      {activeTakingQuiz.questions.length} answered
                    </span>
                  </div>
                </div>

                {/* Linear Progress Bar */}
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#801424] h-full transition-all duration-300 rounded-full"
                    style={{
                      width: `${
                        ((currentQuestionIndex + 1) /
                          activeTakingQuiz.questions.length) *
                        100
                      }%`,
                    }}
                  />
                </div>

                {/* Question Navigator Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                  {activeTakingQuiz.questions.map((q, idx) => {
                    const isAnswered = Boolean(selectedAnswers[q.id]);
                    const isCurrent = idx === currentQuestionIndex;
                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition flex items-center justify-center cursor-pointer shrink-0 ${
                          isCurrent
                            ? "bg-[#801424] text-white shadow-sm ring-2 ring-[#801424]/30"
                            : isAnswered
                            ? "bg-[#FCE8EB] text-[#801424] border border-[#801424]/30 font-extrabold"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Question Card */}
              {activeTakingQuiz.questions[currentQuestionIndex] && (
                <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-lg bg-[#801424] text-white text-xs font-bold px-3 py-1">
                      Question {currentQuestionIndex + 1}
                    </span>
                    <span className="text-xs text-gray-400">
                      Single Choice (1 Point)
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#1F242D] leading-relaxed">
                    {activeTakingQuiz.questions[currentQuestionIndex].prompt}
                  </h3>

                  {/* 4 Option Buttons */}
                  <div className="grid grid-cols-1 gap-3.5 pt-2">
                    {(
                      [
                        [
                          "A",
                          activeTakingQuiz.questions[currentQuestionIndex]
                            .optionA,
                        ],
                        [
                          "B",
                          activeTakingQuiz.questions[currentQuestionIndex]
                            .optionB,
                        ],
                        [
                          "C",
                          activeTakingQuiz.questions[currentQuestionIndex]
                            .optionC,
                        ],
                        [
                          "D",
                          activeTakingQuiz.questions[currentQuestionIndex]
                            .optionD,
                        ],
                      ] as const
                    ).map(([choice, text]) => {
                      const currentQId =
                        activeTakingQuiz.questions[currentQuestionIndex].id;
                      const isSelected = selectedAnswers[currentQId] === choice;

                      return (
                        <button
                          key={choice}
                          type="button"
                          onClick={() =>
                            handleSelectAnswer(currentQId, choice)
                          }
                          className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-150 flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "border-[#801424] bg-[#FCE8EB]/40 shadow-xs ring-1 ring-[#801424]"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/80 bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <span
                              className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 transition ${
                                isSelected
                                  ? "bg-[#801424] text-white"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {choice}
                            </span>
                            <span
                              className={`text-sm font-semibold leading-snug ${
                                isSelected ? "text-[#1F242D]" : "text-[#374151]"
                              }`}
                            >
                              {text}
                            </span>
                          </div>

                          <div className="shrink-0 pl-3">
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center transition ${
                                isSelected
                                  ? "border-[#801424] bg-[#801424] text-white"
                                  : "border-gray-300 bg-white"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 gap-3">
                    <button
                      type="button"
                      disabled={currentQuestionIndex === 0}
                      onClick={() =>
                        setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
                      }
                      className="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>

                    {currentQuestionIndex <
                    activeTakingQuiz.questions.length - 1 ? (
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentQuestionIndex((prev) =>
                            Math.min(
                              activeTakingQuiz.questions.length - 1,
                              prev + 1,
                            ),
                          )
                        }
                        className="px-5 py-2.5 bg-[#801424] hover:bg-[#68101D] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Next Question</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={isSubmittingQuiz}
                        onClick={handleSubmitQuiz}
                        className="px-6 py-2.5 bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer"
                      >
                        {isSubmittingQuiz ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>Grading...</span>
                          </>
                        ) : (
                          <>
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>Submit Quiz</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===================================================================== */}
          {/* VIEW D2: IMMEDIATE SCORE RESULTS SCREEN                                */}
          {/* ===================================================================== */}
          {submittedResult && (
            <div className="max-w-4xl mx-auto flex flex-col gap-6 pb-24">
              {/* Celebratory Hero Banner */}
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left z-10">
                  <div className="inline-flex items-center gap-1.5 bg-[#801424]/10 text-[#801424] px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Quiz Complete</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                    {submittedResult.quizTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                    Submitted on {submittedResult.submittedAt} • Topic:{" "}
                    <span className="font-semibold text-gray-800">
                      {submittedResult.topic}
                    </span>
                  </p>

                  <div className="flex flex-wrap items-center gap-2.5 mt-4">
                    <span
                      className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                        submittedResult.passed
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-red-100 text-red-800 border border-red-200"
                      }`}
                    >
                      {submittedResult.passed
                        ? "🎉 Passed Quiz"
                        : "Needs More Practice"}
                    </span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      Time: {formatSeconds(submittedResult.timeSpentSeconds)}
                    </span>
                  </div>
                </div>

                {/* Circular Score Badge */}
                <div className="flex flex-col items-center justify-center shrink-0">
                  <div className="w-32 h-32 rounded-full border-8 border-[#801424] bg-[#FCE8EB] flex flex-col items-center justify-center text-center shadow-inner">
                    <span className="text-3xl font-black text-[#801424] leading-none">
                      {submittedResult.percentage}%
                    </span>
                    <span className="text-[11px] font-bold text-gray-600 mt-1">
                      {submittedResult.score} / {submittedResult.totalQuestions}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-[#EAEBED] rounded-2xl p-4 shadow-xs">
                <button
                  onClick={() => {
                    const quiz = availableQuizzes.find(
                      (q) => q.id === submittedResult.quizId,
                    );
                    if (quiz) handleStartQuiz(quiz);
                  }}
                  className="px-4 py-2.5 bg-[#801424] hover:bg-[#68101D] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSubmittedResult(null);
                      setActiveTakingQuiz(null);
                      handleNavClick("quizzes-history");
                    }}
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <History className="w-3.5 h-3.5" />
                    <span>View History</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmittedResult(null);
                      setActiveTakingQuiz(null);
                      handleNavClick("quizzes");
                    }}
                    className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded-xl transition cursor-pointer"
                  >
                    All Quizzes
                  </button>
                </div>
              </div>

              {/* Detailed Question Review Breakdown */}
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col gap-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="text-base font-bold text-[#111827]">
                    Question by Question Breakdown
                  </h3>
                  <span className="text-xs font-semibold text-gray-500">
                    {submittedResult.answers.length} Questions
                  </span>
                </div>

                <div className="space-y-4">
                  {submittedResult.answers.map((ans, idx) => (
                    <div
                      key={ans.questionId || idx}
                      className={`p-5 rounded-2xl border transition ${
                        ans.isCorrect
                          ? "border-green-200 bg-green-50/40"
                          : "border-red-200 bg-red-50/40"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <span
                          className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                            ans.isCorrect
                              ? "bg-green-200 text-green-900"
                              : "bg-red-200 text-red-900"
                          }`}
                        >
                          Question {idx + 1} • {ans.isCorrect ? "Correct (+1)" : "Incorrect (0)"}
                        </span>
                        <span className="text-xs font-semibold text-gray-600">
                          Correct Answer:{" "}
                          <strong className="text-green-800">{ans.correct}</strong>
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-[#111827] mb-3">
                        {ans.prompt}
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {(["A", "B", "C", "D"] as const).map((optKey) => {
                          const optionText =
                            ans.options?.[optKey] || `Option ${optKey}`;
                          const wasSelected = ans.selected === optKey;
                          const isTheCorrectAnswer = ans.correct === optKey;

                          let bgClass = "bg-white border-gray-200 text-gray-700";
                          if (wasSelected && ans.isCorrect) {
                            bgClass =
                              "bg-green-100 border-green-400 text-green-900 font-bold";
                          } else if (wasSelected && !ans.isCorrect) {
                            bgClass =
                              "bg-red-100 border-red-400 text-red-900 font-bold";
                          } else if (isTheCorrectAnswer) {
                            bgClass =
                              "bg-green-50 border-green-300 text-green-800 font-bold";
                          }

                          return (
                            <div
                              key={optKey}
                              className={`p-2.5 rounded-xl border flex items-center justify-between ${bgClass}`}
                            >
                              <span className="truncate">
                                <strong>{optKey}:</strong> {optionText}
                              </span>
                              {wasSelected && (
                                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-black/10 shrink-0 ml-1">
                                  Your Choice
                                </span>
                              )}
                              {isTheCorrectAnswer && !wasSelected && (
                                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-green-200 text-green-900 shrink-0 ml-1">
                                  Correct
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===================================================================== */}
          {/* VIEW D3: PRACTICE QUIZZES CATALOG                                      */}
          {/* ===================================================================== */}
          {!activeTakingQuiz &&
            !submittedResult &&
            activeNav === "quizzes" && (
              <div className="flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
                {/* Header Banner */}
                <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#801424] flex items-center justify-center text-white shrink-0 shadow-xs">
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                          Practice Quizzes Catalog
                        </h2>
                        <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                          Test your understanding of Linear Algebra, Calculus, and more with interactive quizzes created by instructors.
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center rounded-full bg-[#801424]/10 border border-[#801424]/20 px-3.5 py-1 text-xs font-bold text-[#801424] self-start sm:self-center">
                      {availableQuizzes.length} Available Quiz
                      {availableQuizzes.length === 1 ? "" : "zes"}
                    </span>
                  </div>

                  {/* Filter Tabs & Search */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                      {[
                        ["all", "All Topics"],
                        ["Linear Algebra", "Linear Algebra"],
                        ["Calculus 1", "Calculus 1"],
                        ["Calculus 2", "Calculus 2"],
                        ["Differential Equations", "Diff. Equations"],
                      ].map(([topicKey, label]) => (
                        <button
                          key={topicKey}
                          onClick={() => setQuizFilterTopic(topicKey)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                            quizFilterTopic === topicKey
                              ? "bg-[#801424] text-white shadow-xs"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    <div className="relative w-full sm:w-64">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={quizSearchTerm}
                        onChange={(e) => setQuizSearchTerm(e.target.value)}
                        placeholder="Search quizzes..."
                        className="w-full pl-9 pr-3 py-1.5 bg-[#F9FAFB] border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#801424]"
                      />
                    </div>
                  </div>
                </div>

                {/* Quizzes List Cards */}
                {isLoadingQuizzes ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-[#801424] mb-3" />
                    <p className="text-sm font-semibold text-gray-600">
                      Loading available quizzes...
                    </p>
                  </div>
                ) : filteredAvailableQuizzes.length === 0 ? (
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-4">
                      <HelpCircle className="w-8 h-8 stroke-[1.8]" />
                    </div>
                    <h3 className="text-base font-bold text-[#111827]">
                      No Quizzes Found
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
                      {quizSearchTerm || quizFilterTopic !== "all"
                        ? "No quizzes match your search filter. Try clearing the filter."
                        : "There are currently no quizzes published by the admin. Check back soon!"}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filteredAvailableQuizzes.map((quiz) => (
                      <div
                        key={quiz.id}
                        className="bg-white border border-[#EAEBED] hover:border-[#801424]/40 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[11px] font-bold text-[#801424] bg-[#FCE8EB] px-2.5 py-0.5 rounded-full">
                              {quiz.topic}
                            </span>
                            <span className="text-[11px] text-gray-400 font-medium">
                              {quiz.createdAt}
                            </span>
                          </div>

                          <h3 className="text-base font-extrabold text-[#111827] group-hover:text-[#801424] transition line-clamp-2">
                            {quiz.title}
                          </h3>

                          <div className="flex items-center gap-3 mt-4 text-xs text-gray-600">
                            <div className="flex items-center gap-1">
                              <FileText className="w-3.5 h-3.5 text-gray-400" />
                              <span>{quiz.questionsCount} Questions</span>
                            </div>
                            {quiz.bestScore !== undefined && (
                              <div className="flex items-center gap-1 font-bold text-green-700">
                                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                                <span>Best: {quiz.bestScore}%</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-medium">
                            {quiz.attemptsCount > 0
                              ? `${quiz.attemptsCount} attempt${
                                  quiz.attemptsCount === 1 ? "" : "s"
                                }`
                              : "Not attempted yet"}
                          </span>

                          <button
                            onClick={() => handleStartQuiz(quiz)}
                            className="px-4 py-2 bg-[#801424] hover:bg-[#68101D] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer group-hover:scale-102"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>
                              {quiz.attemptsCount > 0 ? "Retake" : "Start Quiz"}
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          {/* ===================================================================== */}
          {/* VIEW D4: QUIZZES HISTORY                                              */}
          {/* ===================================================================== */}
          {!activeTakingQuiz &&
            !submittedResult &&
            activeNav === "quizzes-history" && (
              <div className="flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
                {/* Header Banner */}
                <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#801424] flex items-center justify-center text-white shrink-0 shadow-xs">
                        <History className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                          Your Quiz Attempts History
                        </h2>
                        <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                          Review all previous quiz submissions, grading details, and track your performance over time.
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center rounded-full bg-[#801424]/10 border border-[#801424]/20 px-3.5 py-1 text-xs font-bold text-[#801424]">
                      {myAttempts.length} Total Submission
                      {myAttempts.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  {/* Summary Stat Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-gray-100">
                    <div className="bg-[#F8F9FA] p-3 rounded-2xl border border-gray-100">
                      <p className="text-[11px] text-gray-500 font-medium">
                        Total Attempts
                      </p>
                      <p className="text-lg font-bold text-[#111827]">
                        {totalQuizzesTaken}
                      </p>
                    </div>
                    <div className="bg-[#F8F9FA] p-3 rounded-2xl border border-gray-100">
                      <p className="text-[11px] text-gray-500 font-medium">
                        Quizzes Passed
                      </p>
                      <p className="text-lg font-bold text-green-700">
                        {passedQuizzesCount}
                      </p>
                    </div>
                    <div className="bg-[#F8F9FA] p-3 rounded-2xl border border-gray-100">
                      <p className="text-[11px] text-gray-500 font-medium">
                        Average Score
                      </p>
                      <p className="text-lg font-bold text-[#801424]">
                        {studentAverageScore}%
                      </p>
                    </div>
                    <div className="bg-[#F8F9FA] p-3 rounded-2xl border border-gray-100">
                      <p className="text-[11px] text-gray-500 font-medium">
                        Time Practicing
                      </p>
                      <p className="text-lg font-bold text-gray-800">
                        {formatSeconds(totalTimeSpentSeconds)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* History Table Card */}
                {myAttempts.length === 0 ? (
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-4">
                      <History className="w-8 h-8 stroke-[1.8]" />
                    </div>
                    <h3 className="text-base font-bold text-[#111827]">
                      No Quiz Attempts Yet
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
                      Take your first quiz from the catalog to build your study track record!
                    </p>
                    <button
                      onClick={() => handleNavClick("quizzes")}
                      className="mt-4 px-4 py-2 bg-[#801424] hover:bg-[#68101D] text-white text-xs font-bold rounded-xl cursor-pointer"
                    >
                      Browse Practice Quizzes
                    </button>
                  </div>
                ) : (
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-[#EAEBED] text-xs font-bold uppercase text-[#6B7280]">
                            <th className="pb-3 px-3">Quiz Title</th>
                            <th className="pb-3 px-3">Topic</th>
                            <th className="pb-3 px-3">Score</th>
                            <th className="pb-3 px-3">Percentage</th>
                            <th className="pb-3 px-3">Status</th>
                            <th className="pb-3 px-3">Time</th>
                            <th className="pb-3 px-3">Submitted</th>
                            <th className="pb-3 px-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F3F4F6]">
                          {myAttempts.map((att) => (
                            <tr
                              key={att.id}
                              className="hover:bg-[#F9FAFB] transition"
                            >
                              <td className="py-3.5 px-3 font-semibold text-[#111827]">
                                {att.quizTitle}
                              </td>
                              <td className="py-3.5 px-3 text-xs text-[#6B7280]">
                                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-medium">
                                  {att.topic}
                                </span>
                              </td>
                              <td className="py-3.5 px-3 text-xs font-bold text-[#111827]">
                                {att.score} / {att.totalQuestions}
                              </td>
                              <td className="py-3.5 px-3 text-xs font-bold">
                                {att.percentage}%
                              </td>
                              <td className="py-3.5 px-3">
                                <span
                                  className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                                    att.passed
                                      ? "bg-green-100 text-green-700"
                                      : "bg-red-100 text-red-700"
                                  }`}
                                >
                                  {att.passed ? "Passed" : "Needs Review"}
                                </span>
                              </td>
                              <td className="py-3.5 px-3 text-xs text-[#6B7280]">
                                {formatSeconds(att.timeSpentSeconds)}
                              </td>
                              <td className="py-3.5 px-3 text-xs text-[#6B7280]">
                                {att.submittedAt}
                              </td>
                              <td className="py-3.5 px-3 text-right">
                                <button
                                  type="button"
                                  onClick={() => setReviewingAttempt(att)}
                                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-lg transition cursor-pointer"
                                >
                                  Review
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

          {/* ===================================================================== */}
          {/* VIEW D5: QUIZ RESULTS & ANALYTICS                                      */}
          {/* ===================================================================== */}
          {!activeTakingQuiz &&
            !submittedResult &&
            activeNav === "quiz-results" && (
              <div className="flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
                {/* Header Banner */}
                <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#801424] flex items-center justify-center text-white shrink-0 shadow-xs">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                          Quiz Performance & Analytics
                        </h2>
                        <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                          Comprehensive breakdown of your scores, topic mastery, and improvement statistics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Analytics Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FCE8EB] text-[#801424] flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#8C93A0]">
                        Overall Average
                      </p>
                      <p className="text-2xl font-black text-[#111827]">
                        {studentAverageScore}%
                      </p>
                      <p className="text-[11px] text-[#801424] font-semibold">
                        Across all quizzes
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#8C93A0]">
                        Highest Score
                      </p>
                      <p className="text-2xl font-black text-green-700">
                        {studentHighestScore}%
                      </p>
                      <p className="text-[11px] text-green-600 font-semibold">
                        Personal Best
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#8C93A0]">
                        Passed Rate
                      </p>
                      <p className="text-2xl font-black text-[#111827]">
                        {totalQuizzesTaken > 0
                          ? Math.round(
                              (passedQuizzesCount / totalQuizzesTaken) * 100,
                            )
                          : 0}
                        %
                      </p>
                      <p className="text-[11px] text-gray-500 font-semibold">
                        {passedQuizzesCount} of {totalQuizzesTaken} passed
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#8C93A0]">
                        Total Practice Time
                      </p>
                      <p className="text-2xl font-black text-[#111827]">
                        {formatSeconds(totalTimeSpentSeconds)}
                      </p>
                      <p className="text-[11px] text-gray-500 font-semibold">
                        Time invested
                      </p>
                    </div>
                  </div>
                </div>

                {/* Per-Quiz Performance Breakdown */}
                <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-xs">
                  <h3 className="text-base font-bold text-[#111827] mb-4">
                    Performance by Quiz
                  </h3>

                  {availableQuizzes.length === 0 ? (
                    <div className="py-8 text-center text-xs text-gray-500">
                      No quizzes available yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {availableQuizzes.map((quiz) => {
                        const attemptsOnThis = myAttempts.filter(
                          (a) => a.quizId === quiz.id,
                        );
                        const hasAttempted = attemptsOnThis.length > 0;
                        const best = hasAttempted
                          ? Math.max(...attemptsOnThis.map((a) => a.percentage))
                          : 0;

                        return (
                          <div
                            key={quiz.id}
                            className="p-4 rounded-2xl border border-gray-200 bg-[#F9FAFB] flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-wide text-[#801424] bg-[#801424]/10 px-2 py-0.5 rounded-md">
                                  {quiz.topic}
                                </span>
                                <span className="text-xs font-semibold text-gray-500">
                                  {attemptsOnThis.length} attempt
                                  {attemptsOnThis.length === 1 ? "" : "s"}
                                </span>
                              </div>
                              <h4 className="text-sm font-bold text-[#111827]">
                                {quiz.title}
                              </h4>
                            </div>

                            <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
                              <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase">
                                  Best Score
                                </p>
                                <p
                                  className={`text-sm font-black ${
                                    hasAttempted
                                      ? best >= 60
                                        ? "text-green-700"
                                        : "text-red-700"
                                      : "text-gray-400"
                                  }`}
                                >
                                  {hasAttempted ? `${best}%` : "Not taken"}
                                </p>
                              </div>

                              <button
                                onClick={() => handleStartQuiz(quiz)}
                                className="px-3 py-1.5 bg-[#801424] hover:bg-[#68101D] text-white text-xs font-bold rounded-xl transition cursor-pointer"
                              >
                                {hasAttempted ? "Retake" : "Start"}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

          {/* ========================================================================= */}
          {/* REVIEW PAST ATTEMPT MODAL                                                  */}
          {/* ========================================================================= */}
          <AnimatePresence>
            {reviewingAttempt && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  className="w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#EAEBED] max-h-[85vh] flex flex-col"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100 shrink-0">
                    <div>
                      <h3 className="text-lg font-bold text-[#111827]">
                        {reviewingAttempt.quizTitle}
                      </h3>
                      <p className="text-xs text-gray-500">
                        Score: {reviewingAttempt.score} /{" "}
                        {reviewingAttempt.totalQuestions} (
                        {reviewingAttempt.percentage}%) • Submitted:{" "}
                        {reviewingAttempt.submittedAt}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setReviewingAttempt(null)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="overflow-y-auto py-4 flex-1 space-y-4">
                    {reviewingAttempt.answers.length === 0 ? (
                      <p className="text-xs text-gray-500 text-center py-6">
                        No question breakdown recorded for this attempt.
                      </p>
                    ) : (
                      reviewingAttempt.answers.map((ans, idx) => (
                        <div
                          key={ans.questionId || idx}
                          className={`p-4 rounded-2xl border ${
                            ans.isCorrect
                              ? "border-green-200 bg-green-50/40"
                              : "border-red-200 bg-red-50/40"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <span
                              className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                                ans.isCorrect
                                  ? "bg-green-200 text-green-900"
                                  : "bg-red-200 text-red-900"
                              }`}
                            >
                              Question {idx + 1} •{" "}
                              {ans.isCorrect ? "Correct (+1)" : "Incorrect (0)"}
                            </span>
                            <span className="text-xs font-semibold text-gray-600">
                              Correct: <strong>{ans.correct}</strong>
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-[#111827] mb-2.5">
                            {ans.prompt}
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            {(["A", "B", "C", "D"] as const).map((optKey) => {
                              const optionText =
                                ans.options?.[optKey] || `Choice ${optKey}`;
                              const wasSelected = ans.selected === optKey;
                              const isTheCorrect = ans.correct === optKey;

                              let style = "bg-white border-gray-200 text-gray-700";
                              if (wasSelected && ans.isCorrect) {
                                style =
                                  "bg-green-100 border-green-400 text-green-900 font-bold";
                              } else if (wasSelected && !ans.isCorrect) {
                                style =
                                  "bg-red-100 border-red-400 text-red-900 font-bold";
                              } else if (isTheCorrect) {
                                style =
                                  "bg-green-50 border-green-300 text-green-800 font-bold";
                              }

                              return (
                                <div
                                  key={optKey}
                                  className={`p-2 rounded-xl border flex items-center justify-between ${style}`}
                                >
                                  <span className="truncate">
                                    <strong>{optKey}:</strong> {optionText}
                                  </span>
                                  {wasSelected && (
                                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-black/10 shrink-0 ml-1">
                                      Your Choice
                                    </span>
                                  )}
                                  {isTheCorrect && !wasSelected && (
                                    <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-green-200 text-green-900 shrink-0 ml-1">
                                      Correct
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-gray-100 shrink-0">
                    <button
                      type="button"
                      onClick={() => setReviewingAttempt(null)}
                      className="px-5 py-2 bg-[#801424] hover:bg-[#68101D] text-white text-xs font-bold rounded-xl cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
