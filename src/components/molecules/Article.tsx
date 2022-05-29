import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Blog } from "../../../lib/type";
import { Button, Paper, Text } from "../atoms";
import ArticleTtl from "./ArticleTtl";

const ArticleContainer = styled.div`
	padding: 0 50px 50px;
`;

const StyledArticle = styled.article`
	&:hover {
		box-shadow: 0 0 5px 7px #00000029;
		opacity: 0.8;
		transition-duration: 0.3s;
	}
`;

const Article: React.FC<Blog> = ({ ...props }) => {
	const router = useRouter();
	const handleClickLink = () => {
		return router.push(`/article/${props.id}`);
	};

	return (
		<StyledArticle>
			<Paper borderColor="#7c83cc">
				<Link href={`/article/${props.id}`}>
					<a>
						<object>
							<ArticleTtl
								date={new Date(props.createdAt)}
								title={props.title}
								categories={props.category}
							/>
						</object>
						<figure>
							<Image src={props.eyecatch.url} alt={props.title} width="1100" height="500" />
						</figure>
						<ArticleContainer>
							<Text color="#666" lineheight="30px" text={props.description} margin="40px 0" />
							<Button fontWeight="bold" label="READ MORE" onClick={handleClickLink} />
						</ArticleContainer>
					</a>
				</Link>
			</Paper>
		</StyledArticle>
	);
};

export default Article;
