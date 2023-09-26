import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DefaultProfile from "@/assets/img/img-default-profile.png";
import { updateUserProfile } from "@/features/auth/auth-service";

import {
	ButtonWrapDiv,
	ContainerDiv,
	ImgSelectLabel,
	InfoDiv,
	LabelH4,
	ProfileImg,
	SaveButton,
} from "./UserInfo.style";
import CustomInput from "../CustomInput/CustomInput";

const UserInfo = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const { nickname, email, profileImage } = user;
	const initProfileImg = profileImage ?? DefaultProfile;

	const [newProfileImg, setNewProfileImg] = useState(initProfileImg);
	const [newNickname, setNewNickname] = useState(nickname);
	const [newEmail, setNewEmail] = useState(email);

	const isSaveEnabled =
		(newNickname !== nickname ||
			newEmail !== email ||
			newProfileImg !== initProfileImg) &&
		newNickname.trim();

	const onSave = () => {
		const formdata = new FormData();
		const data = { email: newEmail, nickname: newNickname.trim() };
		formdata.append("data", JSON.stringify(data));

		if (newProfileImg !== initProfileImg) {
			formdata.append("image", newProfileImg);
		}

		dispatch(updateUserProfile(formdata));
	};

	const handleChangeImg = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setNewProfileImg(reader.result);
		};
	};

	return (
		<ContainerDiv>
			<h3>내 프로필</h3>
			<InfoDiv>
				<LabelH4>프로필</LabelH4>
				<ProfileImg src={newProfileImg} alt="profile-img" />
				<ImgSelectLabel htmlFor="profileImg">이미지 재선택</ImgSelectLabel>
				<input type="file" id="profileImg" onChange={handleChangeImg} />
			</InfoDiv>
			<InfoDiv spaceBetween>
				<CustomInput
					label="닉네임"
					defaultValue={newNickname}
					onChange={(e) => setNewNickname(e.target.value)}
				/>
				<CustomInput
					label="아이디(이메일)"
					type="email"
					defaultValue={newEmail}
					onChange={(e) => setNewEmail(e.target.value)}
				/>
			</InfoDiv>
			<ButtonWrapDiv>
				<SaveButton disabled={!isSaveEnabled} onClick={onSave}>
					변경 정보 저장하기
				</SaveButton>
			</ButtonWrapDiv>
		</ContainerDiv>
	);
};

export default UserInfo;
