import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TitleInPaper } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";
import { Flex } from "../../styles/styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Title",
	component: TitleInPaper,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof TitleInPaper>;

const Container = styled(Flex)`
	background-color: #ecf0f1;
	flex-direction: column;
	gap: 80px;
	justify-content: center;
	margin: 0 auto;
	padding: 80px;
`;

export const StyledTitleInPaper: ComponentStory<typeof TitleInPaper> = args => (
	<Container>
		<TitleInPaper text="キーワードで検索" />
		<TitleInPaper text="カテゴリから検索" />
		<TitleInPaper text="タグから検索" />
	</Container>
);
