import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../components/atoms";

export default {
	title: "Atoms/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Button>;

export const StyledButton: ComponentStory<typeof Button> = args => (
	<Button
		label="Sample Button"
		onClick={() => {
			console.log("clicked!");
		}}
	/>
);
