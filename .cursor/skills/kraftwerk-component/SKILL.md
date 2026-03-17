---
name: kraftwerk-component
description: Enforces the Design-to-React conversion standard when creating or editing components in @kraftwerk/ui. Use when adding or changing UI components in packages/ui.
---

# Kraftwerk Component Standard

When working on components in `@kraftwerk/ui`, follow the project Design Standard.

## Authority

Full rules: [docs/design-standard.md](../../docs/design-standard.md)

## Summary

- **Stack**: React 19 (no forwardRef), TypeScript strict, Tailwind v4, Base UI React, tailwind-variants, tailwind-merge.
- **Exports**: Named only; no default exports.
- **Files**: lowercase with hyphens (e.g. `button.tsx`, `user-card.tsx`).
- **Root element**: Add `data-slot="component-name"`; wrap `className` with `twMerge(componentVariants(...), className)`; spread `{...props}` last.
- **Variants**: Define with `tv()` from tailwind-variants; use `VariantProps<typeof variants>` for props.
- **States**: Use data-attributes (`data-disabled`, `data-selected`); style with `data-[state]:` in Tailwind.
- **Colors**: Use theme tokens only (e.g. `bg-surface`, `text-foreground`, `border-border`, `ring-ring`). No hardcoded hex.
- **Focus**: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`.
- **Icons**: Size via classes (`size-4` or `[&_svg]:size-3.5`); icon-only buttons need `aria-label`.
- **Complex UI**: Use `@base-ui/react` (Dialog, Tabs, Select, Menu, etc.).

Defer to the full document for examples and compound-component patterns.

## MCP Tools

When available, use these tools:

- **Figma MCP**: For design-to-code workflows. Call `get_design_context` with fileKey and nodeId to get design specs.
- **shadcn MCP**: For component generation/installation. Use to scaffold new components following project patterns.

## Development Commands

```bash
pnpm ui:dev    # Start Storybook for component development
pnpm ui:test   # Run component tests
pnpm ui:lint   # Lint UI package
```
