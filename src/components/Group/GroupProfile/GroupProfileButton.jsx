import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { AddIcon } from "@/constants/iconConstants";
import { openModal } from "@/features/ui/ui-slice";

import {
	ProfileButtonDiv,
	ProfileButton,
	ProfileWhiteButton,
} from "./GroupProfile.styles";
import GroupInviteLink from "../GroupManagement/GroupInviteLink/GroupInviteLink";

// eslint-disable-next-line consistent-return
const GroupProfileButton = ({ groupInfo, isGroupMember, isGroupLeader }) => {
	const dispatch = useDispatch();

	const locate = useLocation();
	const navigate = useNavigate();

	const [isManaging, setIsManaging] = useState(false);
	const [isGroupInviteLinkOpen, setIsGroupInviteLinkOpen] = useState(false);

	useEffect(() => {
		if (locate.pathname.includes("leader")) {
			setIsManaging(true);
		}
	}, []);

	//	그룹 관리 페이지일때
	if (isManaging) {
		return (
			<ProfileButtonDiv>
				<ProfileButton onClick={() => setIsGroupInviteLinkOpen(true)}>
					링크 생성하기
				</ProfileButton>
				<ProfileWhiteButton
					onClick={() => dispatch(openModal({ type: "DELEGATE_GROUP" }))}
				>
					그룹장 위임
				</ProfileWhiteButton>
				{isGroupInviteLinkOpen && (
					<GroupInviteLink
						groupInfo={groupInfo}
						onClose={() => setIsGroupInviteLinkOpen(false)}
					/>
				)}
			</ProfileButtonDiv>
		);
	}

	// 그룹 리더일떄
	if (!isManaging && isGroupLeader) {
		return (
			<ProfileButtonDiv>
				<ProfileButton
					onClick={() =>
						navigate(`/group/${groupInfo.information.group.groupId}/leader`)
					}
				>
					그룹 관리
				</ProfileButton>
			</ProfileButtonDiv>
		);
	}

	// 그룹 멤버일때
	if (!isGroupLeader && isGroupMember) {
		return (
			<ProfileButtonDiv>
				<ProfileWhiteButton>그룹 나가기</ProfileWhiteButton>
			</ProfileButtonDiv>
		);
	}

	// 그룹 멤버가 아닐떄
	if (!isGroupMember) {
		return (
			<ProfileButtonDiv>
				<ProfileWhiteButton>
					<>
						<AddIcon />
						그룹 참여 요청
					</>
				</ProfileWhiteButton>
			</ProfileButtonDiv>
		);
	}
};

export default GroupProfileButton;
