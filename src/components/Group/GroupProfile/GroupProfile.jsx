import React from "react";
import { useSelector } from "react-redux";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	MiddleInnerDiv,
} from "./GroupProfile.styles";
import GroupProfileButton from "./GroupProfileButton";
import GroupDelegateModal from "../GroupManagement/GroupManagementProfile/GroupDelegateModal";

const GroupProfile = ({ groupInfo, isGroupMember, isGroupLeader }) => {
	const { openedModal } = useSelector((state) => state.ui);
	const { isLoading } = useSelector((state) => state.group);

	const groupDetailInfo = groupInfo?.information.group;

	return (
		<ContainerDiv>
			<TopDiv>
				<img src={groupInfo?.information.group.image} alt="groupImg" />
				<h3>{groupInfo?.information.group.name}</h3>
				<p>{groupInfo?.information.group.description}</p>
			</TopDiv>
			<MiddleDiv>
				<MiddleInnerDiv>
					<h3>{groupInfo?.information.group.member.toLocaleString()}</h3>
					<h4>그룹원</h4>
				</MiddleInnerDiv>
				<MiddleInnerDiv>
					<h3>{groupInfo?.information.group.feedCount.toLocaleString()}</h3>
					<h4>작성된 피드</h4>
				</MiddleInnerDiv>
			</MiddleDiv>
			<GroupProfileButton
				groupInfo={groupInfo}
				isGroupMember={isGroupMember}
				isGroupLeader={isGroupLeader}
			/>
			{openedModal === "DELEGATE_GROUP" && (
				<GroupDelegateModal
					groupDetailInfo={groupDetailInfo}
					isLoading={isLoading}
					groupMember={groupInfo.information.memberInfo}
				/>
			)}
		</ContainerDiv>
	);
};

export default GroupProfile;
