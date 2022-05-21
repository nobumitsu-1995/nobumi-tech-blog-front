import type { NextPage } from "next";
import { Articles } from "../components/templates";
import { articleDatas } from "../../lib/datas";
import Layout from "../components/templates/Layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<Articles articles={articleDatas.slice(0, 5)} />
		</Layout>
	);
};

export default Home;
