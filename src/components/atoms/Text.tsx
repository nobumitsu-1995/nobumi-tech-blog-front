import React from "react";
import styled from "styled-components";

export type TextProps = {
	color?: string;
	fontFamily?: string;
	fontSize?: string;
	fontWeight?: string;
	lineHeight?: string;
	margin?: string;
	padding?: string;
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
	text: string | React.ReactNode | (string & React.ReactNode);
	textAlign?: "center" | "right" | "left";
};

const Text: React.FC<TextProps> = ({
	color = "#111",
	fontFamily = "Noto Sans JP",
	fontSize = "16px",
	tag = "p",
	textAlign = "left",
	...props
}) => {
	const P = styled.p``;
	const StyledText = styled(P.withComponent(tag))`
		color: ${color};
		font-family: ${fontFamily};
		font-size: ${fontSize};
		font-weight: ${props.fontWeight};
		line-height: ${props.lineHeight};
		margin: ${props.margin};
		padding: ${props.padding};
		text-align: ${textAlign};
	`;

	return <StyledText>{props.text}</StyledText>;
};

export default Text;
