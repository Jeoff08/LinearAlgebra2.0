import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export type Note = {
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      if (!supabase) {
        setNotes([])
        return
      }
      const { data, error } = await supabase
        .from('notes')
        .select('id, title, content, created_at, updated_at, deleted_at')
        .is('deleted_at', null)
        .order('updated_at', { ascending: false })
      if (error) throw error
      setNotes((data ?? []) as Note[])
    } finally {
      setLoading(false)
    }
  }, [])

  const save = useCallback(
    async (input: { id?: string; title: string; content: string }) => {
      if (!supabase) throw new Error('Supabase is not configured')
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) throw new Error('Sign in required')

      const now = new Date().toISOString()
      const row = {
        id: input.id ?? crypto.randomUUID(),
        user_id: user.id,
        title: input.title,
        content: input.content,
        updated_at: now,
        deleted_at: null,
      }

      const { error } = await supabase.from('notes').upsert(row, { onConflict: 'id' })
      if (error) throw error
      await load()
    },
    [load],
  )

  const remove = useCallback(
    async (id: string) => {
      if (!supabase) throw new Error('Supabase is not configured')
      const { error } = await supabase
        .from('notes')
        .update({ deleted_at: new Date().toISOString(), updated_at: new Date().toISOString() })
        .eq('id', id)
      if (error) throw error
      await load()
    },
    [load],
  )

  useEffect(() => {
    void load()
  }, [load])

  return { notes, loading, save, remove, reload: load }
}
