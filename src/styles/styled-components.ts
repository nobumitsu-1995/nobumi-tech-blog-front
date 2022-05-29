import styled from "styled-components";

export const Flex = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
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
	width: 1080px;
`;

export const Section = styled.section<{ padding: string }>`
	padding: ${({ padding }) => {
		return padding;
	}};
`;

export const ArticleContent = styled.div<{ margin?: string }>`
	margin: ${({ margin }) => {
		return margin;
	}};

	h1 {
		background: #ecf0f1;
		border-top: 5px solid #7c83cc;
		border-radius: 5px 0 0 5px;
		box-shadow: 3px 3px 8px #00000029;
		font-size: 36px;
		font-weight: bold;
		padding: 17px 0 17px 125px;
		position: relative;

		span {
			background: #7c83cc;
			border-radius: 5px 0 20px 5px;
			color: #ecf0f1;
			font-size: 52px;
			font-weight: bold;
			height: 80px;
			left: 0;
			line-height: 80px;
			position: absolute;
			text-align: center;
			top: -5px;
			width: 100px;
		}
	}

	h2 {
		background: #efefef;
		border-left: 5px solid #7c83cc;
		font-size: 20px;
		font-weight: bold;
		padding: 10px 20px;
	}

	p.important {
		background: #ecf0f1;
		border: 1px dashed #2e3e4e;
		padding: 10px;
	}

	span.important {
		color: #e63946;
		font-weight: bold;
	}

	.point {
		font-weight: bold;
		padding-left: 30px;
		position: relative;

		&::before {
			border: 2px solid #7c83cc;
			border-radius: 100%;
			content: "";
			display: block;
			height: 20px;
			left: 0;
			position: absolute;
			top: -1px;
			width: 20px;
		}

		&::after {
			border-left: 3px solid #7c83cc;
			border-bottom: 3px solid #7c83cc;
			content: "";
			display: block;
			height: 7px;
			left: 4px;
			position: absolute;
			top: 4px;
			transform: rotate(-45deg);
			width: 11px;
		}
	}
`;
