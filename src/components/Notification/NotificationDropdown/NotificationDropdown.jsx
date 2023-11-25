import React, { forwardRef } from "react";

import DropdownBubble from "@/assets/icon/ic-notification-dropdown.svg";

import {
	DropdownWrapDiv,
	MenuWrapDiv,
	HeaderDiv,
	BodyDiv,
} from "./NotificationDropdown.style";
import NotificationItem from "../NotificationItem/NotificationItem";

const NotificationDropdown = forwardRef((_, dropdownRef) => {
	const mockItems = [
		{
			id: 1,
			groupName: "바쁜현대인들",
			time: "방금 전",
			text: "새로운 피드가 올라왔습니다.",
		},
		{
			id: 2,
			groupName: "바쁜현대인들",
			time: "방금 전",
			text: "새로운 피드가 올라왔습니다.",
		},
		{
			id: 3,
			groupName: "바쁜현대인들",
			time: "방금 전",
			text: "새로운 피드가 올라왔습니다.",
		},
		{
			id: 4,
			groupName: "바쁜현대인들",
			time: "방금 전",
			text: "새로운 피드가 올라왔습니다.",
		},
		{
			id: 5,
			groupName: "바쁜현대인들",
			time: "방금 전",
			text: "새로운 피드가 올라왔습니다.",
		},
		{
			id: 6,
			groupName: "바쁜현대인들",
			time: "방금 전",
			text: "새로운 피드가 올라왔습니다.",
		},
	];

	return (
		<MenuWrapDiv ref={dropdownRef}>
			<DropdownBubble />
			<DropdownWrapDiv>
				<HeaderDiv>
					<h3>알림</h3>
				</HeaderDiv>
				<BodyDiv>
					{mockItems.map(({ id, groupName, time, text }) => (
						<NotificationItem
							key={id}
							groupName={groupName}
							time={time}
							text={text}
						/>
					))}
				</BodyDiv>
			</DropdownWrapDiv>
		</MenuWrapDiv>
	);
});

export default NotificationDropdown;
