import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

import GroupJoinModal from "@/components/Common/GroupModal/GroupJoinModal/GroupJoinModal";
import GroupFeed from "@/components/Group/GroupFeed/GroupFeed";
import SecretFeed from "@/components/Group/GroupFeed/SecretFeed";
import UploadFeed from "@/components/Group/GroupFeed/UploadFeed";
import GroupManagement from "@/components/Group/GroupManagement/GroupManagement";
import GroupMember from "@/components/Group/GroupMember/GroupMember";
import GroupProfile from "@/components/Group/GroupProfile/GroupProfile";
import GroupTitle from "@/components/Group/GroupTitle/GroupTitle";
import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";
import { UI_TYPE } from "@/constants/uiConstants";
import { getGroupInfo } from "@/features/group/group-service";
import { resetGroupStateForGroupPage } from "@/features/group/group-slice";
import { resetPostStateForGroupPage } from "@/features/post/post-slice";
import { openJoinGroupModal } from "@/features/ui/ui-slice";

import { GroupMain, FeedDiv } from "./GroupPage.styles";

const GroupPage = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { groupInfo } = useSelector((state) => state.group);

	const { openedModal } = useSelector((state) => state.ui);

	const [isLoading, setIsLoading] = useState(true);
	const [isManaging, setIsManaging] = useState(false);

	const param = useParams();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const groupId = Number(param.id);

	const isPublicGroup = groupInfo?.information.group.isPublicGroup;
	const leaderId = groupInfo?.information.leaderInfo.userId;
	const leaderName = groupInfo?.information.leaderInfo.nickname;
	const isGroupLeader = groupInfo?.accessLevel === "owner";
	const isGroupMember = groupInfo?.accessLevel !== null;

	const inviteLink = searchParams.get("invite");

	useEffect(() => {
		try {
			dispatch(getGroupInfo(groupId)).unwrap();
			setIsLoading(false);
		} catch (e) {
			navigate(`/community?${TAB_KEY}=${TAB_PARAM.MY_GROUP_FEED}`);
		}

		return () => {
			dispatch(resetPostStateForGroupPage());
			dispatch(resetGroupStateForGroupPage());
		};
	}, []);

	useEffect(() => {
		if (searchParams.get("invite")) {
			groupInfo?.information.memberInfo.some(
				(data) => data.userId !== user.userId && dispatch(openJoinGroupModal()),
			);
		}

		// 초대 링크 유효 안할 시 로직 필요

		if (searchParams.get("mode")) {
			setIsManaging(true);
		} else {
			setIsManaging(false);
		}
	}, [searchParams]);

	// groupInfo가 없을 때 undefined 값을 가지는 경우에 GroupFeed 깜박임에 영향을 주면서 두 번 렌더링됨
	if (isLoading || !groupInfo) {
		return <div>그룹 정보 불러오는 중...</div>;
	}

	return (
		<GroupMain>
			<GroupProfile
				groupInfo={groupInfo}
				isGroupLeader={isGroupLeader}
				isGroupMember={isGroupMember}
			/>

			{isManaging ? (
				<GroupManagement groupInfo={groupInfo} />
			) : (
				<>
					{/* falsy한 값인지 진짜 0인지 구분해줬어야 함 */}
					{!isPublicGroup && !isGroupMember ? (
						<SecretFeed />
					) : (
						<FeedDiv>
							{isGroupMember && <UploadFeed />}
							<GroupTitle />
							<GroupFeed groupId={groupId} leaderName={leaderName} />
						</FeedDiv>
					)}

					{isGroupMember && (
						<GroupMember groupId={groupId} leaderId={leaderId} />
					)}

					{openedModal === UI_TYPE.JOIN_GROUP && (
						<GroupJoinModal inviteLink={inviteLink} />
					)}
				</>
			)}
		</GroupMain>
	);
};

export default GroupPage;
