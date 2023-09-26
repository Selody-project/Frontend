import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import GroupInfo from "@/components/Group/GroupInfo/GroupInfo";
import { getGroupList } from "@/features/group/group-service";

const GroupSearch = ({ onSearch, searchGroupList }) => {
	const dispatch = useDispatch();

	const [group, setGroup] = useState([]);

	const groupList = useSelector((state) => state.group.groupList);

	useEffect(() => {
		dispatch(getGroupList(1));
	}, []);

	useEffect(() => {
		if (onSearch) {
			setGroup(searchGroupList);
		} else {
			setGroup(groupList);
		}
	});

	return <GroupInfo groupInfo={group} />;
};

export default GroupSearch;
