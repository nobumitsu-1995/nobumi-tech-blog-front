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
  tag?: string[];
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

export type Eyecatch = {
  url: string;
  height: number;
  width: number;
}

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

export type Tag = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  link: string;
}

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  description: string;
  eyecatch: Eyecatch;
  category: Category[];
  tag?: Tag[];
  recommend: boolean;
  userinfo: boolean;
}