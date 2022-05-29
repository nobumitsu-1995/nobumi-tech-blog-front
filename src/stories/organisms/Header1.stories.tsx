import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../styles/globals.css";
import styled from "styled-components";
import { Header1 } from "../../components/organisms";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Organisms/Header",
	component: Header1,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Header1>;

export const StyledHeader1: ComponentStory<typeof Header1> = args => <Header1 />;
