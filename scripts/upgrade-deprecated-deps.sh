#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/../apps/web"

npm pkg set "overrides.glob=11.0.3"
npm pkg set "overrides.inflight=npm:lru-cache@11.1.0"

npm install
