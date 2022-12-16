# Vetrical Coding Challenge

## Introduction

Task: Build a search engine
Tech stack used:
  * Back: Node, TypeScript, Sequelize and Postgres
  * Front: React, styled-components


## How to run the application
The easiest way to run this entire project is by using Docker.
`docker compose up --build` command on the root directory should run the following integrated services: back, front, db, db admin (adminer)

---

### Back end - My development process:
1. Creating the project's package.json with `npm init -y`
2. Installing first dependencies with `npm i typescript @types/node ts-node nodemon jest ts-jest @types/jest @types/supertest supertest --save-dev`
3. Generating typescript config with `npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`
4. Created `Dockerfile` and `docker-compose.yml` files to containerize the application
5. Installing dependencies with `npm i express sequelize pg pg-hstore cors` and `npm i @types/pg @types/express @types/cors --save-dev`
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
7. Tested request flow with Insomnia app, ensuring everything works appropriately
8. 

---
### Front end - My development process:
1. Creating the project structure with `create-react-app front-end`, automatically delivers an working React application
2. Created `Dockerfile` to speed up the testing process, created front service on `docker-compose.yml`
3. Installed dependencies with `npm i styled-components axios react-router-dom localforage match-sorter sort-by`
4. Added initial folder structure:
* src/api
  * index.js - contains all api-related logic, would usually create separate files for separate endpoints
* src/components
  * components/generic - contains generic, reusable components that should be used to create non-generic components.
  * components/SearchResults - non-generic component that displays search results, receives results as props
* src/screens
  * ArticleScreen - page for article entity visualization - requests article by id on entry and fallbacks to NotFoundScreen in case of errors
  * NotFoundScreen - page for Not Found error
  * SearchScreen - page for search screen, enables user to search articles through the api
* NavigationStack - contains navigation routes
* App.js - uses NavigationStack to display routes and render accordingly
* index.js - application entrypoint - renders App.js
5. Started developing generic components and SearchPage with SearchResults, search results contain links to Articles
6. Started developing ArticleScreen, requesting Articles by ID on the api to display accordingly
 

---