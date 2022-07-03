import React from "react";
import styled from "styled-components";
import { Blog } from "../../../lib/type";
import { device, GapColumnList } from "../../styles/styled-components";
import { RecommendArticles, RecommendArticlesCategory, SearchCard, UserCard } from "../organisms";

type Props = {
	userData: Blog;
	recommendArticles: Blog[];
	recommendBackendArticles: Blog[];
	recommendFrontendArticles: Blog[];
};

const List = styled(GapColumnList)`
	box-sizing: content-box;

	@media ${device.tablet} {
		grid-template-columns: 1fr 1fr;

		.card {
			grid-column: 1 / 3;
		}
	}

	@media ${device.sp} {
		grid-template-columns: 1fr;

		.card {
			grid-column: 1 / 1;
		}
	}
`;

const SideBar: React.FC<Props> = ({ ...props }) => {
	return (
		<List gap="30px">
			<li className="card">
				<UserCard {...props.userData} />
			</li>
			<li className="card">
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
