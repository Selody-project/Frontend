import React from "react";

import { ContainerDiv, GroupDiv } from "./GroupInfo.styles";

const GroupInfo = ({ groupInfo, target }) => {
	return (
		<ContainerDiv>
			{groupInfo?.map((info) => (
				<GroupDiv key={info.groupId}>
					<img src={info.image} alt="groupImg" />
					<h3>{info.name}</h3>
					<p>{info.description}</p>
					<h4>{info.member}명의 그룹원</h4>
				</GroupDiv>
			))}
			<div ref={target} />
		</ContainerDiv>
	);
};

export default GroupInfo;
