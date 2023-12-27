import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import GroupInfoList from "@/components/Group/GroupInfoList/GroupInfoList";
import { getGroupList } from "@/features/group/group-service";
import useObserver from "@/hooks/useObserver";

const GroupSearch = ({ onSearch, searchGroupList }) => {
	const dispatch = useDispatch();

	const { groupList, lastRecordId, isEnd } = useSelector(
		(state) => state.group,
	);

	const [groups, setGroups] = useState([]);

	const target = useRef(null);

	const isObserving = useObserver(target, { threshold: 0.3 });

	useEffect(() => {
		const dispatchGetGroupList = async () => {
			await dispatch(getGroupList(lastRecordId));
		};

		if (isObserving && !isEnd) {
			dispatchGetGroupList();
		}
	}, [isObserving, dispatch]);

	useEffect(() => {
		if (onSearch) {
			setGroups(searchGroupList);
		} else {
			setGroups(groupList);
		}
	});

	return <GroupInfoList groups={groups} scrollRef={target} />;
};

export default GroupSearch;
