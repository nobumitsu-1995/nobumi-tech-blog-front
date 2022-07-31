import React from "react";
import styled from "styled-components";

type Props = {
	color?: string;
	thickness?: number;
	isOpen?: boolean;
	size?: number;
};

const Figure = styled.figure<{ size: number }>`
	height: ${({ size }) => size}px;
	position: relative;
	width: ${({ size }) => size}px;
`;

const Span1 = styled.span<Props>`
	background-color: ${({ color }) => color};
	content: "";
	display: block;
	height: ${({ thickness }) => thickness}px;
	position: absolute;
	left: ${({ thickness }) => thickness! / 2}px;
	top: 0;
	transform-origin: 0 0;
	transform: rotate(45deg);
	width: ${({ size }) => size! * 1.35}px;
`;

const Span2 = styled(Span1)`
	left: 0;
	top: ${({ size, thickness }) => size! - thickness! / 2}px;
	transform-origin: 0 0;
	transform: rotate(-45deg);
`;

const CrossIcon: React.FC<Props> = ({ color = "#fff", thickness = 3, isOpen = false, size = 30 }) => {
	return (
		<Figure size={size}>
			<Span1 color={color} thickness={thickness} isOpen={isOpen} size={size} />
			<Span2 color={color} thickness={thickness} isOpen={isOpen} size={size} />
		</Figure>
	);
};

export default CrossIcon;
