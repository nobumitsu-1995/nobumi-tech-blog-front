import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from "../../components/organisms";
import "../../styles/globals.css";
import { PageProvider } from "../../../lib/PagenationContext";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Pagination",
	component: Pagination,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Pagination>;

export const StyledPagination: ComponentStory<typeof Pagination> = args => (
	<PageProvider itemLength={100}>
		<Pagination />
	</PageProvider>
);
