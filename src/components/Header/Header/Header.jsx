import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import NotificationIcon from "@/assets/icon/ic-notification.svg";
import SelodyLogo from "@/components/Common/SelodyLogo";
import NotificationDropdown from "@/components/Notification/NotificationDropdown/NotificationDropdown";
import { UI_TYPE } from "@/constants/uiConstans";
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
	NotificationDiv,
	NotificationButton,
} from "./Header.styles";
import GroupCreateModal from "../GroupCreateModal/GroupCreateModal";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import SubHeader from "../SubHeader/SubHeader";

const Header = () => {
	const path = useLocation().pathname;
	const dispatch = useDispatch();

	const profileRef = useRef();
	const notiRef = useRef();

	const isSchedule = path === "/" || path === "/share";
	const isFeed = path === "/community" || path === "mypage";

	const { openedModal } = useSelector((state) => state.ui);

	const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
	const [isNotiDropdownOpen, setIsNotiDropdownOpen] = useState(false);

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
							dispatch(openModal({ type: UI_TYPE.CREATE_GROUP }));
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
							src="https://yt3.ggpht.com/ytc/AOPolaSlb8-cH_rN_lZDD1phXr7aHFpoOqMVoepaGuTm=s48-c-k-c0x00ffffff-no-rj"
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
