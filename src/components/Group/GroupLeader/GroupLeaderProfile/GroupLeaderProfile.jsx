import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DefaultProfile from "@/assets/img/img-selody-logo/3x.png";
import ToggleButton from "@/components/Common/ToggleButton/ToggleButton";
import {
	getGroupInfo,
	changeGroupPublic,
} from "@/features/group/group-service";

import {
	InfoDiv,
	ProfileInput,
	InfoInput,
	ToggleButtonDiv,
	SaveButtonDiv,
	SaveButton,
	BottomButtonDiv,
	ExitButton,
	DeleteButton,
} from "./GroupLeaderProfile.styles";

const GroupLeaderProfile = () => {
	const dispatch = useDispatch();

	const groupDetailInfo = useSelector((state) => state.group.groupDetailInfo);

	const defaultProfileImg = groupDetailInfo?.image ?? DefaultProfile;
	const isPublicGroup = groupDetailInfo?.isPublicGroup;

	const [isPublicClick, setIsPublicClick] = useState(isPublicGroup);

	const handleClickToggle = async () => {
		const groupId = groupDetailInfo?.groupId;
		const status = !isPublicGroup;

		try {
			await dispatch(changeGroupPublic({ groupId, status })).unwrap();
			setIsPublicClick(!isPublicClick);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};

	useEffect(() => {
		dispatch(getGroupInfo(85));
	}, []);

	return (
		<>
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
			<InfoDiv>
				<h3>공개여부</h3>
				<ToggleButtonDiv onClick={() => handleClickToggle()}>
					<ToggleButton isActive={isPublicClick} />
				</ToggleButtonDiv>
			</InfoDiv>
			<SaveButtonDiv>
				<SaveButton>변경 정보 저장하기</SaveButton>
			</SaveButtonDiv>
			<hr />
			<BottomButtonDiv>
				<ExitButton>그룹 나가기</ExitButton>
				<DeleteButton>그룹 삭제</DeleteButton>
			</BottomButtonDiv>
		</>
	);
};

export default GroupLeaderProfile;
