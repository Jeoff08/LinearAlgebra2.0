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
} from "../types/grading";
import { computeStudentGrade } from "./gradingEngine";

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

/**
 * Import a student list from an Excel file.
 * Expects columns: Student ID, Name (with optional Student Number/No.)
 */
export function importStudentListFromExcel(file: File): Promise<GradingStudent[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json<any>(ws, { header: 1 });

        const students: GradingStudent[] = [];
        let headerRow = -1;

        // Find header row
        for (let i = 0; i < rows.length; i++) {
          const row = rows[i] as any[];
          if (!row) continue;
          const joined = row.map((c: any) => String(c || "").toLowerCase()).join("|");
          if (
            joined.includes("name") &&
            (joined.includes("id") || joined.includes("student"))
          ) {
            headerRow = i;
            break;
          }
        }

        if (headerRow === -1) {
          // Fallback: assume first row is header
          headerRow = 0;
        }

        // Find column indices
        const header = (rows[headerRow] as any[]).map((c: any) =>
          String(c || "").toLowerCase().trim()
        );
        const idCol = header.findIndex(
          (h: string) =>
            h.includes("student id") ||
            h.includes("id no") ||
            h === "id" ||
            h.includes("id_no")
        );
        const nameCol = header.findIndex(
          (h: string) => h.includes("name") || h.includes("full name")
        );
        const noCol = header.findIndex(
          (h: string) =>
            h === "no" ||
            h === "no." ||
            h.includes("student no") ||
            h === "#"
        );

        // Parse data rows
        for (let i = headerRow + 1; i < rows.length; i++) {
          const row = rows[i] as any[];
          if (!row || row.length === 0) continue;

          const studentId = idCol >= 0 ? String(row[idCol] || "").trim() : "";
          const fullName = nameCol >= 0 ? String(row[nameCol] || "").trim() : "";
          const studentNo = noCol >= 0 ? String(row[noCol] || "").trim() : String(students.length + 1);

          if (!fullName && !studentId) continue;

          students.push({
            id: generateId(),
            studentNumber: studentNo,
            studentId,
            fullName,
          });
        }

        resolve(students);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsArrayBuffer(file);
  });
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
        const rows = XLSX.utils.sheet_to_json<any>(ws, { header: 1 });

        const warnings: string[] = [];
        const newScores: StudentScore[] = [...periodData.scores];

        // Find header row
        let headerRow = -1;
        for (let i = 0; i < Math.min(rows.length, 10); i++) {
          const row = rows[i] as any[];
          if (!row) continue;
          const joined = row.map((c: any) => String(c || "").toLowerCase()).join("|");
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

        const header = (rows[headerRow] as any[]).map((c: any) =>
          String(c || "").toLowerCase().trim()
        );

        // Map header columns to activities
        const colActivityMap: { col: number; activity: GradingActivity }[] = [];

        for (let col = 0; col < header.length; col++) {
          const h = header[col];
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

        // Find name/ID columns
        const idCol = header.findIndex(
          (h: string) => h.includes("id") && !h.includes("name")
        );
        const nameCol = header.findIndex((h: string) => h.includes("name"));

        // Parse data rows
        for (let i = headerRow + 1; i < rows.length; i++) {
          const row = rows[i] as any[];
          if (!row || row.length === 0) continue;

          const rowId = idCol >= 0 ? String(row[idCol] || "").trim() : "";
          const rowName = nameCol >= 0 ? String(row[nameCol] || "").trim() : "";

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
