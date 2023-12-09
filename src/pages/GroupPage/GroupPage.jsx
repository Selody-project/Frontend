import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import GroupFeed from "@/components/Group/GroupFeed/GroupFeed";
import SecretFeed from "@/components/Group/GroupFeed/SecretFeed";
import UploadFeed from "@/components/Group/GroupFeed/UploadFeed";
import GroupMember from "@/components/Group/GroupMember/GroupMember";
import GroupProfile from "@/components/Group/GroupProfile/GroupProfile";
import GroupTitle from "@/components/Group/GroupTitle/GroupTitle";
import {
	getGroupInfo,
	getGroupRequestMemberList,
} from "@/features/group/group-service";
import { getUserGroups } from "@/features/user/user-service";

import { GroupMain, FeedDiv } from "./GroupPage.styles";

const GroupPage = () => {
	const dispatch = useDispatch();

	const { groupInfo, groupRequestMemberList } = useSelector(
		(state) => state.group,
	);
	const userGroup = useSelector((state) => state.user.userGroupList);
	const { user } = useSelector((state) => state.auth);

	const param = useParams();

	const [isGroupMember, setIsGroupMember] = useState(false);
	const [isGroupLeader, setIsGroupLeader] = useState(false);

	const isPublicGroup = groupInfo?.information.group.isPublicGroup;
	const leaderId = groupInfo?.information.leaderInfo.userId;

	useEffect(() => {
		dispatch(getGroupInfo(param.id));
		dispatch(getGroupRequestMemberList(param.id));
		dispatch(getUserGroups());
	}, []);

	useEffect(() => {
		if (user.userId === leaderId) {
			setIsGroupLeader(true);
		}
	}, [leaderId]);

	useEffect(() => {
		userGroup?.forEach((info) => {
			if (info.groupId === Number(param.id)) {
				setIsGroupMember(true);
			}
		});
	}, [userGroup]);

	return (
		<GroupMain>
			<GroupProfile
				groupInfo={groupInfo}
				isGroupMember={isGroupMember}
				isGroupLeader={isGroupLeader}
			/>
			{!isPublicGroup && !isGroupMember ? (
				<SecretFeed />
			) : (
				<>
					<FeedDiv>
						{isGroupMember && <UploadFeed />}
						<GroupTitle />
						<GroupFeed groupId={param.id} />
					</FeedDiv>

					{isGroupMember && (
						<GroupMember
							requestMemberList={groupRequestMemberList}
							groupId={param.id}
						/>
					)}
				</>
			)}
		</GroupMain>
	);
};

export default GroupPage;
