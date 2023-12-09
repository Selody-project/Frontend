import React, { useState } from "react";

import {
	ContainerDiv,
	InnerDiv,
	TitleUl,
	TitleButton,
} from "./GroupManagement.styles";
import GroupLeaderProfile from "./GroupManagementProfile/GroupManagementProfile";
import GroupMemberManagement from "./GroupMemberManagement/GroupMemberManagement";

const GROUP_MANAGEMENT_TAB_TITLE = {
	GROUP_PROFILE: "그룹 프로필",
	GROUP_MEMBER_MANGEMENT: "그룹원 관리",
};

const GroupManagement = ({ groupId }) => {
	const [menu, setMenu] = useState(GROUP_MANAGEMENT_TAB_TITLE.GROUP_PROFILE);

	return (
		<ContainerDiv>
			<InnerDiv>
				<TitleUl>
					<li>
						<TitleButton
							onClick={() => setMenu(GROUP_MANAGEMENT_TAB_TITLE.GROUP_PROFILE)}
							disabled={menu === GROUP_MANAGEMENT_TAB_TITLE.GROUP_PROFILE}
						>
							{GROUP_MANAGEMENT_TAB_TITLE.GROUP_PROFILE}
						</TitleButton>
					</li>
					<li>
						<TitleButton
							onClick={() =>
								setMenu(GROUP_MANAGEMENT_TAB_TITLE.GROUP_MEMBER_MANGEMENT)
							}
							disabled={
								menu === GROUP_MANAGEMENT_TAB_TITLE.GROUP_MEMBER_MANGEMENT
							}
						>
							{GROUP_MANAGEMENT_TAB_TITLE.GROUP_MEMBER_MANGEMENT}
						</TitleButton>
					</li>
				</TitleUl>
				{menu === GROUP_MANAGEMENT_TAB_TITLE.GROUP_PROFILE ? (
					<GroupLeaderProfile groupId={groupId} />
				) : (
					<GroupMemberManagement groupId={groupId} />
				)}
			</InnerDiv>
		</ContainerDiv>
	);
};

export default GroupManagement;
