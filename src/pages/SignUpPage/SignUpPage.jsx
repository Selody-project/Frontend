import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Logo from "@/assets/img/img-selody-logo/1x.png";
import SignUpForm from "@/components/SignUp/SignUpForm/SignUpForm";

import {
	ContainerDiv,
	ContentContainerDiv,
	LeftSideDiv,
	LeftTextDiv,
	LogoContainerDiv,
	RightSideDiv,
} from "./SignUpPage.styles";

const SignUpPage = () => {
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user]);

	return (
		<ContainerDiv>
			<LogoContainerDiv>
				<img src={Logo} alt="logo" />
				<h1>
					Selody<span>.</span>
				</h1>
			</LogoContainerDiv>
			<ContentContainerDiv>
				<LeftSideDiv>
					<LeftTextDiv>
						<h3>
							JOIN <br />
							MEMBER.
						</h3>
						<h4>Selody 프로젝트에 오신 것을 환영합니다.</h4>
					</LeftTextDiv>
				</LeftSideDiv>
				<RightSideDiv>
					<SignUpForm />
				</RightSideDiv>
			</ContentContainerDiv>
		</ContainerDiv>
	);
};

export default SignUpPage;
