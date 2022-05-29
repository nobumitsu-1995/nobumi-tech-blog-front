import React from "react";
import { returnSideBarDatas } from "../../lib/functions/articles";
import { client } from "../../lib/functions/client";
import { returnTagDatas } from "../../lib/functions/tags";
import { SideBarData, Tag } from "../../lib/type";
import { Title } from "../components/molecules";
import { Layout, Search } from "../components/templates";
import { Section } from "../styles/styled-components";

type Props = {
	sideBarData: SideBarData;
	tagDatas: {
		text: string;
		link: string;
	}[];
};

const index: React.FC<Props> = ({ sideBarData, tagDatas }) => {
	return (
		<Layout {...sideBarData}>
			<Section padding="80px 0 0">
				<Title text="記事検索フォーム" subText="Search" />
				<Search tagDatas={tagDatas}/>
			</Section>
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
	const { sideBarData } = returnSideBarDatas(data);

	const datas = await client
	.get({
		endpoint: "tags",
	})
	.then(res => {
		return res.contents;
	});
	const tagDatas = returnTagDatas(datas);

	return {
		props: {
			sideBarData: sideBarData,
			tagDatas: tagDatas
		},
	};
};

export default index;
