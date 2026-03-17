<div align="center">
  <img src="docs/assets/favicon.svg" alt="kraftwerk" width="80" />
  <h1><code>kraftwerk</code></h1>
  <p><strong>German:</strong> <em>/ˈkʁaftvɛʁk/</em> — power plant, factory</p>
  <p>A modern monorepo boilerplate for package distribution.</p>
</div>

---

## Why kraftwerk?

> Like a power plant generates energy, **kraftwerk** generates the foundation for your packages.

| Feature | Description |
|---------|-------------|
| **Turborepo** | Incremental builds, remote caching |
| **pnpm** | Fast, disk-efficient package manager |
| **Biome** | Unified linting and formatting |
| **TypeScript** | Strict mode, ESM-only |
| **React 19** | Latest patterns, no forwardRef |
| **Tailwind v4** | CSS-first configuration with `@theme` |
| **Vitest** | Fast unit testing |
| **AI-Ready** | Cursor Skills, Copilot instructions, AGENTS.md |

---

## Quick Start

```bash
# Prerequisites: Node.js 20+, pnpm 9+
npm install -g pnpm@9

# Install dependencies
pnpm install

# Start development
pnpm dev           # Run example app (apps/web)
pnpm ui:dev        # Start Storybook (port 6006)
```

### All Commands

```bash
pnpm build         # Build all packages and apps
pnpm lint          # Lint all workspaces
pnpm format        # Check formatting
pnpm format:write  # Apply formatting
pnpm test          # Run tests
```

### UI Development

```bash
pnpm ui:dev            # Start Storybook
pnpm ui:build          # Build UI library
pnpm ui:build-storybook # Build static Storybook
pnpm ui:test           # Run UI tests
```

---

## Using as a Boilerplate

1. **Clone or fork** the repository
2. **Replace** `@kraftwerk/` scope with your own in all `package.json` files
3. **Customize** design tokens in `packages/ui/src/styles/theme.css`
4. **Remove** example content and add your packages

See [docs/usage.md](docs/usage.md) for detailed instructions.

---

## Workspace Structure

```
kraftwerk/
├── apps/
│   └── web/              # Example Vite + React app
├── packages/
│   ├── config/           # Shared Biome, TypeScript, Vitest configs
│   └── ui/               # Design system with Storybook
├── docs/                 # Specification and guides
└── .github/              # CI/CD workflows
```

| Package | Name | Purpose |
|---------|------|---------|
| `packages/config` | `@kraftwerk/config` | Shared configs |
| `packages/ui` | `@kraftwerk/ui` | Design system |
| `apps/web` | `@kraftwerk/web` | Example app |

---

## Documentation

- [Getting Started](docs/getting-started.md) — Prerequisites, install, first run
- [Usage Guide](docs/usage.md) — Adopting the boilerplate, customization
- [Specification](docs/specification.md) — Tech stack and architecture
- [Design Standard](docs/design-standard.md) — Component patterns
- [AI Guidelines](docs/ai-guidelines.md) — Rules for AI-assisted development

---

## AI-Assisted Development

kraftwerk includes guidance for AI coding tools:

| Entry Point | Purpose |
|-------------|---------|
| `AGENTS.md` | Universal AI agent instructions |
| `.github/copilot-instructions.md` | GitHub Copilot instructions |
| `.cursor/skills/` | Cursor IDE context-aware skills |

See [docs/usage.md#ai-assisted-development](docs/usage.md#ai-assisted-development) for details.

---

## Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/kraftwerk.git`
3. **Install** dependencies: `pnpm install`
4. **Create** a branch: `git checkout -b feat/your-feature`

### Development Workflow

```bash
pnpm dev              # Start development server
pnpm ui:dev           # Start Storybook for UI work
pnpm lint             # Check for linting errors
pnpm format:write     # Format code
pnpm test             # Run tests
```

### Quality Gates

Before submitting a PR, ensure:

- [ ] `pnpm lint` passes
- [ ] `pnpm format` passes
- [ ] `pnpm test` passes
- [ ] No AI slop (unnecessary comments, defensive code, `any` casts)

### Commit Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new button variant
fix: resolve theme toggle flicker
docs: update getting started guide
chore: update dependencies
```

### Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all checks pass
4. Request review from maintainers

### Code Style

- **TypeScript**: Strict mode, no `any` unless absolutely necessary
- **Components**: Follow [Design Standard](docs/design-standard.md)
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Exports**: Use barrel files (`index.ts`)

See [docs/ai-guidelines.md](docs/ai-guidelines.md) for detailed coding standards.

---

## License

MIT
