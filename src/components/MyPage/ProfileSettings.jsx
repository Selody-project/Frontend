import React, { useState } from "react";
import { useSelector } from "react-redux";
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

const ProfileSettings = () => {
	const { nickname, email } = useSelector((state) => state.user.user);
	const [password, setPassword] = useState("");

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handlePasswordSubmit = (e) => {
		e.preventDefault();
		// 비밀번호 변경 로직 작성
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// 저장하기 로직 작성
	};

	return (
		<UserInfoContainer>
			<hr />
			<UserInfoSection>
				<UserInfoItem>
					<div>
						<Label htmlFor="nickname">닉네임</Label>
						<InputField id="nickname" type="text" defaultValue={nickname} />
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
							disabled={!password}
						>
							변경
						</PasswordChangeButton>
					</PasswordContainer>
				</UserInfoItem>
				<hr />
			</UserInfoSection>
			<SaveButton onClick={handleSubmit} disabled={!password}>
				저장하기
			</SaveButton>
		</UserInfoContainer>
	);
};

export default ProfileSettings;
