import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Text, { TextProps } from "./Text";

type Props = {
	fontSize?: string;
	link: string;
	text: string;
};

const BlueLink = styled.a<{ fontSize: string }>`
	color: #7c83cc;
	font-size: ${({ fontSize }) => {
		return fontSize;
	}};
	font-weight: bold;
	text-decoration: underline;

	&:hover {
		opacity: 0.6;
		transition-duration: 0.3s;
	}
`;

const StyledLink: React.FC<Props> = ({ fontSize = "12px", ...props }) => {
	return (
		<Link href={props.link} passHref>
			<BlueLink fontSize={fontSize}>{props.text}</BlueLink>
		</Link>
	);
};

export default StyledLink;
