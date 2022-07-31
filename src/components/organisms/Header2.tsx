import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from ".";
import { headerDatas } from "../../../lib/datas";
import { Container, device } from "../../styles/styled-components";
import { HeaderLink } from "../molecules";

const Header = styled.div`
	background: #2e3e4e;
	height: 75px;
`;

const StyledContainer = styled(Container)`
	height: 100%;
	width: 100vw;
`;

const Nav = styled.nav`
	align-items: stretch;
	display: flex;
	height: 100%;
	justify-content: space-between;
`;

const List = styled.ul`
	display: flex;

	@media ${device.midSp} {
		display: none;
	}
`;

const Hamburger = styled.div`
	display: flex;
	align-items: center;

	@media (min-width: 700px) {
		display: none;
	}
`;

const Header2 = () => {
	return (
		<Header>
			<StyledContainer>
				<Nav>
					<HeaderLink link="/" img="home.png" text="HOME" />
					<List>
						{headerDatas.map(data => {
							return (
								<li key={data.text}>
									<HeaderLink {...data} />
								</li>
							);
						})}
					</List>
					<Hamburger>
						<HamburgerMenu />
					</Hamburger>
				</Nav>
			</StyledContainer>
		</Header>
	);
};

export default Header2;
