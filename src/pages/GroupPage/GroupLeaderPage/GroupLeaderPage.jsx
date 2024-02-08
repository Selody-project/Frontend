import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import GroupManagement from "@/components/Group/GroupManagement/GroupManagement";
import GroupProfile from "@/components/Group/GroupProfile/GroupProfile";
import {
	getGroupInfo,
	getGroupRequestMemberList,
} from "@/features/group/group-service";
import { getUserGroups } from "@/features/user/user-service";

import { GroupMain } from "./GroupLeaderPage.styles";

const GroupLeaderPage = () => {
	const dispatch = useDispatch();

	const { groupInfo } = useSelector((state) => state.group);

	const { user } = useSelector((state) => state.auth);

	const navigate = useNavigate();

	const param = useParams();

	useEffect(() => {
		if (!(user.userId === groupInfo?.information.leaderInfo.userId)) {
			navigate(`/group/${param.id}`);
		}

		dispatch(getGroupInfo(param.id));
		dispatch(getGroupRequestMemberList(param.id));
		dispatch(getUserGroups());
	}, []);

	return (
		<GroupMain>
			{groupInfo && (
				<>
					<GroupProfile groupInfo={groupInfo} isGroupMember isGroupLeader />
					<GroupManagement groupInfo={groupInfo} />
				</>
			)}
		</GroupMain>
	);
};

export default GroupLeaderPage;
