#!/usr/bin/env bash
# Build the CV from the separate private CV repository checkout in cv/
# and export both language versions to public/.
set -euo pipefail

site_root="$(cd "$(dirname "$0")/.." && pwd)"
cv_dir="${CV_SOURCE_DIR:-$site_root/cv}"

cd "$cv_dir"
latexmk -xelatex -interaction=nonstopmode -halt-on-error CV_EN.tex
latexmk -xelatex -interaction=nonstopmode -halt-on-error CV_CN.tex

cp CV_EN.pdf "$site_root/public/cv.pdf"
cp CV_CN.pdf "$site_root/public/cv-cn.pdf"
echo "✓ public/cv.pdf and public/cv-cn.pdf updated"
