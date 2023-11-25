import React from "react";

import { NotificationDropdownBubbleIcon } from "@/constants/iconConstants";

import {
	DropdownWrapDiv,
	MenuWrapDiv,
	HeaderDiv,
	BodyDiv,
} from "./NotificationDropdown.style";
import NotificationItem from "../NotificationItem/NotificationItem";

const NotificationDropdown = () => {
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
		<MenuWrapDiv>
			<NotificationDropdownBubbleIcon />
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
};

export default NotificationDropdown;
