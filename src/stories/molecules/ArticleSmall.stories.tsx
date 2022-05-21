import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleSmall } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";
import { articleDatas } from "../../../lib/datas";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Article",
	component: ArticleSmall,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ArticleSmall>;

const Container = styled.div`
	margin: 0 auto;
	width: 640px;
`;

const article = articleDatas[0]

export const StyledArticleSmall: ComponentStory<typeof ArticleSmall> = args => (
	<Container>
		<ArticleSmall article={article}/>
	</Container>
);
