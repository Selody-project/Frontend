import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import GroupInfoList from "@/components/Group/GroupInfoList/GroupInfoList";
import { getGroupList } from "@/features/group/group-service";
import useObserver from "@/hooks/useObserver";

const GroupSearch = ({ onSearch, searchGroupList }) => {
	const dispatch = useDispatch();

	const { groupList, lastRecordId, isEnd } = useSelector(
		(state) => state.group,
	);

	const target = useRef(null);

	const isObserving = useObserver(target, { threshold: 0.3 });

	useEffect(() => {
		if (isObserving && !isEnd) {
			dispatch(getGroupList(lastRecordId));
		}
	}, [isObserving, dispatch]);

	return (
		<GroupInfoList
			groups={onSearch ? searchGroupList : groupList}
			scrollRef={target}
		/>
	);
};

export default GroupSearch;
