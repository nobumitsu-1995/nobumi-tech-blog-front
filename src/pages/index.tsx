import type { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
import { Articles, SideBar } from "../components/templates";
import { articleDatas } from "../../lib/datas";
import Layout from "../components/templates/Layout";

const Flex = styled.div`
	align-items: flex-start;
	display: flex;
	gap: 30px;
	margin: 0 auto;
	max-width: 1080px;
`;

const Home: NextPage = () => {
	return (
		<Layout>
			<Articles articles={articleDatas.slice(0, 5)} />
		</Layout>
	);
};

export default Home;
