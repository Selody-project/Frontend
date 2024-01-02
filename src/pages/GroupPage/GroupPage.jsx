import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

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
import { getGroupAllPosts } from "@/features/post/post-service";
import { getUserGroups } from "@/features/user/user-service";
import useObserver from "@/hooks/useObserver";

import { GroupMain, FeedDiv } from "./GroupPage.styles";

const GroupPage = () => {
	const dispatch = useDispatch();

	const { groupInfo, groupRequestMemberList } = useSelector(
		(state) => state.group,
	);
	const userGroups = useSelector((state) => state.user.userGroupList);
	const { user } = useSelector((state) => state.auth);
	const { allGroupPosts, allGroupPostslastRecordId, isEnd } = useSelector(
		(state) => state.post,
	);

	const param = useParams();
	const navigate = useNavigate();

	const postRef = useRef(null);

	const isObserving = useObserver(postRef, { threshold: 0.3 });

	const isPublicGroup = groupInfo?.information.group.isPublicGroup;
	const leaderId = groupInfo?.information.leaderInfo.userId;
	const groupId = param.id;

	const isGroupLeader = user.userId === leaderId;
	const isGroupMember = userGroups.some(
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
	}, []);

	useEffect(() => {
		const dispatchgetGroupAllPosts = async () => {
			await dispatch(
				getGroupAllPosts({ groupId, lastRecordId: allGroupPostslastRecordId }),
			);
		};
		if (isObserving && !isEnd) {
			dispatchgetGroupAllPosts();
		}
	}, [isObserving, dispatch]);

	return (
		<GroupMain>
			{groupInfo && (
				<GroupProfile
					groupInfo={groupInfo}
					isGroupMember={isGroupMember}
					isGroupLeader={isGroupLeader}
				/>
			)}

			{!isPublicGroup && !isGroupMember ? (
				<SecretFeed />
			) : (
				<>
					<FeedDiv>
						{isGroupMember && <UploadFeed />}
						<GroupTitle />
						{allGroupPosts && (
							<GroupFeed
								groupPosts={allGroupPosts}
								groupId={groupId}
								ref={postRef}
							/>
						)}
					</FeedDiv>

					{isGroupMember && groupInfo && (
						<GroupMember
							requestMemberList={groupRequestMemberList}
							groupInfo={groupInfo}
						/>
					)}
				</>
			)}
		</GroupMain>
	);
};

export default GroupPage;
