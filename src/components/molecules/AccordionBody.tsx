import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Text } from "../atoms";

type Props = {
	articles: {
		id: number;
		title: string;
	}[];
};

const List = styled.ul`
	border: 1px solid #9f9f9f;
	border-top: 0px;
	border-radius: 0 0 5px 5px;
	padding: 0 22.5px;
`;

const Item = styled.li`
	padding: 15px 0 15px 15px;
	position: relative;

	&::before {
		background-color: #882107;
		content: "";
		display: block;
		height: calc(100% - 30px);
		left: -5px;
		position: absolute;
		width: 5px;
	}

	&:not(:last-child)::after {
		background-color: #9f9f9f;
		bottom: 0px;
		content: "";
		display: block;
		height: 0.5px;
		left: 0;
		margin: auto;
		position: absolute;
		right: 0;
		width: 90%;
	}
`;

const AccordionBody: React.FC<Props> = ({ ...props }) => {
	return (
		<List>
			{props.articles.map(article => {
				return (
					<Item key={article.id}>
						<Link href={`/article/${article.id}`}>
							<a>
								<Text color="#555" fontSize="14px" tag="h2" lineHeight="24px" text={article.title} />
							</a>
						</Link>
					</Item>
				);
			})}
		</List>
	);
};

export default AccordionBody;
