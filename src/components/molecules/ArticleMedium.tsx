import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Border, Text } from "../atoms";

type Props = {
	id: number;
	img: string;
	title: string;
};

const ArticleMedium: React.FC<Props> = ({ ...props }) => {
	return (
		<article>
			<Link href={`/article/${props.id}`}>
				<a>
					<figure>
						<Image src={`/${props.img}`} alt={props.title} width="1100" height="500" />
					</figure>
					<Text color="#555" fontSize="14px" text={props.title} textalign="center" margin="20px 0 30px" />
					<Border color="#882107" height="1px" width="50px" />
				</a>
			</Link>
		</article>
	);
};

export default ArticleMedium;
