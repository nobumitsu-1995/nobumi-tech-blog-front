import React from "react";
import { SearchCategoryCard, SearchKeywordCard, SearchTagCard } from "../../components/organisms";
import { GapColumnList } from "../../styles/styled-components";

const Search = () => {
	return (
		<GapColumnList gap="20px">
			<SearchKeywordCard />
			<SearchCategoryCard />
			<SearchTagCard />
		</GapColumnList>
	);
};

export default Search;
