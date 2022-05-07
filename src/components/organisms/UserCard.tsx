import Image from "next/image";
import React from "react";
import { Border, Paper, StyledLink, Text } from "../atoms";

type Props = {
	img: string;
	name: string;
	text: string;
};

const UserCard: React.FC<Props> = ({ ...props }) => {
	return (
		<Paper padding="40px">
			<figure>
				<Image src={props.img} alt={props.name} />
			</figure>
			<Text
				color="#271E16"
				fontSize="20px"
				fontWeight="bold"
				tag="h2"
				text={props.name}
				textAlign="center"
				margin="20px 0 35px"
			/>
			<Border color="#7C83CC" height="5px" width="230px" />
			<Text color="#666" text={props.text} margin="35px 0" />
			<StyledLink link="/profile" text="Profile Detail" />
		</Paper>
	);
};

export default UserCard;
