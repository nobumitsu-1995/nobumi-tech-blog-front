import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/styled-components";

const Footer = styled.div`
	background: #9f9f9f;
	height: 60px;
`;

const StyledContainer = styled(Container)`
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: center;
`;

const CopyWrite = styled.small`
	color: #fff;
	text-align: center;
`;

const Footer2 = () => {
	return (
		<Footer>
			<StyledContainer>
				<CopyWrite>Copyright - 2022, Nobumitsu Masugata, All Rights Reserved.</CopyWrite>
			</StyledContainer>
		</Footer>
	);
};

export default Footer2;
