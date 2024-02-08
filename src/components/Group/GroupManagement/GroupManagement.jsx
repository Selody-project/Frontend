import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGroupMemberList } from "@/features/group/group-service";

import EmptyGroupMember from "./EmptyGroupMember/EmptyGroupMember";
import { ContainerDiv, TitleUl, TitleButton } from "./GroupManagement.styles";
import GroupManagementProfile from "./GroupManagementProfile/GroupManagementProfile";
import GroupMemberManagement from "./GroupMemberManagement/GroupMemberManagement";

const GroupManagement = ({ groupInfo }) => {
	const dispatch = useDispatch();

	const { groupMemberList } = useSelector((state) => state.group);

	const memberList = groupMemberList?.filter(
		(member) => member.accessLevel !== "owner",
	);

	const [isGroupProfile, setIsGroupProfile] = useState(true);

	const { groupId } = groupInfo.information.group;

	useEffect(() => {
		dispatch(getGroupMemberList(groupId));
	}, []);

	return (
		<ContainerDiv>
			<TitleUl>
				<li>
					<TitleButton
						onClick={() => setIsGroupProfile(true)}
						isActive={isGroupProfile}
					>
						그룹 프로필
					</TitleButton>
				</li>
				<li>
					<TitleButton
						onClick={() => setIsGroupProfile(false)}
						isActive={!isGroupProfile}
					>
						그룹원 관리
					</TitleButton>
				</li>
			</TitleUl>

			{isGroupProfile ? (
				<GroupManagementProfile groupInfo={groupInfo} />
			) : (
				// eslint-disable-next-line react/jsx-no-useless-fragment
				<>
					{memberList.length === 0 ? (
						<EmptyGroupMember />
					) : (
						<GroupMemberManagement groupId={groupId} memberList={memberList} />
					)}
				</>
			)}
		</ContainerDiv>
	);
};

export default GroupManagement;
