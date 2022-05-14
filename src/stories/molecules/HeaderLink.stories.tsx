import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeaderLink } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/HeaderLinks",
	component: HeaderLink,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof HeaderLink>;

const Container = styled.div`
	background-color: #2E3E4E;
	display: flex;
	height: 70px;
	margin: 0 auto;
	width: 400px;
`;

export const StyledHeaderLink: ComponentStory<typeof HeaderLink> = args => (
	<Container>
		<HeaderLink link="/sample" img="images/home.png" text="HOME"	/>
		<HeaderLink link="/sample" img="images/home.png" text="HOME"	/>
		<HeaderLink link="/sample" img="images/home.png" text="HOME"	/>
	</Container>
);
