import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Date as StyledDate } from "../../components/atoms";

export default {
	title: "Atoms/Text",
	component: StyledDate,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof StyledDate>;

export const ExportDate: ComponentStory<typeof StyledDate> = args => <StyledDate time={new Date()} />;
