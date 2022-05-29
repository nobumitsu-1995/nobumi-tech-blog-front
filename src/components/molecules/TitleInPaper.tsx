import React from "react";
import styled from "styled-components";
import { Text } from "../atoms";

type Props = {
	text: string;
	margin?: string;
};

const StyledTitle = styled.h3<{ margin: string }>`
	border: 2px solid #9f9f9f;
	margin: ${({ margin }) => {
		return margin;
	}};
`;

const TitleInPaper: React.FC<Props> = ({ text, margin = "0 0 40px" }) => {
	return (
		<StyledTitle margin={margin}>
			<Text color="#271E16" fontWeight="bold" padding="17px 0" text={text} textalign="center" />
		</StyledTitle>
	);
};

export default TitleInPaper;
