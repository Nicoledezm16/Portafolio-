# Nicolas Ledezma — Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion · React Hook Form + Zod · Resend

## Run
```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
npm run dev
```

## Customize
- Portrait: replace `public/images/portrait.svg` (or change `site.portrait` in `src/data/site.ts`).
- Social URLs: `src/data/site.ts` (empty URLs are hidden).
- Projects / live URLs: `src/data/projects.ts` (set `live` to enable the button) + text in `src/lib/i18n/*`.
- Blog: `src/data/posts.ts` (set `demo: false` for real posts).
- Translations: `src/lib/i18n/en.ts` and `es.ts` (TypeScript enforces both match).
- Before deploying, set `NEXT_PUBLIC_SITE_URL`; for stronger spam protection add Cloudflare Turnstile and a shared rate limit.
