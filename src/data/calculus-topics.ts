import FOUNDATIONS_TOPICS from "./Foundations-of-Calculusdata2.0/topics-index";
import LIMITS_TOPICS from "./Limits-and-Continuitydata2.1/topics-limit-index";
import DERIVATIVES_TOPICS from "./Derivativesdata2.2/derivatives-index";
import DERIVATIVES_COMMON_TOPICS from "./Derivatives-of-Common-Functionsdata2.3/derivatives-index";
import IMPLICIT_TOPICS from "./Implicit-Differentiationdata2.4/implicit-index";
import APPLICATIONS_TOPICS from "./Applications-of-Derivatives2.5/applications-index";

export type CalculusSubCategoryId =
  | "all"
  | "foundations"
  | "limits"
  | "derivatives"
  | "derivatives-common"
  | "implicit"
  | "applications";

export interface CalculusTopicItem {
  id: string;
  title: string;
  summary: string;
  details: string;
  examples: string[];
  category: "calculus";
  categoryLabel: string;
  subCategory:
    | "foundations"
    | "limits"
    | "derivatives"
    | "derivatives-common"
    | "implicit"
    | "applications";
  subCategoryLabel: string;
}

export const CALCULUS_FOUNDATIONS: CalculusTopicItem[] = (Array.isArray(FOUNDATIONS_TOPICS) ? FOUNDATIONS_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "foundations" as const,
    subCategoryLabel: "Foundations of Calculus",
  }));

export const CALCULUS_LIMITS: CalculusTopicItem[] = (Array.isArray(LIMITS_TOPICS) ? LIMITS_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "limits" as const,
    subCategoryLabel: "Limit and Continuity",
  }));

export const CALCULUS_DERIVATIVES: CalculusTopicItem[] = (Array.isArray(DERIVATIVES_TOPICS) ? DERIVATIVES_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "derivatives" as const,
    subCategoryLabel: "Derivatives",
  }));

export const CALCULUS_DERIVATIVES_COMMON: CalculusTopicItem[] = (Array.isArray(DERIVATIVES_COMMON_TOPICS) ? DERIVATIVES_COMMON_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "derivatives-common" as const,
    subCategoryLabel: "Derivatives of common function",
  }));

export const CALCULUS_IMPLICIT: CalculusTopicItem[] = (Array.isArray(IMPLICIT_TOPICS) ? IMPLICIT_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "implicit" as const,
    subCategoryLabel: "Implicit differentiation",
  }));

export const CALCULUS_APPLICATIONS: CalculusTopicItem[] = (Array.isArray(APPLICATIONS_TOPICS) ? APPLICATIONS_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "applications" as const,
    subCategoryLabel: "Applications of derivatives",
  }));

export const ALL_CALCULUS_TOPICS: CalculusTopicItem[] = [
  ...CALCULUS_FOUNDATIONS,
  ...CALCULUS_LIMITS,
  ...CALCULUS_DERIVATIVES,
  ...CALCULUS_DERIVATIVES_COMMON,
  ...CALCULUS_IMPLICIT,
  ...CALCULUS_APPLICATIONS,
];

export const CALCULUS_SUB_CATEGORIES = [
  { id: "all", label: "All Topics", count: ALL_CALCULUS_TOPICS.length },
  { id: "foundations", label: "Foundations of Calculus", count: CALCULUS_FOUNDATIONS.length },
  { id: "limits", label: "Limit and Continuity", count: CALCULUS_LIMITS.length },
  { id: "derivatives", label: "Derivatives", count: CALCULUS_DERIVATIVES.length },
  { id: "derivatives-common", label: "Derivatives of common function", count: CALCULUS_DERIVATIVES_COMMON.length },
  { id: "implicit", label: "Implicit differentiation", count: CALCULUS_IMPLICIT.length },
  { id: "applications", label: "Applications of derivatives", count: CALCULUS_APPLICATIONS.length },
] as const;

export default ALL_CALCULUS_TOPICS;

