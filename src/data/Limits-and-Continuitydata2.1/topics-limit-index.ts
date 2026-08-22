export type Topic = {
  id: string;
  title: string;
  summary: string;
  details: string;
  examples: string[];
};

import introductionToLimits from "./introduction-to-limits";
import oneSidedLimits from "./one-sided-limits";
import twoSidedLimits from "./two-sided-limits";
import evaluatingLimitsGraphically from "./evaluating-limits-graphically";
import evaluatingLimitsNumerically from "./evaluating-limits-numerically";
import evaluatingLimitsAlgebraically from "./evaluating-limits-algebraically";
import directSubstitution from "./direct-substitution";
import limitLaws from "./limit-laws";
import factoringAndCanceling from "./factoring-and-canceling";
import rationalizingExpressions from "./rationalizing-expressions";
import squeezeTheorem from "./squeeze-theorem";
import specialTrigonometricLimits from "./special-trigonometric-limits";
import infiniteLimits from "./infinite-limits";
import limitsAtInfinity from "./limits-at-infinity";
import verticalAsymptotes from "./vertical-asymptotes";
import horizontalAsymptotes from "./horizontal-asymptotes";
import continuity from "./continuity";
import continuityOnAnInterval from "./continuity-on-an-interval";
import typesOfDiscontinuities from "./types-of-discontinuities";
import intermediateValueTheorem from "./intermediate-value-theorem";

export const TOPICS: Topic[] = [
  introductionToLimits,
  oneSidedLimits,
  twoSidedLimits,
  evaluatingLimitsGraphically,
  evaluatingLimitsNumerically,
  evaluatingLimitsAlgebraically,
  directSubstitution,
  limitLaws,
  factoringAndCanceling,
  rationalizingExpressions,
  squeezeTheorem,
  specialTrigonometricLimits,
  infiniteLimits,
  limitsAtInfinity,
  verticalAsymptotes,
  horizontalAsymptotes,
  continuity,
  continuityOnAnInterval,
  typesOfDiscontinuities,
  intermediateValueTheorem,
].filter((t): t is Topic => Boolean(t && t.id && t.title));

export default TOPICS;