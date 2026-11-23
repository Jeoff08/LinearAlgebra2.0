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
import { createDefaultSubjectRecord } from '../types/grading'
import { isSameStudentName } from '../utils/studentMatching'

type AuthContextValue = {
  user: PublicUser | null
  token: string | null
  loading: boolean
  isAdmin: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<string | null>
  register: (
    name: string,
    email: string,
    password: string,
    block?: string,
    subjectCode?: string,
    offerNumber?: string,
    studentId?: string
  ) => Promise<string | null>
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

  const register = useCallback(
    async (
      name: string,
      email: string,
      password: string,
      block?: string,
      subjectCode?: string,
      offerNumber?: string,
      studentId?: string
    ) => {
      const result = await api.register({
        name,
        email,
        password,
        block,
        subjectCode,
        offerNumber,
        studentId,
      })
      if (!result.ok) return result.error
      setToken(result.token)
      setUser(result.user)

      // Auto-enroll student into the grading sheet for that subject
      try {
        const raw = localStorage.getItem('mathworkspace_grading_data')
        let records = raw ? JSON.parse(raw) : []
        if (!Array.isArray(records) || records.length === 0) {
          records = [
            createDefaultSubjectRecord('MATH 101', 'Calculus with Analytic Geometry', '80062'),
            createDefaultSubjectRecord('MATH 102', 'Integral Calculus', '80063'),
          ]
        }

        const studentName = name.trim()
        const inputStudentId = (
          studentId?.trim() ||
          result.user.student_id ||
          result.user.id_number ||
          ''
        ).toUpperCase()

        // 1. First, check if the student is already enrolled in ANY existing subject record (from Excel upload)
        let target = records.find((r: any) => {
          if (Array.isArray(r.students)) {
            return r.students.some((s: any) =>
              (inputStudentId && s.studentId && s.studentId.toUpperCase() === inputStudentId) ||
              isSameStudentName(s.fullName, studentName)
            )
          }
          return false
        })

        // 2. If not found by student roster, locate or create by subject code or offer number
        if (!target) {
          const inputCode = (subjectCode || '').toLowerCase().trim()
          const inputOffer = (offerNumber || '').toLowerCase().trim()
          const is102 = inputCode.includes('102') || inputOffer.includes('102')

          target = records.find((r: any) => {
            const subCode = (r.subject?.subjectCode || '').toLowerCase().trim()
            const subOffer = (r.subject?.offerNumber || '').toLowerCase().trim()
            if (is102) {
              return subCode.includes('102')
            }
            if (inputCode && subCode === inputCode) return true
            if (inputOffer && subOffer === inputOffer) return true
            const subDigits = subCode.match(/\d+/)?.[0]
            if (subDigits && inputCode.includes(subDigits)) return true
            return false
          })

          // If user registered for MATH 102 and record doesn't exist yet, create it
          if (!target && is102) {
            target = createDefaultSubjectRecord('MATH 102', 'Integral Calculus', '80063')
            records.push(target)
          }

          // If not 102 and no matching record, create subject or use first
          if (!target) {
            if (subjectCode && subjectCode.trim()) {
              target = createDefaultSubjectRecord(subjectCode.trim(), 'Mathematics', offerNumber?.trim() || '')
              records.push(target)
            } else {
              target = records[0]
            }
          }
        }

        if (target) {
          if (!Array.isArray(target.students)) {
            target.students = []
          }

          // Check if this student already exists in this subject's roster (e.g. from Excel upload)
          const existingIdx = target.students.findIndex(
            (s: any) =>
              s.id === result.user.id ||
              s.userId === result.user.id ||
              (inputStudentId && s.studentId && s.studentId.toUpperCase() === inputStudentId) ||
              isSameStudentName(s.fullName, studentName)
          )

          if (existingIdx >= 0) {
            const existing = target.students[existingIdx]
            const oldId = existing.id
            existing.userId = result.user.id
            existing.email = result.user.email

            // Preserve official student ID from Excel if available (e.g. "2023-00076")
            if (existing.studentId && !existing.studentId.startsWith('2026-') && existing.studentId !== '2026-0000') {
              // keep existing.studentId intact
            } else if (inputStudentId && !inputStudentId.startsWith('2026-')) {
              existing.studentId = inputStudentId
            } else if (!existing.studentId) {
              existing.studentId = inputStudentId || `2026-${result.user.id.slice(0, 5)}`
            }

            if (!existing.fullName) {
              existing.fullName = studentName
            }
            if (existing.block || block) {
              existing.block = existing.block || block
            }

            // Update user in state so that their profile holds the official name and ID from Excel
            const updatedUser = {
              ...result.user,
              name: existing.fullName || result.user.name,
              student_id: existing.studentId || result.user.student_id,
              id_number: existing.studentId || result.user.id_number,
              subject_code: target.subject?.subjectCode || result.user.subject_code,
              offer_number: target.subject?.offerNumber || result.user.offer_number,
            }
            setUser(updatedUser)

            // Migrate scores if oldId was a temporary Excel ID
            if (oldId && oldId !== result.user.id) {
              existing.id = result.user.id
              Object.keys(target.periods || {}).forEach((pKey) => {
                const p = target.periods[pKey]
                if (Array.isArray(p?.scores)) {
                  p.scores.forEach((sc: any) => {
                    if (sc.studentId === oldId) {
                      sc.studentId = result.user.id
                    }
                  })
                }
              })
            }
          } else {
            // New distinct student (differing name / surname from other students)
            const resolvedStudentId = (
              inputStudentId ||
              `2026-${result.user.id.slice(0, 5)}`
            ).toUpperCase()

            target.students.push({
              id: result.user.id,
              userId: result.user.id,
              studentNumber: String(target.students.length + 1),
              studentId: resolvedStudentId,
              fullName: studentName,
            })
          }

          localStorage.setItem(
            'mathworkspace_grading_data',
            JSON.stringify(records)
          )
          window.dispatchEvent(new Event('storage'))
          window.dispatchEvent(new CustomEvent('mathworkspace-quiz-submitted'))
        }
      } catch (e) {
        console.error('Error syncing student with grading data:', e)
      }

      return null
    },
    []
  )

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
