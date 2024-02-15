import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { CloseIcon } from "@/constants/iconConstants";
import { getGroupInviteLink } from "@/utils/groupInviteUtils";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	TextDiv,
} from "./GroupInviteLink.styles";

const GroupInviteLink = ({ groupId, groupName, onClose }) => {
	const [inviteLink, setInviteLink] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const handleCopyClipBoard = async () => {
		await navigator.clipboard.writeText(
			`${window.location.host}/group/${groupId}?invite=${inviteLink.inviteCode}`,
		);
		toast.success("초대 링크가 복사되었습니다.");
	};

	useEffect(() => {
		getGroupInviteLink((inviteCode) => setInviteLink(inviteCode), groupId);
		setIsLoading(false);
	}, []);

	return (
		<ContainerDiv>
			<TopDiv>
				<h3>{groupName}</h3>
				<CloseIcon onClick={onClose} />
			</TopDiv>
			<MiddleDiv>
				<TextDiv>
					{inviteLink &&
						`${window.location.host}/group/${groupId}?invite=${inviteLink.inviteCode}`}
				</TextDiv>
				<button
					type="button"
					onClick={handleCopyClipBoard}
					disabled={isLoading || inviteLink === null}
				>
					복사
				</button>
			</MiddleDiv>

			<h3>* 24시간이 지나거나 새로 생성 시 기존 코드는 만료됩니다.</h3>
		</ContainerDiv>
	);
};

export default GroupInviteLink;
