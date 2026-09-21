import React from "react";
import SystemOfEquations from "../calculators/SystemOfEquations";
import MatrixCalculator from "../calculators/MatrixCalculator";
import MatrixOperations from "../calculators/MatrixOperations";
import MatrixInverse from "../calculators/MatrixInverse";
import DeterminantCalculator from "../calculators/DeterminantCalculator";
import RankCalculator from "../calculators/RankCalculator";
import EigenCalculator from "../calculators/EigenCalculator";
import VectorCalculator from "../calculators/VectorCalculator";
import DotProduct from "../calculators/DotProduct";
import BasisCalculator from "../calculators/BasisCalculator";
import LinearIndependence from "../calculators/LinearIndependence";
import LUDecomposition from "../calculators/LUDecomposition";
import QRDecomposition from "../calculators/QRDecomposition";
import SVDCalculator from "../calculators/SVDCalculator";
import Diagonalization from "../calculators/Diagonalization";
import LeastSquares from "../calculators/LeastSquares";
import LinearTransformation from "../calculators/LinearTransformation";
import QuadraticForm from "../calculators/QuadraticForm";

export interface LinearAlgebraCalcDefinition {
  topicId: string;
  topicTitle: string;
  name: string;
  description: string;
  badge: string;
  component: React.ReactNode;
}

export const LINEAR_ALGEBRA_CALCULATORS: Record<string, LinearAlgebraCalcDefinition> = {
  "foundations": {
    topicId: "foundations",
    topicTitle: "Foundations & Prerequisites",
    name: "Algebra & Linear Algebra Basics Calculator",
    description: "Fundamental vector & matrix arithmetic, dimensions and algebraic operations",
    badge: "Basics",
    component: <MatrixOperations />
  },
  "systems": {
    topicId: "systems",
    topicTitle: "Systems of Linear Equations",
    name: "Gaussian Elimination / System Solver",
    description: "Gaussian elimination, augmented matrices, and exact system solver",
    badge: "Systems",
    component: <SystemOfEquations />
  },
  "vectors": {
    topicId: "vectors",
    topicTitle: "Vectors",
    name: "Vector Calculator",
    description: "Vector magnitudes, directions, unit vectors, and operations",
    badge: "Vectors",
    component: <VectorCalculator />
  },
  "advanced-matrix-topics": {
    topicId: "advanced-matrix-topics",
    topicTitle: "Advanced Matrix Topics",
    name: "Advanced Matrix Calculator",
    description: "Matrix operations, powers, traces, and advanced matrix properties",
    badge: "Matrix",
    component: <MatrixCalculator />
  },
  "inverses": {
    topicId: "inverses",
    topicTitle: "Matrix Inverses",
    name: "Matrix Inverse Calculator",
    description: "Step-by-step Gauss-Jordan elimination for matrix inverses A⁻¹",
    badge: "Inverse",
    component: <MatrixInverse />
  },
  "matrices": {
    topicId: "matrices",
    topicTitle: "Matrices",
    name: "Matrix Calculator",
    description: "Matrix arithmetic, scalar multiplication, and powers",
    badge: "Matrix",
    component: <MatrixCalculator />
  },
  "determinants": {
    topicId: "determinants",
    topicTitle: "Determinants",
    name: "Determinant Calculator",
    description: "Laplace expansion, cofactor calculation, and determinant analysis",
    badge: "Determinant",
    component: <DeterminantCalculator />
  },
  "change-of-basis": {
    topicId: "change-of-basis",
    topicTitle: "Change of Basis",
    name: "Change of Basis Calculator",
    description: "Transition matrices, coordinate representations, and basis transformations",
    badge: "Basis",
    component: <BasisCalculator />
  },
  "complex-vector-spaces": {
    topicId: "complex-vector-spaces",
    topicTitle: "Complex Vector Spaces",
    name: "Complex Vector Calculator",
    description: "Vector space operations over complex and real fields",
    badge: "Complex",
    component: <VectorCalculator />
  },
  "fundamental-subspaces": {
    topicId: "fundamental-subspaces",
    topicTitle: "Fundamental Subspaces",
    name: "Fundamental Subspaces Calculator",
    description: "Column space, row space, null space bases, and dimension theorem",
    badge: "Subspaces",
    component: <BasisCalculator />
  },
  "independence-span": {
    topicId: "independence-span",
    topicTitle: "Linear Independence & Span",
    name: "Linear Independence & Span Calculator",
    description: "Test vector sets for linear independence and span coverage",
    badge: "Independence",
    component: <LinearIndependence />
  },
  "linear-transformations": {
    topicId: "linear-transformations",
    topicTitle: "Linear Transformations",
    name: "Linear Transformation Calculator",
    description: "Standard matrix representations T(v) = Av, kernel, and image analysis",
    badge: "Transformations",
    component: <LinearTransformation />
  },
  "rank": {
    topicId: "rank",
    topicTitle: "Rank",
    name: "Matrix Rank Calculator",
    description: "Row echelon reduction, rank, and nullity computations",
    badge: "Rank",
    component: <RankCalculator />
  },
  "diagonalization": {
    topicId: "diagonalization",
    topicTitle: "Diagonalization",
    name: "Diagonalization Calculator",
    description: "Eigenbasis decomposition and PDP⁻¹ matrix diagonalization",
    badge: "Diagonalization",
    component: <Diagonalization />
  },
  "eigen": {
    topicId: "eigen",
    topicTitle: "Eigenvalues & Eigenvectors",
    name: "Eigenvalue & Eigenvector Calculator",
    description: "Characteristic polynomial det(A - λI) = 0 and eigenspaces",
    badge: "Eigen",
    component: <EigenCalculator />
  },
  "inner-product": {
    topicId: "inner-product",
    topicTitle: "Inner Product Spaces",
    name: "Inner Product Calculator",
    description: "Dot product, angles, norm, and inner product properties",
    badge: "Inner Product",
    component: <DotProduct />
  },
  "least-squares": {
    topicId: "least-squares",
    topicTitle: "Least Squares",
    name: "Least Squares Calculator",
    description: "Normal equations AᵀAx = Aᵀb and optimal least-squares approximations",
    badge: "Least Squares",
    component: <LeastSquares />
  },
  "orthogonality": {
    topicId: "orthogonality",
    topicTitle: "Orthogonality",
    name: "Orthogonality Calculator",
    description: "Orthogonal vectors, perpendicularity, and dot product verification",
    badge: "Orthogonality",
    component: <DotProduct />
  },
  "applications": {
    topicId: "applications",
    topicTitle: "Applications of Linear Algebra",
    name: "Linear Algebra Applications Calculator",
    description: "Applied systems of linear equations and modeling solutions",
    badge: "Applications",
    component: <SystemOfEquations />
  },
  "lu": {
    topicId: "lu",
    topicTitle: "LU Decomposition",
    name: "LU Decomposition Calculator",
    description: "Lower-Upper factorization PA = LU with partial pivoting",
    badge: "LU",
    component: <LUDecomposition />
  },
  "matrix-factorizations": {
    topicId: "matrix-factorizations",
    topicTitle: "Matrix Factorizations",
    name: "Matrix Factorization Calculator",
    description: "LU and matrix factorization solvers for high-performance decomposition",
    badge: "Factorization",
    component: <LUDecomposition />
  },
  "numerical-linear-algebra": {
    topicId: "numerical-linear-algebra",
    topicTitle: "Numerical Linear Algebra",
    name: "Numerical Linear Algebra Calculator",
    description: "Numerical stability, matrix operations, and floating-point computations",
    badge: "Numerical",
    component: <MatrixOperations />
  },
  "optimization": {
    topicId: "optimization",
    topicTitle: "Optimization",
    name: "Linear Algebra Optimization Calculator",
    description: "Constrained and unconstrained linear optimization via least squares",
    badge: "Optimization",
    component: <LeastSquares />
  },
  "qr": {
    topicId: "qr",
    topicTitle: "QR Factorization",
    name: "QR Factorization Calculator",
    description: "Gram-Schmidt orthogonal matrix Q and upper-triangular R",
    badge: "QR",
    component: <QRDecomposition />
  },
  "quadratic-forms": {
    topicId: "quadratic-forms",
    topicTitle: "Quadratic Forms",
    name: "Quadratic Form Calculator",
    description: "Symmetric matrix analysis, positive definiteness, and xᵀAx forms",
    badge: "Quadratic",
    component: <QuadraticForm />
  },
  "svd": {
    topicId: "svd",
    topicTitle: "Singular Value Decomposition (SVD)",
    name: "SVD Calculator",
    description: "Full Singular Value Decomposition A = U Σ Vᵀ",
    badge: "SVD",
    component: <SVDCalculator />
  }
};

export const LINEAR_ALGEBRA_TOPICS_LIST = Object.values(LINEAR_ALGEBRA_CALCULATORS);

export function getLinearAlgebraDefinitionForTopic(topic: { id?: string; title?: string } | null | undefined): LinearAlgebraCalcDefinition {
  if (!topic) return LINEAR_ALGEBRA_CALCULATORS["systems"];

  const id = (topic.id || "").toLowerCase();
  const title = (topic.title || "").toLowerCase();

  // 1. Direct ID match
  if (LINEAR_ALGEBRA_CALCULATORS[id]) {
    return LINEAR_ALGEBRA_CALCULATORS[id];
  }

  // 2. Exact or substring matching
  if (id.includes("foundations") || title.includes("foundations") || title.includes("prerequisites")) {
    return LINEAR_ALGEBRA_CALCULATORS["foundations"];
  }
  if (id.includes("system") || title.includes("system") || title.includes("gaussian")) {
    return LINEAR_ALGEBRA_CALCULATORS["systems"];
  }
  if (id.includes("complex") || title.includes("complex")) {
    return LINEAR_ALGEBRA_CALCULATORS["complex-vector-spaces"];
  }
  if (id.includes("subspace") || title.includes("subspace")) {
    return LINEAR_ALGEBRA_CALCULATORS["fundamental-subspaces"];
  }
  if (id.includes("independence") || title.includes("independence") || title.includes("span")) {
    return LINEAR_ALGEBRA_CALCULATORS["independence-span"];
  }
  if (id.includes("transform") || title.includes("transformation")) {
    return LINEAR_ALGEBRA_CALCULATORS["linear-transformations"];
  }
  if (id.includes("advanced-matrix") || title.includes("advanced matrix")) {
    return LINEAR_ALGEBRA_CALCULATORS["advanced-matrix-topics"];
  }
  if (id.includes("inverse") || title.includes("inverse")) {
    return LINEAR_ALGEBRA_CALCULATORS["inverses"];
  }
  if (id.includes("determinant") || title.includes("determinant")) {
    return LINEAR_ALGEBRA_CALCULATORS["determinants"];
  }
  if (id.includes("basis") || title.includes("basis")) {
    return LINEAR_ALGEBRA_CALCULATORS["change-of-basis"];
  }
  if (id.includes("diagonal") || title.includes("diagonal")) {
    return LINEAR_ALGEBRA_CALCULATORS["diagonalization"];
  }
  if (id.includes("eigen") || title.includes("eigen")) {
    return LINEAR_ALGEBRA_CALCULATORS["eigen"];
  }
  if (id.includes("inner") || title.includes("inner product")) {
    return LINEAR_ALGEBRA_CALCULATORS["inner-product"];
  }
  if (id.includes("least") || title.includes("least square")) {
    return LINEAR_ALGEBRA_CALCULATORS["least-squares"];
  }
  if (id.includes("orthogon") || title.includes("orthogon")) {
    return LINEAR_ALGEBRA_CALCULATORS["orthogonality"];
  }
  if (id.includes("applications") || title.includes("application")) {
    return LINEAR_ALGEBRA_CALCULATORS["applications"];
  }
  if (id === "lu" || title.includes("lu")) {
    return LINEAR_ALGEBRA_CALCULATORS["lu"];
  }
  if (id.includes("factorization") || title.includes("factorization")) {
    return LINEAR_ALGEBRA_CALCULATORS["matrix-factorizations"];
  }
  if (id.includes("numerical") || title.includes("numerical")) {
    return LINEAR_ALGEBRA_CALCULATORS["numerical-linear-algebra"];
  }
  if (id.includes("optim") || title.includes("optim")) {
    return LINEAR_ALGEBRA_CALCULATORS["optimization"];
  }
  if (id === "qr" || title.includes("qr")) {
    return LINEAR_ALGEBRA_CALCULATORS["qr"];
  }
  if (id.includes("quadratic") || title.includes("quadratic")) {
    return LINEAR_ALGEBRA_CALCULATORS["quadratic-forms"];
  }
  if (id.includes("svd") || title.includes("svd") || title.includes("singular value")) {
    return LINEAR_ALGEBRA_CALCULATORS["svd"];
  }
  if (id.includes("rank") || title.includes("rank")) {
    return LINEAR_ALGEBRA_CALCULATORS["rank"];
  }
  if (id.includes("vector") || title.includes("vector")) {
    return LINEAR_ALGEBRA_CALCULATORS["vectors"];
  }
  if (id.includes("matri") || title.includes("matri")) {
    return LINEAR_ALGEBRA_CALCULATORS["matrices"];
  }

  return LINEAR_ALGEBRA_CALCULATORS["systems"];
}
