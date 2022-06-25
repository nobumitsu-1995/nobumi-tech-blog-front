import React from "react";
import { Blog } from "../../../lib/type";
import { GapColumnList } from "../../styles/styled-components";
import { ContactSNSCard, ProfileCard } from "../organisms";

type Props = {
	userData: Blog;
};

const Profile: React.FC<Props> = ({ userData }) => {
	return (
		<GapColumnList gap="30px">
			<li>
				<ProfileCard userData={userData} />
			</li>
			{/* <li>
				<ContactSNSCard />
			</li> */}
		</GapColumnList>
	);
};

export default Profile;
