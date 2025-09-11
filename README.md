# MAHA Evidence Engine

## 🌟 The Perfect Tool for MAHA's Evidence-Based Mission

**Transform the conversation around natural healing with data-driven evidence visualization.**

The MAHA Evidence Engine is a cutting-edge platform designed to democratize access to scientific research on natural health interventions. By combining interactive knowledge maps with powerful evidence heatmaps, this tool empowers MAHA advocates to:

- **Visualize Scientific Evidence**: See at a glance which natural interventions have the strongest research backing
- **Combat Misinformation**: Counter skeptics with peer-reviewed studies presented in an accessible format
- **Identify Research Gaps**: Discover where more studies are needed to support natural healing approaches
- **Share Knowledge**: Export evidence summaries and visualizations to educate communities and policymakers

### Why This Matters for MAHA

In an era where natural health approaches are often dismissed without examination, the MAHA Evidence Engine provides the scientific backbone needed to shift public perception. This platform doesn't just claim that curcumin fights inflammation or that berberine helps with diabetes – it shows you the studies, their quality scores, and the strength of evidence in an intuitive visual format.

Perfect for:
- **Health Advocates** building evidence-based arguments
- **Practitioners** researching treatment options
- **Policymakers** evaluating healthcare alternatives
- **Researchers** identifying study opportunities
- **Communities** seeking proven natural health solutions

---

A scientific evidence mapping platform that integrates Open Knowledge Maps with a custom Next.js 14 shell, featuring full MAHA branding and EviAtlas integration.

If you're new to the project, check out [docs/overview.md](docs/overview.md) for a guided tour of the repository.

![MAHA Evidence Engine](./branding/maha-logo.svg)

[![Build Status](https://img.shields.io/github/actions/workflow/status/just-goingviral/maha-evidence-engine/ci.yml?branch=main&style=for-the-badge)](https://github.com/just-goingviral/maha-evidence-engine/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-org/maha-evidence-engine.git
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
│   ├── web/              # Next.js 14 main application
│   ├── headstart/        # Open Knowledge Maps integration
│   └── eviatlas/         # EviAtlas R/Shiny heatmap visualization
├── packages/
│   └── ui/               # Shared UI components
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
   - `colors.json` - Tailwind color palette
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
```

## 🧪 Testing

### Running Tests

```bash
# Unit tests
cd apps/web
npm run test

# Integration tests with Docker
docker compose up -d
docker compose exec web npm run test:integration

# End-to-end tests
npm run test:e2e
```

### Test Coverage

The project maintains a minimum test coverage of 80% for:
- Branches
- Functions
- Lines
- Statements

## 🔒 Security

### Security Features

- Content Security Policy (CSP) headers
- CORS configuration
- Rate limiting (10 requests/second)
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Regular dependency updates via Dependabot
- Vulnerability scanning with Trivy

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

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Open Knowledge Maps](https://openknowledgemaps.org/)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

Built with ❤️ for the MAHA community
