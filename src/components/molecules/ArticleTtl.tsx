import React from "react";
import styled from "styled-components";
import { Category } from "../../../lib/type";
import { device } from "../../styles/styled-components";
import { Date, StyledLink, Text } from "../atoms";

type Props = {
	date: string;
	updateAt?: string;
	title: string;
	categories?: Category[];
};

const Title = styled.div`
	padding: 40px 50px;
	text-align: center;
	max-width: 720px;

	@media ${device.sp} {
		max-width: calc(100vw - 10px);
		padding: 15px 0 25px;
	}
`;

const ArticleTtl: React.FC<Props> = ({ ...props }) => {
	return (
		<Title>
			<Date color="#aaa" fontSize="12px" time={props.date} />
			{props.updateAt && props.updateAt?.substring(0, props.updateAt?.indexOf("T")) !== props.date?.substring(0, props.date?.indexOf("T"))
				&& 
				<Date color="#aaa" fontSize="12px" time={props.updateAt} text1="(記事更新日:" text2=")" margin="0 0 0 10px"/>
			}
			<Text
				color="#555"
				fontSize="24px"
				fontWeight="bold"
				tag="h2"
				text={props.title}
				textalign="center"
				margin="25px 0"
			/>
			{props.categories &&
				props.categories.map(category => {
					return (
						<li key={category.id}>
							<StyledLink link={`/category/${category.name}`} text={category.name} />
						</li>
					);
				})}
		</Title>
	);
};

export default ArticleTtl;
