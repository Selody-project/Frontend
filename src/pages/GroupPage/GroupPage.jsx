import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

import EmptyFeed from "@/components/Common/Feed/EmptyFeed/EmptyFeed";
import GroupJoinModal from "@/components/Common/GroupModal/GroupJoinModal/GroupJoinModal";
import GroupFeed from "@/components/Group/GroupFeed/GroupFeed";
import SecretFeed from "@/components/Group/GroupFeed/SecretFeed";
import UploadFeed from "@/components/Group/GroupFeed/UploadFeed";
import GroupMember from "@/components/Group/GroupMember/GroupMember";
import GroupProfile from "@/components/Group/GroupProfile/GroupProfile";
import GroupTitle from "@/components/Group/GroupTitle/GroupTitle";
import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";
import {
	getGroupInfo,
	getGroupRequestMemberList,
} from "@/features/group/group-service";
import { resetAllGroupPosts } from "@/features/post/post-slice";
import { openJoinGroupModal } from "@/features/ui/ui-slice";

import { GroupMain, FeedDiv } from "./GroupPage.styles";

const GroupPage = () => {
	const dispatch = useDispatch();

	const { groupInfo, groupRequestMemberList } = useSelector(
		(state) => state.group,
	);
	const { allGroupPostsIsEnd, isEmpty } = useSelector((state) => state.post);
	const { openedModal } = useSelector((state) => state.ui);

	const param = useParams();
	const navigate = useNavigate();

	// eslint-disable-next-line no-unused-vars
	const [searchParams, setSearchParams] = useSearchParams();

	const groupId = param.id;

	const isPublicGroup = groupInfo?.information.group.isPublicGroup;
	const leaderId = groupInfo?.information.leaderInfo.userId;
	const leaderName = groupInfo?.information.leaderInfo.nickname;

	const isGroupLeader = groupInfo?.accessLevel === "owner";
	const isGroupMember = groupInfo?.accessLevel !== null;

	const inviteLink = searchParams.get("invite");

	useEffect(() => {
		try {
			dispatch(getGroupInfo(groupId)).unwrap();
			dispatch(getGroupRequestMemberList(groupId));
		} catch (e) {
			navigate(`/community?${TAB_KEY}=${TAB_PARAM.MY_GROUP_FEED}`);
		}

		if (searchParams.get("invite")) {
			dispatch(openJoinGroupModal());
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

			{openedModal === "JOIN_GROUP" && (
				<GroupJoinModal inviteLink={inviteLink} />
			)}
		</GroupMain>
	);
};

export default GroupPage;
