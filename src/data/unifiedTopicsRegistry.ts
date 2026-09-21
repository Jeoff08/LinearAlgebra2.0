import type { UnifiedTopicItem } from "../types/dashboard";
import { TOPICS as LINEAR_ALGEBRA_TOPICS_RAW } from "./topics/index";
import { ALL_CALCULUS_TOPICS } from "./calculus-topics";
import { ALL_CALCULUS_2_TOPICS } from "./calculus-2-topics";
import { extractFirstImage } from "../components/TopicContentRenderer";

export function buildAllCombinedTopics(): UnifiedTopicItem[] {
  const list: UnifiedTopicItem[] = [];

  // 1. Linear Algebra
  if (Array.isArray(LINEAR_ALGEBRA_TOPICS_RAW)) {
    LINEAR_ALGEBRA_TOPICS_RAW.forEach((t, idx) => {
      if (t && t.title) {
        list.push({
          id: t.id || `la-${idx}`,
          title: t.title,
          category: "linear-algebra",
          categoryLabel: "Linear Algebra",
          chapter: `Module ${idx + 1}`,
          chapterNumber: idx + 1,
          summary:
            t.summary ||
            "Explore linear transformations, spaces, and matrices.",
          details:
            t.details ||
            "Comprehensive guide and formal mathematical treatment.",
          examples: Array.isArray(t.examples) ? t.examples : [],
          image: (t as any).image || extractFirstImage(t.details) || undefined,
        });
      }
    });
  }

  // 2. Calculus 1
  if (Array.isArray(ALL_CALCULUS_TOPICS)) {
    ALL_CALCULUS_TOPICS.forEach((t) => {
      if (t && t.title) {
        list.push({
          id: t.id,
          title: t.title,
          category: "calculus-1",
          categoryLabel: "Calculus 1",
          chapter: t.subCategoryLabel || `Chapter ${t.chapterNumber}`,
          chapterNumber: t.chapterNumber,
          summary:
            t.summary || "Core differential and integral calculus concepts.",
          details: t.details || "Step-by-step principles and theorems.",
          examples: Array.isArray(t.examples) ? t.examples : [],
          image: (t as any).image || extractFirstImage(t.details) || undefined,
        });
      }
    });
  }

  // 3. Calculus 2
  if (Array.isArray(ALL_CALCULUS_2_TOPICS)) {
    ALL_CALCULUS_2_TOPICS.forEach((t) => {
      if (t && t.title) {
        list.push({
          id: t.id,
          title: t.title,
          category: "calculus-2",
          categoryLabel: "Calculus 2",
          chapter: t.subCategoryLabel || `Chapter ${t.chapterNumber}`,
          chapterNumber: t.chapterNumber,
          summary:
            t.summary ||
            "Advanced techniques of integration, series, and geometry.",
          details:
            t.details || "In-depth analytical methods and applications.",
          examples: Array.isArray(t.examples) ? t.examples : [],
          image: (t as any).image || extractFirstImage(t.details) || undefined,
        });
      }
    });
  }

  return list;
}

export const ALL_UNIFIED_TOPICS = buildAllCombinedTopics();
