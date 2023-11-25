import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import DropdownBubble from "@/assets/icon/ic-profile-dropdown.svg";
// import { logout } from "@/features/auth/auth-service";

import { ItemButton, MenuUl, MenuWrapDiv } from "./ProfileDropdown.style";

const ProfileDropdown = () => {
	// const dispatch = useDispatch();

	return (
		<MenuWrapDiv>
			<DropdownBubble />
			<MenuUl>
				<li>
					<Link to="/setting">
						<ItemButton>설정</ItemButton>
					</Link>
				</li>
				<hr />
				<li>
					<ItemButton>로그아웃</ItemButton>
				</li>
			</MenuUl>
		</MenuWrapDiv>
	);
};

export default ProfileDropdown;
