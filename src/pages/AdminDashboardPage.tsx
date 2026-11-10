import React, { useState, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { supabase } from "../lib/supabase";
import quizLoaderLogo from "../assets/Logo(2).png";
import {
  generateQuizQuestions,
  regenerateSingleQuestion,
  type QuizQuestionType,
  type GeneratedQuestion,
} from "../utils/quizGenerator";

// Calculus definitions
import {
  CALCULATOR_DEFINITIONS,
} from "../Calculus_One_Calculator/CalculatorData";

// Codebase Topic Registries
import { TOPICS as LINEAR_ALGEBRA_TOPICS_RAW } from "../data/topics/index";
import { ALL_CALCULUS_TOPICS } from "../data/calculus-topics";
import { ALL_CALCULUS_2_TOPICS } from "../data/calculus-2-topics";
import { extractFirstImage } from "../components/TopicContentRenderer";

// Unified Types
import type {
  QuizQuestionDraft,
  QuizItem,
  StudentItem,
  ActivityItem,
  StudentSubmissionItem,
  CalculatorCardMeta,
  UnifiedTopicItem,
  QuizSection,
} from "../types/dashboard";

// Extracted Modular Components
import { AdminDashboardSidebar } from "../components/admin-dashboard/AdminDashboardSidebar";
import { AdminDashboardHeader } from "../components/admin-dashboard/AdminDashboardHeader";
import { AdminOverviewView } from "../components/admin-dashboard/AdminOverviewView";
import { AdminStudentOverviewView } from "../components/admin-dashboard/AdminStudentOverviewView";
import { AdminStudentQuizzesView } from "../components/admin-dashboard/AdminStudentQuizzesView";
import { AdminAddQuizView } from "../components/admin-dashboard/AdminAddQuizView";
import { AdminPublishedQuizzesView } from "../components/admin-dashboard/AdminPublishedQuizzesView";
import { AdminQuizResultsView } from "../components/admin-dashboard/AdminQuizResultsView";
import { AdminHistoryQuizzesView } from "../components/admin-dashboard/AdminHistoryQuizzesView";
import { AdminViewStudentsView } from "../components/admin-dashboard/AdminViewStudentsView";
import { AdminQuizPreviewModal } from "../components/admin-dashboard/AdminQuizPreviewModal";
import { AdminMoveBlockModal } from "../components/admin-dashboard/AdminMoveBlockModal";
import { AdminReviewSubmissionModal } from "../components/admin-dashboard/AdminReviewSubmissionModal";
import { CalculatorsView } from "../components/dashboard/CalculatorsView";
import { TopicsView } from "../components/dashboard/TopicsView";
import { GradingManagementView } from "../components/admin-dashboard/GradingManagementView";
// useGradingData is only used inside GradingManagementView — NOT here

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
    title: "Matrix Inversion",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A^{-1} = \\frac{1}{|A|} \\mathrm{adj}(A)",
    description:
      "Computes inverse matrix using Gauss-Jordan augmented matrix reduction with verification.",
    badge: "Core",
    type: "linear",
  },
  {
    id: "la-eigenvalues",
    title: "Eigenvalues & Eigenvectors",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A\\mathbf{v} = \\lambda\\mathbf{v}, \\quad \\det(A - \\lambda I) = 0",
    description:
      "Solves characteristic polynomial to produce real/complex eigenvalues and eigenspace bases.",
    badge: "Spectral",
    type: "linear",
  },
  {
    id: "la-system-equations",
    title: "System of Linear Equations",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A\\mathbf{x} = \\mathbf{b}",
    description:
      "Solves systems using Gaussian elimination, Cramer's rule, and identifies infinite solutions.",
    badge: "Systems",
    type: "linear",
  },
  {
    id: "la-dot-product",
    title: "Dot Product & Angle",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i = |u||v|\\cos\\theta",
    description:
      "Computes inner product, vector magnitudes, cosine similarity, and orthogonality test.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-cross-product",
    title: "Cross Product (3D)",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathbf{u} \\times \\mathbf{v} = \\det\\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{pmatrix}",
    description:
      "Calculates perpendicular vector in 3D, parallelogram area, and right-hand rule direction.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-vector-proj",
    title: "Vector Projection",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathrm{proj}_{\\mathbf{v}} \\mathbf{u} = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\mathbf{v}\\cdot\\mathbf{v}}\\mathbf{v}",
    description:
      "Projects vector u onto vector v and calculates the orthogonal complement vector component.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-vector-calc",
    title: "Vector Arithmetic & Norms",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\|\\mathbf{v}\\| = \\sqrt{\\sum v_i^2}, \\quad \\mathbf{\\hat{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}",
    description:
      "Vector addition, scalar multiplication, unit normalization, and distance metrics.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-rank-nullity",
    title: "Rank & Nullity Calculator",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n",
    description:
      "Verifies Rank-Nullity Theorem, computes row reduced echelon form (RREF) and dimension of kernel.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-linear-indep",
    title: "Linear Independence Test",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "c_1 \\mathbf{v}_1 + \\dots + c_k \\mathbf{v}_k = \\mathbf{0} \\implies c_i = 0",
    description:
      "Determines whether a set of vectors is linearly independent via determinant and pivot analysis.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-linear-comb",
    title: "Linear Combination Solver",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathbf{w} = c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 + \\dots + c_k \\mathbf{v}_k",
    description:
      "Expresses a target vector w as a linear combination of a given vector set if feasible.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-basis-calculator",
    title: "Basis & Dimension Finder",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathcal{B} = \\{ \\mathbf{v}_1, \\dots, \\mathbf{v}_k \\}",
    description:
      "Extracts a minimal spanning linearly independent basis for row, column, or null spaces.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-span-calc",
    title: "Span & Spanning Set",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathrm{span}(\\mathbf{v}_1, \\dots, \\mathbf{v}_k)",
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
      "Finds modal matrix P and diagonal matrix D containing eigenvalues for matrix powers A\u1d4f.",
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
    title: "Linear Transformation Engine",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "T(\\mathbf{x}) = A\\mathbf{x}",
    description:
      "Analyzes transformation matrices for rotations, reflections, scaling, shears, kernel, and range.",
    badge: "Advanced",
    type: "linear",
  },
  {
    id: "la-quadratic-form",
    title: "Quadratic Form & Definiteness",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}",
    description:
      "Classifies symmetric matrices as positive definite, negative definite, or indefinite via eigenvalues.",
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
    | "published-quizzes"
    | "quiz-results"
    | "history-quizzes"
    | "view-students"
    | "grading"
  >("dashboard");

  // Lightweight read-only subject list from localStorage (no heavy hook here)
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("");
  const [selectedGradingPeriod, setSelectedGradingPeriod] = useState<"prelim" | "midterm" | "semi-final" | "final">("prelim");

  const availableSubjects = useMemo(() => {
    try {
      const raw = localStorage.getItem("mathworkspace_grading_data");
      let records: any[] = [];
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) records = parsed;
      }
      if (records.length === 0) {
        records = [
          { subject: { id: "math-101", subjectCode: "MATH 101", offerNumber: "80062", subjectName: "Calculus with Analytic Geometry" } },
          { subject: { id: "math-102", subjectCode: "MATH 102", offerNumber: "80063", subjectName: "Integral Calculus" } },
          { subject: { id: "math-103", subjectCode: "MATH 103", offerNumber: "80064", subjectName: "Linear Algebra" } },
        ];
      } else {
        if (!records.some((r) => r.subject?.subjectCode?.toLowerCase().includes("102"))) {
          records.push({
            subject: { id: "math-102", subjectCode: "MATH 102", offerNumber: "80063", subjectName: "Integral Calculus" }
          });
        }
        if (!records.some((r) => r.subject?.subjectCode?.toLowerCase().includes("103"))) {
          records.push({
            subject: { id: "math-103", subjectCode: "MATH 103", offerNumber: "80064", subjectName: "Linear Algebra" }
          });
        }
      }
      return records.map((r: any) => ({
        id: r.subject?.id || "",
        subjectCode: r.subject?.subjectCode || "",
        offerNumber: r.subject?.offerNumber || "",
        subjectName: r.subject?.subjectName || "",
      })).filter((s: any) => s.id);
    } catch {
      return [];
    }
  }, []);

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

  // Calculator Filter Category & Active State
  const [selectedCalcCategory, setSelectedCalcCategory] = useState<
    "linear-algebra" | "calculus-1" | "calculus-2"
  >("linear-algebra");
  const [calcCategoryFilter, setCalcCategoryFilter] = useState<
    "all" | "linear-algebra" | "calculus-1" | "calculus-2"
  >("linear-algebra");
  const [activeCalculator, setActiveCalculator] =
    useState<CalculatorCardMeta | null>(null);

  // Topics Filter Category & Active State
  const [selectedTopicCategory, setSelectedTopicCategory] = useState<
    "linear-algebra" | "calculus-1" | "calculus-2"
  >("linear-algebra");
  const [topicCategoryFilter, setTopicCategoryFilter] = useState<
    "all" | "linear-algebra" | "calculus-1" | "calculus-2"
  >("linear-algebra");
  const [selectedChapterFilter, setSelectedChapterFilter] =
    useState<string>("all");
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

  // Realtime Broadcast Listener for Quiz Submissions
  const [recentSubmissionToast, setRecentSubmissionToast] = useState<{
    id: string;
    studentName: string;
    quizTitle: string;
    score: number;
    totalQuestions: number;
    submittedAt: string;
  } | null>(null);

  // Student block editing modal
  const [editingBlockStudent, setEditingBlockStudent] = useState<StudentItem | null>(null);
  const [targetBlockInput, setTargetBlockInput] = useState("");
  const [isUpdatingStudentBlock, setIsUpdatingStudentBlock] = useState(false);
  const [blockUpdateSuccessMessage, setBlockUpdateSuccessMessage] = useState<string | null>(null);
  const [isBlockCustomizationMode, setIsBlockCustomizationMode] = useState(false);

  useEffect(() => {
    if (!supabase) return;

    // 1. Broadcast channel for instantaneous notification dispatch
    const broadcastChannel = supabase.channel("quiz-submissions-broadcast");

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

    // 3. Realtime listener on profiles table
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

  // Auto-dismiss the floating realtime submission toast after 6 seconds
  useEffect(() => {
    if (!recentSubmissionToast) return;
    const timer = setTimeout(() => {
      setRecentSubmissionToast(null);
    }, 6000);
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
          image: def.image,
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

    // 1. Linear Algebra Topics
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

    // 2. Calculus 1 Topics
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

    // 3. Calculus 2 Topics
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

  // Compute available blocks from students
  const availableBlocks = useMemo(() => {
    const blockSet = new Set<string>();
    students.forEach((s) => {
      if (s.block && s.block.trim()) {
        blockSet.add(s.block.trim().toUpperCase());
      }
    });
    return Array.from(blockSet).sort((a, b) => a.localeCompare(b));
  }, [students]);

  // Filtered students by search AND block filter
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
    if (selectedStudentBlockFilter !== "all") {
      list = list.filter(
        (s) => s.block && s.block.trim().toUpperCase() === selectedStudentBlockFilter
      );
    }
    return list.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  }, [students, studentSearchQuery, searchQuery, selectedStudentBlockFilter]);

  // Filtered student quiz submissions
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
      // 1. Fetch quizzes and questions (with allow_review if column exists)
      let quizzesData: any = null;
      let qError: any = null;

      const resWithReview = await supabase
        .from("quizzes")
        .select(`
          id,
          title,
          topic,
          created_at,
          points_per_item,
          allow_review,
          subject_id,
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

      if (resWithReview.error) {
        // Fallback if subject_id or allow_review column not yet migrated in Supabase
        const fallbackRes = await supabase
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
        quizzesData = fallbackRes.data;
        qError = fallbackRes.error;
      } else {
        quizzesData = resWithReview.data;
      }

      if (qError) {
        console.error("Error fetching quizzes:", qError);
      }

      // 2. Fetch attempts with answers_json and time_spent_seconds
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

      // 3. Fetch student profiles (all registered users)
      const { data: profilesData, error: pError } = await supabase
        .from("profiles")
        .select("id, name, email, block, avatar_url, created_at, role, student_id, id_number")
        .order("created_at", { ascending: false });

      if (pError) {
        console.error("Error fetching profiles:", pError);
      }

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
          const isReviewAllowed = q.allow_review !== undefined
            ? Boolean(q.allow_review)
            : localStorage.getItem(`quiz_allow_review_${q.id}`) === "true";

          const assignedSubject = q.subject_id || localStorage.getItem(`quiz_subject_${q.id}`) || undefined;
          const assignedPeriod = (q.period || localStorage.getItem(`quiz_period_${q.id}`) || "prelim") as "prelim" | "midterm" | "semi-final" | "final";

          return {
            id: q.id,
            title: q.title,
            topic: q.topic,
            subject: assignedSubject,
            period: assignedPeriod,
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
            allowReview: isReviewAllowed,
            _rawCreatedAt: q.created_at,
          } as QuizItem & { _rawCreatedAt: string };
        });

        // ── Compute quizNumber per subject (chronological order) ──
        // Build a lookup from quiz ID → subject code
        const resolveSubjectCode = (quiz: typeof formatted[number]): string | null => {
          const subjectId = quiz.subject;
          if (!subjectId) return null;

          // Check if stored subject code exists in localStorage
          const storedCode = localStorage.getItem(`quiz_subject_code_${quiz.id}`);
          if (storedCode) return storedCode.toUpperCase().trim();

          // Try to extract from topic e.g. "Linear Algebra [MATH 103]"
          const bracketMatch = quiz.topic?.match(/\[([^\]]+)\]/);
          if (bracketMatch) return bracketMatch[1].toUpperCase().trim();

          // Match against availableSubjects by id
          const matchedSub = availableSubjects.find(
            (s) =>
              s.id === subjectId ||
              s.subjectCode.toLowerCase() === subjectId.toLowerCase() ||
              `${s.subjectCode} - ${s.offerNumber}`.toLowerCase() === subjectId.toLowerCase()
          );
          if (matchedSub) return matchedSub.subjectCode;

          return null;
        };

        // Sort by created_at ascending for numbering
        const sortedByDate = [...formatted].sort((a, b) => {
          const rawA = (a as any)._rawCreatedAt || "";
          const rawB = (b as any)._rawCreatedAt || "";
          return new Date(rawA).getTime() - new Date(rawB).getTime();
        });

        // Assign quiz numbers per subject AND per period (e.g. MATH 101 Midterm starts at Quiz 1)
        const subjectPeriodCounters: Record<string, number> = {};
        const quizNumberMap: Record<string, { quizNumber: number; subjectCode: string }> = {};

        sortedByDate.forEach((quiz) => {
          const subjectCode = resolveSubjectCode(quiz);
          if (subjectCode) {
            const period = quiz.period || "prelim";
            const key = `${subjectCode.toUpperCase()}__${period}`;
            if (!subjectPeriodCounters[key]) subjectPeriodCounters[key] = 0;
            subjectPeriodCounters[key] += 1;
            quizNumberMap[quiz.id] = { quizNumber: subjectPeriodCounters[key], subjectCode: subjectCode.toUpperCase() };
            // Store in localStorage for grading slot resolution
            localStorage.setItem(`quiz_number_${quiz.id}`, String(subjectPeriodCounters[key]));
          }
        });

        // Apply quizNumber back to the formatted array
        const numberedFormatted = formatted.map((quiz) => {
          const mapping = quizNumberMap[quiz.id];
          if (mapping) {
            return { ...quiz, quizNumber: mapping.quizNumber };
          }
          return quiz;
        });

        setQuizzes(numberedFormatted);
      }

      // Format student items (exclude admins)
      let studentList: StudentItem[] = [];
      if (profilesData) {
        const nonAdmins = profilesData.filter(
          (prof: any) =>
            prof.role !== "admin" &&
            prof.email?.toLowerCase().trim() !== "admin@gmail.com",
        );

        studentList = nonAdmins.map((prof: any) => {
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
            studentId: ((prof as any).student_id || (prof as any).id_number || "").trim(),
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
      }

      // Merge students from localStorage grading data (e.g. Charme or students enrolled locally)
      try {
        const rawGrading = localStorage.getItem("mathworkspace_grading_data");
        if (rawGrading) {
          const gradingRecords = JSON.parse(rawGrading);
          if (Array.isArray(gradingRecords)) {
            gradingRecords.forEach((rec: any) => {
              if (Array.isArray(rec.students)) {
                rec.students.forEach((st: any) => {
                  const sName = (st.fullName || "").trim();
                  if (!sName) return;
                  const alreadyExists = studentList.some(
                    (existing) =>
                      existing.id === st.id ||
                      existing.name.toLowerCase().trim() === sName.toLowerCase() ||
                      (st.studentId && existing.studentId && existing.studentId.toLowerCase() === st.studentId.toLowerCase())
                  );
                  if (!alreadyExists) {
                    studentList.push({
                      id: st.id || `local-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
                      name: sName,
                      email: st.email || `${sName.toLowerCase().replace(/\\s+/g, '')}@student.edu`,
                      studentId: st.studentId || "2026-0000",
                      block: st.block || "Block A",
                      avatarUrl: "",
                      quizzesTaken: 0,
                      averageScore: 0,
                      lastActive: "Recent",
                      joinedDate: "Recent",
                    });
                  }
                });
              }
            });
          }
        }
      } catch (mergeErr) {
        console.warn("Could not merge local grading students into directory:", mergeErr);
      }

      setStudents(studentList);

      if (profilesData) {
        const nonAdmins = profilesData.filter(
          (prof: any) =>
            prof.role !== "admin" &&
            prof.email?.toLowerCase().trim() !== "admin@gmail.com",
        );

        // Sync registered student IDs and enrollments with local grading records
        try {
          const rawGrading = localStorage.getItem("mathworkspace_grading_data");
          if (rawGrading) {
            const gradingRecords = JSON.parse(rawGrading);
            let updatedAny = false;
            if (Array.isArray(gradingRecords)) {
              gradingRecords.forEach((rec: any) => {
                if (!Array.isArray(rec.students)) rec.students = [];
                const subCode = (rec.subject?.subjectCode || "").toLowerCase().trim();
                const subDigits = subCode.match(/\d+/)?.[0];

                // Remove students from rec if they belong to another subject (e.g. Jeoff Montebon in MATH 101)
                const initLen = rec.students.length;
                rec.students = rec.students.filter((st: any) => {
                  const nameLower = (st.fullName || "").toLowerCase();
                  if (subDigits === "101") {
                    if (nameLower.includes("jeoff") || nameLower.includes("montebon")) return false;
                  }
                  const matchedProfile = nonAdmins.find(
                    (p: any) =>
                      p.id === st.id ||
                      (p.name && p.name.toLowerCase().trim() === st.fullName?.toLowerCase().trim())
                  );
                  if (matchedProfile) {
                    const pDigits = ((matchedProfile as any).subject_code || "").match(/\d+/)?.[0];
                    if (pDigits && subDigits && pDigits !== subDigits) return false;
                  }
                  return true;
                });
                if (rec.students.length !== initLen) {
                  rec.students.forEach((st: any, i: number) => { st.studentNumber = String(i + 1); });
                  if (Array.isArray(rec.periods?.prelim?.scores)) {
                    const validIds = new Set(rec.students.map((s: any) => s.id));
                    rec.periods.prelim.scores = rec.periods.prelim.scores.filter((s: any) => validIds.has(s.studentId));
                  }
                  updatedAny = true;
                }

                nonAdmins.forEach((p: any) => {
                  const pSub = ((p as any).subject_code || "").toLowerCase().trim();
                  const pOffer = ((p as any).offer_number || "").toLowerCase().trim();

                  let belongs = false;
                  if (subDigits && pSub.includes(subDigits)) belongs = true;
                  else if (pSub && pSub === subCode) belongs = true;
                  else if (pOffer && pOffer === (rec.subject?.offerNumber || "").toLowerCase().trim()) belongs = true;

                  if (belongs) {
                    const profIdNumber = ((p as any).student_id || (p as any).id_number || `2026-${p.id.slice(0, 5)}`).toUpperCase().trim();
                    const profName = p.name || "Student";
                    const existing = rec.students.find(
                      (st: any) =>
                        st.id === p.id ||
                        st.studentId === profIdNumber ||
                        st.fullName?.toLowerCase().trim() === profName.toLowerCase().trim()
                    );
                    if (existing) {
                      if (existing.studentId !== profIdNumber || existing.fullName !== profName) {
                        existing.studentId = profIdNumber;
                        existing.fullName = profName;
                        updatedAny = true;
                      }
                    } else {
                      rec.students.push({
                        id: p.id,
                        studentNumber: String(rec.students.length + 1),
                        studentId: profIdNumber,
                        fullName: profName,
                      });
                      updatedAny = true;
                    }
                  }
                });

                // Clean up duplicate or ghost scores across all periods (prelim, midterm, semi-final, final)
                (Object.keys(rec.periods || {}) as ("prelim" | "midterm" | "semi-final" | "final")[]).forEach((pKey) => {
                  const periodData = rec.periods?.[pKey];
                  if (periodData && Array.isArray(periodData.quizActivities) && Array.isArray(periodData.scores)) {
                    const q1 = periodData.quizActivities[0];
                    if (q1) {
                      rec.students.forEach((st: any) => {
                        const s1 = periodData.scores.find((s: any) => s.studentId === st.id && s.activityId === q1.id);
                        periodData.quizActivities.forEach((act: any, aIdx: number) => {
                          if (aIdx > 0) {
                            const sOther = periodData.scores.find((s: any) => s.studentId === st.id && s.activityId === act.id);
                            if (sOther && s1 && sOther.score !== null && s1.score === sOther.score) {
                              periodData.scores = periodData.scores.filter((s: any) => !(s.studentId === st.id && s.activityId === act.id));
                              act.maxScore = 0;
                              updatedAny = true;
                            }
                          }
                        });
                      });
                    }

                    // Reconcile any quizzes accidentally placed in Quiz 10 instead of the incremental slot (e.g. Quiz 4)
                    const qActs = periodData.quizActivities;
                    if (qActs.length === 10) {
                      const lastAct = qActs[9]; // Quiz 10
                      const lastHasScore = periodData.scores.some((s: any) => s.activityId === lastAct.id && s.score !== null);
                      if (lastAct && (lastAct.maxScore > 0 || lastHasScore)) {
                        const firstEmptyIdx = qActs.findIndex((act: any, idx: number) => {
                          if (idx >= 9) return false;
                          const hasScore = periodData.scores.some((s: any) => s.activityId === act.id && s.score !== null);
                          return act.maxScore === 0 && !hasScore;
                        });

                        if (firstEmptyIdx >= 0) {
                          const targetAct = qActs[firstEmptyIdx];
                          targetAct.maxScore = lastAct.maxScore;
                          lastAct.maxScore = 0;

                          periodData.scores.forEach((s: any) => {
                            if (s.activityId === lastAct.id) {
                              s.activityId = targetAct.id;
                            }
                          });

                          updatedAny = true;
                        }
                      }
                    }

                    // Auto-fix: ensure any quiz with a student score (even if score is 0) has a non-zero maxScore
                    if (Array.isArray(periodData.quizActivities) && Array.isArray(periodData.scores)) {
                      periodData.quizActivities.forEach((q: any) => {
                        const activityScores = periodData.scores.filter((s: any) => s.activityId === q.id && s.score !== null);
                        const hasAnyScoreEntry = activityScores.length > 0;
                        const maxStudentScore = Math.max(
                          0,
                          ...activityScores.map((s: any) => Number(s.score || 0))
                        );
                        if (hasAnyScoreEntry && (q.maxScore === 0 || q.maxScore < maxStudentScore)) {
                          q.maxScore = Math.max(maxStudentScore, 10);
                          updatedAny = true;
                        }
                      });
                    }
                  }
                });
              });
              if (updatedAny) {
                localStorage.setItem("mathworkspace_grading_data", JSON.stringify(gradingRecords));
                window.dispatchEvent(new Event("storage"));
              }
            }
          }
        } catch (syncErr) {
          console.warn("Could not sync grading records with profiles in admin:", syncErr);
        }
      }

      // Format complete student submissions & activity items
      if (attemptsData && quizzesData) {
        const quizMap = new Map<string, any>((quizzesData as any[]).map((q: any) => [q.id, q]));
        const profileMap = new Map<string, any>(
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
                  payloadStudentName = raw.student_name || raw.studentName || "";
                  payloadStudentEmail = raw.student_email || raw.studentEmail || "";
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
            const isSubReviewAllowed = quiz?.allow_review !== undefined
              ? Boolean(quiz.allow_review)
              : localStorage.getItem(`quiz_allow_review_${a.quiz_id}`) === "true";

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
              allowReview: isSubReviewAllowed,
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
      navKey === "published-quizzes" ||
      navKey === "view-students" ||
      navKey === "grading"
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
        const topicsInCat = allCombinedTopics.filter(
          (t) => t.category === generatorCategory
        );
        const chosenTopics =
          selectedTopicIds.length > 0
            ? topicsInCat.filter((t) => selectedTopicIds.includes(t.id))
            : topicsInCat;

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

        const catLabel =
          generatorCategory === "linear-algebra"
            ? "Linear Algebra"
            : generatorCategory === "calculus-1"
            ? "Calculus 1"
            : "Calculus 2";
        setNewQuizTopic(catLabel);

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
        setGeneratorStep(2);
      } catch (err) {
        console.error("Failed to generate quiz:", err);
        alert("Error generating quiz questions. Please try again.");
      } finally {
        setIsGeneratingQuiz(false);
        setIsShowingGenerateLoader(false);
      }
    }, 2000);
  };

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

  const updateQuestionDraft = (
    id: string,
    field: keyof QuizQuestionDraft,
    value: any
  ) => {
    setNewQuizQuestionDrafts((prev) =>
      prev.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  const handleCreateQuiz = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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
      const selectedSub = availableSubjects.find((s) => s.id === selectedSubjectId);
      if (supabase) {
        const resolvedTopic = selectedSub && !newQuizTopic.includes(selectedSub.subjectCode)
          ? `${newQuizTopic} [${selectedSub.subjectCode}]`
          : newQuizTopic;

        // Attempt insert with subject_id (if table column exists) or fallback
        const baseQuizPayload: any = {
          title: newQuizTitle.trim(),
          topic: resolvedTopic,
          created_by: user?.id || null,
          points_per_item: typeof generatorPointsPerItem === "number" && generatorPointsPerItem > 0 ? generatorPointsPerItem : 1,
        };

        let quizData: any = null;
        let quizError: any = null;

        if (selectedSubjectId) {
          const resWithSubject = await supabase
            .from("quizzes")
            .insert([{ ...baseQuizPayload, subject_id: selectedSubjectId }])
            .select("id")
            .single();

          if (resWithSubject.error) {
            // If subject_id column doesn't exist yet in Supabase, fallback to inserting without it
            const fallbackRes = await supabase
              .from("quizzes")
              .insert([baseQuizPayload])
              .select("id")
              .single();
            quizData = fallbackRes.data;
            quizError = fallbackRes.error;
          } else {
            quizData = resWithSubject.data;
          }
        } else {
          const res = await supabase
            .from("quizzes")
            .insert([baseQuizPayload])
            .select("id")
            .single();
          quizData = res.data;
          quizError = res.error;
        }

        if (quizError || !quizData) {
          throw quizError || new Error("Failed to insert quiz into database");
        }

        // Also save subject mapping locally so it works even if DB column hasn't migrated yet
        if (selectedSubjectId) {
          localStorage.setItem(`quiz_subject_${quizData.id}`, selectedSubjectId);
          if (selectedSub) {
            localStorage.setItem(`quiz_subject_code_${quizData.id}`, selectedSub.subjectCode);
          }
        }
        localStorage.setItem(`quiz_period_${quizData.id}`, selectedGradingPeriod);

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

        await fetchQuizzesAndStats();

        // Automatically set the maxScore in Grading Sheet for this published quiz immediately
        try {
          const rawGrading = localStorage.getItem("mathworkspace_grading_data");
          if (rawGrading) {
            const records = JSON.parse(rawGrading);
            const periodKey = selectedGradingPeriod || "prelim";
            const targetRec = records.find((r: any) => {
              if (selectedSub) {
                return (
                  r.subject?.id === selectedSubjectId ||
                  r.subject?.subjectCode?.toLowerCase() === selectedSub.subjectCode.toLowerCase()
                );
              }
              return true;
            });

            if (targetRec && targetRec.periods?.[periodKey]) {
              const targetPeriod = targetRec.periods[periodKey];
              const totalQuizPoints = validDrafts.length * (typeof generatorPointsPerItem === "number" && generatorPointsPerItem > 0 ? generatorPointsPerItem : 1);
              // Find the next available quiz slot for this period (starts at Quiz 1)
              let slotIdx = targetPeriod.quizActivities.findIndex((act: any) => act.maxScore === 0);
              if (slotIdx === -1 || slotIdx >= 10) slotIdx = 0;

              if (targetPeriod.quizActivities[slotIdx]) {
                targetPeriod.quizActivities[slotIdx].maxScore = totalQuizPoints;
                localStorage.setItem(`quiz_number_${quizData.id}`, String(slotIdx + 1));
                localStorage.setItem("mathworkspace_grading_data", JSON.stringify(records));
                window.dispatchEvent(new Event("storage"));
                window.dispatchEvent(new CustomEvent("mathworkspace-quiz-submitted"));
              }
            }
          }
        } catch (gSyncErr) {
          console.warn("Could not pre-set max score on quiz publish:", gSyncErr);
        }
      } else {
        const count = validDrafts.length || 1;
        const newQuiz: QuizItem = {
          id: Date.now().toString(),
          title: newQuizTitle.trim(),
          topic: newQuizTopic,
          subject: selectedSubjectId || undefined,
          questionsCount: count,
          pointsPerItem: typeof generatorPointsPerItem === "number" && generatorPointsPerItem > 0 ? generatorPointsPerItem : 1,
          questions: validDrafts,
          attempts: 0,
          averageScore: 0,
          createdAt: "Just now",
          questionType: generatorQuestionType,
        };
        setQuizzes((prev) => [newQuiz, ...prev]);
        if (selectedSubjectId) {
          localStorage.setItem(`quiz_subject_${newQuiz.id}`, selectedSubjectId);
          if (selectedSub) {
            localStorage.setItem(`quiz_subject_code_${newQuiz.id}`, selectedSub.subjectCode);
          }
        }
      }

      setSelectedSubjectId("");
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

  const handleClearAllQuizzes = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete ALL published quizzes and all their student attempts? This cannot be undone.",
      )
    ) {
      return;
    }
    try {
      if (supabase) {
        // Delete all quiz attempts first or delete all quizzes (foreign key cascading)
        await supabase.from("quiz_attempts").delete().neq("id", "00000000-0000-0000-0000-000000000000");
        const { error } = await supabase.from("quizzes").delete().neq("id", "00000000-0000-0000-0000-000000000000");
        if (error) {
          // Fallback: delete row by row if neq filter isn't supported
          for (const q of quizzes) {
            await supabase.from("quizzes").delete().eq("id", q.id);
          }
        }
      }
      setQuizzes([]);
      setStudentSubmissions([]);
      // Clear localStorage quiz slots & numbers
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith("quiz_number_") || key.startsWith("quiz_slot_") || key.startsWith("quiz_subject_"))) {
          localStorage.removeItem(key);
        }
      }
    } catch (err: any) {
      console.error("Error clearing all quizzes:", err);
      alert("Failed to clear quizzes: " + (err.message || "Unknown error"));
    }
  };

  const handleToggleQuizReview = async (quizId: string, currentStatus?: boolean) => {
    const newStatus = !currentStatus;

    // 1. Optimistic state update in Admin
    setQuizzes((prev) =>
      prev.map((q) => (q.id === quizId ? { ...q, allowReview: newStatus } : q))
    );
    setStudentSubmissions((prev) =>
      prev.map((sub) =>
        sub.quizId === quizId ? { ...sub, allowReview: newStatus } : sub
      )
    );

    // 2. Persist in localStorage
    try {
      localStorage.setItem(`quiz_allow_review_${quizId}`, String(newStatus));
    } catch {}

    // 3. Persist to Supabase if available
    if (supabase) {
      try {
        await supabase
          .from("quizzes")
          .update({ allow_review: newStatus })
          .eq("id", quizId);
      } catch (err) {
        console.warn("Could not update allow_review in Supabase quizzes table:", err);
      }

      // 4. Broadcast real-time change to all connected students
      try {
        const syncChannel = supabase.channel("quiz-review-sync");
        syncChannel.subscribe((status) => {
          if (status === "SUBSCRIBED") {
            syncChannel.send({
              type: "broadcast",
              event: "quiz-review-toggled",
              payload: { quizId, allowReview: newStatus },
            });
            setTimeout(() => syncChannel.unsubscribe(), 1200);
          }
        });
      } catch (chanErr) {
        console.warn("Could not broadcast quiz review status:", chanErr);
      }
    }
  };

  const handleBulkToggleQuizReview = async (allow: boolean = true, targetQuizIds?: string[]) => {
    const idsToUpdate = targetQuizIds && targetQuizIds.length > 0 ? new Set(targetQuizIds) : null;

    // 1. Optimistic state update in Admin
    setQuizzes((prev) =>
      prev.map((q) => (idsToUpdate ? (idsToUpdate.has(q.id) ? { ...q, allowReview: allow } : q) : { ...q, allowReview: allow }))
    );
    setStudentSubmissions((prev) =>
      prev.map((sub) =>
        idsToUpdate ? (idsToUpdate.has(sub.quizId) ? { ...sub, allowReview: allow } : sub) : { ...sub, allowReview: allow }
      )
    );

    // 2. Persist in localStorage for each quiz and globally
    try {
      if (idsToUpdate) {
        idsToUpdate.forEach((id) => {
          localStorage.setItem(`quiz_allow_review_${id}`, String(allow));
        });
      } else {
        quizzes.forEach((q) => {
          localStorage.setItem(`quiz_allow_review_${q.id}`, String(allow));
        });
        localStorage.setItem("quiz_allow_review_all", String(allow));
      }
    } catch {}

    // 3. Persist to Supabase if available
    if (supabase) {
      try {
        if (idsToUpdate) {
          await supabase
            .from("quizzes")
            .update({ allow_review: allow })
            .in("id", Array.from(idsToUpdate));
        } else {
          await supabase
            .from("quizzes")
            .update({ allow_review: allow })
            .neq("id", "00000000-0000-0000-0000-000000000000");
        }
      } catch (err) {
        console.warn("Could not bulk update allow_review in Supabase quizzes table:", err);
      }

      // 4. Broadcast real-time change to all connected students
      try {
        const syncChannel = supabase.channel("quiz-review-sync");
        syncChannel.subscribe((status) => {
          if (status === "SUBSCRIBED") {
            if (idsToUpdate) {
              Array.from(idsToUpdate).forEach((qId) => {
                syncChannel.send({
                  type: "broadcast",
                  event: "quiz-review-toggled",
                  payload: { quizId: qId, allowReview: allow },
                });
              });
            } else {
              syncChannel.send({
                type: "broadcast",
                event: "quiz-review-toggled",
                payload: { quizId: "all", allowReview: allow },
              });
            }
            setTimeout(() => syncChannel.unsubscribe(), 1200);
          }
        });
      } catch (chanErr) {
        console.warn("Could not broadcast bulk review status:", chanErr);
      }
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

  // Chart data points matching reference image
  const chartLabels = [
    "Aug 1",
    "Aug 8",
    "Aug 15",
    "Aug 22",
    "Aug 29",
  ];

  return (
    <div className="fixed inset-0 z-40 bg-[#F8F9FA] dark:bg-[#0B0F19] text-[#1F242D] dark:text-slate-100 font-sans antialiased flex overflow-hidden select-none">
      {/* ========================================================================= */}
      {/* 1. LEFT SIDEBAR (Desktop Fixed + Mobile Drawer)                           */}
      {/* ========================================================================= */}
      <AdminDashboardSidebar
        isTopicCalculatorOpen={isTopicCalculatorOpen}
        isStudentViewMode={isStudentViewMode}
        setIsStudentViewMode={setIsStudentViewMode}
        activeNav={activeNav}
        handleNavClick={handleNavClick}
        mobileSidebarOpen={mobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
        quizzesCount={quizzes.length}
      />

      {/* ========================================================================= */}
      {/* 2. MAIN VIEWPORT & TOPBAR                                                 */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-[#F8F9FA] dark:bg-[#0B0F19]">
        <AdminDashboardHeader
          recentSubmissionToast={recentSubmissionToast}
          setRecentSubmissionToast={setRecentSubmissionToast}
          handleNavClick={handleNavClick}
          setMobileSidebarOpen={setMobileSidebarOpen}
          isNotificationsOpen={isNotificationsOpen}
          setIsNotificationsOpen={setIsNotificationsOpen}
          isAdminDropdownOpen={isAdminDropdownOpen}
          setIsAdminDropdownOpen={setIsAdminDropdownOpen}
          unreadActivities={unreadActivities}
          activeAdminNotifications={activeAdminNotifications}
          readNotificationIds={readNotificationIds}
          markAllAdminNotificationsAsRead={markAllAdminNotificationsAsRead}
          handleDeleteAllAdminNotifications={handleDeleteAllAdminNotifications}
          handleAdminNotificationClick={handleAdminNotificationClick}
          handleDeleteAdminNotification={handleDeleteAdminNotification}
          activities={activities}
          isStudentViewMode={isStudentViewMode}
          setIsStudentViewMode={setIsStudentViewMode}
          user={user}
          activeNav={activeNav}
          theme={theme}
          toggleTheme={toggleTheme}
          logout={logout}
          navigate={navigate}
        />

        {/* Scrollable Main Content Container */}
        <main className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {/* VIEW: STUDENT OVERVIEW (LEARNER VIEW MODE) */}
            {activeNav === "student-overview" && (
              <AdminStudentOverviewView
                studentOverviewGreeting={studentOverviewGreeting}
                studentOverviewTimeRange={studentOverviewTimeRange}
                setStudentOverviewTimeRange={setStudentOverviewTimeRange}
                isStudentTimeDropdownOpen={isStudentTimeDropdownOpen}
                setIsStudentTimeDropdownOpen={setIsStudentTimeDropdownOpen}
                studentOverviewAvg={studentOverviewAvg}
                quizzes={quizzes}
                studentSubmissions={studentSubmissions}
                handleNavClick={handleNavClick}
                handleStartStudentPreviewQuiz={handleStartStudentPreviewQuiz}
              />
            )}

            {/* VIEW: STUDENT QUIZZES (LEARNER VIEW MODE) */}
            {activeNav === "student-quizzes" && (
              <AdminStudentQuizzesView
                quizzes={quizzes}
                handleNavClick={handleNavClick}
                handleStartStudentPreviewQuiz={handleStartStudentPreviewQuiz}
                onToggleQuizReview={handleToggleQuizReview}
              />
            )}

            {/* VIEW A: ADMIN DASHBOARD OVERVIEW */}
            {activeNav === "dashboard" && (
              <AdminOverviewView
                totalQuizzes={totalQuizzes}
                totalStudents={totalStudents}
                totalAttempts={totalAttempts}
                activities={activities}
                timeRange={timeRange}
                setTimeRange={setTimeRange}
                isTimeDropdownOpen={isTimeDropdownOpen}
                setIsTimeDropdownOpen={setIsTimeDropdownOpen}
                chartLabels={chartLabels}
                handleNavClick={handleNavClick}
              />
            )}

            {/* VIEW B: CALCULATORS HUB */}
            {activeNav === "calculators" && (
              <div className="p-6 sm:p-7 max-w-[1440px] w-full mx-auto pb-16">
                <CalculatorsView
                  activeCalculator={activeCalculator}
                  setActiveCalculator={setActiveCalculator}
                  calcCategoryFilter={calcCategoryFilter}
                  setCalcCategoryFilter={setCalcCategoryFilter}
                  calcSearchQuery={calcSearchQuery}
                  setCalcSearchQuery={setCalcSearchQuery}
                />
              </div>
            )}

            {/* VIEW C: TOPICS CURRICULUM */}
            {activeNav === "topics" && (
              <div className="p-6 sm:p-7 max-w-[1440px] w-full mx-auto pb-16">
                <TopicsView
                  activeTopic={activeTopic}
                  setActiveTopic={setActiveTopic}
                  topicCategoryFilter={topicCategoryFilter}
                  setTopicCategoryFilter={setTopicCategoryFilter}
                  selectedChapterFilter={selectedChapterFilter}
                  setSelectedChapterFilter={setSelectedChapterFilter}
                  topicSearchQuery={topicSearchQuery}
                  setTopicSearchQuery={setTopicSearchQuery}
                  isTopicCalculatorOpen={isTopicCalculatorOpen}
                  setIsTopicCalculatorOpen={setIsTopicCalculatorOpen}
                />
              </div>
            )}

            {/* VIEW D: ADD QUIZ GENERATOR & MANAGEMENT */}
            {activeNav === "add-quiz" && (
              <AdminAddQuizView
                generatorStep={generatorStep}
                setGeneratorStep={setGeneratorStep}
                newQuizQuestionDrafts={newQuizQuestionDrafts}
                isPublishedQuizzesDrawerOpen={isPublishedQuizzesDrawerOpen}
                setIsPublishedQuizzesDrawerOpen={setIsPublishedQuizzesDrawerOpen}
                quizzes={quizzes}
                generatorCategory={generatorCategory}
                setGeneratorCategory={setGeneratorCategory}
                selectedTopicIds={selectedTopicIds}
                setSelectedTopicIds={setSelectedTopicIds}
                availableGeneratorTopics={availableGeneratorTopics}
                handleSelectAllTopics={handleSelectAllTopics}
                handleDeselectAllTopics={handleDeselectAllTopics}
                generatorTopicSearch={generatorTopicSearch}
                setGeneratorTopicSearch={setGeneratorTopicSearch}
                handleToggleTopic={handleToggleTopic}
                questionTypeSections={questionTypeSections}
                setQuestionTypeSections={setQuestionTypeSections}
                generatorItemCount={generatorItemCount}
                setGeneratorItemCount={setGeneratorItemCount}
                generatorPointsPerItem={generatorPointsPerItem}
                setGeneratorPointsPerItem={setGeneratorPointsPerItem}
                generatorQuestionType={generatorQuestionType}
                setGeneratorQuestionType={setGeneratorQuestionType}
                showPublishedSuccess={showPublishedSuccess}
                publishedGSAPRef={publishedGSAPRef}
                isShowingGenerateLoader={isShowingGenerateLoader}
                quizLoaderLogo={quizLoaderLogo}
                isGeneratingQuiz={isGeneratingQuiz}
                handleGenerateQuiz={handleGenerateQuiz}
                newQuizTopic={newQuizTopic}
                showAdminAnswers={showAdminAnswers}
                setShowAdminAnswers={setShowAdminAnswers}
                handleRegenerateAllQuestions={handleRegenerateAllQuestions}
                newQuizTitle={newQuizTitle}
                setNewQuizTitle={setNewQuizTitle}
                handleRegenerateQuestion={handleRegenerateQuestion}
                updateQuestionDraft={updateQuestionDraft}
                isSubmittingQuiz={isSubmittingQuiz}
                handleCreateQuiz={handleCreateQuiz}
                isLoadingQuizzes={isLoadingQuizzes}
                adminReviewQuizModal={adminReviewQuizModal}
                setAdminReviewQuizModal={setAdminReviewQuizModal}
                handleDeleteQuiz={handleDeleteQuiz}
                availableSubjects={availableSubjects}
                selectedSubjectId={selectedSubjectId}
                setSelectedSubjectId={setSelectedSubjectId}
                selectedGradingPeriod={selectedGradingPeriod}
                setSelectedGradingPeriod={setSelectedGradingPeriod}
              />
            )}

            {/* VIEW: PUBLISHED QUIZZES MANAGEMENT */}
            {activeNav === "published-quizzes" && (
              <AdminPublishedQuizzesView
                quizzes={quizzes}
                isLoadingQuizzes={isLoadingQuizzes}
                fetchQuizzesAndStats={fetchQuizzesAndStats}
                handleNavClick={handleNavClick}
                setAdminReviewQuizModal={setAdminReviewQuizModal}
                handleDeleteQuiz={handleDeleteQuiz}
                handleClearAllQuizzes={handleClearAllQuizzes}
                handleStartStudentPreviewQuiz={handleStartStudentPreviewQuiz}
                onToggleQuizReview={handleToggleQuizReview}
                onBulkToggleQuizReview={handleBulkToggleQuizReview}
              />
            )}

            {/* VIEW E: QUIZ RESULTS VIEW */}
            {activeNav === "quiz-results" && (
              <AdminQuizResultsView
                fetchQuizzesAndStats={fetchQuizzesAndStats}
                isLoadingQuizzes={isLoadingQuizzes}
                handleNavClick={handleNavClick}
                resultsViewMode={resultsViewMode}
                setResultsViewMode={setResultsViewMode}
                studentSubmissions={studentSubmissions}
                quizzes={quizzes}
                resultsSearchQuery={resultsSearchQuery}
                setResultsSearchQuery={setResultsSearchQuery}
                resultsTopicFilter={resultsTopicFilter}
                setResultsTopicFilter={setResultsTopicFilter}
                filteredSubmissions={filteredSubmissions}
                setSelectedSubmissionForReview={setSelectedSubmissionForReview}
                handleDeleteQuiz={handleDeleteQuiz}
                onToggleQuizReview={handleToggleQuizReview}
                onBulkToggleQuizReview={handleBulkToggleQuizReview}
              />
            )}

            {/* VIEW F: HISTORY QUIZZES VIEW */}
            {activeNav === "history-quizzes" && (
              <AdminHistoryQuizzesView
                activities={activities}
                archivedActivityIds={archivedActivityIds}
                historyTab={historyTab}
                setHistoryTab={setHistoryTab}
                archivedSearchQuery={archivedSearchQuery}
                setArchivedSearchQuery={setArchivedSearchQuery}
                handleArchiveActivity={handleArchiveActivity}
                handleDeleteActivity={handleDeleteActivity}
                handleRestoreActivity={handleRestoreActivity}
              />
            )}

            {/* VIEW G: VIEW STUDENTS DIRECTORY */}
            {activeNav === "view-students" && (
              <AdminViewStudentsView
                students={students}
                isBlockCustomizationMode={isBlockCustomizationMode}
                setIsBlockCustomizationMode={setIsBlockCustomizationMode}
                studentSearchQuery={studentSearchQuery}
                setStudentSearchQuery={setStudentSearchQuery}
                availableBlocks={availableBlocks}
                selectedStudentBlockFilter={selectedStudentBlockFilter}
                setSelectedStudentBlockFilter={setSelectedStudentBlockFilter}
                isLoadingQuizzes={isLoadingQuizzes}
                filteredStudents={filteredStudents}
                onlineStudentKeys={onlineStudentKeys}
                handleOpenMoveBlockModal={handleOpenMoveBlockModal}
              />
            )}

            {/* VIEW H: STUDENT GRADING MANAGEMENT SYSTEM */}
            {activeNav === "grading" && (
              <GradingManagementView />
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* ========================================================================= */}
      {/* 3. MODALS                                                                 */}
      {/* ========================================================================= */}
      {/* Quiz Preview Modal (Student Simulation) */}
      <AdminQuizPreviewModal
        previewQuizModal={previewQuizModal}
        setPreviewQuizModal={setPreviewQuizModal}
        previewQuestionIndex={previewQuestionIndex}
        setPreviewQuestionIndex={setPreviewQuestionIndex}
        previewAnswers={previewAnswers}
        setPreviewAnswers={setPreviewAnswers}
        previewShowExplanation={previewShowExplanation}
        setPreviewShowExplanation={setPreviewShowExplanation}
        previewQuizSubmitted={previewQuizSubmitted}
        setPreviewQuizSubmitted={setPreviewQuizSubmitted}
      />

      {/* Student Block Management Modal */}
      <AdminMoveBlockModal
        editingBlockStudent={editingBlockStudent}
        setEditingBlockStudent={setEditingBlockStudent}
        isUpdatingStudentBlock={isUpdatingStudentBlock}
        blockUpdateSuccessMessage={blockUpdateSuccessMessage}
        setBlockUpdateSuccessMessage={setBlockUpdateSuccessMessage}
        targetBlockInput={targetBlockInput}
        setTargetBlockInput={setTargetBlockInput}
        availableBlocks={availableBlocks}
        handleSaveStudentBlock={handleSaveStudentBlock}
      />

      {/* Student Submission Review Modal */}
      <AdminReviewSubmissionModal
        selectedSubmissionForReview={selectedSubmissionForReview}
        setSelectedSubmissionForReview={setSelectedSubmissionForReview}
        quizzes={quizzes}
        onToggleQuizReview={handleToggleQuizReview}
      />
    </div>
  );
}
