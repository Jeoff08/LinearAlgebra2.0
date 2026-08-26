// filename: calculus-2-topics.ts

export type Calculus2SubCategoryId =
  | "all"
  | "chapter-9"
  | "chapter-10"
  | "chapter-11"
  | "chapter-12"
  | "chapter-13"
  | "chapter-14"
  | "chapter-15"
  | "chapter-16";

export interface Calculus2TopicItem {
  id: string;
  title: string;
  summary: string;
  details: string;
  examples: string[];
  category: "calculus";
  categoryLabel: string;
  subCategory: string;
  subCategoryLabel: string;
  chapterNumber: number;
}

export const CHAPTER_INFO: Record<number, { id: string; label: string; shortLabel: string }> = {
  9: { id: "chapter-9", label: "Chapter 9: Logarithmic and Exponential Functions", shortLabel: "Chapter 9" },
  10: { id: "chapter-10", label: "Chapter 10: Trigonometric Functions", shortLabel: "Chapter 10" },
  11: { id: "chapter-11", label: "Chapter 11: Techniques of Integration", shortLabel: "Chapter 11" },
  12: { id: "chapter-12", label: "Chapter 12: Hyperbolic Functions", shortLabel: "Chapter 12" },
  13: { id: "chapter-13", label: "Chapter 13: Polar Coordinates", shortLabel: "Chapter 13" },
  14: { id: "chapter-14", label: "Chapter 14: Conic Sections", shortLabel: "Chapter 14" },
  15: { id: "chapter-15", label: "Chapter 15: Improper Integrals and Taylor's Formula", shortLabel: "Chapter 15" },
  16: { id: "chapter-16", label: "Chapter 16: Infinite Series", shortLabel: "Chapter 16" },
};

const topicModules = import.meta.glob("./Calculus_2/Chapter_*/*.ts", {
  eager: true,
}) as Record<string, { default: any } | any>;

export const ALL_CALCULUS_2_TOPICS: Calculus2TopicItem[] = Object.keys(topicModules)
  .sort((a, b) => {
    const chapterA = parseInt(a.match(/Chapter_(\d+)/)?.[1] || "0", 10);
    const chapterB = parseInt(b.match(/Chapter_(\d+)/)?.[1] || "0", 10);
    if (chapterA !== chapterB) {
      return chapterA - chapterB;
    }
    return a.localeCompare(b);
  })
  .map((path) => {
    const mod = topicModules[path];
    const raw = mod && mod.default ? mod.default : mod;
    const chapterNum = parseInt(path.match(/Chapter_(\d+)/)?.[1] || "9", 10);
    const chapter = CHAPTER_INFO[chapterNum] || {
      id: `chapter-${chapterNum}`,
      label: `Chapter ${chapterNum}`,
      shortLabel: `Chapter ${chapterNum}`,
    };

    return {
      id: raw?.id || path,
      title: raw?.title || "Topic",
      summary: raw?.summary || "",
      details: raw?.details || "",
      examples: Array.isArray(raw?.examples) ? raw.examples : [],
      category: "calculus" as const,
      categoryLabel: "Calculus II",
      subCategory: chapter.id,
      subCategoryLabel: chapter.label,
      chapterNumber: chapterNum,
    };
  })
  .filter((t) => Boolean(t && t.id && t.title));

export const CALCULUS_2_SUB_CATEGORIES = [
  { id: "all", label: "All Topics" },
  { id: "chapter-9", label: "Chapter 9: Logarithmic and Exponential Functions" },
  { id: "chapter-10", label: "Chapter 10: Trigonometric Functions" },
  { id: "chapter-11", label: "Chapter 11: Techniques of Integration" },
  { id: "chapter-12", label: "Chapter 12: Hyperbolic Functions" },
  { id: "chapter-13", label: "Chapter 13: Polar Coordinates" },
  { id: "chapter-14", label: "Chapter 14: Conic Sections" },
  { id: "chapter-15", label: "Chapter 15: Improper Integrals and Taylor's Formula" },
  { id: "chapter-16", label: "Chapter 16: Infinite Series" },
] as const;

export default ALL_CALCULUS_2_TOPICS;
