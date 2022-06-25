import React from "react";
import { returnSideBarDatas } from "../../lib/functions/articles";
import { client } from "../../lib/functions/client";
import { returnPrivacyPoricyData } from "../../lib/functions/privacy";
import { privacyMetaData } from "../../lib/metaDatas";
import { Blog, SideBarData } from "../../lib/type";
import { PrivacyCard } from "../components/organisms";
import { Layout, Meta } from "../components/templates";

type Props = {
	article: Blog;
	sideBarData: SideBarData;
};

const privacy: React.FC<Props> = ({ ...props }) => {
	return (
		<>
			<Meta {...privacyMetaData} />
			<Layout {...props.sideBarData}>
				<PrivacyCard privacyData={props.article} />
			</Layout>
		</>
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
