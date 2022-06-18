import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleMedium } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Article",
	component: ArticleMedium,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ArticleMedium>;

const Container = styled.div`
	margin: 0 auto;
	width: 400px;
`;

export const StyledArticleMedium: ComponentStory<typeof ArticleMedium> = args => (
	<Container>
		<ArticleMedium
			id="0"
			title="タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。"
			eyecatch={{
				url: "",
				height: 0,
				width: 0,
			}}
		/>
	</Container>
);
