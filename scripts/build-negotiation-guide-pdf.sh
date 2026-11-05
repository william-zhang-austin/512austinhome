#!/bin/bash
# Prints /negotiation-guide/ to public/downloads/austin-builder-negotiation-guide.pdf.
# Run after editing the guide page or its data (guides, incentive types, builder
# negotiating notes), then rebuild and commit the PDF.
set -euo pipefail
cd "$(dirname "$0")/.."
PORT=4790
npm run build >/dev/null
npx --yes serve dist -l $PORT >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null' EXIT
for i in $(seq 1 20); do curl -sf -o /dev/null "http://localhost:$PORT/negotiation-guide/" && break; sleep 0.5; done
mkdir -p public/downloads
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf="public/downloads/austin-builder-negotiation-guide.pdf" \
  "http://localhost:$PORT/negotiation-guide/" 2>/dev/null
npm run build >/dev/null
echo "Wrote public/downloads/austin-builder-negotiation-guide.pdf"
