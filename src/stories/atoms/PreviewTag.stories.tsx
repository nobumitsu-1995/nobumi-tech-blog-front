import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PreviewTag } from "../../components/atoms";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Atoms/PreviewTag",
	component: PreviewTag,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof PreviewTag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const StyledPreviewTag: ComponentStory<typeof PreviewTag> = args => <PreviewTag />;
