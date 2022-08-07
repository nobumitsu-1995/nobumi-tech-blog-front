import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { device } from "../../styles/styled-components";
import { Paper } from "../atoms";
import { ArticleTtl } from "../molecules";
import { Blog } from "../../../lib/type";
import { ArticleContent } from "../../styles/articleStyles";

type Props = {
	userData: Blog;
};

const ArticleContainer = styled.div`
	padding: 0 50px 50px;
	margin-top: 40px;

	@media ${device.tablet} {
		padding: 0 20px 20px;
	}

	@media ${device.sp} {
		padding: 0;
	}
`;

const ProfileCard: React.FC<Props> = ({ userData }) => {
	return (
		<Paper borderColor="#7C83CC">
			<ArticleTtl date={userData.publishedAt} title={`${userData.title}のプロフィール`} />
			<figure>
				<Image src={userData.eyecatch.url} alt={userData.title} width="1100" height="500" />
			</figure>
			<ArticleContainer>
				{userData.content &&
					userData.content.map(contentData => {
						return (
							<ArticleContent
								key={contentData.html}
								dangerouslySetInnerHTML={{
									__html: `${contentData.html || contentData.richEditor}`,
								}}
							/>
						);
					})}
			</ArticleContainer>
		</Paper>
	);
};

export default ProfileCard;
