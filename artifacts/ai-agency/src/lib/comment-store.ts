import { supabase } from "./supabase";

export interface BlogComment {
  id: string;
  postId: string;
  authorName: string;
  content: string;
  createdAt: string;
}

function fromRow(row: Record<string, unknown>): BlogComment {
  return {
    id: row.id as string,
    postId: row.post_id as string,
    authorName: row.author_name as string,
    content: row.content as string,
    createdAt: row.created_at as string,
  };
}

export const commentStore = {
  async getByPostId(postId: string): Promise<BlogComment[]> {
    const { data, error } = await supabase
      .from("blog_comments")
      .select("*")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);
    return (data ?? []).map(fromRow);
  },

  async create(postId: string, authorName: string, content: string): Promise<BlogComment> {
    const { data, error } = await supabase
      .from("blog_comments")
      .insert({ post_id: postId, author_name: authorName, content })
      .select()
      .single();
    if (error) throw new Error(error.message);
    return fromRow(data);
  },
};
