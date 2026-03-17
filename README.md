# Kraftwerk

A modern, scalable **monorepo boilerplate** for package distribution. All packages use the `@kraftwerk/` scope.

## Prerequisites

- **Node.js** 20+
- **pnpm** 9+

```bash
npm install -g pnpm@9
```

## Quick start

```bash
pnpm install
pnpm dev      # Run example app (apps/web)
pnpm build    # Build all packages and apps
pnpm lint     # Lint
pnpm format   # Check formatting
pnpm test     # Run tests
```

### UI Development

```bash
pnpm ui:dev           # Start Storybook (port 6006)
pnpm ui:build         # Build UI library
pnpm ui:test          # Run UI tests
```

## Using this boilerplate

- **Clone or fork** the repo, then replace the `@kraftwerk/` scope with your own in all `package.json` files and imports.
- **Customize branding** via design tokens in `packages/ui` (Tailwind v4 `@theme`).
- See **[docs/usage.md](docs/usage.md)** for adopting the boilerplate, adding packages/apps, and publishing.
- See **[docs/getting-started.md](docs/getting-started.md)** for workspace layout and scripts.

## Documentation

- [Docs index](docs/README.md)
- [Specification](docs/specification.md)
- [Getting started](docs/getting-started.md)
- [Usage & boilerplate](docs/usage.md)
- [AI guidelines](docs/ai-guidelines.md)
- [AGENTS.md](AGENTS.md) — Instructions for AI coding agents

### AI-Assisted Development

This boilerplate includes guidance for AI tools:

| Entry Point | Purpose |
|-------------|---------|
| `AGENTS.md` | Universal AI agent instructions |
| `.github/copilot-instructions.md` | GitHub Copilot instructions |
| `.cursor/skills/` | Cursor IDE context-aware skills |

See [docs/usage.md](docs/usage.md#ai-assisted-development) for details on Cursor Skills and MCP usage.

Storybook (when built) documents the design system in `packages/ui`.

## Workspace

| Path              | Package / app     | Purpose                    |
|-------------------|-------------------|----------------------------|
| `packages/config` | @kraftwerk/config | Shared configs (Biome, TS, Vitest) |
| `packages/ui`     | @kraftwerk/ui     | Design system, Storybook   |
| `apps/web`       | @kraftwerk/web    | Example Vite + React app   |
