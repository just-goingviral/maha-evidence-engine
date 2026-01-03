# MAHA Evidence Engine - Complete Repository Snapshot

**Generated:** 2026-01-03 05:43:11 UTC

This document contains the complete contents of all text-based files in the repository.

## About This Snapshot

This is a comprehensive snapshot of the entire MAHA Evidence Engine repository, containing all source code, configuration files, documentation, and other text-based files in a single markdown document. Binary files (images, fonts, etc.) and build artifacts are excluded.

### How to Regenerate

To regenerate this snapshot with the latest repository contents, run:

```bash
python3 generate_snapshot.py
```

The script automatically excludes:
- Hidden files (except configuration files like `.env.example`, `.gitignore`, etc.)
- Binary and visual asset files (images, fonts, SVGs, PDFs, etc.)
- Build artifacts and dependencies (`node_modules`, `dist`, `build`, etc.)
- Lock files (`package-lock.json`, `Cargo.lock`, etc.)
- The generator script itself

---

## Table of Contents

1. [.env.example](#envexample)
2. [.gitignore](#gitignore)
3. [.mise.toml](#misetoml)
4. [.npmrc](#npmrc)
5. [.nvmrc](#nvmrc)
6. [.tool-versions](#tool-versions)
7. [CODE_OF_CONDUCT.md](#code_of_conductmd)
8. [CONTRIBUTING.md](#contributingmd)
9. [LICENSE](#license)
10. [README.md](#readmemd)
11. [apps/eviatlas/Dockerfile](#apps-eviatlas-dockerfile)
12. [apps/eviatlas/README.md](#apps-eviatlas-readmemd)
13. [apps/eviatlas/app.R](#apps-eviatlas-appr)
14. [apps/headstart/Dockerfile](#apps-headstart-dockerfile)
15. [apps/headstart/README.md](#apps-headstart-readmemd)
16. [apps/web/.gitignore](#apps-web-gitignore)
17. [apps/web/Dockerfile](#apps-web-dockerfile)
18. [apps/web/README.md](#apps-web-readmemd)
19. [apps/web/eslint.config.mjs](#apps-web-eslintconfigmjs)
20. [apps/web/jest.config.js](#apps-web-jestconfigjs)
21. [apps/web/jest.setup.js](#apps-web-jestsetupjs)
22. [apps/web/next.config.ts](#apps-web-nextconfigts)
23. [apps/web/package.json](#apps-web-packagejson)
24. [apps/web/postcss.config.mjs](#apps-web-postcssconfigmjs)
25. [apps/web/public/robots.txt](#apps-web-public-robotstxt)
26. [apps/web/src/__tests__/middleware.test.ts](#apps-web-src-__tests__-middlewaretestts)
27. [apps/web/src/app/__tests__/Home.test.tsx](#apps-web-src-app-__tests__-hometesttsx)
28. [apps/web/src/app/__tests__/page.test.tsx](#apps-web-src-app-__tests__-pagetesttsx)
29. [apps/web/src/app/api/eviatlas/route.ts](#apps-web-src-app-api-eviatlas-routets)
30. [apps/web/src/app/api/evidence-maps/route.ts](#apps-web-src-app-api-evidence-maps-routets)
31. [apps/web/src/app/api/headstart/route.ts](#apps-web-src-app-api-headstart-routets)
32. [apps/web/src/app/api/pubmed/route.ts](#apps-web-src-app-api-pubmed-routets)
33. [apps/web/src/app/atlas/page.tsx](#apps-web-src-app-atlas-pagetsx)
34. [apps/web/src/app/disclaimer/page.tsx](#apps-web-src-app-disclaimer-pagetsx)
35. [apps/web/src/app/globals.css](#apps-web-src-app-globalscss)
36. [apps/web/src/app/layout.tsx](#apps-web-src-app-layouttsx)
37. [apps/web/src/app/maps/page.tsx](#apps-web-src-app-maps-pagetsx)
38. [apps/web/src/app/page.tsx](#apps-web-src-app-pagetsx)
39. [apps/web/src/app/sitemap.ts](#apps-web-src-app-sitemapts)
40. [apps/web/src/components/CopyButton.tsx](#apps-web-src-components-copybuttontsx)
41. [apps/web/src/components/Header.tsx](#apps-web-src-components-headertsx)
42. [apps/web/src/components/ScopeToggle.tsx](#apps-web-src-components-scopetoggletsx)
43. [apps/web/src/components/__tests__/Header.test.tsx](#apps-web-src-components-__tests__-headertesttsx)
44. [apps/web/src/components/__tests__/ScopeToggle.test.tsx](#apps-web-src-components-__tests__-scopetoggletesttsx)
45. [apps/web/src/middleware.ts](#apps-web-src-middlewarets)
46. [apps/web/src/types/jest-dom.d.ts](#apps-web-src-types-jest-domdts)
47. [apps/web/src/utils/__tests__/clipboard.test.ts](#apps-web-src-utils-__tests__-clipboardtestts)
48. [apps/web/src/utils/__tests__/evidenceMaps.test.ts](#apps-web-src-utils-__tests__-evidencemapstestts)
49. [apps/web/src/utils/__tests__/exportEvidenceMap.test.ts](#apps-web-src-utils-__tests__-exportevidencemaptestts)
50. [apps/web/src/utils/__tests__/pubmed.test.ts](#apps-web-src-utils-__tests__-pubmedtestts)
51. [apps/web/src/utils/__tests__/schemaMapping.test.ts](#apps-web-src-utils-__tests__-schemamappingtestts)
52. [apps/web/src/utils/clipboard.ts](#apps-web-src-utils-clipboardts)
53. [apps/web/src/utils/evidenceMaps.ts](#apps-web-src-utils-evidencemapsts)
54. [apps/web/src/utils/exportEvidenceMap.ts](#apps-web-src-utils-exportevidencemapts)
55. [apps/web/src/utils/pubmed.ts](#apps-web-src-utils-pubmedts)
56. [apps/web/src/utils/redis.ts](#apps-web-src-utils-redists)
57. [apps/web/src/utils/schemaMapping.ts](#apps-web-src-utils-schemamappingts)
58. [apps/web/tailwind.config.ts](#apps-web-tailwindconfigts)
59. [apps/web/tsconfig.json](#apps-web-tsconfigjson)
60. [branding/colors.json](#branding-colorsjson)
61. [branding/site.json](#branding-sitejson)
62. [data/ingestion/__init__.py](#data-ingestion-__init__py)
63. [data/ingestion/pipelines.py](#data-ingestion-pipelinespy)
64. [data/seeds/demo-queries.json](#data-seeds-demo-queriesjson)
65. [data/seeds/evidence-matrix.csv](#data-seeds-evidence-matrixcsv)
66. [deploy.sh](#deploysh)
67. [docker-compose.yml](#docker-composeyml)
68. [docs/overview.md](#docs-overviewmd)
69. [mise.toml](#misetoml)
70. [ops/docker/nginx.conf](#ops-docker-nginxconf)
71. [requirements.txt](#requirementstxt)
72. [scripts/upgrade-deprecated-deps.sh](#scripts-upgrade-deprecated-depssh)

---

## .env.example

<a id="envexample"></a>

**Path:** `.env.example`

```
# Application Configuration
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost

# Headstart Configuration
HEADSTART_API_URL=http://headstart:8080
HEADSTART_PUBLIC_URL=/maps

# Optional EviAtlas Configuration
EVIATLAS_API_URL=http://eviatlas:3838
EVIATLAS_PUBLIC_URL=/atlas

# External Evidence Sources
EVIDENCE_MAPS_URL=https://api.epistemonikos.org/v1/evidencemap
PUBMED_URL=https://eutils.ncbi.nlm.nih.gov/entrez/eutils

# Security Configuration
SESSION_SECRET=your-session-secret-here
CORS_ORIGIN=http://localhost:3000

# Authentication (optional)
AUTH_ENABLED=false
AUTH_PROVIDER=none

# Database (if needed)
DATABASE_URL=postgresql://user:password@localhost:5432/maha_evidence

# Monitoring and Logging
LOG_LEVEL=info
SENTRY_DSN=your-sentry-dsn-here

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

---

## .gitignore

<a id="gitignore"></a>

**Path:** `.gitignore`

```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Production
dist/
build/
.next/
out/
.nuxt/
.cache/
*.log

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store

# Testing
coverage/
.nyc_output/
*.lcov

# Docker
docker-compose.override.yml
.dockerignore

# Temporary files
tmp/
temp/
*.tmp
*.temp

# OS files
Thumbs.db
ehthumbs.db
Desktop.ini
$RECYCLE.BIN/

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Database files
*.sqlite
*.db

# Backup files
*.bak
*.backup

# Certificates
*.pem
*.key
*.crt

# Archives
*.zip
*.tar.gz
*.rar

# Python
__pycache__/
*.py[cod]
*$py.class
.Python
venv/
ENV/

# R
.Rhistory
.RData
.Rproj.user/

# Headstart specific
server/storage/*.png
server/storage/*.pdf
server/preprocessing/output/*
!server/preprocessing/output/.gitkeep

# Ingested datasets
data/pubmed.json
data/evidence_maps.json
```

---

## .mise.toml

<a id="misetoml"></a>

**Path:** `.mise.toml`

```toml

```

---

## .npmrc

<a id="npmrc"></a>

**Path:** `.npmrc`

```
engine-strict=true
save-exact=true
```

---

## .nvmrc

<a id="nvmrc"></a>

**Path:** `.nvmrc`

```
v20.19.4
```

---

## .tool-versions

<a id="tool-versions"></a>

**Path:** `.tool-versions`

```
nodejs 22
ruby 3.2.3
rust 1.87.0
```

---

## CODE_OF_CONDUCT.md

<a id="code_of_conductmd"></a>

**Path:** `CODE_OF_CONDUCT.md`

```markdown
# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our community include:

*   Demonstrating empathy and kindness toward other people
*   Being respectful of differing opinions, viewpoints, and experiences
*   Giving and gracefully accepting constructive feedback
*   Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
*   Focusing on what is best not just for us as individuals, but for the overall community

Examples of unacceptable behavior include:

*   The use of sexualized language or imagery, and sexual attention or advances of any kind
*   Trolling, insulting or derogatory comments, and personal or political attacks
*   Public or private harassment
*   Publishing others' private information, such as a physical or email address, without their explicit permission
*   Other conduct which could reasonably be considered inappropriate in a professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at [INSERT CONTACT METHOD]. All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series of actions.

**Consequence**: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interaction in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 2.0, available at [https://www.contributor-covenant.org/version/2/0/code_of_conduct.html][v2.0].

[homepage]: https://www.contributor-covenant.org
[v2.0]: https://www.contributor-covenant.org/version/2/0/code_of_conduct.html
```

---

## CONTRIBUTING.md

<a id="contributingmd"></a>

**Path:** `CONTRIBUTING.md`

```markdown
# Contributing to MAHA Evidence Engine

We welcome contributions from the community! Whether you're fixing a bug, adding a feature, or improving documentation, your help is appreciated.

## How to Contribute

1.  **Fork the repository** and create your branch from `main`.
2.  **Set up your development environment** by following the instructions in the `README.md`.
3.  **Make your changes**. Ensure your code follows the project's style guidelines.
4.  **Write tests** for your changes. We aim for a high level of test coverage.
5.  **Ensure all tests pass** by running `npm run test` in the `apps/web` directory.
6.  **Submit a pull request** with a clear description of your changes.

## Pull Request Process

1.  Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2.  Update the `README.md` with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3.  Increase the version numbers in any examples and the `README.md` to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4.  You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Reporting Bugs

If you find a bug, please open an issue and provide as much detail as possible, including steps to reproduce the issue.
```

---

## LICENSE

<a id="license"></a>

**Path:** `LICENSE`

```
MIT License

Copyright (c) 2025 MAHA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## README.md

<a id="readmemd"></a>

**Path:** `README.md`

```markdown
# MAHA Evidence Engine

## 🌟 The Perfect Tool for MAHA's Evidence-Based Mission

**Transform the conversation around natural healing with data-driven evidence visualization.**

The MAHA Evidence Engine is a cutting-edge platform designed to democratize access to scientific research on natural health interventions. By combining interactive knowledge maps with powerful evidence heatmaps, this tool empowers MAHA advocates to:

- **Visualize Scientific Evidence**: See at a glance which natural interventions have the strongest research backing
- **Combat Misinformation**: Counter skeptics with peer-reviewed studies presented in an accessible format
- **Identify Research Gaps**: Discover where more studies are needed to support natural healing approaches
- **Share Knowledge**: Export evidence summaries and visualizations to educate communities and policymakers
- **Contribute Back**: Send identified evidence gaps to external Evidence Maps services

### Why This Matters for MAHA

In an era where natural health approaches are often dismissed without examination, the MAHA Evidence Engine provides the scientific backbone needed to shift public perception. This platform doesn't just claim that curcumin fights inflammation or that berberine helps with diabetes – it shows you the studies, their quality scores, and the strength of evidence in an intuitive visual format.

Perfect for:
- **Health Advocates** building evidence-based arguments
- **Practitioners** researching treatment options
- **Policymakers** evaluating healthcare alternatives
- **Researchers** identifying study opportunities
- **Communities** seeking proven natural health solutions

---

A scientific evidence mapping platform that integrates Open Knowledge Maps with a custom Next.js 15 shell, featuring full MAHA branding and EviAtlas integration.

If you're new to the project, check out [docs/overview.md](docs/overview.md) for a guided tour of the repository.

![MAHA Evidence Engine](./branding/maha-logo.svg)

[![Build Status](https://img.shields.io/github/actions/workflow/status/just-goingviral/maha-evidence-engine/ci.yml?branch=main&style=for-the-badge)](https://github.com/just-goingviral/maha-evidence-engine/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/just-goingviral/maha-evidence-engine.git
cd maha-evidence-engine

# Copy environment variables
cp .env.example .env

# Start the entire stack with Docker Compose
docker compose up --build
```

Access the application at:
- Main site: http://localhost
- Knowledge Maps: http://localhost/maps
- Evidence Atlas: http://localhost/atlas
- Disclaimer: http://localhost/disclaimer

## 📋 Prerequisites

- Docker 20.10+ and Docker Compose 2.0+
- Git
- [mise](https://mise.jdx.dev) for managing language runtimes

## 🔧 Development Environment

The project uses `mise.toml` to pin runtime versions across development and CI:

```
Node 20.19.4
Python 3.12
Ruby 3.4.4
Go 1.24.3
Rust 1.88.0
Swift 6.1
PHP 8.4
```

Install the toolchain with:

```bash
mise install
```

Dependencies are locked via `package-lock.json`, `requirements.txt`, and `Cargo.lock`.
Use `npm ci`, `pip install -r requirements.txt`, and Cargo commands (when applicable) to ensure a consistent dependency graph.

## 🏗️ Architecture

```
maha-evidence-engine/
├── apps/
│   ├── web/              # Next.js 15 main application
│   ├── headstart/        # Open Knowledge Maps integration
│   └── eviatlas/         # EviAtlas R/Shiny heatmap visualization
├── ops/
│   └── docker/           # Docker configurations
├── data/
│   └── seeds/           # Seeded demo data
├── branding/            # All branding assets
│   ├── maha-logo.svg
│   ├── favicon.ico
│   ├── colors.json
│   └── site.json
├── .github/
│   └── workflows/       # CI/CD pipelines
├── docker-compose.yml
├── .env.example
└── README.md
```

## 🔗 Clipboard Sharing

The web app includes a `copyToClipboard` utility that uses the modern Clipboard API when available and gracefully falls back to legacy `document.execCommand('copy')` behavior. This ensures links can be copied in all supported browsers.

## 🎨 Branding Customization

### One-Step Rebranding Process

1. Replace files in the `/branding` directory:
   - `maha-logo.svg` - Your logo file
   - `favicon.ico` - Your favicon
   - `colors.json` - Tailwind color palette. Editing this file automatically updates the Tailwind palette.
   - `site.json` - Site name and tagline

2. Rebuild the application:
   ```bash
   docker compose down
   docker compose up --build
   ```

### Branding File Formats

**colors.json**:
```json
{
  "primary": "#007bff",
  "secondary": "#6c757d",
  "accent": "#28a745"
}
```

**site.json**:
```json
{
  "siteName": "MAHA Evidence Engine",
  "tagline": "Mapping the Science of Natural Healing"
}
```

## 🔧 Development

### Local Development Setup

```bash
# Install dependencies for the web app
cd apps/web
npm install

# Run development server
npm run dev
```

### Available Scripts

```bash
# In apps/web directory
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run Jest tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run test:ci      # Run tests in CI mode
```

## 🧪 Testing

### Running Tests

```bash
# Unit tests
cd apps/web
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Test Coverage

The project maintains a minimum test coverage of 80% for:
- Branches
- Functions
- Lines
- Statements

## 🔒 Security

### Security Features

- Strict Content Security Policy (CSP) with per-request nonces
- CORS configuration
- Rate limiting (10 requests/second)
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Regular dependency updates via Dependabot
- Vulnerability scanning with Trivy

### Content Security Policy

The application sets a restrictive CSP that removes `'unsafe-inline'` and `'unsafe-eval'` from `script-src` and disallows inline styles unless a nonce is present. A unique nonce is generated for every request in [`apps/web/src/middleware.ts`](apps/web/src/middleware.ts) and exposed via the `x-nonce` header. Inline `<script>` or `<style>` tags must include this nonce:

```tsx
import { headers } from "next/headers";

const nonce = headers().get("x-nonce") || undefined;

<script nonce={nonce} />
```

Next.js automatically applies the nonce to its internal inline styles and scripts during both development and production builds.

### Security Audits

```bash
# Run security audit
npm audit

# Fix vulnerabilities
npm audit fix
```

## 📦 Deployment

### Production Deployment

1. Set production environment variables in `.env`
2. Build and start containers:
   ```bash
   docker compose -f docker-compose.yml up -d
   ```

### Environment Variables

Key environment variables (see `.env.example` for full list):

- `NODE_ENV` - Environment (development/production)
- `NEXT_PUBLIC_API_URL` - Public API URL
- `NEXT_PUBLIC_SITE_URL` - Public site URL
- `HEADSTART_API_URL` - Headstart service URL
- `SESSION_SECRET` - Session encryption key
- `CORS_ORIGIN` - Allowed CORS origins

## 🚢 Docker Configuration

### Building Images

```bash
# Build all services
docker compose build

# Build specific service
docker compose build web
```

### Container Management

```bash
# View logs
docker compose logs -f web

# Execute commands in container
docker compose exec web sh

# Stop all services
docker compose down

# Remove volumes
docker compose down -v
```

## 📊 Monitoring

### Health Checks

- Health endpoint: http://localhost/health
- Metrics available in container logs
- Structured JSON logging for production

### Performance Optimization

- Multi-stage Docker builds
- Gzip compression enabled
- Static asset caching (30 days)
- Next.js automatic optimization

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Code Style

- ESLint configuration for code consistency
- Prettier for formatting
- TypeScript for type safety

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues and feature requests, please use the GitHub issue tracker.

## 🔄 CI/CD

The project uses GitHub Actions for continuous integration:

- **Linting**: ESLint and TypeScript checks
- **Testing**: Jest unit tests with coverage
- **Security**: npm audit and Trivy scanning
- **Building**: Docker image builds
- **Integration**: Full stack testing

## 🔁 Data Ingestion

Two automated pipelines pull fresh evidence from external sources:

- **Semantic Scholar reviews** – proxy evidence map ingesting systematic review metadata.
- **PubMed** – retrieves summary details for matching publications.

The workflow `.github/workflows/sync.yml` runs daily and weekly to keep datasets under `data/` current.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Open Knowledge Maps](https://openknowledgemaps.org/)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

Built with ❤️ for the MAHA community
```

---

## apps/eviatlas/Dockerfile

<a id="apps-eviatlas-dockerfile"></a>

**Path:** `apps/eviatlas/Dockerfile`

```dockerfile
# EviAtlas Dockerfile
FROM rocker/shiny:latest

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    libssl-dev \
    libxml2-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install R packages
RUN R -e "install.packages(c('shiny', 'ggplot2', 'dplyr', 'tidyr', 'viridis', 'plotly', 'DT'), repos='https://cloud.r-project.org/')"

# Create app directory
RUN mkdir -p /srv/shiny-server/eviatlas
WORKDIR /srv/shiny-server/eviatlas

# Copy app files
COPY app.R .
COPY ../../branding /srv/shiny-server/branding
COPY ../../data/seeds data/seeds

# Create custom shiny-server configuration
RUN echo "run_as shiny; \
         server { \
           listen 3838; \
           location / { \
             site_dir /srv/shiny-server; \
             log_dir /var/log/shiny-server; \
             directory_index on; \
             app_dir /srv/shiny-server/eviatlas; \
           } \
         }" > /etc/shiny-server/shiny-server.conf

# Expose port
EXPOSE 3838

# Run shiny server
CMD ["/usr/bin/shiny-server"]
```

---

## apps/eviatlas/README.md

<a id="apps-eviatlas-readmemd"></a>

**Path:** `apps/eviatlas/README.md`

```markdown
# EviAtlas

This Shiny app visualizes evidence strength across intervention–outcome pairs.

## Data

The default dataset is stored in [`data/seeds/evidence-matrix.csv`](../../data/seeds/evidence-matrix.csv). The Dockerfile copies this directory into the container at `data/seeds` so the app can read the CSV directly.

To use a different dataset, choose **Upload Custom CSV** within the app and provide a file with the columns `Intervention`, `Outcome`, `Evidence_Strength`, `Study_Count`, and `Quality_Score`.
```

---

## apps/eviatlas/app.R

<a id="apps-eviatlas-appr"></a>

**Path:** `apps/eviatlas/app.R`

```r
# EviAtlas - Evidence Heatmap Visualization
# MAHA Evidence Engine Component

library(shiny)
library(ggplot2)
library(dplyr)
library(tidyr)
library(viridis)
library(plotly)
library(DT)

# Define UI
ui <- fluidPage(
  # Include custom CSS
  tags$head(
    tags$style(HTML("
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      .navbar {
        background-color: #1e40af;
        color: white;
        padding: 1rem 2rem;
        margin-bottom: 2rem;
      }
      .navbar h1 {
        margin: 0;
        font-size: 1.5rem;
      }
      .sidebar {
        background-color: #f3f4f6;
        padding: 1.5rem;
        border-radius: 0.5rem;
      }
      .main-panel {
        padding: 0 1.5rem;
      }
      .info-box {
        background-color: #dbeafe;
        border: 1px solid #60a5fa;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-bottom: 1rem;
      }
    "))
  ),
  
  # Navigation bar
  div(class = "navbar",
    h1("EviAtlas - MAHA Evidence Engine"),
    p("Intervention × Outcome Evidence Heatmaps", style = "margin: 0; opacity: 0.9;")
  ),
  
  # Main layout
  sidebarLayout(
    sidebarPanel(
      class = "sidebar",
      h3("Filter Options"),
      
      selectInput("dataset", "Select Dataset:",
                  choices = c("Natural Healing Interventions" = "natural_healing",
                             "Upload Custom CSV" = "custom")),
      
      conditionalPanel(
        condition = "input.dataset == 'custom'",
        fileInput("file", "Choose CSV File",
                 accept = c(".csv"))
      ),
      
      hr(),
      
      selectInput("outcome_filter", "Filter by Outcome:",
                  choices = c("All" = "all"),
                  multiple = TRUE),
      
      selectInput("intervention_filter", "Filter by Intervention:",
                  choices = c("All" = "all"),
                  multiple = TRUE),
      
      sliderInput("evidence_threshold", "Minimum Evidence Strength:",
                  min = 0, max = 10, value = 0, step = 0.5),
      
      hr(),
      
      radioButtons("color_scheme", "Color Scheme:",
                   choices = c("Viridis" = "viridis",
                              "Heat" = "heat",
                              "Cool" = "cool",
                              "MAHA Brand" = "maha")),
      
      actionButton("reset_filters", "Reset Filters", 
                   class = "btn btn-secondary",
                   style = "width: 100%;")
    ),
    
    mainPanel(
      class = "main-panel",
      
      div(class = "info-box",
          h4("About EviAtlas"),
          p("This heatmap visualizes the strength of evidence for various interventions across different health outcomes. 
            Darker colors indicate stronger evidence. Click on cells to see detailed information.")
      ),
      
      tabsetPanel(
        tabPanel("Heatmap", 
                 plotlyOutput("heatmap", height = "600px"),
                 br(),
                 h4("Selected Cell Details"),
                 verbatimTextOutput("cell_info")),
        
        tabPanel("Data Table",
                 h4("Evidence Data"),
                 DTOutput("data_table")),
        
        tabPanel("Statistics",
                 h4("Evidence Summary Statistics"),
                 plotOutput("stats_plot", height = "400px"),
                 br(),
                 h4("Top Evidence Combinations"),
                 tableOutput("top_evidence"))
      )
    )
  )
)

# Define server logic
server <- function(input, output, session) {
  
  # Load or generate data
  evidence_data <- reactive({
    if (input$dataset == "natural_healing") {
      read.csv("data/seeds/evidence-matrix.csv", stringsAsFactors = FALSE)
    } else if (input$dataset == "custom" && !is.null(input$file)) {
      read.csv(input$file$datapath, stringsAsFactors = FALSE)
    } else {
      data.frame()
    }
  })
  
  # Update filter choices based on data
  observe({
    req(evidence_data())
    
    outcomes <- unique(evidence_data()$Outcome)
    interventions <- unique(evidence_data()$Intervention)
    
    updateSelectInput(session, "outcome_filter",
                     choices = c("All" = "all", outcomes))
    
    updateSelectInput(session, "intervention_filter",
                     choices = c("All" = "all", interventions))
  })
  
  # Filter data
  filtered_data <- reactive({
    req(evidence_data())
    
    data <- evidence_data()
    
    # Apply filters
    if (!"all" %in% input$outcome_filter && length(input$outcome_filter) > 0) {
      data <- data %>% filter(Outcome %in% input$outcome_filter)
    }
    
    if (!"all" %in% input$intervention_filter && length(input$intervention_filter) > 0) {
      data <- data %>% filter(Intervention %in% input$intervention_filter)
    }
    
    data <- data %>% filter(Evidence_Strength >= input$evidence_threshold)
    
    data
  })
  
  # Create heatmap
  output$heatmap <- renderPlotly({
    req(filtered_data())
    
    # Prepare data for heatmap
    heatmap_data <- filtered_data() %>%
      select(Intervention, Outcome, Evidence_Strength) %>%
      pivot_wider(names_from = Outcome, values_from = Evidence_Strength, values_fill = 0)
    
    # Convert to matrix
    row_names <- heatmap_data$Intervention
    heatmap_matrix <- as.matrix(heatmap_data[,-1])
    rownames(heatmap_matrix) <- row_names
    
    # Define color scale based on selection
    colors <- switch(input$color_scheme,
                    "viridis" = viridis(100),
                    "heat" = heat.colors(100),
                    "cool" = topo.colors(100),
                    "maha" = colorRampPalette(c("#ffffff", "#60a5fa", "#1e40af"))(100))
    
    # Create interactive heatmap
    plot_ly(
      x = colnames(heatmap_matrix),
      y = rownames(heatmap_matrix),
      z = heatmap_matrix,
      type = "heatmap",
      colorscale = list(c(0, colors[1]), c(1, colors[100])),
      hovertemplate = paste("<b>Intervention:</b> %{y}<br>",
                           "<b>Outcome:</b> %{x}<br>",
                           "<b>Evidence Strength:</b> %{z}<br>",
                           "<extra></extra>")
    ) %>%
      layout(
        title = "Evidence Strength Heatmap",
        xaxis = list(title = "Outcomes", tickangle = -45),
        yaxis = list(title = "Interventions"),
        margin = list(b = 100)
      )
  })
  
  # Display cell information
  output$cell_info <- renderPrint({
    d <- event_data("plotly_click")
    if (is.null(d)) {
      cat("Click on a cell to see detailed information")
    } else {
      intervention <- d$y
      outcome <- d$x
      strength <- d$z
      
      detail <- filtered_data() %>%
        filter(Intervention == intervention, Outcome == outcome)
      
      if (nrow(detail) > 0) {
        cat(paste("Intervention:", intervention, "\n"))
        cat(paste("Outcome:", outcome, "\n"))
        cat(paste("Evidence Strength:", strength, "/10\n"))
        if ("Study_Count" %in% names(detail)) {
          cat(paste("Number of Studies:", detail$Study_Count[1], "\n"))
        }
        if ("Quality_Score" %in% names(detail)) {
          cat(paste("Quality Score:", detail$Quality_Score[1], "/5\n"))
        }
      }
    }
  })
  
  # Data table
  output$data_table <- renderDT({
    filtered_data() %>%
      datatable(options = list(pageLength = 15, scrollX = TRUE))
  })
  
  # Statistics plot
  output$stats_plot <- renderPlot({
    req(filtered_data())
    
    # Summary by intervention
    summary_data <- filtered_data() %>%
      group_by(Intervention) %>%
      summarise(
        Mean_Evidence = mean(Evidence_Strength, na.rm = TRUE),
        .groups = "drop"
      ) %>%
      arrange(desc(Mean_Evidence))
    
    ggplot(summary_data, aes(x = reorder(Intervention, Mean_Evidence), y = Mean_Evidence)) +
      geom_bar(stat = "identity", fill = "#1e40af") +
      coord_flip() +
      labs(
        title = "Average Evidence Strength by Intervention",
        x = "Intervention",
        y = "Mean Evidence Strength"
      ) +
      theme_minimal() +
      theme(
        plot.title = element_text(size = 16, face = "bold"),
        axis.text = element_text(size = 12)
      )
  })
  
  # Top evidence table
  output$top_evidence <- renderTable({
    filtered_data() %>%
      arrange(desc(Evidence_Strength)) %>%
      head(10) %>%
      select(Intervention, Outcome, Evidence_Strength) %>%
      rename("Evidence Strength" = Evidence_Strength)
  })
  
  # Reset filters
  observeEvent(input$reset_filters, {
    updateSelectInput(session, "outcome_filter", selected = "all")
    updateSelectInput(session, "intervention_filter", selected = "all")
    updateSliderInput(session, "evidence_threshold", value = 0)
    updateRadioButtons(session, "color_scheme", selected = "viridis")
  })
}

# Run the app
shinyApp(ui = ui, server = server)
```

---

## apps/headstart/Dockerfile

<a id="apps-headstart-dockerfile"></a>

**Path:** `apps/headstart/Dockerfile`

```dockerfile
# Headstart Dockerfile with MAHA branding
FROM php:8.1-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    nodejs \
    npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Enable Apache modules
RUN a2enmod rewrite headers

# Set working directory
WORKDIR /var/www/html

# Clone specific version of Headstart (pin to a stable commit)
# This commit represents a stable version as of the project creation
ARG HEADSTART_VERSION=master
RUN git clone --depth 1 --branch ${HEADSTART_VERSION} https://github.com/OpenKnowledgeMaps/Headstart.git . && \
    rm -rf .git

# Remove upstream branding
RUN rm -f headstart.png && \
    rm -f doc/img/headstart_architecture.png && \
    find . -name "*.php" -type f -exec sed -i 's/Open Knowledge Maps/MAHA Evidence Engine/g' {} \; && \
    find . -name "*.js" -type f -exec sed -i 's/Open Knowledge Maps/MAHA Evidence Engine/g' {} \; && \
    find . -name "*.html" -type f -exec sed -i 's/Open Knowledge Maps/MAHA Evidence Engine/g' {} \;

# Install Node dependencies and build
RUN npm install && \
    npm run build || true

# Set permissions
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html

# Configure Apache to run on port 8080
RUN sed -i 's/80/8080/g' /etc/apache2/sites-available/000-default.conf && \
    sed -i 's/80/8080/g' /etc/apache2/ports.conf

# Expose port
EXPOSE 8080

# Start Apache
CMD ["apache2-foreground"]
```

---

## apps/headstart/README.md

<a id="apps-headstart-readmemd"></a>

**Path:** `apps/headstart/README.md`

```markdown
# Headstart Integration

This directory contains the Docker configuration for integrating Open Knowledge Maps (Headstart) into the MAHA Evidence Engine.

## Version Control

The Dockerfile clones Headstart from GitHub during build. To ensure stability:

1. **Default**: Uses the `master` branch
2. **Pin to specific version**: You can override during build:
   ```bash
   docker build --build-arg HEADSTART_VERSION=<commit-hash> .
   ```

## Recommendations

- Test thoroughly after any Headstart updates
- Consider pinning to a specific commit hash in production
- Monitor the [Headstart repository](https://github.com/OpenKnowledgeMaps/Headstart) for breaking changes

## Local Development

If you need to work with Headstart source code locally, clone it separately:
```bash
git clone https://github.com/OpenKnowledgeMaps/Headstart.git
```

---

## apps/web/.gitignore

<a id="apps-web-gitignore"></a>

**Path:** `apps/web/.gitignore`

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

---

## apps/web/Dockerfile

<a id="apps-web-dockerfile"></a>

**Path:** `apps/web/Dockerfile`

```dockerfile
# syntax=docker/dockerfile:1.7
# Multi-stage build for optimization
FROM node:25.2.1-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Copy branding files from root
COPY ../../branding /app/public/branding

# Build the application
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Ensure branding files are accessible
RUN mkdir -p /app/public/branding
COPY --from=builder /app/public/branding ./public/branding

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

---

## apps/web/README.md

<a id="apps-web-readmemd"></a>

**Path:** `apps/web/README.md`

```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

---

## apps/web/eslint.config.mjs

<a id="apps-web-eslintconfigmjs"></a>

**Path:** `apps/web/eslint.config.mjs`

```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

---

## apps/web/jest.config.js

<a id="apps-web-jestconfigjs"></a>

**Path:** `apps/web/jest.config.js`

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
```

---

## apps/web/jest.setup.js

<a id="apps-web-jestsetupjs"></a>

**Path:** `apps/web/jest.setup.js`

```javascript
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock Next.js Link component
// Mock Next.js Link component and forward all props so styles and other
// attributes like `className` are preserved in tests
jest.mock('next/link', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  default: ({ children, href, ...rest }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
  default: ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  },
}))

// Set up global test environment
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))
```

---

## apps/web/next.config.ts

<a id="apps-web-nextconfigts"></a>

**Path:** `apps/web/next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

---

## apps/web/package.json

<a id="apps-web-packagejson"></a>

**Path:** `apps/web/package.json`

```json
{
  "name": "web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --maxWorkers=2"
  },
  "dependencies": {
    "ioredis": "^5.8.2",
    "next": "16.1.0",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.1",
    "@testing-library/user-event": "^14.6.1",
    "@types/jest": "^30.0.0",
    "@types/node": "^25",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.0",
    "jest": "^30.2.0",
    "jest-environment-jsdom": "^30.0.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  },
  "engines": {
    "node": ">=20"
  },
  "overrides": {
    "test-exclude": "^7.0.1"
  }
}
```

---

## apps/web/postcss.config.mjs

<a id="apps-web-postcssconfigmjs"></a>

**Path:** `apps/web/postcss.config.mjs`

```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

---

## apps/web/public/robots.txt

<a id="apps-web-public-robotstxt"></a>

**Path:** `apps/web/public/robots.txt`

```text
# See https://www.robotstxt.org/robotstxt.html for documentation on how to use the robots.txt file
#
# Allow crawling of all content
User-agent: *
Disallow:

Sitemap: https://maha-evidence-engine.vercel.app/sitemap.xml
```

---

## apps/web/src/__tests__/middleware.test.ts

<a id="apps-web-src-__tests__-middlewaretestts"></a>

**Path:** `apps/web/src/__tests__/middleware.test.ts`

```typescript
jest.mock('next/server', () => ({
  NextResponse: {
    next: () => ({ headers: new Headers() }),
  },
}));

import { middleware } from '../middleware';
import type { NextRequest } from 'next/server';

type MockRequest = { nextUrl: { pathname: string }; headers: Headers };

// Cast our simple object to NextRequest in tests to satisfy middleware signature without using `any`.

describe('middleware', () => {
  it('sets security headers on every response', () => {
    const request: MockRequest = { nextUrl: { pathname: '/' }, headers: new Headers() };
    const response = middleware(request as unknown as NextRequest);
    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(response.headers.get('X-Frame-Options')).toBe('DENY');
    expect(response.headers.get('X-XSS-Protection')).toBe('1; mode=block');
    expect(response.headers.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
    expect(response.headers.get('Permissions-Policy')).toBe('camera=(), microphone=(), geolocation=()');
    expect(response.headers.get('Content-Security-Policy')).toContain("default-src 'self'");
  });

  it('applies CORS headers for allowed origins on API routes', () => {
    process.env.CORS_ORIGIN = 'http://allowed.com';
    const request: MockRequest = {
      nextUrl: { pathname: '/api/data' },
      headers: new Headers({ origin: 'http://allowed.com' }),
    };
    const response = middleware(request as unknown as NextRequest);
    expect(response.headers.get('Access-Control-Allow-Origin')).toBe('http://allowed.com');
    expect(response.headers.get('Access-Control-Allow-Methods')).toBe('GET, POST, PUT, DELETE, OPTIONS');
    expect(response.headers.get('Access-Control-Allow-Headers')).toBe('Content-Type, Authorization');
    expect(response.headers.get('Access-Control-Max-Age')).toBe('86400');
    delete process.env.CORS_ORIGIN;
  });

  it('does not set CORS headers for disallowed origins', () => {
    process.env.CORS_ORIGIN = 'http://allowed.com';
    const request: MockRequest = {
      nextUrl: { pathname: '/api/data' },
      headers: new Headers({ origin: 'http://notallowed.com' }),
    };
    const response = middleware(request as unknown as NextRequest);
    expect(response.headers.get('Access-Control-Allow-Origin')).toBeNull();
    delete process.env.CORS_ORIGIN;
  });
});
```

---

## apps/web/src/app/__tests__/Home.test.tsx

<a id="apps-web-src-app-__tests__-hometesttsx"></a>

**Path:** `apps/web/src/app/__tests__/Home.test.tsx`

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home page', () => {
  it('renders hero section', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: /welcome to maha evidence engine/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /explore knowledge maps/i })
    ).toBeInTheDocument();
  });

  it('renders featured topics', () => {
    render(<Home />);
    expect(screen.getByText('Curcumin & Cancer')).toBeInTheDocument();
    expect(screen.getByText('Berberine & Diabetes')).toBeInTheDocument();
    expect(screen.getByText('HBOT & Wound Healing')).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(<Home />);
    expect(
      screen.getByText(/© 2025 MAHA Evidence Engine. All rights reserved./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Empowering evidence-based natural healing research/i)
    ).toBeInTheDocument();
  });
});
```

---

## apps/web/src/app/__tests__/page.test.tsx

<a id="apps-web-src-app-__tests__-pagetesttsx"></a>

**Path:** `apps/web/src/app/__tests__/page.test.tsx`

```tsx
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home Page', () => {
  it('renders hero section with links to maps and atlas', () => {
    render(<Home />);
    const mapsLink = screen.getByRole('link', { name: /Explore Knowledge Maps/i });
    expect(mapsLink).toHaveAttribute('href', '/maps');
    const atlasLink = screen.getByRole('link', { name: /View Evidence Atlas/i });
    expect(atlasLink).toHaveAttribute('href', '/atlas');
  });

  it('displays featured research topics with correct links', () => {
    render(<Home />);
    expect(screen.getByText('Curcumin & Cancer')).toBeInTheDocument();
    expect(screen.getByText('Berberine & Diabetes')).toBeInTheDocument();
    expect(screen.getByText('HBOT & Wound Healing')).toBeInTheDocument();
    const topicLinks = screen.getAllByText('View Research →');
    expect(topicLinks).toHaveLength(3);
    expect(topicLinks[0]).toHaveAttribute('href', '/maps?query=curcumin+cancer');
    expect(topicLinks[1]).toHaveAttribute('href', '/maps?query=berberine+diabetes');
    expect(topicLinks[2]).toHaveAttribute('href', '/maps?query=hyperbaric+oxygen+wound+healing');
  });

  it('renders footer with branding text', () => {
    render(<Home />);
    expect(
      screen.getByText('© 2025 MAHA Evidence Engine. All rights reserved.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Empowering evidence-based natural healing research')
    ).toBeInTheDocument();
  });
});
```

---

## apps/web/src/app/api/eviatlas/route.ts

<a id="apps-web-src-app-api-eviatlas-routets"></a>

**Path:** `apps/web/src/app/api/eviatlas/route.ts`

```typescript
import { NextRequest } from 'next/server';
import redis from '@/utils/redis';

const EVIATLAS_URL = process.env.EVIATLAS_URL || 'http://localhost:3838';
const CACHE_TTL = 60 * 60; // 1 hour

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.toString();
  const cacheKey = `eviatlas:${query}`;

  const cached = await redis.get(cacheKey);
  if (cached) {
    return new Response(cached, { headers: { 'Content-Type': 'text/html' } });
  }

  const upstream = `${EVIATLAS_URL}${query ? `?${query}` : ''}`;
  const resp = await fetch(upstream);
  const body = await resp.text();
  await redis.set(cacheKey, body, 'EX', CACHE_TTL);
  return new Response(body, { headers: { 'Content-Type': 'text/html' } });
}
```

---

## apps/web/src/app/api/evidence-maps/route.ts

<a id="apps-web-src-app-api-evidence-maps-routets"></a>

**Path:** `apps/web/src/app/api/evidence-maps/route.ts`

```typescript
import { NextRequest } from 'next/server';
import redis from '@/utils/redis';
import { fetchEvidenceMaps } from '@/utils/evidenceMaps';

const CACHE_TTL = 60 * 60; // 1 hour

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.toString();
  const cacheKey = `evidence-maps:${query}`;

  const cached = await redis.get(cacheKey);
  if (cached) {
    return new Response(cached, { headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const data = await fetchEvidenceMaps(query);
    const body = JSON.stringify(data);
    await redis.set(cacheKey, body, 'EX', CACHE_TTL);
    return new Response(body, { headers: { 'Content-Type': 'application/json' } });
  } catch (err: unknown) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
```

---

## apps/web/src/app/api/headstart/route.ts

<a id="apps-web-src-app-api-headstart-routets"></a>

**Path:** `apps/web/src/app/api/headstart/route.ts`

```typescript
import { NextRequest } from 'next/server';
import redis from '@/utils/redis';

const HEADSTART_URL = process.env.HEADSTART_URL || 'http://localhost:8080';
const CACHE_TTL = 60 * 60; // 1 hour

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.toString();
  const cacheKey = `headstart:${query}`;

  const cached = await redis.get(cacheKey);
  if (cached) {
    return new Response(cached, { headers: { 'Content-Type': 'text/html' } });
  }

  const upstream = `${HEADSTART_URL}${query ? `?${query}` : ''}`;
  const resp = await fetch(upstream);
  const body = await resp.text();
  await redis.set(cacheKey, body, 'EX', CACHE_TTL);
  return new Response(body, { headers: { 'Content-Type': 'text/html' } });
}
```

---

## apps/web/src/app/api/pubmed/route.ts

<a id="apps-web-src-app-api-pubmed-routets"></a>

**Path:** `apps/web/src/app/api/pubmed/route.ts`

```typescript
import { NextRequest } from 'next/server';
import redis from '@/utils/redis';
import { fetchPubMedArticles } from '@/utils/pubmed';

const CACHE_TTL = 60 * 60; // 1 hour

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const term = searchParams.get('term') || '';
  const cacheKey = `pubmed:${searchParams.toString()}`;

  const cached = await redis.get(cacheKey);
  if (cached) {
    return new Response(cached, { headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const articles = await fetchPubMedArticles(term);
    const body = JSON.stringify(articles);
    await redis.set(cacheKey, body, 'EX', CACHE_TTL);
    return new Response(body, { headers: { 'Content-Type': 'application/json' } });
  } catch (err: unknown) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
```

---

## apps/web/src/app/atlas/page.tsx

<a id="apps-web-src-app-atlas-pagetsx"></a>

**Path:** `apps/web/src/app/atlas/page.tsx`

```tsx
interface AtlasPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function AtlasPage({ searchParams }: AtlasPageProps) {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (typeof value === 'string') {
      params.append(key, value);
    }
  });
  const src = `/api/eviatlas${params.toString() ? `?${params.toString()}` : ''}`;

  return (
    <iframe
      src={src}
      title="Evidence Atlas"
      className="w-full h-screen border-0"
    />
  );
}
```

---

## apps/web/src/app/disclaimer/page.tsx

<a id="apps-web-src-app-disclaimer-pagetsx"></a>

**Path:** `apps/web/src/app/disclaimer/page.tsx`

```tsx
export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Medical Information Disclaimer</h1>
        <p className="text-gray-700 mb-4">
          The information provided on this site is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.
        </p>
        <p className="text-gray-700 mb-4">
          Always seek the guidance of a qualified health provider with any questions you may have regarding your health or a medical condition. Never disregard professional medical advice or delay seeking it because of information you have read on this site.
        </p>
        <p className="text-gray-700">
          If you think you may be experiencing a medical emergency, call your doctor or emergency services immediately.
        </p>
      </div>
    </main>
  );
}
```

---

## apps/web/src/app/globals.css

<a id="apps-web-src-app-globalscss"></a>

**Path:** `apps/web/src/app/globals.css`

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

---

## apps/web/src/app/layout.tsx

<a id="apps-web-src-app-layouttsx"></a>

**Path:** `apps/web/src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import siteConfig from "@/../branding/site.json";
import Header from "@/components/Header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate dynamic metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.tagline,
    url: siteUrl,
    siteName: siteConfig.siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.tagline,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
```

---

## apps/web/src/app/maps/page.tsx

<a id="apps-web-src-app-maps-pagetsx"></a>

**Path:** `apps/web/src/app/maps/page.tsx`

```tsx
interface MapsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function MapsPage({ searchParams }: MapsPageProps) {
  const query = searchParams.query ? String(searchParams.query) : '';
  const scope = searchParams.scope ? String(searchParams.scope) : '';
  const params = new URLSearchParams();
  if (query) params.set('query', query);
  if (scope) params.set('scope', scope);
  const src = `/api/headstart${params.toString() ? `?${params.toString()}` : ''}`;

  return (
    <iframe
      src={src}
      title="Knowledge Maps"
      className="w-full h-screen border-0"
    />
  );
}
```

---

## apps/web/src/app/page.tsx

<a id="apps-web-src-app-pagetsx"></a>

**Path:** `apps/web/src/app/page.tsx`

```tsx
// Import site configuration from monorepo root branding folder
import siteConfig from "../../../../branding/site.json";
import { headers } from "next/headers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost";

export default function Home() {
  const cspNonce = headers().get("x-nonce") || undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/maps?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        nonce={cspNonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to MAHA Evidence Engine</h1>
          <p className="text-xl mb-8">Mapping the Science of Natural Healing</p>
          <div className="flex gap-4 justify-center">
            <a
              href="/maps"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Explore Knowledge Maps
            </a>
            <a
              href="/atlas"
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View Evidence Atlas
            </a>
          </div>
        </div>
      </section>

      {/* Demo Queries Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Research Topics</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Curcumin & Cancer</h3>
              <p className="text-gray-600 mb-4">
                Explore evidence on curcumin&#39;s potential anti-cancer properties and mechanisms.
              </p>
            <a href="/maps?query=curcumin+cancer" className="text-accent hover:underline">
              View Research →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Berberine & Diabetes</h3>
              <p className="text-gray-600 mb-4">
                Discover studies on berberine&#39;s effects on blood sugar and metabolic health.
              </p>
            <a href="/maps?query=berberine+diabetes" className="text-accent hover:underline">
              View Research →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-primary">HBOT & Wound Healing</h3>
            <p className="text-gray-600 mb-4">
              Examine evidence for hyperbaric oxygen therapy in chronic wound management.
            </p>
            <a href="/maps?query=hyperbaric+oxygen+wound+healing" className="text-accent hover:underline">
              View Research →
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Knowledge Maps</h3>
              <p className="text-gray-600 mb-4">
                Visual exploration of scientific literature with interactive knowledge maps. 
                Navigate research landscapes and discover connections between studies.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Interactive visualization</li>
                <li>• Evidence clustering</li>
                <li>• Citation networks</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Evidence Atlas</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive heatmaps showing intervention effectiveness across different outcomes. 
                Quickly identify promising research areas.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Intervention × Outcome matrix</li>
                <li>• Evidence strength indicators</li>
                <li>• Research gap identification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 MAHA Evidence Engine. All rights reserved.</p>
          <p className="text-gray-400">Empowering evidence-based natural healing research</p>
          <p className="mt-2">
            <a href="/disclaimer" className="text-gray-400 hover:underline">
              Medical information disclaimer
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
```

---

## apps/web/src/app/sitemap.ts

<a id="apps-web-src-app-sitemapts"></a>

**Path:** `apps/web/src/app/sitemap.ts`

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maha-evidence-engine.vercel.app"; // Replace with your production URL

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/maps`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/atlas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
```

---

## apps/web/src/components/CopyButton.tsx

<a id="apps-web-src-components-copybuttontsx"></a>

**Path:** `apps/web/src/components/CopyButton.tsx`

```tsx
import React from 'react';
import { copyToClipboard } from '@/utils/clipboard';

interface CopyButtonProps {
  text?: string;
  label?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, label = 'Copy URL' }) => {
  const handleClick = () => {
    const value = text ?? window.location.href;
    copyToClipboard(value);
  };

  return (
    <button onClick={handleClick} className="hover:text-accent" aria-label={label}>
      {label}
    </button>
  );
};

export default CopyButton;
```

---

## apps/web/src/components/Header.tsx

<a id="apps-web-src-components-headertsx"></a>

**Path:** `apps/web/src/components/Header.tsx`

```tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import siteConfig from '../../../../branding/site.json';
import CopyButton from './CopyButton';
import ScopeToggle from './ScopeToggle';

const Header: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const TitleTag = isHome ? 'h1' : 'span';

  return (
    <header className="bg-primary text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/maha-logo.svg"
          alt={`${siteConfig.siteName} Logo`}
          width={50}
          height={50}
        />
        <TitleTag className="ml-4 text-2xl font-bold">
          {siteConfig.siteName}
        </TitleTag>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li><Link href="/maps" className="hover:text-accent">Maps</Link></li>
          <li><Link href="/atlas" className="hover:text-accent">Atlas</Link></li>
          <li><ScopeToggle /></li>
          <li><CopyButton /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
```

---

## apps/web/src/components/ScopeToggle.tsx

<a id="apps-web-src-components-scopetoggletsx"></a>

**Path:** `apps/web/src/components/ScopeToggle.tsx`

```tsx
"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const options = [
  { value: "all", label: "All" },
  { value: "gold", label: "Gold Standard" },
  { value: "rcts", label: "RCTs" },
];

export default function ScopeToggle() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentScope = searchParams.get("scope") || "all";

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("scope", e.target.value);
    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}`);
  };

  return (
    <select
      aria-label="Evidence scope"
      value={currentScope}
      onChange={onChange}
      className="text-black rounded p-1"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

```

---

## apps/web/src/components/__tests__/Header.test.tsx

<a id="apps-web-src-components-__tests__-headertesttsx"></a>

**Path:** `apps/web/src/components/__tests__/Header.test.tsx`

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

const mockUsePathname = usePathname as jest.Mock;
const mockUseSearchParams = useSearchParams as jest.Mock;
const mockUseRouter = useRouter as jest.Mock;

beforeEach(() => {
  mockUsePathname.mockReturnValue('/');
  mockUseSearchParams.mockReturnValue(new URLSearchParams());
  mockUseRouter.mockReturnValue({ push: jest.fn() });
});

describe('Header Component', () => {
  it('renders MAHA Evidence Engine title', () => {
    render(<Header />);
    const title = screen.getByText('MAHA Evidence Engine');
    expect(title).toBeInTheDocument();
  });

  it('uses h1 on home page and span on other pages', () => {
    // Home page
    mockUsePathname.mockReturnValue('/');
    const { rerender } = render(<Header />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'MAHA Evidence Engine' })
    ).toBeInTheDocument();

    // Non-home page
    mockUsePathname.mockReturnValue('/maps');
    rerender(<Header />);
    const title = screen.getByText('MAHA Evidence Engine');
    expect(title.tagName).toBe('SPAN');
  });

  it('renders logo with correct alt text', () => {
    render(<Header />);
    const logo = screen.getByAltText('MAHA Evidence Engine Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/maha-logo.svg');
  });

  it('renders navigation links', () => {
    render(<Header />);
    
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    
    const mapsLink = screen.getByText('Maps');
    expect(mapsLink).toBeInTheDocument();
    expect(mapsLink).toHaveAttribute('href', '/maps');
    
    const atlasLink = screen.getByText('Atlas');
    expect(atlasLink).toBeInTheDocument();
    expect(atlasLink).toHaveAttribute('href', '/atlas');
  });

  it('includes a copy URL button', () => {
    render(<Header />);
    const button = screen.getByRole('button', { name: /copy url/i });
    expect(button).toBeInTheDocument();
  });

  it('renders evidence scope toggle', () => {
    render(<Header />);
    const select = screen.getByRole('combobox', { name: /evidence scope/i });
    expect(select).toBeInTheDocument();
  });

  it('applies correct CSS classes for branding', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-primary');
    expect(header).toHaveClass('text-white');
  });

  it('applies hover styles to navigation links', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    
    links.forEach(link => {
      expect(link).toHaveClass('hover:text-accent');
    });
  });
});
```

---

## apps/web/src/components/__tests__/ScopeToggle.test.tsx

<a id="apps-web-src-components-__tests__-scopetoggletesttsx"></a>

**Path:** `apps/web/src/components/__tests__/ScopeToggle.test.tsx`

```tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ScopeToggle from '../ScopeToggle';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe('ScopeToggle', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (usePathname as jest.Mock).mockReturnValue('/maps');
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    mockPush.mockClear();
  });

  it('renders all scope options', () => {
    render(<ScopeToggle />);
    const select = screen.getByRole('combobox', { name: /evidence scope/i });
    expect(select).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'All' })).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Gold Standard' })
    ).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'RCTs' })).toBeInTheDocument();
  });

  it('updates the URL when the scope changes', () => {
    render(<ScopeToggle />);
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'gold' },
    });
    expect(mockPush).toHaveBeenCalledWith('/maps?scope=gold');
  });
});

```

---

## apps/web/src/middleware.ts

<a id="apps-web-src-middlewarets"></a>

**Path:** `apps/web/src/middleware.ts`

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}'`,
    `style-src 'self' 'nonce-${nonce}'`,
    "img-src 'self' data: https:",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);

  // CORS configuration for API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    const origin = request.headers.get('origin');
    const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';
    
    if (origin === corsOrigin) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      response.headers.set('Access-Control-Max-Age', '86400');
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
```

---

## apps/web/src/types/jest-dom.d.ts

<a id="apps-web-src-types-jest-domdts"></a>

**Path:** `apps/web/src/types/jest-dom.d.ts`

```typescript
import '@testing-library/jest-dom';
```

---

## apps/web/src/utils/__tests__/clipboard.test.ts

<a id="apps-web-src-utils-__tests__-clipboardtestts"></a>

**Path:** `apps/web/src/utils/__tests__/clipboard.test.ts`

```typescript
import { copyToClipboard } from '../clipboard';

describe('copyToClipboard', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const originalClipboard = (navigator as any).clipboard;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document as any).execCommand = jest.fn();
  });

  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).clipboard = originalClipboard;
    jest.clearAllMocks();
  });

  it('uses navigator.clipboard.writeText when available', async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).clipboard = { writeText };

    await copyToClipboard('hello');

    expect(writeText).toHaveBeenCalledWith('hello');
    expect(document.execCommand).not.toHaveBeenCalled();
  });

  it('falls back to execCommand when clipboard API is missing', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).clipboard = undefined;

    await copyToClipboard('fallback');

    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });

  it('falls back to execCommand when clipboard API rejects', async () => {
    const writeText = jest.fn().mockRejectedValue(new Error('fail'));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).clipboard = { writeText };

    await copyToClipboard('error');

    expect(writeText).toHaveBeenCalled();
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
```

---

## apps/web/src/utils/__tests__/evidenceMaps.test.ts

<a id="apps-web-src-utils-__tests__-evidencemapstestts"></a>

**Path:** `apps/web/src/utils/__tests__/evidenceMaps.test.ts`

```typescript
import { fetchEvidenceMaps } from '../evidenceMaps';

describe('fetchEvidenceMaps', () => {
  const originalUrl = process.env.EVIDENCE_MAPS_URL;
  beforeEach(() => {
    process.env.EVIDENCE_MAPS_URL = 'https://maps.example/api';
  });
  afterEach(() => {
    process.env.EVIDENCE_MAPS_URL = originalUrl;
  });

  it('fetches evidence maps data', async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ records: [{ id: '1', title: 'Test', url: 'http://x' }] }),
    });
    const data = await fetchEvidenceMaps('q=test', mockFetch as unknown as typeof fetch);
    expect(mockFetch).toHaveBeenCalledWith('https://maps.example/api?q=test', expect.any(Object));
    expect(data).toEqual({ records: [{ id: '1', title: 'Test', url: 'http://x' }] });
  });

  it('throws on non-ok responses', async () => {
    const mockFetch = jest.fn().mockResolvedValue({ ok: false, status: 500 });
    await expect(fetchEvidenceMaps('q=test', mockFetch as unknown as typeof fetch)).rejects.toThrow(
      'Evidence Maps request failed with 500',
    );
  });
});
```

---

## apps/web/src/utils/__tests__/exportEvidenceMap.test.ts

<a id="apps-web-src-utils-__tests__-exportevidencemaptestts"></a>

**Path:** `apps/web/src/utils/__tests__/exportEvidenceMap.test.ts`

```typescript
import { exportEvidenceGaps, EvidenceGap } from '../exportEvidenceMap';

describe('exportEvidenceGaps', () => {
  const apiUrl = 'https://example.com/evidence-maps';

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      statusText: 'OK',
    }) as unknown as typeof fetch;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('sends gaps to the specified API endpoint', async () => {
    const gaps: EvidenceGap[] = [{ id: '1', description: 'example gap' }];
    await exportEvidenceGaps(gaps, apiUrl);
    expect(fetch).toHaveBeenCalledWith(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gaps }),
    });
  });

  it('throws an error when the response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false, statusText: 'Bad Request' });
    await expect(exportEvidenceGaps([], apiUrl)).rejects.toThrow(
      'Failed to export evidence gaps: Bad Request'
    );
  });
});
```

---

## apps/web/src/utils/__tests__/pubmed.test.ts

<a id="apps-web-src-utils-__tests__-pubmedtestts"></a>

**Path:** `apps/web/src/utils/__tests__/pubmed.test.ts`

```typescript
import { fetchPubMedArticles } from '../pubmed';

describe('fetchPubMedArticles', () => {
  const originalUrl = process.env.PUBMED_URL;
  beforeEach(() => {
    process.env.PUBMED_URL = 'https://pubmed.example';
  });
  afterEach(() => {
    process.env.PUBMED_URL = originalUrl;
  });

  it('fetches articles for a term', async () => {
    const searchResp = {
      ok: true,
      json: async () => ({ esearchresult: { idlist: ['123'] } }),
    };
    const summaryResp = {
      ok: true,
      json: async () => ({ result: { '123': { title: 'A study' } } }),
    };
    const mockFetch = jest
      .fn()
      .mockResolvedValueOnce(searchResp)
      .mockResolvedValueOnce(summaryResp);
    const articles = await fetchPubMedArticles('cancer', mockFetch as unknown as typeof fetch);
    expect(mockFetch).toHaveBeenNthCalledWith(
      1,
      'https://pubmed.example/esearch.fcgi?db=pubmed&retmode=json&term=cancer',
    );
    expect(mockFetch).toHaveBeenNthCalledWith(
      2,
      'https://pubmed.example/esummary.fcgi?db=pubmed&id=123&retmode=json',
    );
    expect(articles).toEqual([
      { id: '123', title: 'A study', url: 'https://pubmed.ncbi.nlm.nih.gov/123/' },
    ]);
  });

  it('returns empty array when no ids', async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ esearchresult: { idlist: [] } }),
    });
    const articles = await fetchPubMedArticles('unknown', mockFetch as unknown as typeof fetch);
    expect(articles).toEqual([]);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});
```

---

## apps/web/src/utils/__tests__/schemaMapping.test.ts

<a id="apps-web-src-utils-__tests__-schemamappingtestts"></a>

**Path:** `apps/web/src/utils/__tests__/schemaMapping.test.ts`

```typescript
import { mapReviewToEvidence, ReviewRecord } from '@/utils/schemaMapping'

describe('mapReviewToEvidence', () => {
  it('maps known fields to EvidenceRecord', () => {
    const review: ReviewRecord = {
      doi: '10.1000/xyz123',
      pmid: '987654',
      title: 'Sample Review',
      authors: ['Alice', 'Bob'],
      publicationDate: '2024-01-01',
      type: 'meta_analysis',
      outcomes: ['Outcome1', 'Outcome2'],
    }

    const evidence = mapReviewToEvidence(review)

    expect(evidence).toEqual({
      id: '10.1000/xyz123',
      title: 'Sample Review',
      authors: ['Alice', 'Bob'],
      publicationDate: '2024-01-01',
      type: 'meta-analysis',
      outcomes: ['Outcome1', 'Outcome2'],
    })
  })

  it('falls back gracefully when optional fields are missing', () => {
    const review: ReviewRecord = {
      title: 'Untitled Review',
    }

    const evidence = mapReviewToEvidence(review)

    expect(evidence).toEqual({
      id: 'Untitled Review',
      title: 'Untitled Review',
      authors: [],
      publicationDate: undefined,
      type: 'systematic-review',
      outcomes: [],
    })
  })
})
```

---

## apps/web/src/utils/clipboard.ts

<a id="apps-web-src-utils-clipboardts"></a>

**Path:** `apps/web/src/utils/clipboard.ts`

```typescript
export async function copyToClipboard(text: string): Promise<void> {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // fall through to execCommand fallback
    }
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
  } finally {
    document.body.removeChild(textarea);
  }
}
```

---

## apps/web/src/utils/evidenceMaps.ts

<a id="apps-web-src-utils-evidencemapsts"></a>

**Path:** `apps/web/src/utils/evidenceMaps.ts`

```typescript
export interface EvidenceMapRecord {
  id: string;
  title: string;
  url: string;
}

/**
 * Fetch evidence maps data from an external API.
 * @param query Query string, e.g. "q=covid"
 * @param fetchFn Optional fetch implementation for testing
 */
export async function fetchEvidenceMaps(
  query: string,
  fetchFn: typeof fetch = fetch,
): Promise<unknown> {
  const baseUrl = process.env.EVIDENCE_MAPS_URL || 'https://api.epistemonikos.org/v1/evidencemap';
  const url = `${baseUrl}${query ? `?${query}` : ''}`;
  const resp = await fetchFn(url, { headers: { Accept: 'application/json' } });
  if (!resp.ok) {
    throw new Error(`Evidence Maps request failed with ${resp.status}`);
  }
  return resp.json();
}
```

---

## apps/web/src/utils/exportEvidenceMap.ts

<a id="apps-web-src-utils-exportevidencemapts"></a>

**Path:** `apps/web/src/utils/exportEvidenceMap.ts`

```typescript
export interface EvidenceGap {
  id: string;
  description: string;
  // Allow arbitrary additional properties
  [key: string]: unknown;
}

/**
 * Export identified evidence gaps to an external Evidence Maps service.
 * @param gaps Array of evidence gap objects
 * @param apiUrl Destination API endpoint
 */
export async function exportEvidenceGaps(
  gaps: EvidenceGap[],
  apiUrl: string
): Promise<void> {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ gaps }),
  });

  if (!response.ok) {
    throw new Error(`Failed to export evidence gaps: ${response.statusText}`);
  }
}
```

---

## apps/web/src/utils/pubmed.ts

<a id="apps-web-src-utils-pubmedts"></a>

**Path:** `apps/web/src/utils/pubmed.ts`

```typescript
export interface PubMedArticle {
  id: string;
  title: string;
  url: string;
}

/**
 * Fetch articles from the PubMed API for the given search term.
 * Uses the NCBI E-utilities service.
 * @param term Search term
 * @param fetchFn Optional fetch implementation for testing
 */
export async function fetchPubMedArticles(term: string, fetchFn: typeof fetch = fetch): Promise<PubMedArticle[]> {
  const baseUrl = process.env.PUBMED_URL || 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
  const searchUrl = `${baseUrl}/esearch.fcgi?db=pubmed&retmode=json&term=${encodeURIComponent(term)}`;
  const searchResp = await fetchFn(searchUrl);
  if (!searchResp.ok) {
    throw new Error(`PubMed search failed with ${searchResp.status}`);
  }
  const searchJson = await searchResp.json();
  const ids: string[] = searchJson.esearchresult?.idlist ?? [];
  if (ids.length === 0) {
    return [];
  }
  const summaryUrl = `${baseUrl}/esummary.fcgi?db=pubmed&id=${ids.join(',')}&retmode=json`;
  const summaryResp = await fetchFn(summaryUrl);
  if (!summaryResp.ok) {
    throw new Error(`PubMed summary failed with ${summaryResp.status}`);
  }
  const summaryJson = await summaryResp.json();
  return ids.map((id: string) => ({
    id,
    title: summaryJson.result?.[id]?.title ?? '',
    url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
  }));
}
```

---

## apps/web/src/utils/redis.ts

<a id="apps-web-src-utils-redists"></a>

**Path:** `apps/web/src/utils/redis.ts`

```typescript
import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

const redis = new Redis(redisUrl);

export default redis;
```

---

## apps/web/src/utils/schemaMapping.ts

<a id="apps-web-src-utils-schemamappingts"></a>

**Path:** `apps/web/src/utils/schemaMapping.ts`

```typescript
export interface ReviewRecord {
  /** Unique identifier for the review or meta-analysis. Prefers DOI, then PMID. */
  doi?: string
  pmid?: string
  id?: string
  title: string
  authors?: string[]
  publicationDate?: string
  type?: 'systematic_review' | 'meta_analysis' | string
  outcomes?: string[]
}

export type EvidenceType = 'systematic-review' | 'meta-analysis'

export interface EvidenceRecord {
  id: string
  title: string
  authors: string[]
  publicationDate?: string
  type: EvidenceType
  outcomes: string[]
}

/**
 * Map an external review/meta-analysis record into the canonical Evidence Engine schema.
 * Fields are normalised to match the internal ontology so downstream consumers can rely on
 * consistent naming regardless of source.
 */
export function mapReviewToEvidence(review: ReviewRecord): EvidenceRecord {
  const id = review.doi ?? review.pmid ?? review.id ?? review.title
  const type: EvidenceType = review.type === 'meta_analysis' ? 'meta-analysis' : 'systematic-review'

  return {
    id,
    title: review.title,
    authors: review.authors ?? [],
    publicationDate: review.publicationDate,
    type,
    outcomes: review.outcomes ?? [],
  }
}
```

---

## apps/web/tailwind.config.ts

<a id="apps-web-tailwindconfigts"></a>

**Path:** `apps/web/tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'
import colors from '../../branding/colors.json' assert { type: 'json' }

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
```

---

## apps/web/tsconfig.json

<a id="apps-web-tsconfigjson"></a>

**Path:** `apps/web/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## branding/colors.json

<a id="branding-colorsjson"></a>

**Path:** `branding/colors.json`

```json
{
  "primary": "#007bff",
  "secondary": "#6c757d",
  "accent": "#28a745"
}
```

---

## branding/site.json

<a id="branding-sitejson"></a>

**Path:** `branding/site.json`

```json
{
  "siteName": "MAHA Evidence Engine",
  "tagline": "Mapping the Science of Natural Healing"
}
```

---

## data/ingestion/__init__.py

<a id="data-ingestion-__init__py"></a>

**Path:** `data/ingestion/__init__.py`

```python

```

---

## data/ingestion/pipelines.py

<a id="data-ingestion-pipelinespy"></a>

**Path:** `data/ingestion/pipelines.py`

```python
import json
import logging
import os
from pathlib import Path
from typing import Any, Dict

import requests

# Default query used when none is provided via environment variables.
DEFAULT_QUERY = os.environ.get("INGEST_QUERY", "diabetes systematic review")

DATA_DIR = Path("data")
DATA_DIR.mkdir(exist_ok=True)

PUBMED_BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
SEMANTIC_SCHOLAR_SEARCH = "https://api.semanticscholar.org/graph/v1/paper/search"


def fetch_pubmed(query: str, retmax: int = 20) -> Dict[str, Any]:
    """Fetch metadata for a query from the PubMed API.

    Returns a JSON structure from the `esummary` endpoint containing
    publication metadata.
    """
    search_params = {
        "db": "pubmed",
        "term": query,
        "retmax": retmax,
        "retmode": "json",
        "tool": "maha_evidence_engine",
    }
    email = os.environ.get("PUBMED_EMAIL")
    if email:
        search_params["email"] = email
    search_resp = requests.get(f"{PUBMED_BASE}/esearch.fcgi", params=search_params, timeout=30)
    search_resp.raise_for_status()
    ids = search_resp.json().get("esearchresult", {}).get("idlist", [])
    if not ids:
        return {"result": {}}
    summary_params = {
        "db": "pubmed",
        "id": ",".join(ids),
        "retmode": "json",
        "tool": "maha_evidence_engine",
    }
    if email:
        summary_params["email"] = email
    summary_resp = requests.get(f"{PUBMED_BASE}/esummary.fcgi", params=summary_params, timeout=30)
    summary_resp.raise_for_status()
    return summary_resp.json()


def fetch_evidence_maps(query: str, limit: int = 20) -> Dict[str, Any]:
    """Query Semantic Scholar for review papers as a proxy evidence map."""
    params = {
        "query": query,
        "limit": limit,
        "fields": "title,year,authors",
    }
    resp = requests.get(SEMANTIC_SCHOLAR_SEARCH, params=params, timeout=30)
    resp.raise_for_status()
    return resp.json()


def save_json(data: Dict[str, Any], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, sort_keys=True)


def main(query: str = DEFAULT_QUERY) -> None:
    logging.info("Starting ingestion for query: %s", query)
    pubmed_data = fetch_pubmed(query)
    save_json(pubmed_data, DATA_DIR / "pubmed.json")
    try:
        em_data = fetch_evidence_maps(query)
        save_json(em_data, DATA_DIR / "evidence_maps.json")
    except Exception as exc:  # pragma: no cover - best effort
        logging.exception("Evidence map ingestion failed: %s", exc)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    main()
```

---

## data/seeds/demo-queries.json

<a id="data-seeds-demo-queriesjson"></a>

**Path:** `data/seeds/demo-queries.json`

```json
{
  "queries": [
    {
      "id": "curcumin-cancer",
      "query": "curcumin cancer",
      "title": "Curcumin and Cancer Research",
      "description": "Evidence mapping for curcumin's potential anti-cancer properties",
      "keywords": ["curcumin", "cancer", "turmeric", "anti-cancer", "chemoprevention"],
      "papers": [
        {
          "title": "Curcumin: A Review of Its Effects on Human Health",
          "authors": ["Susan J. Hewlings", "Douglas S. Kalman"],
          "year": 2017,
          "abstract": "Curcumin has been shown to have anti-inflammatory, antioxidant, and anti-cancer properties...",
          "doi": "10.3390/foods6100092"
        },
        {
          "title": "Anticancer potential of curcumin: preclinical and clinical studies",
          "authors": ["Bharat B. Aggarwal", "Anushree Kumar", "Alok C. Bharti"],
          "year": 2003,
          "abstract": "Extensive research over the last 50 years has indicated curcumin's potential against various cancers...",
          "doi": "10.1097/00001813-200301000-00004"
        }
      ]
    },
    {
      "id": "berberine-diabetes",
      "query": "berberine diabetes",
      "title": "Berberine and Diabetes Management",
      "description": "Scientific evidence on berberine's effects on blood sugar and diabetes",
      "keywords": ["berberine", "diabetes", "blood sugar", "metabolic syndrome", "insulin"],
      "papers": [
        {
          "title": "Efficacy of Berberine in Patients with Type 2 Diabetes",
          "authors": ["Jun Yin", "Huili Xing", "Jianping Ye"],
          "year": 2008,
          "abstract": "Berberine has been shown to regulate glucose and lipid metabolism in vitro and in vivo...",
          "doi": "10.1016/j.metabol.2008.01.013"
        },
        {
          "title": "Berberine: Botanical Occurrence, Traditional Uses, Extraction Methods, and Relevance in Cardiovascular, Metabolic, Hepatic, and Renal Disorders",
          "authors": ["Maria A. Neag", "Andrei Mocan", "Javier Echeverría"],
          "year": 2018,
          "abstract": "Berberine has demonstrated significant effects on glucose metabolism and insulin sensitivity...",
          "doi": "10.3389/fphar.2018.00557"
        }
      ]
    },
    {
      "id": "hbot-wound-healing",
      "query": "hyperbaric oxygen wound healing",
      "title": "Hyperbaric Oxygen Therapy for Wound Healing",
      "description": "Evidence for HBOT in chronic wound management and healing",
      "keywords": ["hyperbaric oxygen", "HBOT", "wound healing", "chronic wounds", "tissue repair"],
      "papers": [
        {
          "title": "Hyperbaric oxygen therapy for chronic wounds",
          "authors": ["Ellie Goldberg", "Madhuri Goud Bhagavan"],
          "year": 2020,
          "abstract": "HBOT has been shown to improve oxygen delivery to tissues and promote wound healing...",
          "doi": "10.1002/14651858.CD004123.pub4"
        },
        {
          "title": "Systematic review of hyperbaric oxygen in the management of chronic wounds",
          "authors": ["Peter Kranke", "Michael H. Bennett", "Marrissa Martyn-St James"],
          "year": 2015,
          "abstract": "Evidence suggests HBOT significantly improves healing in diabetic foot ulcers...",
          "doi": "10.1111/bjd.13352"
        }
      ]
    }
  ],
  "metadata": {
    "created": "2025-01-09",
    "version": "1.0.0",
    "source": "MAHA Evidence Engine Demo Data"
  }
}
```

---

## data/seeds/evidence-matrix.csv

<a id="data-seeds-evidence-matrixcsv"></a>

**Path:** `data/seeds/evidence-matrix.csv`

```csv
Intervention,Outcome,Evidence_Strength,Study_Count,Quality_Score
Curcumin,Cancer Prevention,8.5,45,4.2
Curcumin,Inflammation,9.1,62,4.5
Curcumin,Mental Health,6.3,18,3.8
Curcumin,Cardiovascular Health,7.8,32,4.1
Curcumin,Diabetes Management,7.2,28,3.9
Berberine,Diabetes Management,9.2,58,4.6
Berberine,Metabolic Health,8.7,42,4.3
Berberine,Cardiovascular Health,8.1,36,4.2
Berberine,Inflammation,7.5,24,4.0
Berberine,Weight Management,7.9,31,4.1
HBOT,Wound Healing,8.8,52,4.4
HBOT,Inflammation,7.3,22,3.9
HBOT,Brain Health,6.8,19,3.7
HBOT,Athletic Recovery,6.5,15,3.5
```

---

## deploy.sh

<a id="deploysh"></a>

**Path:** `deploy.sh`

```bash
#!/bin/bash

# MAHA Evidence Engine Deployment Script
# Production deployment with health checks

set -e

echo "🚀 MAHA Evidence Engine Deployment"
echo "=================================="

# Check prerequisites
command -v docker >/dev/null 2>&1 || { echo "❌ Docker is required but not installed. Aborting." >&2; exit 1; }
command -v docker compose >/dev/null 2>&1 || { echo "❌ Docker Compose is required but not installed. Aborting." >&2; exit 1; }

# Load environment variables
if [ ! -f .env ]; then
    echo "📝 Creating .env from .env.example..."
    cp .env.example .env
    echo "⚠️  Please edit .env with your production values before continuing."
    read -p "Press enter to continue once .env is configured..."
fi

# Build and start services
echo "🔨 Building Docker images..."
docker compose build --no-cache

echo "🚀 Starting services..."
docker compose up -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 30

# Health checks
echo "🏥 Running health checks..."

# Check web service
if curl -f http://localhost/health > /dev/null 2>&1; then
    echo "✅ Web service is healthy"
else
    echo "❌ Web service health check failed"
    exit 1
fi

# Check Nginx
if docker compose exec -T nginx nginx -t > /dev/null 2>&1; then
    echo "✅ Nginx configuration is valid"
else
    echo "❌ Nginx configuration test failed"
    exit 1
fi

# Show service status
echo ""
echo "📊 Service Status:"
docker compose ps

echo ""
echo "🎉 MAHA Evidence Engine deployed successfully!"
echo ""
echo "🌐 Access the application at:"
echo "   Main site: http://localhost"
echo "   Knowledge Maps: http://localhost/maps"
echo "   Evidence Atlas: http://localhost/atlas (if enabled)"
echo ""
echo "📋 View logs with: docker compose logs -f"
echo "🛑 Stop services with: docker compose down"
echo ""
```

---

## docker-compose.yml

<a id="docker-composeyml"></a>

**Path:** `docker-compose.yml`

```yaml
version: '3.8'

services:
  # Next.js Web Application
  web:
    build:
      context: ./apps/web
      dockerfile: Dockerfile
    container_name: maha-web
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL:-http://localhost}
    volumes:
      - ./branding:/app/public/branding:ro
    networks:
      - maha-network
    restart: unless-stopped

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    container_name: maha-nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./ops/docker/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./branding:/usr/share/nginx/html/branding:ro
    depends_on:
      - web
      - headstart
      - eviatlas
    networks:
      - maha-network
    restart: unless-stopped

  # Headstart Service (Open Knowledge Maps)
  headstart:
    build:
      context: ./apps/headstart
      dockerfile: Dockerfile
    container_name: maha-headstart
    environment:
      - NODE_ENV=production
    volumes:
      - ./branding:/app/branding:ro
    networks:
      - maha-network
    restart: unless-stopped

  # EviAtlas Service
  eviatlas:
    build:
      context: ./apps/eviatlas
      dockerfile: Dockerfile
    container_name: maha-eviatlas
    environment:
      - R_ENV=production
    volumes:
      - ./data/seeds:/srv/shiny-server/data:ro
      - ./branding:/srv/shiny-server/branding:ro
    networks:
      - maha-network
    restart: unless-stopped

  # Redis for caching (optional)
  redis:
    image: redis:alpine
    container_name: maha-redis
    networks:
      - maha-network
    restart: unless-stopped

networks:
  maha-network:
    driver: bridge

volumes:
  redis-data:
```

---

## docs/overview.md

<a id="docs-overviewmd"></a>

**Path:** `docs/overview.md`

```markdown
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

```

---

## mise.toml

<a id="misetoml"></a>

**Path:** `mise.toml`

```toml
[tools]
node = "20.19.4"
python = "3.12"
ruby = "3.4.4"
go = "1.24.3"
rust = "1.88.0"
swift = "6.1"
php = "8.4"
```

---

## ops/docker/nginx.conf

<a id="ops-docker-nginxconf"></a>

**Path:** `ops/docker/nginx.conf`

```nginx
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
    access_log /var/log/nginx/access.log main;

    # Performance
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-src 'none'; object-src 'none';" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml application/atom+xml image/svg+xml;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
    limit_req_status 429;

    upstream web_backend {
        server web:3000;
    }

    upstream headstart_backend {
        server headstart:8080;
    }

    upstream eviatlas_backend {
        server eviatlas:3838;
    }

    server {
        listen 80;
        server_name localhost;

        # Security
        server_tokens off;

        # Rate limiting
        limit_req zone=general burst=20 nodelay;

        # Branding assets
        location /branding/ {
            alias /usr/share/nginx/html/branding/;
            expires 30d;
            add_header Cache-Control "public, immutable";
        }

        # Main web application
        location / {
            proxy_pass http://web_backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }

        # Headstart at /maps
        location /maps {
            proxy_pass http://headstart_backend;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            
            # Remove Headstart branding headers
            proxy_hide_header X-Powered-By;
            proxy_hide_header Server;
        }

        # EviAtlas at /atlas
        location /atlas {
            proxy_pass http://eviatlas_backend/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_redirect / /atlas/;
            
            # WebSocket support for Shiny
            proxy_read_timeout 20d;
            proxy_buffering off;
        }

        # Health check endpoint
        location /health {
            access_log off;
            return 200 "healthy\n";
            add_header Content-Type text/plain;
        }

        # Deny access to hidden files
        location ~ /\. {
            deny all;
            access_log off;
            log_not_found off;
        }
    }
}
```

---

## requirements.txt

<a id="requirementstxt"></a>

**Path:** `requirements.txt`

```text
# Python dependencies lockfile
requests>=2.32.3
```

---

## scripts/upgrade-deprecated-deps.sh

<a id="scripts-upgrade-deprecated-depssh"></a>

**Path:** `scripts/upgrade-deprecated-deps.sh`

```bash
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/../apps/web"

npm pkg set "overrides.glob=11.0.3"
npm pkg set "overrides.inflight=npm:lru-cache@11.1.0"

npm install
```

---

