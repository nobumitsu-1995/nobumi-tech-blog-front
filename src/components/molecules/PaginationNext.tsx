import React from "react";
import { usePageContext } from "../../../lib/PagenationContext";
import { ArrowIcon, Button } from "../atoms";

const PaginationNext = () => {
	const { current, setCurrent, pages } = usePageContext();
	const nextPage = () => {
		// 最終ページの時は何もしない
		return current === pages ? false : setCurrent(current + 1);
	};

	return (
		<>
			<li>
				<Button
					icon={<ArrowIcon color="#fff" />}
					iconSpace="12px"
					iconPosition="right"
					label={""}
					onClick={nextPage}
					padding="15px"
					backgroundColor="#2e3e4e"
					borderColor="#2e3e4e"
					disabled={current === pages}
				/>
			</li>
			<li>
				<Button
					icon={
						<>
							<ArrowIcon color="#fff" />
							<ArrowIcon color="#fff" />
						</>
					}
					iconSpace="9px"
					iconPosition="right"
					label={""}
					onClick={() => setCurrent(pages)}
					padding="15px"
					backgroundColor="#2e3e4e"
					borderColor="#2e3e4e"
					disabled={current === pages}
				/>
			</li>
		</>
	);
};

export default PaginationNext;
