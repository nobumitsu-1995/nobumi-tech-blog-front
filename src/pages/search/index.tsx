import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/molecules'
import { Search } from '../../components/templates'

const Section = styled.section`
  padding: 80px 0 0;
`;

const index = () => {
  return (
    <Section>
      <Title text="記事検索フォーム" subText='Search'/>
      <Search />
    </Section>
  )
}

export default index