#!/usr/bin/env bash
# Ping IndexNow (Bing, Yandex, Seznam, Naver, Yep) with URLs from the live sitemap.
# Bing's index also feeds ChatGPT search, so this is an AI-visibility signal, not just Bing.
# Google does not use IndexNow.
#
#   scripts/indexnow.sh              # every URL in the sitemap
#   scripts/indexnow.sh /deals/ ...  # only the given paths
set -euo pipefail
KEY=be76b8e94a540b1225ba746c9391da67
HOST=512austinhome.com
SEO="$HOME/.claude/skills/seo/bin/claude-seo"
if [ $# -gt 0 ]; then
  URLS=$(printf 'https://%s%s\n' "$HOST" "$@")
else
  URLS=$(curl -s "https://$HOST/sitemap-0.xml" | grep -oE '<loc>[^<]+' | sed 's/<loc>//')
fi
F=$(mktemp); echo "$URLS" > "$F"
echo "Submitting $(wc -l < "$F" | tr -d ' ') URLs"
"$SEO" run indexnow_submit.py --host "$HOST" --key "$KEY" --key-location "https://$HOST/$KEY.txt" --urls-file "$F"
