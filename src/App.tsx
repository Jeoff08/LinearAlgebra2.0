import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import TopicPage from "./pages/TopicPage";
import LoginPage from "./pages/LoginPage";
import PublicPage from "./pages/PublicPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import CalculatorApp from "./calculators/CalculatorApp";
import CalculatorsPage from "./pages/CalculatorsPage";
import CalculusCalculatorsPage from "./pages/CalculusCalculatorsPage";
import CalculatorHubPage from "./pages/CalculatorHubPage";
import CalculatorDetailPage from "./pages/CalculatorDetailPage";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <HashRouter>
          <div className="app-shell">
            {/* Subtle math background pattern */}
            <div className="math-bg-pattern" aria-hidden />
            <Navbar />
            <main>
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
                <Route path="/topics" element={<Navigate to="/?tab=topics" replace />} />
                <Route path="/calculator" element={<CalculatorApp />} />
                <Route path="/calculators" element={<CalculatorsPage />} />
                <Route path="/calculators/:id" element={<CalculatorDetailPage />} />
                <Route path="/calculus-calculators" element={<CalculusCalculatorsPage />} />
                <Route path="/calculator-hub" element={<CalculatorHubPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}