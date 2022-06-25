import Head from "next/head";
import React from "react";

type Props = {
	pageTitle?: string;
	pageDescription?: string;
	url: string;
	imgUrl?: string;
	imgWidth?: string;
	imgHeight?: string;
};

const Meta: React.FC<Props> = ({ ...props }) => {
	const defaultTitle = "NOBUMI TECH";
	const defaultDescription = "「NOBUMI TECH」はプログラミングに関する知識やスキルをアウトプットするブログです。";

	const title = props.pageTitle ? `${props.pageTitle} | ${defaultTitle}` : defaultTitle;
	const description = props.pageDescription || defaultDescription;

	return (
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="width=device-width,initial-scale=1.0" />
			<meta name="description" content={description} />
			<meta property="og:url" content={props.url} />
			<meta property="og:title" content={title} />
			<meta property="og:site_name" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={props.imgUrl} />
			<meta property="og:image:width" content={props.imgWidth} />
			<meta property="og:image:height" content={props.imgHeight} />
			<meta property="fb:app_id" content="560441162405267" />
		</Head>
	);
};

export default Meta;
