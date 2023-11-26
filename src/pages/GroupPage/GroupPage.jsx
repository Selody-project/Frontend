import React from "react";

import GroupFeed from "@/components/Group/GroupFeed/GroupFeed";
import GroupProfile from "@/components/Group/GroupProfile/GroupProfile";

import { ContainerDiv } from "./GroupPage.styles";

const GroupPage = () => {
	return (
		<ContainerDiv>
			<GroupProfile />
			<GroupFeed />
		</ContainerDiv>
	);
};

export default GroupPage;
