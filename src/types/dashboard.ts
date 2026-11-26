export type QuizQuestionType =
  | "multiple_choice"
  | "identification"
  | "enumeration"
  | "problem_solving";

export interface QuizQuestionItem {
  id: string;
  questionIndex: number;
  prompt: string;
  questionType?: QuizQuestionType;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: "A" | "B" | "C" | "D";
  correctAnswerText?: string;
  explanation?: string;
}

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
  pointsPerItem?: number;
  allowReview?: boolean;
  subjectId?: string;
  assignedSubject?: string;
  designatedSubject?: string;
  quizNumber?: number;
  period?: "prelim" | "midterm" | "semi-final" | "final";
}

export interface QuizItem {
  id: string;
  title: string;
  topic: string;
  subject?: string;
  quizNumber?: number;
  period?: "prelim" | "midterm" | "semi-final" | "final";
  questionsCount: number;
  questions: QuizQuestionDraft[];
  attempts: number;
  averageScore: number;
  createdAt: string;
  questionType?: QuizQuestionType;
  pointsPerItem: number;
  allowReview?: boolean;
}

export interface QuizAnswerRecord {
  questionId: string;
  prompt: string;
  questionType?: QuizQuestionType;
  selected: string;
  correct: string;
  correctAnswerText?: string;
  isCorrect: boolean;
  explanation?: string;
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
  allowReview?: boolean;
}

export interface StudentQuizRecord {
  id: string;
  quizTitle: string;
  topic: string;
  questions: number;
  attempts: number;
  bestScore: number;
  status: "Completed" | "In Progress" | "Not Started";
}

export interface StudentQuizHistory {
  id: string;
  quizTitle: string;
  score: number;
  takenAt: string;
  timeSpent: string;
  result: "Passed" | "Failed";
}

export interface QuizSummaryRecord {
  id: string;
  quizTitle: string;
  totalStudents: number;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
}

export interface StudentItem {
  id: string;
  name: string;
  email: string;
  studentId?: string;
  block?: string;
  avatarUrl?: string;
  quizzesTaken: number;
  averageScore: number;
  lastActive: string;
  joinedDate: string;
  password?: string;
}

export interface ActivityItem {
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
  allowReview?: boolean;
}

export interface CalculatorCardMeta {
  id: string;
  title: string;
  category: "linear-algebra" | "calculus-1" | "calculus-2";
  categoryLabel: string;
  formula: string;
  description: string;
  badge: string;
  type: "linear" | "calculus";
  calculusDefId?: string;
  image?: string;
}

export interface UnifiedTopicItem {
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

export function createEmptyQuestions(
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

export interface QuizSection {
  type: QuizQuestionType;
  itemCount: number;
  pointsPerItem: number;
}
