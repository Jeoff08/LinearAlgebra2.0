import { createClient } from '@supabase/supabase-js';

const url = 'https://xfvvhvgvtquwfnvvfbop.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmdnZodmd2dHF1d2ZudnZmYm9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcyMjU2NTgsImV4cCI6MjEwMjgwMTY1OH0.n-kcb5XAOf-uNoBGcquenah0fh-q412ekHcalEP6M78';

const supabase = createClient(url, key);

async function clearDatabase() {
  console.log("Checking quiz_attempts count...");
  const { count: attCount, error: err1 } = await supabase.from('quiz_attempts').select('*', { count: 'exact', head: true });
  console.log("quiz_attempts count:", attCount, "error:", err1?.message);

  console.log("Checking quizzes count...");
  const { data: quizzes, error: err2 } = await supabase.from('quizzes').select('id, title');
  console.log("quizzes count:", quizzes?.length, "error:", err2?.message);

  if (quizzes && quizzes.length > 0) {
    console.log("Deleting quiz attempts...");
    const { error: delAttErr } = await supabase.from('quiz_attempts').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    console.log("quiz_attempts deleted, error:", delAttErr?.message);

    console.log("Deleting quizzes...");
    for (const q of quizzes) {
      const { error: delQErr } = await supabase.from('quizzes').delete().eq('id', q.id);
      console.log(`Deleted quiz ${q.id} (${q.title}):`, delQErr?.message || "OK");
    }
  } else {
    console.log("No quizzes to delete in Supabase.");
  }
}

clearDatabase().then(() => console.log("Done database check/clear."));

