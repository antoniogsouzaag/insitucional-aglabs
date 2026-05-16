-- Migration: blog_comments
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor → New query)

create table if not exists blog_comments (
  id           uuid        default gen_random_uuid() primary key,
  post_id      uuid        not null references blog_posts(id) on delete cascade,
  author_name  text        not null,
  content      text        not null,
  created_at   timestamptz default now() not null
);

create index if not exists blog_comments_post_id_idx on blog_comments (post_id);

-- Row Level Security
alter table blog_comments enable row level security;

create policy "public_read_comments"
  on blog_comments for select
  using (true);

create policy "public_insert_comments"
  on blog_comments for insert
  with check (true);
