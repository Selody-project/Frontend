import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import DropdownBubble from "@/assets/icon/ic-profile-dropdown.svg";
import { logout } from "@/features/user/user-service";

import {
	ContainerDiv,
	ItemButton,
	MenuUl,
	MenuWrapDiv,
} from "./ProfileDropdown.style";

const ProfileDropdown = forwardRef((_, dropdownRef) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<ContainerDiv>
			<MenuWrapDiv ref={dropdownRef}>
				<DropdownBubble />
				<MenuUl>
					<li>
						<Link to="/setting">
							<ItemButton>설정</ItemButton>
						</Link>
					</li>
					<hr />
					<li>
						<ItemButton onClick={() => dispatch(logout(navigate))}>
							로그아웃
						</ItemButton>
					</li>
				</MenuUl>
			</MenuWrapDiv>
		</ContainerDiv>
	);
});

export default ProfileDropdown;
