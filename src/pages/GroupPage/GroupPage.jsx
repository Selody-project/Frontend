import React from "react";

import GroupFeed from "@/components/Group/GroupFeed/GroupFeed";
import SecretFeed from "@/components/Group/GroupFeed/SecretFeed";
import UploadFeed from "@/components/Group/GroupFeed/UploadFeed";
import GroupProfile from "@/components/Group/GroupProfile/GroupProfile";

import { ContainerDiv, MiddleDiv } from "./GroupPage.styles";

const GroupPage = () => {
	const secret = false;

	return (
		<ContainerDiv>
			<GroupProfile />
			{secret ? (
				<SecretFeed />
			) : (
				<MiddleDiv>
					<UploadFeed />
					<GroupFeed />
				</MiddleDiv>
			)}

			{/* {secret ? <SecretFeed /> : <GroupFeed />} */}
		</ContainerDiv>
	);
};

export default GroupPage;
