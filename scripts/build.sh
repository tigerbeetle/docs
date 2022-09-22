#!/usr/bin/env bash

set -eu

# Grab the latest docs from tigerbeetledb/tigerbeetle
git clone https://github.com/tigerbeetledb/tigerbeetle tb_tmp

# If you need to check out a different branch, do so here
# ( cd tb_tmp && git fetch && git checkout pe/clients-references )

rm -rf pages
mv tb_tmp/docs pages
find pages -maxdepth 1 -mindepth 1 -type f -not -name "intro.md" -delete
rm -rf tb_tmp

# Build the site
docker run -v $(pwd):/wrk -w /wrk --entrypoint npx node npm install
docker run -v $(pwd):/wrk -w /wrk --entrypoint npx node npx docusaurus build
rm -rf docs
mv build docs

# CNAME file for Github Pages DNS matching
echo 'docs.tigerbeetle.com' >> docs/CNAME
