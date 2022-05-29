import React from "react";
import { headerDatas } from "../../../lib/datas";
import { FlexCenter } from "../../styles/styled-components";
import { Paper } from "../atoms";
import { LinkList, TitleInPaper } from "../molecules";

const SearchCategoryCard = () => {
	return (
		<Paper padding="40px 50px">
			<TitleInPaper text="カテゴリから検索" />
			<LinkList links={headerDatas} />
		</Paper>
	);
};

export default SearchCategoryCard;
