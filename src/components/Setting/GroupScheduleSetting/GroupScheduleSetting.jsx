import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setRefetchUserGroup } from "@/features/group/group-slice";
import { useAxios } from "@/hooks/useAxios";

import {
	ContainerDiv,
	ItemWrapDiv,
	SkeletonDiv,
} from "./GroupScheduleSetting.style";
import GroupScheduleItem from "../GroupScheduleItem/GroupScheduleItem";

const GroupScheduleSetting = () => {
	const dispatch = useDispatch();
	const { refetchUserGroup } = useSelector((state) => state.group);

	const { response, error, isLoading, refetch } = useAxios({
		url: "/api/user/settings",
		method: "GET",
	});

	const groupList = response?.data;

	useEffect(() => {
		if (refetchUserGroup) {
			refetch();
			dispatch(setRefetchUserGroup(false));
		}
	}, [refetchUserGroup]);

	return (
		<ContainerDiv>
			<h3>공유 일정 관리</h3>
			<ItemWrapDiv>
				{/* eslint-disable-next-line no-nested-ternary */}
				{isLoading ? (
					Array(groupList?.length)
						.fill()
						// eslint-disable-next-line react/no-array-index-key
						.map((_, idx) => <SkeletonDiv key={idx} />)
				) : error ? (
					<div>그룹 정보를 불러오는 데 실패했습니다.</div>
				) : (
					groupList?.map((item) => (
						<GroupScheduleItem key={item.groupId} data={item} />
					))
				)}
			</ItemWrapDiv>
		</ContainerDiv>
	);
};

export default GroupScheduleSetting;
