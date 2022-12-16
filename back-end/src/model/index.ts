import Sequelize from "sequelize";

const sequelizeOptions: Sequelize.Options = {
  dialect: "postgres",
  database: "app",
  username: "app",
  password: "app",
  host: process.env.NODE_ENV === "test" ? "localhost" : "db",
  port: 5432,
  logging: true,
  sync: {
    force: true,
  },
  define: {
    timestamps: true,
    underscored: true,
  },
};

const sequelize = new Sequelize.Sequelize(sequelizeOptions);

export class Article extends Sequelize.Model {}
Article.init(
  {
    title: Sequelize.STRING,
    photo: Sequelize.STRING,
    description: Sequelize.TEXT,
    shortDescription: Sequelize.STRING,
  },
  { sequelize, modelName: "article" }
);

export default sequelize;
