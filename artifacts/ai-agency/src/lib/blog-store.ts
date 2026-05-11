import { supabase } from "./supabase";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author: string;
  readTime: number;
}

function fromRow(row: Record<string, unknown>): BlogPost {
  return {
    id: row.id as string,
    title: row.title as string,
    slug: row.slug as string,
    excerpt: row.excerpt as string,
    content: row.content as string,
    category: row.category as string,
    coverImage: (row.cover_image as string) ?? "",
    published: row.published as boolean,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
    author: row.author as string,
    readTime: (row.read_time as number) ?? 5,
  };
}

export const blogStore = {
  async getAll(): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map(fromRow);
  },

  async getPublished(): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map(fromRow);
  },

  async getBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();
    if (error || !data) return null;
    return fromRow(data);
  },

  async create(post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): Promise<BlogPost> {
    const { data, error } = await supabase
      .from("blog_posts")
      .insert({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        cover_image: post.coverImage,
        published: post.published,
        author: post.author,
        read_time: post.readTime,
      })
      .select()
      .single();
    if (error) throw error;
    return fromRow(data);
  },

  async update(id: string, updates: Partial<BlogPost>): Promise<BlogPost> {
    const db: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (updates.title !== undefined) db.title = updates.title;
    if (updates.slug !== undefined) db.slug = updates.slug;
    if (updates.excerpt !== undefined) db.excerpt = updates.excerpt;
    if (updates.content !== undefined) db.content = updates.content;
    if (updates.category !== undefined) db.category = updates.category;
    if (updates.coverImage !== undefined) db.cover_image = updates.coverImage;
    if (updates.published !== undefined) db.published = updates.published;
    if (updates.author !== undefined) db.author = updates.author;
    if (updates.readTime !== undefined) db.read_time = updates.readTime;

    const { data, error } = await supabase
      .from("blog_posts")
      .update(db)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return fromRow(data);
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) throw error;
  },

  async getCategories(): Promise<string[]> {
    const { data } = await supabase
      .from("blog_posts")
      .select("category")
      .eq("published", true);
    const cats = new Set((data ?? []).map((r) => r.category as string));
    return Array.from(cats);
  },
};
