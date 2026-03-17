<div align="center">
  <img src="docs/assets/favicon.svg" alt="kraftwerk" width="80" />
  <h1><code>kraftwerk</code></h1>
  <p><strong>German:</strong> <em>/ˈkʁaftvɛʁk/</em> — power plant, factory</p>
  <p>An opinionated fullstack monorepo boilerplate.</p>
</div>

---

## Motivation

Starting a new fullstack project means spending days wiring up tooling, configuring lint rules, setting up a database, connecting frontend to backend, and making everything play nicely in a monorepo — before writing a single line of product code.

**kraftwerk** eliminates that friction. It's a production-ready foundation that gives you:

- A **frontend** (React 19 + Vite + Tailwind v4) and **backend** (Elysia + Bun) already wired together with a Vite dev proxy.
- A **design system** (`@kraftwerk/ui`) with components, Storybook, design tokens, and branding config — ready to customize.
- **Database** (Drizzle ORM + PostgreSQL) with schema-as-code, migration tooling, and Docker Compose for local development.
- **Shared configs** (TypeScript, Biome, Vitest) that enforce consistency across all packages without duplication.
- **AI-ready docs** (AGENTS.md, Copilot instructions) so AI coding tools understand your project from day one.

> Like a power plant generates energy, **kraftwerk** generates the foundation for your fullstack apps.

---

## What's Included

### Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Monorepo** | Turborepo + pnpm | Incremental builds, task caching, workspace protocol |
| **Language** | TypeScript 5.x (strict, ESM) | End-to-end type safety |
| **Frontend** | React 19, Vite 6, Tailwind CSS v4 | Modern rendering, fast HMR, CSS-first theming |
| **Backend** | Elysia + Bun | Type-safe routes, fast startup, built-in TS |
| **Database** | Drizzle ORM + PostgreSQL 17 | Schema-as-code, lightweight migrations, Docker |
| **Design System** | Storybook, tailwind-variants, Base UI | Component docs, variant API, headless accessibility |
| **Lint & Format** | Biome | Single tool replaces ESLint + Prettier |
| **Testing** | Vitest | Fast, native ESM, workspace-aware |
| **Env Validation** | T3 Env + Zod | Runtime-safe environment variables |

### Workspace Structure

```
kraftwerk/
├── packages/
│   ├── frontend/         # Vite + React app (port 5173)
│   ├── backend/          # Elysia + Bun API server (port 3000)
│   ├── ui/               # Design system with Storybook (port 6006)
│   └── config/           # Shared Biome, TypeScript, Vitest configs
├── docs/                 # Specification, ADRs, guides
├── docker-compose.yaml   # PostgreSQL for local development
└── .env.example          # Environment variables template
```

| Package | Scope | Description |
|---------|-------|-------------|
| `packages/frontend` | `@kraftwerk/frontend` | Vite + React app with Tailwind v4, T3 Env, Vite proxy to backend |
| `packages/backend` | `@kraftwerk/backend` | Elysia API with modular routes, Drizzle ORM, CORS plugin |
| `packages/ui` | `@kraftwerk/ui` | Design system: Button, Card, Input, Select, Badge, Switch, Separator, Label, Textarea, Terminal, ThemeToggle, and more |
| `packages/config` | `@kraftwerk/config` | Shared TypeScript, Biome, and Vitest configs (base, react, node presets) |

### UI Components

The `@kraftwerk/ui` package ships with ready-to-use components following the [Design Standard](docs/design-standard.md):

**Primitives** — Button, Input, Select, Textarea, Label, Badge, Separator, Switch

**Layout** — Card (with CardHeader, CardContent, CardTitle)

**Branding** — Logo, ThemeToggle (dark/light), AnimatedTerminal, Terminal, FeatureCard

All components use `tailwind-variants` for styling, `tailwind-merge` for class composition, `data-slot` for slot identification, and theme tokens (no hardcoded hex).

---

## Getting Started

### Prerequisites

- **Node.js** 20+
- **pnpm** 9+
- **Bun** — backend runtime ([bun.sh](https://bun.sh))
- **Docker** — for local PostgreSQL

### Setup

```bash
# Clone the repository
git clone https://github.com/w-arantes/kraftwerk.git
cd kraftwerk

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env

# Start database
pnpm db:up         # Start PostgreSQL via Docker Compose
pnpm db:migrate    # Run Drizzle migrations

# Start development
pnpm dev           # Frontend (5173) + Backend (3000) concurrently
```

### Commands

#### Development

| Command | Description |
|---------|-------------|
| `pnpm dev` | Run frontend + backend concurrently |
| `pnpm dev:frontend` | Frontend only (Vite, port 5173) |
| `pnpm dev:backend` | Backend only (Elysia, port 3000) |
| `pnpm ui:dev` | Storybook (port 6006) |

#### Quality

| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages |
| `pnpm lint` | Lint all workspaces (Biome) |
| `pnpm format` | Check formatting |
| `pnpm format:write` | Apply formatting |
| `pnpm test` | Run tests (Vitest) |

#### Database

| Command | Description |
|---------|-------------|
| `pnpm db:up` | Start PostgreSQL (Docker Compose) |
| `pnpm db:down` | Stop PostgreSQL |
| `pnpm db:generate` | Generate Drizzle migrations |
| `pnpm db:migrate` | Run Drizzle migrations |
| `pnpm db:studio` | Open Drizzle Studio |

#### UI Library

| Command | Description |
|---------|-------------|
| `pnpm ui:dev` | Start Storybook |
| `pnpm ui:build` | Build UI library |
| `pnpm ui:build-storybook` | Build static Storybook |
| `pnpm ui:test` | Run UI component tests |

---

## Using as a Boilerplate

### 1. Clone and rename

```bash
git clone https://github.com/w-arantes/kraftwerk.git my-project
cd my-project
rm -rf .git && git init
```

### 2. Replace the scope

Search and replace `@kraftwerk/` with your scope (e.g. `@myorg/`) across:
- All `package.json` `name` fields and workspace dependencies
- Docs, README, and AGENTS.md references

### 3. Customize branding

- **Colors & fonts**: Edit `packages/ui/src/brand.ts` — single source of truth for palette, font family, and project name.
- **Design tokens**: Edit `packages/ui/src/styles/theme.css` — Tailwind v4 `@theme` block with CSS variables.
- **Storybook theme**: Automatically derived from `brand.ts`.

### 4. Start building

- Add frontend pages in `packages/frontend/src/`
- Add API modules in `packages/backend/src/modules/`
- Add Drizzle tables in `packages/backend/src/db/schema.ts`, then `pnpm db:generate && pnpm db:migrate`
- Add UI components in `packages/ui/src/components/`

See [docs/usage.md](docs/usage.md) for detailed instructions.

---

## Documentation

| Document | Description |
|----------|-------------|
| [Getting Started](docs/getting-started.md) | Prerequisites, install, first run |
| [Usage Guide](docs/usage.md) | Adopting the boilerplate, customization, backend modules |
| [Specification](docs/specification.md) | Full tech stack and architecture decisions |
| [Design Standard](docs/design-standard.md) | Component conversion standard for `@kraftwerk/ui` |
| [AI Guidelines](docs/ai-guidelines.md) | Rules for AI-assisted development |
| [ADR 002 — Fullstack](docs/adr/002-fullstack-architecture.md) | Architecture decision record |

### AI-Assisted Development

kraftwerk ships with structured guidance for AI coding tools. The CLI lets you pick your agent and generates only the relevant files:

| Agent | File(s) | Auto-read by |
|-------|---------|-------------|
| **GitHub Copilot** | `.github/copilot-instructions.md` | Copilot Chat |
| **Cursor** | `.cursor/rules/*.mdc` | Cursor IDE |
| **Claude Code** | `CLAUDE.md` | Claude Code |
| **Universal** | `AGENTS.md` | Any LLM/tool |

See [docs/usage.md#ai-assisted-development](docs/usage.md#ai-assisted-development) for details.

---

## Contributing

Contributions are welcome. The project follows spec-driven development — features start with a spec or ADR before code.

### Setup

```bash
git clone https://github.com/YOUR_USERNAME/kraftwerk.git
cd kraftwerk
pnpm install
cp .env.example .env
pnpm db:up
```

### Workflow

1. **Create a branch**: `git checkout -b feat/your-feature`
2. **Write or update spec** if adding new features (`docs/`, `docs/adr/`)
3. **Implement** the changes
4. **Run quality gates** before committing:

```bash
pnpm lint          # Must pass
pnpm format        # Must pass
pnpm test          # Must pass
```

5. **Submit a pull request**

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add user authentication module
fix: resolve theme toggle flicker on mount
docs: update getting started prerequisites
refactor: extract database connection to plugin
```

### Code Style

- **Exports**: Named exports only, no default exports
- **Types**: Use `import type` for type-only imports
- **Files**: lowercase with hyphens (`user-card.tsx`)
- **Path alias**: Use `@/` for project-relative imports
- **Components**: Follow the [Design Standard](docs/design-standard.md) — `tailwind-variants`, `data-slot`, theme tokens
- **Quality**: No AI slop (unnecessary comments, defensive try/catch, `any` casts, overly nested code)

---

## License

MIT
