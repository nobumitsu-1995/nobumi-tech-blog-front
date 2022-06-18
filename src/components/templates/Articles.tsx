import React, { useEffect, useState } from "react";
import { PageProvider, returnCurrentBrogs, returnPageNum, usePageContext } from "../../../lib/PagenationContext";
import { Blog } from "../../../lib/type";
import { GapColumnList } from "../../styles/styled-components";
import { Article } from "../molecules";
import { Pagination } from "../organisms";

type Props = {
	articles: Blog[];
};

const Articles: React.FC<Props> = ({ articles }) => {
	const [currentBlogs, setCurrentBlogs] = useState<Blog[]>();
	const { current } = usePageContext();
	const itemPerPage = 2;

	useEffect(() => {
		setCurrentBlogs(returnCurrentBrogs(articles, itemPerPage, current));
	}, [articles, current]);

	return (
		<div>
			<GapColumnList gap="30px">
				{currentBlogs &&
					currentBlogs.map(article => {
						return (
							<li key={article.id}>
								<Article {...article} />
							</li>
						);
					})}
			</GapColumnList>
			<Pagination />
		</div>
	);
};

export default Articles;
