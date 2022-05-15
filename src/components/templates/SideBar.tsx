import React from "react";
import styled from "styled-components";
import { articleDatas, userData } from "../../../lib/datas";
import { getArticlesAboutBackend, getArticlesAboutFrontend } from "../../../lib/functions/articles";
import { GapColumnList } from "../../styles/styled-components";
import { RecommendArticles, RecommendArticlesCategory, SearchCard, UserCard } from "../organisms";

const Side = styled(GapColumnList)`
	width: 400px;
`;

const SideBar = () => {
	const recommendArticles = articleDatas.slice(0, 3);
	const recommendBackendArticles = getArticlesAboutBackend(articleDatas).slice(0, 4);
	const recommendFrontendArticles = getArticlesAboutFrontend(articleDatas).slice(0, 4);

	return (
		<Side gap="30px">
			<UserCard {...userData} />
			<SearchCard />
			<RecommendArticles articles={recommendArticles} />
			<RecommendArticlesCategory
				backendArticles={recommendBackendArticles}
				frontendArticles={recommendFrontendArticles}
			/>
		</Side>
	);
};

export default SideBar;
