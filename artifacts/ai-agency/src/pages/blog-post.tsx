import React, { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Calendar, User, ArrowUpRight, Share2, Check } from "lucide-react";
import { blogStore, type BlogPost } from "@/lib/blog-store";

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

  useEffect(() => {
    if (!slug) { setPost(null); return; }
    blogStore.getBySlug(slug).then((data) => setPost(data));
  }, [slug]);

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
              prose-li:pl-1
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-20 mb-16 border border-white/8 hover:border-blue-500/30 transition-colors duration-300 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute -z-0 size-72 -top-20 -right-20 rounded-full bg-blue-600/10 blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700" />
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Pronto para transformar seu negócio?
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
              Fale com um especialista<br className="hidden md:block" /> da AG Labs
            </h3>
            <p className="text-white/40 text-sm mb-8 max-w-sm leading-relaxed">
              Automatize processos, crie agentes de IA e construa soluções sob medida para o seu negócio.
            </p>
            <Link href="/">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors cursor-pointer">
                Falar com especialista <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
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
