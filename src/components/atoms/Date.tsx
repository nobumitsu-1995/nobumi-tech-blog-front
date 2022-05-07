import React from "react";
import styled from "styled-components";

type Props = {
	time: Date;
	color?: string;
	fontSize?: string;
	fontWeight?: string;
	margin?: string;
	padding?: string;
	textAlign?: "center" | "right" | "left";
};

const Time = styled.time<Omit<Props, "time">>`
	color: ${({ color }) => {
		return color;
	}};
	font-size: ${({ fontSize }) => {
		return fontSize;
	}};
	font-weight: ${({ fontWeight }) => {
		return fontWeight;
	}};
	margin: ${({ margin }) => {
		return margin;
	}};
	padding: ${({ padding }) => {
		return padding;
	}};
	text-align: ${({ textAlign }) => {
		return textAlign;
	}};
	width: 100%;
`;

const Date: React.FC<Props> = ({ color = "#111", fontSize = "16px", textAlign = "left", ...props }) => {
	const year = props.time.getFullYear();
	const month = props.time.getMonth() + 1;
	const date = props.time.getDate();

	return (
		<Time
			color={color}
			fontSize={fontSize}
			fontWeight={props.fontWeight}
			margin={props.margin}
			padding={props.padding}
			textAlign={textAlign}
			dateTime={`${year}-${month}-${date}`}
		>{`${year}/${month}/${date}`}</Time>
	);
};

export default Date;
