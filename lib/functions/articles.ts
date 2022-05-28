import { Blog } from "../type";
import { returnUserData } from "./profiles";

export const returnArticles = (articles: Blog[]) => {
  return (
    articles.filter(article => {
      return !article.userinfo;
    })
  )
}

export const returnArticle = (articles: Blog[], id: string) => {
  return (
    articles.find(article => {
      return article.id === id;
    })
  );
}

export const returnRecommendArticles = (articles: Blog[]) => {
  return (
    articles.filter(article => {
      return article.recommend;
    })
  );
}

export const returnArticlesAboutBackend = (articles: Blog[]) => {
  return (
    articles.filter(article => {
      const cats = article.category.map(cat => {
        return cat.name
      })
      return cats.includes("backend");
    })
  );
}

export const returnArticlesAboutFrontend = (articles: Blog[]) => {
  return (
    articles.filter(article => {
      const cats = article.category.map(cat => {
        return cat.name
      })
      return cats.includes("frontend");
    })
  );
}

export const returnArticlesMatchCategory = (articles: Blog[], category: string) => {
  return (
    articles.filter(article => {
      const cats = article.category.map(cat => {
        return cat.name
      })
      return cats.includes(category);
    })
  );
}

export const returnSideBarDatas = (articles: Blog[]) => {
	const datas = returnArticles(articles);
  const userData = returnUserData(articles)!;
  const recommendArticles = returnRecommendArticles(datas);
	const recommendBackendArticles = returnArticlesAboutBackend(datas);
	const recommendFrontendArticles = returnArticlesAboutFrontend(datas);
  
  return {
    sideBarData: {
      userData: userData,
      recommendArticles: recommendArticles,
      recommendBackendArticles: recommendBackendArticles,
      recommendFrontendArticles: recommendFrontendArticles
    }
  }
}
