import React, { createContext, useContext, useMemo, useState } from "react";
import { Blog } from "./type";

type Props = {
  children: React.ReactNode;
	itemLength: number;
}

// ページネーション用Contextの作成
const PageContext = createContext(
	{} as {
		itemPerPage: number;
		current: number;
		setCurrent: React.Dispatch<React.SetStateAction<number>>;
		pages: number,
	},
);

// 子要素でContextを使用する場合のuseContext
export const usePageContext = () => {
	return useContext(PageContext);
};

// ページネーション用Provider. Contextを使用したい要素の一番上層部をこれでラップする。
export const PageProvider: React.FC<Props> = ({ ...props }) => {
	// 1ページに表示する記事数
	const itemPerPage = 2;
	// 現在のページ
	const [current, setCurrent] = useState(1);
	// ページ数
	const pages = returnPageNum(itemPerPage, props.itemLength);

	const value = useMemo(() => {
		return { current, setCurrent, pages, itemPerPage };
	}, [current, setCurrent, pages, itemPerPage]);

	return <PageContext.Provider value={value}>{props.children}</PageContext.Provider>;
};

// pagenationナビゲーション作成用配列を生成する関数
export const createArr = (pages: number) => {
	return Array(Math.ceil(pages))
		.fill(0)
		.map((v, i) => {
			return i + 1;
		});
};

// 必要なページ数を算出する
export const returnPageNum = (itemPerPage: number, itemQuantity: number) => {
	return Math.ceil(itemQuantity / itemPerPage);
}

export const returnCurrentBrogs = ( items: Blog[], itemPerPage: number, currentPage: number ) => {
	const firstVal = (currentPage - 1) * itemPerPage;
	const lastVal = currentPage * itemPerPage;
	return items.slice(firstVal, lastVal);
}