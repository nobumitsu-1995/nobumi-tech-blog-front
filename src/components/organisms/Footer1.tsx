import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { footerDatas } from "../../../lib/datas";
import { Container, device } from "../../styles/styled-components";
import { Text } from "../atoms";
import { FooterList1, FooterList2 } from "../molecules";

const Footer = styled.div`
	background: #2e3e4e;
	padding: 40px 0 50px;
`;

const StyledContainer = styled(Container)`
	@media ${device.sp} {
		align-items: center;
		display: flex;
		flex-direction: column;
	}
`;

const Flex = styled.div`
	display: flex;
	gap: 80px;
	margin-top: 40px;

	@media ${device.tablet} {
		gap: 40px;
	}

	@media ${device.sp} {
		justify-content: center;
	}
`;

const LinkArea = styled.a`
	display: inline-block;

	h1 {
		transition: 0.2s;
	}
	
	&:hover {
		h1 {
			color: #3d70b8;
		}
	}
`;

const Footer1 = () => {
	return (
		<Footer>
			<StyledContainer>
				<Link href="/" passHref>
					<LinkArea>
						<Text color="#fff" display="inline-block" fontWeight="bold" fontSize="36px" tag="h1" text="Nobumi Tech" />
					</LinkArea>
				</Link>
				<Flex>
					<FooterList1 {...footerDatas.list1} />
					<FooterList2 {...footerDatas.list2} />
					<FooterList2 {...footerDatas.list3} />
				</Flex>
			</StyledContainer>
		</Footer>
	);
};

export default Footer1;
