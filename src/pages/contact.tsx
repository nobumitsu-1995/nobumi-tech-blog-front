import React from 'react'
import styled from 'styled-components'
import { Title } from '../components/molecules';
import { Contact } from '../components/templates';
import Layout from '../components/templates/Layout'

const Section = styled.section`
  padding: 80px 0 0;
`;

const contact = () => {
  return (
    <Layout>
      <Section>
        <Title text="お問い合わせ" subText='Contact'/>
        <Contact />
      </Section>
    </Layout>
  )
}

export default contact