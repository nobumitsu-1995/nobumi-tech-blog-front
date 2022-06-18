import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import {
	returnArticle,
	returnArticles,
	returnArticlesMatchCategory,
	returnSideBarDatas,
} from "../../../lib/functions/articles";
import { client } from "../../../lib/functions/client";
import { url } from "../../../lib/metaDatas";
import { Blog, SideBarData } from "../../../lib/type";
import { ArticleDetail, Layout, Meta } from "../../components/templates";

type Props = {
	article: Blog;
	relativeArticles: Blog[];
	sideBarData: SideBarData;
};

type Params = {
	id: string;
};

const Article: React.FC<Props> = ({ article, relativeArticles, sideBarData }) => {
	return (
		<>
			<Meta
				url={`${url}/${article.id}`}
				pageTitle={article.title}
				pageDescription={article.description}
				imgUrl={article.eyecatch.url}
			/>
			<Layout {...sideBarData}>
				<ArticleDetail article={article} relativeArticles={relativeArticles} />
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	const data = await client
		.get({
			endpoint: "blogs",
		})
		.then(res => {
			return res.contents;
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
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const datas = await client
		.get({
			endpoint: "blogs",
		})
		.then(res => {
			return res.contents;
		});

	const articleDatas = returnArticles(datas);

	// [{params: {id: string}}, ...]
	const paths = articleDatas.map((data: Blog) => {
		return { params: { id: data.id } };
	});

	return {
		paths: paths,
		fallback: false,
	};
};

export default Article;
