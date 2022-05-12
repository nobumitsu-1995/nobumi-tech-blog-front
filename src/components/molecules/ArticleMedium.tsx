import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Border, Text } from "../atoms";

type Props = {
	id: number;
	img: string;
	title: string;
};

const ArticleMedium: React.FC<Props> = ({ ...props }) => {
	const router = useRouter();
	const handleClickButton = () => {
		return router.push(`/article/${props.id}`);
	};

	return (
		<article>
			<button type="button" onClick={handleClickButton}>
				<figure>
					<Image
						src={props.img}
						alt={props.title}
						layout="responsive"
						width="1100"
						height="500"
						objectFit="contain"
					/>
				</figure>
				<Text color="#555" fontSize="14px" text={props.title} textAlign="center" margin="20px 0 30px" />
				<Border color="#882107" height="1px" width="50px" />
			</button>
		</article>
	);
};

export default ArticleMedium;
