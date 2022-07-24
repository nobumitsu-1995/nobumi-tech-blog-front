import styled from "styled-components";

export const size = {
	sp: "619px",
	midSp: "699px",
	tablet: "919px",
};

export const device = {
	sp: `(max-width: ${size.sp})`,
	midSp: `(max-width: ${size.midSp})`,
	tablet: `(max-width: ${size.tablet})`,
};

export const Flex = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const FlexStart = styled.div<{ gap?: string }>`
	align-items: center;
	display: flex;
	gap: ${({ gap }) => {
		return gap;
	}};
	justify-content: flex-start;
`;

export const FlexEnd = styled.div<{ gap?: string }>`
	align-items: center;
	display: flex;
	gap: ${({ gap }) => {
		return gap;
	}};
	justify-content: flex-end;
`;

export const FlexCenter = styled.div<{ gap?: string }>`
	align-items: center;
	display: flex;
	gap: ${({ gap }) => {
		return gap;
	}};
	justify-content: center;
`;

export const GapColumnList = styled.ul<{ gap: string }>`
	display: grid;
	gap: ${({ gap }) => {
		return gap;
	}};
`;

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1080px;
	padding: 0 20px;
	width: 100%;

	@media ${device.tablet} {
		max-width: 800px;
	}
`;

export const Section = styled.section<{ padding: string }>`
	padding: ${({ padding }) => {
		return padding;
	}};
`;


