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

const GroupProfileButton = ({ groupInfo, isGroupMember, isGroupLeader }) => {
	const dispatch = useDispatch();

	const locate = useLocation();
	const navigate = useNavigate();

	const [isManaging, setIsManaging] = useState(false);
	const [isGroupInviteLinkOpen, setIsGroupInviteLinkOpen] = useState(false);

	const profileButtonRender = [];

	//	그룹 관리 페이지일때
	if (isManaging) {
		profileButtonRender.push(
			<>
				<ProfileButton onClick={() => setIsGroupInviteLinkOpen(true)}>
					링크 생성하기
				</ProfileButton>
				<ProfileWhiteButton
					onClick={() => dispatch(openModal({ type: "DELEGATE_GROUP" }))}
				>
					그룹장 위임
				</ProfileWhiteButton>
			</>,
		);
	}

	// 그룹 리더일떄
	if (isGroupLeader) {
		profileButtonRender.push(
			<ProfileButton
				onClick={() =>
					navigate(`/group/${groupInfo?.information?.group?.groupId}/leader`)
				}
			>
				그룹 관리
			</ProfileButton>,
		);
	}

	// 그룹 멤버일때
	if (!isGroupLeader && isGroupMember) {
		profileButtonRender.push(
			<ProfileWhiteButton>그룹 나가기</ProfileWhiteButton>,
		);
	}

	// 그룹 멤버가 아닐떄
	if (!isGroupMember) {
		profileButtonRender.push(
			<ProfileWhiteButton>
				<>
					<AddIcon />
					그룹 참여 요청
				</>
			</ProfileWhiteButton>,
		);
	}

	useEffect(() => {
		if (locate.pathname.includes("leader")) {
			setIsManaging(true);
		}
	}, []);

	return (
		<ProfileButtonDiv>
			{profileButtonRender}
			{isGroupInviteLinkOpen && (
				<GroupInviteLink
					groupId={groupInfo?.information?.group.groupId}
					onClose={() => setIsGroupInviteLinkOpen(false)}
				/>
			)}
		</ProfileButtonDiv>
	);
};

export default GroupProfileButton;
