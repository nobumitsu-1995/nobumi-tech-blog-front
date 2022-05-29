import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Text } from "../atoms";

type Props = {
	link: string;
	img: string;
	text: string;
};

const Flex = styled.a`
	align-items: center;
	display: flex;
	gap: 5px;
	height: 100%;
	justify-content: space-between;
	overflow: hidden;
	padding: 0 20px;
	position: relative;

	&::after {
		background: #3d70b8;
		bottom: 0;
		content: "";
		display: block;
		height: 10px;
		left: 0;
		position: absolute;
		transform: translateX(-100%);
		transition: 0.2s;
		width: 100%;
	}

	&:hover {
		opacity: 0.8;
		transition: 0.2s;

		p {
			color: #3d70b8;
			transition: 0.2s;
		}

		&::after {
			transform: translateX(0);
			transition: 0.2s;
		}
	}
`;

const HeaderLink: React.FC<Props> = ({ ...props }) => {
	return (
		<Link href={props.link} passHref>
			<Flex>
				<Image src={`/images/${props.img}`} alt={props.text} width="24" height="24" />
				<Text color="#fff" fontSize="20px" fontWeight="bold" text={props.text} />
			</Flex>
		</Link>
	);
};

export default HeaderLink;
