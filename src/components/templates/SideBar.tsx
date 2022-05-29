import React from "react";
import styled from "styled-components";
import { Blog } from "../../../lib/type";
import { GapColumnList } from "../../styles/styled-components";
import { RecommendArticles, RecommendArticlesCategory, SearchCard, UserCard } from "../organisms";

type Props = {
	userData: Blog;
	recommendArticles: Blog[];
	recommendBackendArticles: Blog[];
	recommendFrontendArticles: Blog[];
};

const List = styled(GapColumnList)`
	box-sizing: content-box;
	width: 300px;
`;

const SideBar: React.FC<Props> = ({ ...props }) => {
	return (
		<List gap="30px">
			<li>
				<UserCard {...props.userData} />
			</li>
			<li>
				<SearchCard />
			</li>
			<li>
				<RecommendArticles articles={props.recommendArticles} />
			</li>
			<li>
				<RecommendArticlesCategory
					backendArticles={props.recommendBackendArticles}
					frontendArticles={props.recommendFrontendArticles}
				/>
			</li>
		</List>
	);
};

export default SideBar;
