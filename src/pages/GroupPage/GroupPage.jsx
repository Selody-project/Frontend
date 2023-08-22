import React from "react";

import GroupFeed from "@/components/Group/GroupFeed/GroupFeed";
import SecretFeed from "@/components/Group/GroupFeed/SecretFeed";
import GroupProfile from "@/components/Group/GroupProfile/GroupProfile";

import { ContainerDiv } from "./GroupPage.styles";

const GroupPage = () => {
	const secret = false;

	return (
		<ContainerDiv>
			<GroupProfile />
			{secret ? <SecretFeed /> : <GroupFeed />}
		</ContainerDiv>
	);
};

export default GroupPage;
