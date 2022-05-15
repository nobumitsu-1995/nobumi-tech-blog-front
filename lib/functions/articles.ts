
import { Article } from "../type";

export const getArticlesAboutBackend = (articles: Article[]) => {
  return (
    articles.filter(article => {
      return article.category === "backend";
    })
  );
}

export const getArticlesAboutFrontend = (articles: Article[]) => {
  return (
    articles.filter(article => {
      return article.category === "frontend";
    })
  );
}


