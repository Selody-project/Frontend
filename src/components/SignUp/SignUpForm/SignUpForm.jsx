/* eslint-disable no-return-assign */
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { signup } from "@/features/auth/auth-service";
import useAxios from "@/hooks/useAxios";

import {
	DuplicateCheckButton,
	Input,
	InputContainerDiv,
	InputInnerDiv,
	SignUpButton,
	StyledSignUpForm,
} from "./SignUpForm.style";

const inputObjList = [
	{
		key: "email",
		label: "아이디 (이메일)",
		testid: "email-input",
		type: "email",
		placeholder: "이메일을 입력해주세요.",
		hasButton: true,
	},
	{
		key: "nickname",
		label: "어떤 이름을 사용하시겠어요?",
		testid: "nickname-input",
		type: "text",
		placeholder: "닉네임을 설정해주세요.",
		hasButton: true,
	},
	{
		key: "password",
		label: "비밀번호",
		testid: "password-input",
		type: "password",
		placeholder: "비밀번호를 설정해주세요.",
		hasButton: false,
	},
	{
		key: "passwordCheck",
		label: "비밀번호 확인",
		testid: "password-check-input",
		type: "password",
		placeholder: "비밀번호를 다시 입력해주세요.",
		hasButton: false,
	},
];

const SignUpForm = () => {
	const dispatch = useDispatch();

	const signUpRef = useRef([]);

	const [formValue, setFormValue] = useState({
		email: "",
		nickname: "",
		checkedEmail: "",
		checkedNickname: "",
		password: "",
		passwordCheck: "",
	});

	const {
		email,
		nickname,
		checkedEmail,
		checkedNickname,
		password,
		passwordCheck,
	} = formValue;

	const [customAxios] = useAxios();

	const handleFormValue = (event) => {
		const changed = {
			...formValue,
			[event.target.name]: event.target.value,
		};
		setFormValue(changed);
	};

	const validateEmail = () => {
		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
		return emailRegex.test(email);
	};

	const checkDuplication = async (type) => {
		const koreanType = type === "email" ? "이메일" : "닉네임";
		const [targetKey, targetValue, targetRefIdx] =
			type === "email"
				? ["checkedEmail", email, 0]
				: ["checkedNickname", nickname, 1];
		const response = await customAxios.post("/api/auth/join", {
			[type]: targetValue,
		});

		if (response.status === 200) {
			toast.success(`사용 가능한 ${koreanType}입니다.`);
			setFormValue({ ...formValue, [targetKey]: targetValue });
		} else {
			signUpRef.current[targetRefIdx].focus();
			toast.error(`이미 존재하는 ${koreanType}입니다.`);
		}
	};

	const isFormComplete = () =>
		email.trim() &&
		nickname.trim() &&
		password.trim() &&
		passwordCheck.trim() &&
		email === checkedEmail &&
		nickname === checkedNickname;

	const validatePassword = () => {
		if (password !== passwordCheck) {
			signUpRef.current[3].focus();
			toast.error("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
			return false;
		}

		if (password.length < 10) {
			signUpRef.current[2].focus();
			toast.error("비밀번호는 10자 이상이어야 합니다.");
			return false;
		}

		return true;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!validatePassword()) return;

		dispatch(signup({ email, nickname, password }));
	};

	return (
		<StyledSignUpForm onSubmit={handleSubmit}>
			{inputObjList.map(
				({ key, label, testid, type, placeholder, hasButton }, idx) => (
					<InputContainerDiv key={key}>
						<label htmlFor={key}>{label}</label>
						<InputInnerDiv>
							<Input
								ref={(el) => (signUpRef.current[idx] = el)}
								data-testid={testid}
								type={type}
								id={key}
								name={key}
								value={formValue[key]}
								onChange={handleFormValue}
								placeholder={placeholder}
							/>
							{hasButton && (
								<DuplicateCheckButton
									data-testid={`${key}-duplicate-check-button`}
									type="button"
									disabled={
										key === "email" ? !validateEmail() : nickname === ""
									}
									isActive={key === "email" ? validateEmail() : nickname !== ""}
									onClick={() => checkDuplication(key)}
								>
									중복확인
								</DuplicateCheckButton>
							)}
						</InputInnerDiv>
					</InputContainerDiv>
				),
			)}
			<SignUpButton
				type="submit"
				disabled={!isFormComplete()}
				isActive={isFormComplete()}
			>
				회원가입
			</SignUpButton>
		</StyledSignUpForm>
	);
};

export default SignUpForm;
