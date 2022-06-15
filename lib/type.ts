export type UserData = {
  img: string;
  name: string;
  text: string;
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
  privacy: boolean;
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

export type SideBarData = {
  userData: Blog;
  recommendArticles: Blog[];
  recommendBackendArticles: Blog[];
  recommendFrontendArticles: Blog[];
}