// components/CalculatorApp.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import mathBg from '../assets/math.jpeg';
import { 
  Calculator, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Search, 
  ArrowLeft,
  ArrowRight,
  Sliders,
  Zap,
  Users,
  BookOpen,
  Bookmark,
  Layers
} from 'lucide-react';

// Import all calculator components
import SystemOfEquations from './SystemOfEquations';
import MatrixCalculator from './MatrixCalculator';
import MatrixOperations from './MatrixOperations';
import MatrixInverse from './MatrixInverse';
import DeterminantCalculator from './DeterminantCalculator';
import RankCalculator from './RankCalculator';
import EigenCalculator from './EigenCalculator';
import VectorCalculator from './VectorCalculator';
import DotProduct from './DotProduct';
import CrossProduct from './CrossProduct';
import VectorProjection from './VectorProjection';
import LinearIndependence from './LinearIndependence';
import LinearCombination from './LinearCombination';
import BasisCalculator from './BasisCalculator';
import SpanCalculator from './SpanCalculator';
import LUDecomposition from './LUDecomposition';
import QRDecomposition from './QRDecomposition';
import SVDCalculator from './SVDCalculator';
import TransposeCalculator from './TransposeCalculator';
import Diagonalization from './Diagonalization';
import LeastSquares from './LeastSquares';
import LinearTransformation from './LinearTransformation';
import QuadraticForm from './QuadraticForm';

export interface Tool {
  id: string;
  name: string;
  category: 'equations' | 'matrices' | 'vectors' | 'decompositions';
  component: React.ReactNode;
  description: string;
  badge?: string;
  categoryLabel: string;
}

export const tools: Tool[] = [
  // Linear Systems
  { id: 'equations', name: 'System of Linear Equations', category: 'equations', categoryLabel: 'Linear Systems', component: <SystemOfEquations />, description: 'Solve n equations with n variables using step-by-step Gaussian elimination.', badge: 'equations' },
  { id: 'leastsquares', name: 'Least Squares Solver', category: 'equations', categoryLabel: 'Linear Systems', component: <LeastSquares />, description: 'Find best-fit solutions for overdetermined systems using normal equations.', badge: 'equations' },
  { id: 'transformation', name: 'Linear Transformation', category: 'equations', categoryLabel: 'Linear Systems', component: <LinearTransformation />, description: 'Compute standard matrix representations T(v) = Av and mappings.', badge: 'equations' },
  { id: 'quadratic', name: 'Quadratic Form', category: 'equations', categoryLabel: 'Linear Systems', component: <QuadraticForm />, description: 'Analyze matrix xᵀAx definiteness and principal axis theorem.', badge: 'equations' },

  // Matrices & Inverses
  { id: 'matrix', name: 'Matrix Calculator', category: 'matrices', categoryLabel: 'Matrices & Inverses', component: <MatrixCalculator />, description: 'Compute matrix powers, scalar multiplication, trace, and transpose.', badge: 'matrices' },
  { id: 'matrixops', name: 'Matrix Operations', category: 'matrices', categoryLabel: 'Matrices & Inverses', component: <MatrixOperations />, description: 'Perform addition, subtraction, scalar ops, and multiplication with steps.', badge: 'matrices' },
  { id: 'inverse', name: 'Matrix Inverse (A⁻¹)', category: 'matrices', categoryLabel: 'Matrices & Inverses', component: <MatrixInverse />, description: 'Invert 2x2, 3x3, 4x4, and nxn matrices step-by-step.', badge: 'matrices' },
  { id: 'determinant', name: 'Determinant Calculator', category: 'matrices', categoryLabel: 'Matrices & Inverses', component: <DeterminantCalculator />, description: 'Compute matrix determinants using Laplace cofactor expansion.', badge: 'essential' },
  { id: 'rank', name: 'Matrix Rank & Nullity', category: 'matrices', categoryLabel: 'Matrices & Inverses', component: <RankCalculator />, description: 'Determine the rank, nullity, pivot columns, and verify the rank-nullity theorem.', badge: 'matrices' },
  { id: 'transpose', name: 'Transpose Calculator', category: 'matrices', categoryLabel: 'Matrices & Inverses', component: <TransposeCalculator />, description: 'Calculate matrix transpose Aᵀ, conjugate transpose, and verify matrix symmetry.', badge: 'matrices' },

  // Vectors & Spaces
  { id: 'vector', name: 'Vector Calculator', category: 'vectors', categoryLabel: 'Vectors & Spaces', component: <VectorCalculator />, description: 'Calculate vector lengths, magnitudes, unit vector normalizations, and angles in ℝⁿ.', badge: 'vectors' },
  { id: 'dot', name: 'Dot Product (u · v)', category: 'vectors', categoryLabel: 'Vectors & Spaces', component: <DotProduct />, description: 'Compute inner product u·v, angles between vectors, and orthogonality tests.', badge: 'vectors' },
  { id: 'cross', name: 'Cross Product (u × v)', category: 'vectors', categoryLabel: 'Vectors & Spaces', component: <CrossProduct />, description: 'Calculate 3D vector normal cross product u×v and parallelogram areas.', badge: 'vectors' },
  { id: 'projection', name: 'Vector Projection (proj)', category: 'vectors', categoryLabel: 'Vectors & Spaces', component: <VectorProjection />, description: 'Calculate orthogonal projections of vectors onto lines and subspaces.', badge: 'vectors' },
  { id: 'independence', name: 'Linear Independence', category: 'vectors', categoryLabel: 'Vectors & Spaces', component: <LinearIndependence />, description: 'Test sets of vectors to determine if they are linearly independent or dependent.', badge: 'vectors' },
  { id: 'combination', name: 'Linear Combination', category: 'vectors', categoryLabel: 'Vectors & Spaces', component: <LinearCombination />, description: 'Express a target vector b as a linear combination of given vectors.', badge: 'vectors' },
  { id: 'basis', name: 'Basis & Dimension', category: 'vectors', categoryLabel: 'Vectors & Spaces', component: <BasisCalculator />, description: 'Extract a linearly independent basis for a spanning set and find dimension.', badge: 'vectors' },
  { id: 'span', name: 'Span Calculator', category: 'vectors', categoryLabel: 'Vectors & Spaces', component: <SpanCalculator />, description: 'Determine whether a given vector belongs to span(v₁,...,vₖ) using rank tests.', badge: 'vectors' },

  // Eigen & Decompositions
  { id: 'eigen', name: 'Eigenvalues & Eigenvectors', category: 'decompositions', categoryLabel: 'Decompositions', component: <EigenCalculator />, description: 'Find eigenvalues and eigenvectors with step-by-step solutions.', badge: 'vectors' },
  { id: 'diagonalization', name: 'Matrix Diagonalization (PDP⁻¹)', category: 'decompositions', categoryLabel: 'Decompositions', component: <Diagonalization />, description: 'Diagonalize square matrices A = PDP⁻¹ and compute matrix powers.', badge: 'decompositions' },
  { id: 'lu', name: 'LU Decomposition (PA = LU)', category: 'decompositions', categoryLabel: 'Decompositions', component: <LUDecomposition />, description: 'Factorize matrices into Lower and Upper triangular matrices with pivoting.', badge: 'decompositions' },
  { id: 'qr', name: 'QR Decomposition (A = QR)', category: 'decompositions', categoryLabel: 'Decompositions', component: <QRDecomposition />, description: 'Decompose matrices into orthogonal Q and upper triangular R via Gram-Schmidt.', badge: 'decompositions' },
  { id: 'svd', name: 'SVD Calculator (UΣVᵀ)', category: 'decompositions', categoryLabel: 'Decompositions', component: <SVDCalculator />, description: 'Perform Singular Value Decomposition A = UΣVᵀ for m×n matrices.', badge: 'decompositions' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Tools', count: 23 },
  { id: 'equations', label: 'Linear Systems', count: 4 },
  { id: 'matrices', label: 'Matrices & Inverses', count: 6 },
  { id: 'vectors', label: 'Vectors & Spaces', count: 8 },
  { id: 'decompositions', label: 'Decompositions', count: 5 },
] as const;

interface CalculatorAppProps {
  initialToolId?: string | null;
}

export default function CalculatorApp({ initialToolId = null }: CalculatorAppProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedToolId, setSelectedToolId] = useState<string | null>(() => {
    if (initialToolId) return initialToolId;
    const params = new URLSearchParams(window.location.search);
    return params.get("tool") || params.get("id") || null;
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const toolParam = params.get("tool") || params.get("id");
    if (toolParam) {
      const exists = tools.some((t) => t.id === toolParam);
      if (exists) {
        setSelectedToolId(toolParam);
      }
    }
  }, [location.search]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentIndex = selectedToolId ? tools.findIndex(t => t.id === selectedToolId) : -1;
  const currentTool = currentIndex >= 0 ? tools[currentIndex] : null;

  // Filter tools for grid view
  const gridFilteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (tool.badge && tool.badge.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Filter tools for dropdown search
  const dropdownFilteredTools = tools.filter(tool => {
    return (
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Navigation handlers for active calculator
  const handlePrevTool = () => {
    if (currentIndex < 0) return;
    const newIdx = (currentIndex - 1 + tools.length) % tools.length;
    setSelectedToolId(tools[newIdx].id);
  };

  const handleNextTool = () => {
    if (currentIndex < 0) return;
    const newIdx = (currentIndex + 1) % tools.length;
    setSelectedToolId(tools[newIdx].id);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isDropdownOpen) {
          setIsDropdownOpen(false);
        } else if (selectedToolId !== null) {
          setSelectedToolId(null);
        }
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isDropdownOpen, selectedToolId]);

  const handleSelectTool = (toolId: string) => {
    navigate(`/calculators/${toolId}`);
  };

  const handleBackToGrid = () => {
    setSelectedToolId(null);
    setIsDropdownOpen(false);
    setSearchTerm('');
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('calculators-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] text-[#111827]">
      {/* ========================================================================= */}
      {/* HERO SECTION: SOLVE SMARTER WITH LINEAR ALGEBRA                            */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden min-h-[480px] lg:min-h-[520px] flex items-center bg-[#0C1017] pt-16 sm:pt-20">
        {/* Full Background Image: math.jpeg */}
        <div className="absolute inset-0 z-0">
          <img
            src={mathBg}
            alt="Chalkboard background"
            className="w-full h-full object-cover object-center lg:object-[center_right] opacity-75"
          />
          {/* Scrim overlay: heavy on left, revealing child/chalkboard on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-50% to-black/35 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-2xl space-y-5">
            {/* Top Back Breadcrumb & Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => navigate("/calculator-hub")}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white/90 hover:text-white px-3 py-1 text-xs font-semibold backdrop-blur-md transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Math Tools</span>
              </button>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#7B1824]/60 bg-[#7B1824]/30 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[#E05260] tracking-wider shadow-xs"
              >
                <span>23 Powerful Calculators</span>
              </motion.div>
            </div>

            {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.65rem] font-black tracking-tight text-white leading-[1.08]"
              >
                <span className="text-white">Solve Smarter with</span>
                <br />
                <span className="text-[#E05260]">Linear Algebra</span>
              </motion.h1>

            {/* Paragraph Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-xl"
            >
              From matrices to eigenvectors, explore intelligent calculators designed to solve complex problems step-by-step.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                onClick={scrollToCatalog}
                className="inline-flex items-center gap-2 rounded-xl bg-[#7B1824] hover:bg-[#60101B] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#7B1824]/30 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Explore Calculators</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/calculator-hub')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 text-white/80" />
                <span>All Math Tools</span>
              </button>

              <button
                onClick={() => navigate('/?tab=topics')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 backdrop-blur-md px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-200 cursor-pointer active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-white/80" />
                <span>View Topics</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DARK FILTER & SEARCH BAR                                                  */}
      {/* ========================================================================= */}
      <div id="calculators-catalog" className="sticky top-16 sm:top-[4.5rem] z-20 bg-[#0B0F15] border-y border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id && !selectedToolId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      if (selectedToolId) setSelectedToolId(null);
                    }}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#7B1824] text-white shadow-md shadow-[#7B1824]/30'
                        : 'bg-[#18202C] text-gray-300 hover:text-white hover:bg-[#222C3D] border border-white/10'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-black/40 text-gray-300'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search calculators (e.g., Eigen, Inverse)"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (selectedToolId) setSelectedToolId(null);
                }}
                className="w-full rounded-full border border-white/15 bg-[#18202C] text-white placeholder-gray-400 pl-10 pr-9 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#7B1824] focus:ring-2 focus:ring-[#7B1824]/30 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN CONTENT AREA: GRID OR ACTIVE WORKSPACE                               */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          {selectedToolId === null || !currentTool ? (
            /* ========================================================= */
            /* VIEW 1: 3-COLUMN CALCULATOR CARD GRID                     */
            /* ========================================================= */
            <motion.div
              key="catalog-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {gridFilteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {gridFilteredTools.map((tool, index) => (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.2) }}
                      whileHover={{ y: -3 }}
                      onClick={() => handleSelectTool(tool.id)}
                      className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-xs hover:shadow-xl hover:border-[#7B1824]/40 transition-all duration-300 cursor-pointer"
                    >
                      <div>
                        {/* Top Row: Title + Category Pill */}
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-base sm:text-[1.08rem] font-black text-gray-900 group-hover:text-[#7B1824] transition-colors leading-snug">
                            {tool.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 rounded-md border border-[#F0D5D8] bg-[#FDF2F4] px-2.5 py-0.5 text-xs font-bold text-[#7B1824] shrink-0 lowercase">
                            <Bookmark className="w-3 h-3 text-[#7B1824]" />
                            <span>{tool.badge || tool.category}</span>
                          </span>
                        </div>

                        {/* Middle: Description */}
                        <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2 min-h-[42px] font-normal">
                          {tool.description}
                        </p>
                      </div>

                      {/* Bottom Row: Category Subtitle + Open Calculator Button */}
                      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                        <span className="text-xs font-medium text-gray-400">
                          {tool.categoryLabel}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7B1824] group-hover:text-[#60101B] transition-colors">
                          <span>Open Calculator</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center rounded-3xl border border-dashed border-gray-200 bg-white p-8">
                  <Calculator className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                  <h3 className="text-base font-bold text-gray-900">No calculators found</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    No results match &ldquo;{searchTerm}&rdquo;. Try clearing your search query.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#7B1824] px-4 py-2 text-xs font-bold text-white hover:bg-[#60101B] transition-colors cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            /* ========================================================= */
            /* VIEW 2: ACTIVE CALCULATOR WORKSPACE                       */
            /* ========================================================= */
            <motion.div
              key="active-calculator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Workspace Top Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
                {/* Back Button */}
                <button
                  onClick={handleBackToGrid}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 px-4 py-2 text-xs sm:text-sm font-bold text-gray-700 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>All Calculators</span>
                </button>

                {/* Dropdown Switcher */}
                <div className="relative z-30 flex-1 max-w-md" ref={dropdownRef}>
                  <button
                    ref={buttonRef}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white hover:border-[#7B1824]/50 px-4 py-2 text-left transition-all cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <div className="w-6 h-6 rounded-lg bg-[#FDF2F4] text-[#7B1824] flex items-center justify-center shrink-0">
                        <Calculator className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                        {currentTool.name}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-gray-200 bg-white shadow-2xl p-2 z-50 max-h-80 overflow-y-auto">
                      <div className="space-y-1">
                        {tools.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => {
                              setSelectedToolId(t.id);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl text-left transition-colors cursor-pointer ${
                              t.id === selectedToolId
                                ? 'bg-[#7B1824] text-white'
                                : 'text-gray-700 hover:bg-[#FDF2F4] hover:text-[#7B1824]'
                            }`}
                          >
                            <span>{t.name}</span>
                            <span className="text-[10px] opacity-75 font-mono">{t.categoryLabel}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Prev / Next Nav */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevTool}
                    className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-[#7B1824] transition-colors cursor-pointer"
                    title="Previous Calculator"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextTool}
                    className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-[#7B1824] transition-colors cursor-pointer"
                    title="Next Calculator"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ── 1. CALCULATOR HEADER CARD (Matching Image 2) ── */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#7B1824] text-white flex items-center justify-center shadow-md shadow-[#7B1824]/20 shrink-0">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FDF2F4] text-[#7B1824] border border-[#F0D5D8]">
                          LINEAR ALGEBRA
                        </span>
                        <span className="text-xs text-gray-400 font-mono">
                          Linear Algebra • {currentTool.categoryLabel}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mt-0.5">
                        {currentTool.name}
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
                  {currentTool.description}
                </p>
              </div>

              {/* ── 2. Calculator Workspace Container ── */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 sm:p-8">
                {currentTool.component}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <Layers className="w-4 h-4 text-[#7B1824]" />
            <span>All 23 tools powered by modern linear algebra algorithms</span>
          </p>
        </div>
      </footer>
    </div>
  );
}