import React from "react";
import styled from "styled-components";
import { articleDatas } from "../../../lib/datas";
import { Blog } from "../../../lib/type";
import { Paper } from "../atoms";
import { ArticleSmall, TitleInPaper } from "../molecules";

type Props = {
	articleDatas: Blog[];
};

const Grid = styled.ul`
	display: grid;
	gap: 10px;
	grid-template-columns: 1fr 1fr;
`;

const RelativeArticles: React.FC<Props> = ({ articleDatas }) => {
	return (
		<Paper padding="50px">
			<TitleInPaper text="関連記事" />
			<Grid>
				{articleDatas.map(data => {
					return (
						<li key={data.title}>
							<ArticleSmall article={data} />
						</li>
					);
				})}
			</Grid>
		</Paper>
	);
};

export default RelativeArticles;
