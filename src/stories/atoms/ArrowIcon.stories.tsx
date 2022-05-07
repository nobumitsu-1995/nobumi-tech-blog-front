import React from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArrowIcon } from "../../components/atoms";

export default {
	title: "Atoms/Icon",
	component: ArrowIcon,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ArrowIcon>;

export const StyledArrowIcon: ComponentStory<typeof ArrowIcon> = args => {
	const Flex = styled.div`
		display: flex;
		gap: 30px;
	`;

	return (
		<Flex>
			<ArrowIcon direction="top" size="20px" thickness="3px" />
			<ArrowIcon direction="right" size="20px" thickness="3px" />
			<ArrowIcon direction="bottom" size="20px" thickness="3px" />
			<ArrowIcon direction="left" size="20px" thickness="3px" />
		</Flex>
	);
};
