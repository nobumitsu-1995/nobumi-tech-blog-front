import { readFileSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next'
import path from 'path';
import React from 'react'
import styled from 'styled-components';
import { Article } from '../../../lib/type';
import { Title } from '../../components/molecules';
import { Articles } from '../../components/templates';
import Layout from '../../components/templates/Layout';
import { GapColumnList } from '../../styles/styled-components';

type Props = {
  category: string;
  articles: Article[]
}

type Params = {
  category: string;
}

const Section = styled(GapColumnList.withComponent('section'))`
  padding: 80px 0 0;
`;

const Category: React.FC<Props> = ({ category, articles }) => {
  return (
    <Layout>
      <Section gap="30px">
        <Title text={`${category.toUpperCase()}に関する記事一覧`} subText='Category' />
        <Articles articles={articles} />
      </Section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const category = params!.category;
  const articles = await getArticlesMatchCategory(category);

  return {
    props: {
      category,
      articles
    }
  }
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  return {
    paths: [
      {params: {category: "backend"}},
      {params: {category: "frontend"}},
      {params: {category: "other"}},
    ],
    fallback: false
  }
}

const getArticlesMatchCategory = (category: string) => {
  const jsonPath = path.join(process.cwd(), 'lib', 'datas', 'articles.json');
  const jsonText = readFileSync(jsonPath, 'utf-8');
  const object = JSON.parse(jsonText) as Article[];

  return (
    object.filter(article => {
      return article.category === category;
    })
  );
}

export default Category;