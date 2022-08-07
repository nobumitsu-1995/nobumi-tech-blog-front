import React from "react";
import styled from "styled-components";

type Props = {
	time: Date | string;
	color?: string;
	fontSize?: string;
	fontWeight?: string;
	margin?: string;
	padding?: string;
	textalign?: "center" | "right" | "left";
	text1?: string;
	text2?: string;
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
	text-align: ${({ textalign }) => {
		return textalign;
	}};
	width: 100%;
`;

const StyledDate: React.FC<Props> = ({ color = "#111", fontSize = "16px", textalign = "left", ...props }) => {
	const time = new Date(props.time);
	const year = time.getFullYear();
	const month = time.getMonth() + 1;
	const date = time.getDate();

	return (
		<Time
			color={color}
			fontSize={fontSize}
			fontWeight={props.fontWeight}
			margin={props.margin}
			padding={props.padding}
			textalign={textalign}
			dateTime={`${year}-${month}-${date}`}
		>{props.text1}{`${year}/${month}/${date}`}{props.text2}</Time>
	);
};

export default StyledDate;
