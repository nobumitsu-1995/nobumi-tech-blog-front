import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../components/atoms";

export default {
	title: "Atoms/Input",
	component: Input,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Input>;

export const StyledInput: ComponentStory<typeof Input> = args => <Input placeholder="sample input" />;
