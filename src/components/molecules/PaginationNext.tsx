import React from "react";
import { scrollTop, usePageContext } from "../../../lib/PagenationContext";
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
					icon={<ArrowIcon thickness="2px" color="#2e3e4e" />}
					iconSpace="12px"
					iconPosition="right"
					label={""}
					onClick={async () => {
						await nextPage();
						await scrollTop()
					}}
					padding="15px"
					borderColor="#2e3e4e"
					disabled={current === pages}
				/>
			</li>
			<li>
				<Button
					icon={
						<>
							<ArrowIcon thickness="2px" color="#2e3e4e" />
							<ArrowIcon thickness="2px" color="#2e3e4e" />
						</>
					}
					iconSpace="9px"
					iconPosition="right"
					label={""}
					onClick={async () => {
						await setCurrent(pages)
						await scrollTop()
					}}
					padding="15px"
					borderColor="#2e3e4e"
					disabled={current === pages}
				/>
			</li>
		</>
	);
};

export default PaginationNext;
