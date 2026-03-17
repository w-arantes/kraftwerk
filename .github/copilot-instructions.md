# GitHub Copilot — Repository Instructions

Kraftwerk is a monorepo boilerplate for package distribution. Follow these rules when suggesting code.

## Conventions

- **Exports**: Named exports only; no default exports.
- **Types**: Use `import type` for type-only imports.
- **Path alias**: Use `@/` for project imports (configured in TypeScript and Biome).
- **Files**: Lowercase with hyphens (e.g. `user-card.tsx`).
- **Spec-first**: Do not add significant features without an updated spec or ADR in `docs/`.

## Workspace

- Packages: `packages/config` (@kraftwerk/config), `packages/ui` (@kraftwerk/ui).
- Apps: `apps/web` (Vite + React). Use `@kraftwerk/config` and `@kraftwerk/ui`.
- Lint/format: Biome. Tests: Vitest. Env: T3 Env + Zod.

## Components (packages/ui)

- Use `tailwind-variants` and `tailwind-merge`; add `data-slot` on root elements; use theme tokens (no hex). See `docs/design-standard.md`.

## Quality

- Before suggesting a commit, ensure: `pnpm lint`, `pnpm format`, `pnpm test` pass. Prefer minimal, clear code; avoid unnecessary comments or defensive try/catch.

For full guidelines and architecture, see `docs/ai-guidelines.md` and `docs/specification.md`.
