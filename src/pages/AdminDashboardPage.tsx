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
  ChevronRight,
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
  Edit,
  ArrowRightLeft,
  Sliders,
  Settings,
  Sun,
  Moon,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
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
import { getLinearAlgebraDefinitionForTopic } from "../data/linearAlgebraCalculators";

// Real Complete Topic Data from Codebase
import { TOPICS as LINEAR_ALGEBRA_TOPICS_RAW } from "../data/topics/index";
import { ALL_CALCULUS_TOPICS } from "../data/calculus-topics";
import { ALL_CALCULUS_2_TOPICS } from "../data/calculus-2-topics";
import TopicContentRenderer, { extractFirstImage } from "../components/TopicContentRenderer";

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
  block?: string;
  avatarUrl?: string;
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
  image?: string;
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
  const { theme, toggleTheme } = useTheme();

  // Navigation State
  const [activeNav, setActiveNav] = useState<
    | "dashboard"
    | "student-overview"
    | "student-quizzes"
    | "calculators"
    | "topics"
    | "add-quiz"
    | "quiz-results"
    | "history-quizzes"
    | "view-students"
  >("dashboard");

  // Student Overview States (Learner View Mode)
  const [isStudentViewMode, setIsStudentViewMode] = useState(false);
  const [studentOverviewTimeRange, setStudentOverviewTimeRange] = useState<
    "Today" | "This Week" | "This Month" | "All Time"
  >("This Week");
  const [isStudentTimeDropdownOpen, setIsStudentTimeDropdownOpen] = useState(false);
  const [previewQuizModal, setPreviewQuizModal] = useState<QuizItem | null>(null);
  const [previewQuestionIndex, setPreviewQuestionIndex] = useState<number>(0);
  const [previewAnswers, setPreviewAnswers] = useState<Record<string, string>>({});
  const [previewShowExplanation, setPreviewShowExplanation] = useState<Record<string, boolean>>({});
  const [previewQuizSubmitted, setPreviewQuizSubmitted] = useState(false);

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
  const [selectedStudentBlockFilter, setSelectedStudentBlockFilter] = useState<string>("all");
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
  // Multi-section: each section has a question type, item count, and points per item
  interface QuizSection {
    type: QuizQuestionType;
    itemCount: number;
    pointsPerItem: number;
  }
  const [questionTypeSections, setQuestionTypeSections] = useState<QuizSection[]>([]);

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

  // Moving / changing student block
  const [editingBlockStudent, setEditingBlockStudent] = useState<StudentItem | null>(null);
  const [targetBlockInput, setTargetBlockInput] = useState<string>("");
  const [isUpdatingStudentBlock, setIsUpdatingStudentBlock] = useState(false);
  const [blockUpdateSuccessMessage, setBlockUpdateSuccessMessage] = useState<string | null>(null);
  const [isBlockCustomizationMode, setIsBlockCustomizationMode] = useState(false);

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

        // Add to activities feed (keep up to 10 most recent, dropping the oldest if >= 10)
        setActivities((prev) => [newAct, ...prev.filter((a) => a.id !== newAct.id)].slice(0, 10));

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

    // 3. Realtime listener on profiles table (updates name, photo, block instantly in Admin View Students)
    const profilesRealtimeSub = supabase
      .channel("admin-realtime-profiles")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "profiles" },
        (payload: any) => {
          if (payload?.new) {
            const updated = payload.new;
            setStudents((prev) =>
              prev.map((s) =>
                s.id === updated.id
                  ? {
                      ...s,
                      name: updated.name || s.name,
                      email: updated.email || s.email,
                      block: updated.block !== undefined ? updated.block : s.block,
                      avatarUrl: updated.avatar_url !== undefined ? updated.avatar_url : s.avatarUrl,
                    }
                  : s
              )
            );

            if (updated.name) {
              setStudentSubmissions((prev) =>
                prev.map((sub) =>
                  sub.userId === updated.id
                    ? { ...sub, studentName: updated.name }
                    : sub
                )
              );
              fetchQuizzesAndStats();
            }
          }
        }
      )
      .subscribe();

    return () => {
      broadcastChannel.unsubscribe();
      tableSub.unsubscribe();
      profilesRealtimeSub.unsubscribe();
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
            image: (t as any).image || extractFirstImage(t.details) || undefined,
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
            image: (t as any).image || extractFirstImage(t.details) || undefined,
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
            image: (t as any).image || extractFirstImage(t.details) || undefined,
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

  // Compute available blocks from students (only blocks that actually exist, sorted A-Z)
  const availableBlocks = useMemo(() => {
    const blockSet = new Set<string>();
    students.forEach((s) => {
      if (s.block && s.block.trim()) {
        blockSet.add(s.block.trim().toUpperCase());
      }
    });
    return Array.from(blockSet).sort((a, b) => a.localeCompare(b));
  }, [students]);

  // Filtered students by search AND block filter (sorted alphabetically by student name)
  const filteredStudents = useMemo(() => {
    const q = (studentSearchQuery || searchQuery).toLowerCase().trim();
    let list = !q
      ? [...students]
      : students.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.email.toLowerCase().includes(q) ||
            (s.block && s.block.toLowerCase().includes(q)),
        );
    // Apply block filter
    if (selectedStudentBlockFilter !== "all") {
      list = list.filter(
        (s) => s.block && s.block.trim().toUpperCase() === selectedStudentBlockFilter
      );
    }
    return list.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  }, [students, studentSearchQuery, searchQuery, selectedStudentBlockFilter]);

  // Filtered student quiz submissions (sorted alphabetically by student name)
  const filteredSubmissions = useMemo(() => {
    const q = resultsSearchQuery.toLowerCase().trim();
    return studentSubmissions
      .filter((sub) => {
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
      })
      .sort((a, b) => a.studentName.localeCompare(b.studentName));
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
        .select("id, name, email, block, avatar_url, created_at, role")
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
            block: prof.block || "",
            avatarUrl: prof.avatar_url || "",
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
              prof?.name?.trim() ||
              payloadStudentName?.trim() ||
              prof?.email?.split("@")[0] ||
              (a.user_id ? `Student (${a.user_id.slice(0, 6)})` : "Student");
            const sEmail = prof?.email || payloadStudentEmail?.trim() || "";
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
    // Temporarily disable ALL CSS transitions during nav switch to prevent black flash.
    document.documentElement.classList.add("no-transitions");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("no-transitions");
      });
    });

    if (navKey === "student-overview" || navKey === "student-quizzes") {
      setIsStudentViewMode(true);
    } else if (
      navKey === "dashboard" ||
      navKey === "add-quiz" ||
      navKey === "view-students"
    ) {
      setIsStudentViewMode(false);
    }
    setActiveNav(navKey);
    setActiveCalculator(null);
    setActiveTopic(null);
    setIsAdminDropdownOpen(false);
    setMobileSidebarOpen(false);
  };

  // Computed values for student overview
  const studentOverviewAvg = useMemo(() => {
    return 0;
  }, []);

  const studentOverviewHigh = useMemo(() => {
    return 0;
  }, []);

  const handleStartStudentPreviewQuiz = (quiz: QuizItem) => {
    setPreviewQuizModal(quiz);
    setPreviewQuestionIndex(0);
    setPreviewAnswers({});
    setPreviewShowExplanation({});
    setPreviewQuizSubmitted(false);
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

        // Build the list of sections to generate from
        // If no sections saved, use the current config as a single section
        const effectiveSections: Array<{ type: QuizQuestionType; itemCount: number; pointsPerItem: number }> =
          questionTypeSections.length > 0
            ? questionTypeSections
            : [{
                type: generatorQuestionType,
                itemCount: typeof generatorItemCount === "number" && generatorItemCount > 0 ? generatorItemCount : 5,
                pointsPerItem: typeof generatorPointsPerItem === "number" && generatorPointsPerItem > 0 ? generatorPointsPerItem : 1,
              }];

        const allDrafts: QuizQuestionDraft[] = [];
        effectiveSections.forEach((sec) => {
          const generated = generateQuizQuestions(
            chosenTopics,
            generatorCategory,
            sec.itemCount,
            sec.type
          );
          generated.forEach((g) => {
            allDrafts.push({
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
            });
          });
        });

        setNewQuizQuestionDrafts(allDrafts);
        setNewQuizQuestions(String(allDrafts.length));

        // Category label for quiz
        const catLabel =
          generatorCategory === "linear-algebra"
            ? "Linear Algebra"
            : generatorCategory === "calculus-1"
            ? "Calculus 1"
            : "Calculus 2";
        setNewQuizTopic(catLabel);

        // Auto-suggest title based on section types
        const getTypeLabel = (t: QuizQuestionType) =>
          t === "multiple_choice"
            ? "Multiple Choice"
            : t === "identification"
            ? "Identification"
            : t === "enumeration"
            ? "Enumeration"
            : "Problem Solving";

        const typeLabels = [...new Set(effectiveSections.map((s) => getTypeLabel(s.type)))];
        const typeLabelStr = typeLabels.length === 1 ? typeLabels[0] : "Mixed";

        const topicFocus =
          chosenTopics.length === 1
            ? chosenTopics[0].title
            : chosenTopics.length <= 3
            ? chosenTopics.map((t) => t.title).join(" & ")
            : `${catLabel} Comprehensive`;

        setNewQuizTitle(`${topicFocus} - ${typeLabelStr} Quiz`);
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
      setQuestionTypeSections([]);
      setGeneratorItemCount(5);
      setGeneratorPointsPerItem(1);
      setGeneratorQuestionType("multiple_choice");
      setShowPublishedSuccess(true);
      setTimeout(() => setShowPublishedSuccess(false), 3000);
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

  // Move / change student to another block
  const handleOpenMoveBlockModal = (student: StudentItem) => {
    setEditingBlockStudent(student);
    setTargetBlockInput(student.block || "");
    setBlockUpdateSuccessMessage(null);
  };

  const handleSaveStudentBlock = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!editingBlockStudent) return;

    const newBlockClean = targetBlockInput.trim().toUpperCase();
    setIsUpdatingStudentBlock(true);

    try {
      if (supabase) {
        const { error } = await supabase
          .from("profiles")
          .update({ block: newBlockClean })
          .eq("id", editingBlockStudent.id);

        if (error) {
          console.error("Supabase error updating student block:", error);
          alert(`Failed to update student block: ${error.message}`);
          setIsUpdatingStudentBlock(false);
          return;
        }
      }

      // Optimistically update local students list
      setStudents((prev) =>
        prev.map((s) =>
          s.id === editingBlockStudent.id
            ? { ...s, block: newBlockClean }
            : s
        )
      );

      setBlockUpdateSuccessMessage(
        newBlockClean
          ? `Moved ${editingBlockStudent.name} to Block ${newBlockClean} successfully!`
          : `Removed block assignment for ${editingBlockStudent.name}.`
      );

      setTimeout(() => {
        setEditingBlockStudent(null);
        setBlockUpdateSuccessMessage(null);
      }, 1200);
    } catch (err: any) {
      console.error("Error saving student block:", err);
      alert("An unexpected error occurred while updating block.");
    } finally {
      setIsUpdatingStudentBlock(false);
    }
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

  // Realtime dynamic greeting for student overview
  const studentOverviewGreeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 18) return "Good afternoon";
    return "Good evening";
  }, []);

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
      <aside className={`hidden lg:flex bg-white border-r border-[#EAEBED] flex-col justify-between h-full shrink-0 overflow-hidden select-none z-30 transition-all duration-300 ease-in-out ${isTopicCalculatorOpen ? "w-[70px] p-3" : "w-[260px] p-5"}`}>
        <div className="flex flex-col gap-6">
          {/* Brand Logo Header */}
          <div className={`flex items-center gap-3 px-1 py-1 ${isTopicCalculatorOpen ? "justify-center" : ""}`}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center shadow-md shadow-[#166534]/30 border border-white/20 shrink-0">
              <span className="font-serif text-2xl font-bold text-white leading-none select-none">
                Σ
              </span>
            </div>
            {!isTopicCalculatorOpen && (
            <div className="flex flex-col leading-tight">
              <span className="text-[1.05rem] font-black tracking-tight text-[#1F242D]">
                Math<span className="text-[#166534]">Workspace</span>
              </span>
              <AnimatePresence mode="wait" initial={false}>
                {isStudentViewMode ? (
                  <motion.span
                    key="portal-title-student"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className="text-[0.72rem] font-semibold text-[#8C93A0] flex items-center gap-1.5"
                  >
                    <span className="text-[#166534] font-bold">Student Portal</span>
                    <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-[#166534]/10 text-[#166534]">
                      Overview
                    </span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="portal-title-admin"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18 }}
                    className="text-[0.72rem] font-semibold text-[#8C93A0]"
                  >
                    Admin Dashboard
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            )}
          </div>

          {/* Main Navigation Links */}
          <nav className="flex flex-col gap-1 mt-1">
            <AnimatePresence mode="wait" initial={false}>
              {isStudentViewMode ? (
                /* STUDENT OVERVIEW SIDEBAR NAVIGATION */
                <motion.div
                  key="student-nav"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex flex-col gap-1"
                >
                  {/* Dashboard (Student Overview) */}
                  <button
                    onClick={() => handleNavClick("student-overview")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "student-overview"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Dashboard"
                  >
                    <LayoutDashboard className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Dashboard</span>}
                  </button>

                  {/* LEARN Section */}
                  {!isTopicCalculatorOpen && (
                    <div className="pt-4 pb-1">
                      <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                        LEARN
                      </span>
                    </div>
                  )}

                  {/* Calculators */}
                  <button
                    onClick={() => handleNavClick("calculators")}
                    className={`nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "calculators"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Calculators"
                  >
                    <div className="flex items-center gap-3">
                      <Calculator className="w-4 h-4 shrink-0" />
                      {!isTopicCalculatorOpen && <span>Calculators</span>}
                    </div>
                  </button>

                  {/* Topics */}
                  <button
                    onClick={() => handleNavClick("topics")}
                    className={`nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "topics"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Topics"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 shrink-0" />
                      {!isTopicCalculatorOpen && <span>Topics</span>}
                    </div>
                  </button>

                  {/* PRACTICE Section */}
                  {!isTopicCalculatorOpen && (
                    <div className="pt-4 pb-1">
                      <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                        PRACTICE
                      </span>
                    </div>
                  )}

                  {/* Quizzes */}
                  <button
                    onClick={() => handleNavClick("student-quizzes")}
                    className={`nav-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "student-quizzes"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Quizzes"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 shrink-0" />
                      {!isTopicCalculatorOpen && <span>Quizzes</span>}
                    </div>
                    {!isTopicCalculatorOpen && (
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                          activeNav === "student-quizzes"
                            ? "bg-white/20 text-white"
                            : "bg-[#E4E7EC] dark:bg-slate-700 text-[#6B7280] dark:text-slate-300"
                        }`}
                      >
                        {quizzes.length}
                      </span>
                    )}
                  </button>

                  {/* Quizzes History */}
                  <button
                    onClick={() => handleNavClick("history-quizzes")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "history-quizzes"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Quizzes History"
                  >
                    <History className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Quizzes History</span>}
                  </button>

                  {/* Quiz Results */}
                  <button
                    onClick={() => handleNavClick("quiz-results")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "quiz-results"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Quiz Results"
                  >
                    <BarChart3 className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Quiz Results</span>}
                  </button>
                </motion.div>
              ) : (
                /* REGULAR ADMIN SIDEBAR NAVIGATION */
                <motion.div
                  key="admin-nav"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex flex-col gap-1"
                >
                  {/* Dashboard Link */}
                  <button
                    onClick={() => handleNavClick("dashboard")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "dashboard"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Dashboard"
                  >
                    <LayoutDashboard className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Dashboard</span>}
                  </button>

                  {/* Calculators Link */}
                  <button
                    onClick={() => handleNavClick("calculators")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "calculators"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Calculators"
                  >
                    <Calculator className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Calculators</span>}
                  </button>

                  {/* Topics Link */}
                  <button
                    onClick={() => handleNavClick("topics")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "topics"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Topics"
                  >
                    <BookOpen className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Topics</span>}
                  </button>

                  {/* Section: Quiz Management */}
                  {!isTopicCalculatorOpen && (
                    <div className="pt-5 pb-1">
                      <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                        Quiz Management
                      </span>
                    </div>
                  )}

                  {/* Add Quiz */}
                  <button
                    onClick={() => handleNavClick("add-quiz")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "add-quiz"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Add Quiz"
                  >
                    <PlusSquare className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Add Quiz</span>}
                  </button>

                  {/* Quiz Results */}
                  <button
                    onClick={() => handleNavClick("quiz-results")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "quiz-results"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Quiz Results"
                  >
                    <BarChart3 className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Quiz Results</span>}
                  </button>

                  {/* History Quizzes */}
                  <button
                    onClick={() => handleNavClick("history-quizzes")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "history-quizzes"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="History Quizzes"
                  >
                    <History className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>History Quizzes</span>}
                  </button>

                  {/* Section: User Management */}
                  {!isTopicCalculatorOpen && (
                    <div className="pt-5 pb-1">
                      <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                        User Management
                      </span>
                    </div>
                  )}

                  {/* View Students */}
                  <button
                    onClick={() => handleNavClick("view-students")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "view-students"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="View Students"
                  >
                    <Users className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>View Students</span>}
                  </button>

                  {/* Student Overview */}
                  <button
                    onClick={() => handleNavClick("student-overview")}
                    className={`nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-left cursor-pointer ${isTopicCalculatorOpen ? "justify-center !px-0" : ""} ${
                      activeNav === "student-overview"
                        ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10 font-bold"
                        : "text-[#4B5565] hover:bg-[#F4F5F7] hover:text-[#1F242D]"
                    }`}
                    title="Student Overview"
                  >
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    {!isTopicCalculatorOpen && <span>Student Overview</span>}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>

        {/* Bottom Sidebar Action for Student View Mode */}
        <AnimatePresence>
          {isStudentViewMode && !isTopicCalculatorOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 12, height: 0 }}
              transition={{ duration: 0.2 }}
              className="pt-3 pb-1 border-t border-[#F0F1F3] dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => {
                  setIsStudentViewMode(false);
                  setActiveNav("dashboard");
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-[#166534]/30 bg-[#F0FDF4] dark:bg-[#166534]/20 dark:border-[#166534]/40 text-[#166534] dark:text-emerald-400 font-bold text-xs hover:bg-[#dcfce7] dark:hover:bg-[#166534]/30 transition shadow-xs cursor-pointer active:scale-98"
                title="Return to Admin Dashboard"
              >
                <ArrowLeft className="w-4 h-4 shrink-0" />
                <span>Return to Admin</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

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
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center shadow-md shadow-[#166534]/30 border border-white/20 shrink-0">
                      <span className="font-serif text-2xl font-bold text-white leading-none">
                        Σ
                      </span>
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[1.05rem] font-black tracking-tight text-[#1F242D]">
                        Math<span className="text-[#166534]">Workspace</span>
                      </span>
                      <span className="text-[0.72rem] font-semibold text-[#8C93A0] flex items-center gap-1.5">
                        {isStudentViewMode ? (
                          <>
                            <span className="text-[#166534] font-bold">Student Portal</span>
                            <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-[#166534]/10 text-[#166534]">
                              Overview
                            </span>
                          </>
                        ) : (
                          "Admin Dashboard"
                        )}
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
                  <AnimatePresence mode="wait" initial={false}>
                    {isStudentViewMode ? (
                      /* STUDENT OVERVIEW MOBILE DRAWER */
                      <motion.div
                        key="mobile-student-nav"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-1"
                      >
                        <button
                          onClick={() => handleNavClick("student-overview")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                            activeNav === "student-overview"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <LayoutDashboard className="w-4 h-4 shrink-0" />
                          <span>Dashboard</span>
                        </button>

                        <div className="pt-4 pb-1">
                          <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                            LEARN
                          </span>
                        </div>

                        <button
                          onClick={() => handleNavClick("calculators")}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "calculators"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Calculator className="w-4 h-4 shrink-0" />
                            <span>Calculators</span>
                          </div>
                        </button>

                        <button
                          onClick={() => handleNavClick("topics")}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "topics"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <BookOpen className="w-4 h-4 shrink-0" />
                            <span>Topics</span>
                          </div>
                        </button>

                        <div className="pt-4 pb-1">
                          <span className="text-[0.68rem] font-bold tracking-wider text-[#9AA1B0] uppercase px-3.5">
                            PRACTICE
                          </span>
                        </div>

                        <button
                          onClick={() => handleNavClick("student-quizzes")}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "student-quizzes"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <HelpCircle className="w-4 h-4 shrink-0" />
                            <span>Quizzes</span>
                          </div>
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                            activeNav === "student-quizzes" ? "bg-white/20 text-white" : "bg-[#F0F1F3] text-[#6B7280]"
                          }`}>
                            {quizzes.length}
                          </span>
                        </button>

                        <button
                          onClick={() => handleNavClick("history-quizzes")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "history-quizzes"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <History className="w-4 h-4 shrink-0" />
                          <span>Quizzes History</span>
                        </button>

                        <button
                          onClick={() => handleNavClick("quiz-results")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "quiz-results"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <BarChart3 className="w-4 h-4 shrink-0" />
                          <span>Quiz Results</span>
                        </button>

                        <div className="pt-4 border-t border-[#F0F1F3] mt-2">
                          <button
                            onClick={() => {
                              setIsStudentViewMode(false);
                              handleNavClick("dashboard");
                            }}
                            className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-[#166534]/30 bg-[#F0FDF4] text-[#166534] font-bold text-xs hover:bg-[#FCE8EB] transition shadow-xs"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Return to Admin</span>
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      /* REGULAR ADMIN MOBILE DRAWER */
                      <motion.div
                        key="mobile-admin-nav"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-1"
                      >
                        <button
                          onClick={() => handleNavClick("dashboard")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all text-left ${
                            activeNav === "dashboard"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
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
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
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
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-white/10"
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
                        <button
                          onClick={() => handleNavClick("student-overview")}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                            activeNav === "student-overview"
                              ? "bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white font-bold"
                              : "text-[#4B5565] hover:bg-[#F4F5F7]"
                          }`}
                        >
                          <GraduationCap className="w-4 h-4 shrink-0" />
                          <span>Student Overview</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </nav>
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
        <header className="sticky top-0 z-20 bg-[#F8F9FA]/95 dark:bg-[#0E1726]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between gap-4 border-b border-[#EAEBED] dark:border-slate-800 transition-colors">
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
                className="fixed top-5 right-6 z-[120] bg-white dark:bg-[#161F30] border border-[#166534]/20 dark:border-slate-700 rounded-2xl shadow-xl p-4 flex items-center gap-3.5 max-w-sm cursor-pointer hover:shadow-2xl transition"
              >
                <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs animate-bounce">
                  <Bell className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-[#166534] dark:text-emerald-400 uppercase tracking-wide">
                      New Quiz Submission!
                    </span>
                    <span className="text-[10px] text-gray-400 dark:text-slate-500">Just now</span>
                  </div>
                  <p className="text-xs font-bold text-gray-900 dark:text-slate-100 truncate">
                    {recentSubmissionToast.studentName}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-slate-400 truncate">
                    {recentSubmissionToast.quizTitle} • Score:{" "}
                    <span className="font-bold text-[#166534] dark:text-emerald-400">
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
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden p-2 rounded-xl border border-[#E2E4E8] dark:border-slate-700 bg-white dark:bg-[#161F30] text-[#4B5565] dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Right Header Controls (Notifications & Admin Profile) */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Notification Bell Button & Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsAdminDropdownOpen(false);
                }}
                className="relative p-2.5 rounded-xl text-gray-600 dark:text-slate-300 hover:text-[#166534] dark:hover:text-emerald-400 hover:bg-gray-100/80 dark:hover:bg-slate-800/80 transition-colors cursor-pointer border border-gray-200 dark:border-slate-700/80 shadow-2xs"
                title="Student Submission Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadActivities.length > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#166534] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-[#0E1726] shadow-xs">
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
                    className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl shadow-xl z-40 overflow-hidden"
                  >
                    <div className="p-3.5 border-b border-gray-100 dark:border-slate-700/80 flex items-center justify-between bg-[#FAFBFD] dark:bg-slate-800/60">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-green-50 dark:bg-emerald-950/50 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
                          <Bell className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-gray-900 dark:text-slate-100">
                          Student Submissions
                        </span>
                        {unreadActivities.length > 0 && (
                          <span className="px-2 py-0.5 bg-green-100 dark:bg-emerald-900/50 text-[#166534] dark:text-emerald-400 text-[10px] font-extrabold rounded-full">
                            {unreadActivities.length} new
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2.5">
                        {unreadActivities.length > 0 && (
                          <button
                            type="button"
                            onClick={markAllAdminNotificationsAsRead}
                            className="text-[11px] font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
                          >
                            Mark all read
                          </button>
                        )}
                        {activeAdminNotifications.length > 0 && (
                          <button
                            type="button"
                            onClick={handleDeleteAllAdminNotifications}
                            className="text-[11px] font-semibold text-gray-400 dark:text-slate-400 hover:text-green-600 dark:hover:text-emerald-400 transition cursor-pointer"
                            title="Clear all notifications"
                          >
                            Clear all
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="max-h-80 overflow-y-auto divide-y divide-gray-100 dark:divide-slate-700/60">
                      {activeAdminNotifications.length === 0 ? (
                        <div className="p-8 text-center text-gray-400 dark:text-slate-500 text-xs">
                          No notifications right now.
                        </div>
                      ) : (
                        activeAdminNotifications.slice(0, 15).map((act) => {
                          const isUnread = !readNotificationIds.includes(act.id);
                          return (
                            <div
                              key={act.id}
                              onClick={() => handleAdminNotificationClick(act.id)}
                              className={`group/notif relative w-full text-left p-3.5 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition cursor-pointer flex items-start gap-3 ${
                                isUnread
                                  ? "bg-[#FFF8F8] dark:bg-slate-800/30"
                                  : "bg-white dark:bg-[#161F30]"
                              }`}
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-2xs">
                                {act.studentName.charAt(0).toUpperCase()}
                              </div>
                              <div className="flex-1 min-w-0 pr-6">
                                <div className="flex items-center justify-between gap-1">
                                  <p className="text-xs font-bold text-gray-900 dark:text-slate-100 truncate">
                                    {act.studentName}
                                  </p>
                                  {isUnread && (
                                    <span className="w-2 h-2 rounded-full bg-[#166534] dark:bg-emerald-400 shrink-0" />
                                  )}
                                </div>
                                <p className="text-[11px] text-gray-600 dark:text-slate-300 truncate mt-0.5">
                                  Submitted <span className="font-semibold text-gray-900 dark:text-slate-100">{act.quizTitle}</span>
                                </p>
                                <div className="flex items-center justify-between mt-1 text-[10px] text-gray-400 dark:text-slate-500">
                                  <span className="font-bold text-[#166534] dark:text-emerald-400">
                                    {act.score} / {act.totalQuestions} pts
                                  </span>
                                  <span>{act.submittedAt}</span>
                                </div>
                              </div>
                              {/* Individual Delete Button */}
                              <button
                                type="button"
                                onClick={(e) => handleDeleteAdminNotification(act.id, e)}
                                className="opacity-60 group-hover/notif:opacity-100 p-1 text-gray-400 dark:text-slate-400 hover:text-green-600 dark:hover:text-emerald-400 hover:bg-green-50 dark:hover:bg-emerald-950/40 rounded-lg transition-all shrink-0 cursor-pointer"
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
                      <div className="p-2.5 bg-gray-50/70 dark:bg-slate-800/80 border-t border-gray-100 dark:border-slate-700 text-center">
                        <button
                          type="button"
                          onClick={() => {
                            setIsNotificationsOpen(false);
                            handleNavClick("history-quizzes");
                          }}
                          className="text-xs font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
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
                className="flex items-center gap-2.5 py-1 px-2 rounded-2xl hover:bg-gray-100/70 dark:hover:bg-slate-800/60 transition-colors cursor-pointer group"
              >
                <div className="hidden sm:flex flex-col text-right leading-tight">
                  <span className="text-sm font-bold text-[#1F242D] dark:text-slate-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {isStudentViewMode ? "Student Learner" : (user?.name || "User")}
                  </span>
                  <span className="text-[0.72rem] font-medium text-[#8C93A0] dark:text-slate-400">
                    {isStudentViewMode ? "Learner View (Preview)" : "Administrator"}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#166534]/25 border border-white/20 dark:border-slate-700 shrink-0">
                  {isStudentViewMode ? "S" : (user?.name ? user.name.charAt(0).toUpperCase() : "U")}
                </div>
                <ChevronDown className="w-4 h-4 text-[#717A8A] dark:text-slate-400 group-hover:text-[#1F242D] dark:group-hover:text-slate-200 transition-colors" />
              </button>

              {/* Admin Dropdown Menu */}
              <AnimatePresence>
                {isAdminDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl shadow-xl py-2 z-30"
                  >
                    <div className="px-4 py-2 border-b border-[#F0F1F3] dark:border-slate-700/80">
                      <p className="text-xs font-bold text-[#1F242D] dark:text-slate-100">
                        {isStudentViewMode ? "Student Learner" : (user?.name || "User")}
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <p className="text-[0.72rem] text-[#8C93A0] dark:text-slate-400 truncate">
                          {isStudentViewMode ? "learner.preview@workspace.local" : (user?.email || "admin@gmail.com")}
                        </p>
                        {user?.block && (
                          <span className="inline-flex items-center shrink-0 rounded-md bg-[#166534]/10 dark:bg-emerald-950/40 border border-[#166534]/20 dark:border-emerald-700/50 px-1.5 py-0.5 text-[10px] font-bold text-[#166534] dark:text-emerald-400 leading-none">
                            Block {user.block.trim().toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>

                    {isStudentViewMode ? (
                      <button
                        onClick={() => {
                          setIsStudentViewMode(false);
                          handleNavClick("dashboard");
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-[#166534] dark:text-emerald-400 hover:bg-[#F0FDF4] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4 text-[#166534] dark:text-emerald-400" />
                        <span>Return to Admin Dashboard</span>
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleNavClick("dashboard")}
                          className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold hover:bg-[#F6F7F9] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors ${
                            activeNav === "dashboard"
                              ? "text-[#166534] dark:text-emerald-400 font-bold bg-[#F0FDF4] dark:bg-slate-800"
                              : "text-[#4B5565] dark:text-slate-300"
                          }`}
                        >
                          <LayoutDashboard className="w-4 h-4 text-[#717A8A] dark:text-slate-400" />
                          <span>Admin Overview</span>
                        </button>
                        <button
                          onClick={() => handleNavClick("student-overview")}
                          className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold hover:bg-[#F6F7F9] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors ${
                            activeNav === "student-overview"
                              ? "text-[#166534] dark:text-emerald-400 font-bold bg-[#F0FDF4] dark:bg-slate-800"
                              : "text-[#4B5565] dark:text-slate-300"
                          }`}
                        >
                          <GraduationCap className="w-4 h-4 text-[#717A8A] dark:text-slate-400" />
                          <span>Student Overview</span>
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleNavClick("calculators")}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-[#4B5565] dark:text-slate-300 hover:bg-[#F6F7F9] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors"
                    >
                      <Calculator className="w-4 h-4 text-[#717A8A] dark:text-slate-400" />
                      <span>Calculators Hub</span>
                    </button>
                    <button
                      onClick={() => handleNavClick("topics")}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-[#4B5565] dark:text-slate-300 hover:bg-[#F6F7F9] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors"
                    >
                      <BookOpen className="w-4 h-4 text-[#717A8A] dark:text-slate-400" />
                      <span>Curriculum Topics</span>
                    </button>
                    {/* Light / Dark Mode Toggle */}
                    <button
                      type="button"
                      onClick={() => toggleTheme()}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-[#4B5565] dark:text-slate-300 hover:bg-[#F6F7F9] dark:hover:bg-slate-800/60 text-left cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        {theme === "dark" ? (
                          <Moon className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Sun className="w-4 h-4 text-amber-500" />
                        )}
                        <span className="font-semibold">
                          {theme === "dark" ? "Dark Mode" : "Light Mode"}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-300">
                        {theme === "dark" ? "On" : "Off"}
                      </span>
                    </button>
                    <div className="my-1 border-t border-[#F0F1F3] dark:border-slate-700/80" />
                    <button
                      onClick={async () => {
                        setIsAdminDropdownOpen(false);
                        await logout();
                        navigate("/login", { replace: true });
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 text-left cursor-pointer transition-colors"
                    >
                      <LogOut className="w-4 h-4 text-red-600 dark:text-red-400" />
                      <span>Sign Out</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* VIEW: STUDENT OVERVIEW (STUDENT-END DASHBOARD PREVIEW)                    */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          {activeNav === "student-overview" && (
            <motion.div
              key="student-overview-view"
              initial={{ opacity: 0, y: 15, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.99 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-7 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-16"
            >
            {/* 1. TOP NOTICE / PREVIEW BANNER */}
            <div className="bg-gradient-to-r from-[#166534]/10 via-[#15803d]/5 to-white border border-[#166534]/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center text-white shadow-md shadow-[#166534]/25 shrink-0 border border-white/20">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-base sm:text-lg font-bold text-[#1F242D]">
                      Student Dashboard Overview
                    </h2>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#166534]/15 text-[#166534] border border-[#166534]/25">
                      Learner View Mode
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    Simulating default student portal experience &bull; No specific student account is linked
                  </p>
                </div>
              </div>

            </div>

            {/* 2. TOP ROW: HERO WELCOME BANNER (LEFT) & YOUR PROGRESS CARD (RIGHT) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Hero Banner (7 cols) */}
              <div className="lg:col-span-7 bg-white border border-[#ECEFF3] rounded-[26px] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
                {/* Left Column Text & Buttons */}
                <div className="flex flex-col items-start z-10 max-w-sm">
                  <span className="text-base sm:text-lg font-bold text-[#1F242D]">
                    {studentOverviewGreeting},
                  </span>
                  <h1 className="text-3xl sm:text-[2.35rem] font-extrabold text-[#166534] tracking-tight leading-tight mt-0.5 mb-5 flex items-center gap-2">
                    Student Learner!
                  </h1>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        const quizSec = document.getElementById("student-overview-quizzes");
                        quizSec?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] hover:from-[#166534] hover:to-[#052e16] active:scale-98 text-white font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-xl shadow-[0_6px_16px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center gap-1.5 transition-all duration-200 cursor-pointer border border-white/10"
                    >
                      <span>Start Practicing</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleNavClick("topics")}
                      className="bg-white hover:bg-[#F8F9FA] active:scale-98 text-[#1F242D] border border-[#E0E2E6] font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-200 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-[#166534]" />
                      <span>Browse Topics</span>
                    </button>
                  </div>
                </div>

                </div>

              {/* Right "Your Progress" Card (5 cols) */}
              <div className="lg:col-span-5 bg-white border border-[#ECEFF3] rounded-[24px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                {/* Card Header + Time Dropdown */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm sm:text-base font-bold text-[#1F242D]">
                    Your Progress
                  </h2>

                  <div className="relative">
                    <button
                      onClick={() =>
                        setIsStudentTimeDropdownOpen(!isStudentTimeDropdownOpen)
                      }
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E0E2E6] bg-white hover:bg-[#F8F9FA] text-xs font-semibold text-[#4B5565] transition cursor-pointer"
                    >
                      <span>{studentOverviewTimeRange}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#8C93A0]" />
                    </button>

                    <AnimatePresence>
                      {isStudentTimeDropdownOpen && (
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
                                setStudentOverviewTimeRange(opt);
                                setIsStudentTimeDropdownOpen(false);
                              }}
                              className={`px-2.5 py-1.5 text-xs text-left rounded-lg font-medium transition cursor-pointer ${
                                studentOverviewTimeRange === opt
                                  ? "bg-[#166534] text-white font-bold"
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
                        className="stroke-[#166534] transition-all duration-1000"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset={
                          251.2 - (251.2 * studentOverviewAvg) / 100
                        }
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-xl sm:text-2xl font-extrabold text-[#1F242D] leading-none">
                        {studentOverviewAvg} pts
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
                        0
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
                        0 pts
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-xs bg-[#166534]" />
                        <span className="text-[#4B5565] font-medium text-[11px] sm:text-xs">
                          Highest Score
                        </span>
                      </div>
                      <span className="font-bold text-[#1F242D] text-xs">
                        0%
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
                        0m 0s
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Dual Mini Stat Boxes */}
                <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-[#F0F1F3]">
                  <div className="bg-[#F8F9FA] border border-[#ECEFF3] rounded-[16px] p-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[10px] font-medium text-[#8C93A0]">
                        Average Score
                      </span>
                      <span className="text-base font-bold text-[#1F242D]">
                        0 pts
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#F8F9FA] border border-[#ECEFF3] rounded-[16px] p-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[10px] font-medium text-[#8C93A0]">
                        Highest Score
                      </span>
                      <span className="text-base font-bold text-[#1F242D]">
                        0 pts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. LOWER ROW: 2 SPLIT CARDS (AVAILABLE QUIZZES & RECENT QUIZ HISTORY) */}
            <div id="student-overview-quizzes" className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Card Left: Available Quizzes */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                        Available Quizzes
                      </h3>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#166534]/10 text-[#166534]">
                        {quizzes.length}
                      </span>
                    </div>
                    <button
                      onClick={() => handleNavClick("history-quizzes")}
                      className="bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition cursor-pointer"
                    >
                      View All ({quizzes.length})
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

                {quizzes.length === 0 ? (
                  <div className="py-10 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#FCE8EB] flex items-center justify-center mb-3 text-[#166534]">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-[#1F242D] mb-1">
                      No quizzes added yet
                    </h4>
                    <p className="text-xs text-[#8C93A0] mb-4">
                      Quizzes published in Add Quiz will appear here for students.
                    </p>
                    <button
                      onClick={() => handleNavClick("add-quiz")}
                      className="bg-[#166534] text-white text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer hover:bg-[#14532d] transition"
                    >
                      Create a Quiz
                    </button>
                  </div>
                ) : (
                  <div className="divide-y divide-[#F3F4F6] my-2">
                    {quizzes.slice(0, 4).map((quiz) => (
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
                          <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded truncate inline-block max-w-full">
                            {quiz.topic}
                          </span>
                        </div>
                        <div className="col-span-1 text-center font-medium text-[#4B5565]">
                          {quiz.questionsCount || quiz.questions?.length || 5}
                        </div>
                        <div className="col-span-1 text-right">
                          <button
                            onClick={() => handleStartStudentPreviewQuiz(quiz)}
                            className="px-2.5 py-1 bg-[#166534] hover:bg-[#14532d] text-white text-[11px] font-bold rounded-lg transition cursor-pointer active:scale-95 shadow-xs"
                            title="Preview quiz as student"
                          >
                            Start
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Right: Recent Quiz History */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                      Recent Quiz History
                    </h3>
                    <button
                      onClick={() => handleNavClick("quiz-results")}
                      className="bg-white border border-[#E0E2E6] hover:bg-[#F8F9FA] text-[#4B5565] text-xs font-semibold px-3 py-1.5 rounded-lg transition cursor-pointer"
                    >
                      View All ({studentSubmissions.length})
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

                {studentSubmissions.length === 0 ? (
                  <div className="divide-y divide-[#F3F4F6] my-2">
                    {/* Simulated benchmark history for realistic student view preview */}
                    {[
                      {
                        id: "sample-1",
                        title: "Matrix Operations & Inversion",
                        topic: "Linear Algebra",
                        score: "5 / 5",
                        date: "Today, 10:30 AM",
                        passed: true,
                      },
                      {
                        id: "sample-2",
                        title: "Derivatives & Chain Rule",
                        topic: "Calculus 1",
                        score: "4 / 5",
                        date: "Yesterday",
                        passed: true,
                      },
                      {
                        id: "sample-3",
                        title: "Eigenvalues & Eigenvectors",
                        topic: "Linear Algebra",
                        score: "3 / 5",
                        date: "Sep 12, 2026",
                        passed: true,
                      },
                      {
                        id: "sample-4",
                        title: "Fundamental Theorem of Calc",
                        topic: "Calculus 2",
                        score: "2 / 5",
                        date: "Sep 10, 2026",
                        passed: false,
                      },
                    ].map((item) => (
                      <div
                        key={item.id}
                        className="grid grid-cols-5 items-center py-3 px-1 text-xs hover:bg-[#F9FAFB] rounded-lg transition"
                      >
                        <div className="col-span-2 min-w-0 pr-2">
                          <p className="font-bold text-[#1F242D] truncate">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-[#8C93A0]">
                            {item.topic}
                          </p>
                        </div>
                        <div className="text-center font-bold text-[#166534]">
                          {item.score} pts
                        </div>
                        <div className="text-[11px] text-[#6B7280] truncate">
                          {item.date}
                        </div>
                        <div className="text-right">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                              item.passed
                                ? "bg-green-100 text-green-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {item.passed ? "Passed" : "Failed"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="divide-y divide-[#F3F4F6] my-2">
                    {studentSubmissions.slice(0, 4).map((sub) => (
                      <div
                        key={sub.id}
                        className="grid grid-cols-5 items-center py-3 px-1 text-xs hover:bg-[#F9FAFB] rounded-lg transition"
                      >
                        <div className="col-span-2 min-w-0 pr-2">
                          <p className="font-bold text-[#1F242D] truncate">
                            {sub.quizTitle}
                          </p>
                          <p className="text-[11px] text-[#8C93A0]">
                            {sub.topic}
                          </p>
                        </div>
                        <div className="text-center font-bold text-[#166534]">
                          {sub.score} / {sub.totalQuestions} pts
                        </div>
                        <div className="text-[11px] text-[#6B7280] truncate">
                          {sub.submittedAt}
                        </div>
                        <div className="text-right">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                              sub.passed
                                ? "bg-green-100 text-green-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {sub.passed ? "Passed" : "Failed"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 4. STUDENT QUICK ACCESS SOLVERS & TOPICS SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Core Student Solvers Hub Card */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#166534]/10 flex items-center justify-center text-[#166534]">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                        Student Math Solvers Hub
                      </h3>
                    </div>
                    <button
                      onClick={() => handleNavClick("calculators")}
                      className="text-xs font-semibold text-[#166534] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>All 52+ Solvers</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-[#6B7280] mb-4">
                    Students have full access to interactive solvers with step-by-step matrix operations and calculus derivatives.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        title: "Matrix Operations",
                        badge: "Linear Algebra",
                        desc: "Addition, multiplication, scalar scaling",
                      },
                      {
                        title: "Determinant Calculator",
                        badge: "Linear Algebra",
                        desc: "Gauss-Jordan & cofactor expansion",
                      },
                      {
                        title: "Derivative Solver",
                        badge: "Calculus 1",
                        desc: "Power rule, product rule, chain rule",
                      },
                      {
                        title: "Integral Solver",
                        badge: "Calculus 2",
                        desc: "Definite & indefinite integration",
                      },
                    ].map((calc, i) => (
                      <div
                        key={i}
                        onClick={() => handleNavClick("calculators")}
                        className="p-3.5 rounded-xl border border-[#ECEFF3] hover:border-[#166534]/40 hover:bg-[#FDF9FA] transition cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 group-hover:bg-[#166534]/10 group-hover:text-[#166534]">
                            {calc.badge}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#166534] transition-transform group-hover:translate-x-0.5" />
                        </div>
                        <h4 className="text-xs font-bold text-[#1F242D] group-hover:text-[#166534]">
                          {calc.title}
                        </h4>
                        <p className="text-[11px] text-[#8C93A0] mt-0.5 line-clamp-1">
                          {calc.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Curriculum Topics Card */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#166534]/10 flex items-center justify-center text-[#166534]">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#1F242D]">
                        Curriculum Topics Hub
                      </h3>
                    </div>
                    <button
                      onClick={() => handleNavClick("topics")}
                      className="text-xs font-semibold text-[#166534] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Explore Topics</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-[#6B7280] mb-4">
                    Course syllabus and comprehensive step-by-step guides across three math disciplines.
                  </p>

                  <div className="flex flex-col gap-2.5">
                    {[
                      {
                        title: "Linear Algebra Track",
                        count: "23 Solvers • 14 Chapters",
                        desc: "Systems of Linear Equations, Matrix Inverses, Eigenvalues & Eigenvectors",
                      },
                      {
                        title: "Calculus 1 Track",
                        count: "17 Solvers • 12 Chapters",
                        desc: "Limits, Differentiation, Optimization, Curve Sketching",
                      },
                      {
                        title: "Calculus 2 Track",
                        count: "12 Solvers • 10 Chapters",
                        desc: "Integration Techniques, Volumes of Revolution, Infinite Series",
                      },
                    ].map((track, i) => (
                      <div
                        key={i}
                        onClick={() => handleNavClick("topics")}
                        className="p-3 rounded-xl border border-[#ECEFF3] hover:border-[#166534]/40 hover:bg-[#FDF9FA] transition cursor-pointer flex items-center justify-between group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-bold text-[#1F242D] group-hover:text-[#166534]">
                              {track.title}
                            </h4>
                            <span className="text-[10px] font-semibold text-[#8C93A0]">
                              ({track.count})
                            </span>
                          </div>
                          <p className="text-[11px] text-[#6B7280] mt-0.5">
                            {track.desc}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#166534] shrink-0 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. INTERACTIVE STUDENT QUIZ PREVIEW MODAL */}
            <AnimatePresence>
              {previewQuizModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="bg-white rounded-2xl shadow-2xl border border-[#EAEBED] max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
                  >
                    {/* Modal Header */}
                    <div className="p-5 border-b border-[#F0F1F3] flex items-center justify-between bg-[#FAFBFD]">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#166534]/10 text-[#166534]">
                            Student View Simulation
                          </span>
                          <span className="text-[10px] font-medium bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                            {previewQuizModal.topic}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-[#1F242D] mt-1">
                          {previewQuizModal.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setPreviewQuizModal(null)}
                        className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-500 cursor-pointer transition"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-5">
                      {previewQuizSubmitted ? (
                        /* Simulated Completion Screen */
                        <div className="py-8 flex flex-col items-center justify-center text-center">
                          <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-8 h-8" />
                          </div>
                          <h4 className="text-xl font-bold text-[#1F242D] mb-1">
                            Quiz Preview Completed!
                          </h4>
                          <p className="text-xs text-[#6B7280] max-w-md mb-6">
                            This simulated attempt demonstrated the student test-taking and grading experience. No permanent score was saved to any account.
                          </p>
                          <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#ECEFF3] flex items-center gap-6 mb-6">
                            <div className="text-center">
                              <p className="text-[11px] text-[#8C93A0]">Score</p>
                              <p className="text-lg font-bold text-[#166534]">
                                {Object.keys(previewAnswers).length} / {previewQuizModal.questions?.length || previewQuizModal.questionsCount}
                              </p>
                            </div>
                            <div className="w-[1px] h-8 bg-[#EAEBED]" />
                            <div className="text-center">
                              <p className="text-[11px] text-[#8C93A0]">Status</p>
                              <p className="text-lg font-bold text-green-700">
                                Passed
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => {
                                setPreviewQuizSubmitted(false);
                                setPreviewQuestionIndex(0);
                                setPreviewAnswers({});
                                setPreviewShowExplanation({});
                              }}
                              className="px-4 py-2 rounded-xl border border-[#E0E2E6] text-xs font-semibold hover:bg-gray-100 cursor-pointer transition"
                            >
                              Restart Preview
                            </button>
                            <button
                              onClick={() => setPreviewQuizModal(null)}
                              className="px-5 py-2 rounded-xl bg-[#166534] text-white text-xs font-semibold hover:bg-[#14532d] cursor-pointer transition"
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      ) : previewQuizModal.questions && previewQuizModal.questions.length > 0 ? (
                        (() => {
                          const currQ = previewQuizModal.questions[previewQuestionIndex] || previewQuizModal.questions[0];
                          const totalQs = previewQuizModal.questions.length;
                          const qKey = currQ.id || `${previewQuestionIndex}`;
                          const selectedOpt = previewAnswers[qKey];
                          const isShowingExp = previewShowExplanation[qKey];

                          return (
                            <>
                              {/* Question Progress Tracker */}
                              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#F0F1F3]">
                                <span className="font-bold text-[#1F242D]">
                                  Question {previewQuestionIndex + 1} of {totalQs}
                                </span>
                                <span className="text-[#8C93A0] font-medium">
                                  ★ {previewQuizModal.pointsPerItem || 1} pt per item
                                </span>
                              </div>

                              {/* Question Prompt */}
                              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#ECEFF3]">
                                <p className="text-sm font-semibold text-[#1F242D] leading-relaxed">
                                  {currQ.prompt || "Question prompt not specified."}
                                </p>
                              </div>

                              {/* Options */}
                              <div className="flex flex-col gap-2.5">
                                {[
                                  { key: "A", text: currQ.optionA },
                                  { key: "B", text: currQ.optionB },
                                  { key: "C", text: currQ.optionC },
                                  { key: "D", text: currQ.optionD },
                                ]
                                  .filter((opt) => opt.text && opt.text.trim())
                                  .map((opt) => {
                                    const isSelected = selectedOpt === opt.key;
                                    return (
                                      <button
                                        key={opt.key}
                                        onClick={() =>
                                          setPreviewAnswers((prev) => ({
                                            ...prev,
                                            [qKey]: opt.key,
                                          }))
                                        }
                                        className={`p-3.5 rounded-xl border text-left text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                                          isSelected
                                            ? "border-[#166534] bg-[#F0FDF4] text-[#166534]"
                                            : "border-[#EAEBED] hover:border-gray-300 hover:bg-[#FAFBFD] text-[#333]"
                                        }`}
                                      >
                                        <div className="flex items-center gap-3">
                                          <span
                                            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                                              isSelected
                                                ? "bg-[#166534] text-white"
                                                : "bg-gray-100 text-gray-600"
                                            }`}
                                          >
                                            {opt.key}
                                          </span>
                                          <span>{opt.text}</span>
                                        </div>
                                        {isSelected && (
                                          <Check className="w-4 h-4 text-[#166534]" />
                                        )}
                                      </button>
                                    );
                                  })}
                              </div>

                              {/* Step-by-Step Solution / Explanation Reveal */}
                              <div className="pt-2">
                                <button
                                  onClick={() =>
                                    setPreviewShowExplanation((prev) => ({
                                      ...prev,
                                      [qKey]: !prev[qKey],
                                    }))
                                  }
                                  className="text-xs font-semibold text-[#166534] hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                                  <span>
                                    {isShowingExp
                                      ? "Hide Answer & Explanation"
                                      : "Show Answer Key & Explanation"}
                                  </span>
                                </button>

                                {isShowingExp && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="mt-2.5 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900"
                                  >
                                    <p className="font-bold mb-1">
                                      Correct Answer: {currQ.correct || "A"}
                                    </p>
                                    <p className="text-[11px] leading-relaxed text-amber-800">
                                      {currQ.explanation ||
                                        "No detailed solution step written for this question."}
                                    </p>
                                  </motion.div>
                                )}
                              </div>
                            </>
                          );
                        })()
                      ) : (
                        <div className="py-8 text-center text-xs text-gray-500">
                          This quiz has no individual questions configured yet.
                        </div>
                      )}
                    </div>

                    {/* Modal Footer Controls */}
                    {!previewQuizSubmitted && previewQuizModal.questions && previewQuizModal.questions.length > 0 && (
                      <div className="p-4 border-t border-[#F0F1F3] bg-[#FAFBFD] flex items-center justify-between">
                        <button
                          disabled={previewQuestionIndex === 0}
                          onClick={() => setPreviewQuestionIndex((prev) => Math.max(0, prev - 1))}
                          className="px-3.5 py-1.5 rounded-lg border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        >
                          Previous
                        </button>

                        <div className="flex items-center gap-2">
                          {previewQuestionIndex < (previewQuizModal.questions.length - 1) ? (
                            <button
                              onClick={() =>
                                setPreviewQuestionIndex((prev) =>
                                  Math.min(previewQuizModal.questions.length - 1, prev + 1)
                                )
                              }
                              className="px-4 py-1.5 rounded-lg bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold cursor-pointer transition"
                            >
                              Next
                            </button>
                          ) : (
                            <button
                              onClick={() => setPreviewQuizSubmitted(true)}
                              className="px-4 py-1.5 rounded-lg bg-green-700 hover:bg-green-800 text-white text-xs font-semibold cursor-pointer transition"
                            >
                              Finish Preview
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

        {/* ========================================================================= */}
        {/* VIEW: STUDENT QUIZZES (Dedicated Full-Page Student Quizzes View)           */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          {activeNav === "student-quizzes" && (
            <motion.div
              key="student-quizzes-view"
              initial={{ opacity: 0, y: 15, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.99 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-7 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-16"
            >
            {/* Top Preview Banner */}
            <div className="bg-gradient-to-r from-[#166534]/10 via-[#15803d]/5 to-white border border-[#166534]/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-[#166534] to-[#14532d] flex items-center justify-center text-white shadow-md shadow-[#166534]/25 shrink-0 border border-white/20">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-base sm:text-lg font-bold text-[#1F242D]">
                      Quizzes & Practice
                    </h2>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#166534]/15 text-[#166534] border border-[#166534]/25">
                      Student View
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    Browse and preview all published quizzes as a student would see them
                  </p>
                </div>
              </div>

            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-[#ECEFF3] rounded-[20px] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_6px_16px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-[#8C93A0]">Total Quizzes</span>
                  <span className="text-xl font-extrabold text-[#1F242D] tracking-tight">{quizzes.length}</span>
                </div>
              </div>
              <div className="bg-white border border-[#ECEFF3] rounded-[20px] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_6px_16px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center">
                  <FileQuestion className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-[#8C93A0]">Total Questions</span>
                  <span className="text-xl font-extrabold text-[#1F242D] tracking-tight">{quizzes.reduce((sum, q) => sum + (q.questionsCount || q.questions?.length || 0), 0)}</span>
                </div>
              </div>
              <div className="bg-white border border-[#ECEFF3] rounded-[20px] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_6px_16px_rgba(22,101,52,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-[#8C93A0]">Avg Points/Item</span>
                  <span className="text-xl font-extrabold text-[#1F242D] tracking-tight">
                    {quizzes.length > 0 ? Math.round(quizzes.reduce((sum, q) => sum + (q.pointsPerItem || 1), 0) / quizzes.length) : 0} pts
                  </span>
                </div>
              </div>
            </div>

            {/* Quiz Cards Grid */}
            <div className="bg-white border border-[#ECEFF3] rounded-[24px] p-5 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base sm:text-lg font-bold text-[#1F242D]">
                    Available Quizzes
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#166534]/10 text-[#166534]">
                    {quizzes.length} Published
                  </span>
                </div>
              </div>

              {quizzes.length === 0 ? (
                <div className="py-16 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center mb-4">
                    <HelpCircle className="w-9 h-9 text-[#166534] stroke-[1.5]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1F242D] mb-2">
                    No Quizzes Published Yet
                  </h4>
                  <p className="text-sm text-[#6B7280] max-w-md mb-5">
                    Students will see quizzes here once the admin publishes them via the Add Quiz section.
                  </p>
                  <button
                    onClick={() => handleNavClick("add-quiz")}
                    className="bg-[#166534] hover:bg-[#14532d] text-white text-sm font-bold px-5 py-2.5 rounded-xl cursor-pointer transition shadow-sm"
                  >
                    <Plus className="w-4 h-4 inline mr-1.5" />
                    Create a Quiz
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {quizzes.map((quiz) => (
                    <div
                      key={quiz.id}
                      className="group relative bg-[#FAFBFD] hover:bg-white border border-[#ECEFF3] hover:border-[#166534]/30 rounded-2xl p-5 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(22,101,52,0.08)] flex flex-col justify-between"
                    >
                      {/* Quiz Header */}
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#166534]/10 text-[#166534]">
                              {quiz.topic}
                            </span>
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                              {quiz.questionType === "identification" ? "Identification" : "Multiple Choice"}
                            </span>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-[#166534]/8 group-hover:bg-[#166534]/15 flex items-center justify-center transition">
                            <FileText className="w-4 h-4 text-[#166534]" />
                          </div>
                        </div>

                        <h4 className="text-sm font-bold text-[#1F242D] group-hover:text-[#166534] transition mb-1.5 line-clamp-2">
                          {quiz.title}
                        </h4>

                        <p className="text-[11px] text-[#8C93A0] mb-4">
                          Created {quiz.createdAt}
                        </p>

                        {/* Quiz Info Row */}
                        <div className="flex items-center gap-3 text-[11px] text-[#6B7280] mb-4 flex-wrap">
                          <div className="flex items-center gap-1">
                            <ListOrdered className="w-3.5 h-3.5 text-[#166534]" />
                            <span className="font-semibold">{quiz.questionsCount || quiz.questions?.length || 0} Questions</span>
                          </div>
                          <span className="text-[#D1D5DB]">•</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-500" />
                            <span className="font-semibold">{quiz.pointsPerItem || 1} pt/item</span>
                          </div>
                          <span className="text-[#D1D5DB]">•</span>
                          <div className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-blue-500" />
                            <span className="font-semibold">{quiz.attempts} attempts</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handleStartStudentPreviewQuiz(quiz)}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] hover:from-[#166534] hover:to-[#052e16] text-white text-xs font-bold transition-all duration-200 cursor-pointer shadow-[0_4px_12px_rgba(22,101,52,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] active:scale-[0.98] flex items-center justify-center gap-2 border border-white/10"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Start Quiz</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Interactive Student Quiz Preview Modal (reuse from student-overview) */}
            <AnimatePresence>
              {previewQuizModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="bg-white rounded-2xl shadow-2xl border border-[#EAEBED] max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
                  >
                    {/* Modal Header */}
                    <div className="p-5 border-b border-[#F0F1F3] flex items-center justify-between bg-[#FAFBFD]">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#166534]/10 text-[#166534]">
                            Student View Simulation
                          </span>
                          <span className="text-[10px] font-medium bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                            {previewQuizModal.topic}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-[#1F242D] mt-1">
                          {previewQuizModal.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setPreviewQuizModal(null)}
                        className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-500 cursor-pointer transition"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-5">
                      {previewQuizSubmitted ? (
                        <div className="py-8 flex flex-col items-center justify-center text-center">
                          <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-8 h-8" />
                          </div>
                          <h4 className="text-xl font-bold text-[#1F242D] mb-1">
                            Quiz Preview Completed!
                          </h4>
                          <p className="text-xs text-[#6B7280] max-w-md mb-6">
                            This simulated attempt demonstrated the student test-taking and grading experience. No permanent score was saved.
                          </p>
                          <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#ECEFF3] flex items-center gap-6 mb-6">
                            <div className="text-center">
                              <p className="text-[11px] text-[#8C93A0]">Score</p>
                              <p className="text-lg font-bold text-[#166534]">
                                {Object.keys(previewAnswers).length} / {previewQuizModal.questions?.length || previewQuizModal.questionsCount}
                              </p>
                            </div>
                            <div className="w-[1px] h-8 bg-[#EAEBED]" />
                            <div className="text-center">
                              <p className="text-[11px] text-[#8C93A0]">Status</p>
                              <p className="text-lg font-bold text-green-700">Passed</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => {
                                setPreviewQuizSubmitted(false);
                                setPreviewQuestionIndex(0);
                                setPreviewAnswers({});
                                setPreviewShowExplanation({});
                              }}
                              className="px-4 py-2 rounded-xl border border-[#E0E2E6] text-xs font-semibold hover:bg-gray-100 cursor-pointer transition"
                            >
                              Restart Preview
                            </button>
                            <button
                              onClick={() => setPreviewQuizModal(null)}
                              className="px-5 py-2 rounded-xl bg-[#166534] text-white text-xs font-semibold hover:bg-[#14532d] cursor-pointer transition"
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      ) : previewQuizModal.questions && previewQuizModal.questions.length > 0 ? (
                        (() => {
                          const currQ = previewQuizModal.questions[previewQuestionIndex] || previewQuizModal.questions[0];
                          const totalQs = previewQuizModal.questions.length;
                          const qKey = currQ.id || `${previewQuestionIndex}`;
                          const selectedOpt = previewAnswers[qKey];
                          const isShowingExp = previewShowExplanation[qKey];

                          return (
                            <>
                              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#F0F1F3]">
                                <span className="font-bold text-[#1F242D]">
                                  Question {previewQuestionIndex + 1} of {totalQs}
                                </span>
                                <span className="text-[#8C93A0] font-medium">
                                  ★ {previewQuizModal.pointsPerItem || 1} pt per item
                                </span>
                              </div>

                              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#ECEFF3]">
                                <p className="text-sm font-semibold text-[#1F242D] leading-relaxed">
                                  {currQ.prompt || "Question prompt not specified."}
                                </p>
                              </div>

                              <div className="flex flex-col gap-2.5">
                                {[
                                  { key: "A", text: currQ.optionA },
                                  { key: "B", text: currQ.optionB },
                                  { key: "C", text: currQ.optionC },
                                  { key: "D", text: currQ.optionD },
                                ]
                                  .filter((opt) => opt.text && opt.text.trim())
                                  .map((opt) => {
                                    const isSelected = selectedOpt === opt.key;
                                    return (
                                      <button
                                        key={opt.key}
                                        onClick={() =>
                                          setPreviewAnswers((prev) => ({
                                            ...prev,
                                            [qKey]: opt.key,
                                          }))
                                        }
                                        className={`p-3.5 rounded-xl border text-left text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                                          isSelected
                                            ? "border-[#166534] bg-[#F0FDF4] text-[#166534]"
                                            : "border-[#EAEBED] hover:border-gray-300 hover:bg-[#FAFBFD] text-[#333]"
                                        }`}
                                      >
                                        <div className="flex items-center gap-3">
                                          <span
                                            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                                              isSelected
                                                ? "bg-[#166534] text-white"
                                                : "bg-gray-100 text-gray-600"
                                            }`}
                                          >
                                            {opt.key}
                                          </span>
                                          <span>{opt.text}</span>
                                        </div>
                                        {isSelected && (
                                          <Check className="w-4 h-4 text-[#166534]" />
                                        )}
                                      </button>
                                    );
                                  })}
                              </div>

                              <div className="pt-2">
                                <button
                                  onClick={() =>
                                    setPreviewShowExplanation((prev) => ({
                                      ...prev,
                                      [qKey]: !prev[qKey],
                                    }))
                                  }
                                  className="text-xs font-semibold text-[#166534] hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                                  <span>
                                    {isShowingExp
                                      ? "Hide Answer & Explanation"
                                      : "Show Answer Key & Explanation"}
                                  </span>
                                </button>

                                {isShowingExp && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="mt-2.5 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900"
                                  >
                                    <p className="font-bold mb-1">
                                      Correct Answer: {currQ.correct || "A"}
                                    </p>
                                    <p className="text-[11px] leading-relaxed text-amber-800">
                                      {currQ.explanation || "No detailed solution step written for this question."}
                                    </p>
                                  </motion.div>
                                )}
                              </div>
                            </>
                          );
                        })()
                      ) : (
                        <div className="py-8 text-center text-xs text-gray-500">
                          This quiz has no individual questions configured yet.
                        </div>
                      )}
                    </div>

                    {/* Modal Footer Controls */}
                    {!previewQuizSubmitted && previewQuizModal.questions && previewQuizModal.questions.length > 0 && (
                      <div className="p-4 border-t border-[#F0F1F3] bg-[#FAFBFD] flex items-center justify-between">
                        <button
                          disabled={previewQuestionIndex === 0}
                          onClick={() => setPreviewQuestionIndex((prev) => Math.max(0, prev - 1))}
                          className="px-3.5 py-1.5 rounded-lg border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        >
                          Previous
                        </button>

                        <div className="flex items-center gap-2">
                          {previewQuestionIndex < (previewQuizModal.questions.length - 1) ? (
                            <button
                              onClick={() =>
                                setPreviewQuestionIndex((prev) =>
                                  Math.min(previewQuizModal.questions.length - 1, prev + 1)
                                )
                              }
                              className="px-4 py-1.5 rounded-lg bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold cursor-pointer transition"
                            >
                              Next
                            </button>
                          ) : (
                            <button
                              onClick={() => setPreviewQuizSubmitted(true)}
                              className="px-4 py-1.5 rounded-lg bg-green-700 hover:bg-green-800 text-white text-xs font-semibold cursor-pointer transition"
                            >
                              Finish Preview
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* VIEW A: MAIN DASHBOARD VIEW                                               */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          {activeNav === "dashboard" && (
            <motion.div
              key="admin-dashboard-view"
              initial={{ opacity: 0, y: 15, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.99 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-7 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-12"
            >
            {/* 4. STATS METRIC CARDS ROW */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {/* Card 1: Total Quizzes */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DFE3E8] transition-all duration-200 flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#166534]/10 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-white stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Total Quizzes
                  </span>
                  <span className="text-2xl sm:text-[1.75rem] font-black text-[#111827] tracking-tight leading-tight mt-0.5">
                    {totalQuizzes}
                  </span>
                </div>
              </div>

              {/* Card 2: Total Students */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DFE3E8] transition-all duration-200 flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#166534]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Total Students
                  </span>
                  <span className="text-2xl sm:text-[1.75rem] font-black text-[#111827] tracking-tight leading-tight mt-0.5">
                    {totalStudents}
                  </span>
                </div>
              </div>

              {/* Card 3: Total Attempts */}
              <div className="bg-white border border-[#ECEFF3] rounded-[22px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#DFE3E8] transition-all duration-200 flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] shrink-0 shadow-[0_8px_20px_rgba(22,101,52,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] ring-4 ring-[#166534]/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white stroke-[2.2]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Total Attempts
                  </span>
                  <span className="text-2xl sm:text-[1.75rem] font-black text-[#111827] tracking-tight leading-tight mt-0.5">
                    {totalAttempts}
                  </span>
                </div>
              </div>

            </section>

            {/* 5. MIDDLE ROW: QUIZ OVERVIEW & RECENT QUIZ ACTIVITY */}
            <section className="hidden">
              {/* Left Card: Quiz Overview (Chart) */}
              <div className="lg:col-span-7 bg-white border border-[#ECEFF3] rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#166534]" />
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
                                  ? "bg-[#166534]/10 text-[#166534] font-bold"
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
                      stroke="#166534"
                      strokeWidth="2.5"
                      points="60,175 140,175 220,175 300,175 380,175 460,175"
                    />
                    {/* Point circles for Attempts */}
                    <circle cx="60" cy="175" r="3.5" fill="#166534" />
                    <circle cx="140" cy="175" r="3.5" fill="#166534" />
                    <circle cx="220" cy="175" r="3.5" fill="#166534" />
                    <circle cx="300" cy="175" r="3.5" fill="#166534" />
                    <circle cx="380" cy="175" r="3.5" fill="#166534" />
                    <circle cx="460" cy="175" r="3.5" fill="#166534" />
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
                    <Clock className="w-4 h-4 text-[#166534]" />
                    <h3 className="text-base font-bold text-[#111827]">
                      Recent Quiz Activity
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleNavClick("quiz-results")}
                    className="text-xs font-bold text-[#166534] hover:underline cursor-pointer"
                  >
                    View All
                  </button>
                </div>

                {/* Activity List / Empty State */}
                <div className="flex-1 flex flex-col justify-center py-2">
                  {activities.length === 0 ? (
                    <div className="flex flex-col items-center py-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#166534] mb-3.5">
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
                            <span className="text-sm font-bold text-[#166534]">
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
                    className="w-full py-2 bg-[#F9FAFB] hover:bg-[#166534]/10 border border-[#E5E7EB] hover:border-[#166534]/30 rounded-xl text-xs font-bold text-[#166534] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create New Quiz</span>
                  </button>
                </div>
              </div>
            </section>

            {/* 6. RECENT QUIZ TAKERS */}
            <section className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
                  Recent Quiz Takers
                </h3>
                <button
                  type="button"
                  onClick={() => handleNavClick("quiz-results")}
                  className="text-xs font-bold text-[#166534] dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                      <th className="pb-3 px-3">Name</th>
                      <th className="pb-3 px-3">Quiz</th>
                      <th className="pb-3 px-3 text-right">Submitted</th>
                    </tr>
                  </thead>
                  {activities.length === 0 ? (
                    <tbody>
                      <tr>
                        <td colSpan={3} className="py-10 text-center">
                          <div className="flex flex-col items-center">
                            <Users className="w-8 h-8 text-[#166534] dark:text-emerald-400 mb-3" />
                            <h4 className="text-sm font-bold text-[#111827] dark:text-slate-100">
                              No quiz takers yet.
                            </h4>
                            <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1">
                              Recent quiz takers will appear here.
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                      {activities.slice(0, 10).map((act) => (
                        <tr
                          key={act.id}
                          className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150"
                        >
                          <td className="py-3.5 px-3 font-semibold text-[#111827] dark:text-slate-100">
                            {act.studentName}
                          </td>
                          <td className="py-3.5 px-3 text-xs text-[#4B5563] dark:text-slate-300">
                            {act.quizTitle}
                          </td>
                          <td className="py-3.5 px-3 text-right text-xs text-[#6B7280] dark:text-slate-400">
                            {act.submittedAt}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            </section>
            </motion.div>
          )}
        </AnimatePresence>

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
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                        Mathematical Solvers & Tools
                      </h2>
                    </div>

                    {/* Calculator Quick Search */}
                    <div className="w-full lg:w-72 relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA1B0] pointer-events-none" />
                      <input
                        type="text"
                        value={calcSearchQuery}
                        onChange={(e) => setCalcSearchQuery(e.target.value)}
                        placeholder="Filter calculators..."
                        className="w-full pl-10 pr-4 py-2.5 bg-[#F9FAFB] border border-[#E2E4E8] rounded-xl text-sm focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
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
                          ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
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
                          ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
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
                          ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
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
                        className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#166534]/40 hover:shadow-md transition-all duration-200 group"
                      >
                        <div>
                          {/* Header with badge */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#166534] bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-md truncate max-w-[200px]">
                              {calc.badge}
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-[#F8F9FA] flex items-center justify-center text-[#4B5563] group-hover:bg-[#166534] group-hover:text-white transition-colors shrink-0">
                              <Calculator className="w-4 h-4" />
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-base font-bold text-[#111827] group-hover:text-[#166534] transition-colors line-clamp-1">
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
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#166534] hover:bg-[#14532d] text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer active:scale-95 group/btn"
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
                      <div className="w-14 h-14 rounded-full bg-green-50 text-[#166534] flex items-center justify-center mb-3">
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
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] hover:bg-[#166534]/10 border border-[#E5E7EB] hover:border-[#166534]/30 rounded-xl text-xs font-bold text-[#166534] transition-all cursor-pointer active:scale-95 group"
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
                      <span className="font-bold text-[#166534] truncate max-w-[240px]">
                        {activeCalculator.title}
                      </span>
                    </div>
                  </div>

                  {/* Calculator Title & Info Header */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#166534] bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-md">
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
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                        Course Topics & Modules
                      </h2>
                    </div>

                    {/* Topic Search Box */}
                    <div className="w-full lg:w-72 relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9AA1B0] pointer-events-none" />
                      <input
                        type="text"
                        value={topicSearchQuery}
                        onChange={(e) => setTopicSearchQuery(e.target.value)}
                        placeholder="Search all topics & lessons..."
                        className="w-full pl-10 pr-4 py-2.5 bg-[#F9FAFB] border border-[#E2E4E8] rounded-xl text-sm focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
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
                          ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
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
                          ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
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
                          ? "bg-[#166534] text-white shadow-md shadow-[#166534]/25"
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
                        className="bg-white border border-[#EAEBED] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#166534]/40 hover:shadow-md transition-all duration-200 group"
                      >
                        <div>
                          {/* Header with chapter badge */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[0.68rem] font-bold text-[#166534] bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-md truncate max-w-[200px]">
                              {top.chapter}
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-[#F8F9FA] flex items-center justify-center text-[#4B5563] group-hover:bg-[#166534] group-hover:text-white transition-colors shrink-0">
                              <BookOpen className="w-4 h-4" />
                            </div>
                          </div>

                          {/* Topic Image Thumbnail */}
                          {top.image && (
                            <div className="w-full h-36 rounded-xl overflow-hidden mb-3 bg-gray-50">
                              <img
                                src={top.image}
                                alt={top.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}

                          {/* Title */}
                          <h3 className="text-base font-bold text-[#111827] group-hover:text-[#166534] transition-colors line-clamp-2">
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
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#166534] hover:bg-[#14532d] text-white rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer active:scale-95 group/btn"
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
                      <div className="w-14 h-14 rounded-full bg-green-50 text-[#166534] flex items-center justify-center mb-3">
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

              {/* SUB-VIEW 2: DEDICATED TOPIC DETAIL & STUDY PAGE */}
              {activeTopic && (
                <motion.div
                  key="topic-detail-view"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0 }}
                  className={`p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-20 transition-[padding] duration-300 ease-in-out ${
                    isTopicCalculatorOpen ? "pr-6 lg:pr-[30rem] xl:pr-[34rem]" : ""
                  }`}
                >
                  {/* Top Navigation & Breadcrumb Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-[#EAEBED] rounded-2xl p-4 shadow-xs">
                    <button
                      type="button"
                      onClick={() => setActiveTopic(null)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] hover:bg-[#166534]/10 border border-[#E5E7EB] hover:border-[#166534]/30 rounded-xl text-xs font-bold text-[#166534] transition-all cursor-pointer active:scale-95 group"
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
                      <span className="font-bold text-[#166534] truncate max-w-[240px]">
                        {activeTopic.title}
                      </span>
                    </div>
                  </div>

                  {/* Topic Title & Meta Banner */}
                  <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#166534] bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-md">
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

                    {/* Interactive Calculator Button inside banner */}
                    {!isTopicCalculatorOpen && (() => {
                      const isLinear = activeTopic.category === "linear-algebra";
                      const calcDef = isLinear ? getLinearAlgebraDefinitionForTopic(activeTopic) : getCalculusDefinitionForTopic(activeTopic);
                      return (
                        <div className="relative group/topcalc flex items-center shrink-0 self-start sm:self-center">
                          <button
                            type="button"
                            onClick={() => setIsTopicCalculatorOpen(true)}
                            className="relative flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#166534] hover:bg-[#14532d] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 group/btn"
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
                              <Sparkles className="w-3 h-3 text-[#4ADE80]" />
                              <span>Launch <strong>{calcDef.name}</strong></span>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Main Lesson Content */}
                  <div className="flex flex-col gap-6">
                    {/* Topic Hero Image */}
                    {activeTopic.image && (
                      <div className="w-full max-h-80 rounded-3xl overflow-hidden bg-[#F8F9FA] border border-[#EAEBED] flex items-center justify-center p-2">
                        <img
                          src={activeTopic.image}
                          alt={activeTopic.title}
                          className="max-h-76 w-auto object-contain rounded-2xl"
                        />
                      </div>
                    )}

                    {/* Overview & Theory Card */}
                    <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs">
                      <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#F3F4F6]">
                        <div className="w-8 h-8 rounded-lg bg-green-50 text-[#166534] flex items-center justify-center">
                          <BookMarked className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-bold text-[#111827]">
                          Theoretical Overview & Fundamentals
                        </h3>
                      </div>
                      <div className="text-sm text-[#374151] leading-relaxed space-y-3">
                        <TopicContentRenderer content={activeTopic.details} />
                      </div>
                    </div>

                    {/* Worked Example Problems Card */}
                    {activeTopic.examples && activeTopic.examples.length > 0 && (
                      <div className="bg-white border border-[#EAEBED] rounded-3xl p-6 sm:p-8 shadow-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-3 border-b border-[#F3F4F6] gap-2">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-green-50 text-[#166534] flex items-center justify-center">
                              <HelpCircle className="w-4 h-4" />
                            </div>
                            <h3 className="text-base font-bold text-[#111827]">
                              Step-by-Step Worked Problems ({activeTopic.examples.length})
                            </h3>
                            {activeTopic.category === "linear-algebra" && (() => {
                              const laCalc = getLinearAlgebraDefinitionForTopic(activeTopic);
                              return (
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#166534] bg-[#ECFDF5] border border-[#dcfce7] px-2.5 py-0.5 rounded-md">
                                  <span>{activeTopic.title}</span>
                                  <span>→</span>
                                  <span>{laCalc.name}</span>
                                </span>
                              );
                            })()}
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
                                  <span className="px-2 py-0.5 text-[0.7rem] font-bold text-[#166534] bg-white border border-green-200 rounded-md shrink-0 mt-0.5">
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
                                    className="px-3.5 py-1.5 rounded-lg bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold shadow-xs transition flex items-center gap-1.5 cursor-pointer active:scale-95"
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
                      const isLinear = activeTopic.category === "linear-algebra";
                      const calcDef = isLinear ? getLinearAlgebraDefinitionForTopic(activeTopic) : getCalculusDefinitionForTopic(activeTopic);
                      return (
                        <div className="fixed inset-y-0 right-0 z-50 overflow-hidden flex justify-end w-full sm:w-auto pointer-events-none">
                          {/* Slide-in Drawer - No backdrop */}
                          <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 280 }}
                            className="relative w-full sm:w-[28rem] lg:w-[32rem] bg-[#F8F9FA] h-full shadow-2xl z-10 flex flex-col overflow-hidden border-l border-[#EAEBED] pointer-events-auto"
                          >
                            {/* Drawer Header */}
                            <div className="bg-white border-b border-[#EAEBED] px-6 py-4 flex items-center justify-between shadow-xs shrink-0">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center shadow-xs">
                                  <Calculator className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-base sm:text-lg font-black text-[#111827]">
                                      {calcDef.name}
                                    </h3>
                                    <span className="text-xs font-bold text-[#166534] bg-white border border-[#F8D7DA] px-2.5 py-0.5 rounded-lg">
                                      {calcDef.badge}
                                    </span>
                                  </div>
                                  <p className="text-xs text-[#6B7280] flex items-center gap-1.5 flex-wrap">
                                    <span>{activeTopic.title}</span>
                                    <span>→</span>
                                    <span className="font-semibold text-[#166534]">{calcDef.name}</span>
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
                              <div className="bg-[#FFF0F2] border-b border-[#F8D7DA] px-6 py-3 flex items-center justify-between text-xs text-[#166534] shrink-0">
                                <div className="flex items-center gap-2">
                                  <Sparkles className="w-4 h-4 text-[#166534] shrink-0" />
                                  <span>
                                    <strong>Loaded Problem #{loadedTopicExample.index + 1}:</strong> &ldquo;{loadedTopicExample.text}&rdquo; (Copied to clipboard)
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => setLoadedTopicExample(null)}
                                  className="p-1 hover:bg-[#F8D7DA] rounded-md transition text-[#166534] cursor-pointer"
                                  title="Clear problem"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            )}

                            {/* Scrollable Calculator Body */}
                            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                              <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-xs">
                                {isLinear ? (
                                  <div>{(calcDef as any).component}</div>
                                ) : (
                                  <CalculusCalculator
                                    key={`${(calcDef as any).id}-${topicCalcKey}`}
                                    definition={
                                      loadedTopicExample
                                        ? { ...calcDef, example: loadedTopicExample.text } as any
                                        : calcDef as any
                                    }
                                  />
                                )}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })()}
                  </AnimatePresence>
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#15803d] via-[#166534] to-[#14532d] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#166534]/25 border border-white/20">
                    <Wand2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                      Generate & Publish Quiz
                    </h2>
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
                        ? "bg-[#166534] text-white shadow-xs"
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
                        ? "bg-[#166534] text-white shadow-xs"
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
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:border-[#166534] bg-white hover:bg-[#FCE8EB]/40 text-gray-700 hover:text-[#166534] text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs"
                    title="Published Quizzes"
                  >
                    <ClipboardList className="w-4 h-4 text-[#166534] shrink-0" />
                    <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap">
                      Published Quizzes
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-[#166534] text-white shadow-xs shrink-0">
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
                  <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
                          Step 1: Select Math Category
                        </h3>
                        <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-0.5">
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
                            ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534] shadow-xs"
                            : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 hover:bg-gray-50/70 dark:hover:bg-slate-700/50 bg-white dark:bg-slate-800/60"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
                            <Layers className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                            28 Topics
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#111827] dark:text-slate-100">
                          Linear Algebra
                        </h4>
                        <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-1 leading-snug">
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
                            ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534] shadow-xs"
                            : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 hover:bg-gray-50/70 dark:hover:bg-slate-700/50 bg-white dark:bg-slate-800/60"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                            30+ Topics
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#111827] dark:text-slate-100">
                          Calculus 1
                        </h4>
                        <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-1 leading-snug">
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
                            ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534] shadow-xs"
                            : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 hover:bg-gray-50/70 dark:hover:bg-slate-700/50 bg-white dark:bg-slate-800/60"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
                            <Zap className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded">
                            30+ Topics
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#111827] dark:text-slate-100">
                          Calculus 2
                        </h4>
                        <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-1 leading-snug">
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
                          className="px-2.5 py-1 text-xs font-bold text-[#166534] hover:bg-green-50 rounded-lg transition cursor-pointer"
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
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#166534] focus:border-[#166534]"
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
                                ? "border-[#166534] bg-[#FCE8EB]/30 ring-1 ring-[#166534]"
                                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 bg-white"
                            }`}
                          >
                            <div className="pt-0.5 text-[#166534]">
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4 text-[#166534]" />
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
                  <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-5">
                    <div>
                      <h3 className="text-base font-bold text-[#111827] dark:text-slate-100">
                        Step 3: Question Sections
                      </h3>
                      <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-0.5">
                        Configure each question type section. Set the items and points, pick a type, then click
                        <span className="font-semibold text-[#166534]"> + Add Section</span>. Add as many sections as you like!
                      </p>
                    </div>

                    {/* ── Saved Sections List ── */}
                    {questionTypeSections.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-[#374151] uppercase tracking-wide">Saved Sections ({questionTypeSections.length})</p>
                          <button
                            type="button"
                            onClick={() => setQuestionTypeSections([])}
                            className="text-[10px] font-semibold text-red-500 hover:text-red-700 transition cursor-pointer"
                          >
                            Clear All
                          </button>
                        </div>
                        <div className="flex flex-col gap-2">
                          {questionTypeSections.map((sec, idx) => {
                            const typeIcons: Record<string, React.ReactNode> = {
                              multiple_choice: <FileQuestion className="w-3.5 h-3.5" />,
                              identification: <Lightbulb className="w-3.5 h-3.5" />,
                              enumeration: <ListOrdered className="w-3.5 h-3.5" />,
                              problem_solving: <Calculator className="w-3.5 h-3.5" />,
                            };
                            const typeLabels: Record<string, string> = {
                              multiple_choice: "Multiple Choice",
                              identification: "Identification",
                              enumeration: "Enumeration",
                              problem_solving: "Problem Solving",
                            };
                            const sectionTotal = sec.itemCount * sec.pointsPerItem;
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-3 bg-gradient-to-r from-[#f0fdf4] to-[#dcfce7] border border-[#bbf7d0] rounded-2xl px-4 py-2.5"
                              >
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#166534] text-white text-[10px] font-bold flex items-center justify-center">
                                  {idx + 1}
                                </span>
                                <div className="text-[#166534] flex-shrink-0">{typeIcons[sec.type]}</div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-bold text-[#166534] truncate">{typeLabels[sec.type]}</p>
                                  <p className="text-[10px] text-[#15803d]/70">{sec.itemCount} items · {sec.pointsPerItem} {sec.pointsPerItem === 1 ? "pt" : "pts"}/item · {sectionTotal} pts total</p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => setQuestionTypeSections((prev) => prev.filter((_, i) => i !== idx))}
                                  className="flex-shrink-0 p-1 rounded-lg hover:bg-red-100 text-red-400 hover:text-red-600 transition cursor-pointer"
                                  title="Remove section"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                        {/* Overall total */}
                        <div className="flex items-center justify-between px-1 pt-1">
                          <p className="text-xs text-gray-500">
                            Total: <span className="font-bold text-[#111827]">{questionTypeSections.reduce((s, sec) => s + sec.itemCount, 0)} questions</span>
                          </p>
                          <p className="text-xs text-gray-500">
                            Grand Total: <span className="font-bold text-[#166534]">{questionTypeSections.reduce((s, sec) => s + sec.itemCount * sec.pointsPerItem, 0)} pts</span>
                          </p>
                        </div>
                      </div>
                    )}

                    {/* ── Divider when sections exist ── */}
                    {questionTypeSections.length > 0 && (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Add Another Section</span>
                        <div className="flex-1 h-px bg-gray-200" />
                      </div>
                    )}

                    {/* Number of Items Selector */}
                    <div>
                      <label className="block text-xs font-bold text-[#374151] dark:text-slate-300 mb-2 uppercase tracking-wide">
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
                                ? "bg-[#166534] text-white shadow-xs"
                                : "bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-700 dark:text-slate-200"
                            }`}
                          >
                            {cnt} Items
                          </button>
                        ))}

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">Custom:</span>
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
                            className="w-20 px-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl text-xs font-bold text-gray-800 dark:text-slate-100 text-center focus:outline-none focus:ring-2 focus:ring-[#166534] focus:bg-white dark:focus:bg-slate-700 transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Points Per Item Selector */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold text-[#374151] dark:text-slate-300 uppercase tracking-wide">
                          Points Per Item
                        </label>
                        <span className="text-xs font-semibold text-[#166534] bg-green-50 px-2.5 py-0.5 rounded-full border border-green-100">
                          Section Total: {(typeof generatorItemCount === "number" ? generatorItemCount : 1) * (typeof generatorPointsPerItem === "number" ? generatorPointsPerItem : 1)} pts
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
                                ? "bg-[#166534] text-white shadow-xs"
                                : "bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-700 dark:text-slate-200"
                            }`}
                          >
                            {pts} {pts === 1 ? "pt" : "pts"}
                          </button>
                        ))}

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 dark:text-slate-400 font-medium">Custom:</span>
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
                            className="w-20 px-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl text-xs font-bold text-gray-800 dark:text-slate-100 text-center focus:outline-none focus:ring-2 focus:ring-[#166534] focus:bg-white dark:focus:bg-slate-700 transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Question Type 4-card selector */}
                    <div>
                      <label className="block text-xs font-bold text-[#374151] dark:text-slate-300 mb-2 uppercase tracking-wide">
                        Question Type for This Section
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {/* Option 1: Multiple Choice */}
                        <button
                          type="button"
                          onClick={() => setGeneratorQuestionType("multiple_choice")}
                          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                            generatorQuestionType === "multiple_choice"
                              ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534]"
                              : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 bg-white dark:bg-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-2">
                            <FileQuestion className="w-4 h-4" />
                          </div>
                          <h5 className="text-xs font-bold text-[#111827] dark:text-slate-100">
                            Multiple Choice
                          </h5>
                          <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5 leading-snug">
                            4 choices A, B, C, D with 1 correct option.
                          </p>
                        </button>

                        {/* Option 2: Identification */}
                        <button
                          type="button"
                          onClick={() => setGeneratorQuestionType("identification")}
                          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                            generatorQuestionType === "identification"
                              ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534]"
                              : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 bg-white dark:bg-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-2">
                            <Lightbulb className="w-4 h-4" />
                          </div>
                          <h5 className="text-xs font-bold text-[#111827] dark:text-slate-100">
                            Identification
                          </h5>
                          <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5 leading-snug">
                            Identify the exact mathematical term or formula.
                          </p>
                        </button>

                        {/* Option 3: Enumeration */}
                        <button
                          type="button"
                          onClick={() => setGeneratorQuestionType("enumeration")}
                          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                            generatorQuestionType === "enumeration"
                              ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534]"
                              : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 bg-white dark:bg-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-2">
                            <ListOrdered className="w-4 h-4" />
                          </div>
                          <h5 className="text-xs font-bold text-[#111827] dark:text-slate-100">
                            Enumeration
                          </h5>
                          <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5 leading-snug">
                            List key properties, theorems, or steps.
                          </p>
                        </button>

                        {/* Option 4: Problem Solving */}
                        <button
                          type="button"
                          onClick={() => setGeneratorQuestionType("problem_solving")}
                          className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                            generatorQuestionType === "problem_solving"
                              ? "border-[#166534] bg-[#166534]/10 dark:bg-[#166534]/20 ring-2 ring-[#166534]"
                              : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 bg-white dark:bg-slate-800/60 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#166534]/10 dark:bg-[#166534]/20 text-[#166534] dark:text-emerald-400 flex items-center justify-center mb-2">
                            <Calculator className="w-4 h-4" />
                          </div>
                          <h5 className="text-xs font-bold text-[#111827] dark:text-slate-100">
                            Problem Solving
                          </h5>
                          <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5 leading-snug">
                            Problem only and then solve with full steps.
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Add Section Button */}
                    <button
                      type="button"
                      onClick={() => {
                        const count = typeof generatorItemCount === "number" && generatorItemCount > 0 ? generatorItemCount : 5;
                        const pts = typeof generatorPointsPerItem === "number" && generatorPointsPerItem > 0 ? generatorPointsPerItem : 1;
                        setQuestionTypeSections((prev) => [
                          ...prev,
                          { type: generatorQuestionType, itemCount: count, pointsPerItem: pts },
                        ]);
                        // Reset to defaults for next section
                        setGeneratorItemCount(5);
                        setGeneratorPointsPerItem(1);
                        setGeneratorQuestionType("multiple_choice");
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl border-2 border-dashed border-[#166534]/40 hover:border-[#166534] hover:bg-green-50 dark:hover:bg-[#166534]/10 text-[#166534] dark:text-emerald-400 text-xs font-bold transition cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      Add Section
                    </button>

                    {/* === Published Success Overlay === */}
                    <AnimatePresence>
                      {showPublishedSuccess && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, scale: 1.08, transition: { duration: 0.5, ease: "easeInOut" } }}
                          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white/90 backdrop-blur-md"
                        >
                          <motion.div
                            ref={publishedGSAPRef}
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, ease: "backOut" } }}
                            exit={{ scale: 0.75, opacity: 0, transition: { duration: 0.45, ease: "easeIn" } }}
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
                            <p className="text-[11px] text-emerald-500/60 mt-1">This message will close automatically...</p>
                          </motion.div>
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
                            <div className="absolute inset-0 rounded-full border-4 border-[#166534]/10" />
                            <div className="absolute inset-0 rounded-full border-4 border-t-[#166534] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                            <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-[#15803d]/60 border-b-transparent border-l-transparent animate-spin [animation-direction:reverse] [animation-duration:0.8s]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <img src={quizLoaderLogo} alt="Loading" className="w-14 h-14 object-contain animate-pulse" />
                            </div>
                          </div>
                          {/* Text */}
                          <h3 className="text-[#166534] text-xl font-bold tracking-wide mb-1">Generating Quiz</h3>
                          <p className="text-[#166534]/60 text-sm mb-6">Crafting your questions, please wait...</p>
                          {/* Animated dots bar */}
                          <div className="flex gap-2">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2.5 h-2.5 rounded-full bg-[#166534]"
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
                        className="w-full py-3.5 bg-gradient-to-r from-[#15803d] via-[#166534] to-[#14532d] hover:opacity-95 text-white rounded-2xl text-sm font-bold shadow-md shadow-[#166534]/20 transition flex items-center justify-center gap-2.5 cursor-pointer"
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
                              Generate{
                                questionTypeSections.length > 0
                                  ? ` ${questionTypeSections.reduce((s, sec) => s + sec.itemCount, 0)}-Item Mixed`
                                  : ` ${generatorItemCount || 1}-Item`
                              } Quiz with Answers
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-center text-gray-400 mt-2">
                        {questionTypeSections.length > 0
                          ? `${questionTypeSections.length} section${questionTypeSections.length > 1 ? "s" : ""} · ${questionTypeSections.reduce((s, sec) => s + sec.itemCount * sec.pointsPerItem, 0)} total pts · Questions generated with full answers for admin verification.`
                          : "Questions will be generated with full answers displayed for admin verification."}
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
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#166534] bg-green-50 border border-green-100 px-2 py-0.5 rounded">
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
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#166534] focus:border-[#166534]"
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
                              <span className="inline-flex items-center rounded-lg bg-[#166534] text-white text-xs font-bold px-2.5 py-1">
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
                              className="px-2.5 py-1 text-xs font-bold text-[#166534] hover:bg-green-50 rounded-lg transition flex items-center gap-1 cursor-pointer"
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
                              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#166534] focus:border-[#166534] resize-y font-medium"
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
                                        className="w-full px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#166534]"
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
                                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#166534] resize-y"
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
                        className="px-6 py-2.5 bg-gradient-to-r from-[#15803d] via-[#166534] to-[#14532d] hover:opacity-95 disabled:opacity-60 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-[#166534]/20 transition flex items-center gap-2 cursor-pointer"
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
                        <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center shadow-xs">
                          <ClipboardList className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base sm:text-lg font-black text-[#111827]">
                              Published Quizzes
                            </h3>
                            <span className="text-xs font-bold text-[#166534] bg-green-50 border border-green-100 px-2.5 py-0.5 rounded-lg">
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
                          <Loader2 className="w-8 h-8 animate-spin text-[#166534] mb-3" />
                          <p className="text-xs text-[#6B7280]">Loading quizzes...</p>
                        </div>
                      ) : quizzes.length === 0 ? (
                        <div className="py-16 text-center flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#166534] mb-3">
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
                                  <span className="text-[10px] font-bold text-[#166534] bg-green-50 border border-green-100 px-2 py-0.5 rounded">
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
                                  className="p-1.5 rounded-xl text-gray-600 hover:text-[#166534] hover:bg-green-50 border border-gray-200 transition cursor-pointer flex items-center gap-1 text-xs font-semibold"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>Answers</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteQuiz(quiz.id)}
                                  title="Delete Quiz"
                                  className="p-1.5 rounded-xl text-gray-400 hover:text-green-600 hover:bg-green-50 border border-gray-200 transition cursor-pointer"
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
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#166534] bg-green-50 border border-green-100 px-2 py-0.5 rounded">
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
                            <span className="font-bold text-[#166534]">
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
                        className="px-4 py-2 bg-[#166534] text-white rounded-xl text-xs font-bold hover:bg-[#14532d] transition cursor-pointer"
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
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#166534] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#166534]/20">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-slate-100 tracking-tight">
                      Quiz Results & Student Performance
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={fetchQuizzesAndStats}
                    className="px-3.5 py-2.5 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-200 text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer border border-transparent dark:border-slate-700"
                    title="Refresh submissions"
                  >
                    <RefreshCw
                      className={`w-3.5 h-3.5 ${
                        isLoadingQuizzes ? "animate-spin text-[#166534] dark:text-emerald-400" : ""
                      }`}
                    />
                    <span>Refresh</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("add-quiz")}
                    className="px-4 py-2.5 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create New Quiz</span>
                  </button>
                </div>
              </div>
            </div>

            {/* View Switcher & Controls */}
            <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-slate-800 rounded-xl border border-transparent dark:border-slate-700">
                <button
                  onClick={() => setResultsViewMode("students")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    resultsViewMode === "students"
                      ? "bg-white dark:bg-slate-700 text-[#166534] dark:text-emerald-400 shadow-xs"
                      : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
                  }`}
                >
                  Student Results ({studentSubmissions.length})
                </button>
                <button
                  onClick={() => setResultsViewMode("quizzes")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    resultsViewMode === "quizzes"
                      ? "bg-white dark:bg-slate-700 text-[#166534] dark:text-emerald-400 shadow-xs"
                      : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
                  }`}
                >
                  Quizzes Summary ({quizzes.length})
                </button>
              </div>

              {resultsViewMode === "students" && (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search student name, email, or quiz..."
                      value={resultsSearchQuery}
                      onChange={(e) => setResultsSearchQuery(e.target.value)}
                      className="pl-9 pr-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#166534] dark:focus:ring-emerald-500 w-full sm:w-64"
                    />
                  </div>

                  <select
                    value={resultsTopicFilter}
                    onChange={(e) => setResultsTopicFilter(e.target.value)}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs font-medium text-gray-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#166534] dark:focus:ring-emerald-500 cursor-pointer"
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
                  <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center shadow-xs">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-[#166534] dark:text-emerald-400 mb-3">
                      <GraduationCap className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                      {studentSubmissions.length === 0
                        ? "No Student Quiz Results Recorded Yet"
                        : "No Matching Submissions Found"}
                    </h4>
                    <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
                      {studentSubmissions.length === 0
                        ? "When students take and submit a quiz, their names, scores, and submission details will appear here automatically."
                        : "Try clearing your search query or topic filter."}
                    </p>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                            <th className="pb-3 px-3">Student Name</th>
                            <th className="pb-3 px-3">Quiz Title</th>
                            <th className="pb-3 px-3">Topic</th>
                            <th className="pb-3 px-3">Score</th>
                            <th className="pb-3 px-3">Time Spent</th>
                            <th className="pb-3 px-3">Submitted At</th>
                            <th className="pb-3 px-3 text-right">Details</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                          {filteredSubmissions.map((sub) => (
                            <tr
                              key={sub.id}
                              className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150 group"
                            >
                              <td className="py-3.5 px-3">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-full bg-[#166534] text-white flex items-center justify-center text-xs font-bold uppercase shrink-0 shadow-xs">
                                    {sub.studentName.slice(0, 2)}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="font-semibold text-[#111827] dark:text-slate-100 text-sm truncate">
                                      {sub.studentName}
                                    </p>
                                    <p className="text-[11px] text-[#6B7280] dark:text-slate-400 truncate">
                                      {sub.studentEmail || "No email"}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5 px-3 font-normal text-[#111827] dark:text-slate-200 text-xs max-w-xs truncate">
                                {sub.quizTitle}
                              </td>
                              <td className="py-3.5 px-3 text-xs">
                                <span className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-transparent dark:border-slate-700 px-2 py-0.5 rounded-md font-medium text-[11px]">
                                  {sub.topic}
                                </span>
                              </td>
                              <td className="py-3.5 px-3 font-bold text-xs text-[#166534] dark:text-emerald-400">
                                {sub.score} / {sub.totalQuestions}
                              </td>
                              <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                                {sub.timeSpentSeconds > 0
                                  ? `${Math.floor(sub.timeSpentSeconds / 60)}m ${
                                      sub.timeSpentSeconds % 60
                                    }s`
                                  : "—"}
                              </td>
                              <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                                {sub.submittedAt}
                              </td>
                              <td className="py-3.5 px-3 text-right">
                                <button
                                  type="button"
                                  onClick={() => setSelectedSubmissionForReview(sub)}
                                  className="px-2.5 py-1.5 bg-gray-100 dark:bg-slate-800/80 hover:bg-[#166534] dark:hover:bg-emerald-950/60 hover:text-white dark:hover:text-emerald-300 text-gray-700 dark:text-slate-300 border border-transparent dark:border-slate-700 hover:border-emerald-600/50 text-xs font-semibold rounded-xl transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
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
                  <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center shadow-xs">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-[#166534] dark:text-emerald-400 mb-3">
                      <BarChart3 className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                      No Quizzes Available
                    </h4>
                    <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
                      Create and publish a quiz to start tracking student scores and analytics.
                    </p>
                    <button
                      onClick={() => handleNavClick("add-quiz")}
                      className="mt-4 px-4 py-2 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold rounded-xl cursor-pointer"
                    >
                      Add Your First Quiz
                    </button>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                            <th className="pb-3 px-3">Quiz Title</th>
                            <th className="pb-3 px-3">Topic</th>
                            <th className="pb-3 px-3">Questions</th>
                            <th className="pb-3 px-3">Students Completed</th>
                            <th className="pb-3 px-3">Class Avg. Score</th>
                            <th className="pb-3 px-3">Published Date</th>
                            <th className="pb-3 px-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                          {quizzes.map((quiz) => (
                            <tr key={quiz.id} className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150">
                              <td className="py-3.5 px-3 font-semibold text-[#111827] dark:text-slate-100">
                                {quiz.title}
                              </td>
                              <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                                <span className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-transparent dark:border-slate-700 px-2 py-0.5 rounded-md font-medium">
                                  {quiz.topic}
                                </span>
                              </td>
                              <td className="py-3.5 px-3 text-xs text-[#4B5563] dark:text-slate-300">
                                {quiz.questionsCount}
                              </td>
                              <td className="py-3.5 px-3 text-xs font-medium text-[#111827] dark:text-slate-100">
                                <span className="font-bold text-[#166534] dark:text-emerald-400">
                                  {quiz.attempts}
                                </span>{" "}
                                student{quiz.attempts === 1 ? "" : "s"}
                              </td>
                              <td className="py-3.5 px-3">
                                <span
                                  className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                                    quiz.averageScore >= 75
                                      ? "bg-green-100 dark:bg-emerald-950/60 text-green-700 dark:text-emerald-300 border border-transparent dark:border-emerald-800"
                                      : quiz.averageScore >= 50
                                      ? "bg-yellow-100 dark:bg-amber-950/60 text-yellow-800 dark:text-amber-300 border border-transparent dark:border-amber-800"
                                      : quiz.averageScore > 0
                                      ? "bg-green-100 dark:bg-emerald-950/60 text-green-700 dark:text-emerald-300 border border-transparent dark:border-emerald-800"
                                      : "bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 border border-transparent dark:border-slate-700"
                                  }`}
                                >
                                  {quiz.attempts > 0 ? `${quiz.averageScore} pts` : "No submissions"}
                                </span>
                              </td>
                              <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
                                {quiz.createdAt}
                              </td>
                              <td className="py-3.5 px-3 text-right">
                                <button
                                  type="button"
                                  onClick={() => handleDeleteQuiz(quiz.id)}
                                  className="p-1.5 rounded-xl text-gray-400 dark:text-slate-400 hover:text-red-500 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-transparent dark:border-slate-700/60 transition cursor-pointer"
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
          const activeActivities = activities
            .filter((a) => !archivedActivityIds.includes(a.id))
            .sort((a, b) => a.studentName.localeCompare(b.studentName));
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
          // Sort each archived month/year group by student name alphabetically
          Object.keys(archivedByMonthYear).forEach((key) => {
            archivedByMonthYear[key].sort((a, b) =>
              a.studentName.localeCompare(b.studentName)
            );
          });

          return (
            <div className="p-6 sm:p-8 flex flex-col gap-6 max-w-[1440px] w-full mx-auto pb-24">
              {/* Header Banner & Tabs */}
              <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#166534] flex items-center justify-center text-white shrink-0 shadow-xs">
                      <History className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-slate-100 tracking-tight">
                        Quiz Submission History
                      </h2>
                      <p className="text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 mt-1">
                        Chronological record of student quiz attempts with archive & deletion controls.
                      </p>
                    </div>
                  </div>

                  {/* Active / Archived Tab Selector */}
                  <div className="flex items-center gap-2 p-1 bg-gray-100 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 self-start sm:self-center">
                    <button
                      type="button"
                      onClick={() => setHistoryTab("active")}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        historyTab === "active"
                          ? "bg-white dark:bg-slate-700 text-[#166534] dark:text-emerald-400 shadow-xs"
                          : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
                      }`}
                    >
                      <span>Active</span>
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                          historyTab === "active"
                            ? "bg-[#166534] text-white"
                            : "bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-slate-300"
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
                          ? "bg-white dark:bg-slate-700 text-[#166534] dark:text-emerald-400 shadow-xs"
                          : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200"
                      }`}
                    >
                      <Archive className="w-3.5 h-3.5" />
                      <span>Archived</span>
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                          historyTab === "archived"
                            ? "bg-[#166534] text-white"
                            : "bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-slate-300"
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
                    <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-[#166534] dark:text-emerald-400 mb-3">
                        <History className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                        No Active Submissions
                      </h4>
                      <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
                        {archivedActivities.length > 0
                          ? "All submissions have been archived. You can view them in the Archived tab."
                          : "Student quiz attempts and scores will automatically appear here as they take quizzes."}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                          <thead>
                            <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                              <th className="pb-3 px-3">Student</th>
                              <th className="pb-3 px-3">Quiz Title</th>
                              <th className="pb-3 px-3">Points Earned</th>
                              <th className="pb-3 px-3">Submitted At</th>
                              <th className="pb-3 px-3 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                            {activeActivities.map((act) => {
                              return (
                                <tr
                                  key={act.id}
                                  className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150"
                                >
                                  <td className="py-3.5 px-3 font-semibold text-[#111827] dark:text-slate-100">
                                    {act.studentName}
                                  </td>
                                  <td className="py-3.5 px-3 text-xs text-[#4B5563] dark:text-slate-300">
                                    {act.quizTitle}
                                  </td>
                                  <td className="py-3.5 px-3 text-xs font-bold text-[#166534] dark:text-emerald-400">
                                    {act.score} / {act.totalQuestions} pts
                                  </td>
                                  <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
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
                                        className="px-2.5 py-1 rounded-xl text-gray-600 dark:text-slate-300 hover:text-[#166534] dark:hover:text-emerald-300 bg-transparent hover:bg-emerald-50 dark:hover:bg-emerald-900/30 border border-gray-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-700/50 transition-all duration-150 cursor-pointer flex items-center gap-1 text-xs font-semibold shadow-xs"
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
                                        className="p-1.5 rounded-xl text-gray-400 dark:text-slate-400 hover:text-red-600 dark:hover:text-rose-300 bg-transparent hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-gray-200 dark:border-slate-700 hover:border-rose-200 dark:hover:border-rose-800/50 transition-all duration-150 cursor-pointer shadow-xs"
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
                    <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-2xl p-4 shadow-xs flex items-center gap-3">
                      <div className="relative flex-1">
                        <Search className="w-4 h-4 text-gray-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={archivedSearchQuery}
                          onChange={(e) => setArchivedSearchQuery(e.target.value)}
                          placeholder="Search archived by student name, quiz title, or month/year..."
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-xl text-xs font-semibold text-gray-800 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#166534] dark:focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-800 transition"
                        />
                      </div>
                      {archivedSearchQuery && (
                        <button
                          type="button"
                          onClick={() => setArchivedSearchQuery("")}
                          className="px-3 py-2 text-xs font-bold text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-xl transition cursor-pointer"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  )}

                  {archivedActivities.length === 0 ? (
                    <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-500 dark:text-slate-400 mb-3">
                        <Archive className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                        No Archived Records
                      </h4>
                      <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
                        When you click "Archive" on any active history entry, it will be categorized here grouped by Month and Year.
                      </p>
                    </div>
                  ) : filteredArchivedActivities.length === 0 ? (
                    <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-400 dark:text-slate-500 mb-3">
                        <Search className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h4 className="text-base font-bold text-[#111827] dark:text-slate-100">
                        No Matching Archived Records
                      </h4>
                      <p className="text-xs text-[#6B7280] dark:text-slate-400 mt-1 max-w-sm">
                        No archived records match "{archivedSearchQuery}". Try another keyword or clear search.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {Object.entries(archivedByMonthYear).map(
                        ([monthYear, groupItems]) => (
                          <div
                            key={monthYear}
                            className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                          >
                            {/* Month & Year Group Header */}
                            <div className="bg-[#FAFBFD] dark:bg-slate-800/80 border-b border-[#EAEBED] dark:border-slate-700 px-6 py-4 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-emerald-950/50 border border-green-100 dark:border-emerald-800 text-[#166534] dark:text-emerald-400 flex items-center justify-center">
                                  <Archive className="w-4 h-4" />
                                </div>
                                <div>
                                  <h3 className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-slate-100">
                                    {monthYear}
                                  </h3>
                                  <span className="text-[10px] text-gray-500 dark:text-slate-400 font-medium">
                                    Archived Submissions
                                  </span>
                                </div>
                              </div>
                              <span className="text-xs font-bold text-[#166534] dark:text-emerald-400 bg-green-50 dark:bg-emerald-950/40 border border-green-100 dark:border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                                {groupItems.length} record
                                {groupItems.length === 1 ? "" : "s"}
                              </span>
                            </div>

                            {/* Group Items Table */}
                            <div className="p-6 overflow-x-auto">
                              <table className="w-full text-left text-sm">
                                <thead>
                                  <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                                    <th className="pb-3 px-3">Student</th>
                                    <th className="pb-3 px-3">Quiz Title</th>
                                    <th className="pb-3 px-3">Points Earned</th>
                                    <th className="pb-3 px-3">Submitted At</th>
                                    <th className="pb-3 px-3 text-right">
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                                  {groupItems.map((act) => {
                                    return (
                                      <tr
                                        key={act.id}
                                        className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150"
                                      >
                                        <td className="py-3.5 px-3 font-semibold text-[#111827] dark:text-slate-100">
                                          {act.studentName}
                                        </td>
                                        <td className="py-3.5 px-3 text-xs text-[#4B5563] dark:text-slate-300">
                                          {act.quizTitle}
                                        </td>
                                        <td className="py-3.5 px-3 text-xs font-bold text-[#166534] dark:text-emerald-400">
                                          {act.score} / {act.totalQuestions} pts
                                        </td>
                                        <td className="py-3.5 px-3 text-xs text-[#6B7280] dark:text-slate-400">
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
                                              className="px-2.5 py-1 rounded-xl text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 bg-transparent hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-700/60 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-150 cursor-pointer flex items-center gap-1 text-xs font-semibold shadow-xs"
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
                                              className="p-1.5 rounded-xl text-gray-400 dark:text-slate-400 hover:text-red-600 dark:hover:text-rose-300 bg-transparent hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-gray-200 dark:border-slate-700 hover:border-rose-200 dark:hover:border-rose-800/50 transition-all duration-150 cursor-pointer shadow-xs"
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
                  <div className="w-11 h-11 rounded-2xl bg-[#166534] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#166534]/20">
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

                <div className="flex items-center gap-3 self-start sm:self-center flex-wrap">
                  <button
                    type="button"
                    onClick={() => setIsBlockCustomizationMode((prev) => !prev)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border shadow-xs ${
                      isBlockCustomizationMode
                        ? "bg-[#166534] text-white border-[#166534] shadow-[#166534]/20"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-[#166534] hover:border-[#166534]/30"
                    }`}
                    title="Toggle customization controls for block assignments"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Customize</span>
                    {isBlockCustomizationMode && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </button>

                  <span className="inline-flex items-center rounded-full bg-[#166534]/10 border border-[#166534]/20 px-3.5 py-1 text-xs font-bold text-[#166534]">
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
                    className="w-full pl-10 pr-4 py-2 bg-[#F9FAFB] border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
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

            {/* Block Filter Buttons — show when there are blocks */}
            {availableBlocks.length > 0 && (
              <div className="bg-white border border-[#166534]/20 rounded-2xl p-4 shadow-xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-gray-500 mr-1">Filter by Block:</span>
                  <button
                    onClick={() => setSelectedStudentBlockFilter("all")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                      selectedStudentBlockFilter === "all"
                        ? "bg-[#166534] text-white border-[#166534] shadow-sm"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    All Blocks
                  </button>
                  {availableBlocks.map((block) => (
                    <button
                      key={block}
                      onClick={() => setSelectedStudentBlockFilter(block)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                        selectedStudentBlockFilter === block
                          ? "bg-[#166534] text-white border-[#166534] shadow-sm"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      Block {block}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Students Table */}
            {isLoadingQuizzes ? (
              <div className="py-16 flex flex-col items-center justify-center text-center">
                <Loader2 className="w-8 h-8 animate-spin text-[#166534] mb-3" />
                <p className="text-xs font-semibold text-gray-600">Loading student directory...</p>
              </div>
            ) : filteredStudents.length === 0 ? (
              <div className="bg-white border border-[#EAEBED] rounded-3xl p-12 text-center flex flex-col items-center justify-center shadow-xs">
                <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center text-[#166534] mb-4">
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
              <div className="bg-white dark:bg-[#161F30] border border-[#EAEBED] dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-[#EAEBED] dark:border-slate-700 text-xs font-bold uppercase text-[#6B7280] dark:text-slate-400">
                        <th className="pb-3 px-4">Student Name</th>
                        <th className="pb-3 px-4">Email Address</th>
                        <th className="pb-3 px-6 text-center w-28">Block</th>
                        <th className="pb-3 px-6 text-center">Joined Date</th>
                        <th className="pb-3 px-6 text-right">Last Active</th>
                        {isBlockCustomizationMode && (
                          <th className="pb-3 px-4 text-center">Action</th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F3F4F6] dark:divide-slate-700/60">
                      {filteredStudents.map((st) => {
                        const hasAttempts = st.quizzesTaken > 0;
                        const isOnline =
                          onlineStudentKeys.has(st.id.toLowerCase()) ||
                          onlineStudentKeys.has(st.email.toLowerCase());

                        return (
                          <tr key={st.id} className="hover:bg-gray-50/80 dark:hover:bg-slate-800/40 transition-colors duration-150">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="relative">
                                  {st.avatarUrl ? (
                                    <img
                                      src={st.avatarUrl}
                                      alt={st.name}
                                      className="w-9 h-9 rounded-xl object-cover shrink-0 shadow-xs border border-gray-200"
                                    />
                                  ) : (
                                    <div className="w-9 h-9 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                                      {st.name.slice(0, 2).toUpperCase()}
                                    </div>
                                  )}
                                  {isOnline && (
                                    <span
                                      title="Online now"
                                      className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full shadow-xs animate-pulse ring-1 ring-emerald-500/40"
                                    />
                                  )}
                                </div>
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-[#111827] dark:text-slate-100">{st.name}</span>
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
                            <td className="py-3.5 px-4 text-xs text-[#4B5563] dark:text-slate-300">
                              {st.email}
                            </td>
                            <td className="py-3.5 px-6 text-xs font-bold text-center">
                              {isBlockCustomizationMode ? (
                                <button
                                  type="button"
                                  onClick={() => handleOpenMoveBlockModal(st)}
                                  className="group/blk inline-flex items-center gap-1 cursor-pointer transition hover:opacity-80"
                                  title="Click to move/change student's block"
                                >
                                  {st.block ? (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-bold text-xs bg-[#166534]/10 text-[#166534] border border-[#166534]/20 uppercase group-hover/blk:bg-[#166534] group-hover/blk:text-white transition">
                                      {st.block}
                                      <Edit className="w-2.5 h-2.5 opacity-60 group-hover/blk:opacity-100" />
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] text-gray-400 bg-gray-50 border border-dashed border-gray-300 hover:border-[#166534] hover:text-[#166534]">
                                      <span>+ Assign</span>
                                    </span>
                                  )}
                                </button>
                              ) : st.block ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md font-bold text-xs bg-[#166534]/10 text-[#166534] border border-[#166534]/20 uppercase">
                                  {st.block}
                                </span>
                              ) : (
                                <span className="text-gray-400 font-normal italic">—</span>
                              )}
                            </td>
                            <td className="py-3.5 px-6 text-xs text-[#6B7280] dark:text-slate-400 text-center">
                              {st.joinedDate}
                            </td>
                            <td className="py-3.5 px-6 text-xs text-[#6B7280] dark:text-slate-400 text-right">
                              {st.lastActive}
                            </td>
                            {isBlockCustomizationMode && (
                              <td className="py-3.5 px-3 text-center">
                                <button
                                  type="button"
                                  onClick={() => handleOpenMoveBlockModal(st)}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-[#166534] bg-[#166534]/10 hover:bg-[#166534] hover:text-white border border-[#166534]/20 transition cursor-pointer"
                                  title="Move student to another block"
                                >
                                  <ArrowRightLeft className="w-3 h-3" />
                                  <span>Move Block</span>
                                </button>
                              </td>
                            )}
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
      {/* MOVE / CHANGE STUDENT BLOCK MODAL                                         */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {editingBlockStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#EAEBED] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#166534] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-[#166534]/20">
                    <ArrowRightLeft className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111827]">
                      Move Student Block
                    </h3>
                    <p className="text-xs text-gray-500">
                      Change block assignment for this student
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (!isUpdatingStudentBlock) {
                      setEditingBlockStudent(null);
                      setBlockUpdateSuccessMessage(null);
                    }
                  }}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Student Info Card */}
              <div className="bg-[#F9FAFB] rounded-2xl p-4 my-4 border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {editingBlockStudent.avatarUrl ? (
                    <img
                      src={editingBlockStudent.avatarUrl}
                      alt={editingBlockStudent.name}
                      className="w-9 h-9 rounded-xl object-cover shrink-0 border border-gray-200"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {editingBlockStudent.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#111827]">
                      {editingBlockStudent.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {editingBlockStudent.email}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">Current</span>
                  {editingBlockStudent.block ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md font-bold text-xs bg-[#166534]/10 text-[#166534] border border-[#166534]/20 uppercase">
                      Block {editingBlockStudent.block}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400 italic">None</span>
                  )}
                </div>
              </div>

              {/* Success Message Banner */}
              {blockUpdateSuccessMessage && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{blockUpdateSuccessMessage}</span>
                </div>
              )}

              {/* Block Selection Form */}
              <form onSubmit={handleSaveStudentBlock} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Assign to Block (Letter or Name):
                  </label>
                  <input
                    type="text"
                    value={targetBlockInput}
                    onChange={(e) => setTargetBlockInput(e.target.value.toUpperCase())}
                    placeholder="e.g. A, B, C, D, or 1A..."
                    maxLength={10}
                    className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-bold text-gray-800 tracking-wider placeholder:font-normal placeholder:tracking-normal focus:outline-none focus:border-[#166534] focus:ring-2 focus:ring-[#166534]/20 uppercase transition"
                    autoFocus
                  />
                  <span className="text-[11px] text-gray-500 mt-1 block">
                    Type a block letter/name, or click any existing block below:
                  </span>
                </div>

                {/* Quick Select Chips */}
                {availableBlocks.length > 0 && (
                  <div>
                    <span className="text-[11px] font-bold text-gray-600 block mb-1.5">
                      Existing Blocks in Class:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {availableBlocks.map((blk) => (
                        <button
                          type="button"
                          key={blk}
                          onClick={() => setTargetBlockInput(blk)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
                            targetBlockInput.trim().toUpperCase() === blk
                              ? "bg-[#166534] text-white border-[#166534] shadow-xs"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          Block {blk}
                        </button>
                      ))}
                    </div>
                  </div>
                )}


                {/* Actions */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100 mt-2">
                  <button
                    type="button"
                    onClick={() => setTargetBlockInput("")}
                    disabled={isUpdatingStudentBlock || !targetBlockInput}
                    className="text-xs font-semibold text-gray-500 hover:text-red-600 transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    Clear Block
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingBlockStudent(null);
                        setBlockUpdateSuccessMessage(null);
                      }}
                      disabled={isUpdatingStudentBlock}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isUpdatingStudentBlock}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold shadow-md shadow-[#166534]/20 transition cursor-pointer disabled:opacity-60"
                    >
                      {isUpdatingStudentBlock ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Saving...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Save & Move Block</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
              className="w-full max-w-3xl bg-white dark:bg-[#161F30] rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#EAEBED] dark:border-slate-700 max-h-[85vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-slate-700 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center text-sm font-bold uppercase shrink-0">
                    {selectedSubmissionForReview.studentName.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#111827] dark:text-slate-100">
                      {selectedSubmissionForReview.studentName}'s Submission
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-slate-400">
                      {selectedSubmissionForReview.studentEmail} • Quiz:{" "}
                      <span className="font-semibold text-gray-700 dark:text-slate-300">
                        {selectedSubmissionForReview.quizTitle}
                      </span>{" "}
                      ({selectedSubmissionForReview.topic})
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSubmissionForReview(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Submission Overview Metrics */}
              <div className="grid grid-cols-3 gap-3 my-4 shrink-0">
                <div className="p-3 bg-gray-50 dark:bg-slate-800/60 rounded-xl border border-gray-100 dark:border-slate-700 text-center">
                  <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-slate-500">Score</p>
                  <p className="text-base font-extrabold text-[#111827] dark:text-slate-100">
                    {selectedSubmissionForReview.score} / {selectedSubmissionForReview.totalQuestions}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-slate-800/60 rounded-xl border border-gray-100 dark:border-slate-700 text-center">
                  <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-slate-500">Status</p>
                  <p
                    className={`text-sm font-bold ${
                      selectedSubmissionForReview.passed ? "text-emerald-600 dark:text-emerald-400" : "text-green-700 dark:text-amber-400"
                    }`}
                  >
                    {selectedSubmissionForReview.passed ? "Passed" : "Needs Review"}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-slate-800/60 rounded-xl border border-gray-100 dark:border-slate-700 text-center">
                  <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-slate-500">Submitted</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-slate-300 truncate">
                    {selectedSubmissionForReview.submittedAt}
                  </p>
                </div>
              </div>

              {/* Answers Breakdown */}
              <div className="overflow-y-auto flex-1 pr-1 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
                  Question-by-Question Response Breakdown
                </h4>

                {(!selectedSubmissionForReview.answers || selectedSubmissionForReview.answers.length === 0) ? (
                  <p className="text-xs text-gray-400 dark:text-slate-500 italic py-4 text-center">
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
                            ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-900/20"
                            : "border-rose-200 dark:border-rose-900 bg-rose-50/30 dark:bg-rose-900/20"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <p className="font-bold text-xs text-[#111827] dark:text-slate-100">
                            <span className="text-gray-400 dark:text-slate-500 mr-1.5">Q{idx + 1}.</span>
                            {ans.prompt}
                          </p>
                          <span
                            className={`text-[10px] font-extrabold px-2 py-0.5 rounded shrink-0 ${
                              isRight
                                ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-400"
                                : "bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-400"
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
                                "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-300";
                              if (isCorrectPick) {
                                choiceClass =
                                  "bg-emerald-100 dark:bg-emerald-900/40 border-emerald-400 dark:border-emerald-600 text-emerald-950 dark:text-emerald-300 font-bold";
                              } else if (isStudentPick && !isRight) {
                                choiceClass =
                                  "bg-rose-100 dark:bg-rose-900/40 border-rose-400 dark:border-rose-600 text-rose-950 dark:text-rose-300 font-bold";
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
                                      <span className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10">
                                        Student Pick
                                      </span>
                                    )}
                                    {isCorrectPick && (
                                      <span className="text-emerald-700 dark:text-emerald-400">✓ Correct</span>
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
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-700 flex items-center justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedSubmissionForReview(null)}
                  className="px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-800 dark:text-slate-100 text-xs font-bold rounded-xl transition cursor-pointer"
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
