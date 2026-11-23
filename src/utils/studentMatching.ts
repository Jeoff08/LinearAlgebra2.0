// =====================================================================
// Student Name and ID Matching Utilities
// Handles flexible name matching (e.g. "Abad, James Val Pascual" vs "James Val Pascual Abad")
// and ensures students with matching or differing names/lastnames are accurately differentiated.
// =====================================================================

export function normalizeNameTokens(name: string): string[] {
  return (name || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * Compares two student names to determine if they refer to the same student.
 * - Handles differences in ordering (e.g. "Last, First Middle" vs "First Middle Last")
 * - Distinguishes students sharing the same surname (e.g. "Abad, James" vs "Abad, Maria" -> false)
 * - Tolerates middle initials or omitted middle names when first and last names match.
 */
export function isSameStudentName(a: string | null | undefined, b: string | null | undefined): boolean {
  if (!a || !b) return false;
  const tA = normalizeNameTokens(a);
  const tB = normalizeNameTokens(b);
  if (tA.length === 0 || tB.length === 0) return false;

  // Direct sorted token match (handles "Abad, James Val Pascual" vs "James Val Pascual Abad")
  const sA = [...tA].sort().join(' ');
  const sB = [...tB].sort().join(' ');
  if (sA === sB) return true;

  const setA = new Set(tA);
  const setB = new Set(tB);
  const common = tA.filter((x) => setB.has(x));

  // Subset match with at least 2 common tokens (e.g. "Abad, James" inside "Abad, James Val Pascual")
  const aSubsetOfB = tA.every((x) => setB.has(x));
  const bSubsetOfA = tB.every((x) => setA.has(x));
  if ((aSubsetOfB || bSubsetOfA) && common.length >= 2) {
    return true;
  }

  // Handle single-letter initials (e.g. "James V. Abad" vs "Abad, James Val Pascual")
  const nonInitialA = tA.filter((t) => t.length > 1);
  const nonInitialB = tB.filter((t) => t.length > 1);
  if (nonInitialA.length >= 2 && nonInitialA.every((x) => setB.has(x))) {
    return true;
  }
  if (nonInitialB.length >= 2 && nonInitialB.every((x) => setA.has(x))) {
    return true;
  }

  // Single-word names only match if both are identical length 1
  if (tA.length === 1 && tB.length === 1 && tA[0] === tB[0]) {
    return true;
  }

  return false;
}

/**
 * Prioritizes the official Student ID (e.g. "2023-00076") from Excel / grading sheet
 * over generated fallbacks (e.g. "2026-xxxxx" or internal timestamps).
 */
export function resolveOfficialStudentId(
  excelStudentId?: string | null,
  profileStudentId?: string | null,
  fallbackId?: string | null
): string {
  const cleanExcel = (excelStudentId || '').toString().trim();
  if (cleanExcel && !cleanExcel.startsWith('2026-') && cleanExcel !== '2026-0000') {
    return cleanExcel;
  }
  const cleanProfile = (profileStudentId || '').toString().trim();
  if (cleanProfile && !cleanProfile.startsWith('2026-') && cleanProfile !== '2026-0000') {
    return cleanProfile;
  }
  return cleanExcel || cleanProfile || (fallbackId || '').toString().trim();
}

/**
 * Checks whether a quiz or item subject matches a student's enrolled subject.
 * Handles variants like "MATH 103" vs "MATH 103 - 80132", "GEC 4" vs "GEC 4 - 50371", etc.
 */
export function isSubjectMatch(subA?: string | null, subB?: string | null): boolean {
  if (!subA || !subB) return false;
  const a = subA.toUpperCase().trim();
  const b = subB.toUpperCase().trim();
  if (a === b) return true;
  if (a === "ALL" || b === "ALL") return true;

  // Direct substring inclusion (e.g. "MATH 103" in "MATH 103 - 80132")
  if (a.includes(b) || b.includes(a)) return true;

  // Split by hyphen to compare subject code (e.g. "MATH 103" vs "MATH 103 - 80132")
  const codeA = a.split("-")[0].trim();
  const codeB = b.split("-")[0].trim();
  if (codeA && codeB && (codeA === codeB || codeA.includes(codeB) || codeB.includes(codeA))) {
    return true;
  }

  // Compare course code digits if available (e.g. "103" in both)
  const digitsA = a.match(/\d+/)?.[0];
  const digitsB = b.match(/\d+/)?.[0];
  if (digitsA && digitsB && digitsA === digitsB) {
    return true;
  }

  return false;
}
