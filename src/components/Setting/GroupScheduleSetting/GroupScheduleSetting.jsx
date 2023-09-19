import React from "react";

import { ContainerDiv, ItemWrapDiv } from "./GroupScheduleSetting.style";
import GroupScheduleItem from "../GroupScheduleItem/GroupScheduleItem";

const GroupScheduleSetting = () => {
	return (
		<ContainerDiv>
			<h3>공유 일정 관리</h3>
			<ItemWrapDiv>
				<GroupScheduleItem isOwner={true} />
				<GroupScheduleItem isOwner={false} />
				<GroupScheduleItem isOwner={false} />
			</ItemWrapDiv>
		</ContainerDiv>
	);
};

export default GroupScheduleSetting;
