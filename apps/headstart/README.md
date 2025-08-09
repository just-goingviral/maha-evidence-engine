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
