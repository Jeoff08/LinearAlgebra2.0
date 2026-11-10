import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { TransitionProvider } from "./context/TransitionContext";
import { useDelayedSkeleton } from "./hooks/useDelayedSkeleton";
import {  TopicsSkeletonLoader,
  CalculatorsSkeletonLoader,  UserDashboardSkeletonLoader,
  AdminDashboardSkeletonLoader,
} from "./components/PageSkeletonLoaders";
import TopicPage from "./pages/TopicPage";
import LoginPage from "./pages/LoginPage";
import PublicPage from "./pages/PublicPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import CalculatorApp from "./calculators/CalculatorApp";
import CalculatorsPage from "./pages/CalculatorsPage";
import CalculusCalculatorsPage from "./pages/CalculusCalculatorsPage";
import CalculatorHubPage from "./pages/CalculatorHubPage";
import CalculatorDetailPage from "./pages/CalculatorDetailPage";

function getRouteMatchingSkeleton() {
  const hash = (window.location.hash || "").toLowerCase();
  const search = (window.location.search || "").toLowerCase();
  const path = (window.location.pathname || "").toLowerCase();
  const full = hash + search + path;

  if (full.includes("admin")) return <AdminDashboardSkeletonLoader />;
  if (full.includes("dashboard")) return <UserDashboardSkeletonLoader />;
  if (full.includes("calculator")) return <CalculatorsSkeletonLoader />;
  if (full.includes("topic")) return <TopicsSkeletonLoader />;
  return null;
}

function AppContent() {
  const { loading } = useAuth();

  // ONLY show skeleton if initial network/auth loading is actually lagging (>200ms)
  // If network is fast, isLagging stays false (none) and content displays immediately with animation
  const isLagging = useDelayedSkeleton(loading, 200);

  if (loading && isLagging) {
    const skeleton = getRouteMatchingSkeleton();
    if (skeleton) return skeleton;
  }

  return (
    <HashRouter>
      <div className="app-shell animate-in fade-in duration-300">
        {/* Subtle math background pattern */}
        <div className="math-bg-pattern" aria-hidden />
        <Navbar />
        <main className="animate-in fade-in duration-300">
          <Routes>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/topics/:id" element={<TopicPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <ErrorBoundary>
                    <AdminDashboardPage />
                  </ErrorBoundary>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute role="admin">
                  <ErrorBoundary>
                    <AdminDashboardPage />
                  </ErrorBoundary>
                </ProtectedRoute>
              }
            />
            <Route
              path="/topics"
              element={<Navigate to="/?tab=topics" replace />}
            />
            <Route path="/calculator" element={<CalculatorApp />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route
              path="/calculators/:id"
              element={<CalculatorDetailPage />}
            />
            <Route
              path="/calculus-calculators"
              element={<CalculusCalculatorsPage />}
            />
            <Route
              path="/calculator-hub"
              element={<CalculatorHubPage />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TransitionProvider>
          <AppContent />
        </TransitionProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
