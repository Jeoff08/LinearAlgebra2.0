import React from "react";
import type { CalculatorCardMeta } from "../types/dashboard";

// Linear Algebra Real Interactive Calculators (All 23 Solvers)
import SystemOfEquations from "../calculators/SystemOfEquations";
import MatrixCalculator from "../calculators/MatrixCalculator";
import MatrixOperations from "../calculators/MatrixOperations";
import MatrixInverse from "../calculators/MatrixInverse";
import DeterminantCalculator from "../calculators/DeterminantCalculator";
import RankCalculator from "../calculators/RankCalculator";
import EigenCalculator from "../calculators/EigenCalculator";
import VectorCalculator from "../calculators/VectorCalculator";
import DotProduct from "../calculators/DotProduct";
import CrossProduct from "../calculators/CrossProduct";
import VectorProjection from "../calculators/VectorProjection";
import LinearIndependence from "../calculators/LinearIndependence";
import LinearCombination from "../calculators/LinearCombination";
import BasisCalculator from "../calculators/BasisCalculator";
import SpanCalculator from "../calculators/SpanCalculator";
import LUDecomposition from "../calculators/LUDecomposition";
import QRDecomposition from "../calculators/QRDecomposition";
import SVDCalculator from "../calculators/SVDCalculator";
import TransposeCalculator from "../calculators/TransposeCalculator";
import Diagonalization from "../calculators/Diagonalization";
import LeastSquares from "../calculators/LeastSquares";
import LinearTransformation from "../calculators/LinearTransformation";
import QuadraticForm from "../calculators/QuadraticForm";

// Calculus Unified Interactive Calculator and Definitions
import CalculusCalculator from "../Calculus_One_Calculator/Calculator";
import {
  CALCULATOR_DEFINITIONS,
  getCalculusDefinitionForTopic,
  type CalculatorDefinition,
} from "../Calculus_One_Calculator/CalculatorData";

export {
  CalculusCalculator,
  CALCULATOR_DEFINITIONS,
  getCalculusDefinitionForTopic,
  type CalculatorDefinition,
};

// Registry of 23 Linear Algebra calculators
export const LINEAR_ALGEBRA_CALCULATORS: CalculatorCardMeta[] = [
  {
    id: "la-matrix-ops",
    title: "Matrix Operations",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A + B, \\; A - B, \\; A \\times B, \\; kA",
    image: "src/assets_2.0/2.png",
    description:
      "Perform addition, subtraction, matrix multiplication, and scalar scaling on matrices.",
    badge: "Operations",
    type: "linear",
  },
  {
    id: "la-determinant",
    title: "Determinant Calculator",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\det(A) = |A|",
    image: "src/assets_2.0/3.png",
    description:
      "Computes determinants via Gaussian elimination and cofactor expansion with full steps.",
    badge: "Core",
    type: "linear",
  },
  {
    id: "la-matrix-inv",
    title: "Matrix Inverse",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)",
    image: "src/assets_2.0/4.png",
    description:
      "Calculates the inverse of square invertible matrices using Gauss-Jordan elimination.",
    badge: "Essential",
    type: "linear",
  },
  {
    id: "la-eigenvalues",
    title: "Eigenvalues & Eigenvectors",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula:
      "A\\mathbf{v} = \\lambda\\mathbf{v}, \\; \\det(A - \\lambda I) = 0",
    image: "src/assets_2.0/5.png",
    description:
      "Finds characteristic polynomials, roots, eigenvalues, and eigenvector basis vectors.",
    badge: "Advanced",
    type: "linear",
  },
  {
    id: "la-system-equations",
    title: "System of Linear Equations",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A\\mathbf{x} = \\mathbf{b}",
    image: "src/assets_2.0/1.png",
    description:
      "Solves systems of linear equations using Gaussian elimination, Gauss-Jordan, and Cramer's rule.",
    badge: "Solvers",
    type: "linear",
  },
  {
    id: "la-dot-product",
    title: "Dot Product & Angles",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i",
    image: "src/assets_2.0/6.png",
    description:
      "Calculates vector dot products, vector magnitudes, cosine similarity, angle, and orthogonality.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-cross-product",
    title: "Cross Product",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathbf{u} \\times \\mathbf{v}",
    image: "src/assets_2.0/7.png",
    description:
      "Computes 3D cross products, perpendicular normal vectors, and area of parallelograms in R³.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-vector-proj",
    title: "Vector Projection",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula:
      "\\text{proj}_{\\mathbf{u}}(\\mathbf{v}) = \\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\|\\mathbf{u}\\|^2}\\mathbf{u}",
    image: "src/assets_2.0/8.png",
    description:
      "Finds orthogonal projection of vectors onto lines/subspaces and orthogonal complements.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-vector-calc",
    title: "Vector Arithmetic & Norms",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\|\\mathbf{v}\\|_2 = \\sqrt{v_1^2 + \\dots + v_n^2}",
    image: "src/assets_2.0/9.png",
    description:
      "Evaluates vector addition, scalar multiplication, Euclidean norm, Manhattan norm, and unit vectors.",
    badge: "Vectors",
    type: "linear",
  },
  {
    id: "la-rank-nullity",
    title: "Rank & Nullity Calculator",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\text{rank}(A) + \\text{nullity}(A) = n",
    image: "src/assets_2.0/10.png",
    description:
      "Computes row echelon form, pivot columns, row space basis, null space basis, and dimension.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-linear-indep",
    title: "Linear Independence",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "c_1\\mathbf{v}_1 + \\dots + c_k\\mathbf{v}_k = \\mathbf{0}",
    image: "src/assets_2.0/11.png",
    description:
      "Tests sets of vectors for linear independence and determines if non-trivial combinations exist.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-linear-comb",
    title: "Linear Combination",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\mathbf{w} = c_1\\mathbf{v}_1 + \\dots + c_k\\mathbf{v}_k",
    image: "src/assets_2.0/12.png",
    description:
      "Determines if a target vector can be expressed as a linear combination of a set of vectors.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-basis-calculator",
    title: "Basis & Dimension",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\text{span}(\\mathcal{B}) = V, \\quad |\\mathcal{B}| = \\dim(V)",
    image: "src/assets_2.0/13.png",
    description:
      "Finds minimal spanning sets, basis for column spaces, and basis for row spaces.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-span-calc",
    title: "Span Calculator",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "\\text{span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}",
    image: "src/assets_2.0/14.png",
    description:
      "Calculates the subspace spanned by vectors, detects redundant vectors, and finds spanning dimension.",
    badge: "Spaces",
    type: "linear",
  },
  {
    id: "la-lu-decomp",
    title: "LU Decomposition",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A = LU, \\quad PA = LU",
    image: "src/assets_2.0/15.png",
    description:
      "Decomposes a matrix into lower and upper triangular factors with partial pivoting permutations.",
    badge: "Decomposition",
    type: "linear",
  },
  {
    id: "la-qr-decomp",
    title: "QR Decomposition",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A = QR",
    image: "src/assets_2.0/16.png",
    description:
      "Gram-Schmidt orthonormalization producing orthogonal matrix Q and upper triangular matrix R.",
    badge: "Decomposition",
    type: "linear",
  },
  {
    id: "la-svd",
    title: "Singular Value Decomposition (SVD)",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A = U \\Sigma V^T",
    image: "src/assets_2.0/17.png",
    description:
      "Computes singular values, left and right singular vectors for dimensionality reduction and pseudo-inverses.",
    badge: "Decomposition",
    type: "linear",
  },
  {
    id: "la-diagonalization",
    title: "Matrix Diagonalization",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A = PDP^{-1}",
    image: "src/assets_2.0/18.png",
    description:
      "Finds modal matrix P and diagonal matrix D containing eigenvalues for matrix powers Aᵏ.",
    badge: "Advanced",
    type: "linear",
  },
  {
    id: "la-transpose",
    title: "Matrix Transpose & Symmetry",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "(A^T)_{ij} = A_{ji}, \\quad A^T = A",
    image: "src/assets_2.0/19.png",
    description:
      "Computes matrix transpose, trace, tests for symmetry, skew-symmetry, and orthogonality.",
    badge: "Operations",
    type: "linear",
  },
  {
    id: "la-least-squares",
    title: "Least Squares Solution",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "A^T A \\mathbf{\\hat{x}} = A^T \\mathbf{b}",
    image: "src/assets_2.0/20.png",
    description:
      "Finds optimal least-squares approximate solution for inconsistent overdetermined linear systems.",
    badge: "Advanced",
    type: "linear",
  },
  {
    id: "la-linear-trans",
    title: "Linear Transformation",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "T(\\mathbf{x}) = A\\mathbf{x}",
    image: "src/assets_2.0/21.png",
    description:
      "Applies 2D and 3D linear mappings, rotations, reflections, dilations, and shears.",
    badge: "Transformations",
    type: "linear",
  },
  {
    id: "la-quadratic-form",
    title: "Quadratic Form & Definiteness",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x}",
    image: "src/assets_2.0/22.png",
    description:
      "Classifies symmetric quadratic forms as positive definite, negative definite, or indefinite via eigenvalues.",
    badge: "Advanced",
    type: "linear",
  },
  {
    id: "la-matrix-calc",
    title: "Comprehensive Matrix Workbench",
    category: "linear-algebra",
    categoryLabel: "Linear Algebra",
    formula: "f(A, B, c)",
    image: "src/assets_2.0/23.png",
    description:
      "All-in-one matrix solver suite for simultaneous matrix calculations and multi-step workflows.",
    badge: "Suite",
    type: "linear",
  },
];

export function buildAllCombinedCalculators(): CalculatorCardMeta[] {
  const list: CalculatorCardMeta[] = [...LINEAR_ALGEBRA_CALCULATORS];

  if (Array.isArray(CALCULATOR_DEFINITIONS)) {
    CALCULATOR_DEFINITIONS.forEach((def) => {
      const isCalc1 = def.category === "Calculus 1";
      list.push({
        id: `calc-${def.id}`,
        title: def.name,
        category: isCalc1 ? "calculus-1" : "calculus-2",
        categoryLabel: def.category,
        formula: def.example,
        image: def.image,
        description: def.description,
        badge: def.badge || (isCalc1 ? "Calculus 1" : "Calculus 2"),
        type: "calculus",
        calculusDefId: def.id,
      });
    });
  }

  return list;
}

export function renderLinearAlgebraCalculator(calcId: string): React.ReactNode {
  switch (calcId) {
    case "la-matrix-ops":
      return <MatrixOperations />;
    case "la-determinant":
      return <DeterminantCalculator />;
    case "la-matrix-inv":
      return <MatrixInverse />;
    case "la-eigenvalues":
      return <EigenCalculator />;
    case "la-system-equations":
      return <SystemOfEquations />;
    case "la-dot-product":
      return <DotProduct />;
    case "la-cross-product":
      return <CrossProduct />;
    case "la-vector-proj":
      return <VectorProjection />;
    case "la-vector-calc":
      return <VectorCalculator />;
    case "la-rank-nullity":
      return <RankCalculator />;
    case "la-linear-indep":
      return <LinearIndependence />;
    case "la-linear-comb":
      return <LinearCombination />;
    case "la-basis-calculator":
      return <BasisCalculator />;
    case "la-span-calc":
      return <SpanCalculator />;
    case "la-lu-decomp":
      return <LUDecomposition />;
    case "la-qr-decomp":
      return <QRDecomposition />;
    case "la-svd":
      return <SVDCalculator />;
    case "la-diagonalization":
      return <Diagonalization />;
    case "la-transpose":
      return <TransposeCalculator />;
    case "la-least-squares":
      return <LeastSquares />;
    case "la-linear-trans":
      return <LinearTransformation />;
    case "la-quadratic-form":
      return <QuadraticForm />;
    default:
      return <MatrixCalculator />;
  }
}

export function getCalculusDefinition(
  defId?: string
): CalculatorDefinition | undefined {
  if (!defId) return undefined;
  return CALCULATOR_DEFINITIONS.find((d) => d.id === defId);
}
