// =====================================================================
// Excel Import/Export for Grading Management System
// Uses xlsx (SheetJS) library
// =====================================================================

import * as XLSX from "xlsx";
import type {
  SubjectGradingRecord,
  GradingStudent,
  GradingActivity,
  PeriodGradingData,
  StudentScore,
  GradingPeriod,
} from "../types/grading";
import {
  generateId,
  createQuizActivity,
  createParticipationActivity,
  createExamActivity,
  createDefaultPeriodData,
  createDefaultSubject,
  createDefaultSubjectRecord,
} from "../types/grading";
import { computeStudentGrade, setScore } from "./gradingEngine";

// =====================================================================
// EXPORT
// =====================================================================

/**
 * Export a subject's grading record to an Excel workbook.
 */
export function exportGradingToExcel(record: SubjectGradingRecord): void {
  const wb = XLSX.utils.book_new();

  const periods: GradingPeriod[] = ["prelim", "midterm", "semi-final", "final"];
  const periodLabels: Record<GradingPeriod, string> = {
    prelim: "PRELIM",
    midterm: "MIDTERM",
    "semi-final": "SEMI-FINAL",
    final: "FINAL",
  };

  for (const period of periods) {
    const pd = record.periods[period];
    const rows: any[][] = [];

    // Header rows
    rows.push([
      "Subject Code:",
      record.subject.subjectCode,
      "",
      record.subject.subjectName,
    ]);
    rows.push([
      "Offer No:",
      record.subject.offerNumber,
      "",
      `${record.subject.academicYear} - ${record.subject.semester}`,
    ]);
    rows.push([
      "Instructor:",
      record.subject.instructorName,
      "",
      `Section: ${record.subject.section}`,
    ]);
    rows.push([]);

    // Column headers
    const headerRow: string[] = [
      "No.",
      "Student ID",
      "Name",
    ];

    // Quiz columns
    for (const q of pd.quizActivities) {
      headerRow.push(q.label);
    }
    headerRow.push("Total Quizzes");

    // Participation columns
    for (const p of pd.participationActivities) {
      headerRow.push(p.label);
    }
    headerRow.push("Total CP");

    // Exam
    headerRow.push("Exam");

    // Computed columns
    headerRow.push("Total Grade");
    headerRow.push("Rounded");
    headerRow.push(`${periodLabels[period]} Grade`);

    rows.push(headerRow);

    // Max score row
    const maxRow: (string | number)[] = ["", "", "MAX"];
    for (const q of pd.quizActivities) {
      maxRow.push(q.maxScore);
    }
    maxRow.push(pd.quizActivities.reduce((s, a) => s + a.maxScore, 0));
    for (const p of pd.participationActivities) {
      maxRow.push(p.maxScore);
    }
    maxRow.push(pd.participationActivities.reduce((s, a) => s + a.maxScore, 0));
    maxRow.push(pd.examActivity.maxScore);
    maxRow.push(""); // total grade
    maxRow.push(""); // rounded
    maxRow.push(""); // grade equiv
    rows.push(maxRow);

    // Student data rows
    for (let i = 0; i < record.students.length; i++) {
      const student = record.students[i];
      const comp = computeStudentGrade(pd, student.id);
      const dataRow: (string | number)[] = [
        i + 1,
        student.studentId,
        student.fullName,
      ];

      for (const q of pd.quizActivities) {
        const score = pd.scores.find(
          (s) => s.studentId === student.id && s.activityId === q.id
        );
        dataRow.push(score?.score ?? "");
      }
      dataRow.push(comp.totalQuizScore);

      for (const p of pd.participationActivities) {
        const score = pd.scores.find(
          (s) => s.studentId === student.id && s.activityId === p.id
        );
        dataRow.push(score?.score ?? "");
      }
      dataRow.push(comp.totalParticipationScore);

      const examScore = pd.scores.find(
        (s) => s.studentId === student.id && s.activityId === pd.examActivity.id
      );
      dataRow.push(examScore?.score ?? "");

      dataRow.push(Number(comp.totalGrade.toFixed(3)));
      dataRow.push(comp.roundedGrade);
      dataRow.push(
        comp.gradeEquivalent != null
          ? Number(comp.gradeEquivalent) || comp.gradeEquivalent
          : ""
      );

      rows.push(dataRow);
    }

    const ws = XLSX.utils.aoa_to_sheet(rows);

    // Set column widths
    ws["!cols"] = [
      { wch: 5 },  // No.
      { wch: 14 }, // Student ID
      { wch: 30 }, // Name
      ...pd.quizActivities.map(() => ({ wch: 8 })),
      { wch: 12 }, // Total Quizzes
      ...pd.participationActivities.map(() => ({ wch: 8 })),
      { wch: 12 }, // Total CP
      { wch: 8 },  // Exam
      { wch: 12 }, // Total Grade
      { wch: 10 }, // Rounded
      { wch: 14 }, // Grade
    ];

    XLSX.utils.book_append_sheet(
      wb,
      ws,
      `${record.subject.subjectCode}-${record.subject.offerNumber}-${periodLabels[period]}`
    );
  }

  // Generate filename
  const filename = `${record.subject.subjectCode}_${record.subject.offerNumber}_Grades.xlsx`;
  XLSX.writeFile(wb, filename);
}

// =====================================================================
// IMPORT
// =====================================================================

export interface ImportedStudent extends GradingStudent {
  subjectCode?: string;
  offerNumber?: string;
}

/**
 * Download a starter student roster Excel template for the teacher / admin.
 */
export function exportStudentTemplateExcel(
  subjectCode = "MATH 101",
  offerNumber = "80062"
): void {
  const wb = XLSX.utils.book_new();
  const rows: any[][] = [
    ["No.", "Student ID", "Name", "Subject Code", "Offer No"],
    ["1", "2026-0001", "Dela Cruz, Juan A.", subjectCode, offerNumber],
    ["2", "2026-0002", "Santos, Maria B.", subjectCode, offerNumber],
    ["3", "2026-0003", "Reyes, Carlo C.", subjectCode, offerNumber],
  ];
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws["!cols"] = [
    { wch: 6 },
    { wch: 16 },
    { wch: 28 },
    { wch: 16 },
    { wch: 14 },
  ];
  XLSX.utils.book_append_sheet(wb, ws, "Student Roster Template");
  XLSX.writeFile(wb, `${subjectCode.replace(/\s+/g, "_")}_Student_Roster_Template.xlsx`);
}

/**
 * Import a student list from an Excel file (.xlsx, .xls, .csv).
 * Supports:
 * - Multi-sheet workbooks (e.g. sheets named by subject like "MATH 101", "MATH 102", "MATH 103" or generic)
 * - Rows with subject columns ("Subject", "Subject Code", "Course", "Class", "Offer No")
 * - Smart header row detection across the first 25 rows
 * - Full names or split Last Name / First Name / Middle Name columns
 * - Diverse ID column headers ("Student ID", "ID Number", "ID No", "ID", "LRN", "School ID")
 * - Matches targetSubjectCode / targetOfferNumber or retains detected subject for departmental rosters
 */
export function importStudentListFromExcel(
  file: File,
  targetSubjectCode?: string,
  targetOfferNumber?: string
): Promise<ImportedStudent[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: "array" });
        if (!wb.SheetNames || wb.SheetNames.length === 0) {
          resolve([]);
          return;
        }

        const cleanTargetCode = (targetSubjectCode || "").toUpperCase().trim();
        const targetDigits = cleanTargetCode.match(/\d+/)?.[0];
        const cleanTargetOffer = (targetOfferNumber || "").toUpperCase().trim();

        const allParsedStudents: ImportedStudent[] = [];

        // Iterate through all sheets in the workbook
        for (const sheetName of wb.SheetNames) {
          const ws = wb.Sheets[sheetName];
          if (!ws) continue;
          const rawRows = XLSX.utils.sheet_to_json<any>(ws, { header: 1 });
          if (!rawRows || rawRows.length === 0) continue;

          // Convert rows to non-sparse arrays with safe string conversion
          const rows: string[][] = [];
          for (let r = 0; r < rawRows.length; r++) {
            const rawRow = Array.isArray(rawRows[r]) ? rawRows[r] : [];
            rows.push(Array.from(rawRow).map((c) => (c != null ? String(c).trim() : "")));
          }

          // Check if sheet name itself indicates a subject (e.g. "MATH 101", "101", etc.)
          const cleanSheet = sheetName ? String(sheetName).toUpperCase().trim() : "";
          let sheetSubjectCode: string | undefined = undefined;
          if (cleanSheet.includes("101")) sheetSubjectCode = "MATH 101";
          else if (cleanSheet.includes("102")) sheetSubjectCode = "MATH 102";
          else if (cleanSheet.includes("103")) sheetSubjectCode = "MATH 103";
          else if (cleanSheet.startsWith("MATH")) sheetSubjectCode = cleanSheet;

          // Check top rows (rows 0-15) for subject / offer metadata (e.g. from exportGradingToExcel)
          let metadataSubjectCode: string | undefined = undefined;
          let metadataOfferNumber: string | undefined = undefined;

          let headerRow = -1;
          for (let i = 0; i < Math.min(rows.length, 25); i++) {
            const row = rows[i] || [];

            // Search for metadata labels in this row
            for (let c = 0; c < row.length; c++) {
              const cellStr = (row[c] || "").toLowerCase();
              if (cellStr.includes("subject code") && row[c + 1]) {
                metadataSubjectCode = String(row[c + 1]).trim();
              } else if (cellStr.includes("offer no") && row[c + 1]) {
                metadataOfferNumber = String(row[c + 1]).trim();
              }
            }

            // Check if this row is the column header row
            const hasId = row.some((c) => {
              const s = (c || "").toLowerCase();
              return (
                s.includes("student id") ||
                s.includes("id no") ||
                s === "id" ||
                s === "id_no" ||
                s.includes("id number") ||
                s === "id#" ||
                s === "lrn" ||
                s.includes("school id")
              );
            });
            const hasName = row.some((c) => {
              const s = (c || "").toLowerCase();
              return (
                s.includes("name") ||
                s.includes("learner") ||
                s.includes("student")
              );
            });

            if (hasId && hasName) {
              headerRow = i;
              break;
            }
          }

          // Fallback search if strict header row not found
          if (headerRow === -1) {
            for (let i = 0; i < Math.min(rows.length, 15); i++) {
              const row = rows[i] || [];
              const hasName = row.some((c) =>
                (c || "").toLowerCase().includes("name")
              );
              if (hasName) {
                headerRow = i;
                break;
              }
            }
          }

          if (headerRow === -1) {
            headerRow = 0;
          }

          const headerCells = (rows[headerRow] || []).map((c) =>
            (c || "").toLowerCase()
          );

          // Find column indices
          let idCol = -1;
          let nameCol = -1;
          let lastNameCol = -1;
          let firstNameCol = -1;
          let middleNameCol = -1;
          let noCol = -1;
          let subjectCol = -1;
          let offerCol = -1;

          for (let colIdx = 0; colIdx < headerCells.length; colIdx++) {
            const h = headerCells[colIdx] || "";
            if (!h) continue;

            if (
              h === "student id" ||
              h === "student_id" ||
              h.includes("student id") ||
              h.includes("id number") ||
              h.includes("id_number") ||
              h === "id no" ||
              h === "id no." ||
              h === "id_no" ||
              h === "id" ||
              h === "id#" ||
              h === "lrn" ||
              h === "school id" ||
              h === "stud id"
            ) {
              if (idCol === -1) idCol = colIdx;
            } else if (
              h.includes("last name") ||
              h.includes("lastname") ||
              h === "surname" ||
              h.includes("family name")
            ) {
              lastNameCol = colIdx;
            } else if (
              h.includes("first name") ||
              h.includes("firstname") ||
              h === "given name"
            ) {
              firstNameCol = colIdx;
            } else if (
              h.includes("middle name") ||
              h.includes("middlename") ||
              h === "m.i." ||
              h === "mi"
            ) {
              middleNameCol = colIdx;
            } else if (
              h === "name" ||
              h === "full name" ||
              h === "fullname" ||
              h.includes("student name") ||
              h.includes("learner name")
            ) {
              if (nameCol === -1) nameCol = colIdx;
            } else if (
              h === "no" ||
              h === "no." ||
              h === "#" ||
              h === "seq" ||
              h.includes("student no")
            ) {
              if (noCol === -1) noCol = colIdx;
            } else if (
              h.includes("subject") ||
              h.includes("course") ||
              h.includes("class") ||
              h === "subj" ||
              h.includes("subj code")
            ) {
              if (subjectCol === -1) subjectCol = colIdx;
            } else if (
              h.includes("offer no") ||
              h.includes("offerno") ||
              h.includes("offer number") ||
              h === "offer" ||
              h.includes("section")
            ) {
              if (offerCol === -1) offerCol = colIdx;
            }
          }

          // Safe fallbacks if columns not identified
          if (nameCol === -1 && lastNameCol === -1) {
            nameCol = headerCells.findIndex((h) => Boolean(h && h.includes("name")));
          }
          if (idCol === -1) {
            idCol = headerCells.findIndex(
              (h) => Boolean(h && (h.includes("id") || h.includes("number")) && !h.includes("name"))
            );
          }

          // Parse data rows
          for (let r = headerRow + 1; r < rows.length; r++) {
            const row = rows[r];
            if (!row || row.length === 0) continue;

            // Extract Name
            let fullName = "";
            if (lastNameCol >= 0 && firstNameCol >= 0) {
              const l = row[lastNameCol] || "";
              const f = row[firstNameCol] || "";
              const m = middleNameCol >= 0 ? row[middleNameCol] || "" : "";
              if (l && f) {
                fullName = `${l}, ${f}${m ? " " + m : ""}`;
              } else {
                fullName = l || f;
              }
            } else if (nameCol >= 0) {
              fullName = row[nameCol] || "";
            }

            // Extract Student ID
            let studentId = "";
            if (idCol >= 0) {
              studentId = row[idCol] || "";
            }

            // Clean up empty / summary rows
            const lowerName = fullName.toLowerCase();
            const lowerId = studentId.toLowerCase();
            if (!fullName && !studentId) continue;
            if (
              lowerName === "max" ||
              lowerName === "max score" ||
              lowerName === "total" ||
              lowerName === "average" ||
              lowerName === "mean" ||
              lowerName.startsWith("summary") ||
              lowerId === "max"
            ) {
              continue;
            }

            // Extract Subject and Offer
            let rowSubject = subjectCol >= 0 ? row[subjectCol] || "" : "";
            let rowOffer = offerCol >= 0 ? row[offerCol] || "" : "";

            if (!rowSubject && (metadataSubjectCode || sheetSubjectCode)) {
              rowSubject = metadataSubjectCode || sheetSubjectCode || "";
            }
            if (!rowOffer && metadataOfferNumber) {
              rowOffer = metadataOfferNumber;
            }

            // Normalize subject code if contains 101/102/103
            let resolvedSubject = rowSubject;
            if (rowSubject) {
              const sUpper = rowSubject.toUpperCase();
              if (sUpper.includes("101")) resolvedSubject = "MATH 101";
              else if (sUpper.includes("102")) resolvedSubject = "MATH 102";
              else if (sUpper.includes("103")) resolvedSubject = "MATH 103";
            }

            const studentNo =
              noCol >= 0 && row[noCol] !== undefined
                ? row[noCol]
                : String(allParsedStudents.length + 1);

            allParsedStudents.push({
              id: generateId(),
              studentNumber: studentNo,
              studentId,
              fullName,
              subjectCode: resolvedSubject || cleanTargetCode || undefined,
              offerNumber: rowOffer || cleanTargetOffer || undefined,
            });
          }
        }

        // Deduplicate parsed students within the imported file by ID and Name
        const uniqueImported: ImportedStudent[] = [];
        for (const st of allParsedStudents) {
          const exists = uniqueImported.some((u) => {
            if (st.studentId && u.studentId && st.studentId.trim().toUpperCase() === u.studentId.trim().toUpperCase()) {
              return true;
            }
            if (st.fullName && u.fullName && st.fullName.trim().toLowerCase() === u.fullName.trim().toLowerCase()) {
              return true;
            }
            return false;
          });
          if (!exists) {
            uniqueImported.push(st);
          }
        }

        resolve(uniqueImported);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsArrayBuffer(file);
  });
}

export interface ImportGradingWorkbookResult {
  updatedRecord: SubjectGradingRecord;
  enrolledStudentsCount: number;
  updatedPeriods: GradingPeriod[];
  warnings: string[];
}

export interface MultiSubjectImportResult {
  records: SubjectGradingRecord[];
  newSubjectsCount: number;
  updatedSubjectsCount: number;
  totalStudentsEnrolled: number;
  activeSubjectIdToSelect?: string;
  summaryText: string;
  warnings: string[];
}

export interface ImportGradingWorkbookResult {
  updatedRecord: SubjectGradingRecord;
  enrolledStudentsCount: number;
  updatedPeriods: GradingPeriod[];
  warnings: string[];
}

/**
 * Advanced Multi-Subject & Multi-Period Excel Importer.
 * Specifically handles college/university master grading workbooks (with tabs like
 * MATH103-80132, MATH101-80062, MATH101-80065, GEC4-50371, etc.):
 * 1. Instantly adds/creates each subject offering in the system if not yet present.
 * 2. Enrolls each student strictly into their matching subject offering.
 * 3. Populates horizontal period sections (Prelim, Midterm, Semi-Final, Final) and max scores.
 */
export async function importMultiSubjectGradingFromExcel(
  file: File,
  existingRecords: SubjectGradingRecord[],
  activeSubjectId?: string | null
): Promise<MultiSubjectImportResult> {
  const data = new Uint8Array(await file.arrayBuffer());
  const wb = XLSX.read(data, { type: "array" });
  if (!wb.SheetNames || wb.SheetNames.length === 0) {
    throw new Error("The selected Excel workbook contains no sheets.");
  }

  const warnings: string[] = [];
  const allRecords: SubjectGradingRecord[] = JSON.parse(JSON.stringify(existingRecords || []));
  let newSubjectsCount = 0;
  let updatedSubjectsCount = 0;
  let totalStudentsEnrolled = 0;
  let firstSubjectId: string | undefined = undefined;
  const processedSubjectCodes: string[] = [];

  // Extract workbook-level hints from filename (e.g. "Castrence, NL_Grading-Sheet - SY 2026-2027 Term 1.xlsx")
  const fileNameNoExt = file.name.replace(/\.[^/.]+$/, "");
  let defaultInstructor = "";
  let defaultAcademicYear = "SY 2026-2027";
  let defaultSemester = "Term 1";

  const fnAyMatch = fileNameNoExt.match(/(?:SY\s*)?(\d{4}\s*[-–]\s*\d{4})/i);
  if (fnAyMatch) {
    defaultAcademicYear = `SY ${fnAyMatch[1].replace(/\s+/g, "")}`;
  }
  const fnSemMatch = fileNameNoExt.match(/(Term\s*\d+|Semester\s*\d+|\b1st\s*Sem|\b2nd\s*Sem)/i);
  if (fnSemMatch) {
    defaultSemester = fnSemMatch[1];
  }
  const fnInstMatch = fileNameNoExt.match(/^([A-Za-z\s]+,\s*[A-Za-z\s.]+?)(?:_|-|Grading)/i);
  if (fnInstMatch) {
    defaultInstructor = fnInstMatch[1].trim();
  }

  const isDocSheet = (s: string) =>
    /^(inst|instructions|guide|readme|summary|template)/i.test(s.trim());

  for (const sheetName of wb.SheetNames) {
    if (isDocSheet(sheetName)) continue;
    const ws = wb.Sheets[sheetName];
    if (!ws) continue;
    const rawRows = XLSX.utils.sheet_to_json<any>(ws, { header: 1 });
    if (!rawRows || rawRows.length === 0) continue;

    // Convert to non-sparse rows
    const rows: string[][] = [];
    for (let r = 0; r < rawRows.length; r++) {
      const rawRow = Array.isArray(rawRows[r]) ? rawRows[r] : [];
      rows.push(Array.from(rawRow).map((c) => (c != null ? String(c).trim() : "")));
    }

    // 1. Extract Subject Code & Offer Number from sheet metadata & tab name
    let metaCode = "";
    let metaOffer = "";
    let metaInstructor = defaultInstructor;
    let metaAcademicYear = defaultAcademicYear;
    let metaSemester = defaultSemester;

    // Scan top 10 rows for "Subject Code:", "Offer No:", "Instructor:", etc.
    for (let r = 0; r < Math.min(rows.length, 10); r++) {
      const row = rows[r];
      for (let c = 0; c < row.length; c++) {
        const cell = row[c].toLowerCase();
        if (cell.includes("subject code")) {
          const directMatch = cell.match(/subject\s*code\s*[:\s-]\s*([A-Za-z0-9\s]+)/i);
          if (directMatch && directMatch[1].trim()) {
            metaCode = directMatch[1].trim();
          } else {
            for (let k = c + 1; k < row.length; k++) {
              if (row[k]) {
                metaCode = row[k];
                break;
              }
            }
          }
        } else if (cell.includes("offer no") || cell.includes("offerno")) {
          const directMatch = cell.match(/offer\s*no\.?\s*[:\s-]\s*([A-Za-z0-9]+)/i);
          if (directMatch && directMatch[1].trim()) {
            metaOffer = directMatch[1].trim();
          } else {
            for (let k = c + 1; k < row.length; k++) {
              if (row[k]) {
                metaOffer = row[k];
                break;
              }
            }
          }
        } else if (cell.includes("instructor")) {
          for (let k = c + 1; k < row.length; k++) {
            if (row[k]) {
              metaInstructor = row[k];
              break;
            }
          }
        } else if (cell.includes("academic year") || cell.includes("sy")) {
          for (let k = c + 1; k < row.length; k++) {
            if (row[k]) {
              metaAcademicYear = row[k];
              break;
            }
          }
        } else if (cell.includes("semester") || cell.includes("term")) {
          for (let k = c + 1; k < row.length; k++) {
            if (row[k]) {
              metaSemester = row[k];
              break;
            }
          }
        }
      }
    }

    // Parse tab name: e.g. "MATH103-80132" or "MATH101-80062" or "GEC4-50371"
    const cleanTab = sheetName.trim();
    const dashMatch = cleanTab.match(/^([A-Za-z]+(?:\s*\d+)?)\s*[-_/\s(]+\s*(\d+[\w-]*)\)?$/i) ||
                     cleanTab.match(/^([A-Za-z]+(?:\s*\d+)?)\s*[-_/\s]+(.+)$/i);

    const tabCode = dashMatch ? dashMatch[1].trim() : cleanTab;
    const tabOffer = dashMatch ? dashMatch[2].trim() : "";

    // If tab has an explicit offer number (e.g. 80132, 80065, 50371), it uniquely identifies this sheet tab!
    const resolvedOffer = tabOffer || metaOffer;
    const resolvedCode = metaCode || tabCode;

    // Format resolvedCode cleanly (e.g. MATH103 -> MATH 103, GEC4 -> GEC 4)
    let formattedCode = resolvedCode.trim().toUpperCase();
    const letterDigit = formattedCode.match(/^([A-Z]+)\s*(\d+)$/);
    if (letterDigit) {
      formattedCode = `${letterDigit[1]} ${letterDigit[2]}`;
    }

    const formattedOffer = (resolvedOffer || "").trim();

    // Standard subject title
    let courseTitle = `${formattedCode}`;
    const cleanCodeNoSpace = formattedCode.replace(/\s+/g, "").toUpperCase();
    if (cleanCodeNoSpace.includes("101")) {
      courseTitle = "Calculus with Analytic Geometry";
    } else if (cleanCodeNoSpace.includes("102")) {
      courseTitle = "Integral Calculus";
    } else if (cleanCodeNoSpace.includes("103")) {
      courseTitle = "Linear Algebra";
    } else if (cleanCodeNoSpace.includes("GEC4")) {
      courseTitle = "Mathematics in the Modern World";
    }

    // 2. Find or Instantly Create Subject Record in allRecords
    // Each section/offering is unique. We match strictly by offerNumber if present.
    let targetRecord: SubjectGradingRecord | undefined;

    if (formattedOffer) {
      targetRecord = allRecords.find((r) => {
        return Boolean(r.subject.offerNumber && r.subject.offerNumber.trim() === formattedOffer);
      });
    }

    // If not found by offer number, check if there's an unused placeholder record
    // matching this subjectCode that has 0 students and no scores (e.g. initial placeholder)
    if (!targetRecord && formattedCode) {
      targetRecord = allRecords.find((r) => {
        const existingClean = (r.subject.subjectCode || "").replace(/\s+/g, "").toUpperCase();
        const newClean = formattedCode.replace(/\s+/g, "").toUpperCase();
        if (existingClean === newClean) {
          const hasScores = Object.values(r.periods || {}).some(
            (p) => p.scores && p.scores.length > 0
          );
          if (r.students.length === 0 && !hasScores) {
            return true;
          }
        }
        return false;
      });
    }

    if (!targetRecord) {
      targetRecord = createDefaultSubjectRecord(
        formattedCode || "MATH 101",
        courseTitle,
        formattedOffer || ""
      );
      if (metaInstructor) targetRecord.subject.instructorName = metaInstructor;
      if (metaAcademicYear) targetRecord.subject.academicYear = metaAcademicYear;
      if (metaSemester) targetRecord.subject.semester = metaSemester;
      allRecords.push(targetRecord);
      newSubjectsCount++;
    } else {
      updatedSubjectsCount++;
      if (formattedOffer) {
        targetRecord.subject.offerNumber = formattedOffer;
      }
      if (
        courseTitle &&
        (!targetRecord.subject.subjectName ||
          targetRecord.subject.subjectName.includes("Course") ||
          targetRecord.subject.subjectName.toLowerCase().includes("default"))
      ) {
        targetRecord.subject.subjectName = courseTitle;
      }
      if (metaInstructor && !targetRecord.subject.instructorName) {
        targetRecord.subject.instructorName = metaInstructor;
      }
      if (metaAcademicYear && !targetRecord.subject.academicYear) {
        targetRecord.subject.academicYear = metaAcademicYear;
      }
      if (metaSemester && !targetRecord.subject.semester) {
        targetRecord.subject.semester = metaSemester;
      }
    }

    if (!firstSubjectId) {
      firstSubjectId = targetRecord.subject.id;
    }
    const subjectLabel = formattedOffer
      ? `${targetRecord.subject.subjectCode} (${formattedOffer})`
      : targetRecord.subject.subjectCode;
    if (!processedSubjectCodes.includes(subjectLabel)) {
      processedSubjectCodes.push(subjectLabel);
    }

    // 3. Find Header Row (row containing "ID NO" and "NAMES")
    let headerRow = -1;
    for (let r = 0; r < Math.min(rows.length, 25); r++) {
      const row = rows[r];
      const hasId = row.some((c) => {
        const s = (c || "").toLowerCase();
        return (
          s.includes("id no") ||
          s.includes("student id") ||
          s === "id" ||
          s === "id_no" ||
          s.includes("id number") ||
          s === "id#" ||
          s === "lrn"
        );
      });
      const hasName = row.some((c) => {
        const s = (c || "").toLowerCase();
        return s.includes("name") || s.includes("names") || s.includes("student");
      });
      if (hasId && hasName) {
        headerRow = r;
        break;
      }
    }

    if (headerRow === -1) {
      for (let r = 0; r < Math.min(rows.length, 15); r++) {
        const row = rows[r];
        if (row.some((c) => (c || "").toLowerCase().includes("name"))) {
          headerRow = r;
          break;
        }
      }
    }

    if (headerRow === -1) headerRow = 4; // Default to row 4 as seen in standard sheets

    const header = (rows[headerRow] || []).map((c) => (c || "").toLowerCase().trim());

    // Map ID and Name column indices
    let idCol = -1;
    let nameCol = -1;
    let lastNameCol = -1;
    let firstNameCol = -1;
    let middleNameCol = -1;

    for (let c = 0; c < header.length; c++) {
      const h = header[c] || "";
      if (!h) continue;

      if (
        h === "id no." ||
        h === "id no" ||
        h === "id_no" ||
        h === "student id" ||
        h.includes("id no") ||
        h.includes("student id") ||
        h === "id"
      ) {
        if (idCol === -1) idCol = c;
      } else if (
        h === "names" ||
        h === "name" ||
        h === "full name" ||
        h === "fullname" ||
        h.includes("student name")
      ) {
        if (nameCol === -1) nameCol = c;
      } else if (h.includes("last name") || h === "surname") {
        lastNameCol = c;
      } else if (h.includes("first name") || h === "given name") {
        firstNameCol = c;
      } else if (h.includes("middle name") || h === "m.i.") {
        middleNameCol = c;
      }
    }

    if (nameCol === -1 && lastNameCol === -1) {
      nameCol = header.findIndex((h) => Boolean(h && h.includes("name")));
    }
    if (idCol === -1) {
      idCol = header.findIndex(
        (h) => Boolean(h && (h.includes("id") || h.includes("number")) && !h.includes("name"))
      );
    }

    // 4. Detect Period Boundaries Across Columns (Horizontal Layout)
    let prelimEndCol = -1;
    let midtermEndCol = -1;
    let semiFinalEndCol = -1;
    let finalEndCol = -1;

    const maxCols = Math.max(...rows.slice(0, 10).map((r) => r.length));

    for (let c = 0; c < maxCols; c++) {
      const cellTexts = rows
        .slice(Math.max(0, headerRow - 2), headerRow + 2)
        .map((r) => (r[c] || "").toLowerCase().trim())
        .filter(Boolean);
      const joined = cellTexts.join(" ");

      if (
        joined.includes("prelim grade") ||
        joined.includes("preliminary grade") ||
        (joined.includes("prelim") && joined.includes("grade"))
      ) {
        if (prelimEndCol === -1) prelimEndCol = c;
      } else if (
        joined.includes("midterm grade") ||
        joined.includes("mid-term grade") ||
        (joined.includes("midterm") && joined.includes("grade"))
      ) {
        if (midtermEndCol === -1) midtermEndCol = c;
      } else if (
        joined.includes("semi-final grade") ||
        joined.includes("semifinal grade") ||
        joined.includes("semi final grade") ||
        (joined.includes("semi") && joined.includes("grade"))
      ) {
        if (semiFinalEndCol === -1) semiFinalEndCol = c;
      } else if (
        joined.includes("final grade") ||
        (joined.includes("final") && joined.includes("grade") && !joined.includes("semi"))
      ) {
        if (finalEndCol === -1) finalEndCol = c;
      }
    }

    // Build period sections
    interface PeriodSection {
      period: GradingPeriod;
      startCol: number;
      endCol: number;
      colQuizMap: { col: number; quizIndex: number }[];
      colCpMap: { col: number; cpIndex: number }[];
      examCol: number;
    }

    const sections: PeriodSection[] = [];
    const nameColEnd = Math.max(nameCol, idCol, 1);

    if (
      prelimEndCol !== -1 ||
      midtermEndCol !== -1 ||
      semiFinalEndCol !== -1 ||
      finalEndCol !== -1
    ) {
      if (prelimEndCol !== -1) {
        sections.push({
          period: "prelim",
          startCol: nameColEnd + 1,
          endCol: prelimEndCol,
          colQuizMap: [],
          colCpMap: [],
          examCol: -1,
        });
      }
      if (midtermEndCol !== -1) {
        const start = prelimEndCol !== -1 ? prelimEndCol + 1 : nameColEnd + 1;
        sections.push({
          period: "midterm",
          startCol: start,
          endCol: midtermEndCol,
          colQuizMap: [],
          colCpMap: [],
          examCol: -1,
        });
      }
      if (semiFinalEndCol !== -1) {
        const start =
          midtermEndCol !== -1
            ? midtermEndCol + 1
            : prelimEndCol !== -1
            ? prelimEndCol + 1
            : nameColEnd + 1;
        sections.push({
          period: "semi-final",
          startCol: start,
          endCol: semiFinalEndCol,
          colQuizMap: [],
          colCpMap: [],
          examCol: -1,
        });
      }
      if (finalEndCol !== -1) {
        const start =
          semiFinalEndCol !== -1
            ? semiFinalEndCol + 1
            : midtermEndCol !== -1
            ? midtermEndCol + 1
            : nameColEnd + 1;
        sections.push({
          period: "final",
          startCol: start,
          endCol: finalEndCol,
          colQuizMap: [],
          colCpMap: [],
          examCol: -1,
        });
      }
    } else {
      // Single period per sheet
      let detectedP: GradingPeriod = "prelim";
      const sLower = sheetName.toLowerCase();
      if (sLower.includes("midterm")) detectedP = "midterm";
      else if (sLower.includes("semi")) detectedP = "semi-final";
      else if (sLower.includes("final")) detectedP = "final";

      sections.push({
        period: detectedP,
        startCol: nameColEnd + 1,
        endCol: maxCols,
        colQuizMap: [],
        colCpMap: [],
        examCol: -1,
      });
    }

    // Map Quiz, CP, Exam columns within each section
    for (const sec of sections) {
      for (let c = sec.startCol; c <= sec.endCol && c < maxCols; c++) {
        const cellTexts = rows
          .slice(Math.max(0, headerRow - 1), headerRow + 2)
          .map((r) => (r[c] || "").toLowerCase().trim())
          .filter(Boolean);
        const colHeader = cellTexts.join(" ");

        if (!colHeader) continue;

        const qm = colHeader.match(/quiz\s*(\d+)/i) || colHeader.match(/\bq(\d+)\b/i);
        if (qm && !colHeader.includes("total") && !colHeader.includes("grade")) {
          const qNum = parseInt(qm[1], 10);
          if (qNum >= 1 && qNum <= 10) {
            sec.colQuizMap.push({ col: c, quizIndex: qNum - 1 });
            continue;
          }
        }

        const cpm =
          colHeader.match(/class\s*participation\s*(\d+)/i) ||
          colHeader.match(/participation\s*(\d+)/i) ||
          colHeader.match(/\bcp\s*(\d+)\b/i);
        if (cpm && !colHeader.includes("total") && !colHeader.includes("grade")) {
          const cpNum = parseInt(cpm[1], 10);
          if (cpNum >= 1 && cpNum <= 5) {
            sec.colCpMap.push({ col: c, cpIndex: cpNum - 1 });
            continue;
          }
        }

        if (
          (colHeader === "exam" ||
            colHeader === "examination" ||
            colHeader.includes("exam")) &&
          !colHeader.includes("total") &&
          !colHeader.includes("grade")
        ) {
          if (sec.examCol === -1) sec.examCol = c;
        }
      }
    }

    // 5. Detect MAX score row (row 5 in screenshot, or row with empty ID/name having score numbers)
    let maxRowIdx = -1;
    for (let r = headerRow + 1; r < Math.min(rows.length, headerRow + 4); r++) {
      const row = rows[r];
      const joined = row.join(" ").toUpperCase();
      const idVal = idCol >= 0 ? row[idCol] : "";
      const nameVal = nameCol >= 0 ? row[nameCol] : "";

      if (joined.includes("MAX") || joined.includes("PERFECT") || (!idVal && !nameVal)) {
        const hasNumbers = row.some((c) => {
          const n = Number(c);
          return !isNaN(n) && n > 0 && n <= 100;
        });
        if (hasNumbers) {
          maxRowIdx = r;
          break;
        }
      }
    }

    // 5b. Pre-scan: determine which sections actually have real data
    // A section "has data" if at least one student row has at least one non-empty,
    // non-zero numeric value in any of its mapped columns (quiz, CP, or exam).
    const dataStartRow = maxRowIdx !== -1 ? maxRowIdx + 1 : headerRow + 1;
    const sectionsWithData = new Set<number>();

    for (let si = 0; si < sections.length; si++) {
      const sec = sections[si];
      const allCols: number[] = [
        ...sec.colQuizMap.map((m) => m.col),
        ...sec.colCpMap.map((m) => m.col),
      ];
      if (sec.examCol >= 0) allCols.push(sec.examCol);

      let found = false;
      for (let r = dataStartRow; r < rows.length && !found; r++) {
        const row = rows[r];
        if (!row || row.length === 0) continue;

        // Skip non-student rows (no name/id)
        const rName = nameCol >= 0 ? (row[nameCol] || "").trim() : "";
        const rId = idCol >= 0 ? (row[idCol] || "").trim() : "";
        if (!rName && !rId) continue;
        const rNameL = rName.toLowerCase();
        if (
          rNameL === "max" || rNameL === "total" || rNameL === "average" ||
          rNameL === "mean" || rNameL.startsWith("summary") ||
          rNameL.includes("more rows") || rNameL.includes("add 1000")
        ) continue;

        for (const col of allCols) {
          const rawVal = row[col];
          if (rawVal !== "" && rawVal !== undefined && rawVal !== null) {
            const num = Number(rawVal);
            if (!isNaN(num) && num > 0) {
              found = true;
              break;
            }
          }
        }
      }
      if (found) sectionsWithData.add(si);
    }

    // Apply MAX scores ONLY to sections that have real student data
    if (maxRowIdx !== -1) {
      const maxRow = rows[maxRowIdx];
      for (let si = 0; si < sections.length; si++) {
        if (!sectionsWithData.has(si)) continue; // Skip empty period sections
        const sec = sections[si];
        const pData = targetRecord.periods[sec.period];
        if (!pData) continue;

        for (const { col, quizIndex } of sec.colQuizMap) {
          const val = Number(maxRow[col]);
          if (!isNaN(val) && val > 0 && pData.quizActivities[quizIndex]) {
            pData.quizActivities[quizIndex].maxScore = val;
          }
        }
        for (const { col, cpIndex } of sec.colCpMap) {
          const val = Number(maxRow[col]);
          if (!isNaN(val) && val > 0 && pData.participationActivities[cpIndex]) {
            pData.participationActivities[cpIndex].maxScore = val;
          }
        }
        if (sec.examCol >= 0) {
          const val = Number(maxRow[sec.examCol]);
          if (!isNaN(val) && val > 0 && pData.examActivity) {
            pData.examActivity.maxScore = val;
          }
        }
      }
    }

    // 6. Process Student Data Rows — only populate scores for sections with real data
    for (let r = dataStartRow; r < rows.length; r++) {
      const row = rows[r];
      if (!row || row.length === 0) continue;

      let fullName = "";
      if (lastNameCol >= 0 && firstNameCol >= 0) {
        const l = row[lastNameCol] || "";
        const f = row[firstNameCol] || "";
        const m = middleNameCol >= 0 ? row[middleNameCol] || "" : "";
        if (l && f) {
          fullName = `${l}, ${f}${m ? " " + m : ""}`;
        } else {
          fullName = l || f;
        }
      } else if (nameCol >= 0) {
        fullName = row[nameCol] || "";
      }

      let studentId = idCol >= 0 ? row[idCol] || "" : "";

      fullName = fullName.replace(/\s*,\s*/g, ", ").trim();

      const lowerName = fullName.toLowerCase().trim();
      const lowerId = studentId.toLowerCase().trim();
      if (!fullName && !studentId) continue;
      if (
        lowerName === "max" ||
        lowerName === "max score" ||
        lowerName === "total" ||
        lowerName === "average" ||
        lowerName === "mean" ||
        lowerName.startsWith("summary") ||
        lowerId === "max" ||
        lowerName.includes("more rows") ||
        lowerName.includes("add 1000") ||
        lowerId.includes("add 1000")
      ) {
        continue;
      }

      // Enroll student into targetRecord.students (ONLY for this subject offering!)
      let student = targetRecord.students.find((s) => {
        if (
          studentId &&
          s.studentId &&
          s.studentId.trim().toUpperCase() === studentId.trim().toUpperCase()
        ) {
          return true;
        }
        if (
          fullName &&
          s.fullName &&
          s.fullName.trim().toLowerCase() === fullName.trim().toLowerCase()
        ) {
          return true;
        }
        return false;
      });

      if (!student) {
        student = {
          id: generateId(),
          studentNumber: String(targetRecord.students.length + 1),
          studentId:
            studentId ||
            `2026-${String(targetRecord.students.length + 1).padStart(4, "0")}`,
          fullName: fullName || "Enrolled Student",
        };
        targetRecord.students.push(student);
        totalStudentsEnrolled++;
      } else {
        if (!student.studentId && studentId) student.studentId = studentId;
        if (
          (!student.fullName || student.fullName === "Enrolled Student") &&
          fullName
        ) {
          student.fullName = fullName;
        }
      }

      // Populate scores ONLY for period sections that have real data in the file
      for (let si = 0; si < sections.length; si++) {
        if (!sectionsWithData.has(si)) continue; // Skip periods with no data
        const sec = sections[si];
        const pData = targetRecord.periods[sec.period];
        if (!pData) continue;

        for (const { col, quizIndex } of sec.colQuizMap) {
          const rawVal = row[col];
          if (rawVal !== "" && rawVal !== undefined && rawVal !== null) {
            const num = Number(rawVal);
            if (!isNaN(num)) {
              const act = pData.quizActivities[quizIndex];
              if (act) {
                pData.scores = setScore(pData.scores, student.id, act.id, num);
                if (act.maxScore < num) act.maxScore = Math.max(num, 10);
              }
            }
          }
        }

        for (const { col, cpIndex } of sec.colCpMap) {
          const rawVal = row[col];
          if (rawVal !== "" && rawVal !== undefined && rawVal !== null) {
            const num = Number(rawVal);
            if (!isNaN(num)) {
              const act = pData.participationActivities[cpIndex];
              if (act) {
                pData.scores = setScore(pData.scores, student.id, act.id, num);
                if (act.maxScore < num) act.maxScore = Math.max(num, 10);
              }
            }
          }
        }

        if (sec.examCol >= 0) {
          const rawVal = row[sec.examCol];
          if (rawVal !== "" && rawVal !== undefined && rawVal !== null) {
            const num = Number(rawVal);
            if (!isNaN(num)) {
              const act = pData.examActivity;
              if (act) {
                pData.scores = setScore(pData.scores, student.id, act.id, num);
                if (act.maxScore < num) act.maxScore = Math.max(num, 36);
              }
            }
          }
        }
      }
    }

    // Renumber sequential student numbers for this subject
    targetRecord.students.forEach((s, idx) => {
      s.studentNumber = String(idx + 1);
    });
  }

  // If we imported multiple sheets from this workbook, filter out any untouched default placeholders
  // that were never in the file and have 0 students and 0 scores
  let finalRecords = allRecords;
  if (wb.SheetNames.length > 1) {
    const cleaned = allRecords.filter((r) => {
      const hasStudents = r.students && r.students.length > 0;
      const hasScores = Object.values(r.periods || {}).some(
        (p) => p.scores && p.scores.length > 0
      );
      if (hasStudents || hasScores) return true;
      if (firstSubjectId && r.subject.id === firstSubjectId) return true;
      return false;
    });
    if (cleaned.length > 0) {
      finalRecords = cleaned;
    }
  }

  // Determine active subject ID to select (prioritize the first imported sheet from the file)
  const activeSubjectIdToSelect = firstSubjectId || activeSubjectId || finalRecords[0]?.subject.id;

  const subjectNamesList =
    processedSubjectCodes.slice(0, 4).join(", ") +
    (processedSubjectCodes.length > 4
      ? ` and ${processedSubjectCodes.length - 4} more`
      : "");

  const summaryText =
    newSubjectsCount > 0
      ? `Successfully added ${newSubjectsCount} new subject(s) (${subjectNamesList}) with ${totalStudentsEnrolled} student(s) enrolled and separated by subject.`
      : `Successfully updated ${updatedSubjectsCount} subject(s) (${subjectNamesList}) with ${totalStudentsEnrolled} student(s) enrolled and separated by subject.`;

  return {
    records: finalRecords,
    newSubjectsCount,
    updatedSubjectsCount,
    totalStudentsEnrolled,
    activeSubjectIdToSelect,
    summaryText,
    warnings,
  };
}

/**
 * Robust, period-aware Excel importer for full subject grading workbooks.
 */
export async function importGradingWorkbookFromExcel(
  file: File,
  currentRecord: SubjectGradingRecord
): Promise<ImportGradingWorkbookResult> {
  const result = await importMultiSubjectGradingFromExcel(
    file,
    [currentRecord],
    currentRecord.subject.id
  );
  const updated =
    result.records.find((r) => r.subject.id === currentRecord.subject.id) ||
    result.records[0] ||
    currentRecord;

  return {
    updatedRecord: updated,
    enrolledStudentsCount: result.totalStudentsEnrolled,
    updatedPeriods: ["prelim", "midterm", "semi-final", "final"],
    warnings: result.warnings,
  };
}

/**
 * Import scores from an Excel file into a period.
 * Tries to match students by student ID or name.
 */
export function importScoresFromExcel(
  file: File,
  existingStudents: GradingStudent[],
  periodData: PeriodGradingData
): Promise<{ scores: StudentScore[]; warnings: string[] }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rawRows = XLSX.utils.sheet_to_json<any>(ws, { header: 1 });

        const warnings: string[] = [];
        const newScores: StudentScore[] = [...periodData.scores];

        // Convert rows to non-sparse arrays with safe string conversion
        const rows: string[][] = [];
        for (let r = 0; r < rawRows.length; r++) {
          const rawRow = Array.isArray(rawRows[r]) ? rawRows[r] : [];
          rows.push(Array.from(rawRow).map((c) => (c != null ? String(c).trim() : "")));
        }

        // Find header row
        let headerRow = -1;
        for (let i = 0; i < Math.min(rows.length, 10); i++) {
          const row = rows[i] || [];
          const joined = row.map((c) => (c || "").toLowerCase()).join("|");
          if (joined.includes("name") || joined.includes("quiz")) {
            headerRow = i;
            break;
          }
        }

        if (headerRow === -1) {
          warnings.push("Could not find header row. Skipping import.");
          resolve({ scores: newScores, warnings });
          return;
        }

        const header = (rows[headerRow] || []).map((c) =>
          (c || "").toLowerCase()
        );

        // Map header columns to activities
        const colActivityMap: { col: number; activity: GradingActivity }[] = [];

        for (let col = 0; col < header.length; col++) {
          const h = header[col] || "";
          if (!h) continue;

          // Quiz columns
          for (const q of periodData.quizActivities) {
            if (h === q.label.toLowerCase() || h === `quiz ${q.index + 1}`) {
              colActivityMap.push({ col, activity: q });
            }
          }
          // Participation columns
          for (const p of periodData.participationActivities) {
            if (
              h === p.label.toLowerCase() ||
              h === `cp ${p.index + 1}` ||
              h === `participation ${p.index + 1}` ||
              h === `class participation ${p.index + 1}`
            ) {
              colActivityMap.push({ col, activity: p });
            }
          }
          // Exam
          if (h === "exam" || h === "examination") {
            colActivityMap.push({ col, activity: periodData.examActivity });
          }
        }

        // Find name/ID columns safely
        const idCol = header.findIndex(
          (h) => Boolean(h && h.includes("id") && !h.includes("name"))
        );
        const nameCol = header.findIndex((h) => Boolean(h && h.includes("name")));

        // Parse data rows
        for (let i = headerRow + 1; i < rows.length; i++) {
          const row = rows[i];
          if (!row || row.length === 0) continue;

          const rowId = idCol >= 0 ? (row[idCol] || "").trim() : "";
          const rowName = nameCol >= 0 ? (row[nameCol] || "").trim() : "";

          // Match student
          const student = existingStudents.find(
            (s) =>
              (rowId && s.studentId === rowId) ||
              (rowName && s.fullName.toLowerCase() === rowName.toLowerCase())
          );

          if (!student) {
            if (rowId || rowName) {
              warnings.push(`Could not match student: ${rowId || rowName}`);
            }
            continue;
          }

          // Set scores
          for (const { col, activity } of colActivityMap) {
            const val = row[col];
            if (val !== undefined && val !== null && val !== "") {
              const numVal = Number(val);
              if (!isNaN(numVal)) {
                const existingIdx = newScores.findIndex(
                  (s) =>
                    s.studentId === student.id && s.activityId === activity.id
                );
                if (existingIdx >= 0) {
                  newScores[existingIdx] = { ...newScores[existingIdx], score: numVal };
                } else {
                  newScores.push({
                    studentId: student.id,
                    activityId: activity.id,
                    score: numVal,
                  });
                }
              }
            }
          }
        }

        resolve({ scores: newScores, warnings });
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsArrayBuffer(file);
  });
}

/**
 * Export a single grading period to a standalone Excel sheet.
 */
export function exportPeriodToExcel(
  record: SubjectGradingRecord,
  period: GradingPeriod
): void {
  const wb = XLSX.utils.book_new();
  const pd = record.periods[period];
  const rows: any[][] = [];

  const periodLabel = period.charAt(0).toUpperCase() + period.slice(1);

  rows.push(["Subject Code:", record.subject.subjectCode, "", record.subject.subjectName]);
  rows.push(["Offer No:", record.subject.offerNumber]);
  rows.push(["Period:", periodLabel]);
  rows.push([]);

  // Headers
  const headerRow: string[] = ["No.", "Student ID", "Name"];
  for (const q of pd.quizActivities) headerRow.push(q.label);
  headerRow.push("Total Quizzes");
  for (const p of pd.participationActivities) headerRow.push(p.label);
  headerRow.push("Total CP");
  headerRow.push("Exam");
  headerRow.push("Total Grade");
  headerRow.push("Rounded");
  headerRow.push(`${periodLabel} Grade`);
  rows.push(headerRow);

  // Max row
  const maxRow: (string | number)[] = ["", "", "MAX"];
  for (const q of pd.quizActivities) maxRow.push(q.maxScore);
  maxRow.push(pd.quizActivities.reduce((s, a) => s + a.maxScore, 0));
  for (const p of pd.participationActivities) maxRow.push(p.maxScore);
  maxRow.push(pd.participationActivities.reduce((s, a) => s + a.maxScore, 0));
  maxRow.push(pd.examActivity.maxScore);
  maxRow.push("");
  maxRow.push("");
  maxRow.push("");
  rows.push(maxRow);

  // Student rows
  for (let i = 0; i < record.students.length; i++) {
    const student = record.students[i];
    const comp = computeStudentGrade(pd, student.id);
    const dataRow: (string | number)[] = [i + 1, student.studentId, student.fullName];

    for (const q of pd.quizActivities) {
      const score = pd.scores.find(
        (s) => s.studentId === student.id && s.activityId === q.id
      );
      dataRow.push(score?.score ?? "");
    }
    dataRow.push(comp.totalQuizScore);

    for (const p of pd.participationActivities) {
      const score = pd.scores.find(
        (s) => s.studentId === student.id && s.activityId === p.id
      );
      dataRow.push(score?.score ?? "");
    }
    dataRow.push(comp.totalParticipationScore);

    const examScore = pd.scores.find(
      (s) => s.studentId === student.id && s.activityId === pd.examActivity.id
    );
    dataRow.push(examScore?.score ?? "");
    dataRow.push(Number(comp.totalGrade.toFixed(3)));
    dataRow.push(comp.roundedGrade);
    dataRow.push(
      comp.gradeEquivalent != null
        ? Number(comp.gradeEquivalent) || comp.gradeEquivalent
        : ""
    );

    rows.push(dataRow);
  }

  const ws = XLSX.utils.aoa_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, periodLabel);
  XLSX.writeFile(
    wb,
    `${record.subject.subjectCode}_${record.subject.offerNumber}_${periodLabel}.xlsx`
  );
}
