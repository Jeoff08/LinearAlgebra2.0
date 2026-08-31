import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { api } from '../lib/api'
import { supabase } from '../lib/supabase'
import type { PublicUser } from '../types/models'

type AuthContextValue = {
  user: PublicUser | null
  token: string | null
  loading: boolean
  isAdmin: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<string | null>
  register: (name: string, email: string, password: string) => Promise<string | null>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<PublicUser | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setToken(session?.access_token ?? null)
      void (async () => {
        if (!session?.user) {
          setUser(null)
          setLoading(false)
          return
        }
        const profile = await api.me(session.access_token)
        setUser(profile)
        setLoading(false)
      })()
    })

    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const result = await api.login({ email, password })
    if (!result.ok) return result.error
    setToken(result.token)
    setUser(result.user)
    return null
  }, [])

  const register = useCallback(async (name: string, email: string, password: string) => {
    const result = await api.register({ name, email, password })
    if (!result.ok) return result.error
    setToken(result.token)
    setUser(result.user)
    return null
  }, [])

  const logout = useCallback(async () => {
    await api.logout()
    setToken(null)
    setUser(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      token,
      loading,
      isAdmin: Boolean(
        user &&
          (user.email?.toLowerCase().trim() === 'admin@gmail.com' ||
            user.role === 'admin'),
      ),
      isAuthenticated: Boolean(user),
      login,
      register,
      logout,
    }),
    [user, token, loading, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
