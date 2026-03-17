# Usage & Boilerplate Guide

This document describes how to use Kraftwerk as a boilerplate and how to customize or extend it.

## Adopting the Boilerplate

### Using the CLI (recommended)

```bash
npx @kraftwerk/create
```

The CLI scaffolds a new project using your **project name as the package scope**. For example, naming your project `my-app` generates `@my-app/frontend`, `@my-app/backend`, `@my-app/ui`, and `@my-app/config` — not `@kraftwerk/*`. This makes every scaffold unique to your project.

The CLI also asks which **AI coding agent** you use and generates only the relevant instruction files:

| Agent | Generated files |
|-------|----------------|
| **GitHub Copilot** | `.github/copilot-instructions.md` + `AGENTS.md` |
| **Cursor** | `.cursor/rules/*.mdc` (component, docs, quality) + `AGENTS.md` |
| **Claude Code** | `CLAUDE.md` + `AGENTS.md` |
| **All agents** | All of the above |
| **None** | No AI instruction files |

After scaffolding, the CLI runs a **cleanup step** that removes unused files — if you pick "Frontend only", backend files are deleted; if you pick "Copilot", Cursor and Claude files are removed, etc. The result is a clean project with only what you selected.

### Clone vs Template

- **Clone**: `git clone <repo-url> my-project` then rename scope and branding.
- **Template**: If the repo is used as a GitHub template, create a new repo from it and then customize.

### Renaming the Scope (manual)

1. Replace `@kraftwerk/` with your scope (e.g. `@myorg/`) in:
   - All `package.json` `name` fields
   - All `package.json` dependencies that reference workspace packages
   - Any imports that use the package name in docs or code
2. Update `pnpm-workspace.yaml` if you change package paths.
3. Search for `kraftwerk` in docs, README, and config and replace with your project name where appropriate.

### Initial Cleanup

- Remove or replace frontend content as needed.
- Adjust `docs/` and root `README.md` to match your product.
- Optionally remove packages you do not need (e.g. drop backend if frontend-only).

## Customization

### Design Tokens

- Tokens are defined in `@kraftwerk/ui` (e.g. `packages/ui/src/styles/theme.css`) using Tailwind v4 `@theme`.
- Branding config lives in `packages/ui/src/brand.ts` — edit this for colors, fonts, and project name.
- Do not use hardcoded hex in components; use theme utilities (e.g. `bg-surface`, `text-foreground`).

### Package Scope

- Scope is set by the `name` field in each `package.json` (e.g. `@kraftwerk/config`).
- Use a consistent scope for all packages in the monorepo.

### Adding Packages

1. Create a new directory under `packages/` (e.g. `packages/my-pkg`).
2. Add a `package.json` with `name: "@kraftwerk/my-pkg"` (or your scope), `version`, and `exports`.
3. Add the package to the Turborepo pipeline in `turbo.json` if it has `build`, `lint`, or `test` scripts.
4. Add TypeScript (and optionally Biome) config; extend from `@kraftwerk/config` where possible.
5. From root, run `pnpm install` so the workspace links the new package.
6. Add the package as a dependency to any package that uses it.

### Backend Modules

1. Create a new directory under `packages/backend/src/modules/` (e.g. `modules/users/`).
2. Add a `route.ts` with an Elysia instance and prefix (e.g. `new Elysia({ prefix: "/users" })`).
3. Register the module in `src/index.ts` with `.use(usersRoute)`.
4. Add Drizzle schema tables in `src/db/schema.ts`, then run `pnpm db:generate` and `pnpm db:migrate`.

## Publishing

- **semantic-release**: Configured for conventional commits; see `.releaserc`.
- **Private registry**: In initial setup, release is **not** run (workflow gated or disabled). When enabling:
  - Set registry URL in `.releaserc` or via env.
  - Configure npm auth in CI (e.g. `NPM_TOKEN`).
  - Ensure package `name` and `publishConfig` match the registry.

## AI-Assisted Development

Kraftwerk provides AI guidance to ensure consistent, high-quality code generation across different tools and LLMs. The CLI generates only the files for your chosen agent.

### Supported Agents

| Agent | File(s) | Format |
|-------|---------|--------|
| **GitHub Copilot** | `.github/copilot-instructions.md` | Markdown, auto-read by Copilot |
| **Cursor** | `.cursor/rules/*.mdc` | MDC with YAML frontmatter + globs |
| **Claude Code** | `CLAUDE.md` | Markdown at repo root, auto-read by Claude |
| **Universal** | `AGENTS.md` | Markdown, works with any LLM/tool |

### Documentation Hierarchy

| Document | Location | Purpose |
|----------|----------|---------|
| **AGENTS.md** | Repository root | Universal AI agent instructions (any LLM/tool) |
| **ai-guidelines.md** | `docs/` | Full AI development guidelines |
| **design-standard.md** | `docs/` | Component patterns for UI package |
| **copilot-instructions.md** | `.github/` | GitHub Copilot repository instructions |
| **CLAUDE.md** | Repository root | Claude Code project instructions |
| **.cursor/rules/*.mdc** | `.cursor/rules/` | Cursor contextual rules (component, docs, quality) |

### MCP Tools

When available, use these MCP servers:

| MCP | Purpose |
|-----|---------|
| **Figma MCP** | Design analysis, design-to-code, FigJam diagrams |
| **shadcn MCP** | Component generation/installation in `@kraftwerk/ui` |
| **Context7 MCP** | Enrich docs with up-to-date library references and examples |

### Using with Other Tools

When using another IDE or LLM (Claude, ChatGPT, etc.):

1. **Point to AGENTS.md**: Paste or reference the root `AGENTS.md` for quick context.
2. **Include relevant docs**: For component work, include `docs/design-standard.md`. For architecture, include `docs/specification.md`.
3. **Maintain consistency**: The canonical docs are tool-agnostic Markdown, usable anywhere.
