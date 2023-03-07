#!/usr/bin/env bash

# Build a different branch by passing the branch name in as the first argument
# Build a different repo by passing the repo URL as the second argument (for forks)
branch="main"
if [[ -n "$1" ]]; then
    branch="$1"
fi
repo="https://github.com/tigerbeetledb/tigerbeetle"
if [[ -n "$2" ]]; then
    repo="$2"
fi

echo "Building branch: $branch from $repo"

set -eux

# Grab the latest docs from tigerbeetledb/tigerbeetle
git clone "$repo" tb_tmp

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

mkdir pages/clients
clients="go java node dotnet"
for client in $clients; do
    mv tb_tmp/src/clients/$client/README.md pages/clients/$client.md
done
rm -rf tb_tmp

# Build the site
npx docusaurus build
rm -rf docs
mv build docs

# CNAME file for Github Pages DNS matching
echo 'docs.tigerbeetle.com' >> docs/CNAME
