import React, { useEffect } from "react";
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
	const userGroups = useSelector((state) => state.user.userGroupList);
	const { user } = useSelector((state) => state.auth);

	const param = useParams();

	const isPublicGroup = groupInfo?.information.group.isPublicGroup;
	const leaderId = groupInfo?.information.leaderInfo.userId;

	const isGroupLeader = user.userId === leaderId;
	const isGroupMember = userGroups.some(
		(group) => group.groupId === Number(param.id),
	);

	useEffect(() => {
		dispatch(getGroupInfo(param.id));
		dispatch(getGroupRequestMemberList(param.id));
		dispatch(getUserGroups());
	}, []);

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
