import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import GroupLeader from "@/components/Group/GroupLeader/GroupLeader";
import GroupProfile from "@/components/Group/GroupProfile/GroupProfile";
import {
	getGroupInfo,
	getGroupRequestMemberList,
} from "@/features/group/group-service";
import { inqueryUserGroup } from "@/features/user/user-service";

import { GroupMain } from "./GroupLeaderPage.styles";

const GroupLeaderPage = () => {
	const dispatch = useDispatch();

	const groupInfo = useSelector((state) => state.group.groupInfo);

	const param = useParams();

	useEffect(() => {
		dispatch(getGroupInfo(param.id));
		dispatch(getGroupRequestMemberList(param.id));
		dispatch(inqueryUserGroup());
	}, []);

	return (
		<GroupMain>
			<GroupProfile groupInfo={groupInfo} isGroupMember isGroupLeader />
			<GroupLeader />
		</GroupMain>
	);
};

export default GroupLeaderPage;
