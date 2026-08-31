import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Calculator,
  BookOpen,
  PlusSquare,
  BarChart3,
  History,
  Users,
  Shield,
  Search,
  ChevronDown,
  ClipboardList,
  ShieldCheck,
  Star,
  Trophy,
  X,
  Plus,
  GraduationCap,
  LogOut,
  Menu,
  ArrowLeft,
  ArrowRight,
  Zap,
  Layers,
  TrendingUp,
  Sparkles,
  BookMarked,
  CheckCircle2,
  HelpCircle,
  FileText,
  Lightbulb,
  Trash2,
  Loader2,
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

interface QuizQuestionDraft {
  id: string;
  prompt: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: "A" | "B" | "C" | "D";
}

interface QuizItem {
  id: string;
  title: string;
  topic: string;
  questionsCount: number;
  questions: QuizQuestionDraft[];
  attempts: number;
  averageScore: number;
  createdAt: string;
}

function createEmptyQuestions(count: number): QuizQuestionDraft[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
    prompt: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correct: "A",
  }));
}

interface StudentItem {
  id: string;
  name: string;
  email: string;
  quizzesTaken: number;
  averageScore: number;
  lastActive: string;
  joinedDate: string;
}

interface ActivityItem {
  id: string;
  studentName: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
  submittedAt: string;
}

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

// Complete registry of all 23 Linear Algebra calculators
const LINEAR_ALGEBRA_ALL_CALCULATORS: CalculatorCardMeta[] = [
  {
    id: "la-matrix-ops",
    title: "Matrix Operations",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A + B, \\; A - B, \\; A \\times B, \\; kA",
    description:
      "Perform addition, subtraction, matrix multiplication, and scalar scaling on matrices of any dimensions.",
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
      "Computes determinants via Gaussian elimination and cofactor expansion with complete pivot steps.",
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
      "Calculates the inverse of square invertible matrices using Gauss-Jordan elimination [A | I] -> [I | A⁻¹].",
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
      "Finds characteristic polynomial, roots, eigenvalues, multiplicities, and eigenvector basis vectors.",
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
    formula:
      "T(\\mathbf{x}) = A\\mathbf{x}, \\quad T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v})",
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

export default function AdminDashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Navigation State
  const [activeNav, setActiveNav] = useState<
    | "dashboard"
    | "calculators"
    | "topics"
    | "add-quiz"
    | "quiz-results"
    | "history-quizzes"
    | "view-students"
  >("dashboard");

  // Calculator Category State
  const [selectedCalcCategory, setSelectedCalcCategory] = useState<
    "linear-algebra" | "calculus-1" | "calculus-2"
  >("linear-algebra");

  // Active Selected Calculator (Swipe to Right View)
  const [activeCalculator, setActiveCalculator] =
    useState<CalculatorCardMeta | null>(null);

  // Topics Category State
  const [selectedTopicCategory, setSelectedTopicCategory] = useState<
    "linear-algebra" | "calculus-1" | "calculus-2"
  >("linear-algebra");

  // Active Selected Topic (Swipe to Right View)
  const [activeTopic, setActiveTopic] = useState<UnifiedTopicItem | null>(null);

  // Mobile sidebar drawer state
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [calcSearchQuery, setCalcSearchQuery] = useState("");
  const [topicSearchQuery, setTopicSearchQuery] = useState("");
  const [studentSearchQuery, setStudentSearchQuery] = useState("");
  const [timeRange, setTimeRange] = useState<
    "This Month" | "This Week" | "All Time"
  >("This Month");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);

  // New Quiz Form State
  const [newQuizTitle, setNewQuizTitle] = useState("");
  const [newQuizTopic, setNewQuizTopic] = useState("Linear Algebra");
  const [newQuizQuestions, setNewQuizQuestions] = useState("5");
  const [newQuizQuestionDrafts, setNewQuizQuestionDrafts] = useState<
    QuizQuestionDraft[]
  >(() => createEmptyQuestions(5));
  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState(false);
  const [isLoadingQuizzes, setIsLoadingQuizzes] = useState(false);

  // Sample or Supabase live data
  const [quizzes, setQuizzes] = useState<QuizItem[]>([]);
  const [students, setStudents] = useState<StudentItem[]>([]);
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  // Build the complete combined list of all 52+ calculators from across the codebase
  const allCombinedCalculators = useMemo<CalculatorCardMeta[]>(() => {
    const list: CalculatorCardMeta[] = [...LINEAR_ALGEBRA_ALL_CALCULATORS];

    // Calculus 1 and Calculus 2 calculators from CALCULATOR_DEFINITIONS
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

  // Filtered calculators list
  const filteredCalculators = useMemo(() => {
    return allCombinedCalculators.filter((calc) => {
      const matchesCategory = calc.category === selectedCalcCategory;
      const query = (calcSearchQuery || searchQuery).toLowerCase().trim();
      if (!query) return matchesCategory;
      return (
        matchesCategory &&
        (calc.title.toLowerCase().includes(query) ||
          calc.description.toLowerCase().includes(query) ||
          calc.formula.toLowerCase().includes(query) ||
          calc.badge.toLowerCase().includes(query))
      );
    });
  }, [
    allCombinedCalculators,
    selectedCalcCategory,
    calcSearchQuery,
    searchQuery,
  ]);

  // Build the complete combined list of all topics from codebase
  const allCombinedTopics = useMemo<UnifiedTopicItem[]>(() => {
    const list: UnifiedTopicItem[] = [];

    // 1. Linear Algebra Topics (All from src/data/topics/)
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

    // 2. Calculus 1 Topics (All from src/data/Calculus_1/)
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

    // 3. Calculus 2 Topics (All from src/data/Calculus_2/)
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

  // Filtered topics list by category & search
  const filteredTopics = useMemo(() => {
    return allCombinedTopics.filter((top) => {
      const matchesCategory = top.category === selectedTopicCategory;
      const query = (topicSearchQuery || searchQuery).toLowerCase().trim();
      if (!query) return matchesCategory;
      return (
        matchesCategory &&
        (top.title.toLowerCase().includes(query) ||
          top.summary.toLowerCase().includes(query) ||
          top.chapter.toLowerCase().includes(query) ||
          top.details.toLowerCase().includes(query))
      );
    });
  }, [allCombinedTopics, selectedTopicCategory, topicSearchQuery, searchQuery]);

  // Filtered students by search
  const filteredStudents = useMemo(() => {
    const q = (studentSearchQuery || searchQuery).toLowerCase().trim();
    if (!q) return students;
    return students.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q),
    );
  }, [students, studentSearchQuery, searchQuery]);

  // Enforce admin-only access
  useEffect(() => {
    if (user) {
      const isAuthorized =
        user.email?.toLowerCase().trim() === "admin@gmail.com" ||
        user.role === "admin";
      if (!isAuthorized) {
        navigate("/dashboard", { replace: true });
      }
    }
  }, [user, navigate]);

  // Keyboard shortcut Ctrl+K to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.getElementById("admin-search-input");
        searchInput?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Fetch Quizzes and statistics from Supabase
  const fetchQuizzesAndStats = async () => {
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
        console.error("Error fetching quizzes:", qError);
      }

      // 2. Fetch attempts
      const { data: attemptsData, error: aError } = await supabase
        .from("quiz_attempts")
        .select(`
          id,
          quiz_id,
          user_id,
          score,
          total_questions,
          submitted_at,
          time_spent_seconds
        `)
        .order("submitted_at", { ascending: false });

      if (aError) {
        console.error("Error fetching attempts:", aError);
      }

      // 3. Fetch student profiles (all non-admin registered users)
      const { data: profilesData } = await supabase
        .from("profiles")
        .select("id, name, email, created_at, role")
        .order("created_at", { ascending: false });

      const attemptsByQuiz: Record<
        string,
        { count: number; totalScorePercent: number }
      > = {};
      (attemptsData || []).forEach((att: any) => {
        if (!attemptsByQuiz[att.quiz_id]) {
          attemptsByQuiz[att.quiz_id] = { count: 0, totalScorePercent: 0 };
        }
        attemptsByQuiz[att.quiz_id].count += 1;
        const pct =
          att.total_questions > 0
            ? (att.score / att.total_questions) * 100
            : 0;
        attemptsByQuiz[att.quiz_id].totalScorePercent += pct;
      });

      if (quizzesData) {
        const formatted: QuizItem[] = quizzesData.map((q: any) => {
          const rawQuestions = Array.isArray(q.quiz_questions)
            ? q.quiz_questions
            : [];
          const sortedQuestions = [...rawQuestions].sort(
            (a: any, b: any) => (a.question_index ?? 0) - (b.question_index ?? 0),
          );
          const qDrafts: QuizQuestionDraft[] = sortedQuestions.map((sq: any) => ({
            id: sq.id,
            prompt: sq.prompt,
            optionA: sq.option_a,
            optionB: sq.option_b,
            optionC: sq.option_c,
            optionD: sq.option_d,
            correct: (sq.correct_answer || "A") as "A" | "B" | "C" | "D",
          }));

          const stat = attemptsByQuiz[q.id];
          const attemptsCount = stat ? stat.count : 0;
          const avgScore =
            attemptsCount > 0
              ? Math.round(stat.totalScorePercent / attemptsCount)
              : 0;

          return {
            id: q.id,
            title: q.title,
            topic: q.topic,
            questionsCount: qDrafts.length,
            questions: qDrafts,
            attempts: attemptsCount,
            averageScore: avgScore,
            createdAt: new Date(q.created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          };
        });
        setQuizzes(formatted);
      }

      // Format student items (exclude admins)
      if (profilesData) {
        const nonAdmins = profilesData.filter(
          (prof: any) =>
            prof.role !== "admin" &&
            prof.email?.toLowerCase().trim() !== "admin@gmail.com",
        );

        const studentList: StudentItem[] = nonAdmins.map((prof: any) => {
          const userAttempts = (attemptsData || []).filter(
            (a: any) => a.user_id === prof.id,
          );
          const avg =
            userAttempts.length > 0
              ? Math.round(
                  userAttempts.reduce(
                    (acc: number, a: any) =>
                      acc +
                      (a.total_questions > 0
                        ? (a.score / a.total_questions) * 100
                        : 0),
                    0,
                  ) / userAttempts.length,
                )
              : 0;
          const lastAtt = userAttempts[0]?.submitted_at;
          return {
            id: prof.id,
            name: prof.name || prof.email?.split("@")[0] || "Student",
            email: prof.email || "No email",
            quizzesTaken: userAttempts.length,
            averageScore: avg,
            lastActive: lastAtt
              ? new Date(lastAtt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              : "Not yet",
            joinedDate: prof.created_at
              ? new Date(prof.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Recent",
          };
        });
        setStudents(studentList);
      }

      // Format activity items
      if (attemptsData && quizzesData) {
        const quizMap = new Map(quizzesData.map((q: any) => [q.id, q.title]));
        const profileMap = new Map(
          (profilesData || []).map((p: any) => [
            p.id,
            p.name || p.email?.split("@")[0] || "Student",
          ]),
        );
        const actList: ActivityItem[] = attemptsData.slice(0, 15).map((a: any) => ({
          id: a.id,
          studentName: profileMap.get(a.user_id) || "Student",
          quizTitle: quizMap.get(a.quiz_id) || "Practice Quiz",
          score: a.score,
          totalQuestions: a.total_questions,
          submittedAt: new Date(a.submitted_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));
        setActivities(actList);
      }
    } catch (err) {
      console.error("Failed to load admin quiz data:", err);
    } finally {
      setIsLoadingQuizzes(false);
    }
  };

  useEffect(() => {
    fetchQuizzesAndStats();
  }, []);

  const handleNavClick = (navKey: typeof activeNav) => {
    setActiveNav(navKey);
    setActiveCalculator(null);
    setActiveTopic(null);
    setMobileSidebarOpen(false);
  };

  const handleQuestionCountChange = (raw: string) => {
    const parsed = parseInt(raw, 10);
    const count = Number.isFinite(parsed) ? Math.max(1, parsed) : 1;
    setNewQuizQuestions(String(count));
    setNewQuizQuestionDrafts((prev) => {
      if (count === prev.length) return prev;
      if (count > prev.length) {
        return [...prev, ...createEmptyQuestions(count - prev.length)];
      }
      return prev.slice(0, count);
    });
  };

  const updateQuestionDraft = (
    id: string,
    field: keyof Omit<QuizQuestionDraft, "id">,
    value: string,
  ) => {
    setNewQuizQuestionDrafts((prev) =>
      prev.map((q) => (q.id === id ? { ...q, [field]: value } : q)),
    );
  };

  const handleCreateQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuizTitle.trim()) {
      alert("Please provide a quiz title.");
      return;
    }

    const validDrafts = newQuizQuestionDrafts.filter(
      (q) => q.prompt.trim() !== "",
    );
    if (validDrafts.length === 0) {
      alert("Please fill in at least one question prompt.");
      return;
    }

    setIsSubmittingQuiz(true);
    try {
      if (supabase) {
        // 1. Insert Quiz record
        const { data: quizData, error: quizError } = await supabase
          .from("quizzes")
          .insert([
            {
              title: newQuizTitle.trim(),
              topic: newQuizTopic,
              created_by: user?.id || null,
            },
          ])
          .select("id")
          .single();

        if (quizError || !quizData) {
          throw quizError || new Error("Failed to insert quiz into database");
        }

        // 2. Insert Questions
        const questionsToInsert = validDrafts.map((q, index) => ({
          quiz_id: quizData.id,
          question_index: index + 1,
          prompt: q.prompt.trim(),
          option_a: q.optionA.trim() || "Choice A",
          option_b: q.optionB.trim() || "Choice B",
          option_c: q.optionC.trim() || "Choice C",
          option_d: q.optionD.trim() || "Choice D",
          correct_answer: q.correct,
        }));

        const { error: questionsError } = await supabase
          .from("quiz_questions")
          .insert(questionsToInsert);

        if (questionsError) {
          throw questionsError;
        }

        // Re-fetch all quizzes and statistics
        await fetchQuizzesAndStats();
      } else {
        const count = validDrafts.length || 1;
        const newQuiz: QuizItem = {
          id: Date.now().toString(),
          title: newQuizTitle.trim(),
          topic: newQuizTopic,
          questionsCount: count,
          questions: validDrafts,
          attempts: 0,
          averageScore: 0,
          createdAt: "Just now",
        };
        setQuizzes((prev) => [newQuiz, ...prev]);
      }

      // Reset form
      setNewQuizTitle("");
      setNewQuizTopic("Linear Algebra");
      setNewQuizQuestions("5");
      setNewQuizQuestionDrafts(createEmptyQuestions(5));
      alert("Quiz published successfully! It is now visible to all students.");
    } catch (err: any) {
      console.error("Error creating quiz:", err);
      alert("Error publishing quiz: " + (err.message || "Unknown error"));
    } finally {
      setIsSubmittingQuiz(false);
    }
  };

  const handleDeleteQuiz = async (quizId: string) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this quiz? All student attempts for it will also be deleted.",
      )
    ) {
      return;
    }
    try {
      if (supabase) {
        const { error } = await supabase
          .from("quizzes")
          .delete()
          .eq("id", quizId);
        if (error) throw error;
      }
      setQuizzes((prev) => prev.filter((q) => q.id !== quizId));
    } catch (err: any) {
      console.error("Error deleting quiz:", err);
      alert("Failed to delete quiz: " + (err.message || "Unknown error"));
    }
  };

  // Metrics calculations
  const totalQuizzes = quizzes.length;
  const totalStudents = students.length;
  const totalAttempts = quizzes.reduce((acc, q) => acc + q.attempts, 0);
  const averageScore =
    quizzes.length > 0
      ? Math.round(
          quizzes.reduce((acc, q) => acc + q.averageScore, 0) / quizzes.length,
        )
      : 0;

  // Chart data points
  const chartLabels = [
    "May 1",
    "May 7",
    "May 14",
    "May 21",
    "May 28",
    "May 31",
  ];

  // Helper to render the active Linear Algebra Calculator Component
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

  // Helper to find definition for Calculus Calculator
  const getCalculusDefinition = (
    defId?: string,
  ): CalculatorDefinition | undefined => {
    if (!defId) return undefined;
    return CALCULATOR_DEFINITIONS.find((d) => d.id === defId);
  };

  return (
    <div className="fixed inset-0 z-40 bg-[#F8F9FA] text-[#1F242D] font-sans antialiased flex overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. LEFT SIDEBAR (Desktop Fixed + Mobile Drawer)                           */}
      {/* ========================================================================= */}
      <aside className="hidden lg:flex w-[260px] bg-white border-r border-[#EAEBED] flex-col justify-between p-5 h-full shrink-0 overflow-hidden select-none z-30">
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
                Math<span className="text-[#801424]">Workspace</span>
              </span>
              <span className="text-[0.72rem] font-semibold text-[#8C93A0]">
                Admin Dashboard
              </span>
            </div>
          </div>

          {/* Main Navigation Links */}
          <nav className="flex flex-col gap-1 mt-1">
            {/* Dashboard Link */}
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

            {/* Calculators Link */}
            <button
              onClick={() => handleNavClick("calculators")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "calculators"
                  ? "bg-[#801424] text-white shadow-sm shadow-[#801424]/25"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <Calculator className="w-4 h-4 shrink-0" />
              <span>Calculators</span>
            </button>

            {/* Topics Link */}
            <button
              onClick={() => handleNavClick("topics")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "topics"
                  ? "bg-[#801424] text-white shadow-sm shadow-[#801424]/25"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>Topics</span>
            </button>

            {/* Section: Quiz Management */}
            <div className="pt-5 pb-1">
              <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                Quiz Management
              </span>
            </div>

            {/* Add Quiz */}
            <button
              onClick={() => handleNavClick("add-quiz")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "add-quiz"
                  ? "bg-[#801424] text-white"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <PlusSquare className="w-4 h-4 shrink-0" />
              <span>Add Quiz</span>
            </button>

            {/* Quiz Results */}
            <button
              onClick={() => handleNavClick("quiz-results")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "quiz-results"
                  ? "bg-[#801424] text-white"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <BarChart3 className="w-4 h-4 shrink-0" />
              <span>Quiz Results</span>
            </button>

            {/* History Quizzes */}
            <button
              onClick={() => handleNavClick("history-quizzes")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "history-quizzes"
                  ? "bg-[#801424] text-white"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <History className="w-4 h-4 shrink-0" />
              <span>History Quizzes</span>
            </button>

            {/* Section: User Management */}
            <div className="pt-5 pb-1">
              <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                User Management
              </span>
            </div>

            {/* View Students */}
            <button
              onClick={() => handleNavClick("view-students")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 text-left cursor-pointer ${
                activeNav === "view-students"
                  ? "bg-[#801424] text-white"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span>View Students</span>
            </button>
          </nav>
        </div>

        {/* Bottom Sidebar Card: Admin Panel */}
        <div className="mt-8 pt-4">
          <div className="w-full bg-[#FFFFFF] border border-[#EBECEF] rounded-2xl p-4.5 text-center shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col items-center">
            <div className="w-9 h-9 rounded-xl bg-[#801424] flex items-center justify-center text-white shadow-sm shadow-[#801424]/30 mb-2.5">
              <Shield className="w-4 h-4 fill-white/20 stroke-white" />
            </div>
            <h4 className="text-[0.88rem] font-bold text-[#1F242D] leading-snug">
              Admin Panel
            </h4>
            <p className="text-[0.73rem] text-[#717A8A] mt-1 leading-relaxed max-w-[190px]">
              Manage quizzes, curriculum, calculators, and view performance in
              one place.
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Drawer Backdrop & Sidebar */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-[270px] bg-white border-r border-[#EAEBED] flex flex-col justify-between p-5 h-full z-10 shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#801424] flex items-center justify-center shadow-md shadow-[#801424]/20 shrink-0">
                      <span className="font-serif text-2xl font-bold text-white leading-none">
                        Σ
                      </span>
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[1.05rem] font-black tracking-tight text-[#1F242D]">
                        Math<span className="text-[#801424]">Workspace</span>
                      </span>
                      <span className="text-[0.72rem] font-semibold text-[#8C93A0]">
                        Admin Dashboard
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileSidebarOpen(false)}
                    className="p-1 rounded-lg text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1 mt-1">
                  <button
                    onClick={() => handleNavClick("dashboard")}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                      activeNav === "dashboard"
                        ? "bg-[#801424] text-white"
                        : "text-[#4B5565] hover:bg-[#F4F5F7]"
                    }`}
                  >
                    <LayoutDashboard className="w-4 h-4 shrink-0" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("calculators")}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                      activeNav === "calculators"
                        ? "bg-[#801424] text-white"
                        : "text-[#4B5565] hover:bg-[#F4F5F7]"
                    }`}
                  >
                    <Calculator className="w-4 h-4 shrink-0" />
                    <span>Calculators</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("topics")}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                      activeNav === "topics"
                        ? "bg-[#801424] text-white"
                        : "text-[#4B5565] hover:bg-[#F4F5F7]"
                    }`}
                  >
                    <BookOpen className="w-4 h-4 shrink-0" />
                    <span>Topics</span>
                  </button>
                  <div className="pt-4 pb-1">
                    <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                      Quiz Management
                    </span>
                  </div>
                  <button
                    onClick={() => handleNavClick("add-quiz")}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#4B5565] hover:bg-[#F4F5F7] text-left"
                  >
                    <PlusSquare className="w-4 h-4 shrink-0" />
                    <span>Add Quiz</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("quiz-results")}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#4B5565] hover:bg-[#F4F5F7] text-left"
                  >
                    <BarChart3 className="w-4 h-4 shrink-0" />
                    <span>Quiz Results</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("history-quizzes")}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#4B5565] hover:bg-[#F4F5F7] text-left"
                  >
                    <History className="w-4 h-4 shrink-0" />
                    <span>History Quizzes</span>
                  </button>
                  <div className="pt-4 pb-1">
                    <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                      User Management
                    </span>
                  </div>
                  <button
                    onClick={() => handleNavClick("view-students")}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-[#4B5565] hover:bg-[#F4F5F7] text-left"
                  >
                    <Users className="w-4 h-4 shrink-0" />
                    <span>View Students</span>
                  </button>
                </nav>
              </div>

              <div className="mt-6">
                <div className="w-full bg-[#FFFFFF] border border-[#EBECEF] rounded-2xl p-4 text-center">
                  <div className="w-8 h-8 rounded-xl bg-[#801424] flex items-center justify-center text-white mx-auto mb-2">
                    <Shield className="w-4 h-4 fill-white/20 stroke-white" />
                  </div>
                  <h4 className="text-xs font-bold text-[#1F242D]">
                    Admin Panel
                  </h4>
                  <p className="text-[0.7rem] text-[#717A8A] mt-0.5">
                    Manage quizzes and performance.
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 2. MAIN CONTENT AREA                                                       */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto bg-[#F8F9FA]">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-20 bg-[#F8F9FA]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between gap-4 border-b border-[#EAEBED]">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden p-2 rounded-xl border border-[#E2E4E8] bg-white text-[#4B5565]"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search Bar with Ctrl+K */}
          <div className="relative flex-1 max-w-xl">
            <div className="relative flex items-center w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA1B0]" />
              <input
                id="admin-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search quizzes, topics, students, calculators..."
                className="w-full pl-10 pr-20 py-2.5 bg-white border border-[#E2E4E8] rounded-xl text-sm text-[#1F242D] placeholder-[#9AA1B0] shadow-[0_1px_3px_rgba(0,0,0,0.02)] focus:outline-none focus:border-[#801424] focus:ring-2 focus:ring-[#801424]/10 transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <span className="px-1.5 py-0.5 text-[0.68rem] font-bold text-[#717A8A] bg-[#F1F2F5] border border-[#E0E2E7] rounded">
                  Ctrl
                </span>
                <span className="px-1.5 py-0.5 text-[0.68rem] font-bold text-[#717A8A] bg-[#F1F2F5] border border-[#E0E2E7] rounded">
                  K
                </span>
              </div>
            </div>
          </div>

          {/* Right Header Controls (Admin Profile) */}
          <div className="flex items-center gap-3.5">
            {/* Admin Profile Details */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
                className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-white/80 transition-colors cursor-pointer"
              >
                <div className="hidden sm:flex flex-col text-right leading-tight">
                  <span className="text-sm font-bold text-[#1F242D]">
                    {user?.name || "Admin"}
                  </span>
                  <span className="text-[0.72rem] font-medium text-[#8C93A0]">
                    Administrator
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#801424] flex items-center justify-center text-white font-bold text-sm shadow-sm shadow-[#801424]/30">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "A"}
                </div>
                <ChevronDown className="w-4 h-4 text-[#717A8A]" />
              </button>

              {/* Admin Dropdown Menu */}
              <AnimatePresence>
                {isAdminDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-52 bg-white border border-[#EAEBED] rounded-2xl shadow-xl py-2 z-30"
                  >
                    <div className="px-4 py-2 border-b border-[#F0F1F3]">
                      <p className="text-xs font-bold text-[#1F242D]">
                        {user?.name || "Admin"}
                      </p>
                      <p className="text-[0.72rem] text-[#8C93A0] truncate">
                        {user?.email || "admin@gmail.com"}
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavClick("dashboard")}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-[#4B5565] hover:bg-[#F6F7F9] text-left cursor-pointer"
                    >
                      <LayoutDashboard className="w-4 h-4 text-[#717A8A]" />
                      <span>Admin Overview</span>
                    </button>
                    <button
                      onClick={() => handleNavClick("calculators")}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-[#4B5565] hover:bg-[#F6F7F9] text-left cursor-pointer"
                    >
                      <Calculator className="w-4 h-4 text-[#717A8A]" />
                      <span>Calculators Hub</span>
                    </button>
                    <button
                      onClick={() => handleNavClick("topics")}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-[#4B5565] hover:bg-[#F6F7F9] text-left cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-[#717A8A]" />
                      <span>Curriculum Topics</span>
                    </button>
                    <div className="my-1 border-t border-[#F0F1F3]" />
                    <button
                      onClick={() => {
                        void logout();
                        navigate("/");
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 text-left cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 text-red-600" />
                      <span>Sign Out</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* VIEW A: MAIN DASHBOARD VIEW                                               */}
        {/* ========================================================================= */}
        {activeNav === "dashboard" && (
          <div className="p-6 sm:p-7 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-12">
            {/* 3. HERO / WELCOME BANNER CARD WITH MATHEMATICAL TEXTURE & 3D SIGMA */}
            <section className="relative overflow-hidden bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              {/* Subtle Mathematical Watermark Background with faint formulas */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.045] select-none flex items-center justify-between px-10 text-[#801424] font-serif text-3xl font-bold">
                <span>{"\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}"}</span>
                <span>
                  {
                    "\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}"
                  }
                </span>
                <span>{"\\det(A - \\lambda I) = 0"}</span>
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                {/* Left Welcome Copy */}
                <div className="max-w-xl flex flex-col">
                  <span className="text-[0.92rem] font-semibold text-[#5A6372]">
                    Welcome back,
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mt-0.5 mb-2.5 flex items-center gap-2.5">
                    <span>{user?.name || "Admin"}</span>
                    <span className="inline-block animate-wave text-3xl">
                      👋
                    </span>
                  </h1>
                  <p className="text-[0.92rem] text-[#6B7280] font-normal leading-relaxed">
                    Manage quizzes, track performance, and help students learn
                    math better.
                  </p>
                </div>

                {/* Right 3D Sigma Illustration with Math Formulas & Red Glow */}
                <div className="relative w-full lg:w-[480px] h-[130px] sm:h-[150px] flex items-center justify-center">
                  {/* Glowing red ambient aura */}
                  <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-red-500/10 via-[#801424]/15 to-transparent blur-3xl pointer-events-none" />

                  {/* Left Floating Integral Formula */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute left-2 sm:left-6 top-6 bg-white/70 backdrop-blur-xs border border-red-100/60 rounded-xl px-3 py-1.5 shadow-xs text-xs sm:text-sm font-serif font-bold text-[#1F242D]"
                  >
                    <span className="text-[#801424] mr-1">∫</span>
                    <sub className="text-[0.65rem] text-gray-500">a</sub>
                    <sup className="text-[0.65rem] text-gray-500">b</sup> f(x)
                    dx
                  </motion.div>

                  {/* Center Big 3D Crimson Sigma */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="relative group">
                      <span
                        className="font-serif text-6xl sm:text-7xl lg:text-8xl font-black text-[#801424] leading-none select-none drop-shadow-[0_12px_24px_rgba(128,20,36,0.3)] transition-transform duration-300 group-hover:scale-105"
                        style={{
                          textShadow:
                            "0 1px 0 #600f1b, 0 2px 0 #500d16, 0 3px 0 #400a12, 0 4px 0 #30080d, 0 6px 12px rgba(128, 20, 36, 0.4)",
                        }}
                      >
                        Σ
                      </span>
                      {/* Glowing bokeh particles */}
                      <div className="absolute -top-2 -right-2 w-2.5 h-2.5 rounded-full bg-[#801424] shadow-[0_0_8px_#801424] animate-pulse" />
                      <div className="absolute -bottom-1 -left-2 w-2 h-2 rounded-full bg-red-400 shadow-[0_0_6px_#ef4444]" />
                    </div>
                  </div>

                  {/* Right Floating Matrix Formula */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute right-4 sm:right-8 top-4 bg-white/70 backdrop-blur-xs border border-red-100/60 rounded-xl px-3 py-1.5 shadow-xs text-xs sm:text-sm font-serif font-semibold text-[#1F242D]"
                  >
                    <span className="font-bold">A = </span>
                    <span className="inline-block px-1 border-l-2 border-r-2 border-[#1F242D] text-xs leading-tight">
                      a &nbsp; b <br /> c &nbsp; d
                    </span>
                  </motion.div>

                  {/* Bottom Right Floating Derivative Formula */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute right-6 sm:right-12 bottom-1 bg-white/70 backdrop-blur-xs border border-red-100/60 rounded-xl px-2.5 py-1 shadow-xs text-[0.75rem] font-serif font-semibold text-[#1F242D]"
                  >
                    <span className="text-[#801424] font-mono">d/dx</span>(x²) =
                    2x
                  </motion.div>
                </div>
              </div>
            </section>

            {/* 4. FOUR STATS METRIC CARDS ROW */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* Card 1: Total Quizzes */}
              <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-4 hover:border-[#801424]/30 transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-[#801424] flex items-center justify-center text-white shadow-md shadow-[#801424]/20 shrink-0">
                  <ClipboardList className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Total Quizzes
                  </span>
                  <span className="text-2xl font-black text-[#111827] tracking-tight mt-0.5">
                    {totalQuizzes}
                  </span>
                  <span className="text-[0.75rem] font-medium text-[#9CA3AF] mt-0.5">
                    — 0% this month
                  </span>
                </div>
              </div>

              {/* Card 2: Total Students */}
              <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-4 hover:border-[#801424]/30 transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-[#801424] flex items-center justify-center text-white shadow-md shadow-[#801424]/20 shrink-0">
                  <Users className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Total Students
                  </span>
                  <span className="text-2xl font-black text-[#111827] tracking-tight mt-0.5">
                    {totalStudents}
                  </span>
                  <span className="text-[0.75rem] font-medium text-[#9CA3AF] mt-0.5">
                    — 0% this month
                  </span>
                </div>
              </div>

              {/* Card 3: Total Attempts */}
              <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-4 hover:border-[#801424]/30 transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-[#801424] flex items-center justify-center text-white shadow-md shadow-[#801424]/20 shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Total Attempts
                  </span>
                  <span className="text-2xl font-black text-[#111827] tracking-tight mt-0.5">
                    {totalAttempts}
                  </span>
                  <span className="text-[0.75rem] font-medium text-[#9CA3AF] mt-0.5">
                    — 0% this month
                  </span>
                </div>
              </div>

              {/* Card 4: Average Score */}
              <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-4 hover:border-[#801424]/30 transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-[#801424] flex items-center justify-center text-white shadow-md shadow-[#801424]/20 shrink-0">
                  <Star className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Average Score
                  </span>
                  <span className="text-2xl font-black text-[#111827] tracking-tight mt-0.5">
                    {averageScore}%
                  </span>
                  <span className="text-[0.75rem] font-medium text-[#9CA3AF] mt-0.5">
                    — 0% this month
                  </span>
                </div>
              </div>
            </section>

            {/* 5. MIDDLE ROW: QUIZ OVERVIEW & RECENT QUIZ ACTIVITY */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Card: Quiz Overview (Chart) */}
              <div className="lg:col-span-7 bg-white border border-[#EAEBED] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-[#111827]">
                    Quiz Overview
                  </h3>

                  {/* Dropdown Filter */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F3F4F6] rounded-xl text-xs font-semibold text-[#4B5563] transition-colors cursor-pointer"
                    >
                      <span>{timeRange}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    </button>

                    <AnimatePresence>
                      {isTimeDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute right-0 mt-1.5 w-32 bg-white border border-[#EAEBED] rounded-xl shadow-lg py-1 z-20"
                        >
                          {(
                            ["This Month", "This Week", "All Time"] as const
                          ).map((t) => (
                            <button
                              key={t}
                              onClick={() => {
                                setTimeRange(t);
                                setIsTimeDropdownOpen(false);
                              }}
                              className={`w-full text-left px-3 py-1.5 text-xs font-medium cursor-pointer ${
                                timeRange === t
                                  ? "bg-[#801424]/10 text-[#801424] font-bold"
                                  : "text-[#4B5563] hover:bg-[#F3F4F6]"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Chart SVG Canvas */}
                <div className="w-full h-56 relative mt-2 flex flex-col justify-between">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 500 200"
                    preserveAspectRatio="none"
                  >
                    {/* Grid Lines */}
                    <line
                      x1="35"
                      y1="20"
                      x2="490"
                      y2="20"
                      stroke="#F3F4F6"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="35"
                      y1="60"
                      x2="490"
                      y2="60"
                      stroke="#F3F4F6"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="35"
                      y1="100"
                      x2="490"
                      y2="100"
                      stroke="#F3F4F6"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="35"
                      y1="140"
                      x2="490"
                      y2="140"
                      stroke="#F3F4F6"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="35"
                      y1="175"
                      x2="490"
                      y2="175"
                      stroke="#E5E7EB"
                      strokeWidth="1.5"
                    />

                    {/* Y-Axis Labels */}
                    <text
                      x="25"
                      y="24"
                      textAnchor="end"
                      className="text-[10px] fill-[#9CA3AF] font-sans"
                    >
                      100
                    </text>
                    <text
                      x="25"
                      y="64"
                      textAnchor="end"
                      className="text-[10px] fill-[#9CA3AF] font-sans"
                    >
                      75
                    </text>
                    <text
                      x="25"
                      y="104"
                      textAnchor="end"
                      className="text-[10px] fill-[#9CA3AF] font-sans"
                    >
                      50
                    </text>
                    <text
                      x="25"
                      y="144"
                      textAnchor="end"
                      className="text-[10px] fill-[#9CA3AF] font-sans"
                    >
                      25
                    </text>
                    <text
                      x="25"
                      y="179"
                      textAnchor="end"
                      className="text-[10px] fill-[#9CA3AF] font-sans"
                    >
                      0
                    </text>

                    {/* Red Line: Attempts Baseline */}
                    <polyline
                      fill="none"
                      stroke="#801424"
                      strokeWidth="2.5"
                      points="60,175 140,175 220,175 300,175 380,175 460,175"
                    />
                    {/* Point circles for Attempts */}
                    <circle cx="60" cy="175" r="3.5" fill="#801424" />
                    <circle cx="140" cy="175" r="3.5" fill="#801424" />
                    <circle cx="220" cy="175" r="3.5" fill="#801424" />
                    <circle cx="300" cy="175" r="3.5" fill="#801424" />
                    <circle cx="380" cy="175" r="3.5" fill="#801424" />
                    <circle cx="460" cy="175" r="3.5" fill="#801424" />

                    {/* Grey Line: Average Score Baseline */}
                    <polyline
                      fill="none"
                      stroke="#9CA3AF"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      points="60,175 140,175 220,175 300,175 380,175 460,175"
                    />
                  </svg>

                  {/* X-Axis Date Labels */}
                  <div className="flex justify-between pl-10 pr-4 mt-2 text-[11px] font-medium text-[#9CA3AF]">
                    {chartLabels.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                </div>

                {/* Chart Legend */}
                <div className="flex items-center justify-center gap-6 mt-5 pt-3 border-t border-[#F3F4F6] text-xs font-semibold text-[#4B5563]">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-[2.5px] bg-[#801424] rounded-full inline-block" />
                    <span>Attempts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-[2px] bg-[#9CA3AF] rounded-full inline-block" />
                    <span>Average Score (%)</span>
                  </div>
                </div>
              </div>

              {/* Right Card: Recent Quiz Activity */}
              <div className="lg:col-span-5 bg-white border border-[#EAEBED] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-[#111827]">
                    Recent Quiz Activity
                  </h3>
                  <button
                    type="button"
                    onClick={() => handleNavClick("quiz-results")}
                    className="text-xs font-bold text-[#801424] hover:underline cursor-pointer"
                  >
                    View All
                  </button>
                </div>

                {/* Activity List / Empty State */}
                <div className="flex-1 flex flex-col items-center justify-center py-10 text-center">
                  {activities.length === 0 ? (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-3.5">
                        <ClipboardList className="w-7 h-7 stroke-[1.8]" />
                      </div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        No quiz activity yet.
                      </h4>
                      <p className="text-xs text-[#6B7280] mt-1 max-w-[220px]">
                        Quizzes you add will appear here.
                      </p>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col gap-3">
                      {activities.map((act) => (
                        <div
                          key={act.id}
                          className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-xl border border-[#F0F1F3]"
                        >
                          <div className="flex flex-col text-left">
                            <span className="text-xs font-bold text-[#111827]">
                              {act.studentName}
                            </span>
                            <span className="text-[0.7rem] text-[#6B7280]">
                              {act.quizTitle}
                            </span>
                          </div>
                          <div className="flex flex-col text-right">
                            <span className="text-xs font-bold text-[#801424]">
                              {act.score}/{act.totalQuestions}
                            </span>
                            <span className="text-[0.68rem] text-[#9CA3AF]">
                              {act.submittedAt}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick Action Button to Add Quiz */}
                <div className="pt-3 border-t border-[#F3F4F6]">
                  <button
                    type="button"
                    onClick={() => handleNavClick("add-quiz")}
                    className="w-full py-2 bg-[#F9FAFB] hover:bg-[#801424]/10 border border-[#E5E7EB] hover:border-[#801424]/30 rounded-xl text-xs font-bold text-[#801424] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create New Quiz</span>
                  </button>
                </div>
              </div>
            </section>

            {/* 6. BOTTOM ROW: TOP PERFORMING QUIZZES & RECENT STUDENT PERFORMANCE */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bottom Left Card: Top Performing Quizzes */}
              <div className="bg-white border border-[#EAEBED] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-[#111827]">
                      Top Performing Quizzes
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleNavClick("quiz-results")}
                      className="text-xs font-bold text-[#801424] hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  </div>

                  {/* Table Header Row */}
                  <div className="grid grid-cols-3 text-xs font-semibold text-[#9CA3AF] py-2 border-b border-[#F3F4F6]">
                    <span>Quiz Title</span>
                    <span className="text-center">Attempts</span>
                    <span className="text-right">Average Score</span>
                  </div>
                </div>

                {/* Empty state / Quiz items */}
                <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
                  {quizzes.length === 0 ? (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-3.5">
                        <Trophy className="w-7 h-7 stroke-[1.8]" />
                      </div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        No quizzes yet.
                      </h4>
                      <p className="text-xs text-[#6B7280] mt-1 max-w-[240px]">
                        Add quizzes to see performance data.
                      </p>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col divide-y divide-[#F3F4F6]">
                      {quizzes.map((quiz) => (
                        <div
                          key={quiz.id}
                          className="grid grid-cols-3 text-xs py-3 items-center text-left"
                        >
                          <span className="font-bold text-[#111827] truncate">
                            {quiz.title}
                          </span>
                          <span className="text-center text-[#4B5563]">
                            {quiz.attempts}
                          </span>
                          <span className="text-right font-bold text-[#801424]">
                            {quiz.averageScore}%
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2" />
              </div>

              {/* Bottom Right Card: Recent Student Performance */}
              <div className="bg-white border border-[#EAEBED] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-[#111827]">
                      Recent Student Performance
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleNavClick("view-students")}
                      className="text-xs font-bold text-[#801424] hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  </div>

                  {/* Table Header Row */}
                  <div className="grid grid-cols-4 text-xs font-semibold text-[#9CA3AF] py-2 border-b border-[#F3F4F6]">
                    <span className="col-span-1">Student</span>
                    <span className="col-span-1 text-center">Quizzes Taken</span>
                    <span className="col-span-1 text-center">Avg Score</span>
                    <span className="col-span-1 text-right">Last Active</span>
                  </div>
                </div>

                {/* Empty state / Student items */}
                <div className="flex-1 flex flex-col items-center justify-center py-6 text-center">
                  {students.length === 0 ? (
                    <div className="flex flex-col items-center py-6">
                      <div className="w-14 h-14 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-3">
                        <Users className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        No registered students yet.
                      </h4>
                      <p className="text-xs text-[#6B7280] mt-1 max-w-[260px]">
                        Registered students will appear here automatically.
                      </p>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col divide-y divide-[#F3F4F6]">
                      {students.slice(0, 5).map((st) => (
                        <div
                          key={st.id}
                          className="grid grid-cols-4 text-xs py-3 items-center text-left hover:bg-[#F9FAFB] rounded-lg px-1 transition"
                        >
                          <div className="col-span-1 min-w-0 pr-2">
                            <p className="font-bold text-[#111827] truncate">
                              {st.name}
                            </p>
                            <p className="text-[11px] text-[#9CA3AF] truncate">
                              {st.email}
                            </p>
                          </div>
                          <div className="col-span-1 text-center font-medium text-[#4B5563]">
                            {st.quizzesTaken}
                          </div>
                          <div className="col-span-1 text-center font-bold text-[#801424]">
                            {st.averageScore}%
                          </div>
                          <div className="col-span-1 text-right text-[11px] text-[#6B7280]">
                            {st.lastActive}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2" />
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW B: CALCULATORS SECTION (Smooth Swipe to Right for Single Calculator)   */}
        {/* ========================================================================= */}
        {activeNav === "calculators" && (
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              {/* SUB-VIEW 1: CATEGORIZED CALCULATOR HUB */}
              {!activeCalculator && (
                <motion.div
                  key="calculator-hub-list"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="p-6 sm:p-8 flex flex-col gap-7 max-w-[1440px] w-full mx-auto pb-16"
                >
                  {/* Header Banner for Calculators Hub */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="max-w-xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#801424]/10 border border-[#801424]/20 text-[#801424] text-xs font-bold uppercase tracking-wider mb-2">
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Admin Calculator Suite</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                        Complete Mathematical Solvers & Tools
                      </h2>
                      <p className="text-sm text-[#6B7280] mt-1.5 leading-relaxed">
                        Access all 52+ solvers across Linear Algebra, Calculus
                        1, and Calculus 2 with real-time computations and
                        step-by-step steps.
                      </p>
                    </div>

                    {/* Calculator Quick Search */}
                    <div className="w-full lg:w-72 relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA1B0]" />
                      <input
                        type="text"
                        value={calcSearchQuery}
                        onChange={(e) => setCalcSearchQuery(e.target.value)}
                        placeholder="Filter calculators..."
                        className="w-full pl-10 pr-4 py-2.5 bg-[#F9FAFB] border border-[#E2E4E8] rounded-xl text-sm focus:outline-none focus:border-[#801424] focus:ring-1 focus:ring-[#801424]"
                      />
                    </div>
                  </div>

                  {/* Category Switcher Buttons (Linear Algebra, Calculus 1, Calculus 2) */}
                  <div className="flex flex-wrap items-center gap-3 bg-white p-2 rounded-2xl border border-[#EAEBED] shadow-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedCalcCategory("linear-algebra")}
                      className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                        selectedCalcCategory === "linear-algebra"
                          ? "bg-[#801424] text-white shadow-md shadow-[#801424]/25"
                          : "text-[#4B5565] hover:bg-[#F3F4F6] hover:text-[#111827]"
                      }`}
                    >
                      <Layers className="w-4 h-4" />
                      <span>Linear Algebra Calculators</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          selectedCalcCategory === "linear-algebra"
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {
                          allCombinedCalculators.filter(
                            (c) => c.category === "linear-algebra",
                          ).length
                        }
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCalcCategory("calculus-1")}
                      className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                        selectedCalcCategory === "calculus-1"
                          ? "bg-[#801424] text-white shadow-md shadow-[#801424]/25"
                          : "text-[#4B5565] hover:bg-[#F3F4F6] hover:text-[#111827]"
                      }`}
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span>Calculus 1 Calculators</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          selectedCalcCategory === "calculus-1"
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {
                          allCombinedCalculators.filter(
                            (c) => c.category === "calculus-1",
                          ).length
                        }
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCalcCategory("calculus-2")}
                      className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                        selectedCalcCategory === "calculus-2"
                          ? "bg-[#801424] text-white shadow-md shadow-[#801424]/25"
                          : "text-[#4B5565] hover:bg-[#F3F4F6] hover:text-[#111827]"
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                      <span>Calculus 2 Calculators</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          selectedCalcCategory === "calculus-2"
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {
                          allCombinedCalculators.filter(
                            (c) => c.category === "calculus-2",
                          ).length
                        }
                      </span>
                    </button>
                  </div>

                  {/* Calculators Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredCalculators.map((calc) => (
                      <motion.div
                        key={calc.id}
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#801424]/40 hover:shadow-md transition-all duration-200 group"
                      >
                        <div>
                          {/* Header with badge */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#801424] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md truncate max-w-[200px]">
                              {calc.badge}
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-[#F8F9FA] flex items-center justify-center text-[#4B5563] group-hover:bg-[#801424] group-hover:text-white transition-colors shrink-0">
                              <Calculator className="w-4 h-4" />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-base font-bold text-[#111827] group-hover:text-[#801424] transition-colors line-clamp-1">
                            {calc.title}
                          </h3>

                          {/* Formula Pill */}
                          <div className="my-2.5 p-2 bg-[#F9FAFB] border border-[#F0F1F3] rounded-xl font-serif text-xs text-[#1F242D] text-center overflow-x-auto">
                            <code>{calc.formula}</code>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3">
                            {calc.description}
                          </p>
                        </div>

                        {/* Actions: Click to Swipe and Open */}
                        <div className="mt-5 pt-3.5 border-t border-[#F3F4F6] flex items-center justify-between">
                          <span className="text-[0.72rem] font-semibold text-[#9CA3AF]">
                            Full Page Solver
                          </span>
                          <button
                            type="button"
                            onClick={() => setActiveCalculator(calc)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#801424] hover:bg-[#68101D] text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer active:scale-95 group/btn"
                          >
                            <span>Open Calculator</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {filteredCalculators.length === 0 && (
                    <div className="bg-white border border-[#EAEBED] rounded-2xl p-12 text-center flex flex-col items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-red-50 text-[#801424] flex items-center justify-center mb-3">
                        <Search className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-[#111827]">
                        No calculators match your search.
                      </h4>
                      <p className="text-xs text-[#6B7280] mt-1">
                        Try searching for another formula, term, or clear the
                        search filter.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* SUB-VIEW 2: DEDICATED CALCULATOR PAGE (Swipes from Right!) */}
              {activeCalculator && (
                <motion.div
                  key="calculator-detail-view"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 80 }}
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-20"
                >
                  {/* Top Navigation & Breadcrumb Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-[#EAEBED] rounded-2xl p-4 shadow-xs">
                    <button
                      type="button"
                      onClick={() => setActiveCalculator(null)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] hover:bg-[#801424]/10 border border-[#E5E7EB] hover:border-[#801424]/30 rounded-xl text-xs font-bold text-[#801424] transition-all cursor-pointer active:scale-95 group"
                    >
                      <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                      <span>Back to All Calculators</span>
                    </button>

                    <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
                      <span>Admin Suite</span>
                      <span>/</span>
                      <span className="capitalize">
                        {activeCalculator.category.replace("-", " ")}
                      </span>
                      <span>/</span>
                      <span className="font-bold text-[#801424] truncate max-w-[240px]">
                        {activeCalculator.title}
                      </span>
                    </div>
                  </div>

                  {/* Calculator Title & Info Header */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#801424] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md">
                          {activeCalculator.badge}
                        </span>
                        <span className="text-xs text-[#9CA3AF]">
                          Interactive Admin Solver
                        </span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
                        {activeCalculator.title}
                      </h1>
                      <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 leading-relaxed">
                        {activeCalculator.description}
                      </p>
                    </div>

                    <div className="bg-[#F9FAFB] border border-[#EBECEF] rounded-2xl px-5 py-3 text-center self-start md:self-auto shrink-0 font-serif text-sm text-[#1F242D] shadow-xs">
                      <span className="text-[0.68rem] font-sans font-bold uppercase tracking-wider text-[#8C93A0] block mb-0.5">
                        Mathematical Formula / Example
                      </span>
                      <code>{activeCalculator.formula}</code>
                    </div>
                  </div>

                  {/* Embedded Real Interactive Calculator Component */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW C: TOPICS OVERVIEW (Swipe to Right for Single Topic Study View)       */}
        {/* ========================================================================= */}
        {activeNav === "topics" && (
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              {/* SUB-VIEW 1: TOPIC MODULES HUB */}
              {!activeTopic && (
                <motion.div
                  key="topics-hub-list"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="p-6 sm:p-8 flex flex-col gap-7 max-w-[1440px] w-full mx-auto pb-16"
                >
                  {/* Header Banner for Topics Hub */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="max-w-xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#801424]/10 border border-[#801424]/20 text-[#801424] text-xs font-bold uppercase tracking-wider mb-2">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Curriculum Management</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                        Complete Course Topics & Modules
                      </h2>
                      <p className="text-sm text-[#6B7280] mt-1.5 leading-relaxed">
                        Explore, review, and manage all curriculum modules,
                        formulas, theorems, and example exercises across Linear
                        Algebra, Calculus 1, and Calculus 2.
                      </p>
                    </div>

                    {/* Topic Search Box */}
                    <div className="w-full lg:w-72 relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA1B0]" />
                      <input
                        type="text"
                        value={topicSearchQuery}
                        onChange={(e) => setTopicSearchQuery(e.target.value)}
                        placeholder="Search all topics & lessons..."
                        className="w-full pl-10 pr-4 py-2.5 bg-[#F9FAFB] border border-[#E2E4E8] rounded-xl text-sm focus:outline-none focus:border-[#801424] focus:ring-1 focus:ring-[#801424]"
                      />
                    </div>
                  </div>

                  {/* Category Switcher Buttons (Linear Algebra, Calculus 1, Calculus 2) */}
                  <div className="flex flex-wrap items-center gap-3 bg-white p-2 rounded-2xl border border-[#EAEBED] shadow-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedTopicCategory("linear-algebra")}
                      className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                        selectedTopicCategory === "linear-algebra"
                          ? "bg-[#801424] text-white shadow-md shadow-[#801424]/25"
                          : "text-[#4B5565] hover:bg-[#F3F4F6] hover:text-[#111827]"
                      }`}
                    >
                      <Layers className="w-4 h-4" />
                      <span>Linear Algebra Topics</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          selectedTopicCategory === "linear-algebra"
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {
                          allCombinedTopics.filter(
                            (t) => t.category === "linear-algebra",
                          ).length
                        }
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedTopicCategory("calculus-1")}
                      className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                        selectedTopicCategory === "calculus-1"
                          ? "bg-[#801424] text-white shadow-md shadow-[#801424]/25"
                          : "text-[#4B5565] hover:bg-[#F3F4F6] hover:text-[#111827]"
                      }`}
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span>Calculus 1 Topics</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          selectedTopicCategory === "calculus-1"
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {
                          allCombinedTopics.filter(
                            (t) => t.category === "calculus-1",
                          ).length
                        }
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedTopicCategory("calculus-2")}
                      className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                        selectedTopicCategory === "calculus-2"
                          ? "bg-[#801424] text-white shadow-md shadow-[#801424]/25"
                          : "text-[#4B5565] hover:bg-[#F3F4F6] hover:text-[#111827]"
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                      <span>Calculus 2 Topics</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          selectedTopicCategory === "calculus-2"
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {
                          allCombinedTopics.filter(
                            (t) => t.category === "calculus-2",
                          ).length
                        }
                      </span>
                    </button>
                  </div>

                  {/* Topics Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredTopics.map((top) => (
                      <motion.div
                        key={top.id}
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#801424]/40 hover:shadow-md transition-all duration-200 group"
                      >
                        <div>
                          {/* Header with chapter badge */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[0.68rem] font-bold text-[#801424] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md truncate max-w-[200px]">
                              {top.chapter}
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-[#F8F9FA] flex items-center justify-center text-[#4B5563] group-hover:bg-[#801424] group-hover:text-white transition-colors shrink-0">
                              <BookOpen className="w-4 h-4" />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-base font-bold text-[#111827] group-hover:text-[#801424] transition-colors line-clamp-2">
                            {top.title}
                          </h3>

                          {/* Summary */}
                          <p className="text-xs text-[#6B7280] leading-relaxed mt-2 line-clamp-3">
                            {top.summary}
                          </p>
                        </div>

                        {/* Actions: Click to Swipe and Open */}
                        <div className="mt-5 pt-3.5 border-t border-[#F3F4F6] flex items-center justify-between">
                          <span className="text-[0.72rem] font-semibold text-[#9CA3AF]">
                            {top.examples.length > 0
                              ? `${top.examples.length} Example${
                                  top.examples.length > 1 ? "s" : ""
                                }`
                              : "Theory & Practice"}
                          </span>
                          <button
                            type="button"
                            onClick={() => setActiveTopic(top)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#801424] hover:bg-[#68101D] text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer active:scale-95 group/btn"
                          >
                            <span>Explore Topic</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {filteredTopics.length === 0 && (
                    <div className="bg-white border border-[#EAEBED] rounded-2xl p-12 text-center flex flex-col items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-red-50 text-[#801424] flex items-center justify-center mb-3">
                        <Search className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-[#111827]">
                        No topics match your search.
                      </h4>
                      <p className="text-xs text-[#6B7280] mt-1">
                        Try searching for another keyword or chapter term.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* SUB-VIEW 2: DEDICATED TOPIC DETAIL & STUDY PAGE (Swipes from Right!) */}
              {activeTopic && (
                <motion.div
                  key="topic-detail-view"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 80 }}
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-20"
                >
                  {/* Top Navigation & Breadcrumb Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-[#EAEBED] rounded-2xl p-4 shadow-xs">
                    <button
                      type="button"
                      onClick={() => setActiveTopic(null)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] hover:bg-[#801424]/10 border border-[#E5E7EB] hover:border-[#801424]/30 rounded-xl text-xs font-bold text-[#801424] transition-all cursor-pointer active:scale-95 group"
                    >
                      <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                      <span>Back to All Topics</span>
                    </button>

                    <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
                      <span>Admin Curriculum</span>
                      <span>/</span>
                      <span className="capitalize">
                        {activeTopic.category.replace("-", " ")}
                      </span>
                      <span>/</span>
                      <span className="font-bold text-[#801424] truncate max-w-[240px]">
                        {activeTopic.title}
                      </span>
                    </div>
                  </div>

                  {/* Topic Title & Meta Banner */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#801424] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md">
                          {activeTopic.chapter}
                        </span>
                        <span className="text-[0.7rem] font-bold uppercase tracking-wider text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-md">
                          {activeTopic.categoryLabel}
                        </span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
                        {activeTopic.title}
                      </h1>
                      <p className="text-xs sm:text-sm text-[#6B7280] mt-2 leading-relaxed">
                        {activeTopic.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveNav("calculators");
                          setSelectedCalcCategory(activeTopic.category);
                        }}
                        className="px-4 py-2.5 bg-[#801424] hover:bg-[#68101D] text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                      >
                        <Calculator className="w-4 h-4" />
                        <span>Open Solvers</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Lesson Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column: Conceptual Deep Dive & Details */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                      {/* Overview & Theory Card */}
                      <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs">
                        <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#F3F4F6]">
                          <div className="w-8 h-8 rounded-lg bg-red-50 text-[#801424] flex items-center justify-center">
                            <BookMarked className="w-4 h-4" />
                          </div>
                          <h3 className="text-base font-bold text-[#111827]">
                            Theoretical Overview & Fundamentals
                          </h3>
                        </div>
                        <div className="text-sm text-[#374151] leading-relaxed whitespace-pre-line space-y-3">
                          {activeTopic.details}
                        </div>
                      </div>

                      {/* Worked Example Problems Card */}
                      {activeTopic.examples &&
                        activeTopic.examples.length > 0 && (
                          <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs">
                            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#F3F4F6]">
                              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#801424] flex items-center justify-center">
                                <HelpCircle className="w-4 h-4" />
                              </div>
                              <h3 className="text-base font-bold text-[#111827]">
                                Step-by-Step Worked Problems & Solutions
                              </h3>
                            </div>

                            <div className="space-y-4">
                              {activeTopic.examples.map((ex, i) => (
                                <div
                                  key={i}
                                  className="p-4.5 bg-[#F9FAFB] border border-[#F0F1F3] rounded-2xl"
                                >
                                  <div className="flex items-start gap-2.5 mb-2">
                                    <span className="px-2 py-0.5 text-[0.7rem] font-bold text-[#801424] bg-white border border-red-200 rounded-md shrink-0">
                                      Example {i + 1}
                                    </span>
                                    <p className="text-xs sm:text-sm font-semibold text-[#111827]">
                                      {typeof ex === "string"
                                        ? ex
                                        : (ex as any).question ||
                                          JSON.stringify(ex)}
                                    </p>
                                  </div>
                                  {typeof ex !== "string" &&
                                    (ex as any).solution && (
                                      <div className="mt-2.5 pl-3 border-l-2 border-[#801424]">
                                        <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#6B7280] block mb-0.5">
                                          Solution
                                        </span>
                                        <p className="text-xs sm:text-sm font-mono text-[#374151]">
                                          {(ex as any).solution}
                                        </p>
                                      </div>
                                    )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>

                    {/* Right Column: Key Takeaways & Quick Solver Suite */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                      {/* Topic Metadata Card */}
                      <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 shadow-xs">
                        <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#F3F4F6]">
                          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                            <Lightbulb className="w-4 h-4" />
                          </div>
                          <h3 className="text-sm font-bold text-[#111827]">
                            Curriculum Highlights
                          </h3>
                        </div>

                        <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-xs text-[#4B5565] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#801424] shrink-0 mt-0.5" />
                            <span>
                              <strong>Subject:</strong>{" "}
                              {activeTopic.categoryLabel}
                            </span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-[#4B5565] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#801424] shrink-0 mt-0.5" />
                            <span>
                              <strong>Module:</strong> {activeTopic.chapter}
                            </span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-[#4B5565] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#801424] shrink-0 mt-0.5" />
                            <span>
                              <strong>Examples Available:</strong>{" "}
                              {activeTopic.examples.length} problem sets
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Launch Connected Calculators Card */}
                      <div className="bg-gradient-to-br from-[#801424] to-[#500c16] text-white rounded-3xl p-6 shadow-lg flex flex-col justify-between gap-4">
                        <div>
                          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                            <Calculator className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-base font-bold">
                            Interactive Solvers Available
                          </h4>
                          <p className="text-xs text-white/80 mt-1 leading-relaxed">
                            Test formulas and solve step-by-step problems for{" "}
                            {activeTopic.categoryLabel} in the admin suite.
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setActiveNav("calculators");
                            setSelectedCalcCategory(activeTopic.category);
                          }}
                          className="w-full py-2.5 bg-white hover:bg-gray-100 text-[#801424] rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <span>Open {activeTopic.categoryLabel} Solvers</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW D: ADD QUIZ (inline page, not a modal)                                 */}
        {/* ========================================================================= */}
        {activeNav === "add-quiz" && (
        <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
          <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#801424] flex items-center justify-center text-white shrink-0">
                  <PlusSquare className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                    Add Quiz
                  </h2>
                  <p className="text-sm text-[#6B7280] mt-1">
                    Create a quiz on this page, set any number of questions, then
                    publish it. Added quizzes appear on the right.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#801424]/10 border border-[#801424]/20 px-3 py-1 text-xs font-bold text-[#801424]">
                {quizzes.length} quiz{quizzes.length === 1 ? "" : "zes"} added
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)] gap-6 items-start">
            <form
              onSubmit={handleCreateQuiz}
              className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-5"
            >
              <div>
                <h3 className="text-base font-bold text-[#111827]">
                  Quiz details
                </h3>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  Choose how many questions you need, then scroll through each
                  one below.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#374151] mb-1.5 uppercase tracking-wide">
                  Quiz Title
                </label>
                <input
                  type="text"
                  required
                  value={newQuizTitle}
                  onChange={(e) => setNewQuizTitle(e.target.value)}
                  placeholder="e.g. Matrix Inversion & Determinants Quiz 1"
                  className="w-full px-3.5 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#801424] focus:ring-1 focus:ring-[#801424]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#374151] mb-1.5 uppercase tracking-wide">
                    Math Domain / Topic
                  </label>
                  <select
                    value={newQuizTopic}
                    onChange={(e) => setNewQuizTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#801424]"
                  >
                    <option value="Linear Algebra">Linear Algebra</option>
                    <option value="Calculus 1">Calculus 1</option>
                    <option value="Calculus 2">Calculus 2</option>
                    <option value="Differential Equations">
                      Differential Equations
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] mb-1.5 uppercase tracking-wide">
                    Number of Questions
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newQuizQuestions}
                    onChange={(e) => handleQuestionCountChange(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#801424]"
                  />
                  <p className="text-[11px] text-[#9CA3AF] mt-1.5">
                    Showing {newQuizQuestionDrafts.length} question
                    {newQuizQuestionDrafts.length === 1 ? "" : "s"} — scroll to
                    edit all of them.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-[#111827]">
                    Questions
                  </h4>
                  <span className="text-xs font-semibold text-[#801424]">
                    {newQuizQuestionDrafts.length} total
                  </span>
                </div>

                <div className="space-y-4">
                  {newQuizQuestionDrafts.map((question, index) => (
                    <div
                      key={question.id}
                      className="rounded-2xl border border-[#EAEBED] bg-[#F9FAFB] p-4 sm:p-5 space-y-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center rounded-lg bg-[#801424] text-white text-xs font-bold px-2.5 py-1">
                          Question {index + 1}
                        </span>
                        <span className="text-[11px] text-[#9CA3AF]">
                          of {newQuizQuestionDrafts.length}
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#374151] mb-1.5">
                          Prompt
                        </label>
                        <textarea
                          required
                          rows={2}
                          value={question.prompt}
                          onChange={(e) =>
                            updateQuestionDraft(
                              question.id,
                              "prompt",
                              e.target.value,
                            )
                          }
                          placeholder={`Enter question ${index + 1}`}
                          className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#801424] resize-y"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(
                          [
                            ["optionA", "A"],
                            ["optionB", "B"],
                            ["optionC", "C"],
                            ["optionD", "D"],
                          ] as const
                        ).map(([field, letter]) => (
                          <div key={field}>
                            <label className="block text-xs font-bold text-[#374151] mb-1.5">
                              Option {letter}
                            </label>
                            <input
                              type="text"
                              required
                              value={question[field]}
                              onChange={(e) =>
                                updateQuestionDraft(
                                  question.id,
                                  field,
                                  e.target.value,
                                )
                              }
                              placeholder={`Choice ${letter}`}
                              className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#801424]"
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#374151] mb-1.5">
                          Correct answer
                        </label>
                        <select
                          value={question.correct}
                          onChange={(e) =>
                            updateQuestionDraft(
                              question.id,
                              "correct",
                              e.target.value as QuizQuestionDraft["correct"],
                            )
                          }
                          className="w-full sm:w-48 px-3.5 py-2.5 bg-white border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#801424]"
                        >
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#F0F1F3]">
                <button
                  type="button"
                  onClick={() => handleNavClick("dashboard")}
                  className="px-4 py-2.5 text-xs font-semibold text-[#4B5563] hover:bg-[#F3F4F6] rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingQuiz}
                  className="px-5 py-2.5 bg-[#801424] hover:bg-[#68101D] disabled:opacity-60 text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  {isSubmittingQuiz ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Publishing...</span>
                    </>
                  ) : (
                    <span>Publish Quiz</span>
                  )}
                </button>
              </div>
            </form>

            <aside className="bg-white border border-[#EAEBED] rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] xl:sticky xl:top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-[#111827]">
                  Quizzes added
                </h3>
                <span className="text-xs font-bold text-[#801424]">
                  {quizzes.length}
                </span>
              </div>

              {isLoadingQuizzes ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <Loader2 className="w-7 h-7 animate-spin text-[#801424] mb-2" />
                  <p className="text-xs text-[#6B7280]">Loading quizzes...</p>
                </div>
              ) : quizzes.length === 0 ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-3">
                    <ClipboardList className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#111827]">
                    No quizzes added yet
                  </h4>
                  <p className="text-xs text-[#6B7280] mt-1 max-w-[220px]">
                    Publish a quiz and it will show up in this list and on student dashboards.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                  {quizzes.map((quiz) => (
                    <div
                      key={quiz.id}
                      className="rounded-2xl border border-[#EAEBED] bg-[#F9FAFB] p-4 transition hover:border-[#D0D4DC]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-bold text-[#111827] truncate">
                            {quiz.title}
                          </h4>
                          <p className="text-xs text-[#6B7280] mt-0.5">
                            {quiz.topic}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] font-bold uppercase tracking-wide text-[#801424] bg-[#801424]/10 px-2 py-0.5 rounded-md">
                            Active
                          </span>
                          <button
                            type="button"
                            onClick={() => handleDeleteQuiz(quiz.id)}
                            title="Delete Quiz"
                            className="p-1 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-[#6B7280]">
                        <span>
                          {quiz.questionsCount} question
                          {quiz.questionsCount === 1 ? "" : "s"}
                        </span>
                        <span>{quiz.createdAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW E: QUIZ RESULTS (Admin View)                                         */}
        {/* ========================================================================= */}
        {activeNav === "quiz-results" && (
          <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
            <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#801424] flex items-center justify-center text-white shrink-0">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                      Quiz Results & Analytics
                    </h2>
                    <p className="text-sm text-[#6B7280] mt-1">
                      Monitor student quiz performance, average scores, and overall submission statistics.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleNavClick("add-quiz")}
                  className="px-4 py-2.5 bg-[#801424] hover:bg-[#68101D] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create New Quiz</span>
                </button>
              </div>
            </div>

            {quizzes.length === 0 ? (
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-3">
                  <BarChart3 className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-base font-bold text-[#111827]">
                  No Quizzes Available
                </h4>
                <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
                  Create and publish a quiz to start tracking student scores and analytics.
                </p>
                <button
                  onClick={() => handleNavClick("add-quiz")}
                  className="mt-4 px-4 py-2 bg-[#801424] text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Add Your First Quiz
                </button>
              </div>
            ) : (
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#EAEBED] text-xs font-bold uppercase text-[#6B7280]">
                        <th className="pb-3 px-3">Quiz Title</th>
                        <th className="pb-3 px-3">Topic</th>
                        <th className="pb-3 px-3">Questions</th>
                        <th className="pb-3 px-3">Student Attempts</th>
                        <th className="pb-3 px-3">Avg. Score</th>
                        <th className="pb-3 px-3">Published Date</th>
                        <th className="pb-3 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F3F4F6]">
                      {quizzes.map((quiz) => (
                        <tr key={quiz.id} className="hover:bg-[#F9FAFB] transition">
                          <td className="py-3.5 px-3 font-semibold text-[#111827]">
                            {quiz.title}
                          </td>
                          <td className="py-3.5 px-3 text-xs text-[#6B7280]">
                            <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-medium">
                              {quiz.topic}
                            </span>
                          </td>
                          <td className="py-3.5 px-3 text-xs text-[#4B5563]">
                            {quiz.questionsCount}
                          </td>
                          <td className="py-3.5 px-3 text-xs font-medium text-[#111827]">
                            {quiz.attempts}
                          </td>
                          <td className="py-3.5 px-3">
                            <span
                              className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                                quiz.averageScore >= 75
                                  ? "bg-green-100 text-green-700"
                                  : quiz.averageScore >= 50
                                  ? "bg-yellow-100 text-yellow-800"
                                  : quiz.averageScore > 0
                                  ? "bg-red-100 text-red-700"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {quiz.attempts > 0 ? `${quiz.averageScore}%` : "No attempts"}
                            </span>
                          </td>
                          <td className="py-3.5 px-3 text-xs text-[#6B7280]">
                            {quiz.createdAt}
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            <button
                              type="button"
                              onClick={() => handleDeleteQuiz(quiz.id)}
                              className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                              title="Delete Quiz"
                            >
                              <Trash2 className="w-4 h-4" />
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

        {/* ========================================================================= */}
        {/* VIEW F: HISTORY QUIZZES (Admin View)                                       */}
        {/* ========================================================================= */}
        {activeNav === "history-quizzes" && (
          <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
            <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#801424] flex items-center justify-center text-white shrink-0">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                    Quiz Submission History
                  </h2>
                  <p className="text-sm text-[#6B7280] mt-1">
                    Complete chronological record of all student quiz submissions and grading results.
                  </p>
                </div>
              </div>
            </div>

            {activities.length === 0 ? (
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-3">
                  <History className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-base font-bold text-[#111827]">
                  No Submissions Recorded Yet
                </h4>
                <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
                  Student quiz attempts and scores will automatically appear here as they take quizzes.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#EAEBED] text-xs font-bold uppercase text-[#6B7280]">
                        <th className="pb-3 px-3">Student</th>
                        <th className="pb-3 px-3">Quiz Title</th>
                        <th className="pb-3 px-3">Score</th>
                        <th className="pb-3 px-3">Percentage</th>
                        <th className="pb-3 px-3">Status</th>
                        <th className="pb-3 px-3">Submitted At</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F3F4F6]">
                      {activities.map((act) => {
                        const pct =
                          act.totalQuestions > 0
                            ? Math.round((act.score / act.totalQuestions) * 100)
                            : 0;
                        const passed = pct >= 60;
                        return (
                          <tr key={act.id} className="hover:bg-[#F9FAFB] transition">
                            <td className="py-3.5 px-3 font-semibold text-[#111827]">
                              {act.studentName}
                            </td>
                            <td className="py-3.5 px-3 text-xs text-[#4B5563]">
                              {act.quizTitle}
                            </td>
                            <td className="py-3.5 px-3 text-xs font-bold text-[#111827]">
                              {act.score} / {act.totalQuestions}
                            </td>
                            <td className="py-3.5 px-3 text-xs font-bold">
                              {pct}%
                            </td>
                            <td className="py-3.5 px-3">
                              <span
                                className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                                  passed
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                              >
                                {passed ? "Passed" : "Needs Review"}
                              </span>
                            </td>
                            <td className="py-3.5 px-3 text-xs text-[#6B7280]">
                              {act.submittedAt}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW G: VIEW STUDENTS (Full Page Table & Analytics Directory)             */}
        {/* ========================================================================= */}
        {activeNav === "view-students" && (
          <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
            {/* Header Banner */}
            <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#801424] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#801424]/20">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                      Enrolled Students Directory
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                      Manage registered learners, monitor individual test scores, and track overall student performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-center">
                  <span className="inline-flex items-center rounded-full bg-[#801424]/10 border border-[#801424]/20 px-3.5 py-1 text-xs font-bold text-[#801424]">
                    {students.length} Registered Student{students.length === 1 ? "" : "s"}
                  </span>
                </div>
              </div>

              {/* Quick Summary Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-gray-100">
                <div className="bg-[#F8F9FA] p-3.5 rounded-2xl border border-gray-100">
                  <p className="text-[11px] text-gray-500 font-medium">Total Registered</p>
                  <p className="text-xl font-bold text-[#111827]">{students.length}</p>
                </div>
                <div className="bg-[#F8F9FA] p-3.5 rounded-2xl border border-gray-100">
                  <p className="text-[11px] text-gray-500 font-medium">Active Quiz Takers</p>
                  <p className="text-xl font-bold text-green-700">
                    {students.filter((s) => s.quizzesTaken > 0).length}
                  </p>
                </div>
                <div className="bg-[#F8F9FA] p-3.5 rounded-2xl border border-gray-100">
                  <p className="text-[11px] text-gray-500 font-medium">Average Student Score</p>
                  <p className="text-xl font-bold text-[#801424]">
                    {students.length > 0
                      ? Math.round(
                          students.reduce((acc, s) => acc + s.averageScore, 0) /
                            students.length,
                        )
                      : 0}
                    %
                  </p>
                </div>
                <div className="bg-[#F8F9FA] p-3.5 rounded-2xl border border-gray-100">
                  <p className="text-[11px] text-gray-500 font-medium">Total Quiz Attempts</p>
                  <p className="text-xl font-bold text-gray-800">{totalAttempts}</p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={studentSearchQuery}
                    onChange={(e) => setStudentSearchQuery(e.target.value)}
                    placeholder="Search by student name or email..."
                    className="w-full pl-10 pr-4 py-2 bg-[#F9FAFB] border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#801424] focus:ring-1 focus:ring-[#801424]"
                  />
                </div>
                {studentSearchQuery && (
                  <button
                    onClick={() => setStudentSearchQuery("")}
                    className="text-xs text-gray-500 hover:text-gray-800 underline cursor-pointer"
                  >
                    Clear search
                  </button>
                )}
              </div>
            </div>

            {/* Students Table */}
            {isLoadingQuizzes ? (
              <div className="py-16 flex flex-col items-center justify-center text-center">
                <Loader2 className="w-8 h-8 animate-spin text-[#801424] mb-3" />
                <p className="text-xs font-semibold text-gray-600">Loading student directory...</p>
              </div>
            ) : filteredStudents.length === 0 ? (
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center justify-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-4">
                  <Users className="w-8 h-8 stroke-[1.8]" />
                </div>
                <h3 className="text-base font-bold text-[#111827]">No Students Found</h3>
                <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
                  {studentSearchQuery
                    ? `No students matching "${studentSearchQuery}". Try a different query.`
                    : "No registered students found yet. Once students sign up, their profiles and performance will appear here."}
                </p>
              </div>
            ) : (
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#EAEBED] text-xs font-bold uppercase text-[#6B7280]">
                        <th className="pb-3 px-3">Student Name</th>
                        <th className="pb-3 px-3">Email Address</th>
                        <th className="pb-3 px-3">Joined Date</th>
                        <th className="pb-3 px-3 text-center">Quizzes Taken</th>
                        <th className="pb-3 px-3 text-center">Average Score</th>
                        <th className="pb-3 px-3">Status</th>
                        <th className="pb-3 px-3 text-right">Last Active</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F3F4F6]">
                      {filteredStudents.map((st) => {
                        const hasAttempts = st.quizzesTaken > 0;
                        const isGoodScore = st.averageScore >= 75;
                        return (
                          <tr key={st.id} className="hover:bg-[#F9FAFB] transition">
                            <td className="py-3.5 px-3">
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-[#801424] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                                  {st.name.slice(0, 2).toUpperCase()}
                                </div>
                                <span className="font-bold text-[#111827]">{st.name}</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-3 text-xs text-[#4B5563]">
                              {st.email}
                            </td>
                            <td className="py-3.5 px-3 text-xs text-[#6B7280]">
                              {st.joinedDate}
                            </td>
                            <td className="py-3.5 px-3 text-xs font-bold text-center text-[#111827]">
                              {st.quizzesTaken}
                            </td>
                            <td className="py-3.5 px-3 text-xs font-bold text-center">
                              {hasAttempts ? (
                                <span
                                  className={`px-2.5 py-1 rounded-lg ${
                                    isGoodScore
                                      ? "bg-green-100 text-green-800"
                                      : st.averageScore >= 50
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {st.averageScore}%
                                </span>
                              ) : (
                                <span className="text-gray-400 font-normal">No attempts</span>
                              )}
                            </td>
                            <td className="py-3.5 px-3">
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                  hasAttempts
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {hasAttempts ? "Active Learner" : "New Student"}
                              </span>
                            </td>
                            <td className="py-3.5 px-3 text-xs text-[#6B7280] text-right">
                              {st.lastActive}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
