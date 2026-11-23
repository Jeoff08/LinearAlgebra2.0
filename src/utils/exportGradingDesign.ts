// =====================================================================
// Custom Excel Export for Grading Sheet & Cumulative SERMS
// Replicates the layout, typography, colors, angled headers, formulas,
// and cumulative SERMS structure from the official grading template.
// =====================================================================

import ExcelJS from "exceljs";
import type { SubjectGradingRecord, GradingPeriod } from "../types/grading";
import { computeStudentGrade, computeCumulativeGrades } from "./gradingEngine";

export type ExportPeriodOption =
  | "all"
  | "prelim"
  | "midterm"
  | "semi-final"
  | "final"
  | "cumulative";

export type ExportSubjectScope = "current" | "all";

export interface ExportGradingSheetConfig {
  periodScope: ExportPeriodOption;
  subjectScope: ExportSubjectScope;
  currentRecord: SubjectGradingRecord;
  allRecords?: SubjectGradingRecord[];
}

/** Convert a 1-based column index to an Excel column letter (e.g. 1 -> A, 28 -> AB, 92 -> CN) */
export function getExcelColLetter(colIndex: number): string {
  let temp = 0;
  let letter = "";
  let c = colIndex;
  while (c > 0) {
    temp = (c - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    c = Math.floor((c - temp - 1) / 26);
  }
  return letter;
}

// Design color palette matching the Excel screenshots
const COLORS = {
  headerPeach: "FFFCE4D6",      // Light peach for quizzes and CP headers
  headerDarkPeach: "FFF8CBAD",  // Darker peach for Total Quizzes and Total CP
  headerYellow: "FFFFF2CC",     // Light yellow for Exam
  headerGold: "FFFFE699",       // Yellow/Gold for Total Grade
  headerGreen: "FFC6EFCE",      // Light green for Round off & Names header
  headerBlue: "FFBDD7EE",       // Light blue for Period Grade
  headerIdBlue: "FF8EA9DB",     // Blue for ID NO. header
  white: "FFFFFFFF",
  textBlue: "FF1F4E78",         // Offer number text color
  cellIdFill: "FFD9E1F2",       // Light blue fill for student IDs
  cellNameFill: "FFE2EFDA",     // Light green fill for student Names
  cellYellowFill: "FFFFF2CC",   // Light yellow fill for Exams & Cumulative
  cellGoldFill: "FFFFE699",     // Gold fill for Total Grade
  cellPeachFill: "FFFCE4D6",    // Peach fill for totals
  cellRoundGreen: "FFE2EFDA",   // Light green for rounded
  cellGradeBlue: "FFD9E1F2",    // Light blue for period grade
  borderGray: "FF808080",
};

const THIN_BORDER: Partial<ExcelJS.Borders> = {
  top: { style: "thin", color: { argb: COLORS.borderGray } },
  left: { style: "thin", color: { argb: COLORS.borderGray } },
  bottom: { style: "thin", color: { argb: COLORS.borderGray } },
  right: { style: "thin", color: { argb: COLORS.borderGray } },
};

/**
 * Build a single worksheet tab for a subject grading record
 */
function buildSubjectWorksheet(
  ws: ExcelJS.Worksheet,
  record: SubjectGradingRecord,
  periodScope: ExportPeriodOption
): void {
  // Page setup
  ws.views = [{ showGridLines: true }];

  const subCode = (record.subject.subjectCode || "MATH").toUpperCase().trim();
  const offerNo = (record.subject.offerNumber || "").trim();

  // Row heights
  ws.getRow(1).height = 20;
  ws.getRow(2).height = 20;
  ws.getRow(3).height = 12;
  ws.getRow(4).height = 95; // Rotated headers height
  ws.getRow(5).height = 22; // Max scores row

  // 1. Top Banner (Subject Code & Offer No)
  ws.getCell("C1").value = "Subject Code:";
  ws.getCell("C1").font = { name: "Calibri", size: 11, bold: true };
  ws.getCell("C1").alignment = { vertical: "middle", horizontal: "left" };
  ws.getCell("C1").border = THIN_BORDER;

  ws.getCell("C2").value = "OFFER NO:";
  ws.getCell("C2").font = { name: "Calibri", size: 11, bold: true };
  ws.getCell("C2").alignment = { vertical: "middle", horizontal: "left" };
  ws.getCell("C2").border = THIN_BORDER;

  // Banner merge D1:S1 & D2:S2
  ws.mergeCells("D1:S1");
  const d1 = ws.getCell("D1");
  d1.value = subCode;
  d1.font = { name: "Calibri", size: 11, bold: true };
  d1.alignment = { vertical: "middle", horizontal: "center" };
  d1.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerPeach } };
  d1.border = THIN_BORDER;

  ws.mergeCells("D2:S2");
  const d2 = ws.getCell("D2");
  d2.value = offerNo;
  d2.font = { name: "Calibri", size: 11, bold: true, color: { argb: COLORS.textBlue } };
  d2.alignment = { vertical: "middle", horizontal: "center" };
  d2.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerPeach } };
  d2.border = THIN_BORDER;

  // 2. Base Identity Columns
  // Col A: Row number header
  const a4 = ws.getCell("A4");
  a4.value = "";
  a4.border = THIN_BORDER;
  ws.getColumn(1).width = 5;

  // Col B: ID NO.
  const b4 = ws.getCell("B4");
  b4.value = "ID NO.";
  b4.font = { name: "Calibri", size: 10, bold: true };
  b4.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerIdBlue } };
  b4.alignment = { textRotation: 60, vertical: "bottom", horizontal: "center" };
  b4.border = THIN_BORDER;
  ws.getColumn(2).width = 14;

  // Col C: NAMES
  const c4 = ws.getCell("C4");
  c4.value = "NAMES";
  c4.font = { name: "Calibri", size: 10, bold: true };
  c4.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerGreen } };
  c4.alignment = { vertical: "bottom", horizontal: "center" };
  c4.border = THIN_BORDER;
  ws.getColumn(3).width = 30;

  // Max Row (Row 5) identity placeholders
  ws.getCell("A5").border = THIN_BORDER;
  ws.getCell("B5").border = THIN_BORDER;
  ws.getCell("C5").border = THIN_BORDER;

  // Periods to include
  const allPeriods: GradingPeriod[] = ["prelim", "midterm", "semi-final", "final"];
  let periodsToRender: GradingPeriod[] = [];
  let includeCumulative = false;

  if (periodScope === "all") {
    periodsToRender = allPeriods;
    includeCumulative = true;
  } else if (periodScope === "cumulative") {
    periodsToRender = [];
    includeCumulative = true;
  } else {
    periodsToRender = [periodScope];
    includeCumulative = false;
  }

  let currentCol = 4; // Starts at Column D

  interface PeriodColMap {
    period: GradingPeriod;
    quizCols: number[];
    totalQuizCol: number;
    cpCols: number[];
    totalCpCol: number;
    examCol: number;
    totalGradeCol: number;
    roundOffCol: number;
    gradeCol: number;
  }

  const periodMappings: Record<string, PeriodColMap> = {};

  // Render period column groups
  for (const pKey of periodsToRender) {
    const pd = record.periods[pKey];
    const pColMap: PeriodColMap = {
      period: pKey,
      quizCols: [],
      totalQuizCol: 0,
      cpCols: [],
      totalCpCol: 0,
      examCol: 0,
      totalGradeCol: 0,
      roundOffCol: 0,
      gradeCol: 0,
    };

    // 10 Quizzes
    for (let qIdx = 0; qIdx < 10; qIdx++) {
      const col = currentCol++;
      pColMap.quizCols.push(col);
      ws.getColumn(col).width = 6.5;

      const headerCell = ws.getRow(4).getCell(col);
      headerCell.value = `Quiz ${qIdx + 1}`;
      headerCell.font = { name: "Calibri", size: 9, bold: true };
      headerCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerPeach } };
      headerCell.alignment = { textRotation: 60, vertical: "bottom", horizontal: "center" };
      headerCell.border = THIN_BORDER;

      const maxCell = ws.getRow(5).getCell(col);
      const qAct = pd.quizActivities[qIdx];
      maxCell.value = qAct && qAct.maxScore > 0 ? qAct.maxScore : "";
      maxCell.font = { name: "Calibri", size: 10, bold: true };
      maxCell.alignment = { vertical: "middle", horizontal: "center" };
      maxCell.border = THIN_BORDER;
    }

    // Total Quizzes
    {
      const col = currentCol++;
      pColMap.totalQuizCol = col;
      ws.getColumn(col).width = 10;

      const headerCell = ws.getRow(4).getCell(col);
      headerCell.value = "Total Quizzes";
      headerCell.font = { name: "Calibri", size: 9, bold: true };
      headerCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerDarkPeach } };
      headerCell.alignment = { textRotation: 60, vertical: "bottom", horizontal: "center" };
      headerCell.border = THIN_BORDER;

      const maxCell = ws.getRow(5).getCell(col);
      const totalQuizMax = pd.quizActivities.reduce((s, a) => s + (a.maxScore || 0), 0);
      maxCell.value = totalQuizMax > 0 ? totalQuizMax : "";
      maxCell.font = { name: "Calibri", size: 10, bold: true };
      maxCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerPeach } };
      maxCell.alignment = { vertical: "middle", horizontal: "center" };
      maxCell.border = THIN_BORDER;
    }

    // 5 Class Participations
    for (let cpIdx = 0; cpIdx < 5; cpIdx++) {
      const col = currentCol++;
      pColMap.cpCols.push(col);
      ws.getColumn(col).width = 6.5;

      const headerCell = ws.getRow(4).getCell(col);
      headerCell.value = `Class Participation ${cpIdx + 1}`;
      headerCell.font = { name: "Calibri", size: 9, bold: true };
      headerCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerPeach } };
      headerCell.alignment = { textRotation: 60, vertical: "bottom", horizontal: "center" };
      headerCell.border = THIN_BORDER;

      const maxCell = ws.getRow(5).getCell(col);
      const cpAct = pd.participationActivities[cpIdx];
      maxCell.value = cpAct && cpAct.maxScore > 0 ? cpAct.maxScore : "";
      maxCell.font = { name: "Calibri", size: 10, bold: true };
      maxCell.alignment = { vertical: "middle", horizontal: "center" };
      maxCell.border = THIN_BORDER;
    }

    // Class Participation Total
    {
      const col = currentCol++;
      pColMap.totalCpCol = col;
      ws.getColumn(col).width = 10;

      const headerCell = ws.getRow(4).getCell(col);
      headerCell.value = "Class Participation";
      headerCell.font = { name: "Calibri", size: 9, bold: true };
      headerCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerDarkPeach } };
      headerCell.alignment = { textRotation: 60, vertical: "bottom", horizontal: "center" };
      headerCell.border = THIN_BORDER;

      const maxCell = ws.getRow(5).getCell(col);
      const totalCpMax = pd.participationActivities.reduce((s, a) => s + (a.maxScore || 0), 0);
      maxCell.value = totalCpMax > 0 ? totalCpMax : "";
      maxCell.font = { name: "Calibri", size: 10, bold: true };
      maxCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerPeach } };
      maxCell.alignment = { vertical: "middle", horizontal: "center" };
      maxCell.border = THIN_BORDER;
    }

    // Exam
    {
      const col = currentCol++;
      pColMap.examCol = col;
      ws.getColumn(col).width = 8.5;

      const headerCell = ws.getRow(4).getCell(col);
      headerCell.value = "Exam";
      headerCell.font = { name: "Calibri", size: 9, bold: true };
      headerCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerYellow } };
      headerCell.alignment = { textRotation: 60, vertical: "bottom", horizontal: "center" };
      headerCell.border = THIN_BORDER;

      const maxCell = ws.getRow(5).getCell(col);
      maxCell.value = pd.examActivity?.maxScore > 0 ? pd.examActivity.maxScore : "";
      maxCell.font = { name: "Calibri", size: 10, bold: true };
      maxCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerYellow } };
      maxCell.alignment = { vertical: "middle", horizontal: "center" };
      maxCell.border = THIN_BORDER;
    }

    // Total Grade
    {
      const col = currentCol++;
      pColMap.totalGradeCol = col;
      ws.getColumn(col).width = 10.5;

      const headerCell = ws.getRow(4).getCell(col);
      headerCell.value = "Total Grade";
      headerCell.font = { name: "Calibri", size: 9, bold: true };
      headerCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerGold } };
      headerCell.alignment = { textRotation: 60, vertical: "bottom", horizontal: "center" };
      headerCell.border = THIN_BORDER;

      const maxCell = ws.getRow(5).getCell(col);
      maxCell.value = 100.000;
      maxCell.numFmt = "0.000";
      maxCell.font = { name: "Calibri", size: 10, bold: true };
      maxCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerGold } };
      maxCell.alignment = { vertical: "middle", horizontal: "center" };
      maxCell.border = THIN_BORDER;
    }

    // Total Grade (Round off)
    {
      const col = currentCol++;
      pColMap.roundOffCol = col;
      ws.getColumn(col).width = 10;

      const headerCell = ws.getRow(4).getCell(col);
      headerCell.value = "Total Grade (Round off)";
      headerCell.font = { name: "Calibri", size: 9, bold: true };
      headerCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerGreen } };
      headerCell.alignment = { textRotation: 60, vertical: "bottom", horizontal: "center" };
      headerCell.border = THIN_BORDER;

      const maxCell = ws.getRow(5).getCell(col);
      maxCell.value = 100;
      maxCell.numFmt = "0";
      maxCell.font = { name: "Calibri", size: 10, bold: true };
      maxCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerGreen } };
      maxCell.alignment = { vertical: "middle", horizontal: "center" };
      maxCell.border = THIN_BORDER;
    }

    // Period Grade
    {
      const col = currentCol++;
      pColMap.gradeCol = col;
      ws.getColumn(col).width = 10.5;

      const headerCell = ws.getRow(4).getCell(col);
      const periodTitle =
        pKey === "prelim"
          ? "PRELIM GRADE"
          : pKey === "midterm"
          ? "MIDTERM GRADE"
          : pKey === "semi-final"
          ? "SEMI-FINAL GRADE"
          : "FINAL GRADE";
      headerCell.value = periodTitle;
      headerCell.font = { name: "Calibri", size: 9, bold: true };
      headerCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerBlue } };
      headerCell.alignment = { textRotation: 60, vertical: "bottom", horizontal: "center" };
      headerCell.border = THIN_BORDER;

      const maxCell = ws.getRow(5).getCell(col);
      maxCell.value = 1.00;
      maxCell.numFmt = "0.00";
      maxCell.font = { name: "Calibri", size: 10, bold: true };
      maxCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.headerBlue } };
      maxCell.alignment = { vertical: "middle", horizontal: "center" };
      maxCell.border = THIN_BORDER;
    }

    periodMappings[pKey] = pColMap;
  }

  // 3. Cumulative SERMS Table (Image 2 inside Red Box)
  interface CumulativeCols {
    prelimSermsCol: number;
    qg2Col: number;
    midtermCumulCol: number;
    qg3Col: number;
    semiFinalCumulCol: number;
    qg4Col: number;
    finalCumulCol: number;
    finalGradeCol: number;
  }

  let cumulCols: CumulativeCols | null = null;

  if (includeCumulative) {
    const startC = currentCol;
    cumulCols = {
      prelimSermsCol: startC,
      qg2Col: startC + 1,
      midtermCumulCol: startC + 2,
      qg3Col: startC + 3,
      semiFinalCumulCol: startC + 4,
      qg4Col: startC + 5,
      finalCumulCol: startC + 6,
      finalGradeCol: startC + 7,
    };
    currentCol += 8;

    const sermsDefs: Array<{
      col: number;
      label: string;
      bg: string;
    }> = [
      { col: cumulCols.prelimSermsCol, label: "PRELIM (raw data in SERMS)", bg: COLORS.headerPeach },
      { col: cumulCols.qg2Col, label: "QG2 (raw data in SERMS)", bg: COLORS.white },
      { col: cumulCols.midtermCumulCol, label: "MIDTERM (Cumulative Grade)", bg: COLORS.headerPeach },
      { col: cumulCols.qg3Col, label: "QG3 (raw data in SERMS)", bg: COLORS.white },
      { col: cumulCols.semiFinalCumulCol, label: "SEMI-FINAL (Cumulative Grade)", bg: COLORS.headerPeach },
      { col: cumulCols.qg4Col, label: "QG4 (raw data in SERMS)", bg: COLORS.white },
      { col: cumulCols.finalCumulCol, label: "FINAL (Cumulative Grade)", bg: COLORS.headerPeach },
      { col: cumulCols.finalGradeCol, label: "FINAL GRADE", bg: COLORS.white },
    ];

    for (const def of sermsDefs) {
      ws.getColumn(def.col).width = 11;
      const hCell = ws.getRow(4).getCell(def.col);
      hCell.value = def.label;
      hCell.font = { name: "Calibri", size: 9, bold: true };
      hCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: def.bg } };
      hCell.alignment = { textRotation: 60, vertical: "bottom", horizontal: "center" };
      hCell.border = THIN_BORDER;

      const mCell = ws.getRow(5).getCell(def.col);
      mCell.border = THIN_BORDER;
    }
  }

  // 4. Fill Student Rows (Row 6 onwards)
  record.students.forEach((student, idx) => {
    const rowNum = 6 + idx;
    const r = ws.getRow(rowNum);
    r.height = 20;

    // Col A: Row number
    const aCell = r.getCell(1);
    aCell.value = idx + 1;
    aCell.font = { name: "Calibri", size: 10 };
    aCell.alignment = { vertical: "middle", horizontal: "center" };
    aCell.border = THIN_BORDER;

    // Col B: Student ID
    const bCell = r.getCell(2);
    bCell.value = student.studentId || "";
    bCell.font = { name: "Calibri", size: 10, bold: true };
    bCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellIdFill } };
    bCell.alignment = { vertical: "middle", horizontal: "center" };
    bCell.border = THIN_BORDER;

    // Col C: Names
    const cCell = r.getCell(3);
    cCell.value = student.fullName || "";
    cCell.font = { name: "Calibri", size: 10, bold: true };
    cCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellNameFill } };
    cCell.alignment = { vertical: "middle", horizontal: "left" };
    cCell.border = THIN_BORDER;

    // Render student period scores
    for (const pKey of periodsToRender) {
      const pd = record.periods[pKey];
      const pColMap = periodMappings[pKey];
      const comp = computeStudentGrade(pd, student.id);

      // 10 Quizzes
      pColMap.quizCols.forEach((col, qIdx) => {
        const qAct = pd.quizActivities[qIdx];
        const sc = qAct
          ? pd.scores.find((s) => s.studentId === student.id && s.activityId === qAct.id)
          : undefined;
        const cell = r.getCell(col);
        cell.value = sc && sc.score !== null && sc.score !== undefined ? sc.score : "";
        cell.font = { name: "Calibri", size: 10 };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = THIN_BORDER;
      });

      // Total Quizzes
      {
        const cell = r.getCell(pColMap.totalQuizCol);
        const startL = getExcelColLetter(pColMap.quizCols[0]);
        const endL = getExcelColLetter(pColMap.quizCols[pColMap.quizCols.length - 1]);
        cell.value = {
          formula: `SUM(${startL}${rowNum}:${endL}${rowNum})`,
          result: comp.totalQuizScore,
        };
        cell.font = { name: "Calibri", size: 10, bold: true };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellPeachFill } };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = THIN_BORDER;
      }

      // 5 CP Activities
      pColMap.cpCols.forEach((col, cpIdx) => {
        const cpAct = pd.participationActivities[cpIdx];
        const sc = cpAct
          ? pd.scores.find((s) => s.studentId === student.id && s.activityId === cpAct.id)
          : undefined;
        const cell = r.getCell(col);
        cell.value = sc && sc.score !== null && sc.score !== undefined ? sc.score : "";
        cell.font = { name: "Calibri", size: 10 };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = THIN_BORDER;
      });

      // Total CP
      {
        const cell = r.getCell(pColMap.totalCpCol);
        const startL = getExcelColLetter(pColMap.cpCols[0]);
        const endL = getExcelColLetter(pColMap.cpCols[pColMap.cpCols.length - 1]);
        cell.value = {
          formula: `SUM(${startL}${rowNum}:${endL}${rowNum})`,
          result: comp.totalParticipationScore,
        };
        cell.font = { name: "Calibri", size: 10, bold: true };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellPeachFill } };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = THIN_BORDER;
      }

      // Exam
      {
        const sc = pd.scores.find(
          (s) => s.studentId === student.id && s.activityId === pd.examActivity.id
        );
        const cell = r.getCell(pColMap.examCol);
        cell.value = sc && sc.score !== null && sc.score !== undefined ? sc.score : "";
        cell.font = { name: "Calibri", size: 10, bold: true };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellYellowFill } };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = THIN_BORDER;
      }

      // Total Grade
      {
        const cell = r.getCell(pColMap.totalGradeCol);
        cell.value = Number(comp.totalGrade.toFixed(3));
        cell.numFmt = "0.000";
        cell.font = { name: "Calibri", size: 10, bold: true };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellGoldFill } };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = THIN_BORDER;
      }

      // Total Grade (Round off)
      {
        const cell = r.getCell(pColMap.roundOffCol);
        const tgLetter = getExcelColLetter(pColMap.totalGradeCol);
        cell.value = {
          formula: `ROUND(${tgLetter}${rowNum}, 0)`,
          result: comp.roundedGrade,
        };
        cell.numFmt = "0";
        cell.font = { name: "Calibri", size: 10, bold: true };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellRoundGreen } };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = THIN_BORDER;
      }

      // Period Grade
      {
        const cell = r.getCell(pColMap.gradeCol);
        const val = comp.gradeEquivalent != null ? Number(comp.gradeEquivalent) : "";
        cell.value = val !== "" ? val : "";
        if (typeof val === "number") cell.numFmt = "0.00";
        cell.font = { name: "Calibri", size: 10, bold: true };
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellGradeBlue } };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = THIN_BORDER;
      }
    }

    // Render Cumulative SERMS values and formulas (Image 2 inside Red Box)
    if (includeCumulative && cumulCols) {
      // Calculate raw SERMS grades for all periods
      const prelimComp = computeStudentGrade(record.periods.prelim, student.id);
      const midtermComp = computeStudentGrade(record.periods.midterm, student.id);
      const semiComp = computeStudentGrade(record.periods["semi-final"], student.id);
      const finalComp = computeStudentGrade(record.periods.final, student.id);

      const rawOverrides = record.sermsRawGrades?.[student.id];
      const prelimVal = rawOverrides?.prelim ?? (prelimComp.gradeEquivalent != null ? Number(prelimComp.gradeEquivalent) : null);
      const qg2Val = rawOverrides?.qg2 ?? (midtermComp.gradeEquivalent != null ? Number(midtermComp.gradeEquivalent) : null);
      const qg3Val = rawOverrides?.qg3 ?? (semiComp.gradeEquivalent != null ? Number(semiComp.gradeEquivalent) : null);
      const effectiveQg4 = rawOverrides?.qg4 ?? (finalComp.gradeEquivalent != null ? Number(finalComp.gradeEquivalent) : 5.0);

      const cumResults = computeCumulativeGrades(prelimVal, qg2Val, qg3Val, effectiveQg4);

      // Prelim SERMS
      const pCell = r.getCell(cumulCols.prelimSermsCol);
      pCell.value = prelimVal != null ? prelimVal : "";
      if (typeof pCell.value === "number") pCell.numFmt = "0.00";
      pCell.font = { name: "Calibri", size: 10, bold: true };
      pCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellYellowFill } };
      pCell.alignment = { vertical: "middle", horizontal: "center" };
      pCell.border = THIN_BORDER;

      // QG2 SERMS
      const qg2Cell = r.getCell(cumulCols.qg2Col);
      qg2Cell.value = qg2Val != null ? qg2Val : "";
      if (typeof qg2Cell.value === "number") qg2Cell.numFmt = "0.00";
      qg2Cell.font = { name: "Calibri", size: 10, bold: true };
      qg2Cell.alignment = { vertical: "middle", horizontal: "center" };
      qg2Cell.border = THIN_BORDER;

      // MIDTERM Cumulative
      const mCumCell = r.getCell(cumulCols.midtermCumulCol);
      const pLet = getExcelColLetter(cumulCols.prelimSermsCol);
      const qg2Let = getExcelColLetter(cumulCols.qg2Col);
      mCumCell.value = {
        formula: `(${pLet}${rowNum}+${qg2Let}${rowNum})/2`,
        result: cumResults.midterm != null ? cumResults.midterm : "",
      };
      if (cumResults.midterm != null) mCumCell.numFmt = "0.00";
      mCumCell.font = { name: "Calibri", size: 10, bold: true };
      mCumCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellYellowFill } };
      mCumCell.alignment = { vertical: "middle", horizontal: "center" };
      mCumCell.border = THIN_BORDER;

      // QG3 SERMS
      const qg3Cell = r.getCell(cumulCols.qg3Col);
      qg3Cell.value = qg3Val != null ? qg3Val : "";
      if (typeof qg3Cell.value === "number") qg3Cell.numFmt = "0.00";
      qg3Cell.font = { name: "Calibri", size: 10, bold: true };
      qg3Cell.alignment = { vertical: "middle", horizontal: "center" };
      qg3Cell.border = THIN_BORDER;

      // SEMI-FINAL Cumulative
      const sCumCell = r.getCell(cumulCols.semiFinalCumulCol);
      const mLet = getExcelColLetter(cumulCols.midtermCumulCol);
      const qg3Let = getExcelColLetter(cumulCols.qg3Col);
      sCumCell.value = {
        formula: `(${mLet}${rowNum}+${qg3Let}${rowNum})/2`,
        result: cumResults.semiFinal != null ? cumResults.semiFinal : "",
      };
      if (cumResults.semiFinal != null) sCumCell.numFmt = "0.00";
      sCumCell.font = { name: "Calibri", size: 10, bold: true };
      sCumCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellYellowFill } };
      sCumCell.alignment = { vertical: "middle", horizontal: "center" };
      sCumCell.border = THIN_BORDER;

      // QG4 SERMS
      const qg4Cell = r.getCell(cumulCols.qg4Col);
      qg4Cell.value = effectiveQg4;
      qg4Cell.numFmt = "0.00";
      qg4Cell.font = { name: "Calibri", size: 10, bold: true };
      qg4Cell.alignment = { vertical: "middle", horizontal: "center" };
      qg4Cell.border = THIN_BORDER;

      // FINAL Cumulative
      const fCumCell = r.getCell(cumulCols.finalCumulCol);
      const sLet = getExcelColLetter(cumulCols.semiFinalCumulCol);
      const qg4Let = getExcelColLetter(cumulCols.qg4Col);
      fCumCell.value = {
        formula: `(${sLet}${rowNum}+${qg4Let}${rowNum})/2`,
        result: cumResults.finalCumulative != null ? cumResults.finalCumulative : "",
      };
      if (cumResults.finalCumulative != null) fCumCell.numFmt = "0.00";
      fCumCell.font = { name: "Calibri", size: 10, bold: true };
      fCumCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLORS.cellYellowFill } };
      fCumCell.alignment = { vertical: "middle", horizontal: "center" };
      fCumCell.border = THIN_BORDER;

      // FINAL GRADE (rounded to 1 decimal)
      const fgCell = r.getCell(cumulCols.finalGradeCol);
      const fLet = getExcelColLetter(cumulCols.finalCumulCol);
      fgCell.value = {
        formula: `ROUND(${fLet}${rowNum},1)`,
        result: cumResults.finalGrade != null ? cumResults.finalGrade : "",
      };
      if (cumResults.finalGrade != null) fgCell.numFmt = "0.0";
      fgCell.font = { name: "Calibri", size: 10, bold: true };
      fgCell.alignment = { vertical: "middle", horizontal: "center" };
      fgCell.border = THIN_BORDER;
    }
  });
}

/**
 * Generate a clean Excel worksheet title (max 31 characters, no invalid chars : \ / ? * [ ])
 */
function cleanSheetTabName(record: SubjectGradingRecord): string {
  const code = (record.subject.subjectCode || "MATH").replace(/[:\\/?*[\]\s]/g, "");
  const offer = (record.subject.offerNumber || "").replace(/[:\\/?*[\]\s]/g, "");
  const base = offer ? `${code}-${offer}` : code;
  return base.slice(0, 31);
}

/**
 * Main export function called by the UI.
 * Handles single or multi-subject exports, period scoping, and initiates the browser download.
 */
export async function exportCustomGradingExcel(
  config: ExportGradingSheetConfig
): Promise<void> {
  const wb = new ExcelJS.Workbook();
  wb.creator = "MathWorkspace Grading System";
  wb.lastModifiedBy = "MathWorkspace";
  wb.created = new Date();
  wb.modified = new Date();

  const subjectsToExport =
    config.subjectScope === "all" && Array.isArray(config.allRecords) && config.allRecords.length > 0
      ? config.allRecords
      : [config.currentRecord];

  const usedTabNames = new Set<string>();

  for (const rec of subjectsToExport) {
    let tabName = cleanSheetTabName(rec);
    if (usedTabNames.has(tabName)) {
      tabName = `${tabName.slice(0, 28)}-${usedTabNames.size + 1}`;
    }
    usedTabNames.add(tabName);

    const ws = wb.addWorksheet(tabName);
    buildSubjectWorksheet(ws, rec, config.periodScope);
  }

  // Generate filename
  const baseCode = (config.currentRecord.subject.subjectCode || "MATH").replace(/\s+/g, "");
  const baseOffer = (config.currentRecord.subject.offerNumber || "").replace(/\s+/g, "");
  const scopeSuffix =
    config.periodScope === "all"
      ? "Full_Grading_Sheet"
      : config.periodScope === "cumulative"
      ? "Cumulative_SERMS_Grades"
      : `${config.periodScope.toUpperCase()}_Grades`;

  const subjectSuffix = config.subjectScope === "all" ? "All_Subjects" : `${baseCode}_${baseOffer}`;
  const filename = `${subjectSuffix}_${scopeSuffix}.xlsx`;

  // Write buffer and trigger browser download
  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
