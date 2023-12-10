import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

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

	const groupInfo = useSelector((state) => state.group.groupInfo);

	const param = useParams();

	useEffect(() => {
		dispatch(getGroupInfo(param.id));
		dispatch(getGroupRequestMemberList(param.id));
		dispatch(getUserGroups());
	}, []);

	return (
		<GroupMain>
			<GroupProfile groupInfo={groupInfo} isGroupMember isGroupLeader />
			<GroupManagement groupInfo={groupInfo} />
		</GroupMain>
	);
};

export default GroupLeaderPage;
