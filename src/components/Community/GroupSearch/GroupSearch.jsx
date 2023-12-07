import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import { getGroupList } from "@/features/group/group-service";

import { ContainerDiv, GroupDiv } from "./GroupSearch.styles";

const GroupSearch = () => {
	const dispatch = useDispatch();

	const groupList = useSelector((state) => state.group.groupList);

	useEffect(() => {
		dispatch(getGroupList(1));
	}, []);

	return (
		<ContainerDiv>
			{groupList?.map((info) => (
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
