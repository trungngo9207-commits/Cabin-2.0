<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Cabin 2.0

Student demo by team 3 KAIZENZ: a Cabin Tòa D seat-booking app and a three.js 3D model, shown inside a portal shell styled after FTU Gate. It is **not** the official FTU system; keep the "BẢN DEMO" banner, the `noindex` settings and the README disclaimer.

## Commands
- `npm run dev`: dev server at http://localhost:3000
- `npm run check`: lint + typecheck + build (run before committing)

## Layout
- `src/app/layout.tsx` wraps every page in `PortalShell` (header, demo banner, sidebar).
- `src/components/sites/ftugate/nav.ts` holds the menus; `EmbeddedApp.tsx` embeds a static app in an iframe with a fullscreen toggle.
- `public/sites/ftugate/dang-ky-cabin.html` (booking app) and `cabin-toa-d.html` (3D model) are standalone HTML/JS files. Keep `lang="vi"`, `data-theme="light"` and the `noindex` meta on their `<html>`/`<head>`.
- Shared numbers must stay in sync between the two HTML files (group cabins seat 9, Cabin 3 has 7 seats).

## Code style
- TypeScript strict, named exports, 2-space indentation, Tailwind utilities.
- UI text is Vietnamese.
