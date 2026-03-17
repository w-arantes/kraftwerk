# ADR 001: Initial Architecture

## Status

Accepted.

## Context

We need a scalable monorepo for **package distribution** with shared tooling, a design system, and an example application. The setup must support strict TypeScript, modern React, type-safe env handling, and consistent quality checks across packages and apps.

## Decisions

| Area | Decision | Rationale |
|------|----------|-----------|
| Monorepo | Turborepo | Fast, cache-aware builds; widely adopted |
| Package manager | pnpm | Strict dependency resolution; workspace protocol |
| Lint/format | Biome | Single tool, fast; replaces ESLint + Prettier |
| CSS | Tailwind v4 | `@theme` and CSS variables; design tokens |
| Headless UI | Base UI React | Unstyled, accessible; full control over styles |
| Env vars | T3 Env + Zod | Type-safe, runtime-validated env; server/client separation |
| Workflow | Spec-first | Spec and ADRs before code; approval gate |

## Consequences

- **ESM only**: All packages and apps use ESM; no CommonJS.
- **Strict TypeScript**: Enabled globally; no implicit any.
- **No default exports**: Named exports only for consistency and tree-shaking.
- **Component pattern**: `data-slot` on root elements; state via `data-[state]`; see Design Standard.
- **Validated env**: Environment variables are validated at build/runtime via T3 Env; invalid config fails early.
- **Single source of style**: Lint and format rules live in `@kraftwerk/config`; all workspaces extend them.

## References

- [Specification](../specification.md)
- [Design Standard](../design-standard.md)
