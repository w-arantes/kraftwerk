---
name: kraftwerk-quality
description: Quality checklist before commit or PR — lint, format, test, deslop. Use when finishing a change or preparing to commit.
---

# Kraftwerk Quality Checklist

Before committing or opening a PR, ensure the following.

## Commands

### Monorepo-wide

```bash
pnpm lint         # Lint all workspaces
pnpm format       # Check formatting (or pnpm format:write to fix)
pnpm test         # Run all tests
```

### UI Package Only

```bash
pnpm ui:lint      # Lint UI package
pnpm ui:test      # Run UI tests
```

## Quality Gates

1. **Lint**: `pnpm lint` — must pass with no errors
2. **Format**: `pnpm format` — must pass (or run `pnpm format:write` to fix)
3. **Test**: `pnpm test` — must pass with no failures
4. **Build**: `pnpm build` — must complete without errors

## Deslop

Run deslop (or equivalent) on the diff against main to remove AI-generated slop:

| Pattern | Action |
|---------|--------|
| Unnecessary comments | Remove comments that just describe what code does |
| Defensive try/catch | Remove in trusted code paths where errors are unexpected |
| `any` casts | Replace with proper types or fix the underlying type issue |
| Deeply nested code | Refactor to use early returns |
| Inconsistent patterns | Align with existing codebase conventions |

**Constraint**: Keep behavior unchanged; prefer minimal, focused edits.

## Pre-Commit Checklist

- [ ] `pnpm lint` passes
- [ ] `pnpm format` passes
- [ ] `pnpm test` passes
- [ ] No `any` casts added
- [ ] No unnecessary comments
- [ ] Code follows existing patterns in the file

## Reference

- Full quality and style rules: [AGENTS.md](../../AGENTS.md) (root)
- AI guidelines: [docs/ai-guidelines.md](../../docs/ai-guidelines.md)
