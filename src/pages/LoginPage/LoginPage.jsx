import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Logo from "@/assets/img/img-selody-logo/3x.png";
import Google from "@/components/sign/Google";
import Naver from "@/components/sign/Naver";
import { login, naverLogin } from "@/features/user/user-service.js";
import useNaver from "@/hooks/useNaver.jsx";

import {
	ContainerDiv,
	LeftSideDiv,
	RightSideDiv,
	LoginForm,
	Input,
	LoginButton,
	SignUpButton,
	DividerHr,
	SocialLoginContainerDiv,
	EmailSaveLabel,
	FindPasswordDiv,
	SocialLoginBtnContainerDiv,
} from "./LoginPage.styles";

function LoginPage() {
	const dispatchFn = useDispatch();
	const navigate = useNavigate();

	const naverInfo = useNaver();

	const { user } = useSelector((state) => state.user);

	const [formValue, setFormValue] = useState({ email: "", password: "" });

	const { email, password } = formValue;

	const handleFormValue = (e) => {
		const changed = {
			...formValue,
			[e.target.name]: e.target.value,
		};
		setFormValue(changed);
	};

	const validate = () => {
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

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!validate()) return;

		dispatchFn(login({ email, password }));
	};

	useEffect(() => {
		if (user) {
			toast.success(`안녕하세요! ${user}님`);
			navigate("/");
		}

		if (naverInfo.accessToken) {
			dispatchFn(naverLogin(naverInfo));
		}
	}, [user]);

	return (
		<ContainerDiv>
			<LeftSideDiv>
				<img src={Logo} alt="logo" />
				<h1>
					Selody<span>.</span>
				</h1>
				<h3>
					이번 주 우리 약속은 이 날! <br />
					그룹 일정을 편하게 관리해보세요.
				</h3>
			</LeftSideDiv>
			<RightSideDiv>
				<LoginForm onSubmit={handleSubmit}>
					<h1>LOGIN.</h1>
					<Input
						data-testid="email-input"
						type="text"
						name="email"
						placeholder="이메일을 입력해주세요."
						onChange={handleFormValue}
					/>
					<Input
						data-testid="password-input"
						type="password"
						name="password"
						placeholder="비밀번호를 입력해주세요."
						onChange={handleFormValue}
					/>
					<EmailSaveLabel>
						<input type="checkbox" id="hidden-checkbox" />
						<div id="shown-checkbox" />
						<span>이메일 저장</span>
					</EmailSaveLabel>
					<FindPasswordDiv>
						<span>비밀번호를 잊으셨나요?</span>
					</FindPasswordDiv>
					<LoginButton type="submit">로그인</LoginButton>
					<SignUpButton type="button" onClick={() => navigate("/signup")}>
						회원가입
					</SignUpButton>
				</LoginForm>
				<DividerHr />
				<SocialLoginContainerDiv>
					<p>간편 로그인</p>
					<div>
						<SocialLoginBtnContainerDiv>
							<button type="button">
								<Google />
							</button>
							<span>구글</span>
						</SocialLoginBtnContainerDiv>
						<SocialLoginBtnContainerDiv>
							<button type="button" data-testid="naver-login">
								<Naver />
							</button>
							<span>네이버</span>
						</SocialLoginBtnContainerDiv>
					</div>
				</SocialLoginContainerDiv>
			</RightSideDiv>
		</ContainerDiv>
	);
}

export default LoginPage;
