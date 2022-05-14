import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/styled-components'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

type Props = {
  children: React.ReactNode;
}

const Main = styled.main`
  background: #ECF0F1;
`

const StyledContainer = styled(Container)`
  align-items: flex-start;
	display: flex;
	gap: 30px;
  padding: 30px 0 50px
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header/>
      <Main>
        <StyledContainer>
          {children}
          <SideBar />
        </StyledContainer>
      </Main>
      <Footer/>
    </>
  )
}

export default Layout