#!/bin/bash

yarn build:webpack
echo "{ pkgs }: {
	deps = [
		pkgs.nodejs-16_x
	];
}" > dist/replit.nix
echo "require(\"./main\");" > dist/index.js
echo "run = \"npm install && npm start\"" > dist/.replit
cp dist.json dist/package.json