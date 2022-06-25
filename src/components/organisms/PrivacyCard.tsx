import React from "react";
import styled from "styled-components";
import { ArticleContent } from "../../styles/styled-components";
import { Paper } from "../atoms";
import { ArticleTtl } from "../molecules";
import { Blog } from "../../../lib/type";

type Props = {
	privacyData: Blog;
};

const ArticleContainer = styled.div`
	padding: 0 50px 50px;
`;

const PrivacyCard: React.FC<Props> = ({ privacyData }) => {
	return (
		<Paper borderColor="#7C83CC">
			<ArticleTtl date={new Date(privacyData.publishedAt)} title={privacyData.title} />
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
							__html: `${privacyData.content}`,
						}}
					/>
				</ArticleContent>
			</ArticleContainer>
		</Paper>
	);
};

export default PrivacyCard;
