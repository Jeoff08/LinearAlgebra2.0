-- Run this once in the Supabase SQL editor.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text not null default '',
  role text not null default 'user' check (role in ('admin', 'user')),
  created_at timestamptz not null default now()
);

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

create policy "Read own profile" on public.profiles
  for select to authenticated using (id = auth.uid());

create policy "Update own profile" on public.profiles
  for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

create policy "Notes by owner" on public.notes
  for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "Documents by owner" on public.documents
  for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "Authenticated read pdfs" on public.pdfs
  for select to authenticated using (true);

create policy "Admins write pdfs" on public.pdfs
  for all to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name, role)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data->>'name', 'User'),
    case
      when lower(coalesce(new.email, '')) = 'admin@gmail.com' then 'admin'
      else 'user'
    end
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

insert into storage.buckets (id, name, public)
values ('pdfs', 'pdfs', false)
on conflict (id) do nothing;

create policy "Authenticated read pdf files"
  on storage.objects for select to authenticated
  using (bucket_id = 'pdfs');

create policy "Admins upload pdf files"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'pdfs'
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
  );

create policy "Admins delete pdf files"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'pdfs'
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
  );
