/* eslint-disable @next/next/no-typos */
import React from "react";
import { returnSideBarDatas } from "../../lib/functions/articles";
import { client } from "../../lib/functions/client";
import { returnPrivacyPoricyData } from "../../lib/functions/privacy";
import { Blog, SideBarData } from "../../lib/type";
import { Layout } from "../components/templates";
import Article from "../components/templates/Article";

type Props = {
	article: Blog;
	sideBarData: SideBarData;
};

const privacy: React.FC<Props> = ({ ...props }) => {
	return (
		<Layout {...props.sideBarData}>
			<Article article={props.article} hideContact />
		</Layout>
	);
};

export const getStaticProps = async () => {
	const data = await client
		.get({
			endpoint: "blogs",
		})
		.then(res => {
			return res.contents;
		});

	const article = returnPrivacyPoricyData(data);
	const { sideBarData } = returnSideBarDatas(data);

	return {
		props: {
			article: article,
			sideBarData: sideBarData,
		},
	};
};

export default privacy;