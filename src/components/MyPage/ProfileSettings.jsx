import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	UserInfoContainer,
	UserInfoSection,
	UserInfoItem,
	Label,
	InputField,
	PasswordContainer,
	PasswordChangeButton,
	SaveButton,
} from "../../pages/MyPage.styles";
import { updateUserProfile } from "../../features/user/user-service";

const ProfileSettings = () => {
	const dispatch = useDispatch();
	const { nickname, email } = useSelector((state) => state.user.myPageInfo);
	const [newPassword, setNewPassword] = useState("");
	const [newNickname, setNewNickname] = useState(nickname); // for storing new nickname value

	const handleNicknameChange = (e) => {
		setNewNickname(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setNewPassword(e.target.value);
	};

	const handlePasswordSubmit = (e) => {
		e.preventDefault();
		// 비밀번호 변경 로직 작성
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateUserProfile({ name: newNickname, passwd: newPassword }));
	};

	return (
		<UserInfoContainer>
			<hr />
			<UserInfoSection>
				<UserInfoItem>
					<div>
						<Label htmlFor="nickname">닉네임</Label>
						<InputField
							id="nickname"
							type="text"
							value={newNickname}
							onChange={handleNicknameChange}
						/>
					</div>
					<div>
						<Label htmlFor="email">이메일</Label>
						<InputField id="email" type="email" defaultValue={email} disabled />
					</div>
				</UserInfoItem>
				<hr />
				<UserInfoItem>
					<PasswordContainer>
						<Label htmlFor="password">비밀번호</Label>
						<InputField
							id="password"
							type="password"
							onChange={handlePasswordChange}
						/>
						<PasswordChangeButton
							onClick={handlePasswordSubmit}
							disabled={!newPassword}
						>
							변경
						</PasswordChangeButton>
					</PasswordContainer>
				</UserInfoItem>
				<hr />
			</UserInfoSection>
			<SaveButton
				onClick={handleSubmit}
				disabled={newNickname === nickname && !newPassword}
			>
				저장하기
			</SaveButton>
		</UserInfoContainer>
	);
};

export default ProfileSettings;
