import React from "react";
import { url } from "../../../lib/metaDatas";
import { Blog } from "../../../lib/type";
import { GapColumnList } from "../../styles/styled-components";
import { ProfileCard, ShareSNSCard } from "../organisms";

type Props = {
	userData: Blog;
};

const Profile: React.FC<Props> = ({ userData }) => {
	return (
		<GapColumnList gap="30px">
			<li>
				<ProfileCard userData={userData} />
			</li>
			<li>
				<ShareSNSCard url={`${url}/profile`} />
			</li>
		</GapColumnList>
	);
};

export default Profile;
