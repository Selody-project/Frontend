import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

import { logout } from "@/features/user/user-service.js";

import { Wrapper, MenuWrapper, AuthButton } from "./Header.styles";

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<Wrapper>
			<MenuWrapper>
				<h1>SELODY</h1>
				<ul>
					<NavLink
						to="/share"
						className={({ isActive }) => (isActive ? "active-link" : "")}
					>
						공유 일정
					</NavLink>
					<NavLink
						to="/community"
						className={({ isActive }) => (isActive ? "active-link" : "")}
					>
						FEED IN SELODY
					</NavLink>
				</ul>
			</MenuWrapper>
			<AuthButton>
				<button type="submit">
					<NavLink
						to="/mypage"
						className={({ isActive }) => (isActive ? "active-link" : "")}
					>
						마이페이지
					</NavLink>
				</button>
				<span style={{ color: "gray" }}>|</span>
				<button type="submit" onClick={() => dispatch(logout(navigate))}>
					로그아웃
				</button>
			</AuthButton>
		</Wrapper>
	);
};

export default Header;
