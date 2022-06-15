import { GetServerSideProps } from 'next'
import React from 'react'
import { returnArticles, returnArticlesMatchTag, returnSideBarDatas } from '../../../lib/functions/articles'
import { client } from '../../../lib/functions/client'
import { PageProvider } from '../../../lib/PagenationContext'
import { Blog, SideBarData } from '../../../lib/type'
import { Failed, Title } from '../../components/molecules'
import { Articles, Layout } from '../../components/templates'
import { Section } from '../../styles/styled-components'

type Props = {
  sideBarData: SideBarData;
  articles: Blog[];
  tags: string[];
}

const result: React.FC<Props> = ({ sideBarData, articles, tags }) => {

  return (
    <Layout {...sideBarData}>
      <Section padding='80px 0 0'>
        <Title text='記事検索結果' subText='Result' tags={tags}/>
        { articles.length > 0 ?
          <PageProvider itemLength={articles.length}>
            <Articles articles={articles} />
          </PageProvider>
        : <Failed />
        }
      </Section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { keyword, tag } = context.query;

  const data = await client
    .get({
      endpoint: "blogs",
    })
    .then(res => {
      return res.contents;
    });
  const { sideBarData } = returnSideBarDatas(data);
  
  const articles = tag ?
      // tag検索だった場合
      returnArticlesMatchTag(returnArticles(data), tag as string) :
    keyword ?
      // keyword検索だった場合
      returnArticles(await client
        .get({
          endpoint: "blogs",
          queries: { q: keyword as string },
      })
      .then(res => {
        return res.contents;
      })) :
      // 何も条件が設定されていなかった場合
    [];

  const tags = tag ? [tag as string] : keyword ? [keyword as string] : []; 

  return {
    props: {
      sideBarData: sideBarData,
      articles: articles,
      tags: tags
    }
  }
}

export default result