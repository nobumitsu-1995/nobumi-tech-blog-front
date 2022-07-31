import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/styled-components";

const Header = styled.div`
	background: #fff;
	height: 100px;
`;

const Header1 = () => {
	return (
		<Header>
			<Container>
				<h1>Nobumi Tech</h1>
			</Container>
		</Header>
	);
};

export default Header1;
