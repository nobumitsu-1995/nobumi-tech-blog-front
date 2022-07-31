import React from "react";
import { scrollTop, usePageContext } from "../../../lib/PagenationContext";
import { Button } from "../atoms";

type Props = {
	padding?: string;
	page: number;
	index: number;
};

const PaginationButton: React.FC<Props> = ({ padding = "7px 10px", page, index }) => {
	const { current, setCurrent } = usePageContext();
	const isCurrent = (index: number) => {
		return index === current - 1;
	};

	const handleClickButton = () => {
		scrollTop();
		setCurrent(page);
	};

	return (
		<li>
			<Button
				fontSize="14px"
				fontWeight="bold"
				label={page?.toString()}
				onClick={handleClickButton}
				padding={padding}
				backgroundColor={isCurrent(index) ? "#2e3e4e" : "#eee"}
				borderColor="#2e3e4e"
				color={isCurrent(index) ? "#fff" : "#2e3e4e"}
				hoverBackgroundColor="#2e3e4e"
				hoverColor="#fff"
			/>
		</li>
	);
};

export default PaginationButton;
