import { Op } from "sequelize";
import { Article } from "../model";

export const searchArticles = async (query: string) => {
  const articles = await Article.findAll({
    where: {
      title: {
        [Op.iLike]: `%${query}%`,
      },
    },
  });
  return articles;
};

export const getArticleById = async (id: number) => {
  const article = await Article.findOne({
    where: { id },
  });
  return article;
};
