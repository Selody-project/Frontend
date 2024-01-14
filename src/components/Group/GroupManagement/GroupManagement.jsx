import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGroupMemberList } from "@/features/group/group-service";

import EmptyGroupMember from "./EmptyGroupMember/EmptyGroupMember";
import { ContainerDiv, TitleUl, TitleButton } from "./GroupManagement.styles";
import GroupManagementProfile from "./GroupManagementProfile/GroupManagementProfile";
import GroupMemberManagement from "./GroupMemberManagement/GroupMemberManagement";

const GROUP_MANAGEMENT_TAB_TITLE = {
	GROUP_PROFILE: "그룹 프로필",
	GROUP_MEMBER_MANGEMENT: "그룹원 관리",
};

const GroupManagement = ({ groupInfo }) => {
	const dispatch = useDispatch();

	const { groupMemberList } = useSelector((state) => state.group);

	const memberList = groupMemberList?.filter(
		(member) => member.accessLevel !== "owner",
	);

	const [menu, setMenu] = useState(GROUP_MANAGEMENT_TAB_TITLE.GROUP_PROFILE);

	const { groupId } = groupInfo.information.group;

	useEffect(() => {
		dispatch(getGroupMemberList(groupId));
	}, []);

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
				// eslint-disable-next-line react/jsx-no-useless-fragment
				<>
					{memberList.length ? (
						<GroupMemberManagement groupId={groupId} memberList={memberList} />
					) : (
						<EmptyGroupMember />
					)}
				</>
			)}
		</ContainerDiv>
	);
};

export default GroupManagement;
