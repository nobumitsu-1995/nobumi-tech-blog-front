import styled from "styled-components";
import { device } from "./styled-components";

export const ArticleContent = styled.div<{ margin?: string }>`
  color: #333;
  margin: ${({ margin }) => {
		return margin;
	}};
	max-width: calc(100vw - 30px);

	.article {
		&__ttl {
      background: #ecf0f1;
      border-top: 5px solid #7c83cc;
      border-radius: 5px 0 0 5px;
      box-shadow: 3px 3px 8px #00000029;
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 30px;
      padding: 17px 0 17px 125px;
      position: relative;

      @media ${device.sp} {
        font-size: 20px;
        padding: 10px 10px 10px 80px;
      }

      &__num {
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
		}

		&__subttl {
      background: #efefef;
      border-left: 5px solid #7c83cc;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 30px;
      padding: 10px 20px;

      @media ${device.sp} {
        font-size: 18px;
        padding: 10px 10px;
      }
		}

		&__list {
      margin-bottom: 50px;

      &__item {
        line-height: 2;
      }
		}

    &__box {
      background: #ecf0f1;
      border: 1px dashed #2e3e4e;
      margin-bottom: 50px;
      padding: 10px;

      .box__list {
        list-style-type: disc;
        padding-left: 20px;

        &__item {
          line-height: 2;
        }
      }
    }

    &__text {
      line-height: 2;
      margin-bottom: 50px;

      &__important {
        color: #e63946;
        font-weight: bold;
      }
    }
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
    height: auto;
    margin-bottom: 30px;
		width: 100%;
	}

	blockquote {
    border-left: 4px solid #ccc;
    font-style: italic;
    margin-bottom: 50px;
    padding-left: 16px;
		width: 100%;
		word-wrap: break-word;
	}

  pre {
    background-color: #23241f;
    border-radius: 3px;
    color: #f8f8f2;
    overflow: visible;
    margin-bottom: 50px;
    padding: 5px 10px;
    white-space: pre-wrap;
  }

  ol.article__list {
    counter-reset:num;

    .article__list__item {
      font-weight: bold;
      padding-left: 30px;
      position: relative;

      &::before {
        background: #7c83cc;
        border-radius: 100%;
        color: #FFF;
        content: counter(num);
        counter-increment: num;
        display: block;
        font-size: 12px;
        height: 20px;
        left: 0;
        line-height: 20px;
        position: absolute;
        text-align: center;
        top: 5px;
        width: 20px;
      }
    }
  }
`;