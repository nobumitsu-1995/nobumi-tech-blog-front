import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterList1 } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Footer",
	component: FooterList1,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof FooterList1>;

const Container = styled.div`
	background: #2e3e4e;
	margin: 0 auto;
	width: 400px;
`;

export const StyledFooterList1: ComponentStory<typeof FooterList1> = args => (
	<Container>
		<FooterList1
			datas={[
				{
					text: "HOME",
					link: "/",
				},
				{
					text: "SEARCH",
					link: "/search",
				},
				{
					text: "PROFILE",
					link: "/profile",
				},
				{
					text: "CONTACT",
					link: "/contact",
				},
			]}
		/>
	</Container>
);
