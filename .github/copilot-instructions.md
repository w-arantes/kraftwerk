# GitHub Copilot — Repository Instructions

Kraftwerk is an opinionated fullstack monorepo boilerplate. Follow these rules when suggesting code.

## Conventions

- **Exports**: Named exports only; no default exports.
- **Types**: Use `import type` for type-only imports.
- **Path alias**: Use `@/` for project imports (configured in TypeScript and Biome).
- **Files**: Lowercase with hyphens (e.g. `user-card.tsx`).
- **Spec-first**: Do not add significant features without an updated spec or ADR in `docs/`.

## Workspace

- Packages: `packages/config` (@kraftwerk/config), `packages/ui` (@kraftwerk/ui).
- Frontend: `packages/frontend` (Vite + React). Uses `@kraftwerk/config` and `@kraftwerk/ui`.
- Backend: `packages/backend` (Elysia + Bun). Uses Drizzle ORM + PostgreSQL.
- Lint/format: Biome. Tests: Vitest. Env: T3 Env + Zod.

## Components (packages/ui)

- Use `tailwind-variants` and `tailwind-merge`; add `data-slot` on root elements; use theme tokens (no hex). See `docs/design-standard.md`.

## Backend (packages/backend)

- Elysia modules under `src/modules/`. CORS via `@elysiajs/cors`.
- Drizzle schema in `src/db/schema.ts`. Migrations via `drizzle-kit`.
- Env vars validated with T3 Env + Zod in `src/env.ts`.

## Quality

- Before suggesting a commit, ensure: `pnpm lint`, `pnpm format`, `pnpm test` pass. Prefer minimal, clear code; avoid unnecessary comments or defensive try/catch.

For full guidelines and architecture, see `docs/ai-guidelines.md` and `docs/specification.md`.
