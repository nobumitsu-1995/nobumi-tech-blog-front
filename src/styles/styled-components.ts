import styled from "styled-components";

export const Flex = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const GapColumnList = styled.ul<{ gap: string }>`
	display: grid;
	gap: ${({ gap }) => {
		return gap;
	}};
`;

export const Container = styled.div`
	margin: 0 auto;
	width: 1080px;
`;
