import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { ArticleContent } from "../../styles/styled-components";
import { Paper } from "../atoms";
import { ArticleTtl } from "../molecules";
import { Blog } from "../../../lib/type";

type Props = {
	userData: Blog;
};

const ArticleContainer = styled.div`
	padding: 0 50px 50px;
	margin-top: 40px;
`;

const ProfileCard: React.FC<Props> = ({ userData }) => {
	return (
		<Paper borderColor="#7C83CC">
			<ArticleTtl date={new Date(userData.publishedAt)} title={userData.title} />
			<figure>
				<Image src={userData.eyecatch.url} alt={userData.title} width="1100" height="500" />
			</figure>
			<ArticleContainer>
				<ArticleContent>
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
					<br /> */}
					<div
						dangerouslySetInnerHTML={{
							__html: `${userData.content}`,
						}}
					/>
				</ArticleContent>
			</ArticleContainer>
		</Paper>
	);
};

export default ProfileCard;
