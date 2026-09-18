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
  register: (name: string, email: string, password: string, block?: string) => Promise<string | null>
  logout: () => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<PublicUser | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const refreshUser = useCallback(async () => {
    try {
      const profile = await api.me()
      if (profile) setUser(profile)
    } catch (err) {
      console.error('Failed to refresh user profile:', err)
    }
  }, [])

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

    // Listen to profile updates (e.g. block change by admin) in realtime
    const profileSub = supabase
      .channel('public:profiles')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'profiles' },
        (payload: any) => {
          if (payload?.new) {
            setUser((prev) => {
              if (prev && prev.id === payload.new.id) {
                return {
                  ...prev,
                  name: payload.new.name ?? prev.name,
                  block: payload.new.block ?? prev.block,
                  avatar_url: payload.new.avatar_url ?? prev.avatar_url,
                  role: payload.new.role ?? prev.role,
                }
              }
              return prev
            })
          }
        }
      )
      .subscribe()

    return () => {
      data.subscription.unsubscribe()
      profileSub.unsubscribe()
    }
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const result = await api.login({ email, password })
    if (!result.ok) return result.error
    setToken(result.token)
    setUser(result.user)
    return null
  }, [])

  const register = useCallback(async (name: string, email: string, password: string, block?: string) => {
    const result = await api.register({ name, email, password, block })
    if (!result.ok) return result.error
    setToken(result.token)
    setUser(result.user)
    return null
  }, [])

  const logout = useCallback(async () => {
    await api.logout()
    setToken(null)
    setUser(null)
    if (window.location.hash !== '#/login') {
      window.location.hash = '#/login'
    }
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
      refreshUser,
    }),
    [user, token, loading, login, register, logout, refreshUser],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
