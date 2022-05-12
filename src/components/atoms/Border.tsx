import React from "react";
import styled from "styled-components";

type Props = {
	color: string;
	height: string;
	width: string;
};

const Figure = styled.figure<Props>`
	background-color: ${({ color }) => {
		return color;
	}};
	display: block;
	height: ${({ height }) => {
		return height;
	}};
	margin: 0 auto;
	width: ${({ width }) => {
		return width;
	}};
`;

const Border: React.FC<Props> = ({ ...props }) => {
	return <Figure {...props} />;
};

export default Border;
