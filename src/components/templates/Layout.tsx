import React from "react";
import styled from "styled-components";
import { Blog } from "../../../lib/type";
import { Container, device } from "../../styles/styled-components";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

type Props = {
	children: React.ReactNode;
	userData: Blog;
	recommendArticles: Blog[];
	recommendBackendArticles: Blog[];
	recommendFrontendArticles: Blog[];
};

const Main = styled.main`
	background: #ecf0f1;
`;

const StyledContainer = styled(Container)`
	align-items: flex-start;
	display: grid;
	grid-template-columns: 2.5fr 1fr;
	gap: 30px;
	justify-content: center;
	padding: 30px 20px 50px;

	@media ${device.tablet} {
		grid-template-columns: 1fr;
	}

	@media ${device.sp} {
		padding: 10px 5px 20px;
	}
`;

const Layout: React.FC<Props> = ({ ...props }) => {
	return (
		<>
			<Header />
			<Main>
				<StyledContainer>
					{props.children}
					<SideBar
						userData={props.userData}
						recommendArticles={props.recommendArticles}
						recommendBackendArticles={props.recommendBackendArticles}
						recommendFrontendArticles={props.recommendFrontendArticles}
					/>
				</StyledContainer>
			</Main>
			<Footer />
		</>
	);
};

export default Layout;
