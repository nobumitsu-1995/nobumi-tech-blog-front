import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AccordionHead } from "../molecules";

type Props = {
	children: React.ReactNode;
	text: string;
	id: number;
	isOpen?: boolean;
};

const Body = styled.div<{ open: boolean; height?: number }>`
	max-height: 0;
	transition-duration: 0.5s;
	overflow: hidden;
	transform: translateY(-1px);

	${({ open, height }) => {
		return (
			open &&
			height &&
			`
				max-height: ${height + 1}px;
			`
		);
	}}
`;

const Button = styled.button`
	width: 100%;
`;

const Accordion: React.FC<Props> = ({ children, isOpen = false, ...props }) => {
	const [open, setOpen] = useState(false);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const height = document.getElementById(`body${props.id}`)?.clientHeight as number;
		setHeight(height);
	}, [props.id]);

	useEffect(() => {
		isOpen && setOpen(true);
	}, [isOpen]);

	return (
		<div>
			<Button
				type="button"
				onClick={() => {
					setOpen(!open);
				}}
			>
				<AccordionHead text={props.text} open={open} />
			</Button>
			<Body open={open} height={height}>
				<div id={`body${props.id}`}>{children}</div>
			</Body>
		</div>
	);
};

export default Accordion;
