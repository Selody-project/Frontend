import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EmptyLayout from "@/components/Common/EmptyLayout/EmptyLayout";
import ScrollBottom from "@/components/Common/ScrollBottom";
import GroupInfo from "@/components/Group/GroupInfoList/GroupInfo";
import { EMPTY_TYPE } from "@/constants/emptyConstants";
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

	if (searchParams.get(TAB_KEY) === TAB_PARAM.GROUP_SEARCH) {
		if (onSearch) {
			if (searchGroupList.length === 0) {
				return <EmptyLayout emptyType={EMPTY_TYPE.SEARCH_RESULT} />;
			}
			return (
				<ContainerDiv>
					{searchGroupList.map((info) => (
						<GroupInfo info={info} key={info.groupId} />
					))}
					<ScrollBottom onView={handleOnView} />
				</ContainerDiv>
			);
		}

		return (
			<ContainerDiv>
				{groupList.map((info) => (
					<GroupInfo info={info} key={info.groupId} />
				))}
				<ScrollBottom onView={handleOnView} />
			</ContainerDiv>
		);
	}

	if (searchParams.get(TAB_KEY) === TAB_PARAM.MY_GROUP) {
		if (userGroupList.length === 0) {
			return <EmptyLayout emptyType={EMPTY_TYPE.MY_GROUP} />;
		}
		return (
			<ContainerDiv>
				{userGroupList.map((info) => (
					<GroupInfo info={info} key={info.groupId} />
				))}
			</ContainerDiv>
		);
	}

	if (searchParams.get(TAB_KEY) === TAB_PARAM.REQUEST_GROUP) {
		if (userRequestGroupList.length === 0) {
			return <EmptyLayout emptyType={EMPTY_TYPE.REQUEST_GROUP} />;
		}
		return (
			<ContainerDiv>
				{userRequestGroupList.map((info) => (
					<GroupInfo info={info} key={info.groupId} />
				))}
			</ContainerDiv>
		);
	}

	return <div>그룹이 없습니다.</div>;
};

export default GroupInfoList;
