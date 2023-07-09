import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { openModal } from "@/features/ui/ui-slice.js";
import { Wrapper, MenuWrapper, GroupCreateBtn } from "./GroupHeader.styles";

const GroupHeader = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const getPageTitle = () => {
		switch (location.pathname) {
			case "/":
				return "개인 일정";
			default:
				return "공유 일정";
		}
	};

	return (
		<Wrapper>
			<MenuWrapper>
				<h1>{getPageTitle()}</h1>
				<ul>
					<NavLink to="/share">홈</NavLink>
					<NavLink to="/">개인 일정</NavLink>
				</ul>
			</MenuWrapper>
			<GroupCreateBtn>
				<button type="button" onClick={() => dispatch(openModal())}>
					공유 페이지 생성
				</button>
			</GroupCreateBtn>
		</Wrapper>
	);
};

export default GroupHeader;
