import React from "react";
import { returnSideBarDatas } from "../../lib/functions/articles";
import { client } from "../../lib/functions/client";
import { contactMetaData } from "../../lib/metaDatas";
import { SideBarData } from "../../lib/type";
import { Title } from "../components/molecules";
import { Contact, Layout, Meta } from "../components/templates";
import { Section } from "../styles/styled-components";

type Props = {
	sideBarData: SideBarData;
};

const contact: React.FC<Props> = ({ sideBarData }) => {
	return (
		<>
			<Meta {...contactMetaData} />
			<Layout {...sideBarData}>
				<Section padding="80px 0 0">
					<Title text="お問い合わせ" subText="Contact" />
					<Contact />
				</Section>
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

	return {
		props: {
			sideBarData: sideBarData,
		},
	};
};

export default contact;
