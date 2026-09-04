import React, { useState, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
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
  Bell,
  Menu,
  ArrowLeft,
  ArrowRight,
  Zap,
  Layers,
  TrendingUp,
  Sparkles,
  BookMarked,
  Check,
  CheckCircle2,
  Copy,
  Play,
  HelpCircle,
  FileText,
  Lightbulb,
  Trash2,
  Loader2,
  Eye,
  EyeOff,
  RefreshCw,
  Clock,
  User,
  CheckSquare,
  Square,
  Wand2,
  FileQuestion,
  ListOrdered,
  SlidersHorizontal,
  AlertCircle,
  Archive,
  ArchiveRestore,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import adminLogo from "../assets/Admin logo.png";
import quizLoaderLogo from "../assets/Logo(2).png";
import {
  generateQuizQuestions,
  regenerateSingleQuestion,
  type QuizQuestionType,
  type GeneratedQuestion,
  type TopicInput,
} from "../utils/quizGenerator";

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
  getCalculusDefinitionForTopic,
  type CalculatorDefinition,
} from "../Calculus_One_Calculator/CalculatorData";

// Real Complete Topic Data from Codebase
import { TOPICS as LINEAR_ALGEBRA_TOPICS_RAW } from "../data/topics/index";
import { ALL_CALCULUS_TOPICS } from "../data/calculus-topics";
import { ALL_CALCULUS_2_TOPICS } from "../data/calculus-2-topics";
import studentLogoSigma from "../assets/Logo Student.png";

export interface QuizQuestionDraft {
  id: string;
  prompt: string;
  questionType?: QuizQuestionType;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: "A" | "B" | "C" | "D";
  correctAnswerText?: string;
  explanation?: string;
  topicTitle?: string;
}

export interface QuizItem {
  id: string;
  title: string;
  topic: string;
  questionsCount: number;
  questions: QuizQuestionDraft[];
  attempts: number;
  averageScore: number;
  createdAt: string;
  questionType?: QuizQuestionType;
  pointsPerItem: number;
}

function createEmptyQuestions(
  count: number,
  type: QuizQuestionType = "multiple_choice"
): QuizQuestionDraft[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
    prompt: "",
    questionType: type,
    optionA: "",
    optionB: "",
    optionC: type,
    optionD: "",
    correct: "A",
    correctAnswerText: "",
    explanation: "",
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
  rawDate?: string;
}

export interface StudentSubmissionItem {
  id: string;
  userId: string;
  studentName: string;
  studentEmail: string;
  quizId: string;
  quizTitle: string;
  topic: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  timeSpentSeconds: number;
  submittedAt: string;
  answers: any[];
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
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [readNotificationIds, setReadNotificationIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("admin_read_notifications") || "[]");
    } catch {
      return [];
    }
  });
  const [deletedNotificationIds, setDeletedNotificationIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("admin_deleted_notifications") || "[]");
    } catch {
      return [];
    }
  });

  // New Quiz Form State
  const [newQuizTitle, setNewQuizTitle] = useState("");
  const [newQuizTopic, setNewQuizTopic] = useState("Linear Algebra");
  const [newQuizQuestions, setNewQuizQuestions] = useState("5");
  const [newQuizQuestionDrafts, setNewQuizQuestionDrafts] = useState<
    QuizQuestionDraft[]
  >(() => createEmptyQuestions(5));
  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState(false);
  const [isLoadingQuizzes, setIsLoadingQuizzes] = useState(false);

  // Smart Quiz Generator States
  const [generatorCategory, setGeneratorCategory] = useState<
    "linear-algebra" | "calculus-1" | "calculus-2"
  >("linear-algebra");
  const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>([]);
  const [generatorQuestionType, setGeneratorQuestionType] =
    useState<QuizQuestionType>("multiple_choice");
  const [generatorItemCount, setGeneratorItemCount] = useState<number | "">(5);
  const [generatorPointsPerItem, setGeneratorPointsPerItem] = useState<number | "">(1);
  const [generatorTopicSearch, setGeneratorTopicSearch] = useState("");
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
  const [isShowingGenerateLoader, setIsShowingGenerateLoader] = useState(false);
  const [showPublishedSuccess, setShowPublishedSuccess] = useState(false);
  const publishedGSAPRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showPublishedSuccess && publishedGSAPRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".gsap-publish-circle",
          { scale: 0, rotation: -45, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" }
        );
        gsap.fromTo(
          ".gsap-publish-check",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, delay: 0.25, ease: "elastic.out(1.2, 0.4)" }
        );
        gsap.fromTo(
          ".gsap-publish-text",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, delay: 0.35, stagger: 0.1, ease: "power2.out" }
        );
      }, publishedGSAPRef);

      return () => ctx.revert();
    }
  }, [showPublishedSuccess]);
  const [showAdminAnswers, setShowAdminAnswers] = useState(true);
  const [generatorStep, setGeneratorStep] = useState<1 | 2>(1);
  const [adminReviewQuizModal, setAdminReviewQuizModal] = useState<QuizItem | null>(null);
  const [isPublishedQuizzesDrawerOpen, setIsPublishedQuizzesDrawerOpen] = useState(false);

  // Sample or Supabase live data
  const [quizzes, setQuizzes] = useState<QuizItem[]>([]);
  const [students, setStudents] = useState<StudentItem[]>([]);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [studentSubmissions, setStudentSubmissions] = useState<
    StudentSubmissionItem[]
  >([]);
  const [onlineStudentKeys, setOnlineStudentKeys] = useState<Set<string>>(new Set());

  // Track online students via Supabase Realtime Presence
  useEffect(() => {
    if (!supabase) return;

    const channel = supabase.channel("online-students");

    channel
      .on("presence", { event: "sync" }, () => {
        const state = channel.presenceState();
        const keys = new Set<string>();
        Object.values(state).forEach((presences: any) => {
          if (Array.isArray(presences)) {
            presences.forEach((p: any) => {
              if (p.userId) keys.add(p.userId.toLowerCase());
              if (p.email) keys.add(p.email.toLowerCase());
            });
          }
        });
        setOnlineStudentKeys(keys);
      })
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);
  const [recentSubmissionToast, setRecentSubmissionToast] = useState<{
    id: string;
    studentName: string;
    quizTitle: string;
    score: number;
    totalQuestions: number;
  } | null>(null);

  // Realtime Quiz Submission Listener
  useEffect(() => {
    if (!supabase) return;

    // 1. Broadcast channel for instant notification
    const broadcastChannel = supabase.channel("quiz-submissions");

    broadcastChannel
      .on("broadcast", { event: "new-quiz-submission" }, (event) => {
        const payload = event.payload;
        if (!payload) return;

        const newAct: ActivityItem = {
          id: payload.id || Date.now().toString(),
          studentName: payload.studentName || "Student",
          quizTitle: payload.quizTitle || "Quiz",
          score: payload.score ?? 0,
          totalQuestions: payload.totalQuestions ?? 1,
          submittedAt: "Just now",
          rawDate: new Date().toISOString(),
        };

        // Add to activities feed
        setActivities((prev) => [newAct, ...prev]);

        // Trigger visible floating toast notification
        setRecentSubmissionToast(newAct);

        // Re-fetch database to sync quizzes & student performance
        fetchQuizzesAndStats();
      })
      .subscribe();

    // 2. Postgres changes fallback on quiz_attempts table
    const tableSub = supabase
      .channel("table-quiz-attempts")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "quiz_attempts" },
        () => {
          fetchQuizzesAndStats();
        }
      )
      .subscribe();

    return () => {
      broadcastChannel.unsubscribe();
      tableSub.unsubscribe();
    };
  }, []);

  // Auto-dismiss floating toast after 5s
  useEffect(() => {
    if (!recentSubmissionToast) return;
    const timer = setTimeout(() => {
      setRecentSubmissionToast(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [recentSubmissionToast]);
  const activeAdminNotifications = useMemo(() => {
    return activities.filter((a) => !deletedNotificationIds.includes(a.id));
  }, [activities, deletedNotificationIds]);

  const unreadActivities = useMemo(() => {
    return activeAdminNotifications.filter((a) => !readNotificationIds.includes(a.id));
  }, [activeAdminNotifications, readNotificationIds]);

  const markAllAdminNotificationsAsRead = () => {
    const allIds = activeAdminNotifications.map((a) => a.id);
    setReadNotificationIds(allIds);
    try {
      localStorage.setItem("admin_read_notifications", JSON.stringify(allIds));
    } catch {}
  };

  const handleDeleteAdminNotification = (actId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = [...deletedNotificationIds, actId];
    setDeletedNotificationIds(updated);
    try {
      localStorage.setItem("admin_deleted_notifications", JSON.stringify(updated));
    } catch {}
  };

  const handleDeleteAllAdminNotifications = () => {
    const allIds = activities.map((a) => a.id);
    setDeletedNotificationIds(allIds);
    try {
      localStorage.setItem("admin_deleted_notifications", JSON.stringify(allIds));
    } catch {}
  };

  const handleAdminNotificationClick = (actId: string) => {
    if (!readNotificationIds.includes(actId)) {
      const updated = [...readNotificationIds, actId];
      setReadNotificationIds(updated);
      try {
        localStorage.setItem("admin_read_notifications", JSON.stringify(updated));
      } catch {}
    }
    setIsNotificationsOpen(false);
    handleNavClick("history-quizzes");
  };
  const [selectedSubmissionForReview, setSelectedSubmissionForReview] =
    useState<StudentSubmissionItem | null>(null);
  const [resultsViewMode, setResultsViewMode] = useState<
    "students" | "quizzes"
  >("students");
  const [resultsSearchQuery, setResultsSearchQuery] = useState("");
  const [resultsTopicFilter, setResultsTopicFilter] = useState("all");

  // Topic Interactive Practice Calculator state
  const [isTopicCalculatorOpen, setIsTopicCalculatorOpen] = useState(false);
  const [loadedTopicExample, setLoadedTopicExample] = useState<{ text: string; index: number } | null>(null);
  const [topicCalcKey, setTopicCalcKey] = useState<number>(0);
  const [topicCopiedIdx, setTopicCopiedIdx] = useState<number | null>(null);

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

  // Filtered student quiz submissions
  const filteredSubmissions = useMemo(() => {
    const q = resultsSearchQuery.toLowerCase().trim();
    return studentSubmissions.filter((sub) => {
      const matchesTopic =
        resultsTopicFilter === "all" || sub.topic === resultsTopicFilter;
      if (!matchesTopic) return false;
      if (!q) return true;
      return (
        sub.studentName.toLowerCase().includes(q) ||
        sub.studentEmail.toLowerCase().includes(q) ||
        sub.quizTitle.toLowerCase().includes(q) ||
        sub.topic.toLowerCase().includes(q)
      );
    });
  }, [studentSubmissions, resultsSearchQuery, resultsTopicFilter]);

  // Summary statistics for quiz results view
  const resultsStats = useMemo(() => {
    const totalSubmissions = studentSubmissions.length;
    const avgScore =
      totalSubmissions > 0
        ? Math.round(
            studentSubmissions.reduce((a, s) => a + s.percentage, 0) /
              totalSubmissions,
          )
        : 0;
    const passedCount = studentSubmissions.filter((s) => s.passed).length;
    const passRate =
      totalSubmissions > 0
        ? Math.round((passedCount / totalSubmissions) * 100)
        : 0;
    return {
      totalSubmissions,
      avgScore,
      passedCount,
      passRate,
    };
  }, [studentSubmissions]);

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
          points_per_item,
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

      // 2. Fetch attempts with answers_json
      const { data: attemptsData, error: aError } = await supabase
        .from("quiz_attempts")
        .select(`
          id,
          quiz_id,
          user_id,
          score,
          total_questions,
          submitted_at,
          time_spent_seconds,
          answers_json
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
        { count: number; totalScorePoints: number }
      > = {};
      (attemptsData || []).forEach((att: any) => {
        if (!attemptsByQuiz[att.quiz_id]) {
          attemptsByQuiz[att.quiz_id] = { count: 0, totalScorePoints: 0 };
        }
        attemptsByQuiz[att.quiz_id].count += 1;
        attemptsByQuiz[att.quiz_id].totalScorePoints += (att.score || 0);
      });

      if (quizzesData) {
        const formatted: QuizItem[] = quizzesData.map((q: any) => {
          const rawQuestions = Array.isArray(q.quiz_questions)
            ? q.quiz_questions
            : [];
          const sortedQuestions = [...rawQuestions].sort(
            (a: any, b: any) => (a.question_index ?? 0) - (b.question_index ?? 0),
          );
          const qDrafts: QuizQuestionDraft[] = sortedQuestions.map((sq: any) => {
            const isNonMC =
              sq.option_c === "identification" ||
              sq.option_c === "enumeration" ||
              sq.option_c === "problem_solving";
            const qType: QuizQuestionType = isNonMC
              ? (sq.option_c as QuizQuestionType)
              : ((sq.question_type as QuizQuestionType) || "multiple_choice");
            const answerText = isNonMC
              ? (sq.correct_answer_text || sq.option_a)
              : sq.correct_answer === "A"
              ? sq.option_a
              : sq.correct_answer === "B"
              ? sq.option_b
              : sq.correct_answer === "C"
              ? sq.option_c
              : sq.option_d;

            return {
              id: sq.id,
              prompt: sq.prompt,
              questionType: qType,
              optionA: sq.option_a,
              optionB: sq.option_b,
              optionC: sq.option_c,
              optionD: sq.option_d,
              correct: (sq.correct_answer || "A") as "A" | "B" | "C" | "D",
              correctAnswerText: answerText,
              explanation: isNonMC ? sq.option_b : "",
            };
          });

          const stat = attemptsByQuiz[q.id];
          const attemptsCount = stat ? stat.count : 0;
          const ppi = q.points_per_item || 1;
          const avgScore =
            attemptsCount > 0
              ? Math.round((stat.totalScorePoints / attemptsCount) * ppi)
              : 0;

          const primaryType = qDrafts[0]?.questionType || "multiple_choice";

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
            questionType: primaryType,
            pointsPerItem: ppi,
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
                    (acc: number, a: any) => {
                      const quiz = quizzesData?.find((qq: any) => qq.id === a.quiz_id);
                      const ppi = quiz?.points_per_item || 1;
                      return acc + (a.score || 0) * ppi;
                    },
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

      // Format complete student submissions & activity items
      if (attemptsData && quizzesData) {
        const quizMap = new Map(quizzesData.map((q: any) => [q.id, q]));
        const profileMap = new Map(
          (profilesData || []).map((p: any) => [p.id, p]),
        );

        const allSubmissions: StudentSubmissionItem[] = attemptsData.map(
          (a: any) => {
            const quiz = quizMap.get(a.quiz_id);
            const prof = profileMap.get(a.user_id);

            let parsedAnswers: any[] = [];
            let payloadStudentName = "";
            let payloadStudentEmail = "";

            try {
              if (a.answers_json) {
                const raw =
                  typeof a.answers_json === "string"
                    ? JSON.parse(a.answers_json)
                    : a.answers_json;
                if (Array.isArray(raw)) {
                  parsedAnswers = raw;
                } else if (raw && typeof raw === "object") {
                  payloadStudentName = raw.student_name || "";
                  payloadStudentEmail = raw.student_email || "";
                  parsedAnswers = Array.isArray(raw.answers) ? raw.answers : [];
                }
              }
            } catch {
              parsedAnswers = [];
            }

            const sName =
              payloadStudentName?.trim() ||
              prof?.name?.trim() ||
              prof?.email?.split("@")[0] ||
              (a.user_id ? `Student (${a.user_id.slice(0, 6)})` : "Student");
            const sEmail = payloadStudentEmail?.trim() || prof?.email || "";
            const qTitle = quiz?.title || "Practice Quiz";
            const qTopic = quiz?.topic || "Linear Algebra";
            const totalQ = a.total_questions || 1;
            const pct = Math.round((a.score / totalQ) * 100);

            return {
              id: a.id,
              userId: a.user_id,
              studentName: sName,
              studentEmail: sEmail,
              quizId: a.quiz_id,
              quizTitle: qTitle,
              topic: qTopic,
              score: a.score,
              totalQuestions: totalQ,
              percentage: pct,
              passed: pct >= 60,
              timeSpentSeconds: a.time_spent_seconds || 0,
              submittedAt: new Date(a.submitted_at).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                },
              ),
              answers: parsedAnswers,
            };
          },
        );

        setStudentSubmissions(allSubmissions);

        const actList: ActivityItem[] = allSubmissions.map((s) => ({
          id: s.id,
          studentName: s.studentName,
          quizTitle: s.quizTitle,
          score: s.score,
          totalQuestions: s.totalQuestions,
          submittedAt: s.submittedAt,
          rawDate: s.submittedAt,
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

  // Filtered topics for the Quiz Generator
  const availableGeneratorTopics = useMemo(() => {
    return allCombinedTopics.filter((t) => {
      const matchCat = t.category === generatorCategory;
      if (!matchCat) return false;
      if (!generatorTopicSearch.trim()) return true;
      const q = generatorTopicSearch.toLowerCase().trim();
      return (
        t.title.toLowerCase().includes(q) ||
        t.chapter.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q)
      );
    });
  }, [allCombinedTopics, generatorCategory, generatorTopicSearch]);

  const handleToggleTopic = (topicId: string) => {
    setSelectedTopicIds((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleSelectAllTopics = () => {
    const currentCatTopics = allCombinedTopics
      .filter((t) => t.category === generatorCategory)
      .map((t) => t.id);
    setSelectedTopicIds(currentCatTopics);
  };

  const handleDeselectAllTopics = () => {
    setSelectedTopicIds([]);
  };

  // Run the smart quiz generator
  const handleGenerateQuiz = () => {
    setIsShowingGenerateLoader(true);
    setIsGeneratingQuiz(true);
    setTimeout(() => {
      try {
        // Get chosen topic objects (or all topics in category if none explicitly checked)
        const topicsInCat = allCombinedTopics.filter(
          (t) => t.category === generatorCategory
        );
        const chosenTopics =
          selectedTopicIds.length > 0
            ? topicsInCat.filter((t) => selectedTopicIds.includes(t.id))
            : topicsInCat;

        const effectiveItemCount = typeof generatorItemCount === "number" && generatorItemCount > 0 ? generatorItemCount : 5;
        const generated = generateQuizQuestions(
          chosenTopics,
          generatorCategory,
          effectiveItemCount,
          generatorQuestionType
        );

        const drafts: QuizQuestionDraft[] = generated.map((g) => ({
          id: g.id,
          prompt: g.prompt,
          questionType: g.questionType,
          optionA: g.optionA,
          optionB: g.optionB,
          optionC: g.optionC,
          optionD: g.optionD,
          correct: g.correct,
          correctAnswerText: g.correctAnswerText,
          explanation: g.explanation,
          topicTitle: g.topicTitle,
        }));

        setNewQuizQuestionDrafts(drafts);
        setNewQuizQuestions(String(drafts.length));

        // Category label for quiz
        const catLabel =
          generatorCategory === "linear-algebra"
            ? "Linear Algebra"
            : generatorCategory === "calculus-1"
            ? "Calculus 1"
            : "Calculus 2";
        setNewQuizTopic(catLabel);

        // Auto-suggest title if not manually set
        const typeLabel =
          generatorQuestionType === "multiple_choice"
            ? "Multiple Choice"
            : generatorQuestionType === "identification"
            ? "Identification"
            : generatorQuestionType === "enumeration"
            ? "Enumeration"
            : "Problem Solving";

        const topicFocus =
          chosenTopics.length === 1
            ? chosenTopics[0].title
            : chosenTopics.length <= 3
            ? chosenTopics.map((t) => t.title).join(" & ")
            : `${catLabel} Comprehensive`;

        setNewQuizTitle(`${topicFocus} - ${typeLabel} Quiz`);
        setGeneratorStep(2); // Advance to Review & Publish step
      } catch (err) {
        console.error("Failed to generate quiz:", err);
        alert("Error generating quiz questions. Please try again.");
      } finally {
        setIsGeneratingQuiz(false);
        setIsShowingGenerateLoader(false);
      }
    }, 2000);
  };

  // Regenerate a single question draft
  const handleRegenerateQuestion = (index: number) => {
    const currentQ = newQuizQuestionDrafts[index];
    if (!currentQ) return;

    const topicsInCat = allCombinedTopics.filter(
      (t) => t.category === generatorCategory
    );
    const chosenTopics =
      selectedTopicIds.length > 0
        ? topicsInCat.filter((t) => selectedTopicIds.includes(t.id))
        : topicsInCat;

    const qInput: GeneratedQuestion = {
      id: currentQ.id,
      prompt: currentQ.prompt,
      questionType: currentQ.questionType || generatorQuestionType,
      optionA: currentQ.optionA,
      optionB: currentQ.optionB,
      optionC: currentQ.optionC,
      optionD: currentQ.optionD,
      correct: currentQ.correct,
      correctAnswerText: currentQ.correctAnswerText || currentQ.optionA,
      explanation: currentQ.explanation || "",
      topicTitle: currentQ.topicTitle || "",
    };

    const newQ = regenerateSingleQuestion(
      qInput,
      chosenTopics,
      generatorCategory,
      currentQ.questionType || generatorQuestionType
    );

    setNewQuizQuestionDrafts((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? {
              id: `${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
              prompt: newQ.prompt,
              questionType: newQ.questionType,
              optionA: newQ.optionA,
              optionB: newQ.optionB,
              optionC: newQ.optionC,
              optionD: newQ.optionD,
              correct: newQ.correct,
              correctAnswerText: newQ.correctAnswerText,
              explanation: newQ.explanation,
              topicTitle: newQ.topicTitle,
            }
          : item
      )
    );
  };

  const handleRegenerateAllQuestions = () => {
    handleGenerateQuiz();
  };

  const handleQuestionCountChange = (raw: string) => {
    const parsed = parseInt(raw, 10);
    const count = Number.isFinite(parsed) ? Math.max(1, parsed) : 1;
    setNewQuizQuestions(String(count));
    setGeneratorItemCount(count);
    setNewQuizQuestionDrafts((prev) => {
      if (count === prev.length) return prev;
      if (count > prev.length) {
        return [
          ...prev,
          ...createEmptyQuestions(count - prev.length, generatorQuestionType),
        ];
      }
      return prev.slice(0, count);
    });
  };

  const updateQuestionDraft = (
    id: string,
    field: keyof Omit<QuizQuestionDraft, "id">,
    value: string
  ) => {
    setNewQuizQuestionDrafts((prev) =>
      prev.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  const handleCreateQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuizTitle.trim()) {
      alert("Please provide a quiz title.");
      return;
    }

    const validDrafts = newQuizQuestionDrafts.filter(
      (q) => q.prompt.trim() !== ""
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
              points_per_item: typeof generatorPointsPerItem === "number" && generatorPointsPerItem > 0 ? generatorPointsPerItem : 1,
            },
          ])
          .select("id")
          .single();

        if (quizError || !quizData) {
          throw quizError || new Error("Failed to insert quiz into database");
        }

        // 2. Insert Questions with multi-type support
        const questionsToInsert = validDrafts.map((q, index) => {
          const isMC =
            (q.questionType || "multiple_choice") === "multiple_choice";
          const ansText =
            q.correctAnswerText?.trim() || q.optionA.trim() || "Answer";
          return {
            quiz_id: quizData.id,
            question_index: index + 1,
            prompt: q.prompt.trim(),
            option_a: isMC ? q.optionA.trim() || "Choice A" : ansText,
            option_b: isMC
              ? q.optionB.trim() || "Choice B"
              : q.explanation?.trim() || q.optionB.trim() || "",
            option_c: isMC
              ? q.optionC.trim() || "Choice C"
              : q.questionType || "multiple_choice",
            option_d: isMC ? q.optionD.trim() || "Choice D" : q.optionD || "",
            correct_answer: q.correct || "A",
          };
        });

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
          pointsPerItem: typeof generatorPointsPerItem === "number" && generatorPointsPerItem > 0 ? generatorPointsPerItem : 1,
          questions: validDrafts,
          attempts: 0,
          averageScore: 0,
          createdAt: "Just now",
          questionType: generatorQuestionType,
        };
        setQuizzes((prev) => [newQuiz, ...prev]);
      }

      // Reset form & state
      setNewQuizTitle("");
      setGeneratorStep(1);
      setNewQuizQuestions("5");
      setNewQuizQuestionDrafts(createEmptyQuestions(5));
      setShowPublishedSuccess(true);
      setTimeout(() => setShowPublishedSuccess(false), 2500);
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

  // History Archiving & Deletion State & Handlers
  const [historyTab, setHistoryTab] = useState<"active" | "archived">("active");
  const [archivedSearchQuery, setArchivedSearchQuery] = useState("");
  const [archivedActivityIds, setArchivedActivityIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("admin_archived_history_ids");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleArchiveActivity = (id: string) => {
    if (
      !window.confirm(
        "Are you sure you want to archive this submission? It will be moved from Active History and organized under Archived by Month & Year."
      )
    ) {
      return;
    }
    setArchivedActivityIds((prev) => {
      const updated = prev.includes(id) ? prev : [...prev, id];
      try {
        localStorage.setItem("admin_archived_history_ids", JSON.stringify(updated));
      } catch (err) {
        console.error("LocalStorage save error:", err);
      }
      return updated;
    });
  };

  const handleRestoreActivity = (id: string) => {
    if (
      !window.confirm(
        "Restore this submission back to the Active History list?"
      )
    ) {
      return;
    }
    setArchivedActivityIds((prev) => {
      const updated = prev.filter((item) => item !== id);
      try {
        localStorage.setItem("admin_archived_history_ids", JSON.stringify(updated));
      } catch (err) {
        console.error("LocalStorage save error:", err);
      }
      return updated;
    });
  };

  const handleDeleteActivity = async (id: string) => {
    if (
      !window.confirm(
        "Are you sure you want to permanently delete this submission record? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      if (supabase) {
        const { error } = await supabase.from("quiz_attempts").delete().eq("id", id);
        if (error) console.warn("Supabase attempt delete note:", error.message);
      }
    } catch (err) {
      console.error("Error deleting attempt:", err);
    }

    setActivities((prev) => prev.filter((a) => a.id !== id));
    setStudentSubmissions((prev) => prev.filter((s) => s.id !== id));
    setArchivedActivityIds((prev) => {
      const updated = prev.filter((item) => item !== id);
      try {
        localStorage.setItem("admin_archived_history_ids", JSON.stringify(updated));
      } catch (err) {
        console.error("LocalStorage save error:", err);
      }
      return updated;
    });
  };

  const getMonthYearLabel = (rawDateStr?: string, fallbackFormatted?: string) => {
    if (rawDateStr) {
      const d = new Date(rawDateStr);
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
      }
    }
    if (fallbackFormatted) {
      const d = new Date(fallbackFormatted);
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
      }
    }
    return "Earlier Submissions";
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

  // Chart data points matching reference image
  const chartLabels = [
    "Aug 1",
    "Aug 8",
    "Aug 15",
    "Aug 22",
    "Aug 29",
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#8B1526] to-[#5A0A15] flex items-center justify-center shadow-md shadow-[#801424]/30 border border-white/20 shrink-0">
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
                  ? "bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] text-white shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
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
                  ? "bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] text-white shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
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
                  ? "bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] text-white shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
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
                  ? "bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] text-white shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
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
                  ? "bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] text-white shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
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
                  ? "bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] text-white shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
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
                  ? "bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] text-white shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                  : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span>View Students</span>
            </button>
          </nav>
        </div>

        {/* Bottom Sidebar: Admin Logo */}
        <div className="mt-4 flex items-center justify-center">
          <img
            src={adminLogo}
            alt="Admin Panel"
            className="w-full max-w-[220px] object-contain select-none pointer-events-none"
            draggable={false}
          />
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
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#8B1526] to-[#5A0A15] flex items-center justify-center shadow-md shadow-[#801424]/30 border border-white/20 shrink-0">
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
                    className="p-1 rounded-lg hover:bg-gray-100 text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1 mt-1">
                  <button
                    onClick={() => handleNavClick("dashboard")}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                      activeNav === "dashboard"
                        ? "bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] text-white shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
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
                        ? "bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] text-white shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
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
                        ? "bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] text-white shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
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

              <div className="mt-4 flex items-center justify-center">
                <img
                  src={adminLogo}
                  alt="Admin Panel"
                  className="w-full max-w-[220px] object-contain select-none pointer-events-none"
                  draggable={false}
                />
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
          {/* Floating Realtime Submission Alert Toast */}
          <AnimatePresence>
            {recentSubmissionToast && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => {
                  setRecentSubmissionToast(null);
                  handleNavClick("history-quizzes");
                }}
                className="fixed top-5 right-6 z-[120] bg-white border border-[#801424]/20 rounded-2xl shadow-xl p-4 flex items-center gap-3.5 max-w-sm cursor-pointer hover:shadow-2xl transition"
              >
                <div className="w-10 h-10 rounded-xl bg-[#801424] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs animate-bounce">
                  <Bell className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-[#801424] uppercase tracking-wide">
                      New Quiz Submission!
                    </span>
                    <span className="text-[10px] text-gray-400">Just now</span>
                  </div>
                  <p className="text-xs font-bold text-gray-900 truncate">
                    {recentSubmissionToast.studentName}
                  </p>
                  <p className="text-[11px] text-gray-500 truncate">
                    {recentSubmissionToast.quizTitle} • Score:{" "}
                    <span className="font-bold text-[#801424]">
                      {recentSubmissionToast.score}/{recentSubmissionToast.totalQuestions}
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRecentSubmissionToast(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA1B0] pointer-events-none" />
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

          {/* Right Header Controls (Notifications & Admin Profile) */}
          <div className="flex items-center gap-3">
            {/* Notification Bell Button & Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsAdminDropdownOpen(false);
                }}
                className="relative p-2.5 rounded-xl text-gray-600 hover:text-[#801424] hover:bg-gray-100/80 transition cursor-pointer border border-gray-200 shadow-2xs"
                title="Student Submission Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadActivities.length > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#801424] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                    {unreadActivities.length > 9 ? "9+" : unreadActivities.length}
                  </span>
                )}
              </button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-80 sm:w-96 bg-white border border-[#EAEBED] rounded-2xl shadow-xl z-40 overflow-hidden"
                  >
                    <div className="p-3.5 border-b border-gray-100 flex items-center justify-between bg-[#FAFBFD]">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-red-50 text-[#801424] flex items-center justify-center">
                          <Bell className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-gray-900">
                          Student Submissions
                        </span>
                        {unreadActivities.length > 0 && (
                          <span className="px-2 py-0.5 bg-red-100 text-[#801424] text-[10px] font-extrabold rounded-full">
                            {unreadActivities.length} new
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2.5">
                        {unreadActivities.length > 0 && (
                          <button
                            type="button"
                            onClick={markAllAdminNotificationsAsRead}
                            className="text-[11px] font-bold text-[#801424] hover:underline cursor-pointer"
                          >
                            Mark all read
                          </button>
                        )}
                        {activeAdminNotifications.length > 0 && (
                          <button
                            type="button"
                            onClick={handleDeleteAllAdminNotifications}
                            className="text-[11px] font-semibold text-gray-400 hover:text-red-600 transition cursor-pointer"
                            title="Clear all notifications"
                          >
                            Clear all
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
                      {activeAdminNotifications.length === 0 ? (
                        <div className="p-8 text-center text-gray-400 text-xs">
                          No notifications right now.
                        </div>
                      ) : (
                        activeAdminNotifications.slice(0, 15).map((act) => {
                          const isUnread = !readNotificationIds.includes(act.id);
                          return (
                            <div
                              key={act.id}
                              onClick={() => handleAdminNotificationClick(act.id)}
                              className={`group/notif relative w-full text-left p-3.5 hover:bg-gray-50 transition cursor-pointer flex items-start gap-3 ${
                                isUnread ? "bg-[#FFF8F8]" : "bg-white"
                              }`}
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#801424] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-2xs">
                                {act.studentName.charAt(0).toUpperCase()}
                              </div>
                              <div className="flex-1 min-w-0 pr-6">
                                <div className="flex items-center justify-between gap-1">
                                  <p className="text-xs font-bold text-gray-900 truncate">
                                    {act.studentName}
                                  </p>
                                  {isUnread && (
                                    <span className="w-2 h-2 rounded-full bg-[#801424] shrink-0" />
                                  )}
                                </div>
                                <p className="text-[11px] text-gray-600 truncate mt-0.5">
                                  Submitted <span className="font-semibold text-gray-900">{act.quizTitle}</span>
                                </p>
                                <div className="flex items-center justify-between mt-1 text-[10px] text-gray-400">
                                  <span className="font-bold text-[#801424]">
                                    {act.score} / {act.totalQuestions} pts
                                  </span>
                                  <span>{act.submittedAt}</span>
                                </div>
                              </div>
                              {/* Individual Delete Button */}
                              <button
                                type="button"
                                onClick={(e) => handleDeleteAdminNotification(act.id, e)}
                                className="opacity-60 group-hover/notif:opacity-100 p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all shrink-0 cursor-pointer"
                                title="Delete notification"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          );
                        })
                      )}
                    </div>

                    {activities.length > 0 && (
                      <div className="p-2.5 bg-gray-50/70 border-t border-gray-100 text-center">
                        <button
                          type="button"
                          onClick={() => {
                            setIsNotificationsOpen(false);
                            handleNavClick("history-quizzes");
                          }}
                          className="text-xs font-bold text-[#801424] hover:underline cursor-pointer"
                        >
                          View All in History →
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Admin Profile Details */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsAdminDropdownOpen(!isAdminDropdownOpen);
                  setIsNotificationsOpen(false);
                }}
                className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-white/80 transition-colors cursor-pointer"
              >
                <div className="hidden sm:flex flex-col text-right leading-tight">
                  <span className="text-sm font-bold text-[#1F242D]">
                    {user?.name || "User"}
                  </span>
                  <span className="text-[0.72rem] font-medium text-[#8C93A0]">
                    Administrator
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#8B1526] to-[#5A0A15] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#801424]/25 border border-white/20">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
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
                        {user?.name || "User"}
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
            <section className="relative overflow-hidden bg-white border border-[#E8ECF2] rounded-[26px] p-7 sm:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.03)] min-h-[190px] flex items-center">
              {/* 3D Sigma Graphic on the Right Background */}
              <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] lg:w-[55%] pointer-events-none select-none flex items-center justify-end">
                <img
                  src={studentLogoSigma}
                  alt="3D Math Illustration"
                  className="w-full h-full object-contain object-right opacity-95 drop-shadow-md"
                />
              </div>

              {/* Left Welcome Copy */}
              <div className="relative z-10 max-w-xl flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-[#6B7280] mb-1">
                  Welcome back,
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-[#111827] tracking-tight leading-none mb-3 flex items-center gap-2.5">
                  <span className="text-[#801424]">{user?.name || "User"}</span>
                  <span className="inline-block animate-wave text-3xl">
                    👋
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-[#6B7280] font-normal leading-relaxed max-w-md">
                  Manage quizzes, track performance, and help students learn math better.
                </p>
              </div>
            </section>

            {/* 4. FOUR STATS METRIC CARDS ROW */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* Card 1: Total Quizzes */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DFE3E8] transition-all duration-200 flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5A0A15] shrink-0 shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#801424]/10 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-white stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Total Quizzes
                  </span>
                  <span className="text-2xl sm:text-[1.75rem] font-black text-[#111827] tracking-tight leading-tight mt-0.5">
                    {totalQuizzes}
                  </span>
                  <span className="text-[11px] text-[#9CA3AF] font-medium mt-0.5">
                    — 0% this month
                  </span>
                </div>
              </div>

              {/* Card 2: Total Students */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DFE3E8] transition-all duration-200 flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5A0A15] shrink-0 shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#801424]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Total Students
                  </span>
                  <span className="text-2xl sm:text-[1.75rem] font-black text-[#111827] tracking-tight leading-tight mt-0.5">
                    {totalStudents}
                  </span>
                  <span className="text-[11px] text-[#9CA3AF] font-medium mt-0.5">
                    — 0% this month
                  </span>
                </div>
              </div>

              {/* Card 3: Total Attempts */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DFE3E8] transition-all duration-200 flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5A0A15] shrink-0 shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#801424]/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Total Attempts
                  </span>
                  <span className="text-2xl sm:text-[1.75rem] font-black text-[#111827] tracking-tight leading-tight mt-0.5">
                    {totalAttempts}
                  </span>
                  <span className="text-[11px] text-[#9CA3AF] font-medium mt-0.5">
                    — 0% this month
                  </span>
                </div>
              </div>

              {/* Card 4: Average Score */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DFE3E8] transition-all duration-200 flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5A0A15] shrink-0 shadow-[0_8px_20px_rgba(128,20,36,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#801424]/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Average Score
                  </span>
                  <span className="text-2xl sm:text-[1.75rem] font-black text-[#111827] tracking-tight leading-tight mt-0.5">
                    {averageScore} pts
                  </span>
                  <span className="text-[11px] text-[#9CA3AF] font-medium mt-0.5">
                    — 0% this month
                  </span>
                </div>
              </div>
            </section>

            {/* 5. MIDDLE ROW: QUIZ OVERVIEW & RECENT QUIZ ACTIVITY */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Card: Quiz Overview (Chart) */}
              <div className="lg:col-span-7 bg-white border border-[#ECEFF3] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#801424]" />
                    <h3 className="text-base font-bold text-[#111827]">
                      Quiz Overview
                    </h3>
                  </div>

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
                  </svg>

                  {/* X-Axis Date Labels */}
                  <div className="flex justify-between pl-10 pr-4 mt-2 text-[11px] font-medium text-[#9CA3AF]">
                    {chartLabels.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Card: Recent Quiz Activity */}
              <div className="lg:col-span-5 bg-white border border-[#ECEFF3] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#801424]" />
                    <h3 className="text-base font-bold text-[#111827]">
                      Recent Quiz Activity
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNavClick("quiz-results")}
                    className="text-xs font-bold text-[#801424] hover:underline cursor-pointer"
                  >
                    View All
                  </button>
                </div>

                {/* Activity List / Empty State */}
                <div className="flex-1 flex flex-col justify-center py-2">
                  {activities.length === 0 ? (
                    <div className="flex flex-col items-center py-8 text-center">
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
                          className="flex items-center justify-between p-3.5 bg-[#F9FAFB] rounded-2xl border border-gray-100 hover:bg-gray-50 transition"
                        >
                          <div className="flex flex-col text-left">
                            <span className="text-sm font-bold text-[#111827]">
                              {act.studentName}
                            </span>
                            <span className="text-xs text-[#6B7280]">
                              {act.quizTitle}
                            </span>
                          </div>
                          <div className="flex flex-col text-right">
                            <span className="text-sm font-bold text-[#801424]">
                              {act.score}/{act.totalQuestions}
                            </span>
                            <span className="text-[11px] text-[#9CA3AF]">
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
                            {quiz.averageScore} pts
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
                      {students.slice(0, 5).map((st) => {
                        const isStudentOnline =
                          onlineStudentKeys.has(st.id.toLowerCase()) ||
                          onlineStudentKeys.has(st.email.toLowerCase());

                        return (
                          <div
                            key={st.id}
                            className="grid grid-cols-4 text-xs py-3 items-center text-left hover:bg-[#F9FAFB] rounded-lg px-1 transition"
                          >
                            <div className="col-span-1 min-w-0 pr-2">
                              <div className="flex items-center gap-1.5">
                                <p className="font-bold text-[#111827] truncate">
                                  {st.name}
                                </p>
                                {isStudentOnline && (
                                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Online
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-[#9CA3AF] truncate">
                                {st.email}
                              </p>
                            </div>
                          <div className="col-span-1 text-center font-medium text-[#4B5563]">
                            {st.quizzesTaken}
                          </div>
                          <div className="col-span-1 text-center font-bold text-[#801424]">
                            {st.averageScore} pts
                          </div>
                          <div className="col-span-1 text-right text-[11px] text-[#6B7280]">
                            {st.lastActive}
                          </div>
                        </div>
                        );
                      })}
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
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA1B0] pointer-events-none" />
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
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA1B0] pointer-events-none" />
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

                    {/* Top Aligned Interactive Calculator Button with Hover Tooltip */}
                    {(() => {
                      const calcDef = getCalculusDefinitionForTopic(activeTopic);
                      return (
                        <div className="relative group/topcalc flex items-center">
                          <button
                            type="button"
                            onClick={() => setIsTopicCalculatorOpen(true)}
                            className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#801424] hover:bg-[#68101D] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 group/btn"
                            aria-label={calcDef.name}
                          >
                            <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center shrink-0 group-hover/btn:rotate-12 transition-transform">
                              <Calculator className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="hidden sm:inline-block max-w-0 group-hover/topcalc:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300 ease-out opacity-0 group-hover/topcalc:opacity-100 text-white font-semibold pr-1">
                              {calcDef.name}
                            </span>
                            <span className="sm:hidden font-semibold">Calculator</span>
                          </button>

                          {/* Hover Tooltip Popup for Desktop */}
                          <div className="absolute right-0 top-full mt-2 hidden sm:group-hover/topcalc:flex flex-col items-end z-50 pointer-events-none animate-in fade-in slide-in-from-top-1 duration-150">
                            <div className="bg-[#111827] text-white text-[11px] font-medium py-1.5 px-3 rounded-lg shadow-lg border border-white/10 whitespace-nowrap flex items-center gap-1.5">
                              <Sparkles className="w-3 h-3 text-[#FF7A8A]" />
                              <span>Launch <strong>{calcDef.name}</strong></span>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
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
                      {activeTopic.examples && activeTopic.examples.length > 0 && (
                        <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs">
                          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F3F4F6]">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#801424] flex items-center justify-center">
                                <HelpCircle className="w-4 h-4" />
                              </div>
                              <h3 className="text-base font-bold text-[#111827]">
                                Step-by-Step Worked Problems ({activeTopic.examples.length})
                              </h3>
                            </div>
                            <span className="text-xs text-[#6B7280]">
                              Click &ldquo;Try to Solve&rdquo; to open solver
                            </span>
                          </div>

                          <div className="space-y-4">
                            {activeTopic.examples.map((ex, i) => {
                              const rawExText = typeof ex === "string" ? ex : (ex as any).question || JSON.stringify(ex);
                              return (
                                <div
                                  key={i}
                                  className="p-4.5 bg-[#F9FAFB] border border-[#F0F1F3] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                                >
                                  <div className="flex items-start gap-2.5">
                                    <span className="px-2 py-0.5 text-[0.7rem] font-bold text-[#801424] bg-white border border-red-200 rounded-md shrink-0 mt-0.5">
                                      Problem {i + 1}
                                    </span>
                                    <p className="text-xs sm:text-sm font-semibold text-[#111827] leading-relaxed">
                                      {rawExText}
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        navigator.clipboard.writeText(rawExText);
                                        setTopicCopiedIdx(i);
                                        setTimeout(() => setTopicCopiedIdx(null), 2000);
                                      }}
                                      className="px-2.5 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-xs text-gray-600 font-semibold transition cursor-pointer flex items-center gap-1"
                                      title="Copy text"
                                    >
                                      {topicCopiedIdx === i ? (
                                        <>
                                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                                          <span className="text-emerald-600 text-[11px]">Copied</span>
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="w-3.5 h-3.5" />
                                          <span className="text-[11px]">Copy</span>
                                        </>
                                      )}
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => {
                                        navigator.clipboard.writeText(rawExText);
                                        setLoadedTopicExample({ text: rawExText, index: i });
                                        setTopicCalcKey((prev) => prev + 1);
                                        setIsTopicCalculatorOpen(true);
                                      }}
                                      className="px-3.5 py-1.5 rounded-lg bg-[#801424] hover:bg-[#68101D] text-white text-xs font-bold shadow-xs transition flex items-center gap-1.5 cursor-pointer active:scale-95"
                                    >
                                      <Play className="w-3 h-3 fill-current" />
                                      <span>Try to Solve</span>
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Slide-out Calculator Drawer from Right */}
                    <AnimatePresence>
                      {isTopicCalculatorOpen && activeTopic && (() => {
                        const calcDef = getCalculusDefinitionForTopic(activeTopic);
                        return (
                          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
                            {/* Backdrop */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={() => setIsTopicCalculatorOpen(false)}
                              className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
                            />

                            {/* Slide-in Drawer */}
                            <motion.div
                              initial={{ x: "100%" }}
                              animate={{ x: 0 }}
                              exit={{ x: "100%" }}
                              transition={{ type: "spring", damping: 28, stiffness: 280 }}
                              className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl bg-[#F8F9FA] h-full shadow-2xl z-10 flex flex-col overflow-hidden border-l border-[#EAEBED]"
                            >
                              {/* Drawer Header */}
                              <div className="bg-white border-b border-[#EAEBED] px-6 py-4 flex items-center justify-between shadow-xs shrink-0">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-xl bg-[#801424] text-white flex items-center justify-center shadow-xs">
                                    <Calculator className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h3 className="text-base sm:text-lg font-black text-[#111827]">
                                        {calcDef.name}
                                      </h3>
                                      <span className="text-xs font-bold text-[#801424] bg-white border border-[#F8D7DA] px-2.5 py-0.5 rounded-lg">
                                        {calcDef.badge}
                                      </span>
                                    </div>
                                    <p className="text-xs text-[#6B7280]">
                                      {activeTopic.title} • {activeTopic.chapter}
                                    </p>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => setIsTopicCalculatorOpen(false)}
                                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                                >
                                  <X className="w-4 h-4" />
                                  <span className="hidden sm:inline">Close</span>
                                </button>
                              </div>

                              {/* Loaded Problem Notification Banner */}
                              {loadedTopicExample && (
                                <div className="bg-[#FFF0F2] border-b border-[#F8D7DA] px-6 py-3 flex items-center justify-between text-xs text-[#801424] shrink-0">
                                  <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-[#801424] shrink-0" />
                                    <span>
                                      <strong>Loaded Problem #{loadedTopicExample.index + 1}:</strong> &ldquo;{loadedTopicExample.text}&rdquo;
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => setLoadedTopicExample(null)}
                                    className="p-1 hover:bg-[#F8D7DA] rounded-md transition text-[#801424] cursor-pointer"
                                    title="Clear problem"
                                  >
                                    <X className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              )}

                              {/* Scrollable Calculator Body */}
                              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                                <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-xs">
                                  <CalculusCalculator
                                    key={`${calcDef.id}-${topicCalcKey}`}
                                    definition={
                                      loadedTopicExample
                                        ? { ...calcDef, example: loadedTopicExample.text }
                                        : calcDef
                                    }
                                  />
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        );
                      })()}
                    </AnimatePresence>

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
        {/* VIEW D: ADD QUIZ - SMART QUIZ GENERATOR & PUBLISHER (Admin Suite)        */}
        {/* ========================================================================= */}
        {activeNav === "add-quiz" && (
          <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
            {/* Top Banner */}
            <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#9C1D2E] via-[#801424] to-[#5C0A15] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#801424]/25 border border-white/20">
                    <Wand2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#801424] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md">
                        Admin Quiz Generator
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        1 Attempt Only • Admin Answer Key
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                      Generate & Publish Quiz
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B7280] mt-1 max-w-2xl leading-relaxed">
                      Choose from Linear Algebra, Calculus 1, or Calculus 2 topics. Select the question type (Multiple Choice, Identification, Enumeration, or Problem Solving), preview with the answer key, and publish live to students.
                    </p>
                  </div>
                </div>

              </div>

              {/* Step Navigation Bar & Published Quizzes Button */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setGeneratorStep(1)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                      generatorStep === 1
                        ? "bg-[#801424] text-white shadow-xs"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                      1
                    </span>
                    <span>1. Choose Topics & Format</span>
                  </button>

                  <div className="w-6 h-0.5 bg-gray-200 hidden sm:block" />

                  <button
                    type="button"
                    disabled={newQuizQuestionDrafts.length === 0}
                    onClick={() => setGeneratorStep(2)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                      generatorStep === 2
                        ? "bg-[#801424] text-white shadow-xs"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                      2
                    </span>
                    <span>2. Review Answers & Publish</span>
                    {newQuizQuestionDrafts.length > 0 && (
                      <span className="ml-1 px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
                        {newQuizQuestionDrafts.length}
                      </span>
                    )}
                  </button>
                </div>

                {/* Published Quizzes Button: shows count and reveals 'Published Quizzes' on hover, opens slide drawer from right */}
                <div className="relative group">
                  <button
                    type="button"
                    onClick={() => setIsPublishedQuizzesDrawerOpen(true)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:border-[#801424] bg-white hover:bg-[#FCE8EB]/40 text-gray-700 hover:text-[#801424] text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs"
                    title="Published Quizzes"
                  >
                    <ClipboardList className="w-4 h-4 text-[#801424] shrink-0" />
                    <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap">
                      Published Quizzes
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-[#801424] text-white shadow-xs shrink-0">
                      {quizzes.length}
                    </span>
                  </button>
                  <div className="absolute -bottom-8 right-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md whitespace-nowrap z-30">
                    Published Quizzes ({quizzes.length})
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              {/* ================================================================= */}
              {/* STEP 1: CATEGORY, TOPICS, AND SETTINGS                           */}
              {/* ================================================================= */}
              {generatorStep === 1 && (
                <div className="space-y-6">
                  {/* Category Selection Cards */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-[#111827]">
                          Step 1: Select Math Category
                        </h3>
                        <p className="text-xs text-[#6B7280] mt-0.5">
                          Pick the primary course domain to load all associated curriculum topics.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                      {/* Card 1: Linear Algebra */}
                      <button
                        type="button"
                        onClick={() => {
                          setGeneratorCategory("linear-algebra");
                          setSelectedTopicIds([]);
                        }}
                        className={`p-4.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                          generatorCategory === "linear-algebra"
                            ? "border-[#801424] bg-[#FCE8EB]/30 ring-2 ring-[#801424] shadow-xs"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/70 bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-[#801424]/10 text-[#801424] flex items-center justify-center">
                            <Layers className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            28 Topics
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#111827]">
                          Linear Algebra
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                          Matrices, determinants, eigenvalues, vector spaces, and transformations.
                        </p>
                      </button>

                      {/* Card 2: Calculus 1 */}
                      <button
                        type="button"
                        onClick={() => {
                          setGeneratorCategory("calculus-1");
                          setSelectedTopicIds([]);
                        }}
                        className={`p-4.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                          generatorCategory === "calculus-1"
                            ? "border-[#801424] bg-[#FCE8EB]/30 ring-2 ring-[#801424] shadow-xs"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/70 bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-[#801424]/10 text-[#801424] flex items-center justify-center">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            30+ Topics
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#111827]">
                          Calculus 1
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                          Limits, continuity, derivatives, optimization, and definite integrals.
                        </p>
                      </button>

                      {/* Card 3: Calculus 2 */}
                      <button
                        type="button"
                        onClick={() => {
                          setGeneratorCategory("calculus-2");
                          setSelectedTopicIds([]);
                        }}
                        className={`p-4.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                          generatorCategory === "calculus-2"
                            ? "border-[#801424] bg-[#FCE8EB]/30 ring-2 ring-[#801424] shadow-xs"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/70 bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-[#801424]/10 text-[#801424] flex items-center justify-center">
                            <Zap className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            30+ Topics
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#111827]">
                          Calculus 2
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                          Integration techniques, polar coordinates, conics, and infinite series.
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Topic Selection Grid */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base font-bold text-[#111827]">
                          Step 2: Choose Topics
                        </h3>
                        <p className="text-xs text-[#6B7280] mt-0.5">
                          Select one, several, or all topics to include in this quiz generation.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleSelectAllTopics}
                          className="px-2.5 py-1 text-xs font-bold text-[#801424] hover:bg-red-50 rounded-lg transition cursor-pointer"
                        >
                          Select All ({availableGeneratorTopics.length})
                        </button>
                        <span className="text-gray-300">•</span>
                        <button
                          type="button"
                          onClick={handleDeselectAllTopics}
                          className="px-2.5 py-1 text-xs font-medium text-gray-500 hover:bg-gray-100 rounded-lg transition cursor-pointer"
                        >
                          Clear
                        </button>
                        <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-lg">
                          {selectedTopicIds.length} Selected
                        </span>
                      </div>
                    </div>

                    {/* Topic Search Input */}
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Search topics by keyword (e.g. matrices, chain rule, series)..."
                        value={generatorTopicSearch}
                        onChange={(e) => setGeneratorTopicSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#801424] focus:border-[#801424]"
                      />
                    </div>

                    {/* Topics Grid with Checkboxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                      {availableGeneratorTopics.map((topic) => {
                        const isChecked = selectedTopicIds.includes(topic.id);
                        return (
                          <div
                            key={topic.id}
                            onClick={() => handleToggleTopic(topic.id)}
                            className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                              isChecked
                                ? "border-[#801424] bg-[#FCE8EB]/30 ring-1 ring-[#801424]"
                                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 bg-white"
                            }`}
                          >
                            <div className="pt-0.5 text-[#801424]">
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4 text-[#801424]" />
                              ) : (
                                <Square className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-[10px] font-bold text-gray-400 block truncate">
                                {topic.chapter}
                              </span>
                              <h5 className="text-xs font-bold text-[#111827] truncate">
                                {topic.title}
                              </h5>
                              <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                                {topic.summary}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quiz Settings: Question Type and Count */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-5">
                    <div>
                      <h3 className="text-base font-bold text-[#111827]">
                        Step 3: Question Type & Settings
                      </h3>
                      <p className="text-xs text-[#6B7280] mt-0.5">
                        Select the question format and the number of questions to generate.
                      </p>
                    </div>

                    {/* Question Type 4-card selector */}
                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-2 uppercase tracking-wide">
                        Question Type
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {/* Option 1: Multiple Choice */}
                        <button
                          type="button"
                          onClick={() => setGeneratorQuestionType("multiple_choice")}
                          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                            generatorQuestionType === "multiple_choice"
                              ? "border-[#801424] bg-[#FCE8EB]/30 ring-2 ring-[#801424]"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#801424]/10 text-[#801424] flex items-center justify-center mb-2">
                            <FileQuestion className="w-4 h-4" />
                          </div>
                          <h5 className="text-xs font-bold text-[#111827]">
                            Multiple Choice
                          </h5>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                            4 choices A, B, C, D with 1 correct option.
                          </p>
                        </button>

                        {/* Option 2: Identification */}
                        <button
                          type="button"
                          onClick={() => setGeneratorQuestionType("identification")}
                          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                            generatorQuestionType === "identification"
                              ? "border-[#801424] bg-[#FCE8EB]/30 ring-2 ring-[#801424]"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#801424]/10 text-[#801424] flex items-center justify-center mb-2">
                            <Lightbulb className="w-4 h-4" />
                          </div>
                          <h5 className="text-xs font-bold text-[#111827]">
                            Identification
                          </h5>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                            Identify the exact mathematical term or formula.
                          </p>
                        </button>

                        {/* Option 3: Enumeration */}
                        <button
                          type="button"
                          onClick={() => setGeneratorQuestionType("enumeration")}
                          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                            generatorQuestionType === "enumeration"
                              ? "border-[#801424] bg-[#FCE8EB]/30 ring-2 ring-[#801424]"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#801424]/10 text-[#801424] flex items-center justify-center mb-2">
                            <ListOrdered className="w-4 h-4" />
                          </div>
                          <h5 className="text-xs font-bold text-[#111827]">
                            Enumeration
                          </h5>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                            List key properties, theorems, or steps.
                          </p>
                        </button>

                        {/* Option 4: Problem Solving */}
                        <button
                          type="button"
                          onClick={() => setGeneratorQuestionType("problem_solving")}
                          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                            generatorQuestionType === "problem_solving"
                              ? "border-[#801424] bg-[#FCE8EB]/30 ring-2 ring-[#801424]"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#801424]/10 text-[#801424] flex items-center justify-center mb-2">
                            <Calculator className="w-4 h-4" />
                          </div>
                          <h5 className="text-xs font-bold text-[#111827]">
                            Problem Solving
                          </h5>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                            Problem only and then solve with full steps.
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Number of Items Selector */}
                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-2 uppercase tracking-wide">
                        Number of Items (Questions)
                      </label>
                      <div className="flex flex-wrap items-center gap-3">
                        {[5, 10, 15, 20].map((cnt) => (
                          <button
                            key={cnt}
                            type="button"
                            onClick={() => setGeneratorItemCount(cnt)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                              generatorItemCount === cnt
                                ? "bg-[#801424] text-white shadow-xs"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                            }`}
                          >
                            {cnt} Items
                          </button>
                        ))}

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 font-medium">Custom:</span>
                          <input
                            type="text"
                            inputMode="numeric"
                            placeholder="e.g. 8"
                            value={generatorItemCount}
                            onChange={(e) => {
                              const val = e.target.value.replace(/[^0-9]/g, "");
                              if (val === "") {
                                setGeneratorItemCount("");
                              } else {
                                const parsed = parseInt(val, 10);
                                setGeneratorItemCount(Math.min(50, parsed));
                              }
                            }}
                            onBlur={() => {
                              if (generatorItemCount === "" || generatorItemCount < 1) {
                                setGeneratorItemCount(1);
                              }
                            }}
                            className="w-20 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-800 text-center focus:outline-none focus:ring-2 focus:ring-[#801424] focus:bg-white transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Points Per Item Selector */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide">
                          Points Per Item
                        </label>
                        <span className="text-xs font-semibold text-[#801424] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                          Total: {(typeof generatorItemCount === "number" ? generatorItemCount : 1) * (typeof generatorPointsPerItem === "number" ? generatorPointsPerItem : 1)} pts
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        {[1, 2, 5, 10].map((pts) => (
                          <button
                            key={pts}
                            type="button"
                            onClick={() => setGeneratorPointsPerItem(pts)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                              generatorPointsPerItem === pts
                                ? "bg-[#801424] text-white shadow-xs"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                            }`}
                          >
                            {pts} {pts === 1 ? "pt" : "pts"}
                          </button>
                        ))}

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 font-medium">Custom:</span>
                          <input
                            type="text"
                            inputMode="numeric"
                            placeholder="e.g. 3"
                            value={generatorPointsPerItem}
                            onChange={(e) => {
                              const val = e.target.value.replace(/[^0-9]/g, "");
                              if (val === "") {
                                setGeneratorPointsPerItem("");
                              } else {
                                const parsed = parseInt(val, 10);
                                setGeneratorPointsPerItem(Math.min(100, parsed));
                              }
                            }}
                            onBlur={() => {
                              if (generatorPointsPerItem === "" || generatorPointsPerItem < 1) {
                                setGeneratorPointsPerItem(1);
                              }
                            }}
                            className="w-20 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-800 text-center focus:outline-none focus:ring-2 focus:ring-[#801424] focus:bg-white transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* === Published Success Overlay === */}
                    <AnimatePresence>
                      {showPublishedSuccess && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white/85 backdrop-blur-md"
                        >
                          <div
                            ref={publishedGSAPRef}
                            className="flex flex-col items-center gap-4"
                          >
                            {/* Green Check Circle */}
                            <div className="gsap-publish-circle w-24 h-24 rounded-full bg-emerald-500/15 border-2 border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                                <CheckCircle2 className="gsap-publish-check w-10 h-10 text-white" />
                              </div>
                            </div>
                            <h3 className="gsap-publish-text text-emerald-700 text-2xl font-bold tracking-wide">
                              Published!
                            </h3>
                            <p className="gsap-publish-text text-emerald-600/80 text-sm text-center max-w-[240px]">
                              Quiz is now live for students.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* === Quiz Generation Loading Overlay === */}
                    <AnimatePresence>
                      {isShowingGenerateLoader && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white/85 backdrop-blur-md"
                        >
                          {/* Spinning ring */}
                          <div className="relative w-28 h-28 mb-6">
                            <div className="absolute inset-0 rounded-full border-4 border-[#801424]/10" />
                            <div className="absolute inset-0 rounded-full border-4 border-t-[#801424] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                            <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-[#9C1D2E]/60 border-b-transparent border-l-transparent animate-spin [animation-direction:reverse] [animation-duration:0.8s]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <img src={quizLoaderLogo} alt="Loading" className="w-14 h-14 object-contain animate-pulse" />
                            </div>
                          </div>
                          {/* Text */}
                          <h3 className="text-[#801424] text-xl font-bold tracking-wide mb-1">Generating Quiz</h3>
                          <p className="text-[#801424]/60 text-sm mb-6">Crafting your questions, please wait...</p>
                          {/* Animated dots bar */}
                          <div className="flex gap-2">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2.5 h-2.5 rounded-full bg-[#801424]"
                                animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Big Action: Generate Quiz Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        disabled={isGeneratingQuiz}
                        onClick={handleGenerateQuiz}
                        className="w-full py-3.5 bg-gradient-to-r from-[#9C1D2E] via-[#801424] to-[#5C0A15] hover:opacity-95 text-white rounded-2xl text-sm font-bold shadow-md shadow-[#801424]/20 transition flex items-center justify-center gap-2.5 cursor-pointer"
                      >
                        {isGeneratingQuiz ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Synthesizing Questions from Topics...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            <span>
                              Generate {generatorItemCount || 1}-Item Quiz with Answers
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-center text-gray-400 mt-2">
                        Questions will be generated with full answers displayed for admin verification.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ================================================================= */}
              {/* STEP 2: REVIEW QUESTIONS, ADMIN ANSWER KEY & PUBLISH             */}
              {/* ================================================================= */}
              {generatorStep === 2 && (
                <div className="space-y-6">
                  {/* Step 2 Header & Quiz Title */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#801424] bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                          {newQuizTopic} • {newQuizQuestionDrafts.length} Questions
                        </span>
                        <h3 className="text-lg font-extrabold text-[#111827] mt-1">
                          Review Generated Quiz & Answer Key
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setShowAdminAnswers(!showAdminAnswers)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                            showAdminAnswers
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {showAdminAnswers ? (
                            <>
                              <Eye className="w-3.5 h-3.5" />
                              <span>Answers Visible</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3.5 h-3.5" />
                              <span>Answers Hidden</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={handleRegenerateAllQuestions}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Regenerate All</span>
                        </button>
                      </div>
                    </div>

                    {/* Quiz Title Input */}
                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 uppercase tracking-wide">
                        Quiz Title (Students will see this)
                      </label>
                      <input
                        type="text"
                        required
                        value={newQuizTitle}
                        onChange={(e) => setNewQuizTitle(e.target.value)}
                        placeholder="e.g. Linear Algebra: Matrix Operations Quiz 1"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#801424] focus:border-[#801424]"
                      />
                    </div>

                    {/* Notice Banner */}
                    <div className="p-3.5 rounded-2xl bg-[#FFFBEB] border border-[#FEF3C7] flex items-start gap-3 text-xs text-[#92400E]">
                      <AlertCircle className="w-4 h-4 shrink-0 text-[#D97706] mt-0.5" />
                      <div>
                        <strong className="font-bold">Admin-Only View:</strong> The correct answers and solution explanations are displayed below for your review. When published, answers remain strictly hidden from students until they submit their quiz. Students are limited to strictly 1 attempt with no redo.
                      </div>
                    </div>
                  </div>

                  {/* List of Generated Questions */}
                  <div className="space-y-4">
                    {newQuizQuestionDrafts.map((question, index) => {
                      const qType = question.questionType || generatorQuestionType;
                      return (
                        <div
                          key={question.id}
                          className="bg-white border border-[#EAEBED] rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4"
                        >
                          {/* Question Card Header */}
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center rounded-lg bg-[#801424] text-white text-xs font-bold px-2.5 py-1">
                                Question {index + 1}
                              </span>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                                {qType.replace("_", " ")}
                              </span>
                              {question.topicTitle && (
                                <span className="text-[10px] text-gray-400 font-medium">
                                  Topic: {question.topicTitle}
                                </span>
                              )}
                            </div>

                            <button
                              type="button"
                              onClick={() => handleRegenerateQuestion(index)}
                              className="px-2.5 py-1 text-xs font-bold text-[#801424] hover:bg-red-50 rounded-lg transition flex items-center gap-1 cursor-pointer"
                              title="Regenerate this question"
                            >
                              <RefreshCw className="w-3 h-3" />
                              <span>Regenerate</span>
                            </button>
                          </div>

                          {/* Prompt Input */}
                          <div>
                            <label className="block text-xs font-bold text-[#374151] mb-1.5">
                              Question Prompt
                            </label>
                            <textarea
                              rows={2}
                              required
                              value={question.prompt}
                              onChange={(e) =>
                                updateQuestionDraft(
                                  question.id,
                                  "prompt",
                                  e.target.value
                                )
                              }
                              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#801424] focus:border-[#801424] resize-y font-medium"
                            />
                          </div>

                          {/* MULTIPLE CHOICE TYPE UI */}
                          {qType === "multiple_choice" && (
                            <div className="space-y-3 pt-1">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {(
                                  [
                                    ["optionA", "A"],
                                    ["optionB", "B"],
                                    ["optionC", "C"],
                                    ["optionD", "D"],
                                  ] as const
                                ).map(([field, letter]) => {
                                  const isCorrect = question.correct === letter;
                                  return (
                                    <div
                                      key={field}
                                      className={`p-3 rounded-2xl border transition ${
                                        showAdminAnswers && isCorrect
                                          ? "border-emerald-300 bg-emerald-50/40 ring-1 ring-emerald-400"
                                          : "border-gray-200 bg-white"
                                      }`}
                                    >
                                      <div className="flex items-center justify-between mb-1">
                                        <label className="text-[11px] font-bold text-gray-700">
                                          Choice {letter}
                                        </label>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            updateQuestionDraft(
                                              question.id,
                                              "correct",
                                              letter
                                            )
                                          }
                                          className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                                            isCorrect
                                              ? "bg-emerald-600 text-white"
                                              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                          }`}
                                        >
                                          {isCorrect ? "✓ Correct" : "Mark Correct"}
                                        </button>
                                      </div>
                                      <input
                                        type="text"
                                        required
                                        value={question[field]}
                                        onChange={(e) =>
                                          updateQuestionDraft(
                                            question.id,
                                            field,
                                            e.target.value
                                          )
                                        }
                                        className="w-full px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#801424]"
                                      />
                                    </div>
                                  );
                                })}
                              </div>

                              {showAdminAnswers && question.explanation && (
                                <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                                  <span className="font-bold">Answer Explanation: </span>
                                  <span>{question.explanation}</span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* IDENTIFICATION TYPE UI */}
                          {qType === "identification" && (
                            <div className="space-y-3 pt-1">
                              <div>
                                <label className="block text-xs font-bold text-[#374151] mb-1.5">
                                  Correct Answer / Identified Concept (Admin Answer Key)
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={question.correctAnswerText || question.optionA}
                                  onChange={(e) => {
                                    updateQuestionDraft(
                                      question.id,
                                      "correctAnswerText",
                                      e.target.value
                                    );
                                    updateQuestionDraft(
                                      question.id,
                                      "optionA",
                                      e.target.value
                                    );
                                  }}
                                  placeholder="e.g. Intermediate Value Theorem, or Determinant"
                                  className="w-full px-3.5 py-2.5 bg-emerald-50/40 border border-emerald-300 rounded-xl text-xs sm:text-sm font-bold text-emerald-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                              </div>

                              {showAdminAnswers && (
                                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700">
                                  <span className="font-bold">Context / Explanation: </span>
                                  <input
                                    type="text"
                                    value={question.explanation || question.optionB || ""}
                                    onChange={(e) =>
                                      updateQuestionDraft(
                                        question.id,
                                        "explanation",
                                        e.target.value
                                      )
                                    }
                                    placeholder="Explanation of this concept..."
                                    className="w-full mt-1 px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-800"
                                  />
                                </div>
                              )}
                            </div>
                          )}

                          {/* ENUMERATION TYPE UI */}
                          {qType === "enumeration" && (
                            <div className="space-y-3 pt-1">
                              <div>
                                <label className="block text-xs font-bold text-[#374151] mb-1.5">
                                  Items to Enumerate (Admin Answer Key)
                                </label>
                                <textarea
                                  rows={3}
                                  required
                                  value={question.correctAnswerText || question.optionA}
                                  onChange={(e) => {
                                    updateQuestionDraft(
                                      question.id,
                                      "correctAnswerText",
                                      e.target.value
                                    );
                                    updateQuestionDraft(
                                      question.id,
                                      "optionA",
                                      e.target.value
                                    );
                                  }}
                                  placeholder="1. First item&#10;2. Second item&#10;3. Third item..."
                                  className="w-full px-3.5 py-2.5 bg-emerald-50/40 border border-emerald-300 rounded-xl text-xs sm:text-sm font-semibold text-emerald-900 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-y"
                                />
                              </div>

                              {showAdminAnswers && question.explanation && (
                                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-600">
                                  <span className="font-bold">Evaluation Criteria: </span>
                                  <span>{question.explanation}</span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* PROBLEM SOLVING TYPE UI */}
                          {qType === "problem_solving" && (
                            <div className="space-y-3 pt-1">
                              <div>
                                <label className="block text-xs font-bold text-[#374151] mb-1.5">
                                  Final Solved Answer (Admin Answer Key)
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={question.correctAnswerText || question.optionA}
                                  onChange={(e) => {
                                    updateQuestionDraft(
                                      question.id,
                                      "correctAnswerText",
                                      e.target.value
                                    );
                                    updateQuestionDraft(
                                      question.id,
                                      "optionA",
                                      e.target.value
                                    );
                                  }}
                                  placeholder="e.g. 12, or 2 and 5, or x e^x - e^x + C"
                                  className="w-full px-3.5 py-2.5 bg-emerald-50/40 border border-emerald-300 rounded-xl text-xs sm:text-sm font-bold text-emerald-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-[#374151] mb-1.5">
                                  Step-by-Step Solution (Shown to students after submission)
                                </label>
                                <textarea
                                  rows={3}
                                  value={question.explanation || question.optionB || ""}
                                  onChange={(e) => {
                                    updateQuestionDraft(
                                      question.id,
                                      "explanation",
                                      e.target.value
                                    );
                                    updateQuestionDraft(
                                      question.id,
                                      "optionB",
                                      e.target.value
                                    );
                                  }}
                                  placeholder="Step 1...&#10;Step 2...&#10;Step 3..."
                                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#801424] resize-y"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Sticky Publish Bar */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-5 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky bottom-6 z-10">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setGeneratorStep(1)}
                        className="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 transition cursor-pointer flex items-center gap-1.5"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to Topics</span>
                      </button>

                      <div className="hidden sm:flex flex-col text-xs text-gray-500">
                        <span className="font-bold text-gray-800">
                          {newQuizQuestionDrafts.length} Questions Ready
                        </span>
                        <span>Strictly 1 attempt allowed per student</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={isSubmittingQuiz}
                        onClick={handleCreateQuiz}
                        className="px-6 py-2.5 bg-gradient-to-r from-[#9C1D2E] via-[#801424] to-[#5C0A15] hover:opacity-95 disabled:opacity-60 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-[#801424]/20 transition flex items-center gap-2 cursor-pointer"
                      >
                        {isSubmittingQuiz ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Publishing Live Quiz...</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Publish Quiz to Students</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Slide-out Published Quizzes Drawer from Right (Matching Screenshot Style) */}
            <AnimatePresence>
              {isPublishedQuizzesDrawerOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsPublishedQuizzesDrawerOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
                  />

                  {/* Slide-in Drawer */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 28, stiffness: 280 }}
                    className="relative w-full max-w-lg sm:max-w-xl bg-white h-full shadow-2xl z-10 flex flex-col overflow-hidden border-l border-[#EAEBED]"
                  >
                    {/* Drawer Header */}
                    <div className="bg-white border-b border-[#EAEBED] px-6 py-4 flex items-center justify-between shadow-xs shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#801424] text-white flex items-center justify-center shadow-xs">
                          <ClipboardList className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base sm:text-lg font-black text-[#111827]">
                              Published Quizzes
                            </h3>
                            <span className="text-xs font-bold text-[#801424] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-lg">
                              {quizzes.length}
                            </span>
                          </div>
                          <p className="text-xs text-[#6B7280]">
                            Live quizzes available to students • 1 attempt only
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsPublishedQuizzesDrawerOpen(false)}
                        className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                      >
                        <X className="w-4 h-4" />
                        <span>Close</span>
                      </button>
                    </div>

                    {/* Drawer Content */}
                    <div className="p-6 overflow-y-auto flex-1 space-y-3">
                      {isLoadingQuizzes ? (
                        <div className="py-16 flex flex-col items-center justify-center text-center">
                          <Loader2 className="w-8 h-8 animate-spin text-[#801424] mb-3" />
                          <p className="text-xs text-[#6B7280]">Loading quizzes...</p>
                        </div>
                      ) : quizzes.length === 0 ? (
                        <div className="py-16 text-center flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-3">
                            <ClipboardList className="w-7 h-7 stroke-[1.8]" />
                          </div>
                          <h4 className="text-sm font-bold text-[#111827]">
                            No quizzes published yet
                          </h4>
                          <p className="text-xs text-[#6B7280] mt-1 max-w-[240px]">
                            Generate a quiz using the form and publish it to show up here.
                          </p>
                        </div>
                      ) : (
                        quizzes.map((quiz) => (
                          <div
                            key={quiz.id}
                            className="rounded-2xl border border-[#EAEBED] bg-[#F9FAFB] hover:bg-white p-4 transition shadow-xs hover:border-[#D0D4DC] space-y-2.5"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm font-bold text-[#111827] truncate">
                                  {quiz.title}
                                </h4>
                                <div className="flex items-center gap-1.5 mt-1">
                                  <span className="text-[10px] font-bold text-[#801424] bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                                    {quiz.topic}
                                  </span>
                                  {quiz.questionType && (
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded">
                                      {quiz.questionType.replace("_", " ")}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setIsPublishedQuizzesDrawerOpen(false);
                                    setAdminReviewQuizModal(quiz);
                                  }}
                                  title="View questions and answer key"
                                  className="p-1.5 rounded-xl text-gray-600 hover:text-[#801424] hover:bg-red-50 border border-gray-200 transition cursor-pointer flex items-center gap-1 text-xs font-semibold"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>Answers</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteQuiz(quiz.id)}
                                  title="Delete Quiz"
                                  className="p-1.5 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 border border-gray-200 transition cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-200/60">
                              <span>
                                {quiz.questionsCount} question{quiz.questionsCount === 1 ? "" : "s"}
                              </span>
                              <span>
                                {quiz.attempts} student attempt{quiz.attempts === 1 ? "" : "s"}
                              </span>
                              <span>{quiz.createdAt}</span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Modal: Admin Answer Key Preview for Published Quizzes */}
            <AnimatePresence>
              {adminReviewQuizModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden"
                  >
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#801424] bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                          {adminReviewQuizModal.topic} • Admin Answer Key
                        </span>
                        <h3 className="text-lg font-extrabold text-[#111827] mt-1">
                          {adminReviewQuizModal.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setAdminReviewQuizModal(null)}
                        className="p-1.5 rounded-xl hover:bg-gray-100 text-gray-500 transition cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="p-6 overflow-y-auto space-y-4 flex-1">
                      {adminReviewQuizModal.questions.map((q, idx) => (
                        <div
                          key={q.id || idx}
                          className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 text-xs"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#801424]">
                              Item {idx + 1}
                            </span>
                            <span className="font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                              Correct: {q.correctAnswerText || q.correct}
                            </span>
                          </div>
                          <p className="font-semibold text-gray-800 text-sm">
                            {q.prompt}
                          </p>
                          {(q.questionType === "multiple_choice" || (!q.questionType && q.optionB)) && (
                            <div className="grid grid-cols-2 gap-1.5 text-gray-600 pt-1">
                              <span>A: {q.optionA}</span>
                              <span>B: {q.optionB}</span>
                              <span>C: {q.optionC}</span>
                              <span>D: {q.optionD}</span>
                            </div>
                          )}
                          {q.explanation && (
                            <p className="text-gray-500 text-[11px] pt-1 border-t border-gray-200">
                              <span className="font-bold">Explanation: </span>
                              {q.explanation}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setAdminReviewQuizModal(null)}
                        className="px-4 py-2 bg-[#801424] text-white rounded-xl text-xs font-bold hover:bg-[#6b101e] transition cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW E: QUIZ RESULTS & STUDENT SUBMISSIONS (Admin View)                   */}
        {/* ========================================================================= */}
        {activeNav === "quiz-results" && (
          <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
            {/* Header Banner */}
            <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#801424] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#801424]/20">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                      Quiz Results & Student Performance
                    </h2>
                    <p className="text-sm text-[#6B7280] mt-1">
                      View live student quiz submissions, individual student names, scores, and class performance analytics.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={fetchQuizzesAndStats}
                    className="px-3.5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                    title="Refresh submissions"
                  >
                    <RefreshCw
                      className={`w-3.5 h-3.5 ${
                        isLoadingQuizzes ? "animate-spin text-[#801424]" : ""
                      }`}
                    />
                    <span>Refresh</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("add-quiz")}
                    className="px-4 py-2.5 bg-[#801424] hover:bg-[#68101D] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create New Quiz</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FCE8EB] text-[#801424] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C93A0]">
                    Total Submissions
                  </p>
                  <p className="text-2xl font-extrabold text-[#111827]">
                    {resultsStats.totalSubmissions}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C93A0]">
                    Class Average
                  </p>
                  <p className="text-2xl font-extrabold text-[#111827]">
                    {resultsStats.avgScore}%
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C93A0]">
                    Passing Rate
                  </p>
                  <p className="text-2xl font-extrabold text-[#111827]">
                    {resultsStats.passRate}%
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-xs flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8C93A0]">
                    Published Quizzes
                  </p>
                  <p className="text-2xl font-extrabold text-[#111827]">
                    {quizzes.length}
                  </p>
                </div>
              </div>
            </div>

            {/* View Switcher & Controls */}
            <div className="bg-white border border-[#EAEBED] rounded-2xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setResultsViewMode("students")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    resultsViewMode === "students"
                      ? "bg-white text-[#801424] shadow-xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Student Results ({studentSubmissions.length})
                </button>
                <button
                  onClick={() => setResultsViewMode("quizzes")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    resultsViewMode === "quizzes"
                      ? "bg-white text-[#801424] shadow-xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Quizzes Summary ({quizzes.length})
                </button>
              </div>

              {resultsViewMode === "students" && (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search student name, email, or quiz..."
                      value={resultsSearchQuery}
                      onChange={(e) => setResultsSearchQuery(e.target.value)}
                      className="pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#801424] w-full sm:w-64"
                    />
                  </div>

                  <select
                    value={resultsTopicFilter}
                    onChange={(e) => setResultsTopicFilter(e.target.value)}
                    className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#801424] cursor-pointer"
                  >
                    <option value="all">All Topics</option>
                    <option value="Linear Algebra">Linear Algebra</option>
                    <option value="Calculus 1">Calculus 1</option>
                    <option value="Calculus 2">Calculus 2</option>
                  </select>
                </div>
              )}
            </div>

            {/* TAB 1: STUDENT RESULTS TABLE */}
            {resultsViewMode === "students" && (
              <>
                {filteredSubmissions.length === 0 ? (
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center shadow-xs">
                    <div className="w-14 h-14 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-3">
                      <GraduationCap className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h4 className="text-base font-bold text-[#111827]">
                      {studentSubmissions.length === 0
                        ? "No Student Quiz Results Recorded Yet"
                        : "No Matching Submissions Found"}
                    </h4>
                    <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
                      {studentSubmissions.length === 0
                        ? "When students take and submit a quiz, their names, scores, and submission details will appear here automatically."
                        : "Try clearing your search query or topic filter."}
                    </p>
                  </div>
                ) : (
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-[#EAEBED] text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
                            <th className="pb-3 px-3">Student Name</th>
                            <th className="pb-3 px-3">Quiz Title</th>
                            <th className="pb-3 px-3">Topic</th>
                            <th className="pb-3 px-3">Score</th>
                            <th className="pb-3 px-3">Percentage</th>
                            <th className="pb-3 px-3">Status</th>
                            <th className="pb-3 px-3">Time Spent</th>
                            <th className="pb-3 px-3">Submitted At</th>
                            <th className="pb-3 px-3 text-right">Details</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F3F4F6]">
                          {filteredSubmissions.map((sub) => (
                            <tr
                              key={sub.id}
                              className="hover:bg-[#F9FAFB] transition group"
                            >
                              <td className="py-3.5 px-3">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-full bg-[#801424] text-white flex items-center justify-center text-xs font-bold uppercase shrink-0">
                                    {sub.studentName.slice(0, 2)}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="font-bold text-[#111827] text-sm truncate">
                                      {sub.studentName}
                                    </p>
                                    <p className="text-[11px] text-[#6B7280] truncate">
                                      {sub.studentEmail || "No email"}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5 px-3 font-semibold text-[#111827] text-xs max-w-xs truncate">
                                {sub.quizTitle}
                              </td>
                              <td className="py-3.5 px-3 text-xs">
                                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-medium text-[11px]">
                                  {sub.topic}
                                </span>
                              </td>
                              <td className="py-3.5 px-3 font-bold text-xs text-[#111827]">
                                {sub.score} / {sub.totalQuestions}
                              </td>
                              <td className="py-3.5 px-3">
                                <span
                                  className={`text-xs font-extrabold px-2.5 py-0.5 rounded-md ${
                                    sub.percentage >= 75
                                      ? "bg-emerald-100 text-emerald-700"
                                      : sub.percentage >= 60
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-red-100 text-red-700"
                                  }`}
                                >
                                  {sub.percentage}%
                                </span>
                              </td>
                              <td className="py-3.5 px-3">
                                <span
                                  className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                                    sub.passed
                                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                      : "bg-red-50 text-red-700 border border-red-200"
                                  }`}
                                >
                                  {sub.passed ? "Passed" : "Needs Review"}
                                </span>
                              </td>
                              <td className="py-3.5 px-3 text-xs text-[#6B7280]">
                                {sub.timeSpentSeconds > 0
                                  ? `${Math.floor(sub.timeSpentSeconds / 60)}m ${
                                      sub.timeSpentSeconds % 60
                                    }s`
                                  : "—"}
                              </td>
                              <td className="py-3.5 px-3 text-xs text-[#6B7280]">
                                {sub.submittedAt}
                              </td>
                              <td className="py-3.5 px-3 text-right">
                                <button
                                  type="button"
                                  onClick={() => setSelectedSubmissionForReview(sub)}
                                  className="px-2.5 py-1.5 bg-gray-100 hover:bg-[#801424] hover:text-white text-gray-700 text-xs font-bold rounded-lg transition inline-flex items-center gap-1 cursor-pointer"
                                  title="Inspect student quiz responses"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>Review</span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* TAB 2: QUIZZES OVERVIEW TABLE */}
            {resultsViewMode === "quizzes" && (
              <>
                {quizzes.length === 0 ? (
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center shadow-xs">
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
                          <tr className="border-b border-[#EAEBED] text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
                            <th className="pb-3 px-3">Quiz Title</th>
                            <th className="pb-3 px-3">Topic</th>
                            <th className="pb-3 px-3">Questions</th>
                            <th className="pb-3 px-3">Students Completed</th>
                            <th className="pb-3 px-3">Class Avg. Score</th>
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
                                <span className="font-bold text-[#801424]">
                                  {quiz.attempts}
                                </span>{" "}
                                student{quiz.attempts === 1 ? "" : "s"}
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
                                  {quiz.attempts > 0 ? `${quiz.averageScore} pts` : "No submissions"}
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
              </>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW F: HISTORY QUIZZES (Admin View)                                       */}
        {/* ========================================================================= */}
        {activeNav === "history-quizzes" && (() => {
          const activeActivities = activities.filter(
            (a) => !archivedActivityIds.includes(a.id)
          );
          const archivedActivities = activities.filter((a) =>
            archivedActivityIds.includes(a.id)
          );
          const filteredArchivedActivities = archivedActivities.filter((act) => {
            if (!archivedSearchQuery.trim()) return true;
            const q = archivedSearchQuery.toLowerCase().trim();
            const monthYear = getMonthYearLabel(act.rawDate, act.submittedAt).toLowerCase();
            return (
              act.studentName.toLowerCase().includes(q) ||
              act.quizTitle.toLowerCase().includes(q) ||
              monthYear.includes(q)
            );
          });
          const archivedByMonthYear = filteredArchivedActivities.reduce(
            (acc, act) => {
              const key = getMonthYearLabel(act.rawDate, act.submittedAt);
              if (!acc[key]) acc[key] = [];
              acc[key].push(act);
              return acc;
            },
            {} as Record<string, ActivityItem[]>
          );

          return (
            <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
              {/* Header Banner & Tabs */}
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#801424] flex items-center justify-center text-white shrink-0 shadow-xs">
                      <History className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                        Quiz Submission History
                      </h2>
                      <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                        Chronological record of student quiz attempts with archive & deletion controls.
                      </p>
                    </div>
                  </div>

                  {/* Active / Archived Tab Selector */}
                  <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-2xl border border-gray-200 self-start sm:self-center">
                    <button
                      type="button"
                      onClick={() => setHistoryTab("active")}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        historyTab === "active"
                          ? "bg-white text-[#801424] shadow-xs"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <span>Active</span>
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                          historyTab === "active"
                            ? "bg-[#801424] text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {activeActivities.length}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setHistoryTab("archived")}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        historyTab === "archived"
                          ? "bg-white text-[#801424] shadow-xs"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <Archive className="w-3.5 h-3.5" />
                      <span>Archived</span>
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                          historyTab === "archived"
                            ? "bg-[#801424] text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {archivedActivities.length}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* TAB 1: ACTIVE SUBMISSIONS */}
              {historyTab === "active" && (
                <>
                  {activeActivities.length === 0 ? (
                    <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#801424] mb-3">
                        <History className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h4 className="text-base font-bold text-[#111827]">
                        No Active Submissions
                      </h4>
                      <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
                        {archivedActivities.length > 0
                          ? "All submissions have been archived. You can view them in the Archived tab."
                          : "Student quiz attempts and scores will automatically appear here as they take quizzes."}
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
                              <th className="pb-3 px-3">Points Earned</th>
                              <th className="pb-3 px-3">Status</th>
                              <th className="pb-3 px-3">Submitted At</th>
                              <th className="pb-3 px-3 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F3F4F6]">
                            {activeActivities.map((act) => {
                              const pct =
                                act.totalQuestions > 0
                                  ? Math.round(
                                      (act.score / act.totalQuestions) * 100
                                    )
                                  : 0;
                              const passed = pct >= 60;
                              return (
                                <tr
                                  key={act.id}
                                  className="hover:bg-[#F9FAFB] transition"
                                >
                                  <td className="py-3.5 px-3 font-semibold text-[#111827]">
                                    {act.studentName}
                                  </td>
                                  <td className="py-3.5 px-3 text-xs text-[#4B5563]">
                                    {act.quizTitle}
                                  </td>
                                  <td className="py-3.5 px-3 text-xs font-bold text-[#801424]">
                                    {act.score} / {act.totalQuestions} pts
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
                                  <td className="py-3.5 px-3 text-right">
                                    <div className="flex items-center justify-end gap-1.5">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleArchiveActivity(act.id)
                                        }
                                        title="Archive submission (hide from active history)"
                                        className="px-2.5 py-1 rounded-xl text-gray-600 hover:text-[#801424] hover:bg-red-50 border border-gray-200 transition cursor-pointer flex items-center gap-1 text-xs font-semibold"
                                      >
                                        <Archive className="w-3.5 h-3.5" />
                                        <span className="hidden sm:inline">
                                          Archive
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleDeleteActivity(act.id)
                                        }
                                        title="Delete submission permanently"
                                        className="p-1.5 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 border border-gray-200 transition cursor-pointer"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* TAB 2: ARCHIVED SUBMISSIONS GROUPED BY MONTH AND YEAR */}
              {historyTab === "archived" && (
                <>
                  {/* Search Bar for Archived Submissions */}
                  {archivedActivities.length > 0 && (
                    <div className="bg-white border border-[#EAEBED] rounded-2xl p-4 shadow-xs flex items-center gap-3">
                      <div className="relative flex-1">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={archivedSearchQuery}
                          onChange={(e) => setArchivedSearchQuery(e.target.value)}
                          placeholder="Search archived by student name, quiz title, or month/year..."
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#801424] focus:bg-white transition"
                        />
                      </div>
                      {archivedSearchQuery && (
                        <button
                          type="button"
                          onClick={() => setArchivedSearchQuery("")}
                          className="px-3 py-2 text-xs font-bold text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition cursor-pointer"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  )}

                  {archivedActivities.length === 0 ? (
                    <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 mb-3">
                        <Archive className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h4 className="text-base font-bold text-[#111827]">
                        No Archived Records
                      </h4>
                      <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
                        When you click "Archive" on any active history entry, it will be categorized here grouped by Month and Year.
                      </p>
                    </div>
                  ) : filteredArchivedActivities.length === 0 ? (
                    <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 mb-3">
                        <Search className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h4 className="text-base font-bold text-[#111827]">
                        No Matching Archived Records
                      </h4>
                      <p className="text-xs text-[#6B7280] mt-1 max-w-sm">
                        No archived records match "{archivedSearchQuery}". Try another keyword or clear search.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {Object.entries(archivedByMonthYear).map(
                        ([monthYear, groupItems]) => (
                          <div
                            key={monthYear}
                            className="bg-white border border-[#EAEBED] rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                          >
                            {/* Month & Year Group Header */}
                            <div className="bg-[#FAFBFD] border-b border-[#EAEBED] px-6 py-4 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 text-[#801424] flex items-center justify-center">
                                  <Archive className="w-4 h-4" />
                                </div>
                                <div>
                                  <h3 className="text-sm sm:text-base font-extrabold text-[#111827]">
                                    {monthYear}
                                  </h3>
                                  <span className="text-[10px] text-gray-500 font-medium">
                                    Archived Submissions
                                  </span>
                                </div>
                              </div>
                              <span className="text-xs font-bold text-[#801424] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full">
                                {groupItems.length} record
                                {groupItems.length === 1 ? "" : "s"}
                              </span>
                            </div>

                            {/* Group Items Table */}
                            <div className="p-6 overflow-x-auto">
                              <table className="w-full text-left text-sm">
                                <thead>
                                  <tr className="border-b border-[#EAEBED] text-xs font-bold uppercase text-[#6B7280]">
                                    <th className="pb-3 px-3">Student</th>
                                    <th className="pb-3 px-3">Quiz Title</th>
                                    <th className="pb-3 px-3">Points Earned</th>
                                    <th className="pb-3 px-3">Status</th>
                                    <th className="pb-3 px-3">Submitted At</th>
                                    <th className="pb-3 px-3 text-right">
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-[#F3F4F6]">
                                  {groupItems.map((act) => {
                                    const pct =
                                      act.totalQuestions > 0
                                        ? Math.round(
                                            (act.score / act.totalQuestions) *
                                              100
                                          )
                                        : 0;
                                    const passed = pct >= 60;
                                    return (
                                      <tr
                                        key={act.id}
                                        className="hover:bg-[#F9FAFB] transition"
                                      >
                                        <td className="py-3.5 px-3 font-semibold text-[#111827]">
                                          {act.studentName}
                                        </td>
                                        <td className="py-3.5 px-3 text-xs text-[#4B5563]">
                                          {act.quizTitle}
                                        </td>
                                        <td className="py-3.5 px-3 text-xs font-bold text-[#801424]">
                                          {act.score} / {act.totalQuestions} pts
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
                                        <td className="py-3.5 px-3 text-right">
                                          <div className="flex items-center justify-end gap-1.5">
                                            <button
                                              type="button"
                                              onClick={() =>
                                                handleRestoreActivity(act.id)
                                              }
                                              title="Restore back to active history"
                                              className="px-2.5 py-1 rounded-xl text-emerald-700 hover:bg-emerald-50 border border-emerald-200 transition cursor-pointer flex items-center gap-1 text-xs font-semibold"
                                            >
                                              <ArchiveRestore className="w-3.5 h-3.5" />
                                              <span>Restore</span>
                                            </button>
                                            <button
                                              type="button"
                                              onClick={() =>
                                                handleDeleteActivity(act.id)
                                              }
                                              title="Permanently delete from archive"
                                              className="p-1.5 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 border border-gray-200 transition cursor-pointer"
                                            >
                                              <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })()}

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


              {/* Search Bar */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
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
                        const isOnline =
                          onlineStudentKeys.has(st.id.toLowerCase()) ||
                          onlineStudentKeys.has(st.email.toLowerCase());

                        return (
                          <tr key={st.id} className="hover:bg-[#F9FAFB] transition">
                            <td className="py-3.5 px-3">
                              <div className="flex items-center gap-3">
                                <div className="relative">
                                  <div className="w-9 h-9 rounded-xl bg-[#801424] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                                    {st.name.slice(0, 2).toUpperCase()}
                                  </div>
                                  {isOnline && (
                                    <span
                                      title="Online now"
                                      className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full shadow-xs animate-pulse ring-1 ring-emerald-500/40"
                                    />
                                  )}
                                </div>
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-[#111827]">{st.name}</span>
                                    {isOnline && (
                                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                        Online
                                      </span>
                                    )}
                                  </div>
                                </div>
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
                                  {st.averageScore} pts
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

      {/* ========================================================================= */}
      {/* REVIEW STUDENT QUIZ SUBMISSION MODAL                                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedSubmissionForReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#EAEBED] max-h-[85vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#801424] text-white flex items-center justify-center text-sm font-bold uppercase shrink-0">
                    {selectedSubmissionForReview.studentName.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#111827]">
                      {selectedSubmissionForReview.studentName}'s Submission
                    </h3>
                    <p className="text-xs text-gray-500">
                      {selectedSubmissionForReview.studentEmail} • Quiz:{" "}
                      <span className="font-semibold text-gray-700">
                        {selectedSubmissionForReview.quizTitle}
                      </span>{" "}
                      ({selectedSubmissionForReview.topic})
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSubmissionForReview(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Submission Overview Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 shrink-0">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <p className="text-[10px] uppercase font-bold text-gray-400">Score</p>
                  <p className="text-base font-extrabold text-[#111827]">
                    {selectedSubmissionForReview.score} / {selectedSubmissionForReview.totalQuestions}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <p className="text-[10px] uppercase font-bold text-gray-400">Grade</p>
                  <p
                    className={`text-base font-extrabold ${
                      selectedSubmissionForReview.percentage >= 75
                        ? "text-emerald-700"
                        : selectedSubmissionForReview.percentage >= 60
                        ? "text-amber-700"
                        : "text-red-700"
                    }`}
                  >
                    {selectedSubmissionForReview.percentage}%
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <p className="text-[10px] uppercase font-bold text-gray-400">Status</p>
                  <p
                    className={`text-sm font-bold ${
                      selectedSubmissionForReview.passed ? "text-emerald-700" : "text-red-700"
                    }`}
                  >
                    {selectedSubmissionForReview.passed ? "Passed" : "Needs Review"}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <p className="text-[10px] uppercase font-bold text-gray-400">Submitted</p>
                  <p className="text-xs font-semibold text-gray-700 truncate">
                    {selectedSubmissionForReview.submittedAt}
                  </p>
                </div>
              </div>

              {/* Answers Breakdown */}
              <div className="overflow-y-auto flex-1 pr-1 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Question-by-Question Response Breakdown
                </h4>

                {(!selectedSubmissionForReview.answers || selectedSubmissionForReview.answers.length === 0) ? (
                  <p className="text-xs text-gray-400 italic py-4 text-center">
                    Detailed answer history is not available for this legacy submission.
                  </p>
                ) : (
                  selectedSubmissionForReview.answers.map((ans: any, idx: number) => {
                    const isRight = ans.isCorrect;
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border ${
                          isRight
                            ? "border-emerald-200 bg-emerald-50/30"
                            : "border-red-200 bg-red-50/30"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <p className="font-bold text-xs text-[#111827]">
                            <span className="text-gray-400 mr-1.5">Q{idx + 1}.</span>
                            {ans.prompt}
                          </p>
                          <span
                            className={`text-[10px] font-extrabold px-2 py-0.5 rounded shrink-0 ${
                              isRight
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {isRight ? "Correct" : "Incorrect"}
                          </span>
                        </div>

                        {ans.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                            {(["A", "B", "C", "D"] as const).map((choice) => {
                              const text = ans.options[choice];
                              if (!text) return null;
                              const isStudentPick = ans.selected === choice;
                              const isCorrectPick = ans.correct === choice;

                              let choiceClass =
                                "bg-white border-gray-200 text-gray-700";
                              if (isCorrectPick) {
                                choiceClass =
                                  "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                              } else if (isStudentPick && !isRight) {
                                choiceClass =
                                  "bg-red-100 border-red-400 text-red-950 font-bold";
                              }

                              return (
                                <div
                                  key={choice}
                                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between gap-2 ${choiceClass}`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono font-bold">
                                      {choice}.
                                    </span>
                                    <span>{text}</span>
                                  </div>
                                  <div className="flex items-center gap-1 shrink-0 text-[10px] font-bold">
                                    {isStudentPick && (
                                      <span className="px-1.5 py-0.5 rounded bg-black/10">
                                        Student Pick
                                      </span>
                                    )}
                                    {isCorrectPick && (
                                      <span className="text-emerald-700">✓ Correct</span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedSubmissionForReview(null)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
