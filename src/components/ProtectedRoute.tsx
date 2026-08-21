import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import type { ReactNode } from 'react'

export function ProtectedRoute({
  children,
  role,
}: {
  children: ReactNode
  role?: 'admin' | 'user'
}) {
  const { user, loading, isAuthenticated } = useAuth()

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <div className="relative flex items-center justify-center w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-t-[#00D2FF] border-r-[#B6FF2E] border-b-transparent border-l-transparent animate-spin" />
          <span className="font-mono text-sm font-bold text-[#00D2FF]">λ</span>
        </div>
        <p className="text-xs font-mono tracking-widest text-[#00D2FF] font-semibold">VERIFYING SESSION…</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (role === 'admin' && user?.role !== 'admin') {
    return <Navigate to="/" replace />
  }

  return children
}
