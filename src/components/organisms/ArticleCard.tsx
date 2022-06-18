import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Blog } from "../../../lib/type";
import { ArticleContent } from "../../styles/styled-components";
import { Paper } from "../atoms";
import { ArticleTtl, LinkList } from "../molecules";
import { tagDatas } from "../../../lib/datas";

const ArticleContainer = styled.div`
	padding: 0 50px 50px;
	margin-top: 40px;
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
					{/* <h1>
						<span>01</span>H1 TITLE
					</h1>
					<br />
					<h2>H2 TITLE</h2>
					<br />
					<p className="point">POINT TEXT</p>
					<br />
					<p className="important">
						テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
					</p>
					<br />
					<span className="important">Important Important Important Important Important Important</span> */}
					<p
						dangerouslySetInnerHTML={{
							__html: `${props.description}`,
						}}
					/>
					<Line />
					<div
						dangerouslySetInnerHTML={{
							__html: `${props.content}`,
						}}
					/>
				</ArticleContent>
				<Line />
				<LinkList img="tag.png" links={tagDatas} />
			</ArticleContainer>
			</article>
		</Paper>
	);
};

export default ArticleCard;
