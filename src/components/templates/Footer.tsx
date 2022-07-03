import React from "react";
import styled from "styled-components";
import { Footer1, Footer2 } from "../organisms";

const StyledFooter = styled.footer`
	width: 100vw;
`;

const Footer = () => {
	return (
		<footer>
			<Footer1 />
			<Footer2 />
		</footer>
	);
};

export default Footer;
