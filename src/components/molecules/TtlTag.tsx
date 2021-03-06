import React from "react";
import styled from "styled-components";
import { Text } from "../atoms";
import { TextProps } from "../atoms/Text";

type Props = {
	tags: string[];
} & Omit<TextProps, "text">;

const Container = styled.div`
	background: #fff;
	bottom: -30px;
	display: inline-block;
	padding: 3px 15px;
	position: absolute;
	right: 0;
`;

const TtlTag: React.FC<Props> = props => {
	const { tags, fontSize = "14px", color = "#555", ...textProps } = props;
	const joinTags = tags.join(", ");

	return (
		<Container>
			<Text {...textProps} color={color} fontSize={fontSize} text={`検索条件：${joinTags}`} />
		</Container>
	);
};

export default TtlTag;
