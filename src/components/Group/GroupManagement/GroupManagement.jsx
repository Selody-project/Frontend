import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import DefaultProfile from "@/assets/img/img-selody-logo/3x.png";
import ToggleButton from "@/components/Common/ToggleButton/ToggleButton";
import {
	getGroupInfo,
	changeGroupPublic,
} from "@/features/group/group-service";

import {
	ContainerDiv,
	InnerDiv,
	TitleButton,
	InfoDiv,
	ProfileInput,
	InfoInput,
	PublicDiv,
	ButtonDiv,
} from "./GroupManagement.styles";

const GroupManagement = ({ groupDetailInfo }) => {
	const dispatch = useDispatch();

	const defaultProfileImg = groupDetailInfo?.image ?? DefaultProfile;

	const [menu, setMenu] = useState("그룹 프로필");

	// const groupId = groupDetailInfo?.groupId;
	const isPublicGroup = groupDetailInfo?.isPublicGroup;

	const handleClickToggle = () => {
		const status = false;

		const groupId = 85;

		try {
			dispatch(changeGroupPublic({ groupId, status }));
			// dispatch(setRefetchUserGroup(true));
			// setIsPublicGroup((prev) => !prev);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};

	useEffect(() => {
		dispatch(getGroupInfo(85));
	}, []);

	return (
		<ContainerDiv>
			<InnerDiv>
				<ul>
					<li>
						<TitleButton
							onClick={() => setMenu("그룹 프로필")}
							disabled={menu === "그룹 프로필"}
						>
							그룹 프로필
						</TitleButton>
					</li>
					<li>
						<TitleButton
							onClick={() => setMenu("그룹원 관리")}
							disabled={menu === "그룹원 관리"}
						>
							그룹원 관리
						</TitleButton>
					</li>
				</ul>
				<InfoDiv>
					<h3>프로필</h3>
					<img src={defaultProfileImg} alt="DefaultProfile" />
					<label htmlFor="profileImg">이미지 재선택</label>
					<ProfileInput type="file" id="profileImg" />
				</InfoDiv>
				<InfoDiv>
					<h3>이름</h3>
					<InfoInput type="text" defaultValue={groupDetailInfo?.name} />
				</InfoDiv>
				<InfoDiv>
					<h3>소개글</h3>
					<textarea defaultValue={groupDetailInfo?.description} />
				</InfoDiv>
				<PublicDiv>
					<h3>공개여부</h3>
					<ButtonDiv onClick={() => handleClickToggle()}>
						<ToggleButton isActive={isPublicGroup} />
					</ButtonDiv>
				</PublicDiv>
			</InnerDiv>
		</ContainerDiv>
	);
};

export default GroupManagement;
