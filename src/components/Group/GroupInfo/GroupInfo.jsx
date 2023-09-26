import React from "react";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import { ContainerDiv, GroupDiv } from "./GroupInfo.styles";

const GroupInfo = ({ groupInfo }) => {
	return (
		<ContainerDiv>
			{groupInfo?.map((info) => (
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

export default GroupInfo;
