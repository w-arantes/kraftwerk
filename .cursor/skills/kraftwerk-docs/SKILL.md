---
name: kraftwerk-docs
description: Spec-first doc workflow and use of Context7 MCP for enriching docs. Use when writing or updating specification, ADRs, or project documentation.
---

# Kraftwerk Docs Workflow

When creating or updating project documentation, follow the canonical guidelines and use tooling when available.

## Authority

- [docs/ai-guidelines.md](../../docs/ai-guidelines.md) — Full AI development guidelines
- [docs/specification.md](../../docs/specification.md) — Tech stack and architecture

## Rules

- **Spec-first**: Do not implement features before the spec or ADR is written and approved.
- **Format**: Plain Markdown; no tool-specific syntax. Keep docs concise; link to other docs instead of duplicating.
- **Consistency**: When updating docs, ensure all related documents are also updated (e.g., README, AGENTS.md, getting-started.md).

## MCP Tools

When available, use these tools to enrich documentation:

| MCP | Usage |
|-----|-------|
| **Context7 MCP** | Enrich docs with up-to-date library references, API examples, and code snippets (React, Tailwind, Base UI, Vitest, T3 Env) |
| **Figma MCP** | Design analysis and design-to-code when working from Figma designs |
| **shadcn MCP** | Component generation/installation patterns for `@kraftwerk/ui` |

### Context7 MCP Example

To get documentation for a library:

1. Call `resolve-library-id` with the library name (e.g., "react", "tailwindcss")
2. Call `get-library-docs` with the resolved ID and topic

## Doc Locations

| Type | Location |
|------|----------|
| Spec & ADRs | `docs/specification.md`, `docs/adr/` |
| Guidelines | `docs/ai-guidelines.md`, `docs/design-standard.md` |
| Onboarding | `docs/getting-started.md`, `docs/usage.md` |
| Index | `docs/README.md` |
| AI Agents | `AGENTS.md` (root), `.github/copilot-instructions.md` |
| Cursor Skills | `.cursor/skills/` |

## Updating Documentation Checklist

When making changes that affect documentation:

1. Update the primary doc (e.g., `specification.md`)
2. Update `AGENTS.md` if commands or conventions changed
3. Update `getting-started.md` if scripts or setup changed
4. Update `usage.md` if workflows or tools changed
5. Update `docs/README.md` index if new docs were added
