import express, { Application } from "express";
import cors from "cors";

import sequelize from "./model";
import ErrorHandlerMiddleware from "./middleware/error-handler";
import SearchRouter from "./controller/search";

const app: Application = express();

app.set("sequelize", sequelize);
app.set("models", sequelize.models);

app.use(ErrorHandlerMiddleware);
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/search", SearchRouter);

export default app;
