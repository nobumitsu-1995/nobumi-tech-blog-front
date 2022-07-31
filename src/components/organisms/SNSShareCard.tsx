import Image from "next/image";
import React from "react";
import { FacebookShareButton, LineShareButton, TwitterShareButton } from "react-share";
import styled from "styled-components";
import { device } from "../../styles/styled-components";
import { SNSShareButton, Paper } from "../atoms";
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
					<SNSShareButton
						backgroundColor="#356CE9"
						icon={<Image src="/images/facebook.png" alt="facebook" width={24} height={24} />}
						label="facebook"
					/>
				</FacebookShareButton>
				<TwitterShareButton url={props.url}>
					<SNSShareButton
						backgroundColor="#4C8FE5"
						icon={<Image src="/images/twitter.png" alt="twitter" width={24} height={24} />}
						label="Twitter"
					/>
				</TwitterShareButton>
				<LineShareButton url={props.url}>
					<SNSShareButton
						backgroundColor="#06C755"
						icon={<Image src="/images/line.png" alt="line" width={24} height={24} />}
						label="LINE"
					/>
				</LineShareButton>
			</ButtonArea>
		</Paper>
	);
};

export default ContactSNSCard;
