import React from "react";
import { Blog } from "../../../lib/type";
import { GapColumnList } from "../../styles/styled-components";
import { ArticleCard, ContactSNSCard, RelativeArticles } from "../organisms";

type Props = {
	article: Blog;
	relativeArticles: Blog[];
};

const Article: React.FC<Props> = ({ article, relativeArticles }) => {
	return (
		<GapColumnList gap="30px">
			<li>
				<ArticleCard {...article} />
			</li>
			<li>
				<ContactSNSCard />
			</li>
			<li>
				<RelativeArticles articleDatas={relativeArticles} />
			</li>
		</GapColumnList>
	);
};

export default Article;
