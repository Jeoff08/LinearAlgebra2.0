// =====================================================================
// Grading Computation Engine
// Implements exact formulas from the original Excel grading sheet.
// =====================================================================

import type {
  PeriodGradingData,
  GradingStudent,
  StudentGradeComputation,
  StudentScore,
  GradingActivity,
  GRADING_WEIGHTS,
} from "../types/grading";
import { lookupGradeEquivalent } from "../data/gradeEquivalentTable";

const WEIGHTS = { quiz: 0.25, participation: 0.15, exam: 0.60 };

// =====================================================================
// Core Score Helpers
// =====================================================================

/**
 * Get a student's score for a specific activity.
 * Returns null if score not yet entered.
 */
export function getScore(
  scores: StudentScore[],
  studentId: string,
  activityId: string
): number | null {
  const found = scores.find(
    (s) => s.studentId === studentId && s.activityId === activityId
  );
  return found?.score ?? null;
}

/**
 * Set a student's score for a specific activity.
 * Returns a new scores array (immutable).
 */
export function setScore(
  scores: StudentScore[],
  studentId: string,
  activityId: string,
  value: number | null
): StudentScore[] {
  const existingIdx = scores.findIndex(
    (s) => s.studentId === studentId && s.activityId === activityId
  );
  if (existingIdx >= 0) {
    const updated = [...scores];
    updated[existingIdx] = { ...updated[existingIdx], score: value };
    return updated;
  }
  return [...scores, { studentId, activityId, score: value }];
}

// =====================================================================
// Totals
// =====================================================================

/**
 * Calculate total score for a set of activities for one student.
 */
export function calculateTotal(
  scores: StudentScore[],
  studentId: string,
  activities: GradingActivity[]
): { total: number; max: number; allFilled: boolean } {
  let total = 0;
  let max = 0;
  let allFilled = true;

  for (const act of activities) {
    max += act.maxScore;
    const score = getScore(scores, studentId, act.id);
    if (score === null) {
      allFilled = false;
    } else {
      total += score;
    }
  }

  return { total, max, allFilled };
}

/**
 * Calculate maximum possible score for a set of activities.
 */
export function calculateMaxTotal(activities: GradingActivity[]): number {
  return activities.reduce((sum, act) => sum + act.maxScore, 0);
}

// =====================================================================
// Transmutation Formula
// =====================================================================

/**
 * Transmutation formula from the original Excel:
 * = (Score / MaxScore × 50) + 50
 * 
 * Handles division by zero: if maxScore is 0, returns 50.
 */
export function transmute(score: number, maxScore: number): number {
  if (maxScore === 0) return 50;
  return (score / maxScore) * 50 + 50;
}

// =====================================================================
// Total Grade Formula
// =====================================================================

/**
 * Implements the original Excel formula:
 * =((((N5*50)/$N$5)+50)*0.25)+((((T5*50)/$T$5)+50)*0.15)+((((U5*50)/$U$5)+50)*0.6)
 * 
 * Which simplifies to:
 * Total = (quizTransmuted × 0.25) + (participationTransmuted × 0.15) + (examTransmuted × 0.60)
 */
export function calculateTotalGrade(
  quizTransmuted: number,
  participationTransmuted: number,
  examTransmuted: number
): number {
  return (
    quizTransmuted * WEIGHTS.quiz +
    participationTransmuted * WEIGHTS.participation +
    examTransmuted * WEIGHTS.exam
  );
}

// =====================================================================
// Full Student Grade Computation
// =====================================================================

/**
 * Compute a complete grade breakdown for one student in one period.
 */
export function computeStudentGrade(
  periodData: PeriodGradingData,
  studentId: string
): StudentGradeComputation {
  const { scores, quizActivities, participationActivities, examActivity } = periodData;

  // Quiz totals
  const quizResult = calculateTotal(scores, studentId, quizActivities);
  const maxQuizScore = calculateMaxTotal(quizActivities);

  // Participation totals
  const partResult = calculateTotal(scores, studentId, participationActivities);
  const maxParticipationScore = calculateMaxTotal(participationActivities);

  // Exam
  const examScore = getScore(scores, studentId, examActivity.id);
  const maxExamScore = examActivity.maxScore;
  const examFilled = examScore !== null;

  // All complete check
  const isComplete = quizResult.allFilled && partResult.allFilled && examFilled;

  // Transmuted scores
  const quizTransmuted = transmute(quizResult.total, maxQuizScore);
  const participationTransmuted = transmute(partResult.total, maxParticipationScore);
  const examTransmuted = transmute(examScore ?? 0, maxExamScore);

  // Total grade
  const totalGrade = calculateTotalGrade(
    quizTransmuted,
    participationTransmuted,
    examTransmuted
  );

  // Rounded grade (ROUND to nearest integer)
  const roundedGrade = Math.round(totalGrade);

  // Grade equivalent from lookup table
  const gradeEquivalent = lookupGradeEquivalent(roundedGrade);

  return {
    studentId,
    totalQuizScore: quizResult.total,
    maxQuizScore,
    quizTransmuted,
    totalParticipationScore: partResult.total,
    maxParticipationScore,
    participationTransmuted,
    examScore: examScore ?? 0,
    maxExamScore,
    examTransmuted,
    totalGrade,
    roundedGrade,
    gradeEquivalent,
    isComplete,
  };
}

/**
 * Compute grades for all students in a period.
 */
export function computeAllStudentGrades(
  periodData: PeriodGradingData,
  students: GradingStudent[]
): StudentGradeComputation[] {
  return students.map((s) => computeStudentGrade(periodData, s.id));
}

// =====================================================================
// Validation Helpers
// =====================================================================

/**
 * Validate a score value.
 * Returns an error message if invalid, or null if valid.
 */
export function validateScore(
  value: number | null,
  maxScore: number,
  allowExceed: boolean = false
): string | null {
  if (value === null) return null; // null means not entered, not an error
  if (value < 0) return "Score cannot be negative";
  if (!allowExceed && value > maxScore) return `Score cannot exceed ${maxScore}`;
  if (!Number.isFinite(value)) return "Invalid number";
  return null;
}

// =====================================================================
// Grade Breakdown Text
// =====================================================================

/**
 * Generate a detailed human-readable computation breakdown for a student.
 */
export function generateGradeBreakdown(comp: StudentGradeComputation): string {
  const lines: string[] = [];

  lines.push("QUIZZES:");
  lines.push(
    `${comp.totalQuizScore} / ${comp.maxQuizScore} × 50 + 50 = ${comp.quizTransmuted.toFixed(2)}`
  );
  lines.push("");

  lines.push("CLASS PARTICIPATION:");
  lines.push(
    `${comp.totalParticipationScore} / ${comp.maxParticipationScore} × 50 + 50 = ${comp.participationTransmuted.toFixed(2)}`
  );
  lines.push("");

  lines.push("EXAMINATION:");
  lines.push(
    `${comp.examScore} / ${comp.maxExamScore} × 50 + 50 = ${comp.examTransmuted.toFixed(2)}`
  );
  lines.push("");

  lines.push("TOTAL GRADE:");
  lines.push(
    `(${comp.quizTransmuted.toFixed(2)} × 0.25) + (${comp.participationTransmuted.toFixed(2)} × 0.15) + (${comp.examTransmuted.toFixed(2)} × 0.60)`
  );
  lines.push(
    `= ${(comp.quizTransmuted * 0.25).toFixed(2)} + ${(comp.participationTransmuted * 0.15).toFixed(2)} + ${(comp.examTransmuted * 0.60).toFixed(2)}`
  );
  lines.push(`= ${comp.totalGrade.toFixed(2)}`);
  lines.push("");

  lines.push(`ROUNDED GRADE: ${comp.roundedGrade}`);
  lines.push(`GRADE EQUIVALENT: ${comp.gradeEquivalent}`);

  return lines.join("\n");
}
