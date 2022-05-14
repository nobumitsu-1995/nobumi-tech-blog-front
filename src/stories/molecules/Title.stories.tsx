import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";
import { Flex } from "../../styles/styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Title",
	component: Title,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Title>;

const Container = styled(Flex)`
	background-color: #ecf0f1;
	flex-direction: column;
	gap: 80px;
	justify-content: center;
	margin: 0 auto;
	padding: 80px;
`;

export const StyledTitle: ComponentStory<typeof Title> = args => (
	<Container>
		<Title tags={["React.js", "Javascript"]} text="FRONTENDに関する記事一覧" subText="Category" />
		<Title text="お問い合わせ" subText="Contact" />
		<Title text="記事検索フォーム" subText="Search" />
	</Container>
);
