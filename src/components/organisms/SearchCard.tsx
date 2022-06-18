import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { FlexCenter } from "../../styles/styled-components";
import { Paper, StyledLink } from "../atoms";
import { IconInput } from "../molecules";

const LinkContainer = styled(FlexCenter)`
	margin-top: 10px;
`;

const SearchCard = () => {
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
			pathname: "/search/result", //URL
			query: { keyword: keyword }, //検索クエリ
		});
	};

	return (
		<Paper padding="25px 20px">
			<IconInput
				error={error}
				name="keyword"
				value={keyword}
				icon={<Image src="/images/search.png" alt="search" width={16} height={16} />}
				onChange={handleInputChange}
				onClick={handleClickButton}
				placeholder="search..."
			/>
			<LinkContainer>
				<StyledLink link="/search" text="Search Page >" />
			</LinkContainer>
		</Paper>
	);
};

export default SearchCard;
