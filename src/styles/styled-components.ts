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

export const ArticleContent = styled.div<{ margin?: string }>`
	margin: ${({ margin }) => {
		return margin;
	}};
	max-width: calc(100vw - 30px);

	section {
		margin-bottom: 50px;

		@media ${device.sp} {
			margin-bottom: 30px;
		}
	}

	h2 {
		background: #ecf0f1;
		border-top: 5px solid #7c83cc;
		border-radius: 5px 0 0 5px;
		box-shadow: 3px 3px 8px #00000029;
		font-size: 36px;
		font-weight: bold;
		margin-bottom: 50px;
		padding: 17px 0 17px 125px;
		position: relative;

		span {
			background: #7c83cc;
			border-radius: 5px 0 20px 5px;
			color: #ecf0f1;
			font-size: 52px;
			font-weight: bold;
			height: calc(100% + 5px);
			left: 0;
			line-height: 1.5;
			position: absolute;
			text-align: center;
			top: -5px;
			width: 100px;

			@media ${device.sp} {
				font-size: 36px;
				height: 48px;
				line-height: 48px;
				width: 70px;
			}
		}

		@media ${device.sp} {
			font-size: 20px;
			margin-bottom: 30px;
			padding: 10px 10px 10px 80px;
		}
	}

	h3 {
		background: #efefef;
		border-left: 5px solid #7c83cc;
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 20px;
		padding: 10px 20px;

		@media ${device.sp} {
			font-size: 18px;
			padding: 10px 10px;
		}
	}

	p {
		line-height: 2.5;

		@media ${device.sp} {
			line-height: 2;
		}
	}

	div.important {
		background: #ecf0f1;
		border: 1px dashed #2e3e4e;
		margin: 20px 0;
		padding: 10px;

		ul {
			list-style-type: disc;
			padding-left: 20px;

			li {
				line-height: 30px;
			}
		}
	}

	span.important {
		color: #e63946;
		font-weight: bold;
	}

	.point {
		font-weight: bold;
		padding-left: 30px;
		position: relative;
		line-height: 30px;

		&::before {
			border: 2px solid #7c83cc;
			border-radius: 100%;
			content: "";
			display: block;
			height: 20px;
			left: 0;
			line-height: 30px;
			position: absolute;
			top: 5px;
			width: 20px;
		}

		&::after {
			border-left: 3px solid #7c83cc;
			border-bottom: 3px solid #7c83cc;
			content: "";
			display: block;
			height: 7px;
			left: 4px;
			line-height: 30px;
			position: absolute;
			top: 10px;
			transform: rotate(-45deg);
			width: 11px;
		}
	}

	.card {
		border-radius: 5px;
		box-shadow: 3px 3px 8px #00000029;
		overflow: hidden;

		&:not(:first-child) {
			margin-top: 10px;
		}

		@media ${device.sp} {
			margin: 0 auto;
			max-width: 400px;
		}

		a {
			cursor: pointer;
			display: flex;
			transition-duration: 0.3s opacity;

			:hover {
				opacity: 0.7;
			}

			@media ${device.sp} {
				flex-direction: column;
			}
		}

		&__img {
			align-items: center;
			background-color: #ccc;
			display: flex;
			justify-content: center;
			padding: 5px;

			img {
				width: 200px;
			}
		}

		&__body {
			padding: 10px;
		}

		&__ttl {
			border-bottom: 1px solid #ccc;
			font-size: 18px;
			font-weight: bold;
			margin-bottom: 5px;
			padding-bottom: 5px;
		}

		&__content {
			border-bottom: 1px solid #ccc;
			font-size: 12px;
			line-height: 1.8;
			padding-bottom: 5px;
		}

		&__link {
			color: #7c83cc;
			font-size: 12px;
			line-height: 1.8;
			text-decoration: underline;
		}
	}

	img {
		width: 90%;
		height: auto;
	}

	blockquote {
		width: 90%;
		word-wrap: break-word;
	}
`;
