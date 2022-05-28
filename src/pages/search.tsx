import React from 'react'
import { returnSideBarDatas } from '../../lib/functions/articles'
import { client } from '../../lib/functions/client'
import { SideBarData } from '../../lib/type'
import { Title } from '../components/molecules'
import { Layout, Search } from '../components/templates'
import { Section } from '../styles/styled-components'

type Props = {
	sideBarData: SideBarData;
}

const index: React.FC<Props> = ({ sideBarData }) => {
  return (
    <Layout {...sideBarData}>
      <Section padding='80px 0 0'>
        <Title text="記事検索フォーム" subText='Search'/>
        <Search />
      </Section>
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

export default index