import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Eyecatch } from "../../../lib/type";
import { FlexCenter } from "../../styles/styled-components";
import { Border, Paper, StyledLink, Text } from "../atoms";

type Props = {
	eyecatch: Eyecatch;
	title: string;
	description: string;
};

const Avater = styled.figure`
	height: 140px;
	position: relative;
	margin: auto;
	width: 140px;
`;

const StyledImage = styled(Image)`
	border-radius: 100%;
`;

const Div = styled.div`
	color: #666;
	font-size: 12px;
	line-height: 20px;
	margin: 25px 0;
`;

const UserCard: React.FC<Props> = ({ ...props }) => {
	return (
		<Paper padding="25px 20px">
			<Avater>
				<StyledImage src="/images/avater.png" alt={props.title} layout="fill" objectFit="cover" />
			</Avater>
			<Text
				color="#271E16"
				fontSize="20px"
				fontWeight="bold"
				tag="h2"
				text={props.title}
				textalign="center"
				margin="20px 0"
			/>
			<Border color="#7C83CC" height="5px" width="200px" />
			<Div
				dangerouslySetInnerHTML={{
					__html: `${props.description}`,
				}}
			/>
			<FlexCenter>
				<StyledLink link="/profile" text="Profile Detail >" />
			</FlexCenter>
		</Paper>
	);
};

export default UserCard;
