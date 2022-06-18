import React from "react";
import { SearchCategoryCard, SearchKeywordCard, SearchTagCard } from "../../components/organisms";
import { GapColumnList } from "../../styles/styled-components";

type Props = {
	tagDatas: {
		text: string;
		link: string;
	}[];
};

const Search: React.FC<Props> = ({ tagDatas }) => {
	return (
		<GapColumnList gap="20px">
			<SearchKeywordCard />
			<SearchCategoryCard />
			<SearchTagCard tagDatas={tagDatas} />
		</GapColumnList>
	);
};

export default Search;
