# Pré-renderização do blog (SSG) — `prerender-blog.mjs`

## O problema que resolve
O site é um **SPA (Vite)** e os posts do blog vêm do **Supabase no cliente**. Crawlers
de IA que **não executam JavaScript** (GPTBot/ChatGPT, ClaudeBot, PerplexityBot…) recebem
o HTML cru — que está **vazio** — e não enxergam o conteúdo dos artigos. Google/Gemini
renderizam JS, mas com atraso/limite. Resultado: o blog ficava **invisível para GEO/AEO**.

## Como funciona
Roda **depois** do `vite build`:
1. Busca os posts publicados no Supabase (`blog_posts`, `published = true`).
2. Renderiza o markdown de cada post com as **mesmas libs do app** (`react-markdown` +
   `remark-gfm`) via `renderToStaticMarkup` — HTML idêntico ao do site.
3. Gera `dist/blog/<slug>/index.html` com o **texto do artigo + JSON-LD `BlogPosting` +
   `BreadcrumbList`** embutidos no HTML, reaproveitando o shell `dist/index.html`
   (mantém os mesmos assets/bundles).
4. Reescreve `dist/sitemap.xml` com home + /blog + todos os posts (sem envelhecer).

Como o `main.tsx` usa `createRoot` (não `hydrate`), quando o JS carrega o React
**substitui** o conteúdo pré-renderizado pelo app normal — sem hydration mismatch.
O Cloudflare Pages serve `dist/blog/<slug>/index.html` diretamente (antes do fallback SPA).

## Requisitos (variáveis de ambiente no build)
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

(São as mesmas que o app já usa. No Cloudflare Pages, configure-as em
Settings → Environment variables, escopo **Production** e **Preview**.)

## Segurança / não-fatal
O passo é **não-fatal**: qualquer erro (Supabase indisponível, env ausente, etc.) só
emite warning e **não quebra o build/deploy**. Sem env, ele apenas pula.

## Como testar (recomendado, antes de mesclar)
Esta mudança está na branch **`feat/blog-prerender`**.
1. `git push` da branch → o Cloudflare Pages cria um **deploy de preview**.
2. No preview, abra um post e veja o **código-fonte** (Ctrl+U) ou:
   `curl -s https://<preview>/blog/<slug> | grep -i "<h1\|BlogPosting"`
   → deve conter o título/HTML do artigo e o JSON-LD **sem precisar de JS**.
3. Confirme que a navegação normal (com JS) continua igual.
4. Se ok, **merge na `main`**.

## Atualizar conteúdo (importante)
O HTML é gerado **no build** → ao **publicar/editar** um post, dispare um **rebuild**.
Opções: (a) redeploy manual no Cloudflare; (b) **Deploy Hook** do Pages chamado por um
**webhook do Supabase** (Database Webhook em `blog_posts`) para rebuild automático.

## Rodar localmente
```bash
# após um build:
VITE_SUPABASE_URL=... VITE_SUPABASE_ANON_KEY=... pnpm --filter @workspace/ai-agency run prerender
```
