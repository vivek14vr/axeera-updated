# Lumen Analytics

Lumen is an AI-powered analytics marketing site built around one product behavior: ask a question in plain English and receive a chart, explanation, and evidence trail.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/components/lumen/lumen-home.tsx` — Lumen homepage and interactive sections
- `src/data/lumen.ts` — editable copy, feature content, plans, and FAQ data
- `src/app/page.tsx` — homepage entry point

The project uses the Next.js App Router, TypeScript, Tailwind CSS, Motion, Lucide React, and `next/font`. The hero query console is keyboard accessible and respects `prefers-reduced-motion`.
