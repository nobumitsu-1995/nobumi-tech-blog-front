import React from "react";
import styled from "styled-components";
import { Text } from "../atoms";
import TtlTag from "./TtlTag";

type Props = {
	tags?: string[];
	text: string;
	margin?: string;
	subText: string;
};

const StyledTtl = styled.h2<{ margin: string }>`
	text-align: right;
	margin: ${({ margin }) => {
		return margin;
	}};
`;

const Container = styled.div<{ subText: string }>`
	margin-bottom: 12.5px;
	padding-bottom: 25.5px;
	position: relative;
	width: 510px;

	&::before {
		content: "${({ subText }) => {
			return subText;
		}}";
		color: #55555526;
		display: block;
		font-size: 88px;
		font-weight: bold;
		left: -40px;
		top: -70px;
		position: absolute;
	}

	&::after {
		background-color: #2e3e4e;
		bottom: 0;
		content: "";
		display: block;
		height: 5px;
		position: absolute;
		right: 0;
		width: 420px;
	}
`;

const Title: React.FC<Props> = ({ margin = "0 0 50px", ...props }) => {
	return (
		<StyledTtl margin={margin}>
			<Container subText={props.subText}>
				<Text color="#271E16" fontSize="36px" fontWeight="bold" text={props.text} textalign="right" />
			</Container>
			{props.tags && <TtlTag tags={props.tags} />}
		</StyledTtl>
	);
};

export default Title;
