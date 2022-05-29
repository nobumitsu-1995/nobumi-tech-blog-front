import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../styles/globals.css";
import styled from "styled-components";
import { Footer1 } from "../../components/organisms";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Organisms/Footer",
	component: Footer1,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Footer1>;

export const StyledFooter1: ComponentStory<typeof Footer1> = args => <Footer1 />;
