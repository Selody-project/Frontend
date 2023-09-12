import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { login } from "@/features/auth/auth-service";

import {
	EmailSaveLabel,
	FindPasswordDiv,
	Input,
	InputContainerDiv,
	LoginAssistanceDiv,
	LoginButton,
	SignUpButton,
	StyledLoginForm,
} from "./LoginForm.style";

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formValue, setFormValue] = useState({ email: "", password: "" });

	const { email, password } = formValue;

	const handleFormValue = (e) => {
		const changed = {
			...formValue,
			[e.target.name]: e.target.value,
		};
		setFormValue(changed);
	};

	const validateForm = () => {
		if (!email.trim() || !password.trim()) {
			toast.error("이메일과 비밀번호는 반드시 입력되어야 합니다.");
			return false;
		}

		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (!emailRegex.test(email)) {
			toast.error("올바른 이메일 형식이 아닙니다. 다시 입력해주세요.");
			return false;
		}

		return true;
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!validateForm()) return;

		dispatch(login({ email, password }));
	};

	return (
		<StyledLoginForm onSubmit={handleSubmit}>
			<h1>LOGIN.</h1>
			<InputContainerDiv onChange={handleFormValue}>
				<Input
					data-testid="email-input"
					type="text"
					name="email"
					placeholder="이메일을 입력해주세요."
				/>
				<Input
					data-testid="password-input"
					type="password"
					name="password"
					placeholder="비밀번호를 입력해주세요."
				/>
			</InputContainerDiv>
			<LoginAssistanceDiv>
				<EmailSaveLabel>
					<input type="checkbox" id="hidden-checkbox" />
					<div id="shown-checkbox" />
					<span>이메일 저장</span>
				</EmailSaveLabel>
				<FindPasswordDiv>
					<span>비밀번호를 잊으셨나요?</span>
				</FindPasswordDiv>
			</LoginAssistanceDiv>
			<LoginButton type="submit">로그인</LoginButton>
			<SignUpButton type="button" onClick={() => navigate("/signup")}>
				회원가입
			</SignUpButton>
		</StyledLoginForm>
	);
};

export default LoginForm;
