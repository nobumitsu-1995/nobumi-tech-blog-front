import React from 'react'
import styled from 'styled-components';
import { ArticleDetail } from '../../components/templates';
import Layout from '../../components/templates/Layout';

const Section = styled.div`
`;

const Article = () => {
  return (
    <Layout>
      <Section>
        <ArticleDetail />
      </Section>
    </Layout>
  )
}

export default Article