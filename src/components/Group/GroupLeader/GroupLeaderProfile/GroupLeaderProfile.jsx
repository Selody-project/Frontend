import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DefaultProfile from "@/assets/img/img-selody-logo/3x.png";
import ToggleButton from "@/components/Common/ToggleButton/ToggleButton";
import {
	getGroupInfo,
	changeGroupPublic,
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
} from "./GroupLeaderProfile.styles";

const GroupLeaderProfile = ({ groupId }) => {
	const dispatch = useDispatch();

	const { groupInfo, isLoading } = useSelector((state) => state.group);
	const { openedModal } = useSelector((state) => state.ui);

	const groupDetailInfo = groupInfo?.information.group;

	const defaultProfileImg = groupDetailInfo?.image ?? DefaultProfile;
	const isPublicGroup = groupDetailInfo?.isPublicGroup;

	const [isPublicClick, setIsPublicClick] = useState(isPublicGroup);

	const [profileObj, setProfileObj] = useState();
	const [newProfileImg, setNewProfileImg] = useState(defaultProfileImg);
	const [newName, setNewName] = useState(groupDetailInfo?.name);
	const [newDescription, setNewDescription] = useState(
		groupDetailInfo?.description,
	);

	const isSaveEnabled =
		(newName !== groupDetailInfo?.name ||
			newDescription !== groupDetailInfo?.description ||
			newProfileImg !== defaultProfileImg) &&
		newName.trim();

	const handleClickSave = () => {
		const formdata = new FormData();
		const data = {
			name: newName,
			description: newDescription,
		};
		formdata.append("data", JSON.stringify(data));

		if (newProfileImg !== defaultProfileImg) {
			formdata.append("image", profileObj);
		}

		dispatch(updateGroupProfile({ formdata, groupId }));
	};

	const handleClickToggle = async () => {
		const status = !isPublicGroup;

		try {
			await dispatch(changeGroupPublic({ groupId, status })).unwrap();
			setIsPublicClick(!isPublicClick);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};

	const handleChangeImg = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setNewProfileImg(reader.result);
			setProfileObj(file);
		};
	};

	useEffect(() => {
		dispatch(getGroupInfo(groupId));
	}, []);

	return (
		<>
			<InfoDiv>
				<h3>프로필</h3>
				<img src={newProfileImg} alt="DefaultProfile" />
				<label htmlFor="profileImg">이미지 재선택</label>
				<ProfileInput type="file" id="profileImg" onChange={handleChangeImg} />
			</InfoDiv>
			<InfoDiv>
				<h3>이름</h3>
				<InfoInput
					type="text"
					defaultValue={newName}
					onChange={(e) => setNewName(e.target.value)}
				/>
			</InfoDiv>
			<InfoDiv>
				<h3>소개글</h3>
				<textarea
					defaultValue={newDescription}
					onChange={(e) => setNewDescription(e.target.value)}
				/>
			</InfoDiv>
			<InfoDiv>
				<h3>공개여부</h3>
				<ToggleButtonDiv onClick={() => handleClickToggle()}>
					<ToggleButton isActive={isPublicClick} />
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
