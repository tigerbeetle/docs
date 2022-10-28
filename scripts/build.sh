#!/usr/bin/env bash

# Build a different branch by passing the branch name in as the first argument
branch="main"
if [[ -n "$1" ]]; then
    branch="$1"
fi
echo "Building branch: $branch"

set -eu

# Grab the latest docs from tigerbeetledb/tigerbeetle
git clone https://github.com/tigerbeetledb/tigerbeetle tb_tmp

if ! [[ "$branch" == "main" ]]; then
    ( cd tb_tmp && git fetch && git checkout "$branch" )
fi

rm -rf pages
mv tb_tmp/docs pages
for page in $(ls pages/*.md); do
    if ! [[ "$page" == "pages/intro.md" ]] && ! [[ "$page" == "pages/FAQ.md" ]]; then
	rm "$page"
    fi
done
rm -rf tb_tmp

# Build the site
npx docusaurus build
rm -rf docs
mv build docs

# CNAME file for Github Pages DNS matching
echo 'docs.tigerbeetle.com' >> docs/CNAME
