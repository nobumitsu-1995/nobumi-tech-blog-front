import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterList2 } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Footer",
	component: FooterList2,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof FooterList2>;

const Container = styled.div`
	background: #2E3E4E;
	margin: 0 auto;
	width: 400px;
`;

export const StyledFooterList2: ComponentStory<typeof FooterList2> = args => (
	<Container>
		<FooterList2 
		title="CATEGORIES"
		datas={[
			{
				text: "FRONTEND",
				link: "/category/frontend",
			},
			{
				text: "BACKEND",
				link: "/category/backend",
			},
			{
				text: "OTHER",
				link: "/category/other",
			},
		]}/>
	</Container>
);
