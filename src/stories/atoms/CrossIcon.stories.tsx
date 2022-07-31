import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CrossIcon } from "../../components/atoms";
import styled from "styled-components";

export default {
	title: "Atoms/CrossIcon",
	component: CrossIcon,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof CrossIcon>;

const Container = styled.div`
	background-color: #111;
	display: inline-block;
	padding: 30px;
`;

export const StyledCrossIcon: ComponentStory<typeof CrossIcon> = args => (
	<Container>
		<CrossIcon />
	</Container>
);
