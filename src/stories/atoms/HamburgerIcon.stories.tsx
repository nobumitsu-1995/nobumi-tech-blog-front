import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HamburgerIcon } from "../../components/atoms";
import styled from "styled-components";

export default {
	title: "Atoms/HamburgerIcon",
	component: HamburgerIcon,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof HamburgerIcon>;

const Container = styled.div`
	background-color: #111;
	display: inline-block;
	padding: 30px;
`;

export const StyledCrossIcon: ComponentStory<typeof HamburgerIcon> = args => (
	<Container>
		<HamburgerIcon />
	</Container>
);
