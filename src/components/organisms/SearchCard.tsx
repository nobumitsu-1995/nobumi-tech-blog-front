import Image from "next/image";
import React from "react";
import { Paper, StyledLink } from "../atoms";
import { IconInput } from "../molecules";

const SearchCard = () => {
	return (
		<Paper padding="30px 40px">
			<IconInput
				icon={<Image src="/images/search.png" alt="search" width={16} height={16} />}
				onClick={() => console.log("clicked!")}
				placeholder="search..."
			/>
			<StyledLink link="/search" text="Search Page" />
		</Paper>
	);
};

export default SearchCard;
