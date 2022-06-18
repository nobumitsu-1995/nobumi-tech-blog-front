import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../styles/globals.css";
import styled from "styled-components";
import { Accordion } from "../../components/organisms";
import { AccordionBody } from "../../components/molecules";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Organisms/Accordion",
	component: Accordion,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Accordion>;

const Container = styled.div`
	margin: 0 auto;
	width: 400px;
`;

export const StyledAccordion: ComponentStory<typeof Accordion> = args => (
	<Container>
		<Accordion id={0} text="BACKEND">
			<AccordionBody articles={[]} />
		</Accordion>
	</Container>
);
