import React from "react";
import { scrollTop, usePageContext } from "../../../lib/PagenationContext";
import { ArrowIcon, Button } from "../atoms";

const PaginationPrev = () => {
	const { current, setCurrent } = usePageContext();
	const prevPage = () => {
		// 1ページ目の時は何もしない
		return current === 1 ? false : setCurrent(current - 1);
	};

	return (
		<>
			<li>
				<Button
					icon={
						<>
							<ArrowIcon thickness="2px" color="#2e3e4e" direction="left" />
							<ArrowIcon thickness="2px" color="#2e3e4e" direction="left" />
						</>
					}
					iconSpace="6px"
					iconPosition="right"
					label={""}
					onClick={async () => {
						await setCurrent(1);
						await scrollTop()
					}}
					padding="15px"
					borderColor="#2e3e4e"
					disabled={current === 1}
				/>
			</li>
			<li>
				<Button
					icon={<ArrowIcon thickness="2px" color="#2e3e4e" direction="left" />}
					iconSpace="9px"
					iconPosition="right"
					label={""}
					onClick={async () => {
						await prevPage();
						await scrollTop()
					}}
					padding="15px"
					borderColor="#2e3e4e"
					disabled={current === 1}
				/>
			</li>
		</>
	);
};

export default PaginationPrev;
