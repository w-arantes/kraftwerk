# Usage & Boilerplate Guide

This document describes how to use Kraftwerk as a boilerplate and how to customize or extend it.

## Adopting the Boilerplate

### Clone vs Template

- **Clone**: `git clone <repo-url> my-project` then rename scope and branding.
- **Template**: If the repo is used as a GitHub template, create a new repo from it and then customize.

### Renaming the Scope

1. Replace `@kraftwerk/` with your scope (e.g. `@myorg/`) in:
   - All `package.json` `name` fields
   - All `package.json` dependencies that reference workspace packages
   - Any imports that use the package name in docs or code
2. Update `pnpm-workspace.yaml` if you change package paths.
3. Search for `kraftwerk` in docs, README, and config and replace with your project name where appropriate.

### Initial Cleanup

- Remove or replace example app content as needed.
- Adjust `docs/` and root `README.md` to match your product.
- Optionally remove or simplify packages you do not need (e.g. keep only `config` and one app initially).

## Customization

### Design Tokens

- Tokens are defined in `@kraftwerk/ui` (e.g. `packages/ui/src/styles/theme.css`) using Tailwind v4 `@theme`.
- Edit `@theme` variables to change the palette (e.g. grey scale, semantic colors).
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
6. Add the package as a dependency to any app or package that uses it.

### Adding Apps

1. Create a new directory under `apps/` (e.g. `apps/next-app`).
2. Scaffold the app (Vite, Next.js, etc.). For Next.js, use `@kraftwerk/config` presets for Biome/TypeScript (e.g. `biome-next`, `typescript/next`).
3. For env vars, use T3 Env: `@t3-oss/env-core` for Vite (prefix `VITE_`), `@t3-oss/env-nextjs` for Next.js (prefix `NEXT_PUBLIC_`).
4. Add the app to `turbo.json` (e.g. `build`, `lint`, `test`).
5. Add the app to the root `package.json` scripts if you want a root-level command (e.g. `pnpm dev:next`).
6. Use workspace packages via `@kraftwerk/ui`, `@kraftwerk/config`, etc.

## Publishing

- **semantic-release**: Configured for conventional commits; see `.releaserc`.
- **Private registry**: In initial setup, release is **not** run (workflow gated or disabled). When enabling:
  - Set registry URL in `.releaserc` or via env.
  - Configure npm auth in CI (e.g. `NPM_TOKEN`).
  - Ensure package `name` and `publishConfig` match the registry.

## AI-Assisted Development

Kraftwerk provides multiple layers of AI guidance to ensure consistent, high-quality code generation across different tools and LLMs.

### Documentation Hierarchy

| Document | Location | Purpose |
|----------|----------|---------|
| **AGENTS.md** | Repository root | Universal AI agent instructions (any LLM/tool) |
| **ai-guidelines.md** | `docs/` | Full AI development guidelines |
| **design-standard.md** | `docs/` | Component patterns for `@kraftwerk/ui` |
| **copilot-instructions.md** | `.github/` | GitHub Copilot repository instructions |

### Cursor Skills

Cursor Skills are project-specific instructions that activate automatically based on context. They live in `.cursor/skills/` and reference the canonical documentation.

| Skill | File | Activates When |
|-------|------|----------------|
| **kraftwerk-component** | `.cursor/skills/kraftwerk-component/SKILL.md` | Creating or editing UI components in `packages/ui` |
| **kraftwerk-docs** | `.cursor/skills/kraftwerk-docs/SKILL.md` | Writing or updating specs, ADRs, or documentation |
| **kraftwerk-quality** | `.cursor/skills/kraftwerk-quality/SKILL.md` | Finishing changes or preparing commits/PRs |

#### How Skills Work

1. **Automatic activation**: Cursor detects the context (e.g., editing a file in `packages/ui`) and loads the relevant skill.
2. **Reference canonical docs**: Skills point to `docs/` files as the source of truth, avoiding duplication.
3. **Enforce patterns**: Each skill summarizes key rules so the AI follows project conventions without reading the full docs every time.

#### Skill: kraftwerk-component

Enforces the Design-to-React standard when working on `@kraftwerk/ui`:

- React 19 patterns (no `forwardRef`)
- `tailwind-variants` + `tailwind-merge` for styling
- `data-slot` on root elements
- Theme tokens only (no hardcoded hex)
- Named exports, lowercase-hyphen filenames

#### Skill: kraftwerk-docs

Enforces spec-first workflow and MCP usage:

- Write spec/ADR before implementing features
- Use **Context7 MCP** to enrich docs with library references
- Use **Figma MCP** for design-to-code workflows
- Use **shadcn MCP** for component generation

#### Skill: kraftwerk-quality

Enforces quality gates before commit/PR:

1. `pnpm lint` must pass
2. `pnpm format` must pass
3. `pnpm test` must pass
4. **Deslop**: Remove AI-generated slop (unnecessary comments, defensive try/catch, `any` casts, nested code)

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
