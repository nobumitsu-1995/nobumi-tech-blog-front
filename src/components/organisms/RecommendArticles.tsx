import React from "react";
import { RecommendArticle } from "../../../lib/type";
import { GapColumnList } from "../../styles/styled-components";
import { Paper, Text } from "../atoms";
import { ArticleMedium } from "../molecules";

type Props = {
	articles: RecommendArticle[];
};

const RecommendArticles: React.FC<Props> = ({ ...props }) => {
	return (
		<Paper borderColor="#E63946" padding="25px 20px">
			<Text color="#271E16" fontSize="20px" fontWeight="bold" text="おすすめの記事" textalign="center" margin="0 0 25px" />
			<GapColumnList gap="20px">
				{props.articles.map(article => {
					return (
						<li key={article.id}>
							<ArticleMedium {...article} />
						</li>
					);
				})}
			</GapColumnList>
		</Paper>
	);
};

export default RecommendArticles;
