import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import Logo from "@/assets/img/img-selody-logo/1x.png";
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
} from "./Header.styles";
import GroupCreateModal from "../GroupCreateModal/GroupCreateModal";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import SubHeader from "../SubHeader/SubHeader";

const Header = () => {
	const path = useLocation().pathname;
	const dispatch = useDispatch();

	const profileRef = useRef();
	const dropdownRef = useRef();

	const isSchedule = path === "/" || path === "/share";
	const isFeed = path === "/community" || path === "mypage";

	const { openedModal } = useSelector((state) => state.ui);

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleDropdown = (e) => {
		if (isDropdownOpen) {
			if (!dropdownRef.current.contains(e.target)) {
				setIsDropdownOpen(false);
			}
		} else if (profileRef.current.contains(e.target)) {
			setIsDropdownOpen(true);
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
					<ProfileDiv>
						<ProfileImg
							ref={profileRef}
							src="https://yt3.ggpht.com/ytc/AOPolaSlb8-cH_rN_lZDD1phXr7aHFpoOqMVoepaGuTm=s48-c-k-c0x00ffffff-no-rj"
							alt="user-profile"
						/>
						{isDropdownOpen && <ProfileDropdown ref={dropdownRef} />}
					</ProfileDiv>
				</RightDiv>
				{openedModal === "CREATE_GROUP" && <GroupCreateModal />}
			</WrapDiv>
		</ContainerHeader>
	);
};

export default Header;
