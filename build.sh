#!/bin/bash

yarn build:webpack
echo "require(\"./main\");" > dist/index.js
echo "{ pkgs }: {
	deps = [
		pkgs.nodejs-16_x
	];
}" > dist/replit.nix
echo "run = \"npx node index.js\"" > dist/.replit
cp dist.json dist/package.json