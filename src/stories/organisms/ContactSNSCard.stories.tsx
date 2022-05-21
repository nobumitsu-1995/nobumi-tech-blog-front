import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../styles/globals.css";
import styled from "styled-components";
import { ContactSNSCard } from "../../components/organisms";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Organisms/Contact",
	component: ContactSNSCard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ContactSNSCard>;

export const StyledContactSNSCard: ComponentStory<typeof ContactSNSCard> = args => (
	<ContactSNSCard />
);
