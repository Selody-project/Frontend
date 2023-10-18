import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import GroupFeed from "@/components/Group/GroupFeed/GroupFeed";
import SecretFeed from "@/components/Group/GroupFeed/SecretFeed";
import UploadFeed from "@/components/Group/GroupFeed/UploadFeed";
import GroupMember from "@/components/Group/GroupMember/GroupMember";
import GroupProfile from "@/components/Group/GroupProfile/GroupProfile";
import {
	getGroupInfoDetail,
	getGroupInfo,
	getGroupRequestMemberList,
} from "@/features/group/group-service";

import { GroupMain } from "./GroupPage.styles";

const GroupPage = () => {
	const dispatch = useDispatch();
	const isPublicGroup = useSelector((state) => state.group.isPublicGroup);
	const groupInfo = useSelector((state) => state.group.groupInfo);
	const requestMemberList = useSelector(
		(state) => state.group.groupRequestMemberList,
	);

	const param = useParams();

	useEffect(() => {
		dispatch(getGroupInfoDetail(param.id));
		dispatch(getGroupInfo(param.id));
		dispatch(getGroupRequestMemberList(param.id));
	}, []);

	// console.log(groupInfoDetail.groupInfoDetail);

	// console.log(groupInfoDetail.groupInfoDetail.information.group.isPublicGroup);

	return (
		<GroupMain>
			<GroupProfile groupInfo={groupInfo} />
			{isPublicGroup ? (
				<SecretFeed />
			) : (
				<>
					<div>
						<UploadFeed />
						<GroupFeed />
					</div>
					<GroupMember
						requestMemberList={requestMemberList}
						groupId={param.id}
					/>
				</>
			)}
		</GroupMain>
	);
};

export default GroupPage;
