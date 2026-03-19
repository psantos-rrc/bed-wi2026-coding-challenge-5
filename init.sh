#!/bin/zsh

npm init -y
npm install typescript ts-node @types/node --save-dev
npm install express
npm install @types/express --save-dev
# Install Jest, TypeScript support, and Supertest for API testing
npm install jest ts-jest @types/jest supertest @types/supertest --save-dev
npm install morgan @types/morgan

# Overwrite package.json scripts objects
cat package.json | jq '.scripts = {test:"jest","test:watch":"jest --watch","test:coverage":"jest --coverage",build:"tsc",start:"ts-node src/server.ts"}' > package.json.new
cp package.json.new package.json
rm package.json.new

rm init.sh
