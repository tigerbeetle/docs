docker run -v $(pwd):/build -w /build node:19-slim bash -c 'apt-get update -y && apt-get install -y git && ./scripts/build.sh'
