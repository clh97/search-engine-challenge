import express, { Application } from "express";
import cors from "cors";

import sequelize from "./model";

import ErrorHandlerMiddleware from "./middleware/error-handler";

import SearchRouter from "./controller/search";
import ArticleRouter from "./controller/article";

const app: Application = express();

app.set("sequelize", sequelize);
app.set("models", sequelize.models);

app.use(ErrorHandlerMiddleware);
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
}

app.use("/search", SearchRouter);
app.use("/article", ArticleRouter);

export default app;
