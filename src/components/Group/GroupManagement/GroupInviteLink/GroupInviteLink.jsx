import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { CloseIcon } from "@/constants/iconConstants";
import { createGroupInviteLink } from "@/features/group/group-service";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	TextDiv,
} from "./GroupInviteLink.styles";

const GroupInviteLink = ({ groupId, groupName, onClose, inviteLink }) => {
	const dispatch = useDispatch();

	const handleCopyClipBoard = async (text) => {
		await navigator.clipboard.writeText(text);
	};

	useEffect(() => {
		if (!inviteLink.inviteCode) {
			dispatch(createGroupInviteLink(groupId));
		}
	}, []);

	return (
		<ContainerDiv>
			<TopDiv>
				<h3>{groupName}</h3>
				<CloseIcon onClick={() => onClose(false)} />
			</TopDiv>
			<MiddleDiv>
				<TextDiv>{inviteLink && inviteLink.inviteCode}</TextDiv>
				<button
					type="button"
					onClick={() => handleCopyClipBoard(inviteLink.inviteCode)}
				>
					복사
				</button>
			</MiddleDiv>
			<h3>* 24시간이 지나거나 새로 생성 시 기존 코드는 만료됩니다.</h3>
		</ContainerDiv>
	);
};

export default GroupInviteLink;
