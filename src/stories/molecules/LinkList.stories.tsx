import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LinkList } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";
import { Flex } from "../../styles/styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/List",
	component: LinkList,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof LinkList>;

const Container = styled(Flex)`
	background-color: #ecf0f1;
	flex-direction: column;
	gap: 80px;
	justify-content: center;
	margin: 0 auto;
	padding: 80px;
`;

export const StyledLinkList: ComponentStory<typeof LinkList> = args => (
	<Container>
		<LinkList links={[
			{
				text: "FRONTEND",
				link: ""
			},
			{
				text: "BACKEND",
				link: ""
			},
			{
				text: "OTHER",
				link: ""
			},
		]} />
		<LinkList links={[
			{
				text: "React.js",
				link: ""
			},
			{
				text: "Next.js",
				link: ""
			},
			{
				text: "Typescript",
				link: ""
			},
			{
				text: "Javascript",
				link: ""
			},
			{
				text: "Ruby on Rails",
				link: ""
			},
		]} />
	</Container>
);
