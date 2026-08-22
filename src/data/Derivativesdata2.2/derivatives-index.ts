export type Topic = {
  id: string;
  title: string;
  summary: string;
  details: string;
  examples: string[];
};

import introductionToDerivatives from "./introduction-to-derivatives";
import derivativeAsRateOfChange from "./derivative-as-a-rate-of-change";
import geometricInterpretation from "./geometric-interpretation-of-derivatives";
import tangentLines from "./tangent-lines";
import normalLines from "./normal-lines";
import differenceQuotient from "./difference-quotient";
import derivativeAsLimit from "./derivative-as-a-limit";
import derivativeNotation from "./derivative-notation";
import differentiability from "./differentiability";
import differentiabilityVsContinuity from "./differentiability-vs-continuity";
import basicDifferentiationRules from "./basic-differentiation-rules";
import constantRule from "./constant-rule";
import constantMultipleRule from "./constant-multiple-rule";
import powerRule from "./power-rule";
import sumAndDifferenceRules from "./sum-and-difference-rules";
import productRule from "./product-rule";
import quotientRule from "./quotient-rule";
import chainRule from "./chain-rule";

export const TOPICS: Topic[] = [
  introductionToDerivatives,
  derivativeAsRateOfChange,
  geometricInterpretation,
  tangentLines,
  normalLines,
  differenceQuotient,
  derivativeAsLimit,
  derivativeNotation,
  differentiability,
  differentiabilityVsContinuity,
  basicDifferentiationRules,
  constantRule,
  constantMultipleRule,
  powerRule,
  sumAndDifferenceRules,
  productRule,
  quotientRule,
  chainRule,
].filter((t): t is Topic => Boolean(t && t.id && t.title));

export default TOPICS;