import React from "react";

import GroupFeed from "@/components/Group/GroupFeed/GroupFeed";
import SecretFeed from "@/components/Group/GroupFeed/SecretFeed";
import UploadFeed from "@/components/Group/GroupFeed/UploadFeed";
import GroupMember from "@/components/Group/GroupMember/GroupMember";
import GroupProfile from "@/components/Group/GroupProfile/GroupProfile";

import { ContainerDiv } from "./GroupPage.styles";

const GroupPage = () => {
	const secret = false;

	return (
		<ContainerDiv>
			<GroupProfile />
			{secret ? (
				<SecretFeed />
			) : (
				<>
					<div>
						<UploadFeed />
						<GroupFeed />
					</div>
					<GroupMember />
				</>
			)}
		</ContainerDiv>
	);
};

export default GroupPage;
