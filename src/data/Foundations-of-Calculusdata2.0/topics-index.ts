export type Topic = {
  id: string;
  title: string;
  summary: string;
  details: string;
  examples: string[];
};

import foundationsOfCalculus from "./foundations-of-calculus";
import algebraicFunctions from "./algebraic-functions";
import boundedFunctions from "./bounded-functions";
import compositionOfFunctions from "./composition-of-functions";
import distanceAndMidpoint from "./distance-and-midpoint";
import domainAndRange from "./domain-and-range";
import equationsOfLines from "./equations-of-lines";
import evenAndOddFunctions from "./even-and-odd-functions";
import exponentialFunctions from "./exponential-functions";
import functionsAndNotation from "./functions-and-function-notation";
import graphsOfFunctions from "./graphs-of-functions";
import increasingDecreasing from "./increasing-and-decreasing-functions";
import inverseFunctions from "./inverse-functions";
import inverseTrigonometric from "./inverse-trigonometric-functions";
import logarithmicFunctions from "./logarithmic-functions";
import piecewiseFunctions from "./piecewise-functions";
import polynomialFunctions from "./polynomial-functions";
import rationalFunctions from "./rational-functions";
import realNumbersIntervals from "./real-numbers-and-intervals";
import transformationsOfFunctions from "./transformations-of-functions";
import trigonometricFunctions from "./trigonometric-functions";

export const TOPICS: Topic[] = [
  foundationsOfCalculus,
  realNumbersIntervals,
  distanceAndMidpoint,
  equationsOfLines,
  functionsAndNotation,
  domainAndRange,
  graphsOfFunctions,
  transformationsOfFunctions,
  piecewiseFunctions,
  evenAndOddFunctions,
  increasingDecreasing,
  boundedFunctions,
  compositionOfFunctions,
  inverseFunctions,
  algebraicFunctions,
  polynomialFunctions,
  rationalFunctions,
  exponentialFunctions,
  logarithmicFunctions,
  trigonometricFunctions,
  inverseTrigonometric,
].filter((t): t is Topic => Boolean(t && t.id && t.title));

export default TOPICS;