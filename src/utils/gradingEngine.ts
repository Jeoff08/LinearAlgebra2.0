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

// =====================================================================
// Cumulative Grade Computations (SERMS Raw Data & Cumulative Terms)
//
// Exact formulas from the Excel grading sheet:
//   MIDTERM     = (PRELIM + QG2) / 2         — Excel: =(CN6+CO6)/2
//   SEMI-FINAL  = (MIDTERM + QG3) / 2        — Excel: =(CP6+CQ6)/2
//   FINAL       = (SEMI-FINAL + QG4) / 2     — Excel: =(CR6+CS6)/2
//   FINAL GRADE = FINAL                      — Excel: =CT6
//
// Each cumulative grade uses the PREVIOUS cumulative grade, not PRELIM.
// Full decimal precision is kept during calculation.
// Rounding is applied only at the display/recording layer.
// =====================================================================

export interface CumulativeGradeResult {
  prelim: number | null;          // PRELIM – Raw grade from the Prelim grading period
  qg2: number | null;             // QG2 – Raw grade from the second grading period (Midterm)
  midterm: number | null;         // MIDTERM – Cumulative grade = (PRELIM + QG2) / 2
  qg3: number | null;             // QG3 – Raw grade from the third grading period (Semi-Final)
  semiFinal: number | null;       // SEMI-FINAL – Cumulative grade = (MIDTERM + QG3) / 2
  qg4: number | null;             // QG4 – Raw grade from the fourth grading period (Final)
  finalCumulative: number | null; // FINAL – Cumulative grade = (SEMI-FINAL + QG4) / 2
  finalGrade: number | null;      // FINAL GRADE = FINAL (strictly equal to finalCumulative)
  runningGrade: number | null;    // Latest available cumulative (for partial/ongoing UI display)
  isPartial: boolean;             // true if not all 4 grading periods are completed but some grade exists
}

/**
 * Computes cumulative grades using the exact SERMS formulas.
 *
 * Computation flow (each step uses the PREVIOUS cumulative, not PRELIM):
 *   1. Get PRELIM grade
 *   2. Get QG2 grade → MIDTERM = (PRELIM + QG2) / 2
 *   3. Get QG3 grade → SEMI-FINAL = (MIDTERM + QG3) / 2
 *   4. Get QG4 grade → FINAL = (SEMI-FINAL + QG4) / 2
 *   5. FINAL GRADE = FINAL
 *
 * Validation:
 *   - If a required previous grading period is missing, subsequent cumulative grades are null.
 *   - Full decimal precision is maintained during all intermediate calculations.
 *   - FINAL GRADE is strictly equal to FINAL (no independent rounding).
 *
 * Example verification:
 *   PRELIM=2.90, QG2=2.50, QG3=2.20, QG4=2.00
 *   MIDTERM     = (2.90 + 2.50) / 2 = 2.70
 *   SEMI-FINAL  = (2.70 + 2.20) / 2 = 2.45
 *   FINAL       = (2.45 + 2.00) / 2 = 2.225
 *   FINAL GRADE = 2.225
 */
export function computeCumulativeGrades(
  prelim: number | null,
  qg2: number | null,
  qg3: number | null,
  qg4: number | null
): CumulativeGradeResult {
  // Validate inputs — reject NaN / Infinity
  const validPrelim = prelim !== null && Number.isFinite(prelim) ? prelim : null;
  const validQg2 = qg2 !== null && Number.isFinite(qg2) ? qg2 : null;
  const validQg3 = qg3 !== null && Number.isFinite(qg3) ? qg3 : null;
  const validQg4 = qg4 !== null && Number.isFinite(qg4) ? qg4 : null;

  // A. MIDTERM = (PRELIM + QG2) / 2  — Excel: =(CN6+CO6)/2
  const midterm =
    validPrelim !== null && validQg2 !== null
      ? (validPrelim + validQg2) / 2
      : null;

  // B. SEMI-FINAL = (MIDTERM + QG3) / 2  — Excel: =(CP6+CQ6)/2
  //    Uses computed MIDTERM (not PRELIM) per SERMS chain
  const semiFinal =
    midterm !== null && validQg3 !== null
      ? (midterm + validQg3) / 2
      : null;

  // C. FINAL = (SEMI-FINAL + QG4) / 2  — Excel: =(CR6+CS6)/2
  //    Uses computed SEMI-FINAL per SERMS chain
  const finalCumulative =
    semiFinal !== null && validQg4 !== null
      ? (semiFinal + validQg4) / 2
      : null;

  // D. FINAL GRADE = FINAL  — Excel: =CT6  (strictly equal, no rounding)
  const finalGrade = finalCumulative;

  // Running/partial cumulative for UI display when not all periods are complete:
  //   Shows the latest available cumulative with a "Partial" indicator
  const runningGrade =
    finalCumulative !== null ? finalCumulative
    : semiFinal !== null ? semiFinal
    : midterm !== null ? midterm
    : validPrelim !== null ? validPrelim
    : null;

  const isComplete = finalCumulative !== null;

  return {
    prelim: validPrelim,
    qg2: validQg2,
    midterm,
    qg3: validQg3,
    semiFinal,
    qg4: validQg4,
    finalCumulative,
    finalGrade,
    runningGrade,
    isPartial: !isComplete && runningGrade !== null,
  };
}

/**
 * Format a SERMS grade for display according to the system rules:
 * - Keeps full decimal precision up to 3 or 4 decimal places if present (e.g. 2.225 -> "2.225")
 * - Formats standard numbers with at least 2 decimal places (e.g. 2.7 -> "2.70", 2.45 -> "2.45")
 * - Returns "—" if null or invalid
 */
export function formatSermsValue(val: number | null | undefined): string {
  if (val === null || val === undefined || isNaN(val) || !Number.isFinite(val)) return "—";
  const str = val.toString();
  const decimals = str.includes(".") ? str.split(".")[1].length : 0;
  if (decimals >= 3) {
    return val.toFixed(Math.min(decimals, 4));
  }
  return val.toFixed(2);
}
