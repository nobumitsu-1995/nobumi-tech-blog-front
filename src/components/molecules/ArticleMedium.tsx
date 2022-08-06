import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Eyecatch } from "../../../lib/type";
import { Border, Text } from "../atoms";

type Props = {
	id: string;
	eyecatch: Eyecatch;
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
						<Image src={`${props.eyecatch.url}`} alt={props.title} width="1100" height="500" />
					</figure>
					<StyledText tag="h3" color="#555" fontSize="14px" text={props.title} textalign="center" margin="15px 0 20px" />
					<Border color="#882107" height="1px" width="50px" />
				</a>
			</Link>
		</Article>
	);
};

export default ArticleMedium;

const StyledText = styled(Text)`
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`