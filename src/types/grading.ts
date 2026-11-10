// =====================================================================
// Grading Management System — Type Definitions
// =====================================================================

/** Grading period identifiers */
export type GradingPeriod = "prelim" | "midterm" | "semi-final" | "final";

export const GRADING_PERIODS: { key: GradingPeriod; label: string }[] = [
  { key: "prelim", label: "Prelim" },
  { key: "midterm", label: "Midterm" },
  { key: "semi-final", label: "Semi-Final" },
  { key: "final", label: "Final" },
];

/** Subject information */
export interface GradingSubject {
  id: string;
  subjectCode: string;
  subjectName: string;
  offerNumber: string;
  academicYear: string;
  semester: string;
  section: string;
  instructorName: string;
  createdAt: string;
  updatedAt: string;
  gradesPublished?: boolean;
  publishedTerms?: GradingPeriod[];
}

/** A student enrolled in a subject */
export interface GradingStudent {
  id: string;
  studentNumber: string;  // e.g. "1", "2", "3"
  studentId: string;      // e.g. "2026-02182"
  fullName: string;
}

/** A configurable grading activity (quiz, participation, or exam) */
export interface GradingActivity {
  id: string;
  type: "quiz" | "participation" | "exam";
  label: string;           // e.g. "Quiz 1", "Participation 3", "Exam"
  maxScore: number;
  index: number;           // ordering index
}

/** An individual student's score for a specific activity */
export interface StudentScore {
  studentId: string;
  activityId: string;
  score: number | null;    // null = not yet entered (distinct from 0)
}

/** Per-period grading configuration and data */
export interface PeriodGradingData {
  period: GradingPeriod;
  quizActivities: GradingActivity[];
  participationActivities: GradingActivity[];
  examActivity: GradingActivity;
  scores: StudentScore[];
  /** Admin overrides for Total Quiz per student (studentId → overridden total) */
  totalQuizOverrides?: Record<string, number>;
  /** Admin overrides for Total CP per student (studentId → overridden total) */
  totalParticipationOverrides?: Record<string, number>;
}

/** Full subject grading record (all periods + students) */
export interface SubjectGradingRecord {
  subject: GradingSubject;
  students: GradingStudent[];
  periods: Record<GradingPeriod, PeriodGradingData>;
}

// =====================================================================
// Computed Grades (derived, not stored)
// =====================================================================

export interface StudentGradeComputation {
  studentId: string;
  totalQuizScore: number;
  maxQuizScore: number;
  quizTransmuted: number;

  totalParticipationScore: number;
  maxParticipationScore: number;
  participationTransmuted: number;

  examScore: number;
  maxExamScore: number;
  examTransmuted: number;

  totalGrade: number;
  roundedGrade: number;
  gradeEquivalent: number | string | null;

  isComplete: boolean;     // true if all scores are filled in
}

// =====================================================================
// Grading Weights (from original spreadsheet)
// =====================================================================

export const GRADING_WEIGHTS = {
  quiz: 0.25,
  participation: 0.15,
  exam: 0.60,
} as const;

// =====================================================================
// Helper: Generate unique IDs
// =====================================================================
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

// =====================================================================
// Default factory functions
// =====================================================================

export function createDefaultSubject(
  code = "MATH 101",
  name = "Calculus with Analytic Geometry",
  offerNumber = "80062",
  academicYear = "SY 2026-2027",
  semester = "Term 1",
  section = "BSCS 1-A",
  instructorName = "Castrence, NL"
): GradingSubject {
  return {
    id: generateId(),
    subjectCode: code,
    subjectName: name,
    offerNumber,
    academicYear,
    semester,
    section,
    instructorName,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export function createDefaultStudent(index: number): GradingStudent {
  return {
    id: generateId(),
    studentNumber: String(index + 1),
    studentId: "",
    fullName: "",
  };
}

export function createQuizActivity(index: number, maxScore = 0): GradingActivity {
  return {
    id: generateId(),
    type: "quiz",
    label: `Quiz ${index + 1}`,
    maxScore,
    index,
  };
}

export function createParticipationActivity(index: number, maxScore = 0): GradingActivity {
  return {
    id: generateId(),
    type: "participation",
    label: `Class Participation ${index + 1}`,
    maxScore,
    index,
  };
}

export function createExamActivity(maxScore = 36): GradingActivity {
  return {
    id: generateId(),
    type: "exam",
    label: "Exam",
    maxScore,
    index: 0,
  };
}

export function createDefaultPeriodData(period: GradingPeriod): PeriodGradingData {
  const quizActivities = Array.from({ length: 10 }, (_, i) =>
    createQuizActivity(i, 0)
  );
  const participationActivities = Array.from({ length: 5 }, (_, i) =>
    createParticipationActivity(i, 0)
  );
  const examActivity = createExamActivity(0);

  return {
    period,
    quizActivities,
    participationActivities,
    examActivity,
    scores: [],
  };
}

export function createDefaultSubjectRecord(
  code = "MATH 101",
  name = "Calculus with Analytic Geometry",
  offerNumber = "80062"
): SubjectGradingRecord {
  const subject = createDefaultSubject(code, name, offerNumber);
  const periods: Record<GradingPeriod, PeriodGradingData> = {
    prelim: createDefaultPeriodData("prelim"),
    midterm: createDefaultPeriodData("midterm"),
    "semi-final": createDefaultPeriodData("semi-final"),
    final: createDefaultPeriodData("final"),
  };

  return {
    subject,
    students: [],
    periods,
  };
}
