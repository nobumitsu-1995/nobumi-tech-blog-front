import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../styles/globals.css";
import styled from "styled-components";
import { HamburgerMenu } from "../../components/organisms";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Organisms/Header",
	component: HamburgerMenu,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof HamburgerMenu>;

export const StyledHamburgerMenu: ComponentStory<typeof HamburgerMenu> = args => <HamburgerMenu />;
