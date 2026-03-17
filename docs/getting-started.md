# Getting Started

## Prerequisites

- **Node.js** 20+
- **pnpm** 9+

Install pnpm if needed:

```bash
npm install -g pnpm@9
```

## Install

From the repository root:

```bash
pnpm install
```

## First Run

- **Example app**: `pnpm dev` — runs the Vite app at `apps/web` (default port typically 5173).
- **UI Development (Storybook)**: `pnpm ui:dev` — runs Storybook at `http://localhost:6006`.

## Workspace Layout Overview

```
kraftwerk/
├── apps/web          # Example Vite + React app (@kraftwerk/web)
├── packages/config   # Shared configs (@kraftwerk/config)
├── packages/ui      # Design system & components (@kraftwerk/ui)
├── docs/            # Specification and guides
└── .github/         # CI/CD workflows
```

Apps and packages are wired via pnpm workspaces and Turborepo. The example app consumes `@kraftwerk/ui` and `@kraftwerk/config`.

## Key Scripts

### Monorepo Scripts

| Script | Description |
|--------|-------------|
| `pnpm install` | Install all dependencies |
| `pnpm dev` | Start dev server for the example app |
| `pnpm build` | Build all packages and apps |
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

Run scripts from the **repository root** to affect the whole monorepo, or from a package/app directory to run only for that workspace.

## Next Steps

- [Usage & Boilerplate](usage.md) — Adopting the boilerplate, adding packages/apps
- [Specification](specification.md) — Tech stack and architecture
- [Design Standard](design-standard.md) — Component conventions for `@kraftwerk/ui`
