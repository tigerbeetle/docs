docker run -v $(pwd):/build -w /build node:19-slim bash -c "apt-get update -y && apt-get install -y git && npm install && ./scripts/build_dont_call_this_directly.sh $@"
