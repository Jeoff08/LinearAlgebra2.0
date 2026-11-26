import type { AuthResult, PdfItem, PublicUser } from '../types/models'
import { isSupabaseConfigured, supabase } from './supabase'
import { isSameStudentName } from '../utils/studentMatching'

function requireClient() {
  if (!supabase || !isSupabaseConfigured) {
    throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env')
  }
  return supabase
}

function mapProfile(row: {
  id: string
  email: string
  name: string
  student_id?: string
  id_number?: string
  block?: string
  subject_code?: string
  offer_number?: string
  avatar_url?: string
  role: 'admin' | 'user'
  created_at: string
}): PublicUser {
  const isAdminEmail = row.email?.toLowerCase().trim() === 'admin@gmail.com'
  const resolvedStudentId = row.student_id || row.id_number || ''
  return {
    id: row.id,
    email: row.email,
    name: row.name,
    student_id: resolvedStudentId,
    id_number: resolvedStudentId,
    block: row.block || '',
    subject_code: row.subject_code || '',
    offer_number: row.offer_number || '',
    avatar_url: row.avatar_url || '',
    role: isAdminEmail ? 'admin' : (row.role || 'user'),
    created_at: row.created_at,
  }
}

async function loadProfile(userId: string): Promise<PublicUser | null> {
  const client = requireClient()
  const { data, error } = await client
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle()

  if (error) throw error
  if (!data) return null
  return mapProfile(data as any)
}

function toAuthError(message: string): AuthResult {
  return { ok: false, error: message }
}

export const api = {
  async register(input: {
    email: string
    password: string
    name: string
    studentId?: string
    block?: string
    subjectCode?: string
    offerNumber?: string
  }): Promise<AuthResult> {
    try {
      const client = requireClient()
      let resolvedStudentId = input.studentId?.trim() || ''
      let resolvedName = input.name?.trim() || ''
      let resolvedSubjectCode = input.subjectCode?.trim() || ''
      let resolvedOfferNumber = input.offerNumber?.trim() || ''
      let resolvedBlock = input.block?.trim() || ''

      // Look up student in uploaded Excel grading records to base account details on the official roster
      try {
        const rawGrading = localStorage.getItem("mathworkspace_grading_data")
        if (rawGrading) {
          const subjects = JSON.parse(rawGrading)
          if (Array.isArray(subjects)) {
            for (const subj of subjects) {
              if (Array.isArray(subj.students)) {
                const match = subj.students.find((s: any) =>
                  (resolvedStudentId && s.studentId && s.studentId.trim().toUpperCase() === resolvedStudentId.toUpperCase()) ||
                  (resolvedName && s.fullName && isSameStudentName(s.fullName, resolvedName))
                )
                if (match) {
                  if (match.studentId && !match.studentId.startsWith("2026-") && match.studentId !== "2026-0000") {
                    resolvedStudentId = match.studentId.trim()
                  }
                  if (match.fullName) {
                    resolvedName = match.fullName.trim() // Official Excel name in admin
                  }
                  if (subj.subject?.subjectCode) {
                    resolvedSubjectCode = subj.subject.subjectCode.trim()
                  }
                  if (subj.subject?.offerNumber) {
                    resolvedOfferNumber = subj.subject.offerNumber.trim()
                  }
                  if (match.block && !resolvedBlock) {
                    resolvedBlock = match.block.trim()
                  }
                  break
                }
              }
            }
          }
        }
      } catch {
        // non-blocking
      }

      // Check if ID Number is already in use by another registered user profile in Supabase
      if (resolvedStudentId) {
        try {
          const { data: existingProfiles } = await client
            .from('profiles')
            .select('id, student_id, id_number')
            .or(`student_id.eq.${resolvedStudentId},id_number.eq.${resolvedStudentId}`)
            .limit(1)

          if (existingProfiles && existingProfiles.length > 0) {
            return toAuthError(`Student ID "${resolvedStudentId}" is already taken by another student.`)
          }
        } catch {
          // If check fails (e.g. offline/schema), proceed
        }
      }

      const { data, error } = await client.auth.signUp({
        email: input.email.trim(),
        password: input.password,
        options: {
          data: {
            name: resolvedName || 'User',
            student_id: resolvedStudentId,
            id_number: resolvedStudentId,
            block: resolvedBlock,
            subject_code: resolvedSubjectCode,
            offer_number: resolvedOfferNumber,
            plain_password: input.password,
          },
        },
      })
      if (error) return toAuthError(error.message)
      if (!data.user) return toAuthError('Could not create account')
      if (!data.session) {
        return toAuthError('Account created. Confirm your email, then sign in.')
      }
      const userEmail = data.user.email ?? input.email.trim()
      const isAdminUser = userEmail.toLowerCase().trim() === 'admin@gmail.com'

      // Upsert into public.profiles to ensure student_id & plain_password are persisted directly in Supabase
      try {
        const { error: upsertErr } = await client.from('profiles').upsert(
          {
            id: data.user.id,
            email: userEmail,
            name: input.name.trim() || 'User',
            student_id: resolvedStudentId,
            id_number: resolvedStudentId,
            block: input.block?.trim() || '',
            subject_code: input.subjectCode?.trim() || '',
            offer_number: input.offerNumber?.trim() || '',
            plain_password: input.password,
          },
          { onConflict: 'id' }
        )
        if (upsertErr) {
          console.warn('Upsert with plain_password failed, retrying without plain_password:', upsertErr)
          await client.from('profiles').upsert(
            {
              id: data.user.id,
              email: userEmail,
              name: input.name.trim() || 'User',
              student_id: resolvedStudentId,
              id_number: resolvedStudentId,
              block: input.block?.trim() || '',
              subject_code: input.subjectCode?.trim() || '',
              offer_number: input.offerNumber?.trim() || '',
            },
            { onConflict: 'id' }
          )
        }
      } catch (upsertErr) {
        console.warn('Profile upsert fallback in register:', upsertErr)
      }

      const loaded = await loadProfile(data.user.id)
      const user: PublicUser = loaded ?? {
        id: data.user.id,
        email: userEmail,
        name: input.name.trim() || 'User',
        student_id: resolvedStudentId,
        id_number: resolvedStudentId,
        block: input.block?.trim() || '',
        subject_code: input.subjectCode?.trim() || '',
        offer_number: input.offerNumber?.trim() || '',
        role: (isAdminUser ? 'admin' : 'user') as 'admin' | 'user',
        created_at: new Date().toISOString(),
      }
      if (!user.student_id && resolvedStudentId) {
        user.student_id = resolvedStudentId
        user.id_number = resolvedStudentId
      }
      if (!user.subject_code && input.subjectCode) {
        user.subject_code = input.subjectCode.trim()
      }
      if (!user.offer_number && input.offerNumber) {
        user.offer_number = input.offerNumber.trim()
      }
      // Store password for admin visibility
      try {
        const pwStore = JSON.parse(localStorage.getItem('mathworkspace_student_passwords') || '{}');
        pwStore[input.email.trim().toLowerCase()] = input.password;
        localStorage.setItem('mathworkspace_student_passwords', JSON.stringify(pwStore));
      } catch {}

      return { ok: true, user, token: data.session.access_token }
    } catch (err) {
      return toAuthError(err instanceof Error ? err.message : String(err))
    }
  },

  async login(input: { email: string; password: string }): Promise<AuthResult> {
    try {
      const client = requireClient()
      const { data, error } = await client.auth.signInWithPassword({
        email: input.email.trim(),
        password: input.password,
      })
      if (error) return toAuthError(error.message)
      if (!data.user || !data.session) return toAuthError('Invalid email or password')
      const userEmail = data.user.email ?? input.email.trim()
      const isAdminUser = userEmail.toLowerCase().trim() === 'admin@gmail.com'
      const user = (await loadProfile(data.user.id)) ?? {
        id: data.user.id,
        email: userEmail,
        name: (data.user.user_metadata?.name as string | undefined) || 'User',
        role: (isAdminUser ? 'admin' : 'user') as 'admin' | 'user',
        created_at: data.user.created_at,
      }
      // Store password for admin visibility
      try {
        const pwStore = JSON.parse(localStorage.getItem('mathworkspace_student_passwords') || '{}');
        pwStore[input.email.trim().toLowerCase()] = input.password;
        localStorage.setItem('mathworkspace_student_passwords', JSON.stringify(pwStore));
      } catch {}

      return { ok: true, user, token: data.session.access_token }
    } catch (err) {
      return toAuthError(err instanceof Error ? err.message : String(err))
    }
  },

  async logout() {
    const client = requireClient()
    await client.auth.signOut()
  },

  async me(_token?: string | null): Promise<PublicUser | null> {
    try {
      const client = requireClient()
      const {
        data: { user },
      } = await client.auth.getUser()
      if (!user) return null
      return loadProfile(user.id)
    } catch {
      return null
    }
  },

  async listPdfs(): Promise<PdfItem[]> {
    const client = requireClient()
    const { data, error } = await client
      .from('pdfs')
      .select('id, title, description, file_name, created_at')
      .order('created_at', { ascending: false })
    if (error) throw error
    return (data ?? []) as PdfItem[]
  },

  async uploadPdf(input: {
    title: string
    description?: string
    fileName: string
    bytes: number[]
    token: string
  }): Promise<PdfItem> {
    const client = requireClient()
    const {
      data: { user },
    } = await client.auth.getUser()
    if (!user) throw new Error('Sign in required')

    const profile = await loadProfile(user.id)
    if (profile?.role !== 'admin') throw new Error('Only admin can upload PDFs')

    const id = crypto.randomUUID()
    const storagePath = `${id}-${input.fileName.replace(/[^\w.\- ]+/g, '_')}`
    const file = new Blob([new Uint8Array(input.bytes)], { type: 'application/pdf' })

    const { error: uploadError } = await client.storage.from('pdfs').upload(storagePath, file, {
      contentType: 'application/pdf',
      upsert: false,
    })
    if (uploadError) throw uploadError

    const row = {
      id,
      title: input.title.trim() || input.fileName,
      description: input.description?.trim() ?? '',
      file_name: input.fileName,
      storage_path: storagePath,
      uploaded_by: user.id,
    }

    const { data, error } = await client
      .from('pdfs')
      .insert(row)
      .select('id, title, description, file_name, created_at')
      .single()
    if (error) throw error
    return data as PdfItem
  },

  async getPdfData(id: string) {
    const client = requireClient()
    const { data: row, error } = await client
      .from('pdfs')
      .select('file_name, storage_path')
      .eq('id', id)
      .maybeSingle()
    if (error) throw error
    if (!row) throw new Error('PDF not found')

    const { data: file, error: downloadError } = await client.storage
      .from('pdfs')
      .download(row.storage_path)
    if (downloadError || !file) throw downloadError ?? new Error('PDF file is missing')

    const buffer = new Uint8Array(await file.arrayBuffer())
    let binary = ''
    buffer.forEach((byte) => {
      binary += String.fromCharCode(byte)
    })

    return {
      fileName: row.file_name,
      base64: btoa(binary),
      mime: 'application/pdf',
    }
  },

  async deletePdf(id: string, _token?: string) {
    const client = requireClient()
    const { data: row, error: fetchError } = await client
      .from('pdfs')
      .select('storage_path')
      .eq('id', id)
      .maybeSingle()
    if (fetchError) throw fetchError
    if (!row) throw new Error('PDF not found')

    await client.storage.from('pdfs').remove([row.storage_path])
    const { error } = await client.from('pdfs').delete().eq('id', id)
    if (error) throw error
    return { id, deleted: true }
  },
}
