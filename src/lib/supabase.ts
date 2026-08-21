import { createClient } from '@supabase/supabase-js'

const url = 'https://xfvvhvgvtquwfnvvfbop.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmdnZodmd2dHF1d2ZudnZmYm9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcyMjU2NTgsImV4cCI6MjEwMjgwMTY1OH0.n-kcb5XAOf-uNoBGcquenah0fh-q412ekHcalEP6M78'

export const isSupabaseConfigured = Boolean(
  url && key && !url.includes('your-project'),
)

export const supabase = isSupabaseConfigured
  ? createClient(url!, key!)
  : null
