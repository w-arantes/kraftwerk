# AGENTS.md — Instructions for AI Coding Agents

Kraftwerk is an **opinionated fullstack monorepo boilerplate**. All packages use the `@kraftwerk/` scope. Follow the guidelines below when editing this repository.

## Quick Reference

- **Monorepo**: Turborepo + pnpm workspaces
- **Language**: TypeScript (strict), ESM only
- **Frontend**: React 19, Vite 6, Tailwind CSS v4
- **Backend**: Elysia + Bun runtime
- **Database**: Drizzle ORM + PostgreSQL
- **Lint/format**: Biome
- **Tests**: Vitest

## Build & Test Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Run frontend + backend concurrently
pnpm dev:frontend     # Run frontend only (Vite, port 5173)
pnpm dev:backend      # Run backend only (Elysia, port 3000)
pnpm build            # Build all packages
pnpm lint             # Lint all workspaces
pnpm format           # Format all workspaces (check)
pnpm format:write     # Format and write
pnpm test             # Run tests (Vitest)
```

### UI Package Commands (`ui:*`)

```bash
pnpm ui:dev           # Start Storybook (port 6006)
pnpm ui:build         # Build UI library
pnpm ui:test          # Run UI tests
pnpm ui:lint          # Lint UI package
```

### Database Commands (`db:*`)

```bash
pnpm db:up            # Start PostgreSQL (Docker Compose)
pnpm db:down          # Stop PostgreSQL
pnpm db:generate      # Generate Drizzle migrations
pnpm db:migrate       # Run Drizzle migrations
pnpm db:studio        # Open Drizzle Studio
```

## Workspace Layout

| Path | Name | Role |
|------|------|------|
| `packages/config` | @kraftwerk/config | Biome, TypeScript, Vitest configs |
| `packages/ui` | @kraftwerk/ui | Design system, Storybook |
| `packages/frontend` | @kraftwerk/frontend | Vite + React app |
| `packages/backend` | @kraftwerk/backend | Elysia + Bun API server |

## Code Style

- **Exports**: Named exports only; no default exports
- **Types**: Use `import type` for type-only imports
- **Imports**: Use `@` path alias; no inline imports
- **Files**: lowercase with hyphens (e.g. `user-card.tsx`)
- **Components** (in `@kraftwerk/ui`): Use `tailwind-variants` + `tailwind-merge`, `data-slot` on root, theme tokens (no hex). See `docs/design-standard.md`

## Quality Checklist (before commit/PR)

1. **Lint**: `pnpm lint` passes
2. **Format**: `pnpm format` passes (or run `pnpm format:write`)
3. **Test**: `pnpm test` passes
4. **Deslop**: Remove AI slop from the diff vs main:
   - Unnecessary comments
   - Defensive try/catch in trusted paths
   - Casts to `any` used only to bypass types
   - Overly nested code (prefer early returns)
   - Keep behavior unchanged

## Documentation

- **Spec & architecture**: `docs/specification.md`, `docs/adr/`
- **AI guidelines**: `docs/ai-guidelines.md`
- **Component standard**: `docs/design-standard.md`
- **Getting started**: `docs/getting-started.md`
- **Boilerplate usage**: `docs/usage.md`
- **Docs index**: `docs/README.md`

## Tool Usage (when available)

- **Figma MCP**: Design analysis and design-to-code for UI work
- **shadcn MCP**: Component generation in `@kraftwerk/ui`
- **Context7 MCP**: Enrich docs with library references and examples

## Important Conventions

- Spec-first: no code before spec/ADR approval for new features
- Exhaustive switch for unions/enums
- Env vars: use T3 Env (`@t3-oss/env-core` or `env-nextjs`) with Zod; no raw `process.env` / `import.meta.env` without validation
