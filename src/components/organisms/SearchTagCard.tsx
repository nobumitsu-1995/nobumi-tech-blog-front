import React from "react";
import { tagDatas } from "../../../lib/datas";
import { Paper } from "../atoms";
import { LinkList, TitleInPaper } from "../molecules";

type Props = {
	tagDatas: {
		text: string;
		link: string;
	}[]
}

const SearchTagCard: React.FC<Props> = ({ tagDatas }) => {
	return (
		<Paper padding="40px 50px">
			<TitleInPaper text="タグから検索" />
			<LinkList img="tag.png" links={tagDatas} />
		</Paper>
	);
};

export default SearchTagCard;
