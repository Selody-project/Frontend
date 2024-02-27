import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import ScrollBottom from "@/components/Common/ScrollBottom";
import GroupInfo from "@/components/Group/GroupInfoList/GroupInfo";
import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";
import { getGroupList } from "@/features/group/group-service";
import {
	getUserGroups,
	getRequestUserGroups,
} from "@/features/user/user-service";

import { ContainerDiv } from "./GroupInfoList.styles";

const GroupInfoList = ({ isMyPage }) => {
	const dispatch = useDispatch();

	const { groupList, lastRecordId, isEnd } = useSelector(
		(state) => state.group,
	);
	const { userGroupList, userRequestGroupList } = useSelector(
		(state) => state.user,
	);

	const [isLoading, setIsLoading] = useState(true);

	const [searchParams] = useSearchParams();

	const allGroupFetching = async () => {
		await dispatch(getGroupList(lastRecordId));
		setIsLoading(false);
	};

	const userGroupFetching = async () => {
		await dispatch(getUserGroups());
		setIsLoading(false);
	};

	const userRequestGroupFetching = async () => {
		await dispatch(getRequestUserGroups());
		setIsLoading(false);
	};

	useEffect(() => {
		if (searchParams.get(TAB_KEY) === TAB_PARAM.GROUP_SEARCH) {
			allGroupFetching();
		}

		if (isMyPage) {
			userGroupFetching();
			userRequestGroupFetching();
		}
	}, []);

	const handleOnView = () => {
		if (!isEnd) {
			dispatch(getGroupList(lastRecordId));
		}
	};

	if (isLoading) {
		return <div>로딩중</div>;
	}

	return (
		<ContainerDiv>
			{searchParams.get(TAB_KEY) === TAB_PARAM.GROUP_SEARCH &&
				groupList.map((info) => <GroupInfo info={info} key={info.groupId} />)}

			{searchParams.get(TAB_KEY) === TAB_PARAM.MY_GROUP &&
				userGroupList.map((info) => (
					<GroupInfo info={info} key={info.groupId} />
				))}

			{searchParams.get(TAB_KEY) === TAB_PARAM.REQUEST_GROUP &&
				userRequestGroupList.map((info) => (
					<GroupInfo info={info} key={info.groupId} isRequest />
				))}

			{!isMyPage && <ScrollBottom onView={handleOnView} />}
		</ContainerDiv>
	);
};

export default GroupInfoList;
