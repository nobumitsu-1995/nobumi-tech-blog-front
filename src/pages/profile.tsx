import React from "react";
import { returnSideBarDatas } from "../../lib/functions/articles";
import { client } from "../../lib/functions/client";
import { profileMetaData } from "../../lib/metaDatas";
import { Blog, SideBarData } from "../../lib/type";
import { Layout, Meta, Profile } from "../components/templates";

type Props = {
	userData: Blog;
	sideBarData: SideBarData;
};

const profile: React.FC<Props> = ({ userData, sideBarData }) => {
	return (
		<>
			<Meta {...profileMetaData} />
			<Layout {...sideBarData}>
				<Profile userData={userData} />
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

	const { sideBarData } = returnSideBarDatas(data);
	const userData = sideBarData.userData;

	return {
		props: {
			userData: userData,
			sideBarData: sideBarData,
		},
	};
};

export default profile;
