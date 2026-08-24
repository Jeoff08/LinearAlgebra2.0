// components/CalculatorApp.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft,
  ChevronRight, 
  X, 
  Search, 
  Sparkles, 
  CheckCircle2,
  ArrowLeft,
  Infinity,
  TrendingUp,
  Sigma,
  Maximize2,
  Activity,
  BarChart3,
  Waves,
  Crown,
  FunctionSquare,
  LineChart,
  Minimize2
} from 'lucide-react';

// Import all calculator components
import LimitCalculator from '../CalculusOneCalculator/LimitCalculator';
import OneSidedLimitCalculator from '../CalculusOneCalculator/OneSidedLimitCalculator';
import ContinuityCalculator from '../CalculusOneCalculator/ContinuityCalculator';
import DerivativeCalculator from '../CalculusOneCalculator/DerivativeCalculator';
import HigherDerivativeCalculator from '../CalculusOneCalculator/HigherDerivativeCalculator';
import ProductRuleCalculator from '../CalculusOneCalculator/ProductRuleCalculator';
import QuotientRuleCalculator from '../CalculusOneCalculator/QuotientRuleCalculator';
import ChainRuleCalculator from '../CalculusOneCalculator/ChainRuleCalculator';
import ImplicitDifferentiationCalculator from '../CalculusOneCalculator/ImplicitDifferentiationCalculator';
import LogarithmicDifferentiationCalculator from '../CalculusOneCalculator/LogarithmicDifferentiationCalculator';
import CriticalPointCalculator from '../CalculusOneCalculator/CriticalPointCalculator';
import IncreasingDecreasingCalculator from '../CalculusOneCalculator/IncreasingDecreasingCalculator';
import LocalExtremaCalculator from '../CalculusOneCalculator/LocalExtremaCalculator';
import ConcavityCalculator from '../CalculusOneCalculator/ConcavityCalculator';
import InflectionPointCalculator from '../CalculusOneCalculator/InflectionPointCalculator';
import OptimizationCalculator from '../CalculusOneCalculator/OptimizationCalculator';
import RelatedRatesCalculator from '../CalculusOneCalculator/RelatedRatesCalculator';
import TangentLineCalculator from '../CalculusOneCalculator/TangentLineCalculator';
import CurveSketchingCalculator from '../CalculusOneCalculator/CurveSketchingCalculator';
import AntiderivativeCalculator from '../CalculusOneCalculator/AntiderivativeCalculator';
import DefiniteIntegralCalculator from '../CalculusOneCalculator/DefiniteIntegralCalculator';
import FTCCalculator from '../CalculusOneCalculator/FTCCalculator';
import USubstitutionCalculator from '../CalculusOneCalculator/USubstitutionCalculator';

export interface Tool {
  id: string;
  name: string;
  category: 'limits' | 'derivatives' | 'applications' | 'integrals';
  component: React.ReactNode;
  description: string;
  badge?: string;
  categoryLabel: string;
  icon: React.ReactNode;
}

export const tools: Tool[] = [
  // Limits
  { 
    id: 'limit', 
    name: 'Limit Calculator', 
    category: 'limits', 
    categoryLabel: 'Limits', 
    component: <LimitCalculator />, 
    description: 'Calculates limits of functions as x approaches a value', 
    icon: <Infinity className="w-4 h-4" /> 
  },
  { 
    id: 'one-sided-limit', 
    name: 'One-Sided Limit Calculator', 
    category: 'limits', 
    categoryLabel: 'Limits', 
    component: <OneSidedLimitCalculator />, 
    description: 'Calculates left/right-hand limits', 
    icon: <ArrowLeft className="w-4 h-4" /> 
  },
  { 
    id: 'continuity', 
    name: 'Continuity Calculator', 
    category: 'limits', 
    categoryLabel: 'Limits', 
    component: <ContinuityCalculator />, 
    description: 'Checks whether a function is continuous at a point', 
    icon: <Activity className="w-4 h-4" /> 
  },

  // Derivatives
  { 
    id: 'derivative', 
    name: 'Derivative Calculator', 
    category: 'derivatives', 
    categoryLabel: 'Derivatives', 
    component: <DerivativeCalculator />, 
    description: 'Finds first derivatives numerically', 
    badge: 'Core',
    icon: <TrendingUp className="w-4 h-4" /> 
  },
  { 
    id: 'higher-derivative', 
    name: 'Higher Derivative Calculator', 
    category: 'derivatives', 
    categoryLabel: 'Derivatives', 
    component: <HigherDerivativeCalculator />, 
    description: 'Finds 2nd, 3rd, nth derivatives numerically', 
    icon: <TrendingUp className="w-4 h-4" /> 
  },
  { 
    id: 'product-rule', 
    name: 'Product Rule Calculator', 
    category: 'derivatives', 
    categoryLabel: 'Derivatives', 
    component: <ProductRuleCalculator />, 
    description: 'Solves derivatives using Product Rule: d/dx[f(x)g(x)]', 
    icon: <FunctionSquare className="w-4 h-4" /> 
  },
  { 
    id: 'quotient-rule', 
    name: 'Quotient Rule Calculator', 
    category: 'derivatives', 
    categoryLabel: 'Derivatives', 
    component: <QuotientRuleCalculator />, 
    description: 'Solves derivatives using Quotient Rule: d/dx[f(x)/g(x)]', 
    icon: <FunctionSquare className="w-4 h-4" /> 
  },
  { 
    id: 'chain-rule', 
    name: 'Chain Rule Calculator', 
    category: 'derivatives', 
    categoryLabel: 'Derivatives', 
    component: <ChainRuleCalculator />, 
    description: 'Solves composite-function derivatives: d/dx[f(g(x))]', 
    icon: <FunctionSquare className="w-4 h-4" /> 
  },
  { 
    id: 'implicit-differentiation', 
    name: 'Implicit Differentiation Calculator', 
    category: 'derivatives', 
    categoryLabel: 'Derivatives', 
    component: <ImplicitDifferentiationCalculator />, 
    description: 'Differentiates implicit equations F(x,y) = 0', 
    icon: <FunctionSquare className="w-4 h-4" /> 
  },
  { 
    id: 'logarithmic-differentiation', 
    name: 'Logarithmic Differentiation Calculator', 
    category: 'derivatives', 
    categoryLabel: 'Derivatives', 
    component: <LogarithmicDifferentiationCalculator />, 
    description: 'Handles complicated products/powers using log differentiation', 
    icon: <FunctionSquare className="w-4 h-4" /> 
  },

  // Applications
  { 
    id: 'critical-point', 
    name: 'Critical Point Calculator', 
    category: 'applications', 
    categoryLabel: 'Applications', 
    component: <CriticalPointCalculator />, 
    description: 'Finds critical numbers where f\'(x) = 0 or undefined', 
    icon: <Maximize2 className="w-4 h-4" /> 
  },
  { 
    id: 'increasing-decreasing', 
    name: 'Increasing & Decreasing Calculator', 
    category: 'applications', 
    categoryLabel: 'Applications', 
    component: <IncreasingDecreasingCalculator />, 
    description: 'Determines intervals of increase/decrease', 
    icon: <TrendingUp className="w-4 h-4" /> 
  },
  { 
    id: 'local-extrema', 
    name: 'Local Extrema Calculator', 
    category: 'applications', 
    categoryLabel: 'Applications', 
    component: <LocalExtremaCalculator />, 
    description: 'Finds local maxima and minima', 
    icon: <Crown className="w-4 h-4" /> 
  },
  { 
    id: 'concavity', 
    name: 'Concavity Calculator', 
    category: 'applications', 
    categoryLabel: 'Applications', 
    component: <ConcavityCalculator />, 
    description: 'Determines concavity using f\'\'(x) sign', 
    icon: <BarChart3 className="w-4 h-4" /> 
  },
  { 
    id: 'inflection-point', 
    name: 'Inflection Point Calculator', 
    category: 'applications', 
    categoryLabel: 'Applications', 
    component: <InflectionPointCalculator />, 
    description: 'Finds inflection points where f\'\'(x) = 0', 
    icon: <Waves className="w-4 h-4" /> 
  },
  { 
    id: 'optimization', 
    name: 'Optimization Calculator', 
    category: 'applications', 
    categoryLabel: 'Applications', 
    component: <OptimizationCalculator />, 
    description: 'Solves optimization problems (max/min on intervals)', 
    badge: 'Popular',
    icon: <Maximize2 className="w-4 h-4" /> 
  },
  { 
    id: 'related-rates', 
    name: 'Related Rates Calculator', 
    category: 'applications', 
    categoryLabel: 'Applications', 
    component: <RelatedRatesCalculator />, 
    description: 'Solves related-rate problems using implicit differentiation', 
    icon: <Activity className="w-4 h-4" /> 
  },
  { 
    id: 'tangent-line', 
    name: 'Tangent Line Calculator', 
    category: 'applications', 
    categoryLabel: 'Applications', 
    component: <TangentLineCalculator />, 
    description: 'Finds tangent and normal lines at a point', 
    icon: <LineChart className="w-4 h-4" /> 
  },
  { 
    id: 'curve-sketching', 
    name: 'Curve Sketching Calculator', 
    category: 'applications', 
    categoryLabel: 'Applications', 
    component: <CurveSketchingCalculator />, 
    description: 'Analyzes and graphs functions with critical points', 
    icon: <LineChart className="w-4 h-4" /> 
  },

  // Integrals
  { 
    id: 'antiderivative', 
    name: 'Antiderivative Calculator', 
    category: 'integrals', 
    categoryLabel: 'Integrals', 
    component: <AntiderivativeCalculator />, 
    description: 'Finds indefinite integrals numerically', 
    icon: <Sigma className="w-4 h-4" /> 
  },
  { 
    id: 'definite-integral', 
    name: 'Definite Integral Calculator', 
    category: 'integrals', 
    categoryLabel: 'Integrals', 
    component: <DefiniteIntegralCalculator />, 
    description: 'Evaluates definite integrals using Simpson\'s rule', 
    badge: 'Core',
    icon: <Sigma className="w-4 h-4" /> 
  },
  { 
    id: 'ftc', 
    name: 'FTC Calculator', 
    category: 'integrals', 
    categoryLabel: 'Integrals', 
    component: <FTCCalculator />, 
    description: 'Uses the Fundamental Theorem of Calculus', 
    icon: <Sigma className="w-4 h-4" /> 
  },
  { 
    id: 'u-substitution', 
    name: 'u-Substitution Calculator', 
    category: 'integrals', 
    categoryLabel: 'Integrals', 
    component: <USubstitutionCalculator />, 
    description: 'Solves integrals using u-substitution technique', 
    icon: <FunctionSquare className="w-4 h-4" /> 
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Tools', count: 23 },
  { id: 'limits', label: 'Limits', count: 3 },
  { id: 'derivatives', label: 'Derivatives', count: 8 },
  { id: 'applications', label: 'Applications', count: 8 },
  { id: 'integrals', label: 'Integrals', count: 4 },
] as const;

interface CalculatorAppProps {
  initialToolId?: string | null;
}

export default function CalculatorApp({ initialToolId = null }: CalculatorAppProps) {
  const [selectedToolId, setSelectedToolId] = useState<string | null>(initialToolId);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [clickedToolId, setClickedToolId] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentIndex = selectedToolId ? tools.findIndex(t => t.id === selectedToolId) : -1;
  const currentTool = currentIndex >= 0 ? tools[currentIndex] : null;

  const gridFilteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const dropdownFilteredTools = tools.filter(tool => {
    return (
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

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
    setClickedToolId(toolId);
    setTimeout(() => {
      setSelectedToolId(toolId);
      setClickedToolId(null);
      setIsDropdownOpen(false);
      setSearchTerm('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  };

  const handleBackToGrid = () => {
    setSelectedToolId(null);
    setIsDropdownOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {selectedToolId === null || !currentTool ? (
          <motion.div
            // FIXED: Removed the stray period after "key"
            key="CalculusOneCalculator-grid-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5 border-[#E5E7EB]">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                          : 'bg-white text-[#374151] hover:bg-[#F9FAFB] hover:border-slate-300 border border-[#E5E7EB]'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#6B7280]'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search calculus tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-[#E5E7EB] bg-white pl-9 pr-8 py-2 text-xs sm:text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/15 transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#111827]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gridFilteredTools.length > 0 ? (
                gridFilteredTools.map((tool, index) => {
                  const isClicked = clickedToolId === tool.id;
                  return (
                    <motion.article
                      key={tool.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isClicked ? 0.4 : 1,
                        y: 0,
                        scale: isClicked ? 0.97 : 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: Math.min(index * 0.03, 0.3),
                        ease: "easeOut",
                      }}
                      whileHover={{
                        y: -3,
                        borderColor: "#93C5FD",
                        boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.08)",
                      }}
                      onClick={() => handleSelectTool(tool.id)}
                      className="group relative flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-5 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB] border border-blue-200">
                              {tool.icon}
                            </div>
                            <h3 className="font-bold text-base text-[#111827] group-hover:text-[#2563EB] transition-colors duration-200">
                              {tool.name}
                            </h3>
                          </div>
                          
                          {tool.badge && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-[#EFF6FF] px-2.5 py-0.5 text-xs font-bold flex-shrink-0 text-[#2563EB]">
                              {tool.badge}
                            </span>
                          )}
                        </div>

                        <p className="mt-2.5 text-xs sm:text-sm line-clamp-3 leading-relaxed text-[#6B7280]">
                          {tool.description}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-[#F3F4F6] pt-3">
                        <span className="text-xs font-semibold text-[#9CA3AF]">
                          {tool.categoryLabel}
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectTool(tool.id);
                          }}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] px-3.5 py-1.5 text-xs font-bold text-white transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                        >
                          <span>Open</span>
                          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </motion.article>
                  );
                })
              ) : (
                <div className="col-span-full py-16 text-center">
                  <Calculator className="w-10 h-10 mx-auto text-[#9CA3AF] mb-3" />
                  <p className="text-base font-semibold text-[#111827]">
                    No calculus tools found matching &ldquo;{searchTerm}&rdquo;
                  </p>
                  <p className="text-xs mt-1 text-[#6B7280]">
                    Try selecting &quot;All Tools&quot; or clearing the search query.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="calculator-active-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5">
              <button
                onClick={handleBackToGrid}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#374151] font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm hover:bg-[#F9FAFB] hover:border-slate-300"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                <span>All Calculators</span>
                <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded font-mono bg-[#F3F4F6] text-[#6B7280]">
                  ESC
                </span>
              </button>

              <div className="relative z-40 flex-1 max-w-2xl">
                <button
                  ref={buttonRef}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`group relative w-full flex items-center justify-between gap-3 rounded-xl border px-4 py-2.5 transition-all duration-200 cursor-pointer bg-white ${
                    isDropdownOpen
                      ? 'border-[#2563EB] shadow-md ring-2 ring-blue-500/10'
                      : 'border-[#E5E7EB] hover:border-blue-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 text-left min-w-0">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-[#EFF6FF] text-[#2563EB]">
                      {currentTool.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs sm:text-sm truncate text-[#111827]">
                          {currentTool.name}
                        </span>
                        {currentTool.badge && (
                          <span className="hidden sm:inline-flex items-center rounded-full border border-blue-200 bg-[#EFF6FF] px-2 py-0.5 text-[0.65rem] font-bold text-[#2563EB]">
                            {currentTool.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] truncate text-[#6B7280]">
                        {currentTool.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-2 py-0.5 text-[11px] font-mono font-bold text-[#374151]">
                      {currentIndex + 1}/{tools.length}
                    </span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-md text-[#6B7280]">
                      {isDropdownOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl border border-[#E5E7EB] bg-white p-3.5 shadow-2xl shadow-slate-300/60 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div className="relative mb-3">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                      <input
                        type="text"
                        placeholder="Switch to another calculator..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoFocus
                        className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] pl-9 pr-8 py-2 text-xs sm:text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:border-[#2563EB] focus:ring-blue-500/15 transition-all"
                      />
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm('')}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#111827]"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <div className="grid max-h-[340px] gap-1.5 overflow-y-auto pr-1 sm:grid-cols-2">
                      {dropdownFilteredTools.map((tool) => {
                        const isSelected = selectedToolId === tool.id;
                        return (
                          <button
                            key={tool.id}
                            onClick={() => handleSelectTool(tool.id)}
                            className={`group flex items-start justify-between gap-2.5 rounded-xl border p-2.5 text-left transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'border-blue-400 bg-[#EFF6FF] text-[#2563EB] shadow-sm font-bold'
                                : 'border-[#E5E7EB] bg-white text-[#374151] hover:border-blue-300 hover:bg-[#F9FAFB] hover:text-[#111827]'
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className={`text-xs font-bold transition-colors ${
                                  isSelected ? 'text-[#2563EB]' : 'group-hover:text-[#2563EB]'
                                }`}>
                                  {tool.name}
                                </span>
                                {tool.badge && (
                                  <span className="text-[0.6rem] px-1.5 py-0.5 rounded border border-blue-200 bg-[#EFF6FF] text-[#2563EB] font-bold">
                                    {tool.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] truncate mt-0.5 text-[#6B7280]">
                                {tool.description}
                              </p>
                            </div>

                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevTool}
                  className="inline-flex items-center gap-1 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-xs font-bold text-[#374151] transition-all cursor-pointer hover:border-blue-300 hover:text-[#2563EB] hover:bg-[#F9FAFB] shadow-sm"
                  title="Previous Calculator"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev</span>
                </button>
                <button
                  onClick={handleNextTool}
                  className="inline-flex items-center gap-1 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-xs font-bold text-[#374151] transition-all cursor-pointer hover:border-blue-300 hover:text-[#2563EB] hover:bg-[#F9FAFB] shadow-sm"
                  title="Next Calculator"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-xl shadow-slate-200/50 text-[#111827]">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E7EB] bg-[#F9FAFB] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-[#EFF6FF] text-[#2563EB]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-bold text-lg sm:text-xl text-[#111827]">
                        {currentTool.name}
                      </h2>
                      <span className="rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold border border-blue-200 bg-[#EFF6FF] text-[#2563EB]">
                        Ready
                      </span>
                    </div>
                    <p className="text-xs mt-0.5 text-[#6B7280]">
                      {currentTool.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="calculator-wrapper-theme light-mode p-5 sm:p-8">
                {currentTool.component}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .calculator-wrapper-theme.light-mode {
          color: #111827;
        }

        .calculator-wrapper-theme.light-mode input[type="text"],
        .calculator-wrapper-theme.light-mode input[type="number"],
        .calculator-wrapper-theme.light-mode textarea,
        .calculator-wrapper-theme.light-mode select {
          background-color: #ffffff !important;
          color: #111827 !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 0.75rem !important;
          padding: 0.65rem 1rem !important;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
          font-weight: 600 !important;
          transition: all 0.2s ease !important;
        }

        .calculator-wrapper-theme.light-mode input:focus,
        .calculator-wrapper-theme.light-mode textarea:focus,
        .calculator-wrapper-theme.light-mode select:focus {
          border-color: #2563EB !important;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15) !important;
          background-color: #ffffff !important;
        }

        .calculator-wrapper-theme.light-mode button.bg-indigo-600,
        .calculator-wrapper-theme.light-mode button.bg-blue-600,
        .calculator-wrapper-theme.light-mode button.bg-green-600,
        .calculator-wrapper-theme.light-mode button.bg-emerald-600,
        .calculator-wrapper-theme.light-mode button.bg-emerald-500 {
          background: #2563EB !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          border: none !important;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25) !important;
          border-radius: 0.75rem !important;
          transition: all 0.2s ease-in-out !important;
        }

        .calculator-wrapper-theme.light-mode button.bg-indigo-600:hover,
        .calculator-wrapper-theme.light-mode button.bg-blue-600:hover,
        .calculator-wrapper-theme.light-mode button.bg-green-600:hover,
        .calculator-wrapper-theme.light-mode button.bg-emerald-600:hover,
        .calculator-wrapper-theme.light-mode button.bg-emerald-500:hover {
          background: #1D4ED8 !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35) !important;
        }

        .calculator-wrapper-theme.light-mode button.border-gray-300,
        .calculator-wrapper-theme.light-mode button.border-slate-300,
        .calculator-wrapper-theme.light-mode button.border-slate-200,
        .calculator-wrapper-theme.light-mode button.border {
          background-color: #ffffff !important;
          color: #374151 !important;
          border-color: #e5e7eb !important;
          border-radius: 0.75rem !important;
          transition: all 0.2s ease !important;
        }

        .calculator-wrapper-theme.light-mode button.border-slate-300:hover,
        .calculator-wrapper-theme.light-mode button.border-gray-300:hover,
        .calculator-wrapper-theme.light-mode button.border:hover {
          background-color: #f9fafb !important;
          color: #111827 !important;
          border-color: #93c5fd !important;
        }

        .calculator-wrapper-theme.light-mode .text-slate-700,
        .calculator-wrapper-theme.light-mode .text-slate-800,
        .calculator-wrapper-theme.light-mode .text-gray-800 {
          color: #111827 !important;
          font-weight: 600 !important;
        }

        .calculator-wrapper-theme.light-mode .text-gray-500,
        .calculator-wrapper-theme.light-mode .text-slate-600,
        .calculator-wrapper-theme.light-mode .text-gray-600 {
          color: #6b7280 !important;
        }

        .calculator-wrapper-theme.light-mode .bg-slate-50,
        .calculator-wrapper-theme.light-mode .bg-blue-50,
        .calculator-wrapper-theme.light-mode .bg-indigo-50 {
          background-color: #eff6ff !important;
          border: 1px solid #dbeafe !important;
          border-radius: 0.85rem !important;
          color: #1e40af !important;
        }

        .calculator-wrapper-theme.light-mode pre {
          background-color: #f9fafb !important;
          border: 1px solid #e5e7eb !important;
          color: #111827 !important;
          border-radius: 0.75rem !important;
          padding: 1rem !important;
        }
      `}</style>
    </div>
  );
}