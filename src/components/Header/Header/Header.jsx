import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import NotificationIcon from "@/assets/icon/ic-notification.svg";
import DefaultProfile from "@/assets/img/img-default-profile.png";
import SelodyLogo from "@/components/Common/SelodyLogo";
import Tab from "@/components/Common/Tab/Tab";
import NotificationDropdown from "@/components/Notification/NotificationDropdown/NotificationDropdown";
import { HEADER_TAB_CONSTANTS } from "@/constants/tabConstants";
import { openModal } from "@/features/ui/ui-slice";

import {
	LogoDiv,
	LeftDiv,
	RightDiv,
	GroupCreateButton,
	ProfileImg,
	ProfileDiv,
	ContainerHeader,
	WrapDiv,
	NotificationDiv,
	NotificationButton,
} from "./Header.styles";
import GroupCreateModal from "../GroupCreateModal/GroupCreateModal";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

const Header = () => {
	const dispatch = useDispatch();

	const profileRef = useRef();
	const notiRef = useRef();

	const { openedModal } = useSelector((state) => state.ui);
	const { user } = useSelector((state) => state.auth);

	const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
	const [isNotiDropdownOpen, setIsNotiDropdownOpen] = useState(false);

	const initProfileImg = user?.profileImage ?? DefaultProfile;

	const handleProfileDropdown = (e) => {
		const { target } = e;

		if (isProfileDropdownOpen && !profileRef.current.contains(target)) {
			setIsProfileDropdownOpen(false);
		}
	};

	const handleNotiDropdown = (e) => {
		const { target } = e;

		if (isNotiDropdownOpen && !notiRef.current.contains(target)) {
			setIsNotiDropdownOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("click", handleProfileDropdown);
		window.addEventListener("click", handleNotiDropdown);

		return () => {
			window.removeEventListener("click", handleProfileDropdown);
			window.removeEventListener("click", handleNotiDropdown);
		};
	});

	return (
		<ContainerHeader>
			<WrapDiv>
				<LeftDiv>
					<NavLink to="/">
						<LogoDiv>
							<SelodyLogo size={48} />
							<h1>
								Selody<span>.</span>
							</h1>
						</LogoDiv>
					</NavLink>
					<Tab contents={HEADER_TAB_CONSTANTS} name="header" />
				</LeftDiv>
				<RightDiv>
					<GroupCreateButton
						onClick={() => {
							dispatch(openModal({ type: "CREATE_GROUP" }));
						}}
					>
						그룹 만들기
					</GroupCreateButton>
					<NotificationDiv>
						<NotificationButton
							ref={notiRef}
							onClick={() => {
								setIsNotiDropdownOpen(!isNotiDropdownOpen);
							}}
						>
							<NotificationIcon />
						</NotificationButton>
						{isNotiDropdownOpen && <NotificationDropdown />}
					</NotificationDiv>
					<ProfileDiv>
						<ProfileImg
							ref={profileRef}
							src={initProfileImg}
							alt="user-profile"
							onClick={() => {
								setIsProfileDropdownOpen(!isProfileDropdownOpen);
							}}
						/>
						{isProfileDropdownOpen && <ProfileDropdown />}
					</ProfileDiv>
				</RightDiv>
				{openedModal === "CREATE_GROUP" && <GroupCreateModal />}
			</WrapDiv>
		</ContainerHeader>
	);
};

export default Header;
