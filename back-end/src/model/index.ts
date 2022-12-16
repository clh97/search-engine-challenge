import Sequelize from "sequelize";

const sequelizeOptions: Sequelize.Options = {
  dialect: "postgres",
  database: "app",
  username: "app",
  password: "app",
  host: "db",
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

seed();

async function seed() {
  await Article.sync({ force: true });
  await Article.create({
    title: "First Article",
    photo: "https://placekitten.com/200/300",
    description: "This is the First article",
    shortDescription: "First Article",
  });
  await Article.create({
    title: "Third Article",
    photo: "https://placekitten.com/300/200",
    description: "This is the Second article",
    shortDescription: "Second Article",
  });
  await Article.create({
    title: "Third Article",
    photo: "https://placekitten.com/500/250",
    description: "This is the Third article",
    shortDescription: "Third Article",
  });
}

export default sequelize;
