import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Blog } from "../../../lib/type";
import { ArticleContent, device } from "../../styles/styled-components";
import { Paper } from "../atoms";
import { ArticleTtl, LinkList } from "../molecules";
import { returnTagDatas } from "../../../lib/functions/tags";

const ArticleContainer = styled.div`
	padding: 0 50px 50px;
	margin-top: 40px;
	width: 100%;

	@media ${device.tablet} {
		padding: 0 10px 20px;
	}
`;

const Line = styled.figure`
	background-color: #ddd;
	display: block;
	height: 2px;
	margin: 40px 0;
	width: 100%;
`;

const ArticleCard: React.FC<Blog> = ({ ...props }) => {
	return (
		<Paper borderColor="#7C83CC">
			<article>
				<ArticleTtl date={new Date(props.publishedAt)} title={props.title} categories={props.category} />
				{props.eyecatch && (
					<figure>
						<Image src={`${props.eyecatch.url}`} alt={props.title} width="1100" height="500" />
					</figure>
				)}
				<ArticleContainer>
					<ArticleContent margin="0 0 40px">
						<p
							dangerouslySetInnerHTML={{
								__html: `${props.description}`,
							}}
						/>
						<Line />
						{props.content &&
							props.content.map(contentData => {
								return (
									<div
										key={contentData.html}
										dangerouslySetInnerHTML={{
											__html: `${contentData.html || contentData.richEditor}`,
										}}
									/>
								);
							})}
					</ArticleContent>
					<Line />
					{props.tag && <LinkList img="tag.png" links={returnTagDatas(props.tag)} />}
				</ArticleContainer>
			</article>
		</Paper>
	);
};

export default ArticleCard;
