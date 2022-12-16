import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchArticle } from "../../api";
import ArticleScreenStyles from "./ArticleScreen.styles";

const ArticleScreen = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticle(id)
      .then((response) => {
        const { data: article } = response.data;
        setArticle(article);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  if (error) {
    throw error;
  }

  return (
    <ArticleScreenStyles.Container>
      <ArticleScreenStyles.Link to="/">Back to Search</ArticleScreenStyles.Link>
      <ArticleScreenStyles.Image src={article.photo} />
      <ArticleScreenStyles.Title>{article.title}</ArticleScreenStyles.Title>
      <ArticleScreenStyles.Description>
        {article.description}
      </ArticleScreenStyles.Description>
      <ArticleScreenStyles.Date>
        {new Date(article.createdAt).toLocaleDateString()}
      </ArticleScreenStyles.Date>
    </ArticleScreenStyles.Container>
  );
};

export default ArticleScreen;
