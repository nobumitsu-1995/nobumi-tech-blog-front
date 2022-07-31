import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleSmall } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Molecules/Article",
	component: ArticleSmall,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ArticleSmall>;

const Container = styled.div`
	margin: 0 auto;
	width: 640px;
`;

export const StyledArticleSmall: ComponentStory<typeof ArticleSmall> = args => (
	<Container>
		<ArticleSmall
			article={{
				id: "",
				createdAt: "",
				updatedAt: "",
				privacy: false,
				publishedAt: "",
				revisedAt: "",
				title: "",
				content: [{
					fieldId: "html",
					html: "sample",
					richEditor: ""
				}],
				description: "",
				eyecatch: {
					url: "",
					height: 0,
					width: 0,
				},
				category: [],
				tag: undefined,
				recommend: false,
				userinfo: false,
			}}
		/>
	</Container>
);
