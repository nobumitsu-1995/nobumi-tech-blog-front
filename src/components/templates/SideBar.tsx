import React from "react";
import styled from "styled-components";
import { articleDatas, userData } from "../../../lib/datas";
import { getArticlesAboutBackend, getArticlesAboutFrontend } from "../../../lib/functions/articles";
import { GapColumnList } from "../../styles/styled-components";
import { RecommendArticles, RecommendArticlesCategory, SearchCard, UserCard } from "../organisms";

const List = styled(GapColumnList)`
	box-sizing: content-box;
	width: 300px;
`

const SideBar = () => {
	const recommendArticles = articleDatas.slice(0, 3);
	const recommendBackendArticles = getArticlesAboutBackend(articleDatas).slice(0, 4);
	const recommendFrontendArticles = getArticlesAboutFrontend(articleDatas).slice(0, 4);

	return (
		<List gap="30px">
			<li><UserCard {...userData} /></li>
			<li><SearchCard /></li>
			<li><RecommendArticles articles={recommendArticles} /></li>
			<li>
				<RecommendArticlesCategory
					backendArticles={recommendBackendArticles}
					frontendArticles={recommendFrontendArticles}
				/>
			</li>
		</List>
	);
};

export default SideBar;
