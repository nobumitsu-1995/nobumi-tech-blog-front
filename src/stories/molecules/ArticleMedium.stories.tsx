import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Article } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Article",
	component: Article,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Article>;

const Container = styled.div`
	margin: 0 auto;
	width: 640px;
`;

export const StyledArticle: ComponentStory<typeof Article> = args => (
	<Container>
		<Article
			category="カテゴリ"
			categoryLink="/category/sample"
			date={new Date()}
			id={1}
			img="/sample.png"
			text="テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
			title="記事タイトルが入ります。記事タイトルが入ります。記事タイトルが入ります。記事タイトルが入ります。記事タイトルが入ります。"
		/>
	</Container>
);
