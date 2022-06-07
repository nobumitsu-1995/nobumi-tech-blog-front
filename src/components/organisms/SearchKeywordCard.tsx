import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Paper } from "../atoms";
import { IconInput, TitleInPaper } from "../molecules";

const SearchKeywordCard = () => {
	const [error, setError] = useState(false);
	const [keyword, setKeyword] = useState("");
	const router = useRouter();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setKeyword(value);
	};

	const handleClickButton = () => {
		if (!keyword) return setError(true);
		setError(false);
		router.push({
			pathname:"/search/result",	//URL
			query: {keyword :keyword}		//検索クエリ
		});
	};

	return (
		<Paper borderColor="#7C83CC" padding="40px 50px">
			<TitleInPaper text="キーワードで検索" />
			<IconInput
				error={error}
				name="keyword"
				value={keyword}
				icon={<Image src="/images/search.png" alt="search" width={16} height={16} />}
				onChange={handleInputChange}
				onClick={handleClickButton}
				placeholder="search..."
			/>
		</Paper>
	);
};

export default SearchKeywordCard;
