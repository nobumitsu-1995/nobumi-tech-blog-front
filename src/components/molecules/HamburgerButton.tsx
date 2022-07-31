import React from "react";
import styled from "styled-components";
import { CrossIcon, HamburgerIcon } from "../atoms";

type Props = {
	isOpen: boolean;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = styled.button`
	border-radius: 50%;
	padding: 10px;
	transition: 0.2s;
	height: 50px;
	width: 50px;

	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
	}

	&:active {
		background-color: rgba(255, 255, 255, 0.7);
	}
`;

const HamburgerButton: React.FC<Props> = ({ isOpen = true, onClick }) => {
	return <Button onClick={onClick}>{isOpen ? <CrossIcon /> : <HamburgerIcon />}</Button>;
};

export default HamburgerButton;
