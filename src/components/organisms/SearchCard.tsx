import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { FlexCenter } from "../../styles/styled-components";
import { Paper, StyledLink } from "../atoms";
import { IconInput } from "../molecules";

const LinkContainer = styled(FlexCenter)`
	margin-top: 10px;
`;

const SearchCard = () => {
	return (
		<Paper padding="25px 20px">
			<IconInput
				icon={<Image src="/images/search.png" alt="search" width={16} height={16} />}
				onClick={() => console.log("clicked!")}
				placeholder="search..."
			/>
			<LinkContainer>
				<StyledLink link="/search" text="Search Page >" />
			</LinkContainer>
		</Paper>
	);
};

export default SearchCard;
