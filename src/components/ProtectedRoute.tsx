import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

export function ProtectedRoute({
  children,
  role,
}: {
  children: ReactNode;
  role?: "admin" | "user";
}) {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role === "admin") {
    const isAuthorizedAdmin =
      user?.email?.toLowerCase().trim() === "admin@gmail.com" ||
      user?.role === "admin";
    if (!isAuthorizedAdmin) {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <div className="animate-in fade-in duration-300">{children}</div>;
}
