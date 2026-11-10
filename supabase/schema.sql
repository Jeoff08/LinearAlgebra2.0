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

-- Ensure block, avatar_url, subject_code, offer_number, student_id, and id_number columns exist if table was created previously
alter table public.profiles add column if not exists block text not null default '';
alter table public.profiles add column if not exists avatar_url text not null default '';
alter table public.profiles add column if not exists subject_code text not null default '';
alter table public.profiles add column if not exists offer_number text not null default '';
alter table public.profiles add column if not exists student_id text not null default '';
alter table public.profiles add column if not exists id_number text not null default '';

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
  insert into public.profiles (id, email, name, student_id, id_number, block, subject_code, offer_number, role)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data->>'name', 'User'),
    coalesce(new.raw_user_meta_data->>'student_id', new.raw_user_meta_data->>'id_number', ''),
    coalesce(new.raw_user_meta_data->>'id_number', new.raw_user_meta_data->>'student_id', ''),
    coalesce(new.raw_user_meta_data->>'block', ''),
    coalesce(new.raw_user_meta_data->>'subject_code', ''),
    coalesce(new.raw_user_meta_data->>'offer_number', ''),
    case
      when lower(coalesce(new.email, '')) = 'admin@gmail.com' then 'admin'
      else 'user'
    end
  )
  on conflict (id) do update set
    name = excluded.name,
    student_id = excluded.student_id,
    id_number = excluded.id_number,
    block = excluded.block,
    subject_code = excluded.subject_code,
    offer_number = excluded.offer_number;
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
alter table public.quizzes add column if not exists subject_id text default '';

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

-- =========================================================================
-- STUDENT GRADING MANAGEMENT SYSTEM TABLES
-- =========================================================================

-- 1. Subjects (e.g. MATH 101, MATH 103, GEC 4)
create table if not exists public.grading_subjects (
  id uuid primary key default gen_random_uuid(),
  subject_code text not null,
  subject_name text not null,
  offer_number text not null default '',
  academic_year text not null default '',
  semester text not null default '',
  section text not null default '',
  instructor_name text not null default '',
  instructor_id uuid references auth.users(id) on delete set null,
  grades_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Ensure grades_published column exists if table was previously created
alter table public.grading_subjects add column if not exists grades_published boolean not null default false;

-- Store full grading records as JSON document for instant, reliable cloud sync
create table if not exists public.grading_records (
  id text primary key,
  subject_id text not null,
  subject_code text not null default '',
  offer_number text not null default '',
  grades_published boolean not null default false,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.grading_records enable row level security;

-- Admins can view and manage all grading records
drop policy if exists "Admins manage grading records" on public.grading_records;
create policy "Admins manage grading records"
  on public.grading_records for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Students can read records only when grades_published is true
drop policy if exists "Authenticated read published grading records" on public.grading_records;
create policy "Authenticated read published grading records"
  on public.grading_records for select to authenticated
  using (
    grades_published = true or
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
  );

-- 2. Students roster
create table if not exists public.grading_students (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  student_number text not null default '',
  student_id text not null default '',
  full_name text not null,
  created_at timestamptz not null default now()
);

-- 3. Subject Enrollments
create table if not exists public.grading_enrollments (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.grading_subjects(id) on delete cascade,
  student_id uuid not null references public.grading_students(id) on delete cascade,
  enrolled_at timestamptz not null default now(),
  unique(subject_id, student_id)
);

-- 4. Grading Activities (Quizzes, Class Participation, Examination per period)
create table if not exists public.grading_activities (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.grading_subjects(id) on delete cascade,
  period text not null check (period in ('prelim', 'midterm', 'semi-final', 'final')),
  activity_type text not null check (activity_type in ('quiz', 'participation', 'exam')),
  activity_index int not null default 0,
  label text not null,
  max_score numeric(6, 2) not null default 0,
  created_at timestamptz not null default now()
);

-- 5. Student Scores
create table if not exists public.grading_scores (
  id uuid primary key default gen_random_uuid(),
  activity_id uuid not null references public.grading_activities(id) on delete cascade,
  student_id uuid not null references public.grading_students(id) on delete cascade,
  score numeric(6, 2),
  updated_at timestamptz not null default now(),
  unique(activity_id, student_id)
);

-- 6. Computed Period Grades (cached computation snapshot)
create table if not exists public.grading_period_computations (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.grading_subjects(id) on delete cascade,
  student_id uuid not null references public.grading_students(id) on delete cascade,
  period text not null check (period in ('prelim', 'midterm', 'semi-final', 'final')),
  total_quiz_score numeric(6, 2) not null default 0,
  max_quiz_score numeric(6, 2) not null default 0,
  quiz_transmuted numeric(6, 3) not null default 0,
  total_participation_score numeric(6, 2) not null default 0,
  max_participation_score numeric(6, 2) not null default 0,
  participation_transmuted numeric(6, 3) not null default 0,
  exam_score numeric(6, 2) not null default 0,
  max_exam_score numeric(6, 2) not null default 0,
  exam_transmuted numeric(6, 3) not null default 0,
  total_grade numeric(6, 3) not null default 0,
  rounded_grade int not null default 0,
  grade_equivalent numeric(4, 2),
  is_complete boolean not null default false,
  computed_at timestamptz not null default now(),
  unique(subject_id, student_id, period)
);

-- 7. Grade Equivalent Lookup Table (exact eqgrade worksheet reproduction)
create table if not exists public.grading_grade_equivalents (
  numerical_grade int primary key check (numerical_grade between 0 and 100),
  grade_equivalent numeric(4, 2) not null,
  remarks text not null default ''
);

-- Seed eqgrade lookup table
insert into public.grading_grade_equivalents (numerical_grade, grade_equivalent, remarks) values
  (100, 1.00, 'Passed'), (99, 1.00, 'Passed'), (98, 1.00, 'Passed'), (97, 1.00, 'Passed'), (96, 1.00, 'Passed'),
  (95, 1.00, 'Passed'), (94, 1.10, 'Passed'), (93, 1.20, 'Passed'), (92, 1.30, 'Passed'), (91, 1.40, 'Passed'),
  (90, 1.50, 'Passed'), (89, 1.60, 'Passed'), (88, 1.70, 'Passed'), (87, 1.80, 'Passed'), (86, 1.90, 'Passed'),
  (85, 2.00, 'Passed'), (84, 2.10, 'Passed'), (83, 2.20, 'Passed'), (82, 2.30, 'Passed'), (81, 2.40, 'Passed'),
  (80, 2.50, 'Passed'), (79, 2.60, 'Passed'), (78, 2.70, 'Passed'), (77, 2.80, 'Passed'), (76, 2.90, 'Passed'),
  (75, 3.00, 'Passed'), (74, 3.10, 'Conditional'), (73, 3.20, 'Conditional'), (72, 3.30, 'Conditional'), (71, 3.40, 'Conditional'),
  (70, 3.50, 'Conditional'), (69, 3.60, 'Conditional'), (68, 3.70, 'Conditional'), (67, 3.80, 'Conditional'), (66, 3.90, 'Conditional'),
  (65, 4.00, 'Conditional'), (64, 4.10, 'Conditional'), (63, 4.20, 'Conditional'), (62, 4.30, 'Conditional'), (61, 4.40, 'Conditional'),
  (60, 4.50, 'Conditional'), (59, 4.60, 'Conditional'), (58, 4.70, 'Conditional'), (57, 4.80, 'Conditional'), (56, 4.90, 'Conditional'),
  (55, 5.00, 'Failed'), (54, 5.00, 'Failed'), (53, 5.00, 'Failed'), (52, 5.00, 'Failed'), (51, 5.00, 'Failed'),
  (50, 5.00, 'Failed'), (49, 5.00, 'Failed'), (48, 5.00, 'Failed'), (47, 5.00, 'Failed'), (46, 5.00, 'Failed'),
  (45, 5.00, 'Failed'), (44, 5.00, 'Failed'), (43, 5.00, 'Failed'), (42, 5.00, 'Failed'), (41, 5.00, 'Failed'),
  (40, 5.00, 'Failed'), (39, 5.00, 'Failed'), (38, 5.00, 'Failed'), (37, 5.00, 'Failed'), (36, 5.00, 'Failed'),
  (35, 5.00, 'Failed'), (34, 5.00, 'Failed'), (33, 5.00, 'Failed'), (32, 5.00, 'Failed'), (31, 5.00, 'Failed'),
  (30, 5.00, 'Failed'), (29, 5.00, 'Failed'), (28, 5.00, 'Failed'), (27, 5.00, 'Failed'), (26, 5.00, 'Failed'),
  (25, 5.00, 'Failed'), (24, 5.00, 'Failed'), (23, 5.00, 'Failed'), (22, 5.00, 'Failed'), (21, 5.00, 'Failed'),
  (20, 5.00, 'Failed'), (19, 5.00, 'Failed'), (18, 5.00, 'Failed'), (17, 5.00, 'Failed'), (16, 5.00, 'Failed'),
  (15, 5.00, 'Failed'), (14, 5.00, 'Failed'), (13, 5.00, 'Failed'), (12, 5.00, 'Failed'), (11, 5.00, 'Failed'),
  (10, 5.00, 'Failed'), (9, 5.00, 'Failed'), (8, 5.00, 'Failed'), (7, 5.00, 'Failed'), (6, 5.00, 'Failed'),
  (5, 5.00, 'Failed'), (4, 5.00, 'Failed'), (3, 5.00, 'Failed'), (2, 5.00, 'Failed'), (1, 5.00, 'Failed'),
  (0, 5.00, 'Failed')
on conflict (numerical_grade) do update set
  grade_equivalent = excluded.grade_equivalent,
  remarks = excluded.remarks;

-- Enable RLS on Grading Tables
alter table public.grading_subjects enable row level security;
alter table public.grading_students enable row level security;
alter table public.grading_enrollments enable row level security;
alter table public.grading_activities enable row level security;
alter table public.grading_scores enable row level security;
alter table public.grading_period_computations enable row level security;
alter table public.grading_grade_equivalents enable row level security;

-- GRADING RLS Policies
-- Grade equivalents lookup table: readable by all authenticated users
drop policy if exists "Authenticated read grade equivalents" on public.grading_grade_equivalents;
create policy "Authenticated read grade equivalents"
  on public.grading_grade_equivalents for select to authenticated using (true);

-- Subjects: readable by authenticated users, manageable by admins
drop policy if exists "Authenticated read grading subjects" on public.grading_subjects;
create policy "Authenticated read grading subjects"
  on public.grading_subjects for select to authenticated using (true);

drop policy if exists "Admins manage grading subjects" on public.grading_subjects;
create policy "Admins manage grading subjects"
  on public.grading_subjects for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Students: readable by authenticated users, manageable by admins
drop policy if exists "Authenticated read grading students" on public.grading_students;
create policy "Authenticated read grading students"
  on public.grading_students for select to authenticated using (true);

drop policy if exists "Admins manage grading students" on public.grading_students;
create policy "Admins manage grading students"
  on public.grading_students for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Enrollments: readable by authenticated users, manageable by admins
drop policy if exists "Authenticated read grading enrollments" on public.grading_enrollments;
create policy "Authenticated read grading enrollments"
  on public.grading_enrollments for select to authenticated using (true);

drop policy if exists "Admins manage grading enrollments" on public.grading_enrollments;
create policy "Admins manage grading enrollments"
  on public.grading_enrollments for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Activities: readable by authenticated users, manageable by admins
drop policy if exists "Authenticated read grading activities" on public.grading_activities;
create policy "Authenticated read grading activities"
  on public.grading_activities for select to authenticated using (true);

drop policy if exists "Admins manage grading activities" on public.grading_activities;
create policy "Admins manage grading activities"
  on public.grading_activities for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Scores: admins manage all; students can read their own scores
drop policy if exists "Admins manage grading scores" on public.grading_scores;
create policy "Admins manage grading scores"
  on public.grading_scores for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

drop policy if exists "Students read own grading scores" on public.grading_scores;
create policy "Students read own grading scores"
  on public.grading_scores for select to authenticated
  using (
    exists (
      select 1 from public.grading_students gs
      where gs.id = grading_scores.student_id and gs.user_id = auth.uid()
    )
  );

-- Computations: admins manage all; students read own computations
drop policy if exists "Admins manage grading computations" on public.grading_period_computations;
create policy "Admins manage grading computations"
  on public.grading_period_computations for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

drop policy if exists "Students read own grading computations" on public.grading_period_computations;
create policy "Students read own grading computations"
  on public.grading_period_computations for select to authenticated
  using (
    exists (
      select 1 from public.grading_students gs
      where gs.id = grading_period_computations.student_id and gs.user_id = auth.uid()
    )
  );

-- Notify PostgREST to reload schema cache
notify pgrst, 'reload schema';
