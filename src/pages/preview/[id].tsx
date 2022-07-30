import { GetServerSideProps } from "next";
import React, { useEffect, useState } from 'react'
import { returnArticle, returnArticlesMatchCategory, returnSideBarDatas } from "../../../lib/functions/articles";
import { client } from "../../../lib/functions/client";
import { Blog, SideBarData } from "../../../lib/type";
import { PreviewTag } from "../../components/atoms";
import { ArticleDetail, Layout } from "../../components/templates";

type Props = {
	article: Blog;
	relativeArticles: Blog[];
	sideBarData: SideBarData;
};

type Params = {
	id: string;
};

const Preview: React.FC<Props> = ({ article, relativeArticles, sideBarData }) => {
  const [isPermit, setIsPermit] = useState(false);

  useEffect(() => {
    if (window.prompt("passwordを入力してください") === "password") {
      return setIsPermit(true)
    }
    alert("passwordが違います。")
  }, [])

  return (
    isPermit ?
    <Layout {...sideBarData}>
      <PreviewTag/>
      <ArticleDetail article={article} relativeArticles={relativeArticles} />
    </Layout> :
    null
  )
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }) => {
  const data = await client
    .get({
      endpoint: "blogs"
    })
    .then(res => {
      return res.contents
    });

  const id = params!.id;
  const articleData = returnArticle(data, id)!;
  const relativeArticles = returnArticlesMatchCategory(data, articleData.category[0].name);
  const { sideBarData } = returnSideBarDatas(data);

  return {
    props: {
      article: articleData,
			relativeArticles: relativeArticles,
			sideBarData: sideBarData,
    }
  }
}

export default Preview