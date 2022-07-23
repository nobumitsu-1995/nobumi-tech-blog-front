import Image from "next/image";
import React from "react";
import { FacebookShareButton, LineShareButton, TwitterShareButton } from "react-share";
import styled from "styled-components";
import { device } from "../../styles/styled-components";
import { Button, Paper } from "../atoms";
import { TitleInPaper } from "../molecules";

type Props = {
	url: string;
};

const ButtonArea = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	@media ${device.sp} {
		grid-template-columns: 1fr;
	}
`;

const ContactSNSCard: React.FC<Props> = ({ ...props }) => {
	return (
		<Paper padding="25px 20px">
			<TitleInPaper text="SNSで共有" />
			<ButtonArea>
				<FacebookShareButton url={props.url}>
					<Button
						backgroundColor="#356CE9"
						borderColor="#356CE9"
						color="#fff"
						fontWeight="bold"
						icon={<Image src="/images/facebook.png" alt="facebook" width={24} height={24} />}
						iconSpace="20px"
						iconPosition="left"
						label="facebook"
						onClick={() => {}}
						padding="18px 0"
					/>
				</FacebookShareButton>
				<TwitterShareButton url={props.url}>
					<Button
						backgroundColor="#4C8FE5"
						borderColor="#4C8FE5"
						color="#fff"
						fontWeight="bold"
						icon={<Image src="/images/twitter.png" alt="twitter" width={24} height={24} />}
						iconSpace="20px"
						iconPosition="left"
						label="Twitter"
						onClick={() => {}}
						padding="18px 0"
					/>
				</TwitterShareButton>
				<LineShareButton url={props.url}>
					<Button
						backgroundColor="#06C755"
						borderColor="#06C755"
						color="#fff"
						fontWeight="bold"
						icon={<Image src="/images/line.png" alt="line" width={24} height={24} />}
						iconSpace="20px"
						iconPosition="left"
						label="LINE"
						onClick={() => {}}
						padding="18px 0"
					/>
				</LineShareButton>
			</ButtonArea>
		</Paper>
	);
};

export default ContactSNSCard;
