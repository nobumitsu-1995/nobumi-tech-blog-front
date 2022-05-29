import React from "react";
import styled from "styled-components";
import { Blog } from "../../../lib/type";
import { Container } from "../../styles/styled-components";
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
	grid-template-columns: 1fr 300px;
	gap: 30px;
	justify-content: center;
	padding: 30px 0 50px;
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
