# Repository Overview

Welcome to the **MAHA Evidence Engine** codebase. This document provides a high-level tour of the repository to help new contributors quickly find their way around.

## Key Directories

- **apps/** – Application source code. Each subdirectory represents a standalone service.
  - **web/** – Next.js 14 front‑end that drives the main MAHA site.
  - **headstart/** – Integration with Open Knowledge Maps for visualising research networks.
  - **eviatlas/** – R/Shiny service that renders evidence heatmaps.
- **packages/** – Shared libraries used across apps. Currently contains the `ui` component library.
- **branding/** – Logos, colours, and other assets used to customise the MAHA look and feel.
- **data/** – Example datasets and seed files used for demos and development.
- **ops/** – Operational tooling such as Docker configuration.
- **deploy.sh** – Helper script for deploying the stack.

## Common Tasks

### Local development

```bash
# Start all services with Docker
cp .env.example .env
docker compose up --build
```

### Running tests for the web app

```bash
npm test --prefix apps/web
```

### Linting the web app

```bash
npm run lint --prefix apps/web
```

For more details on contributing, see [CONTRIBUTING.md](../CONTRIBUTING.md) and the main [README](../README.md).

