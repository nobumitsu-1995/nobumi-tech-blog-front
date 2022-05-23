import type { NextPage } from "next";
import { Articles } from "../components/templates";
import { articleDatas } from "../../lib/datas";
import Layout from "../components/templates/Layout";
import { client } from "../../lib/client";
import { Blog } from "../../lib/type";

type Props = {
	articles: Blog[]
}

const Home: NextPage<Props> = ({ articles }) => {
	console.log(articles);
	
	return (
		<Layout>
			<Articles articles={articles.slice(0, 5)} />
		</Layout>
	);
};

export const getStaticProps = async () => {
	const data = await client.get({
		endpoint: 'blogs',
	}).then((res) => {
		return res.contents
	})

	return {
		props: {articles: data}
	}
}

export default Home;
