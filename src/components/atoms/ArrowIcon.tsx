import React from "react";
import styled from "styled-components";

type Props = {
	color?: string;
	direction?: "top" | "bottom" | "right" | "left";
	size?: string;
	thickness?: string;
};

const Figure = styled.figure<{
	size: string;
	direction: "top" | "bottom" | "right" | "left";
}>`
	height: ${({ size }) => {
		return size;
	}};
	margin: 0;
	position: relative;
	transform: rotate(
		${({ direction }) => {
			return direction === "top"
				? "-45deg"
				: direction === "bottom"
				? "135deg"
				: direction === "left"
				? "-135deg"
				: "45deg";
		}}
	);
	width: ${({ size }) => {
		return size;
	}};
`;

const Line1 = styled.span<{ color: string; thickness: string }>`
	background-color: ${({ color }) => {
		return color;
	}};
	border-radius: ${({ thickness }) => {
		return thickness;
	}};
	height: ${({ thickness }) => {
		return thickness;
	}};
	position: absolute;
	top: 0;
	right: 0px;
	width: 100%;
`;

const Line2 = styled.span<{ color: string; thickness: string }>`
	background-color: ${({ color }) => {
		return color;
	}};
	border-radius: ${({ thickness }) => {
		return thickness;
	}};
	height: 100%;
	position: absolute;
	right: 0;
	top: 0px;
	width: ${({ thickness }) => {
		return thickness;
	}};
`;

const ArrowIcon: React.FC<Props> = ({ color = "#111", direction = "right", size = "7px", thickness = "1.5px" }) => {
	return (
		<Figure size={size} direction={direction}>
			<Line1 color={color} thickness={thickness} />
			<Line2 color={color} thickness={thickness} />
		</Figure>
	);
};

export default ArrowIcon;
