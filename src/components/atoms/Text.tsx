import React from "react";
import styled from "styled-components";

export type TextProps = {
	color?: string;
	display?: string;
	fontFamily?: string;
	fontSize?: string;
	fontWeight?: string;
	lineheight?: string;
	margin?: string;
	padding?: string;
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
	text: string | React.ReactNode | (string & React.ReactNode);
	textalign?: "center" | "right" | "left";
};

const P = styled(({ tag, ...props }) => React.createElement(tag, props))<TextProps>`
	color: ${({ color }) => {
		return color;
	}};
	display: ${({ display }) => {
		return display;
	}};
	font-family: ${({ fontFamily }) => {
		return fontFamily;
	}};
	font-size: ${({ fontSize }) => {
		return fontSize;
	}};
	font-weight: ${({ fontWeight }) => {
		return fontWeight;
	}};
	line-height: ${({ lineheight }) => {
		return lineheight;
	}};
	margin: ${({ margin }) => {
		return margin;
	}};
	padding: ${({ padding }) => {
		return padding;
	}};
	text-align: ${({ textalign }) => {
		return textalign;
	}};
`;

const Text: React.FC<TextProps> = ({
	color = "#111",
	fontFamily = "Noto Sans JP",
	fontSize = "16px",
	tag = "p",
	textalign = "left",
	...props
}) => {
	return (
		<P tag={tag} color={color} fontFamily={fontFamily} fontSize={fontSize} textalign={textalign} {...props}>
			{props.text}
		</P>
	);
};

export default Text;
