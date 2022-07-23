import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HamburgerButton } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Hamburger",
	component: HamburgerButton,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof HamburgerButton>;

const Container = styled.div`
	background-color: #2e3e4e;
	display: flex;
	height: 70px;
	margin: 0 auto;
	width: 400px;
`;

export const StyledHamburgerButton: ComponentStory<typeof HamburgerButton> = args => (
	<Container>
		<HamburgerButton isOpen={args.isOpen} onClick={args.onClick} />
	</Container>
);
