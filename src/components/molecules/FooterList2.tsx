import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { device, GapColumnList } from "../../styles/styled-components";
import { Text } from "../atoms";

type Props = {
	title: string;
	datas: {
		text: string;
		link: string;
	}[];
};

const Section = styled.section`
	@media ${device.midSp} {
		display: none;
	}
`;

const List = styled(GapColumnList)`
	padding-left: 50px;
`;

const LinkArea = styled.a`
	display: inline-block;
	position: relative;

	&::before {
		background: #fff;
		bottom: 0;
		content: "";
		display: block;
		height: 2px;
		left: -25px;
		margin: auto;
		position: absolute;
		top: 0;
		width: 15px;
	}

	p {
		transition: 0.2s;
	}

	&:hover {
		p {
			opacity: 0.6;
		}
	}
`;

const FooterList2: React.FC<Props> = ({ title, datas }) => {
	return (
		<Section>
			<Text color="#fff" fontSize="20px" fontWeight="bold" tag="h3" text={title} margin="0 0 20px" />
			<List gap="20px">
				{datas.map(data => {
					return (
						<li key={data.text}>
							<Link href={data.link} passHref>
								<LinkArea target="_blank">
									<Text color="#7C83CC" fontWeight="bold" text={data.text} />
								</LinkArea>
							</Link>
						</li>
					);
				})}
			</List>
		</Section>
	);
};

export default FooterList2;
