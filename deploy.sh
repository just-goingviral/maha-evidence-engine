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
