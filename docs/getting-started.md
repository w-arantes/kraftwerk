# Getting Started

## Prerequisites

- **Node.js** 20+
- **pnpm** 9+
- **Bun** (latest) — backend runtime
- **Docker** — for local PostgreSQL

Install pnpm if needed:

```bash
npm install -g pnpm@9
```

Install Bun if needed:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Install

From the repository root:

```bash
pnpm install
```

## Environment Setup

```bash
cp .env.example .env
```

## Start Database

```bash
pnpm db:up        # Start PostgreSQL via Docker Compose
pnpm db:migrate   # Run Drizzle migrations
```

## First Run

- **Full stack**: `pnpm dev` — runs frontend (port 5173) + backend (port 3000) concurrently.
- **Frontend only**: `pnpm dev:frontend` — Vite dev server at port 5173.
- **Backend only**: `pnpm dev:backend` — Elysia server at port 3000.
- **UI Development (Storybook)**: `pnpm ui:dev` — runs Storybook at `http://localhost:6006`.

## Workspace Layout Overview

```
kraftwerk/
├── packages/frontend  # Vite + React app (@kraftwerk/frontend)
├── packages/backend   # Elysia + Bun API server (@kraftwerk/backend)
├── packages/config    # Shared configs (@kraftwerk/config)
├── packages/ui        # Design system & components (@kraftwerk/ui)
├── docs/              # Specification and guides
└── .github/           # CI/CD workflows
```

Packages are wired via pnpm workspaces and Turborepo. The frontend consumes `@kraftwerk/ui` and `@kraftwerk/config`. The backend uses Drizzle ORM with PostgreSQL.

## Key Scripts

### Monorepo Scripts

| Script | Description |
|--------|-------------|
| `pnpm install` | Install all dependencies |
| `pnpm dev` | Start frontend + backend concurrently |
| `pnpm dev:frontend` | Start frontend only (Vite, port 5173) |
| `pnpm dev:backend` | Start backend only (Elysia, port 3000) |
| `pnpm build` | Build all packages |
| `pnpm lint` | Lint all workspaces (Biome) |
| `pnpm format` | Check formatting (Biome) |
| `pnpm format:write` | Apply formatting |
| `pnpm test` | Run tests (Vitest) |

### UI Package Scripts (`ui:*`)

| Script | Description |
|--------|-------------|
| `pnpm ui:dev` | Start Storybook dev server (port 6006) |
| `pnpm ui:build` | Build the UI library |
| `pnpm ui:build-storybook` | Build static Storybook for deployment |
| `pnpm ui:test` | Run UI component tests |
| `pnpm ui:lint` | Lint UI package only |

### Database Scripts (`db:*`)

| Script | Description |
|--------|-------------|
| `pnpm db:up` | Start PostgreSQL (Docker Compose) |
| `pnpm db:down` | Stop PostgreSQL |
| `pnpm db:generate` | Generate Drizzle migrations |
| `pnpm db:migrate` | Run Drizzle migrations |
| `pnpm db:studio` | Open Drizzle Studio |

Run scripts from the **repository root** to affect the whole monorepo, or from a package directory to run only for that workspace.

## Next Steps

- [Usage & Boilerplate](usage.md) — Adopting the boilerplate, adding packages/apps
- [Specification](specification.md) — Tech stack and architecture
- [Design Standard](design-standard.md) — Component conventions for `@kraftwerk/ui`
