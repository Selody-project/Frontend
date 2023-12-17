import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DefaultProfile from "@/assets/img/img-selody-logo/3x.png";
import ToggleButton from "@/components/Common/ToggleButton/ToggleButton";
import {
	changeGroupPublicOption,
	updateGroupProfile,
} from "@/features/group/group-service";
import { openModal } from "@/features/ui/ui-slice";

import GroupDeleteModal from "./GroupDeleteModal";
import GroupExitModal from "./GroupExitModal";
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
} from "./GroupManagementProfile.styles";

const GroupLeaderProfile = ({ groupInfo }) => {
	const dispatch = useDispatch();

	const isLoading = useSelector((state) => state.group.isLoading);
	const { openedModal } = useSelector((state) => state.ui);

	const groupDetailInfo = groupInfo?.information.group;
	const groupId = groupInfo?.information.group.groupId;

	const defaultProfileImg = groupDetailInfo?.image ?? DefaultProfile;
	const isPublicGroup = groupDetailInfo?.isPublicGroup;

	const [isPublic, setIsPublic] = useState(isPublicGroup);

	const [profileObj, setProfileObj] = useState("");
	const [profileImgValue, setProfileImgValue] = useState(defaultProfileImg);
	const [nameValue, setNameValue] = useState(groupDetailInfo?.name);
	const [descriptionValue, setDescriptionValue] = useState(
		groupDetailInfo?.description,
	);

	const isSaveEnabled =
		(nameValue !== groupDetailInfo?.name ||
			descriptionValue !== groupDetailInfo?.description ||
			profileImgValue !== defaultProfileImg) &&
		nameValue?.trim();

	const handleClickSave = () => {
		const formdata = new FormData();
		const data = {
			name: nameValue,
			description: descriptionValue,
		};
		formdata.append("data", JSON.stringify(data));

		if (profileImgValue !== defaultProfileImg) {
			formdata.append("image", profileObj);
		}

		dispatch(updateGroupProfile({ formdata, groupId }));
	};

	const handleClickToggle = async () => {
		const chagnePublicOption = !isPublicGroup;

		try {
			setIsPublic(!isPublic);
			await dispatch(
				changeGroupPublicOption({ groupId, chagnePublicOption }),
			).unwrap();
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
			setIsPublic(!chagnePublicOption);
		}
	};

	const handleChangeImg = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setProfileImgValue(reader.result);
			setProfileObj(file);
		};
	};

	return (
		<>
			<InfoDiv>
				<h3>프로필</h3>
				<img src={profileImgValue} alt="DefaultProfile" />
				<label htmlFor="profileImg">이미지 재선택</label>
				<ProfileInput type="file" id="profileImg" onChange={handleChangeImg} />
			</InfoDiv>
			<InfoDiv>
				<h3>이름</h3>
				<InfoInput
					type="text"
					defaultValue={nameValue}
					onChange={(e) => setNameValue(e.target.value)}
				/>
			</InfoDiv>
			<InfoDiv>
				<h3>소개글</h3>
				<textarea
					defaultValue={descriptionValue}
					onChange={(e) => setDescriptionValue(e.target.value)}
				/>
			</InfoDiv>
			<InfoDiv>
				<h3>공개여부</h3>
				<ToggleButtonDiv onClick={() => handleClickToggle()}>
					<ToggleButton isActive={isPublic} />
				</ToggleButtonDiv>
			</InfoDiv>
			<SaveButtonDiv>
				<SaveButton disabled={!isSaveEnabled} onClick={handleClickSave}>
					변경 정보 저장하기
				</SaveButton>
			</SaveButtonDiv>
			<hr />
			<BottomButtonDiv>
				<ExitButton onClick={() => dispatch(openModal({ type: "EXIT_GROUP" }))}>
					그룹 나가기
				</ExitButton>
				<DeleteButton
					onClick={() => dispatch(openModal({ type: "DELETE_GROUP" }))}
				>
					그룹 삭제
				</DeleteButton>
			</BottomButtonDiv>
			{openedModal === "EXIT_GROUP" && <GroupExitModal />}
			{openedModal === "DELETE_GROUP" && (
				<GroupDeleteModal
					groupDetailInfo={groupDetailInfo}
					isLoading={isLoading}
				/>
			)}
		</>
	);
};

export default GroupLeaderProfile;
