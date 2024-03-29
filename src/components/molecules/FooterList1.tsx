import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { device, GapColumnList } from "../../styles/styled-components";
import { Text } from "../atoms";

type Props = {
	datas: {
		text: string;
		link: string;
	}[];
	gap?: string;
};

const List = styled.ul<{ gap: string }>`
	display: flex;
	flex-direction: column;
	gap: ${({ gap }) => gap};

	@media ${device.midSp} {
		align-items: center;
		justify-content: center;
	}
`;

const LinkArea = styled.a`
	display: inline-block;

	p {
		transition: 0.2s;
	}

	&:hover {
		p {
			color: #3d70b8;
		}
	}
`;

const FooterList1: React.FC<Props> = ({ datas, gap = "30px" }) => {
	return (
		<List gap={gap}>
			{datas.map(data => {
				return (
					<li key={data.text}>
						<Link href={data.link} passHref>
							<LinkArea>
								<Text
									color="#fff"
									display="inline-block"
									fontSize="20px"
									fontWeight="bold"
									text={data.text}
								/>
							</LinkArea>
						</Link>
					</li>
				);
			})}
		</List>
	);
};

export default FooterList1;
