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
};

const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;

	@media ${device.sp} {
		align-items: center;
		justify-content: center;
	}
`;

const LinkArea = styled.a`
	display: inline-block;

	&:hover {
		p {
			color: #3d70b8;
			transition: 0.2s;
		}
	}
`;

const FooterList1: React.FC<Props> = ({ datas }) => {
	return (
		<List>
			{datas.map(data => {
				return (
					<li key={data.text}>
						<Link href={data.link} passHref>
							<LinkArea>
								<Text color="#fff" display="inline-block" fontSize="20px" fontWeight="bold" text={data.text} />
							</LinkArea>
						</Link>
					</li>
				);
			})}
		</List>
	);
};

export default FooterList1;
