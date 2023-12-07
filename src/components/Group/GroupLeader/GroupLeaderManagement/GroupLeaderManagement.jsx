import React, { useState, useEffect, useRef } from "react";

import TestImg from "@/assets/img/bg_02.png";
import {
	InfoIcon,
	ViewerIcon,
	AccessArrowIcon,
} from "@/constants/iconConstants";

import AccessLevelDropdown from "./AccessLevelDropdown";
import {
	TitleUl,
	TitleLi,
	MemberUl,
	MemberLi,
} from "./GroupLeaderManagement.styles";

const GroupLeaderManagement = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const dropdownRef = useRef();

	const handleDropdown = (e) => {
		const target = e;

		if (isDropdownOpen && !dropdownRef.current.contains(target)) {
			setIsDropdownOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("click", handleDropdown);

		return () => {
			window.removeEventListener("click", handleDropdown);
		};
	});

	return (
		<>
			<TitleUl>
				<TitleLi>프로필</TitleLi>
				<TitleLi>이름</TitleLi>
				<TitleLi>댓글 내역</TitleLi>
				<TitleLi>공감 내역</TitleLi>
				<TitleLi>가입 날짜</TitleLi>
				<TitleLi
					ref={dropdownRef}
					onClick={() => {
						setIsDropdownOpen(!isDropdownOpen);
					}}
					click
				>
					멤버 권한
					<InfoIcon />
					{isDropdownOpen && <AccessLevelDropdown />}
				</TitleLi>
				<TitleLi red>내보내기</TitleLi>
			</TitleUl>
			<MemberUl>
				<MemberLi>
					<img src={TestImg} alt="testImg" />
				</MemberLi>
				<MemberLi>
					<span>test</span>
				</MemberLi>
				<MemberLi>
					<span>1</span>
				</MemberLi>
				<MemberLi>
					<span>4</span>
				</MemberLi>
				<MemberLi>
					<span>2023.10.13</span>
				</MemberLi>
				<MemberLi>
					<span>
						<ViewerIcon />
						viewer
						<AccessArrowIcon />
					</span>
				</MemberLi>
				<MemberLi red>
					<span>내보내기</span>
				</MemberLi>
			</MemberUl>
		</>
	);
};

export default GroupLeaderManagement;
