import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import { getGroupList } from "@/features/group/group-service";

import { ContainerDiv, GroupDiv } from "./GroupSearch.styles";

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

	return (
		<ContainerDiv>
			{group?.map((info) => (
				<GroupDiv key={info.groupId}>
					<img src={SampleImg} alt="sampleimg" />
					<h3>{info.name}</h3>
					<p>{info.description}</p>
					<h4>{info.member}명의 그룹원</h4>
				</GroupDiv>
			))}
		</ContainerDiv>
	);
};

export default GroupSearch;
