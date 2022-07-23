import React from "react";
import styled from "styled-components";

type Props = {
	color?: string;
	thickness?: number;
	isOpen?: boolean;
	size?: number;
};

const Figure = styled.figure<{ size: number }>`
	height: ${({ size }) => (size * 4) / 5}px;
	position: relative;
	width: ${({ size }) => size}px;
`;

const Span1 = styled.span<Props>`
	background-color: ${({ color }) => color};
	content: "";
	display: block;
	height: ${({ thickness }) => thickness}px;
	position: absolute;
	width: ${({ size }) => size}px;
`;

const Span2 = styled(Span1)`
	bottom: 0;
`;

const Span3 = styled(Span1)`
	bottom: 0;
	top: 0;
	margin: auto;
`;

const HamburgerIcon: React.FC<Props> = ({ color = "#fff", thickness = 3, isOpen = false, size = 30 }) => {
	return (
		<Figure size={size}>
			<Span1 color={color} thickness={thickness} isOpen={isOpen} size={size} />
			<Span2 color={color} thickness={thickness} isOpen={isOpen} size={size} />
			<Span3 color={color} thickness={thickness} isOpen={isOpen} size={size} />
		</Figure>
	);
};

export default HamburgerIcon;
