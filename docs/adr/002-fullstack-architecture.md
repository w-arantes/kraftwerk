# ADR 002 — Fullstack Architecture

**Status**: Accepted
**Date**: 2025-07-25

## Context

Kraftwerk started as a package distribution monorepo boilerplate with a single example app (`apps/web`). To provide more value as a fullstack boilerplate, we needed to add an API server, database layer, and restructure the workspace for a production-ready setup.

## Decision

Restructure the monorepo into a fullstack architecture with separated frontend and backend packages:

- **Frontend** (`packages/frontend`): Vite + React 19 + Tailwind CSS v4
- **Backend** (`packages/backend`): Elysia + Bun runtime
- **Database**: Drizzle ORM + PostgreSQL (via Docker Compose)
- **Shared**: `packages/config` (configs) and `packages/ui` (design system)

### Key choices

- **Elysia over Hono**: Elysia provides end-to-end type safety with Eden Treaty, first-class Bun support, and a plugin system aligned with our modular architecture.
- **Bun runtime**: Fast startup, built-in TypeScript support, native test runner compatibility. Used only for backend; frontend keeps Node.js/Vite.
- **Drizzle ORM**: TypeScript-first, lightweight, SQL-like query builder. Pairs well with PostgreSQL and provides schema-as-code with migration generation.
- **Packages over apps**: Moved from `apps/web` to `packages/frontend` to simplify the workspace. All code lives under `packages/*`, removing the `apps/` directory.
- **Vite proxy**: Frontend proxies `/api` requests to the backend during development, avoiding CORS complexity in dev.

## Consequences

- Developers need Bun installed in addition to Node.js/pnpm
- Docker is required for local PostgreSQL
- The workspace is simpler (`packages/*` only) but has more packages
- Backend and frontend are decoupled — can be deployed independently
