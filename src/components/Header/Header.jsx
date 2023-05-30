import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMenuToggle } from "../../features/user/user-slice.js";
import {
	HeaderContainer,
	Logo,
	LogoImage,
	Title,
	Navigation,
	NavLink,
	CreateButton,
	HamburgerMenu,
} from "./Header.styles";
import { logout } from "@/features/user/user-service.js";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const menuOpen = useSelector((state) => state.user.menuOpen);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleMenuOpen = () => {
		dispatch(handleMenuToggle());
	};

	return (
		<HeaderContainer>
			<Logo>
				<LogoImage src="/logo.svg" alt="Logo" />
				<Title>Selody</Title>
			</Logo>
			<HamburgerMenu onClick={handleMenuOpen}>
				<i className={`fas fa-${menuOpen ? "times" : "bars"}`}></i>
			</HamburgerMenu>
			<Navigation open={menuOpen}>
				<NavLink to="/share">공유일정 확인</NavLink>
				<NavLink to="/personal">개인일정</NavLink>
				<NavLink to="/community">커뮤니티</NavLink>
				<NavLink to="/mypage">마이페이지</NavLink>
				<CreateButton>공유 페이지 생성</CreateButton>
				<CreateButton type="submit" onClick={() => dispatch(logout(navigate))}>
					로그아웃
				</CreateButton>
			</Navigation>
		</HeaderContainer>
	);
};

export default Header;
