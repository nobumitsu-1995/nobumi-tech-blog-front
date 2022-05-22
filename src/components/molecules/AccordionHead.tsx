import React from "react";
import styled from "styled-components";
import { Flex } from "../../styles/styled-components";
import { ArrowIcon, Text } from "../atoms";

type Props = {
	text: string;
	open: boolean;
};

const ButtonArea = styled(Flex)<{ open: boolean }>`
	cursor: pointer;
	border: 1px solid #9f9f9f;
	padding: 20px 25px;
	position: relative;
	width: 100%;

	${({ open }) => {
		return open
			? `
      border-radius: 5px 5px 0 0;
			border-bottom: 1px solid transparent;
			transition-duration: 0.3s;

			&::after {
				background-color: #9f9f9f;
				bottom: -1px;
				content: "";
				display: block;
				height: 1px;
				left: 0;
				margin: auto;
				position: absolute;
				right: 0;
				width: 90%;
			}
    `
			: `
      border-radius: 5px;
			transition-duration: 0.3s;
    `;
	}}
`;

const AccordionHead: React.FC<Props> = ({ ...props }) => {
	return (
		<ButtonArea open={props.open}>
			<Text color="#555" fontSize="20px" fontWeight="bold" text={props.text} />
			{props.open ? (
				<ArrowIcon color="#707070" direction="top" size="10px" thickness="3px" />
			) : (
				<ArrowIcon color="#707070" direction="bottom" size="10px" thickness="3px" />
			)}
		</ButtonArea>
	);
};

export default AccordionHead;
