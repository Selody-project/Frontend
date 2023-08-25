import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { signup, validateDuplication } from "@/features/auth/auth-service";

import {
	DuplicateCheckButton,
	Input,
	InputContainerDiv,
	InputInnerDiv,
	SignUpButton,
	StyledSignUpForm,
} from "./SignUpForm.style";

const SignUpForm = () => {
	const dispatchFn = useDispatch();

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

	const handleFormValue = (event) => {
		const changed = {
			...formValue,
			[event.target.name]: event.target.value,
		};
		setFormValue(changed);
	};

	const checkDuplication = async (type) => {
		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (type === "email" && !emailRegex.test(email)) {
			toast.error("올바른 이메일 형식이 아닙니다. 다시 입력해주세요.");
		}

		const koreanType = type === "email" ? "이메일" : "닉네임";
		const [targetKey, targetValue] =
			type === "email"
				? ["checkedEmail", email]
				: ["checkedNickname", nickname];
		const response = await dispatchFn(
			validateDuplication({ type, targetValue }),
		);

		if (response.payload === 200) {
			toast.success(`사용 가능한 ${koreanType}입니다.`);
			setFormValue({ ...formValue, [targetKey]: targetValue });
		} else {
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

	const validate = () => {
		if (password !== passwordCheck) {
			toast.error("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
			return false;
		}

		if (password.length < 10) {
			toast.error("비밀번호는 10자 이상이어야 합니다.");
			return false;
		}

		return true;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!validate()) return;

		dispatchFn(signup({ email, nickname, password }));
	};

	return (
		<StyledSignUpForm onSubmit={handleSubmit}>
			<InputContainerDiv>
				<label htmlFor="email">아이디 (이메일)</label>
				<InputInnerDiv>
					<Input
						data-testid="email-input"
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={handleFormValue}
						placeholder="이메일을 입력해주세요."
					/>
					<DuplicateCheckButton
						data-testid="email-duplicate-check-button"
						type="button"
						disabled={email === ""}
						isActive={email !== ""}
						onClick={() => checkDuplication("email")}
					>
						중복확인
					</DuplicateCheckButton>
				</InputInnerDiv>
			</InputContainerDiv>
			<InputContainerDiv>
				<label htmlFor="nickname">어떤 이름을 사용하시겠어요?</label>
				<InputInnerDiv>
					<Input
						data-testid="nickname-input"
						id="nickname"
						name="nickname"
						value={nickname}
						onChange={handleFormValue}
						placeholder="닉네임을 설정해주세요."
					/>
					<DuplicateCheckButton
						data-testid="nickname-duplicate-check-button"
						type="button"
						disabled={nickname === ""}
						isActive={nickname !== ""}
						onClick={() => checkDuplication("nickname")}
					>
						중복확인
					</DuplicateCheckButton>
				</InputInnerDiv>
			</InputContainerDiv>
			<InputContainerDiv>
				<label htmlFor="password">비밀번호</label>
				<InputInnerDiv>
					<Input
						data-testid="password-input"
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={handleFormValue}
						placeholder="비밀번호를 설정해주세요."
					/>
				</InputInnerDiv>
			</InputContainerDiv>
			<InputContainerDiv>
				<label htmlFor="passwordCheck">비밀번호 확인</label>
				<InputInnerDiv>
					<Input
						data-testid="password-check-input"
						type="password"
						id="passwordCheck"
						name="passwordCheck"
						value={passwordCheck}
						onChange={handleFormValue}
						placeholder="비밀번호를 다시 입력해주세요."
					/>
				</InputInnerDiv>
			</InputContainerDiv>
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
