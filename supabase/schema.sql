-- Run this in the Supabase SQL editor.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text not null default '',
  block text not null default '',
  avatar_url text not null default '',
  role text not null default 'user' check (role in ('admin', 'user')),
  created_at timestamptz not null default now()
);

-- Ensure block and avatar_url columns exist if table was created previously
alter table public.profiles add column if not exists block text not null default '';
alter table public.profiles add column if not exists avatar_url text not null default '';

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default '',
  content text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null default '',
  file_path text,
  meta_json text not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.pdfs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  file_name text not null,
  storage_path text not null,
  uploaded_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.notes enable row level security;
alter table public.documents enable row level security;
alter table public.pdfs enable row level security;

-- Profiles policies
drop policy if exists "Read own profile" on public.profiles;
drop policy if exists "Authenticated read profiles" on public.profiles;
create policy "Authenticated read profiles" on public.profiles
  for select to authenticated using (true);

drop policy if exists "Users insert own profile" on public.profiles;
create policy "Users insert own profile" on public.profiles
  for insert to authenticated with check (id = auth.uid());

drop policy if exists "Update own profile" on public.profiles;
create policy "Update own profile" on public.profiles
  for update to authenticated using (
    id = auth.uid() or exists (
      select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'
    )
  ) with check (
    id = auth.uid() or exists (
      select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'
    )
  );

-- Notes policies
drop policy if exists "Notes by owner" on public.notes;
create policy "Notes by owner" on public.notes
  for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Documents policies
drop policy if exists "Documents by owner" on public.documents;
create policy "Documents by owner" on public.documents
  for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

-- PDFs policies
drop policy if exists "Authenticated read pdfs" on public.pdfs;
create policy "Authenticated read pdfs" on public.pdfs
  for select to authenticated using (true);

drop policy if exists "Admins write pdfs" on public.pdfs;
create policy "Admins write pdfs" on public.pdfs
  for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Trigger for new user profiles
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name, block, role)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data->>'name', 'User'),
    coalesce(new.raw_user_meta_data->>'block', ''),
    case
      when lower(coalesce(new.email, '')) = 'admin@gmail.com' then 'admin'
      else 'user'
    end
  )
  on conflict (id) do update set
    name = excluded.name,
    block = excluded.block;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Storage bucket
insert into storage.buckets (id, name, public)
values ('pdfs', 'pdfs', false)
on conflict (id) do nothing;

drop policy if exists "Authenticated read pdf files" on storage.objects;
create policy "Authenticated read pdf files"
  on storage.objects for select to authenticated
  using (bucket_id = 'pdfs');

drop policy if exists "Admins upload pdf files" on storage.objects;
create policy "Admins upload pdf files"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'pdfs'
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
  );

drop policy if exists "Admins delete pdf files" on storage.objects;
create policy "Admins delete pdf files"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'pdfs'
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
  );

-- =========================================================================
-- QUIZ SYSTEM TABLES
-- =========================================================================

-- 1. Quizzes (created by admin)
create table if not exists public.quizzes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  topic text not null default 'Linear Algebra',
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  points_per_item int not null default 1,
  allow_review boolean not null default false
);

-- 2. Quiz Questions (belongs to a quiz)
create table if not exists public.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  question_index int not null default 0,
  prompt text not null,
  option_a text not null,
  option_b text not null,
  option_c text not null,
  option_d text not null,
  correct_answer text not null check (correct_answer in ('A', 'B', 'C', 'D')),
  question_type text default 'multiple_choice',
  correct_answer_text text default ''
);

-- 3. Quiz Attempts (student submissions)
create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  score int not null default 0,
  total_questions int not null default 0,
  answers_json text not null default '[]',
  time_spent_seconds int not null default 0,
  submitted_at timestamptz not null default now()
);

-- Migration safety: ensures column exists on previously created quizzes tables
alter table public.quizzes add column if not exists points_per_item int not null default 1;
alter table public.quizzes add column if not exists allow_review boolean not null default false;

-- Enable RLS
alter table public.quizzes enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_attempts enable row level security;

-- QUIZZES policies: everyone reads, admins write
drop policy if exists "Authenticated read quizzes" on public.quizzes;
create policy "Authenticated read quizzes"
  on public.quizzes for select to authenticated using (true);

drop policy if exists "Admins insert quizzes" on public.quizzes;
create policy "Admins insert quizzes"
  on public.quizzes for insert to authenticated
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

drop policy if exists "Admins update quizzes" on public.quizzes;
create policy "Admins update quizzes"
  on public.quizzes for update to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

drop policy if exists "Admins delete quizzes" on public.quizzes;
create policy "Admins delete quizzes"
  on public.quizzes for delete to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- QUIZ_QUESTIONS policies: everyone reads, admins write
drop policy if exists "Authenticated read quiz_questions" on public.quiz_questions;
create policy "Authenticated read quiz_questions"
  on public.quiz_questions for select to authenticated using (true);

drop policy if exists "Admins insert quiz_questions" on public.quiz_questions;
create policy "Admins insert quiz_questions"
  on public.quiz_questions for insert to authenticated
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

drop policy if exists "Admins update quiz_questions" on public.quiz_questions;
create policy "Admins update quiz_questions"
  on public.quiz_questions for update to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

drop policy if exists "Admins delete quiz_questions" on public.quiz_questions;
create policy "Admins delete quiz_questions"
  on public.quiz_questions for delete to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- QUIZ_ATTEMPTS policies: students insert own, read own; admins read all and delete
drop policy if exists "Students insert own attempts" on public.quiz_attempts;
create policy "Students insert own attempts"
  on public.quiz_attempts for insert to authenticated
  with check (user_id = auth.uid());

drop policy if exists "Students read own attempts" on public.quiz_attempts;
create policy "Students read own attempts"
  on public.quiz_attempts for select to authenticated
  using (
    user_id = auth.uid()
    or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
  );

drop policy if exists "Admins delete attempts" on public.quiz_attempts;
create policy "Admins delete attempts"
  on public.quiz_attempts for delete to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Notify PostgREST to reload schema cache
notify pgrst, 'reload schema';
