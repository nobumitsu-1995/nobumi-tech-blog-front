import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { FlexCenter } from "../../styles/styled-components";
import { Border, Paper, StyledLink, Text } from "../atoms";

type Props = {
	img: string;
	name: string;
	text: string;
};

const Avater = styled.figure`
	height: 140px;
	position: relative;
	margin: auto;
	width: 140px;
`

const StyledImage = styled(Image)`
	border-radius: 100%;
`

const UserCard: React.FC<Props> = ({ ...props }) => {
	return (
		<Paper padding="25px 20px">
			<Avater>
				<StyledImage
					src={`/${props.img}`}
					alt={props.name}
					layout="fill"
					objectFit="cover"
				/>
			</Avater>
			<Text
				color="#271E16"
				fontSize="20px"
				fontWeight="bold"
				tag="h2"
				text={props.name}
				textalign="center"
				margin="20px 0"
			/>
			<Border color="#7C83CC" height="5px" width="200px" />
			<Text color="#666" fontSize="14px" text={props.text} margin="25px 0" />
			<FlexCenter>
				<StyledLink link="/profile" text="Profile Detail >" />
			</FlexCenter>
		</Paper>
	);
};

export default UserCard;
