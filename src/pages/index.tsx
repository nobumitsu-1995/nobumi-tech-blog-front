import type { NextPage } from "next";
import { Layout, Articles } from "../components/templates";
import { client } from "../../lib/functions/client";
import { Blog, SideBarData } from "../../lib/type";
import { returnArticles, returnSideBarDatas } from "../../lib/functions/articles";

type Props = {
	articles: Blog[];
	sideBarData: SideBarData
}

const Home: NextPage<Props> = ({ ...props }) => {		
	return (
		<Layout {...props.sideBarData} >
			<Articles articles={props.articles.slice(0, 5)} />
		</Layout>
	);
};

export const getStaticProps = async () => {
	const data = await client.get({
		endpoint: 'blogs',
	}).then((res) => {
		return res.contents
	})

	const articles = returnArticles(data);
	const { sideBarData	} = returnSideBarDatas(data);

	return {
		props: {
			articles: articles,
			sideBarData: sideBarData
		}
	}
}

export default Home;
