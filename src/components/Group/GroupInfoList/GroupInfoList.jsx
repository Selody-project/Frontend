import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ScrollBottom from "@/components/Common/ScrollBottom";
import GroupInfo from "@/components/Group/GroupInfoList/GroupInfo";
import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";
import { getGroupList, searchGroup } from "@/features/group/group-service";
import {
	getUserGroups,
	getRequestUserGroups,
} from "@/features/user/user-service";

import { ContainerDiv } from "./GroupInfoList.styles";

const GroupInfoList = ({
	onSearch,
	clearOnSearch,
	clearSearchKeyword,
	searchKeyword,
	isMyPage,
	searchParams,
}) => {
	const dispatch = useDispatch();

	const {
		groupList,
		lastRecordId,
		isEnd,
		searchGroupList,
		searchLastRecordId,
		isSearchEnd,
	} = useSelector((state) => state.group);
	const { userGroupList, userRequestGroupList } = useSelector(
		(state) => state.user,
	);

	const [isLoading, setIsLoading] = useState(true);

	const allGroupFetching = async () => {
		await dispatch(getGroupList(lastRecordId));
		setIsLoading(false);
	};

	const searchGroupFetching = async () => {
		await dispatch(
			searchGroup({
				keyword: searchKeyword,
				recordId: searchLastRecordId,
			}),
		);
		setIsLoading(false);
	};

	const userGroupFetching = async () => {
		await dispatch(getUserGroups());
		await dispatch(getRequestUserGroups());
		setIsLoading(false);
	};

	useEffect(() => {
		if (searchParams.get(TAB_KEY) === TAB_PARAM.GROUP_SEARCH) {
			if (onSearch) {
				searchGroupFetching();
			} else {
				allGroupFetching();
			}
		}

		if (isMyPage) {
			userGroupFetching();
		}
	}, []);

	const handleOnView = () => {
		if (onSearch) {
			if (!isSearchEnd) {
				dispatch(
					searchGroup({
						keyword: searchKeyword,
						recordId: searchLastRecordId,
					}),
				);
			}
		} else if (!isEnd) {
			dispatch(getGroupList(lastRecordId));
		}
	};

	useEffect(() => {
		return () => {
			if (onSearch) {
				clearOnSearch();
				clearSearchKeyword();
			}
		};
	}, []);

	if (isLoading) {
		return <div>로딩중</div>;
	}

	return (
		<ContainerDiv>
			{searchParams.get(TAB_KEY) === TAB_PARAM.GROUP_SEARCH &&
				(onSearch
					? searchGroupList.map((info) => (
							<GroupInfo info={info} key={info.groupId} />
					  ))
					: groupList.map((info) => (
							<GroupInfo info={info} key={info.groupId} />
					  )))}

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
