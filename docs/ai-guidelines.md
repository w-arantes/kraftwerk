# AI Development Guidelines

These guidelines apply to any AI-assisted development in this repository (Cursor, Claude, Copilot, etc.). Canonical source: this document. Tool-specific entry points: `AGENTS.md`, `.github/copilot-instructions.md`, `.cursor/skills/`.

## Cursor Skills

This project includes Cursor Skills (`.cursor/skills/`) that automatically activate based on context:

| Skill | Activates When | Key Rules |
|-------|----------------|-----------|
| `kraftwerk-component` | Editing `packages/ui` components | Design Standard, `data-slot`, theme tokens |
| `kraftwerk-docs` | Writing specs/ADRs/docs | Spec-first, Context7 MCP for enrichment |
| `kraftwerk-quality` | Preparing commits/PRs | Lint, format, test, deslop |

Skills reference this document and `docs/design-standard.md` as the source of truth.

## Spec-First

- Do **not** generate code (including `package.json`, configs, or source) before the specification and relevant ADRs are written and approved.
- When adding features, update or create specs/docs first; then implement.

## Imports

- Use `import type` for TypeScript types to improve tree-shaking.
- Use the `@` path alias for project imports; enforce via Biome and TypeScript.
- Do not use inline or dynamic imports unless required by the use case.

## Component Patterns (`@kraftwerk/ui`)

- **Named exports only**; no default exports.
- Use **tailwind-variants** for variant styling and **tailwind-merge** for `className` merging.
- Add `data-slot="component-name"` to the root element of every component and sub-component.
- Use `data-*` attributes for state (e.g. `data-disabled`, `data-selected`); style with `data-[state]:` in Tailwind.
- Do **not** use `forwardRef`; React 19 patterns only.
- Follow the [Design Standard](design-standard.md) for structure, Base UI usage, and tokens.

## File Naming

- Files: **lowercase with hyphens** (e.g. `user-card.tsx`, `use-modal.ts`).
- Do not create barrel files (`index.ts`) for internal directory structures.

## Unions and Enums

- Use **exhaustive switch** handling for TypeScript unions and enums (no fall-through without explicit handling).

## MCP / Tool Usage (when available)

- **Figma MCP**: Use for design analysis, design-to-code, and FigJam diagrams before UI work.
- **shadcn MCP**: Use for component generation/installation in `@kraftwerk/ui` when applicable.
- **Context7 MCP**: Use to enrich docs with up-to-date library references, API examples, and code snippets.

## Format

- Guidelines are written in **plain Markdown**; no tool-specific syntax.
- Keep docs concise and link to other docs (e.g. Design Standard, specification) instead of duplicating content.

## Quality Gates

Before committing or opening a PR:

1. **Lint**: `pnpm lint` must pass
2. **Format**: `pnpm format` must pass (or run `pnpm format:write`)
3. **Test**: `pnpm test` must pass
4. **Deslop**: Remove AI-generated slop from the diff:
   - Unnecessary or inconsistent comments
   - Defensive try/catch in trusted code paths
   - Casts to `any` used only to bypass type errors
   - Deeply nested code (prefer early returns)
