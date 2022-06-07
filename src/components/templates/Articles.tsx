import React from "react";
import { Blog } from "../../../lib/type";
import { GapColumnList } from "../../styles/styled-components";
import { Article } from "../molecules";

type Props = {
	articles: Blog[];
};

const Articles: React.FC<Props> = ({ articles }) => {
	return (
		<GapColumnList gap="30px">
			{articles.map(article => {
				return (
					<li key={article.id}>
						<Article {...article} />
					</li>
				);
			})}
		</GapColumnList>
	);
};

export default Articles;
