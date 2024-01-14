import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import EmptyFeed from "@/components/Common/Feed/EmptyFeed/EmptyFeed";
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
import { resetAllGroupPosts } from "@/features/post/post-slice";
import { getUserGroups } from "@/features/user/user-service";

import { GroupMain, FeedDiv } from "./GroupPage.styles";

const GroupPage = () => {
	const dispatch = useDispatch();

	const { groupInfo, groupRequestMemberList } = useSelector(
		(state) => state.group,
	);
	const { userGroupList } = useSelector((state) => state.user);
	const { user } = useSelector((state) => state.auth);
	const { allGroupPostsIsEnd, isEmpty } = useSelector((state) => state.post);

	const param = useParams();
	const navigate = useNavigate();

	const groupId = param.id;

	const isPublicGroup = groupInfo?.information.group.isPublicGroup;
	const leaderId = groupInfo?.information.leaderInfo.userId;
	const leaderName = groupInfo?.information.leaderInfo.nickname;

	const isGroupLeader = user.userId === leaderId;
	const isGroupMember = userGroupList.some(
		(group) => group.groupId === Number(groupId),
	);

	useEffect(() => {
		try {
			dispatch(getGroupInfo(groupId)).unwrap();
			dispatch(getGroupRequestMemberList(groupId));
			dispatch(getUserGroups());
		} catch (e) {
			navigate("/community");
		}

		return () => {
			dispatch(resetAllGroupPosts());
		};
	}, []);

	return (
		<GroupMain>
			{groupInfo && (
				<GroupProfile
					groupInfo={groupInfo}
					isGroupLeader={isGroupLeader}
					isGroupMember={isGroupMember}
				/>
			)}

			{!isPublicGroup && !isGroupMember ? (
				<SecretFeed />
			) : (
				<FeedDiv>
					{isGroupMember && <UploadFeed />}
					<GroupTitle />
					{isEmpty ? (
						<EmptyFeed />
					) : (
						<GroupFeed
							groupId={groupId}
							isEnd={!allGroupPostsIsEnd}
							leaderName={leaderName}
						/>
					)}
				</FeedDiv>
			)}

			{groupRequestMemberList && groupInfo && (
				<GroupMember
					requestMemberList={groupRequestMemberList}
					groupInfo={groupInfo}
					isGroupMember={isGroupMember}
					leaderId={leaderId}
				/>
			)}
		</GroupMain>
	);
};

export default GroupPage;
