import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Failed } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Failed",
	component: Failed,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Failed>;

export const StyledFailed: ComponentStory<typeof Failed> = args => (
		<Failed/>
);
