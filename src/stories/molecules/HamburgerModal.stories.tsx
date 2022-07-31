import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HamburgerModal } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Hamburger",
	component: HamburgerModal,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof HamburgerModal>;

export const StyledHamburgerModal: ComponentStory<typeof HamburgerModal> = args => (
	<HamburgerModal isOpen={args.isOpen} />
);
