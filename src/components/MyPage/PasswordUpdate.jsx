import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	UserInfoContainer,
	PwInfoItem,
	PasswordContainer,
	Label,
	InputField,
	SaveButton,
} from "../../pages/MyPage.styles";
import { updateUserPassword } from "@/features/user/user-service";

const PasswordUpdate = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");

	const handleCurrentPasswordChange = (e) => {
		setCurrentPassword(e.target.value);
	};

	const handleNewPasswordChange = (e) => {
		setNewPassword(e.target.value);
	};

	const handleConfirmNewPasswordChange = (e) => {
		setConfirmNewPassword(e.target.value);
	};

	const handlePasswordSubmit = (e) => {
		e.preventDefault();
		if (newPassword !== confirmNewPassword) {
			console.log("비밀번호가 일치하지 않습니다.");
			return;
		}

		dispatch(updateUserPassword({ password: newPassword }));
		navigate("/mypage");
	};

	return (
		<UserInfoContainer>
			<PwInfoItem>
				<PasswordContainer>
					<Label htmlFor="currentPassword">현재 비밀번호</Label>
					<InputField
						id="currentPassword"
						type="password"
						onChange={handleCurrentPasswordChange}
					/>
				</PasswordContainer>
				<PasswordContainer>
					<Label htmlFor="newPassword">새 비밀번호</Label>
					<InputField
						id="newPassword"
						type="password"
						onChange={handleNewPasswordChange}
					/>
				</PasswordContainer>
				<PasswordContainer>
					<Label htmlFor="confirmNewPassword">새 비밀번호 확인</Label>
					<InputField
						id="confirmNewPassword"
						type="password"
						onChange={handleConfirmNewPasswordChange}
					/>
				</PasswordContainer>
				<SaveButton
					onClick={handlePasswordSubmit}
					disabled={
						!(
							currentPassword &&
							newPassword &&
							confirmNewPassword &&
							newPassword === confirmNewPassword
						)
					}
				>
					저장하기
				</SaveButton>
			</PwInfoItem>
		</UserInfoContainer>
	);
};

export default PasswordUpdate;
