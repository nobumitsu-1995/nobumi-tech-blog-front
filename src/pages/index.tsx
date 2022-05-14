import type { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
import { Articles, SideBar } from "../components/templates";
import { articleDatas, userData } from "../../lib/datas";
import { getArticlesAboutBackend, getArticlesAboutFrontend } from "../../lib/functions";

const Flex = styled.div`
	align-items: flex-start;
	display: flex;
	gap: 30px;
	margin: 0 auto;
	max-width: 1080px;
`;

const Home: NextPage = () => {
	const recommendArticles = articleDatas.slice(0, 3);
	const recommendBackendArticles = getArticlesAboutBackend(articleDatas).slice(0, 4);
	const recommendFrontendArticles = getArticlesAboutFrontend(articleDatas).slice(0, 4);

	return (
		<Flex>
			<Articles articles={articleDatas.slice(0, 5)} />
			<SideBar
				userData={userData}
				recommendArticles={recommendArticles}
				recommendBackendArticles={recommendBackendArticles}
				recommendFrontendArticles={recommendFrontendArticles}
			/>
		</Flex>
	);
};

export default Home;
