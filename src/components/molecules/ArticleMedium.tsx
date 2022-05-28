import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Border, Text } from "../atoms";

type Props = {
	id: string;
	eyecatch: string;
	title: string;
};

const Article = styled.article`
	&:hover {
		box-shadow: 0 0 5px 3px #00000029;
		opacity: 0.8;
		transition-duration: 0.3s;
	}
`;

const ArticleMedium: React.FC<Props> = ({ ...props }) => {
	return (
		<Article>
			<Link href={`/article/${props.id}`}>
				<a>
					<figure>
						<Image src={`/${props.eyecatch}`} alt={props.title} width="1100" height="500" />
					</figure>
					<Text color="#555" fontSize="14px" text={props.title} textalign="center" margin="15px 0 20px" />
					<Border color="#882107" height="1px" width="50px" />
				</a>
			</Link>
		</Article>
	);
};

export default ArticleMedium;
