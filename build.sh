#!/bin/bash

yarn build:webpack
echo "require(\"./main\");" > dist/index.js
cp dist.json dist/package.json