import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateUserPassword } from "@/features/auth/auth-service";

import {
	ButtonWrapDiv,
	ContainerDiv,
	InfoDiv,
	SaveButton,
} from "./PasswordTab.style";
import CustomInput from "../CustomInput/CustomInput";

const initFormValue = {
	currentPassword: "",
	newPassword: "",
	newPasswordCheck: "",
};

const PasswordTab = () => {
	const dispatch = useDispatch();

	const [formValue, setFormValue] = useState(initFormValue);

	const { currentPassword, newPassword, newPasswordCheck } = formValue;

	const isSaveEnabled =
		currentPassword.trim() && newPassword.trim() && newPasswordCheck.trim();

	const handleFormValue = (e) => {
		const changed = {
			...formValue,
			[e.target.name]: e.target.value,
		};
		setFormValue(changed);
	};

	const onSave = async () => {
		await dispatch(
			updateUserPassword({ currentPassword, newPassword, newPasswordCheck }),
		);
	};

	return (
		<ContainerDiv onChange={handleFormValue}>
			<h3>비밀번호 관리</h3>
			<InfoDiv>
				<CustomInput
					name="currentPassword"
					label="현재 비밀번호"
					defaultValue={currentPassword}
					type="password"
					gap={36}
				/>
			</InfoDiv>
			<InfoDiv>
				<CustomInput
					name="newPassword"
					label="새 비밀번호"
					defaultValue={newPassword}
					type="password"
					gap={48}
				/>
				<CustomInput
					name="newPasswordCheck"
					label="새 비밀번호 확인"
					defaultValue={newPasswordCheck}
					type="password"
					gap={16}
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

export default PasswordTab;
