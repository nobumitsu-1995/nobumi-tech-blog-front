import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TtlTag } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";
import { Flex } from "../../styles/styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Tag",
	component: TtlTag,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof TtlTag>;

const Container = styled(Flex)`
	background-color: #333;
	height: 100px;
	justify-content: center;
	margin: 0 auto;
	width: 400px;
`;

export const StyledTtlTag: ComponentStory<typeof TtlTag> = args => (
	<Container>
		<TtlTag tags={["React.js", "Javascript"]} />
	</Container>
);
