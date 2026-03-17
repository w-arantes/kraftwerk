<div align="center">
  <img src="assets/favicon.svg" alt="kraftwerk" width="60" />
  <h1><code>kraftwerk</code> Documentation</h1>
  <p><strong>German:</strong> <em>/ˈkʁaftvɛʁk/</em> — power plant, factory</p>
</div>

---

## Specification & Architecture

- [**Specification**](specification.md) — Project overview, tech stack, workspace layout, branding, design tokens
- [**ADR 001 — Initial Architecture**](adr/001-initial-architecture.md) — Decisions and consequences for the monorepo setup
- [**ADR 002 — Fullstack Architecture**](adr/002-fullstack-architecture.md) — Migration to fullstack with Elysia + Bun, Drizzle + PostgreSQL

## Guidelines & Standards

- [**AI Guidelines**](ai-guidelines.md) — Rules for AI-assisted development (spec-first, imports, components, MCP usage)
- [**Design Standard**](design-standard.md) — Design-to-React component conversion standard for `@kraftwerk/ui`

## Getting Started & Usage

- [**Getting Started**](getting-started.md) — Prerequisites, install, first run, workspace layout, key scripts
- [**Usage & Boilerplate**](usage.md) — Adopting the boilerplate, customization, adding packages, backend modules

---

## AI Development Entry Points

The CLI generates instruction files based on your chosen agent. Possible entry points:

| Entry Point | Location | Agent |
|-------------|----------|-------|
| **AGENTS.md** | Repository root | Universal (any LLM/tool) |
| **copilot-instructions.md** | `.github/` | GitHub Copilot |
| **CLAUDE.md** | Repository root | Claude Code |
| **.cursor/rules/*.mdc** | `.cursor/rules/` | Cursor IDE |

---

## Package Layout

| Path | Purpose |
|------|---------|
| `packages/config` | Shared Biome, TypeScript, Vitest configs |
| `packages/ui` | Design system, Storybook |
| `packages/frontend` | Vite + React application |
| `packages/backend` | Elysia + Bun API server |
