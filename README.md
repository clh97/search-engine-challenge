# Vetrical Coding Challenge

## Introduction

Task: Build a search engine
Tech stack used:
  * Back: Node, TypeScript, Sequelize and Postgres
  * Front: React, styled-components

---

### My initialization steps:
1. Creating the project's package.json with `npm init -y`
2. Installing first dependencies with `npm i typescript @types/node ts-node nodemon --save-dev`
3. Generating typescript config with `npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`
4. Created `Dockerfile` and `docker-compose.yml` files to containerize the application
5. Installing dependencies with `npm i express sequelize pg pg-hstore` and `npm i @types/pg @types/express --save-dev`
---