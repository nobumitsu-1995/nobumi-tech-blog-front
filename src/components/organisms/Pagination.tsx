import React from "react";
import styled from "styled-components";
import { createArr, usePageContext } from "../../../lib/PagenationContext";
import { device } from "../../styles/styled-components";
import { PaginationButton, PaginationPrev } from "../molecules";
import PaginationNext from "../molecules/PaginationNext";

const StyledPagination = styled.ul`
	align-items: center;
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-top: 50px;

	@media ${device.tablet} {
		margin-bottom: 20px;
	}
`;

const Pagination = () => {
	const { pages } = usePageContext();

	return (
		<nav>
			{pages === 1 || (
				<StyledPagination>
					<PaginationPrev />
					{createArr(pages).map((page, index) => {
						return <PaginationButton key={page} page={page} index={index} />;
					})}
					<PaginationNext />
				</StyledPagination>
			)}
		</nav>
	);
};

export default Pagination;
