import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/molecules'
import { SearchCategoryCard, SearchKeywordCard, SearchTagCard } from '../../components/organisms'
import Layout from '../../components/templates/Layout'
import { GapColumnList } from '../../styles/styled-components'

const Section = styled.section`
  padding: 80px 0 0;
`;

const index = () => {
  return (
    <Layout>
      <Section>
        <Title text="記事検索フォーム" subText='Search'/>
        <GapColumnList gap='20px'>
          <SearchKeywordCard/>
          <SearchCategoryCard/>
          <SearchTagCard/>
        </GapColumnList>
      </Section>
    </Layout>
  )
}

export default index