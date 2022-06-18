import React from "react";
import { usePageContext } from "../../../lib/PagenationContext";
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
							<ArrowIcon color="#fff" direction="left" />
							<ArrowIcon color="#fff" direction="left" />
						</>
					}
					iconSpace="6px"
					iconPosition="right"
					label={""}
					onClick={() => setCurrent(1)}
					padding="15px"
					backgroundColor="#2e3e4e"
					borderColor="#2e3e4e"
					disabled={current === 1}
				/>
			</li>
			<li>
				<Button
					icon={<ArrowIcon color="#fff" direction="left" />}
					iconSpace="9px"
					iconPosition="right"
					label={""}
					onClick={prevPage}
					padding="15px"
					backgroundColor="#2e3e4e"
					borderColor="#2e3e4e"
					disabled={current === 1}
				/>
			</li>
		</>
	);
};

export default PaginationPrev;
