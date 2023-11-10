import React from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "styled-components";

import { AddIcon } from "@/constants/iconConstants";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	MiddleInnerDiv,
	BottomDiv,
	ProfileButton,
} from "./GroupProfile.styles";

const GroupProfile = ({ groupInfo, isGroupMember, isGroupLeader }) => {
	const theme = useTheme();
	const navigate = useNavigate();

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
				{isGroupLeader ? (
					<ProfileButton
						type="button"
						bgColor={theme.colors.primary}
						textColor={theme.colors.white}
						onClick={() => navigate("/groupsetting")}
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
		</ContainerDiv>
	);
};

export default GroupProfile;
