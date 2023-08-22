import React from "react";

import {
	ContainerDiv,
	HeaderDiv,
	NameSpan,
	TextP,
	TimeSpan,
} from "./NotificationItem.style";

const NotificationItem = ({ groupName, time, text }) => {
	return (
		<ContainerDiv>
			<HeaderDiv>
				<NameSpan>{groupName}</NameSpan>
				<TimeSpan>{time}</TimeSpan>
			</HeaderDiv>
			<TextP>{text}</TextP>
		</ContainerDiv>
	);
};

export default NotificationItem;
