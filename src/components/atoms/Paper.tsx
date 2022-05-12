import React from "react";
import styled from "styled-components";

type Props = {
	borderColor?: string;
	children: React.ReactNode;
	padding?: string;
	margin?: string;
};

const Card = styled.div<Omit<Props, "children">>`
	box-shadow: 3px 3px 8px #00000029;
	padding: ${({ padding }) => {
		return padding;
	}};
	margin: ${({ margin }) => {
		return margin;
	}};

	${({ borderColor }) => {
		return (
			borderColor &&
			`
        border-top: 10px solid ${borderColor};
      `
		);
	}}
`;

const Paper: React.FC<Props> = props => {
	const { children, ...cardProps } = props;
	return <Card {...cardProps}>{props.children}</Card>;
};

export default Paper;
