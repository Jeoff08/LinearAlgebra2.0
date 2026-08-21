import type { AuthResult, PdfItem, PublicUser } from '../types/models'
import { isSupabaseConfigured, supabase } from './supabase'

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
  role: 'admin' | 'user'
  created_at: string
}): PublicUser {
  return {
    id: row.id,
    email: row.email,
    name: row.name,
    role: row.role,
    created_at: row.created_at,
  }
}

async function loadProfile(userId: string): Promise<PublicUser | null> {
  const client = requireClient()
  const { data, error } = await client
    .from('profiles')
    .select('id, email, name, role, created_at')
    .eq('id', userId)
    .maybeSingle()

  if (error) throw error
  if (!data) return null
  return mapProfile(data as PublicUser)
}

function toAuthError(message: string): AuthResult {
  return { ok: false, error: message }
}

export const api = {
  async register(input: { email: string; password: string; name: string }): Promise<AuthResult> {
    try {
      const client = requireClient()
      const { data, error } = await client.auth.signUp({
        email: input.email.trim(),
        password: input.password,
        options: { data: { name: input.name.trim() || 'User' } },
      })
      if (error) return toAuthError(error.message)
      if (!data.user) return toAuthError('Could not create account')
      if (!data.session) {
        return toAuthError('Account created. Confirm your email, then sign in.')
      }
      const user = (await loadProfile(data.user.id)) ?? {
        id: data.user.id,
        email: data.user.email ?? input.email.trim(),
        name: input.name.trim() || 'User',
        role: 'user' as const,
        created_at: new Date().toISOString(),
      }
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
      const user = (await loadProfile(data.user.id)) ?? {
        id: data.user.id,
        email: data.user.email ?? input.email.trim(),
        name: (data.user.user_metadata?.name as string | undefined) || 'User',
        role: 'user' as const,
        created_at: data.user.created_at,
      }
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
