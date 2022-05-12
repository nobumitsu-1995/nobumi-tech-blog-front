import React from "react";
import styled from "styled-components";
import { Date, StyledLink, Text } from "../atoms";

type Props = {
	date: Date;
	title: string;
	category: string;
	link: string;
};

const Title = styled.div`
	padding: 40px 50px;
	text-align: center;
`;

const ArticleTtl: React.FC<Props> = ({ ...props }) => {
	return (
		<Title>
			<Date color="#aaa" fontSize="12px" time={props.date} />
			<Text
				color="#555"
				fontSize="24px"
				fontWeight="bold"
				tag="h2"
				text={props.title}
				textAlign="center"
				margin="25px 0"
			/>
			<StyledLink link={props.link} text={props.category} />
		</Title>
	);
};

export default ArticleTtl;
