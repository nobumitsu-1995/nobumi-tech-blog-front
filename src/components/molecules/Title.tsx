import React from "react";
import styled from "styled-components";
import { device } from "../../styles/styled-components";
import { Text } from "../atoms";
import TtlTag from "./TtlTag";

type Props = {
	tags?: string[];
	text: string;
	margin?: string;
	subText: string;
};

const StyledTtl = styled.h2`
	text-align: right;
	display: inline-block;
	margin: 0 0 50px;

	@media ${device.sp} {
		width: 100%;
	}
`;

const Container = styled.div<{ subText: string }>`
	margin-bottom: 12.5px;
	padding-bottom: 25.5px;
	position: relative;
	width: 510px;

	@media ${device.sp} {
		padding-bottom: 10px;
		width: 95%;
	}

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

		@media ${device.sp} {
			font-size: 70px;
			left: 0;
			top: -50px;
		}
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

		@media ${device.sp} {
			width: 100%;
		}
	}
`;

const Title: React.FC<Props> = ({ ...props }) => {
	return (
		<StyledTtl>
			<Container subText={props.subText}>
				<Text color="#271E16" fontSize="36px" fontWeight="bold" text={props.text} textalign="right" />
				{props.tags && <TtlTag tags={props.tags} />}
			</Container>
		</StyledTtl>
	);
};

export default Title;
