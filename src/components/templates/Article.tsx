import React from "react";
import { url } from "../../../lib/metaDatas"
import { Blog } from "../../../lib/type";
import { GapColumnList } from "../../styles/styled-components";
import { ArticleCard, ContactSNSCard, RelativeArticles, ShareSNSCard } from "../organisms";

type Props = {
	article: Blog;
	relativeArticles?: Blog[];
	hideContact?: boolean;
};

const Article: React.FC<Props> = ({ article, relativeArticles, hideContact = false }) => {
	return (
		<GapColumnList gap="30px">
			<li>
				<ArticleCard {...article} />
			</li>
			<li>{!hideContact && <ShareSNSCard url={`${url}/${article.id}`} />}</li>
			<li>{relativeArticles && <RelativeArticles articleDatas={relativeArticles} />}</li>
		</GapColumnList>
	);
};

export default Article;
