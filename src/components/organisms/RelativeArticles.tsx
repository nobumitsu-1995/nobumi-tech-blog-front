import React from "react";
import styled from "styled-components";
import { Blog } from "../../../lib/type";
import { device } from "../../styles/styled-components";
import { Paper } from "../atoms";
import { ArticleSmall, TitleInPaper } from "../molecules";

type Props = {
	articleDatas: Blog[];
};

const Grid = styled.ul`
	display: grid;
	gap: 10px;
	grid-template-columns: 1fr 1fr;

	@media ${device.sp} {
		grid-template-columns: 1fr;
	}
`;

const RelativeArticles: React.FC<Props> = ({ articleDatas }) => {
	return (
		<Paper padding="20px">
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
