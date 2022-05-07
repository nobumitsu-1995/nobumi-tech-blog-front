import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Button, Paper, Text } from "../atoms";
import ArticleTtl from "./ArticleTtl";

type Props = {
	category: string;
	categoryLink: string;
	date: Date;
	id: number;
	img: string;
	text: string;
	title: string;
};

const Container = styled.div`
	padding: 0 50px 50px;
`;

const Article: React.FC<Props> = ({ ...props }) => {
	const router = useRouter();
	const handleClickLink = () => {
		return router.push(`/article/${props.id}`);
	};

	return (
		<Paper borderColor="#7c83cc">
			<button type="button" onClick={handleClickLink}>
				<ArticleTtl date={props.date} title={props.title} category={props.category} link={props.categoryLink} />
				<figure>
					<Image
						src={props.img}
						alt={props.title}
						layout="responsive"
						width="1100"
						height="500"
						objectFit="contain"
					/>
				</figure>
				<Container>
					<Text color="#666" lineHeight="30px" text={props.text} margin="40px 0" />
					<Button fontWeight="bold" label="READ MORE" onClick={handleClickLink} />
				</Container>
			</button>
		</Paper>
	);
};

export default Article;
