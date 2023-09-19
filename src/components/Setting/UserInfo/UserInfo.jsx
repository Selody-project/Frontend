import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUserProfile } from "@/features/auth/auth-service";

import {
	ButtonWrapDiv,
	ContainerDiv,
	ImgSelectSpan,
	InfoDiv,
	LabelH4,
	ProfileImg,
	SaveButton,
} from "./UserInfo.style";
import CustomInput from "../CustomInput/CustomInput";

const UserInfo = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const { nickname, email } = user;

	// const [newProfileImg,setNewProfileImg]=useState()
	const [newNickname, setNewNickname] = useState(nickname);
	const [newEmail, setNewEmail] = useState(email);

	const isSaveEnabled =
		(newNickname !== nickname || newEmail !== email) && newNickname.trim();

	const onSave = () => {
		dispatch(
			updateUserProfile({ nickname: newNickname.trim(), email: newEmail }),
		);
	};

	return (
		<ContainerDiv>
			<h3>내 프로필</h3>
			<InfoDiv>
				<LabelH4>프로필</LabelH4>
				<ProfileImg
					src="https://yt3.ggpht.com/ytc/AOPolaSlb8-cH_rN_lZDD1phXr7aHFpoOqMVoepaGuTm=s48-c-k-c0x00ffffff-no-rj"
					alt="profile-img"
				/>
				<ImgSelectSpan>이미지 재선택</ImgSelectSpan>
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
