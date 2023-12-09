import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import GroupInfo from "@/components/Group/GroupInfo/GroupInfo";
import { getGroupList } from "@/features/group/group-service";
import useObserver from "@/hooks/useObserver";

const GroupSearch = ({ onSearch, searchGroupList }) => {
	const dispatch = useDispatch();
	const groupList = useSelector((state) => state.group.groupList);
	const lastRecordId = useSelector((state) => state.group.lastRecordId);
	const isEnd = useSelector((state) => state.group.isEnd);

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

	return <GroupInfo groupInfo={groups} target={target} />;
};

export default GroupSearch;
