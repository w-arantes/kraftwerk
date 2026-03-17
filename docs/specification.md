# Kraftwerk — Open Specification

## Project Overview

Kraftwerk is a modern, scalable **monorepo boilerplate** focused on **package distribution**. All packages use the `@kraftwerk/` scope prefix. The repository follows spec-driven development: specification and architecture decisions are documented before implementation.

## Tech Stack

| Category | Choice | Version / Notes |
|----------|--------|-----------------|
| Monorepo | Turborepo | `^2.8.16` |
| Package manager | pnpm | Workspace protocol |
| Language | TypeScript | 5.x, strict mode globally |
| Module system | ESM | Globally |
| Lint & format | Biome | `^2.4.7` |
| CSS | Tailwind CSS | `^4.2.1` (`@theme`, CSS variables) |
| UI runtime | React | 19 |
| Build (apps) | Vite | 6.x |
| Headless UI | Base UI React | `^1.3.0` |
| Env validation | T3 Env + Zod | `@t3-oss/env-core` |
| Testing | Vitest | All packages |
| Release | semantic-release | Conventional commits |
| Dependencies | Renovate | Automated updates |
| CI/CD | GitHub Actions | Lint, format, build, test, Storybook deploy |

## Workspace Layout

| Path | Package / App | Purpose |
|------|----------------|---------|
| `packages/config` | `@kraftwerk/config` | Centralized Biome, TypeScript, Vitest configs |
| `packages/ui` | `@kraftwerk/ui` | Design system & component library (Storybook) |
| `apps/web` | `@kraftwerk/web` | Example Vite + React app consuming `@kraftwerk/ui` |

## Branding

- **Palette**: Dark/grey; no hardcoded hex in components.
- **Design tokens**: Defined in Tailwind v4 `@theme` (see [Design Tokens](#design-tokens) and `docs/design-standard.md`).

## Design Tokens (Dark/Grey Palette)

- **Surfaces**: `surface`, `surface-raised`, `muted`
- **Text**: `foreground`, `foreground-subtle`, `muted-foreground`
- **Borders**: `border`, `input`
- **Accents**: `primary`, `secondary`, `destructive`, `ring`
- **Palette**: Grey scale (50–950) with semantic mappings

## Integration Points

- **Figma MCP**: Design analysis, design-to-code
- **shadcn MCP**: Component generation/installation in `@kraftwerk/ui` when applicable
- **Context7 MCP**: Doc enrichment (library references, examples)
- **Storybook**: Component docs; deployed to GitHub Pages
- **Registry**: Private npm registry (no deploy in initial setup)

## References

- [ADR 001 — Initial Architecture](adr/001-initial-architecture.md)
- [AI Guidelines](ai-guidelines.md)
- [Design Standard](design-standard.md)
- [Getting Started](getting-started.md)
- [Usage & Boilerplate](usage.md)
