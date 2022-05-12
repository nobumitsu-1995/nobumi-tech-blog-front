import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "../components/atoms";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Atoms/Text",
	component: Text,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const StyledText: ComponentStory<typeof Text> = args => <Text text="Sample Text" />;
