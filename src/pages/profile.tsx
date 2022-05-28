import React from 'react'
import { returnSideBarDatas } from '../../lib/functions/articles'
import { client } from '../../lib/functions/client'
import { SideBarData } from '../../lib/type'
import { Layout, Profile } from '../components/templates'

type Props = {
	sideBarData: SideBarData
}

const profile: React.FC<Props> = ({ sideBarData }) => {
  return (
		<Layout {...sideBarData} >
      <Profile />
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

export default profile