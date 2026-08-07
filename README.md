# Sleep Atlas

Sleep intelligence and fatigue management platform for shift workers, night workers and rotating rota professionals.

**Stack:** Next.js 14 (App Router, fully static/SSR), TypeScript, Tailwind CSS. Supabase and Stripe are stubbed, ready to wire.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5001
npm run build    # production build (all routes pre-render as static HTML)
```

Note: if `node_modules` looks partial from a previous install, just run `npm install` again — it self-repairs.

## What's here

| Route | Purpose |
|---|---|
| `/` | Hero, interactive rota visualizer, bento tools grid, founder authority, Mask AI feature |
| `/tools/` | Hub + 5 calculators: Night Shift Recovery, Rota Flip-Flop, Sleep Debt Logger, Noise Calibration, Chronotype Matcher |
| `/mask-ai/` | Mask AI — built-in Web Audio engine, 13 synthesized layers. Free: white/pink/brown + 30/60/90-min fade-out timer. Premium: rain, thunderstorm, waves, forest, stream, wind, campfire, crickets, cabin hum, fan, saved personal mixes, blend questionnaire, custom timer lengths & wake-up fade-in alarm. `/lullai/` permanently redirects here. |
| `/account/` | Sign up / log in and plan management (demo auth in this browser until Supabase is wired) |
| `/admin/` | Member dashboard — visible only to the admin email in `lib/auth.ts`: signups, plans, upgrade/downgrade |
| `/trackers/` | Shift journal (browser localStorage; premium sync stubbed) |
| `/scores/` | Sleep Atlas Score framework explainer |
| `/resources/` | Modular article engine — 6 categories, 3 flagship articles live |
| `/shop/` | Curated affiliate gear (links are `#` placeholders) |
| `/pricing/` | Free vs Premium (£4.99/mo · £39/yr), Stripe checkout stubbed |

## Architecture — how to extend (zero structural changes)

- **New calculator:** add an entry to `lib/tools.ts` + one component in `components/calculators/` + a thin page wrapper. Explainer, how-it-works, FAQs and all schema render automatically via `ToolPageLayout`.
- **New article:** add one object to `lib/articles.ts`. Page, category, sitemap, Article + FAQPage schema and author box are automatic.
- **Brand/founder facts:** single source of truth in `lib/site.ts`.

## SEO / GEO / AEO built-in

- Every page pre-renders complete HTML — all explainers, FAQs and quick answers are crawlable in one pass (no client-side content).
- Automatic JSON-LD per route type: Organization (site-wide), WebApplication + FAQPage + Breadcrumb (tools), Article with founder nested as author + FAQPage (resources), Product → Organization (shop).
- `robots.ts` explicitly allows GPTBot, PerplexityBot, ClaudeBot, Google-Extended etc.; `sitemap.ts` auto-includes every tool and article.
- YMYL-safe language throughout: shift fatigue, rota adaptation, sleep debt management — no clinical/diagnostic terms.

## Activating the stubs

- **Supabase:** see `lib/supabase.ts` — install `@supabase/supabase-js`, add env keys. Then swap the demo function bodies in `lib/auth.ts` for Supabase Auth + a `profiles` table (components only call those functions, nothing else changes) — the admin dashboard will then show every real signup.
- **Stripe:** replace the "Become a founding member" link in `app/pricing/page.tsx` with a checkout session route, and remove the free "Activate Premium" button in `components/AccountPanel.tsx`.
- **Domain:** update `SITE.url` in `lib/site.ts` (currently `sleepatlas.co.uk` placeholder) before deploying to Vercel.
- **Affiliate links:** replace `#` hrefs in `app/shop/page.tsx` (`GEAR` array).
