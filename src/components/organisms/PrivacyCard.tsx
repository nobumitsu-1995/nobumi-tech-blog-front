import React from "react";
import styled from "styled-components";
import { device } from "../../styles/styled-components";
import { Paper } from "../atoms";
import { ArticleTtl } from "../molecules";
import { Blog } from "../../../lib/type";
import { ArticleContent } from "../../styles/articleStyles";

type Props = {
	privacyData: Blog;
};

const ArticleContainer = styled.div`
	padding: 0 50px 50px;

	@media ${device.sp} {
		padding: 0;
	}
`;

const PrivacyCard: React.FC<Props> = ({ privacyData }) => {
	return (
		<Paper borderColor="#7C83CC">
			<ArticleTtl date={privacyData.publishedAt} title={privacyData.title} />
			<ArticleContainer>
				<ArticleContent>
					{privacyData.content &&
						privacyData.content.map(contentData => {
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
			</ArticleContainer>
		</Paper>
	);
};

export default PrivacyCard;
