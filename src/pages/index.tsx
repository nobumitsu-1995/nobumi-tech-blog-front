import type { NextPage } from "next";
import { Layout, Articles, Meta } from "../components/templates";
import { client } from "../../lib/functions/client";
import { Blog, SideBarData } from "../../lib/type";
import { returnArticles, returnSideBarDatas } from "../../lib/functions/articles";
import { PageProvider } from "../../lib/PagenationContext";
import { topMetaData } from "../../lib/metaDatas";

type Props = {
	articles: Blog[];
	sideBarData: SideBarData;
};

const Home: NextPage<Props> = ({ ...props }) => {
	return (
		<>
			<Meta {...topMetaData} />
			<Layout {...props.sideBarData}>
				<PageProvider itemLength={props.articles.length}>
					<Articles articles={props.articles.slice(0, 5)} />
				</PageProvider>
			</Layout>
		</>
	);
};

export const getStaticProps = async () => {
	const data = await client
		.get({
			endpoint: "blogs",
			queries: { limit: 200 },
		})
		.then(res => {
			return res.contents;
		});

	const articles = returnArticles(data);
	const { sideBarData } = returnSideBarDatas(data);

	return {
		props: {
			articles: articles,
			sideBarData: sideBarData,
		},
	};
};

export default Home;
