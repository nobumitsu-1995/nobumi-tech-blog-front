import React from "react";
import styled from "styled-components";
import { Input } from "../atoms";

type InputProps = Omit<JSX.IntrinsicElements["input"], "ref">;

type Props = InputProps & {
	borderRadius?: string;
	fontSize?: string;
	icon: React.ReactNode;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const InputArea = styled.div`
	display: block;
	position: relative;
`;

const Button = styled.button`
	align-items: center;
	background-color: #fff;
	border: 1px solid #aaa;
	border-radius: 0 3px 3px 0;
	cursor: pointer;
	display: flex;
	height: 100%;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 0;
	transition-duration: 0.2s;
	width: 30px;

	&:hover {
		background-color: #eee;
	}
`;

const IconInput: React.FC<Props> = ({ ...props }) => {
	const { icon, onClick, ...inputProps } = props;

	return (
		<InputArea>
			<Input {...inputProps} />
			<Button type="button" onClick={onClick}>
				{icon}
			</Button>
		</InputArea>
	);
};

export default IconInput;
