// =====================================================================
// Grade Equivalent Lookup Table — Reproduced from eqgrade sheet
// Maps numerical grade (rounded) → grade equivalent
// Exact reproduction matching the screenshot and Excel sheet formulas:
// =VLOOKUP(W5, eqgrade!$A$2:$B$102, 2,)
// =====================================================================

/**
 * Maps rounded numerical grades (0–100) to their official grade equivalent.
 * 
 * Verified against actual grades in reference spreadsheet:
 * - 100 → 1.00
 * - 83 → 2.20
 * - 82 → 2.30
 * - 81 → 2.40
 * - 78 → 2.70
 * - 77 → 2.80
 * - 75 → 3.00 (Passing)
 * - 74 → 3.10
 * - 73 → 3.20
 * - 71 → 3.40
 * - 70 → 3.50
 * - 65 → 4.00
 * - 55 & below → 5.00 (Failing)
 */
const GRADE_EQUIVALENT_TABLE: Record<number, number> = {
  100: 1.00,
  99: 1.00,
  98: 1.00,
  97: 1.00,
  96: 1.00,
  95: 1.00,
  94: 1.10,
  93: 1.20,
  92: 1.30,
  91: 1.40,
  90: 1.50,
  89: 1.60,
  88: 1.70,
  87: 1.80,
  86: 1.90,
  85: 2.00,
  84: 2.10,
  83: 2.20,
  82: 2.30,
  81: 2.40,
  80: 2.50,
  79: 2.60,
  78: 2.70,
  77: 2.80,
  76: 2.90,
  75: 3.00,
  74: 3.10,
  73: 3.20,
  72: 3.30,
  71: 3.40,
  70: 3.50,
  69: 3.60,
  68: 3.70,
  67: 3.80,
  66: 3.90,
  65: 4.00,
  64: 4.10,
  63: 4.20,
  62: 4.30,
  61: 4.40,
  60: 4.50,
  59: 4.60,
  58: 4.70,
  57: 4.80,
  56: 4.90,
  55: 5.00,
  54: 5.00,
  53: 5.00,
  52: 5.00,
  51: 5.00,
  50: 5.00,
  49: 5.00,
  48: 5.00,
  47: 5.00,
  46: 5.00,
  45: 5.00,
  44: 5.00,
  43: 5.00,
  42: 5.00,
  41: 5.00,
  40: 5.00,
  39: 5.00,
  38: 5.00,
  37: 5.00,
  36: 5.00,
  35: 5.00,
  34: 5.00,
  33: 5.00,
  32: 5.00,
  31: 5.00,
  30: 5.00,
  29: 5.00,
  28: 5.00,
  27: 5.00,
  26: 5.00,
  25: 5.00,
  24: 5.00,
  23: 5.00,
  22: 5.00,
  21: 5.00,
  20: 5.00,
  19: 5.00,
  18: 5.00,
  17: 5.00,
  16: 5.00,
  15: 5.00,
  14: 5.00,
  13: 5.00,
  12: 5.00,
  11: 5.00,
  10: 5.00,
  9: 5.00,
  8: 5.00,
  7: 5.00,
  6: 5.00,
  5: 5.00,
  4: 5.00,
  3: 5.00,
  2: 5.00,
  1: 5.00,
  0: 5.00,
};

/**
 * Look up the grade equivalent for a rounded total grade.
 * Returns null if grade is invalid or out of range.
 */
export function lookupGradeEquivalent(roundedGrade: number): number | null {
  if (roundedGrade === null || roundedGrade === undefined || isNaN(roundedGrade)) {
    return null;
  }
  const intVal = Math.round(roundedGrade);
  if (intVal in GRADE_EQUIVALENT_TABLE) {
    return GRADE_EQUIVALENT_TABLE[intVal];
  }
  if (intVal > 100) return 1.00;
  if (intVal < 0) return 5.00;
  return null;
}

/**
 * Format a grade equivalent as string with 2 decimal places (e.g. "3.10", "1.00").
 */
export function formatGradeEquivalent(equiv: number | null | undefined): string {
  if (equiv === null || equiv === undefined || isNaN(equiv)) return "-";
  return equiv.toFixed(2);
}

/**
 * Get remarks description for a grade equivalent.
 */
export function getGradeRemarks(equiv: number | null | undefined): {
  text: string;
  isPassing: boolean;
  color: string;
} {
  if (equiv === null || equiv === undefined) {
    return { text: "Incomplete", isPassing: false, color: "text-gray-400" };
  }
  if (equiv <= 3.00) {
    return { text: "Passed", isPassing: true, color: "text-green-600 dark:text-green-400" };
  }
  if (equiv <= 3.50) {
    return { text: "Conditional / Warning", isPassing: false, color: "text-amber-600 dark:text-amber-400" };
  }
  return { text: "Failed", isPassing: false, color: "text-red-600 dark:text-red-400" };
}

export default GRADE_EQUIVALENT_TABLE;
