import { Op } from "sequelize";
import { Article } from "../model";

export const searchArticles = async (query: string) => {
  const articles = await Article.findAll({
    where: {
      title: {
        [Op.like]: `%${query}%`,
      },
    },
  });
  return articles;
};
