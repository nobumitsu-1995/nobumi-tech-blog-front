import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Article as ArticleType } from "../../../lib/type";
import { Button, Paper, Text } from "../atoms";
import ArticleTtl from "./ArticleTtl";

const Container = styled.div`
	padding: 0 50px 50px;
`;

const Article: React.FC<ArticleType> = ({ ...props }) => {
	const router = useRouter();
	const handleClickLink = () => {
		return router.push(`/article/${props.id}`);
	};

	return (
		<article>
			<Paper borderColor="#7c83cc">
				<Link href={`/article/${props.id}`}>
					<a>
						<object>
							<ArticleTtl
								date={props.date}
								title={props.title}
								category={props.category}
								link={`/category/${props.category}`}
							/>
						</object>
						<figure>
							<Image src={props.img} alt={props.title} width="1100" height="500" />
						</figure>
						<Container>
							<Text color="#666" lineheight="30px" text={props.description} margin="40px 0" />
							<Button fontWeight="bold" label="READ MORE" onClick={handleClickLink} />
						</Container>
					</a>
				</Link>
			</Paper>
		</article>
	);
};

export default Article;
