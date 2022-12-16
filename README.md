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
6. Created base structure for application containing the following files and folders:
  * controller - contains express routers 
    * search.ts - search router
  * middleware - contains express middlewares
    * error-handler - app-level error handler
  * model - contains configured sequelize instance and models (Article entity) and sample data for db
  * service - contains services that routers use to obtain information
    * search.ts - search service (retrieves data from db)
  * types - contains types/interfaces used by the application
    * http.ts - contains http success and error response interfaces
  * app.ts - contains express app instance
  * server.ts - entrypoint for application, executes express app listen function on port 3001
7. Tested request flow, ensuring everything is working appropriately

---