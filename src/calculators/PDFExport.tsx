// components/PDFExport.tsx
import React, { useState, useRef, useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import {
  Download,
  FileText,
  ChevronDown,
  Check,
  Settings,
  Printer,
} from "lucide-react";

export type PaperSize = "a4" | "short" | "long" | "legal";
export type Orientation = "portrait" | "landscape";

export interface PDFExportProps {
  title: string;
  data: string;
  graphCanvasRef?: React.RefObject<HTMLCanvasElement | null>;
  steps?: (string | { step: string; explanation?: string })[];
  explanation?: string;
  inputs?: string | Record<string, any>;
  fileName?: string;
  orientation?: Orientation;
  defaultPaperSize?: PaperSize;
  className?: string;
  buttonLabel?: string;
  customSections?: { title: string; content: string | string[] }[];
}

export const PAPER_CONFIGS: Record<
  PaperSize,
  {
    name: string;
    shortName: string;
    dimensions: [number, number];
    desc: string;
  }
> = {
  a4: {
    name: "A4",
    shortName: "A4",
    dimensions: [210, 297],
    desc: "210 × 297 mm (Standard ISO)",
  },
  short: {
    name: "Short Bond Paper",
    shortName: 'Short (8.5×11")',
    dimensions: [215.9, 279.4],
    desc: "Letter / 8.5 × 11 inches (216 × 279 mm)",
  },
  long: {
    name: "Long Bond Paper",
    shortName: 'Long (8.5×13")',
    dimensions: [215.9, 330.2],
    desc: "Folio / 8.5 × 13 inches (216 × 330 mm)",
  },
  legal: {
    name: "US Legal",
    shortName: 'Legal (8.5×14")',
    dimensions: [215.9, 355.6],
    desc: "Legal / 8.5 × 14 inches (216 × 356 mm)",
  },
};

const PDFExport: React.FC<PDFExportProps> = ({
  title,
  data,
  graphCanvasRef,
  steps,
  explanation,
  inputs,
  fileName = "linear_algebra_result",
  orientation = "portrait",
  defaultPaperSize = "a4",
  className = "",
  buttonLabel = "Export PDF",
  customSections,
}) => {
  const [selectedSize, setSelectedSize] = useState<PaperSize>(() => {
    const saved = localStorage.getItem(
      "preferred_pdf_paper_size",
    ) as PaperSize | null;
    return saved && PAPER_CONFIGS[saved] ? saved : defaultPaperSize;
  });
  const [selectedOrientation, setSelectedOrientation] =
    useState<Orientation>(orientation);
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSizeChange = (size: PaperSize) => {
    setSelectedSize(size);
    localStorage.setItem("preferred_pdf_paper_size", size);
  };

  const exportPDF = (overrideSize?: PaperSize) => {
    setIsExporting(true);
    const paperSizeKey = overrideSize || selectedSize;
    const config = PAPER_CONFIGS[paperSizeKey] || PAPER_CONFIGS.a4;

    try {
      // Dimensions in mm: [width, height] for portrait
      const [widthMm, heightMm] = config.dimensions;
      const format =
        selectedOrientation === "landscape"
          ? [heightMm, widthMm]
          : [widthMm, heightMm];

      const doc = new jsPDF({
        orientation: selectedOrientation,
        unit: "mm",
        format: format as [number, number],
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 18;
      const maxWidth = pageWidth - 2 * margin;
      let yPos = margin + 4;
      const sectionGap = 9;

      // --- BRAND HEADER BAR ---
      doc.setFillColor(123, 24, 36); // Maroon #7B1824
      doc.rect(margin, yPos - 6, maxWidth, 3, "F");
      yPos += 4;

      // --- TITLE ---
      doc.setFontSize(18);
      doc.setTextColor(30, 41, 59); // Slate 800
      doc.setFont("helvetica", "bold");
      doc.text(title, margin, yPos);
      yPos += 7;

      // --- METADATA BAR ---
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139); // Slate 500
      doc.setFont("helvetica", "normal");

      const dateStr = `Generated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}`;
      const paperStr = `Paper Size: ${config.name} (${config.shortName}) | ${selectedOrientation.toUpperCase()}`;

      doc.text(dateStr, margin, yPos);
      doc.text(paperStr, pageWidth - margin, yPos, { align: "right" });
      yPos += 6;

      // Divider line
      doc.setDrawColor(226, 232, 240); // Slate 200
      doc.setLineWidth(0.4);
      doc.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 8;

      // Helper function to check and add page if needed
      const ensureSpace = (requiredHeight: number) => {
        if (yPos + requiredHeight > pageHeight - margin - 12) {
          doc.addPage();
          yPos = margin + 10;
          return true;
        }
        return false;
      };

      const wrapPdfText = (
        text: string,
        availableWidth: number,
        maxCharactersPerLine = Number.POSITIVE_INFINITY,
      ) => {
        const wrapped: string[] = [];
        for (const paragraph of text.replace(/\s*\|\s*/g, "\n").split("\n")) {
          const words = paragraph.trim().split(/\s+/).filter(Boolean);
          let current = "";

          for (const word of words) {
            const candidate = current ? `${current} ${word}` : word;
            if (
              doc.getTextWidth(candidate) <= availableWidth &&
              candidate.length <= maxCharactersPerLine
            ) {
              current = candidate;
              continue;
            }

            if (current) wrapped.push(current);
            current = "";
            for (const character of word) {
              const characterCandidate = current + character;
              if (
                doc.getTextWidth(characterCandidate) > availableWidth &&
                current
              ) {
                wrapped.push(current);
                current = character;
              } else {
                current = characterCandidate;
              }
            }
          }

          if (current) wrapped.push(current);
        }
        return wrapped;
      };

      // --- GIVEN / INPUT SECTION (if provided) ---
      if (inputs) {
        ensureSpace(20);
        doc.setFillColor(248, 250, 252); // Slate 50
        doc.setDrawColor(226, 232, 240);
        doc.setFontSize(11);
        doc.setTextColor(30, 41, 59);
        doc.setFont("helvetica", "bold");
        doc.text("GIVEN INPUT / PROBLEM SETUP", margin, yPos);
        yPos += 6;

        doc.setFontSize(9.5);
        doc.setTextColor(51, 65, 85);
        doc.setFont("helvetica", "normal");

        const inputLines =
          typeof inputs === "string"
            ? inputs.split("\n")
            : Object.entries(inputs).map(
                ([k, v]) =>
                  `${k}: ${typeof v === "object" ? JSON.stringify(v) : v}`,
              );

        for (const line of inputLines) {
          if (line.trim()) {
            ensureSpace(6);
            const wrapped = doc.splitTextToSize(line.trim(), maxWidth - 6);
            for (const wLine of wrapped) {
              doc.text(wLine, margin + 2, yPos);
              yPos += 5;
            }
          }
        }
        yPos += sectionGap - 2;
      }

      // --- RESULT SECTION ---
      ensureSpace(25);

      // Result Header banner
      doc.setFillColor(253, 242, 244); // Maroon Tint #FDF2F4
      doc.roundedRect(margin, yPos - 2, maxWidth, 8, 1.5, 1.5, "F");

      doc.setFontSize(11);
      doc.setTextColor(123, 24, 36); // Maroon #7B1824
      doc.setFont("helvetica", "bold");
      doc.text("CALCULATED RESULT", margin + 4, yPos + 4);
      yPos += 12;

      doc.setFontSize(10);
      doc.setTextColor(30, 41, 59);
      doc.setFont("helvetica", "normal");

      const resultLines = data.split("\n").filter((line) => line.trim());
      for (const line of resultLines) {
        if (line.trim()) {
          ensureSpace(7);
          const cleanLine = line.replace(/[\[\]{}]/g, "").trim();
          const wrapped = doc.splitTextToSize(cleanLine, maxWidth - 8);

          for (const wLine of wrapped) {
            ensureSpace(6);
            doc.text(wLine, margin + 4, yPos);
            yPos += 5.5;
          }
        }
      }
      yPos += sectionGap;

      const graphImage = graphCanvasRef?.current?.toDataURL("image/png");
      if (graphImage) {
        const graphWidth = maxWidth;
        const graphHeight = graphWidth * (320 / 680);
        ensureSpace(graphHeight + sectionGap + 12);

        doc.setFillColor(239, 246, 255); // Blue 50
        doc.roundedRect(margin, yPos - 2, maxWidth, 8, 1.5, 1.5, "F");

        doc.setFontSize(11);
        doc.setTextColor(30, 64, 175); // Blue 800
        doc.setFont("helvetica", "bold");
        doc.text("VISUAL FUNCTION GRAPH & BEHAVIOR", margin + 4, yPos + 4);
        yPos += 12;

        doc.addImage(graphImage, "PNG", margin, yPos, graphWidth, graphHeight);
        yPos += graphHeight + sectionGap;
      }

      // --- EXPLANATION SECTION ---
      if (explanation && explanation.trim()) {
        ensureSpace(25);

        doc.setFillColor(240, 253, 244); // Emerald 50
        doc.roundedRect(margin, yPos - 2, maxWidth, 8, 1.5, 1.5, "F");

        doc.setFontSize(11);
        doc.setTextColor(21, 128, 61); // Emerald 700
        doc.setFont("helvetica", "bold");
        doc.text("EXPLANATION & PROPERTIES", margin + 4, yPos + 4);
        yPos += 12;

        doc.setFontSize(9.5);
        doc.setTextColor(51, 65, 85);
        doc.setFont("helvetica", "normal");

        const expLines = explanation.split("\n");
        for (const line of expLines) {
          if (line.trim()) {
            ensureSpace(6);
            const isBullet =
              line.trim().startsWith("•") ||
              line.trim().startsWith("-") ||
              line.trim().startsWith("*");
            if (isBullet) {
              doc.setFont("helvetica", "bold");
              doc.setTextColor(30, 41, 59);
            } else {
              doc.setFont("helvetica", "normal");
              doc.setTextColor(71, 85, 105);
            }
            const wrapped = doc.splitTextToSize(line, maxWidth - 8);
            for (const wLine of wrapped) {
              ensureSpace(5.5);
              doc.text(wLine, margin + 4, yPos);
              yPos += 5;
            }
          } else {
            yPos += 2.5;
          }
        }
        yPos += sectionGap;
      }

      // --- CUSTOM SECTIONS ---
      if (customSections && customSections.length > 0) {
        for (const section of customSections) {
          ensureSpace(18);
          doc.setFillColor(240, 253, 250); // Teal 50
          doc.roundedRect(margin, yPos - 2, maxWidth, 8, 1.5, 1.5, "F");

          doc.setFontSize(10.5);
          doc.setTextColor(15, 118, 110); // Teal 700
          doc.setFont("helvetica", "bold");
          doc.text(section.title, margin + 4, yPos + 4);
          yPos += 12;

          // Keep verification text compact while wrapping every line to the selected paper width.
          doc.setFontSize(8.8);
          doc.setCharSpace(0);
          doc.setTextColor(51, 65, 85);
          doc.setFont("helvetica", "normal");

          const items = Array.isArray(section.content)
            ? section.content
            : [section.content];
          for (const item of items) {
            const lines = item.split("\n");
            for (const line of lines) {
              if (line.trim()) {
                const wrapped = wrapPdfText(line.trim(), maxWidth - 8, 58);
                for (const wLine of wrapped) {
                  ensureSpace(5.2);
                  doc.text(wLine, margin + 4, yPos);
                  yPos += 4.4;
                }
              } else {
                ensureSpace(4.4);
                yPos += 2.2;
              }
            }
          }
          yPos += sectionGap;
        }
      }

      // --- STEPS SECTION ---
      if (steps && steps.length > 0) {
        ensureSpace(25);

        doc.setFillColor(241, 245, 249); // Slate 100
        doc.roundedRect(margin, yPos - 2, maxWidth, 8, 1.5, 1.5, "F");

        doc.setFontSize(11);
        doc.setTextColor(15, 23, 42); // Slate 900
        doc.setFont("helvetica", "bold");
        doc.text("STEP-BY-STEP CALCULATION DETAILS", margin + 4, yPos + 4);
        yPos += 12;

        doc.setFontSize(9.5);
        doc.setTextColor(51, 65, 85);

        for (let i = 0; i < steps.length; i++) {
          const item = steps[i];
          const stepText = typeof item === "string" ? item : item.step;
          const stepExpl =
            typeof item === "object" ? item.explanation : undefined;

          if (!stepText && !stepExpl) continue;

          ensureSpace(12);

          // Step header or bullet marker
          const stepLines = (stepText || "").split("\n");
          for (const line of stepLines) {
            if (!line.trim()) {
              yPos += 2;
              continue;
            }

            const isHeader =
              /^Step \d+:|^[📝📊🔄➖➗✅⚡📐]|^Row|^Iteration/i.test(
                line.trim(),
              );
            const isBullet =
              line.trim().startsWith("•") || line.trim().startsWith("-");

            if (isHeader) {
              ensureSpace(8);
              doc.setFont("helvetica", "bold");
              doc.setTextColor(30, 41, 59);
            } else if (isBullet) {
              doc.setFont("helvetica", "bold");
              doc.setTextColor(71, 85, 105);
            } else {
              doc.setFont("helvetica", "normal");
              doc.setTextColor(51, 65, 85);
            }

            const cleanLine = line.replace(/^ {2,}/, "  ");
            const wrapped = doc.splitTextToSize(cleanLine, maxWidth - 6);

            for (const wLine of wrapped) {
              ensureSpace(5.5);
              doc.text(wLine, margin + 4, yPos);
              yPos += 4.8;
            }
          }

          if (stepExpl && stepExpl.trim()) {
            ensureSpace(8);
            doc.setFont("helvetica", "italic");
            doc.setTextColor(100, 116, 139);
            const wrappedExpl = doc.splitTextToSize(
              `Note: ${stepExpl}`,
              maxWidth - 10,
            );
            for (const eLine of wrappedExpl) {
              ensureSpace(5);
              doc.text(eLine, margin + 6, yPos);
              yPos += 4.5;
            }
          }

          yPos += 2.5;
        }
        yPos += sectionGap;
      }

      // Footer line on all pages
      const totalPages = (doc.internal as any).getNumberOfPages();
      for (let p = 1; p <= totalPages; p++) {
        doc.setPage(p);
        doc.setDrawColor(226, 232, 240);
        doc.setLineWidth(0.3);
        doc.line(
          margin,
          pageHeight - margin + 3,
          pageWidth - margin,
          pageHeight - margin + 3,
        );

        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184); // Slate 400
        doc.setFont("helvetica", "normal");
        doc.text(
          `Linear Algebra Solver • Page ${p} of ${totalPages}`,
          pageWidth / 2,
          pageHeight - margin + 7,
          { align: "center" },
        );
      }

      // Save the generated document
      doc.save(
        `${fileName}_${config.shortName.toLowerCase().replace(/[^a-z0-9]/g, "_")}.pdf`,
      );
    } catch (err) {
      console.error("PDF Generation failed:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsExporting(false);
      setIsOpen(false);
    }
  };

  const currentConfig = PAPER_CONFIGS[selectedSize] || PAPER_CONFIGS.a4;

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      ref={dropdownRef}
    >
      <div className="inline-flex rounded-xl shadow-xs">
        {/* Main Action Button */}
        <button
          type="button"
          onClick={() => exportPDF()}
          disabled={isExporting}
          title={`Export PDF in ${currentConfig.name} format`}
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#7B1824] hover:bg-[#60101B] text-white text-xs sm:text-sm font-semibold rounded-l-xl border-r border-[#60101B] shadow-xs transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          <FileText className="w-4 h-4 text-white/80" />
          <span>{isExporting ? "Exporting..." : buttonLabel}</span>
          <span className="hidden sm:inline-block text-[11px] px-1.5 py-0.5 rounded bg-black/20 text-white/90 font-mono">
            {currentConfig.shortName}
          </span>
        </button>

        {/* Paper Size & Options Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center px-2 py-2 bg-[#60101B] hover:bg-[#4D0C14] text-white rounded-r-xl shadow-xs transition-all focus:outline-none cursor-pointer"
          title="Choose Paper Size & Options (A4, Short, Long)"
          aria-expanded={isOpen}
          aria-label="Paper size options"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Dropdown Menu for Paper Size Selection */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-white border border-gray-200 shadow-2xl z-50 p-3 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900">
              <Printer className="w-3.5 h-3.5 text-[#7B1824]" />
              <span>Select Paper Size</span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium">
              Fitted Export
            </span>
          </div>

          {/* Paper Size Selection List */}
          <div className="space-y-1.5">
            {(Object.keys(PAPER_CONFIGS) as PaperSize[]).map((sizeKey) => {
              const config = PAPER_CONFIGS[sizeKey];
              const isSelected = selectedSize === sizeKey;

              return (
                <button
                  key={sizeKey}
                  type="button"
                  onClick={() => handleSizeChange(sizeKey)}
                  className={`w-full text-left px-2.5 py-2 rounded-xl flex items-center justify-between transition-colors text-xs cursor-pointer ${
                    isSelected
                      ? "bg-[#FDF2F4] border border-[#7B1824]/30 text-[#7B1824] font-semibold"
                      : "hover:bg-gray-50 text-gray-700 border border-transparent"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium flex items-center gap-1.5">
                      {config.name}
                      {sizeKey === "long" && (
                        <span className="text-[9px] bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-normal">
                          Folio
                        </span>
                      )}
                      {sizeKey === "short" && (
                        <span className="text-[9px] bg-sky-100 text-sky-800 px-1 py-0.2 rounded font-normal">
                          Letter
                        </span>
                      )}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono mt-0.5">
                      {config.desc}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="w-4 h-4 rounded-full bg-[#7B1824] text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Orientation Toggle */}
          <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-gray-600 font-medium">Orientation:</span>
            <div className="flex items-center gap-1 bg-gray-100 p-0.5 rounded-lg text-[11px]">
              <button
                type="button"
                onClick={() => setSelectedOrientation("portrait")}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedOrientation === "portrait"
                    ? "bg-white text-[#7B1824] font-bold shadow-xs"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Portrait
              </button>
              <button
                type="button"
                onClick={() => setSelectedOrientation("landscape")}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedOrientation === "landscape"
                    ? "bg-white text-[#7B1824] font-bold shadow-xs"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Landscape
              </button>
            </div>
          </div>

          {/* Download Quick Button Inside Menu */}
          <button
            type="button"
            onClick={() => exportPDF()}
            disabled={isExporting}
            className="w-full mt-3 py-2 px-3 bg-[#7B1824] hover:bg-[#60101B] text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download {currentConfig.name} PDF</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFExport;
