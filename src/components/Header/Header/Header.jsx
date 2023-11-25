import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import NotificationIcon from "@/assets/icon/ic-notification.svg";
import Logo from "@/assets/img/img-selody-logo/1x.png";
import NotificationDropdown from "@/components/Notification/NotificationDropdown/NotificationDropdown";
import { openModal } from "@/features/ui/ui-slice";

import {
	LogoDiv,
	TabUl,
	LeftDiv,
	RightDiv,
	GroupCreateButton,
	ProfileImg,
	ProfileDiv,
	TabButton,
	ContainerHeader,
	WrapDiv,
	NotificationButton,
	NotificationDiv,
} from "./Header.styles";
import GroupCreateModal from "../GroupCreateModal/GroupCreateModal";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import SubHeader from "../SubHeader/SubHeader";

const Header = () => {
	const path = useLocation().pathname;
	const dispatch = useDispatch();

	const profileRef = useRef();
	const profileDropdownRef = useRef();
	const notiRef = useRef();
	const notiDropdownRef = useRef();

	const isSchedule = path === "/" || path === "/share";
	const isFeed = path === "/community" || path === "mypage";

	const { openedModal } = useSelector((state) => state.ui);

	const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
	const [isNotiDropdownOpen, setIsNotiDropdownOpen] = useState(false);

	const handleDropdown = (e) => {
		if (
			isProfileDropdownOpen &&
			!profileDropdownRef.current.contains(e.target)
		) {
			setIsProfileDropdownOpen(false);
		} else if (profileRef.current.contains(e.target)) {
			setIsProfileDropdownOpen(true);
		}

		if (isNotiDropdownOpen && !notiDropdownRef.current.contains(e.target)) {
			setIsNotiDropdownOpen(false);
		} else if (notiRef.current.contains(e.target)) {
			setIsNotiDropdownOpen(true);
		}
	};

	useEffect(() => {
		window.addEventListener("click", handleDropdown);

		return () => {
			window.removeEventListener("click", handleDropdown);
		};
	});

	return (
		<ContainerHeader>
			<WrapDiv>
				<LeftDiv>
					<NavLink to="/">
						<LogoDiv>
							<img src={Logo} alt="logo" />
							<h1>
								Selody<span>.</span>
							</h1>
						</LogoDiv>
					</NavLink>
					<TabUl>
						<li>
							<TabButton isActive={isSchedule} type="button">
								일정
							</TabButton>
							<SubHeader tab="schedule" />
						</li>
						<li>
							<TabButton isActive={isFeed} type="button">
								FEED IN SELODY
							</TabButton>
							<SubHeader tab="feed" />
						</li>
					</TabUl>
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
						<NotificationButton ref={notiRef}>
							<NotificationIcon />
						</NotificationButton>
						{isNotiDropdownOpen && (
							<NotificationDropdown ref={notiDropdownRef} />
						)}
					</NotificationDiv>
					<ProfileDiv>
						<ProfileImg
							ref={profileRef}
							src="https://yt3.ggpht.com/ytc/AOPolaSlb8-cH_rN_lZDD1phXr7aHFpoOqMVoepaGuTm=s48-c-k-c0x00ffffff-no-rj"
							alt="user-profile"
						/>
						{isProfileDropdownOpen && (
							<ProfileDropdown ref={profileDropdownRef} />
						)}
					</ProfileDiv>
				</RightDiv>
				{openedModal === "CREATE_GROUP" && <GroupCreateModal />}
			</WrapDiv>
		</ContainerHeader>
	);
};

export default Header;
