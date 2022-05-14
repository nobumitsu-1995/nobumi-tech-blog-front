import React from 'react'
import styled from 'styled-components'
import { headerDatas } from '../../../lib/datas'
import { Container, Flex } from '../../styles/styled-components'
import { HeaderLink } from '../molecules'

const Header = styled.div`
  background: #2E3E4E;
  height: 75px;
`;

const StyledContainer = styled(Container)`
  height: 100%;
`

const Nav = styled.nav`
  align-items: stretch;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const List = Nav.withComponent("ul");

const Header2 = () => {
  return (
    <Header>
      <StyledContainer>
        <Nav>
          <HeaderLink link='/' img='home.png' text='HOME'/>
          <List>
            { headerDatas.map(data => {
              return (
                <li key={data.text}>
                  <HeaderLink {...data} />
                </li>
              );
            }) }
          </List>
        </Nav>
      </StyledContainer>
    </Header>
  )
}

export default Header2