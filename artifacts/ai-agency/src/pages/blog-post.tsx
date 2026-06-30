import React, { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Calendar, User, ArrowUpRight, Share2, Check, MessageSquare, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogStore, type BlogPost } from "@/lib/blog-store";
import { commentStore, type BlogComment } from "@/lib/comment-store";
import { Seo, SITE_URL } from "@/components/seo";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null | "loading">("loading");
  const [copied, setCopied] = useState(false);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentsError, setCommentsError] = useState("");
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!slug) { setPost(null); return; }
    let cancelled = false;
    blogStore.getBySlug(slug).then((data) => {
      if (cancelled) return;
      setPost(data);
      if (data) {
        setCommentsLoading(true);
        setCommentsError("");
        commentStore.getByPostId(data.id)
          .then((c) => {
            if (!cancelled) setComments(c);
          })
          .catch((err: unknown) => {
            if (!cancelled) {
              const msg = err instanceof Error ? err.message : "Erro ao carregar comentários.";
              setCommentsError(msg);
            }
          })
          .finally(() => {
            if (!cancelled) setCommentsLoading(false);
          });
      }
    }).catch(() => {
      if (!cancelled) setPost(null);
    });
    return () => { cancelled = true; };
  }, [slug]);

  async function handleSubmitComment(e: React.FormEvent) {
    e.preventDefault();
    if (!post || post === "loading") return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const created = await commentStore.create(post.id, commentName.trim(), commentText.trim());
      setComments((prev) => [...prev, created]);
      setCommentName("");
      setCommentText("");
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro ao enviar comentário. Tente novamente.";
      setSubmitError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  const handleShare = async () => {
    const url = window.location.href;
    const title = post && post !== "loading" ? (post as BlogPost).title : "";
    if (navigator.share) {
      try { await navigator.share({ title, url }); } catch (_) {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (post === "loading") {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post || !post.published) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center gap-6">
        <p className="text-8xl font-black text-white/5">404</p>
        <p className="text-white/40">Artigo não encontrado.</p>
        <Link href="/blog">
          <span className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm cursor-pointer transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao blog
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Seo
        title={`${post.title} | AG LABS Intelligence`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.coverImage || undefined}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage || undefined,
            datePublished: post.createdAt,
            dateModified: post.updatedAt,
            author: { "@type": "Person", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "AG LABS Intelligence",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/android-chrome-512x512.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/blog/${post.slug}`,
            },
            articleSection: post.category,
            inLanguage: "pt-BR",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `${SITE_URL}/blog/${post.slug}`,
              },
            ],
          },
        ]}
      />
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <Link href="/blog">
          <span className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            Blog
          </span>
        </Link>
        <button
          onClick={handleShare}
          className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
            copied ? "text-green-400" : "text-white/30 hover:text-white/70"
          }`}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
          {copied ? "Link copiado!" : "Compartilhar"}
        </button>
      </div>

      <main className="pt-14">
        {/* Cover */}
        {post.coverImage && (
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
          </div>
        )}

        {/* Article */}
        <div className={`max-w-3xl mx-auto px-6 md:px-0 ${post.coverImage ? "-mt-32 relative z-10" : "pt-24"}`}>
          <span className="inline-block text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-white/30 pb-8 border-b border-white/8 mb-8">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {formatDate(post.createdAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {post.readTime} min de leitura
            </span>
          </div>

          <p className="text-white/60 text-lg leading-relaxed mb-12 border-l-2 border-blue-500 pl-5">
            {post.excerpt}
          </p>

          <div
            className="prose prose-invert max-w-none
              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-white/50 prose-p:leading-relaxed prose-p:mb-5
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-white/50 prose-ul:my-5 prose-ul:space-y-2
              prose-ol:text-white/50 prose-ol:my-5 prose-ol:space-y-2
              prose-li:pl-1
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-blue-500 prose-blockquote:text-white/40
              prose-code:text-blue-300 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
              prose-hr:border-white/10
              prose-img:rounded-sm"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* CTA */}
          <div className="mt-20 mb-16 border border-white/8 hover:border-blue-500/30 transition-colors duration-300 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute -z-0 size-72 -top-20 -right-20 rounded-full bg-blue-600/10 blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700" />
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Pronto para transformar seu negócio?
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
              Fale com um especialista<br className="hidden md:block" /> da AG LABS
            </h3>
            <p className="text-white/40 text-sm mb-8 max-w-sm leading-relaxed">
              Automatize processos, crie agentes de IA e construa soluções sob medida para o seu negócio.
            </p>
            <a
              href="https://wa.me/5564993259857?text=Olá!%20Tenho%20interesse%20em%20um%20projeto%20personalizado%20com%20a%20AG%20LABS."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
            >
              Falar com especialista <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Comments */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8 border-t border-white/5 pt-10">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-bold text-white">
                Comentários
                {comments.length > 0 && (
                  <span className="ml-2 text-sm text-white/30 font-normal">({comments.length})</span>
                )}
              </h2>
            </div>

            {/* Comment list */}
            {commentsLoading ? (
              <div className="flex items-center gap-2 text-white/30 text-sm mb-10">
                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-transparent rounded-full animate-spin" />
                Carregando comentários...
              </div>
            ) : commentsError ? (
              <p className="text-red-400/70 text-sm mb-10">{commentsError}</p>
            ) : comments.length === 0 ? (
              <p className="text-white/30 text-sm mb-10">Seja o primeiro a comentar.</p>
            ) : (
              <ul className="space-y-6 mb-10">
                {comments.map((c) => (
                  <li key={c.id} className="border border-white/5 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-white">{c.authorName}</span>
                      <span className="text-xs text-white/25">
                        {new Date(c.createdAt).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed whitespace-pre-wrap">{c.content}</p>
                  </li>
                ))}
              </ul>
            )}

            {/* Comment form */}
            <form onSubmit={handleSubmitComment} className="border border-white/8 p-6 space-y-4">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Deixe um comentário</h3>
              <input
                type="text"
                placeholder="Seu nome"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                required
                maxLength={100}
                className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-2.5 placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <div className="relative">
                <textarea
                  placeholder="Escreva seu comentário..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  required
                  maxLength={1000}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-2.5 placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                />
                <span className="absolute bottom-2.5 right-3 text-xs text-white/20 pointer-events-none">
                  {commentText.length}/1000
                </span>
              </div>
              {submitError && (
                <p className="text-red-400 text-xs">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={submitting || !commentName.trim() || !commentText.trim()}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
              >
                {submitting ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : submitSuccess ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {submitSuccess ? "Comentário enviado!" : "Enviar comentário"}
              </button>
            </form>
          </div>

          <div className="pb-16 border-t border-white/5 pt-8">
            <Link href="/blog">
              <span className="flex items-center gap-2 text-white/30 hover:text-white/70 text-sm transition-colors cursor-pointer w-fit">
                <ArrowLeft className="w-4 h-4" /> Voltar para o blog
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
