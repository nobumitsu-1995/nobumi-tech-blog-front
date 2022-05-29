import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/styled-components";

const Header = styled.section`
	background: #fff;
	height: 100px;
`;

const Header1 = () => {
	return (
		<Header>
			<Container>
				<h1>{/* <Image src="/" alt='nobumi tech' width="" height="" /> */}</h1>
			</Container>
		</Header>
	);
};

export default Header1;
