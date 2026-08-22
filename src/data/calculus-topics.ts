import FOUNDATIONS_TOPICS from "./Foundations-of-Calculusdata2.0/topics-index";
import LIMITS_TOPICS from "./Limits-and-Continuitydata2.1/topics-limit-index";
import DERIVATIVES_TOPICS from "./Derivativesdata2.2/derivatives-index";
import DERIVATIVES_COMMON_TOPICS from "./Derivatives-of-Common-Functionsdata2.3/derivatives-index";
import IMPLICIT_TOPICS from "./Implicit-Differentiationdata2.4/implicit-index";
import APPLICATIONS_TOPICS from "./Applications-of-Derivatives2.5/applications-index";
import OPTIMIZATION_TOPICS from "./Optimizationdata2.6/optimization-index";
import LHOPITALS_RULE_TOPICS from "./L'Hôpital's Ruledata2.7/L'Hôpital's-Rule-index";
import INTRO_INTEGRATION_TOPICS from "./Introduction-to-Integration2.8/Introduction-Integration-index";
import MVT_EXTREMA_TOPICS from "./Mean-Value-Theorem-and-Extrema2.9/extrema-mvt-index";
import DEFINITE_INTEGRALS_TOPICS from "./Definite-Integrals3.0/Definite-Integrals-index";
import FUNDAMENTAL_THEOREM_TOPICS from "./Fundamental-Theorem-of-Calculus3.1/Fundamental-index";

export type CalculusSubCategoryId =
  | "all"
  | "foundations"
  | "limits"
  | "derivatives"
  | "derivatives-common"
  | "implicit"
  | "applications"
  | "optimization"
  | "lhopital"
  | "intro-integration"
  | "mvt-extrema"
  | "definite-integrals"
  | "fundamental-theorem";

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
    | "applications"
    | "optimization"
    | "lhopital"
    | "intro-integration"
    | "mvt-extrema"
    | "definite-integrals"
    | "fundamental-theorem";
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

export const CALCULUS_OPTIMIZATION: CalculusTopicItem[] = (Array.isArray(OPTIMIZATION_TOPICS) ? OPTIMIZATION_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "optimization" as const,
    subCategoryLabel: "Optimization",
  }));

export const CALCULUS_LHOPITAL: CalculusTopicItem[] = (Array.isArray(LHOPITALS_RULE_TOPICS) ? LHOPITALS_RULE_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "lhopital" as const,
    subCategoryLabel: "L'Hôpital's Ruledata",
  }));

export const CALCULUS_INTRO_INTEGRATION: CalculusTopicItem[] = (Array.isArray(INTRO_INTEGRATION_TOPICS) ? INTRO_INTEGRATION_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "intro-integration" as const,
    subCategoryLabel: "Introduction to integration",
  }));

export const CALCULUS_MVT_EXTREMA: CalculusTopicItem[] = (Array.isArray(MVT_EXTREMA_TOPICS) ? MVT_EXTREMA_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "mvt-extrema" as const,
    subCategoryLabel: "Mean value theorem and extrema",
  }));

export const CALCULUS_DEFINITE_INTEGRALS: CalculusTopicItem[] = (Array.isArray(DEFINITE_INTEGRALS_TOPICS) ? DEFINITE_INTEGRALS_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "definite-integrals" as const,
    subCategoryLabel: "Definite integrals",
  }));

export const CALCULUS_FUNDAMENTAL_THEOREM: CalculusTopicItem[] = (Array.isArray(FUNDAMENTAL_THEOREM_TOPICS) ? FUNDAMENTAL_THEOREM_TOPICS : [])
  .filter((t) => Boolean(t && t.id && t.title))
  .map((t) => ({
    ...t,
    category: "calculus" as const,
    categoryLabel: "Calculus 1",
    subCategory: "fundamental-theorem" as const,
    subCategoryLabel: "Fundamental Theorem of Calculus",
  }));

export const ALL_CALCULUS_TOPICS: CalculusTopicItem[] = [
  ...CALCULUS_FOUNDATIONS,
  ...CALCULUS_LIMITS,
  ...CALCULUS_DERIVATIVES,
  ...CALCULUS_DERIVATIVES_COMMON,
  ...CALCULUS_IMPLICIT,
  ...CALCULUS_APPLICATIONS,
  ...CALCULUS_OPTIMIZATION,
  ...CALCULUS_LHOPITAL,
  ...CALCULUS_INTRO_INTEGRATION,
  ...CALCULUS_MVT_EXTREMA,
  ...CALCULUS_DEFINITE_INTEGRALS,
  ...CALCULUS_FUNDAMENTAL_THEOREM,
];

export const CALCULUS_SUB_CATEGORIES = [
  { id: "all", label: "All Topics", count: ALL_CALCULUS_TOPICS.length },
  { id: "foundations", label: "Foundations of Calculus", count: CALCULUS_FOUNDATIONS.length },
  { id: "limits", label: "Limit and Continuity", count: CALCULUS_LIMITS.length },
  { id: "derivatives", label: "Derivatives", count: CALCULUS_DERIVATIVES.length },
  { id: "derivatives-common", label: "Derivatives of common function", count: CALCULUS_DERIVATIVES_COMMON.length },
  { id: "implicit", label: "Implicit differentiation", count: CALCULUS_IMPLICIT.length },
  { id: "applications", label: "Applications of derivatives", count: CALCULUS_APPLICATIONS.length },
  { id: "optimization", label: "Optimization", count: CALCULUS_OPTIMIZATION.length },
  { id: "lhopital", label: "L'Hôpital's Ruledata", count: CALCULUS_LHOPITAL.length },
  { id: "intro-integration", label: "Introduction to integration", count: CALCULUS_INTRO_INTEGRATION.length },
  { id: "mvt-extrema", label: "Mean value theorem and extrema", count: CALCULUS_MVT_EXTREMA.length },
  { id: "definite-integrals", label: "Definite integrals", count: CALCULUS_DEFINITE_INTEGRALS.length },
  { id: "fundamental-theorem", label: "Fundamental Theorem of Calculus", count: CALCULUS_FUNDAMENTAL_THEOREM.length },
] as const;

export default ALL_CALCULUS_TOPICS;

