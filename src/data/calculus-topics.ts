// filename: calculus-topics.ts

export type CalculusSubCategoryId =
  | "all"
  | "chapter-1"
  | "chapter-2"
  | "chapter-3"
  | "chapter-4"
  | "chapter-5"
  | "chapter-6"
  | "chapter-7"
  | "chapter-8";

export interface CalculusTopicItem {
  id: string;
  title: string;
  summary: string;
  details: string;
  image?: string;
  examples: string[];
  category: "calculus";
  categoryLabel: string;
  subCategory: string;
  subCategoryLabel: string;
  chapterNumber: number;
}

export const CHAPTER_INFO: Record<number, { id: string; label: string; shortLabel: string }> = {
  1: { id: "chapter-1", label: "Chapter 1: Real Numbers, Functions & Graphs", shortLabel: "Chapter 1" },
  2: { id: "chapter-2", label: "Chapter 2: Limits & Continuity", shortLabel: "Chapter 2" },
  3: { id: "chapter-3", label: "Chapter 3: The Derivative & Differentiation Rules", shortLabel: "Chapter 3" },
  4: { id: "chapter-4", label: "Chapter 4: Extrema & Mean Value Theorem", shortLabel: "Chapter 4" },
  5: { id: "chapter-5", label: "Chapter 5: Curve Sketching & Applications", shortLabel: "Chapter 5" },
  6: { id: "chapter-6", label: "Chapter 6: Differentials & Antidifferentiation", shortLabel: "Chapter 6" },
  7: { id: "chapter-7", label: "Chapter 7: The Definite Integral", shortLabel: "Chapter 7" },
  8: { id: "chapter-8", label: "Chapter 8: Applications of Integration", shortLabel: "Chapter 8" },
};

const topicModules = import.meta.glob("./Calculus_1/Chapter_*/*.ts", {
  eager: true,
}) as Record<string, { default: any } | any>;

export const ALL_CALCULUS_TOPICS: CalculusTopicItem[] = Object.keys(topicModules)
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
    const chapterNum = parseInt(path.match(/Chapter_(\d+)/)?.[1] || "1", 10);
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
      image: raw?.image || undefined,
      examples: Array.isArray(raw?.examples) ? raw.examples : [],
      category: "calculus" as const,
      categoryLabel: "Calculus I",
      subCategory: chapter.id,
      subCategoryLabel: chapter.label,
      chapterNumber: chapterNum,
    };
  })
  .filter((t) => Boolean(t && t.id && t.title));

export const CALCULUS_SUB_CATEGORIES = [
  { id: "all", label: "All Topics" },
  { id: "chapter-1", label: "Chapter 1: Real Numbers, Functions & Graphs" },
  { id: "chapter-2", label: "Chapter 2: Limits & Continuity" },
  { id: "chapter-3", label: "Chapter 3: The Derivative & Rules" },
  { id: "chapter-4", label: "Chapter 4: Extrema & Mean Value Theorem" },
  { id: "chapter-5", label: "Chapter 5: Curve Sketching & Applications" },
  { id: "chapter-6", label: "Chapter 6: Differentials & Antidifferentiation" },
  { id: "chapter-7", label: "Chapter 7: The Definite Integral" },
  { id: "chapter-8", label: "Chapter 8: Applications of Integration" },
] as const;

export default ALL_CALCULUS_TOPICS;
