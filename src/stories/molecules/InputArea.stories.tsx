import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputArea } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";
import { Flex } from "../../styles/styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Input",
	component: InputArea,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof InputArea>;

const Container = styled(Flex)`
	background-color: #ecf0f1;
	flex-direction: column;
	gap: 80px;
	justify-content: center;
	margin: 0 auto;
	padding: 80px;
`;

export const StyledInputArea: ComponentStory<typeof InputArea> = args => (
	<Container>
		<InputArea label="名前" name="name" />
		<InputArea label="メールアドレス" name="e-mail" error />
	</Container>
);
