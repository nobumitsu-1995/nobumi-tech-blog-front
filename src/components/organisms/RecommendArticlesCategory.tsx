import React from "react";
import { Blog } from "../../../lib/type";
import { GapColumnList } from "../../styles/styled-components";
import { Paper, Text } from "../atoms";
import { AccordionBody } from "../molecules";
import Accordion from "./Accordion";

type Props = {
	backendArticles: Blog[];
	frontendArticles: Blog[];
};

const RecommendArticlesCategory: React.FC<Props> = ({ ...props }) => {
	return (
		<Paper borderColor="#E63946" padding="25px 20px">
			<Text
				color="#271E16"
				fontSize="20px"
				fontWeight="bold"
				text="カテゴリ おすすめの記事"
				textalign="center"
				margin="0 0 25px"
			/>
			<GapColumnList gap="25px">
				<Accordion id={0} text="FRONTEND">
					<AccordionBody articles={props.frontendArticles} />
				</Accordion>
				<Accordion id={0} text="BACKEND">
					<AccordionBody articles={props.backendArticles} />
				</Accordion>
			</GapColumnList>
		</Paper>
	);
};

export default RecommendArticlesCategory;
