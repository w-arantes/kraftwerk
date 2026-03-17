# Documentation Index

Central index for Kraftwerk specification and guides.

## Specification & Architecture

- [**Specification**](specification.md) — Project overview, tech stack, workspace layout, branding, design tokens
- [**ADR 001 — Initial Architecture**](adr/001-initial-architecture.md) — Decisions and consequences for the monorepo setup

## Guidelines & Standards

- [**AI Guidelines**](ai-guidelines.md) — Rules for AI-assisted development (spec-first, imports, components, MCP usage, Cursor Skills)
- [**Design Standard**](design-standard.md) — Design-to-React component conversion standard for `@kraftwerk/ui`

## Getting Started & Usage

- [**Getting Started**](getting-started.md) — Prerequisites, install, first run, workspace layout, key scripts
- [**Usage & Boilerplate**](usage.md) — Adopting the boilerplate, customization, adding packages/apps, publishing, AI tools, Cursor Skills

## AI Development Entry Points

| Entry Point | Location | Purpose |
|-------------|----------|---------|
| **AGENTS.md** | Repository root | Universal AI agent instructions (any LLM/tool) |
| **copilot-instructions.md** | `.github/` | GitHub Copilot repository instructions |
| **Cursor Skills** | `.cursor/skills/` | Context-aware skills for Cursor IDE |

### Cursor Skills

| Skill | File | Purpose |
|-------|------|---------|
| kraftwerk-component | `.cursor/skills/kraftwerk-component/SKILL.md` | UI component patterns |
| kraftwerk-docs | `.cursor/skills/kraftwerk-docs/SKILL.md` | Spec-first workflow, MCP usage |
| kraftwerk-quality | `.cursor/skills/kraftwerk-quality/SKILL.md` | Quality gates (lint, format, test, deslop) |

## Package Layout

| Path | Purpose |
|------|---------|
| `packages/config` | Shared Biome, TypeScript, Vitest configs |
| `packages/ui` | Design system, Storybook |
| `apps/web` | Example Vite + React application |
