import React, { useState } from "react";

import { ContainerDiv, TitleUl, TitleButton } from "./GroupManagement.styles";
import GroupManagementProfile from "./GroupManagementProfile/GroupManagementProfile";
import GroupMemberManagement from "./GroupMemberManagement/GroupMemberManagement";

const GROUP_MANAGEMENT_TAB_TITLE = {
	GROUP_PROFILE: "그룹 프로필",
	GROUP_MEMBER_MANGEMENT: "그룹원 관리",
};

const GroupManagement = ({ groupInfo }) => {
	const [menu, setMenu] = useState(GROUP_MANAGEMENT_TAB_TITLE.GROUP_PROFILE);

	return (
		<ContainerDiv>
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
				<GroupManagementProfile groupInfo={groupInfo} />
			) : (
				<GroupMemberManagement groupInfo={groupInfo} />
			)}
		</ContainerDiv>
	);
};

export default GroupManagement;
