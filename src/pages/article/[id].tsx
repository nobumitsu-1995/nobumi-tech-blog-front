import { GetStaticPaths } from 'next';
import React from 'react'
import { returnSideBarDatas } from '../../../lib/functions/articles';
import { client } from '../../../lib/functions/client';
import { Blog, SideBarData } from '../../../lib/type';
import { ArticleDetail, Layout } from '../../components/templates';

type Props = {
  sideBarData: SideBarData;
}

const Article: React.FC<Props> = ({ sideBarData }) => {
  return (
    <Layout {...sideBarData}>
      <ArticleDetail />
    </Layout>
  )
}

export const getStaticProps = async () => {
	const data = await client.get({
		endpoint: 'blogs',
	}).then((res) => {
		return res.contents
	})

	const { sideBarData	} = returnSideBarDatas(data);

	return {
		props: {
			sideBarData: sideBarData
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
  const datas = await client.get({
    endpoint: 'blogs',
  }).then(res => {
    return res.contents
  });

  // [{params: {id: string}}, ...]
  const paths = datas.map((data: Blog) => {
    return {params: {id: data.id}}
  });

  return {
    paths: paths,
    fallback: false
  }
}

export default Article