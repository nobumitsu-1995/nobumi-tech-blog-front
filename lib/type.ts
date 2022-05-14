export type UserData = {
  img: string;
  name: string;
  text: string;
};

export type Article = {
  id: number;
  date: Date;
  title: string;
  category: string;
  img: string;
  description: string;
};

export type RecommendArticle = {
  id: number;
  img: string;
  title: string;
};

export type RecommendArticleCategory = {
  id: number;
  title: string;
};