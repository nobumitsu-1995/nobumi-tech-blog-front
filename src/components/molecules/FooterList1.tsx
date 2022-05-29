import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { GapColumnList } from "../../styles/styled-components";
import { Text } from "../atoms";

type Props = {
	datas: {
		text: string;
		link: string;
	}[];
};

const LinkArea = styled.a`
	&:hover {
		p {
			color: #3d70b8;
			transition: 0.2s;
		}
	}
`;

const FooterList1: React.FC<Props> = ({ datas }) => {
	return (
		<GapColumnList gap="30px">
			{datas.map(data => {
				return (
					<li key={data.text}>
						<Link href={data.link} passHref>
							<LinkArea>
								<Text color="#fff" fontSize="20px" fontWeight="bold" text={data.text} />
							</LinkArea>
						</Link>
					</li>
				);
			})}
		</GapColumnList>
	);
};

export default FooterList1;
