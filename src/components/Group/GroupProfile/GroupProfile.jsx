import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { useTheme } from "styled-components";

import { AddIcon } from "@/constants/iconConstants";
import { openModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	MiddleInnerDiv,
	BottomDiv,
	ProfileButton,
} from "./GroupProfile.styles";
import CreateGroupLink from "../GroupLeader/CreateGroupLink/CreateGroupLink";
import GroupDelegateModal from "../GroupLeader/GroupLeaderProfile/GroupDelegateModal";

const GroupProfile = ({ groupInfo, isGroupMember, isGroupLeader }) => {
	const dispatch = useDispatch();

	const { openedModal } = useSelector((state) => state.ui);
	const { isLoading } = useSelector((state) => state.group);

	const groupDetailInfo = groupInfo?.information.group;

	const [isCreateLinkClick, setIsCreateLinkClick] = useState(false);

	const theme = useTheme();
	const navigate = useNavigate();
	const locate = useLocation();

	const [management, setManagement] = useState(false);

	useEffect(() => {
		if (locate.pathname.includes("leader")) {
			setManagement(true);
		} else {
			setManagement(false);
		}
	});

	return (
		<ContainerDiv>
			<TopDiv>
				<img src={groupInfo?.information.group.image} alt="groupImg" />
				<h3>{groupInfo?.information.group.name}</h3>
				<p>{groupInfo?.information.group.description}</p>
			</TopDiv>
			<MiddleDiv>
				<MiddleInnerDiv>
					<h3>{groupInfo?.information.group.member.toLocaleString()}</h3>
					<h4>그룹원</h4>
				</MiddleInnerDiv>
				<MiddleInnerDiv>
					<h3>{groupInfo?.information.group.feedCount.toLocaleString()}</h3>
					<h4>작성된 피드</h4>
				</MiddleInnerDiv>
			</MiddleDiv>
			<BottomDiv>
				{/* eslint-disable-next-line no-nested-ternary */}
				{management ? (
					<>
						<ProfileButton
							type="button"
							bgColor={theme.colors.primary}
							textColor={theme.colors.white}
							onClick={() => setIsCreateLinkClick(true)}
						>
							링크 생성하기
						</ProfileButton>
						{isCreateLinkClick && (
							<CreateGroupLink
								groupId={groupInfo?.information?.group.groupId}
								setIsCreateLinkClick={setIsCreateLinkClick}
							/>
						)}
						<ProfileButton
							type="button"
							bgColor={theme.colors.white}
							textColor={theme.colors.primary}
							onClick={() => dispatch(openModal({ type: "DELEGATE_GROUP" }))}
						>
							그룹장 위임
						</ProfileButton>
					</>
				) : // eslint-disable-next-line no-nested-ternary
				isGroupLeader ? (
					<ProfileButton
						type="button"
						bgColor={theme.colors.primary}
						textColor={theme.colors.white}
						onClick={() =>
							navigate(
								`/group/${groupInfo?.information?.group?.groupId}/leader`,
							)
						}
					>
						그룹 관리
					</ProfileButton>
				) : isGroupMember ? (
					<ProfileButton
						type="button"
						bgColor={theme.colors.white}
						textColor={theme.colors.primary}
					>
						그룹 나가기
					</ProfileButton>
				) : (
					<ProfileButton
						type="button"
						bgColor={theme.colors.white}
						textColor={theme.colors.primary}
					>
						<>
							<AddIcon />
							그룹 참여 요청
						</>
					</ProfileButton>
				)}
			</BottomDiv>
			{openedModal === "DELEGATE_GROUP" && (
				<GroupDelegateModal
					groupDetailInfo={groupDetailInfo}
					isLoading={isLoading}
					groupMember={groupInfo.information.memberInfo}
				/>
			)}
		</ContainerDiv>
	);
};

export default GroupProfile;
