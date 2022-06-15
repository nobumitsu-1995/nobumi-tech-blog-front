import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { client } from "../../../lib/functions/client";
import { returnArticles, returnArticlesMatchCategory, returnSideBarDatas } from "../../../lib/functions/articles";
import { Blog, Category as CategoryType, SideBarData } from "../../../lib/type";
import { Failed, Title } from "../../components/molecules";
import { Articles, Layout } from "../../components/templates";
import { Section } from "../../styles/styled-components";
import { PageProvider } from "../../../lib/PagenationContext";

type Props = {
	category: string;
	articles: Blog[];
	sideBarData: SideBarData;
};

type Params = {
	category: string;
};

const Category: React.FC<Props> = ({ category, articles, sideBarData }) => {
	return (
		<Layout {...sideBarData}>
			<Section padding="80px 0 0">
				<Title text={`${category.toUpperCase()}に関する記事一覧`} subText="Category" />
				{articles.length > 0 ? (
					<PageProvider itemLength={articles.length}>
						<Articles articles={articles} />
					</PageProvider>
				) : (
					<Failed />
				)}
			</Section>
		</Layout>
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

	const category = params!.category;
	const articles = returnArticles(data);
	const articlesMatchCategory = returnArticlesMatchCategory(articles, category);
	const { sideBarData } = returnSideBarDatas(data);

	return {
		props: {
			articles: articlesMatchCategory,
			category: category,
			sideBarData: sideBarData,
		},
	};
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const datas = await client
		.get({
			endpoint: "categories",
		})
		.then(res => {
			return res.contents;
		});

	// [{params: {category: string}}, ...]
	const paths = datas.map((data: CategoryType) => {
		return { params: { category: data.name } };
	});

	return {
		paths: paths,
		fallback: false,
	};
};

export default Category;
