import React from "react";
import styled from "styled-components";

type InputProps = Omit<JSX.IntrinsicElements["input"], "ref">;

type Props = InputProps & {
	borderRadius?: string;
	fontSize?: string;
	margin?: string;
};

const StyledInput = styled.input<Props>`
	background-color: #fff;
	border: 1px solid #aaa;
	border-radius: ${({ borderRadius }) => {
		return borderRadius;
	}};
	box-sizing: border-box;
	font-size: ${({ fontSize }) => {
		return fontSize;
	}};
	margin: ${({ margin }) => {
		return margin;
	}};
	padding: 8px;
	width: 100%;

	&::placeholder {
		color: #ddd;
	}

	&:focus {
		outline: 2px solid #111111;
	}
`;

const Input: React.FC<Props> = props => {
	const { fontSize = "16px", borderRadius = "3px", margin = "", ...inputProps } = props;

	return <StyledInput borderRadius={borderRadius} fontSize={fontSize} margin={margin} {...inputProps} />;
};

export default Input;
