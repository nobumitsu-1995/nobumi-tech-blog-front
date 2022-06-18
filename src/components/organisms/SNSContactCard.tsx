import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { snsDatas } from "../../../lib/datas";
import { Button, Paper } from "../atoms";
import { TitleInPaper } from "../molecules";

const ButtonArea = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;

const ContactSNSCard = () => {
	const router = useRouter();
	const handleClickButton = (url: string) => {
		router.push(url);
	};

	return (
		<Paper padding="50px">
			<TitleInPaper text="SNSでお問い合わせ" />
			<ButtonArea>
				{snsDatas.map(data => {
					return (
						<Button
							key={data.name}
							backgroundColor={data.color}
							borderColor={data.color}
							color="#fff"
							fontWeight="bold"
							icon={<Image src={data.icon} alt={data.name} width={24} height={24} />}
							iconSpace="20px"
							iconPosition="left"
							label={data.name}
							onClick={() => handleClickButton(data.url)}
							padding="18px 0"
						/>
					);
				})}
			</ButtonArea>
		</Paper>
	);
};

export default ContactSNSCard;
