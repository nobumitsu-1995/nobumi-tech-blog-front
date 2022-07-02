import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { footerDatas } from "../../../lib/datas";
import { Container } from "../../styles/styled-components";
import { Text } from "../atoms";
import { FooterList1, FooterList2 } from "../molecules";

const Footer = styled.div`
	background: #2e3e4e;
	padding: 40px 0 50px;
`;

const Flex = styled.div`
	display: flex;
	gap: 80px;
`;

const LinkArea = styled.a`
	&:hover {
		p {
			color: #3d70b8;
			transition: 0.2s;
		}
	}
`;

const Footer1 = () => {
	return (
		<Footer>
			<Container>
				<Link href="/" passHref>
					<LinkArea>
						<Text color="#fff" fontWeight="bold" fontSize="36px" text="Nobumi Tech" margin="0 0 40px" />
					</LinkArea>
				</Link>
				<Flex>
					<FooterList1 {...footerDatas.list1} />
					<FooterList2 {...footerDatas.list2} />
					{/* <FooterList2 {...footerDatas.list3} /> */}
				</Flex>
			</Container>
		</Footer>
	);
};

export default Footer1;
