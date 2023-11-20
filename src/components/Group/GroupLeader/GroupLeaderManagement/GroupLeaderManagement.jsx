import React, { useState, useEffect, useRef } from "react";

import TestImg from "@/assets/img/bg_02.png";
import {
	InfoIcon,
	ViewerIcon,
	AccessArrowIcon,
	RegularIcon,
	AdminIcon,
	OwnerIcon,
} from "@/constants/iconConstants";

import AccessLevelDropdown from "./AccessLevelDropdown";
import {
	TitleUl,
	TitleLi,
	MemberUl,
	MemberLi,
	AccessLevelUl,
} from "./GroupLeaderManagement.styles";

const GroupLeaderManagement = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isAccessOpen, setIsAccessOpen] = useState(false);

	const dropdownRef = useRef();
	const accessRef = useRef();

	const handleDropdown = (e) => {
		const { target } = e;

		if (isDropdownOpen && !dropdownRef.current.contains(target)) {
			setIsDropdownOpen(false);
		}
	};

	const handleAccess = (e) => {
		const { target } = e;

		if (isAccessOpen && !accessRef.current.contains(target)) {
			setIsAccessOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("click", handleDropdown);
		window.addEventListener("click", handleAccess);

		return () => {
			window.removeEventListener("click", handleDropdown);
			window.removeEventListener("click", handleAccess);
		};
	});

	return (
		<div>
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
				<MemberLi
					ref={accessRef}
					onClick={() => {
						setIsAccessOpen(!isAccessOpen);
					}}
					click
				>
					<span>
						<ViewerIcon />
						viewer
						<AccessArrowIcon />
					</span>
					{isAccessOpen && (
						<AccessLevelUl>
							<li>
								<ViewerIcon />
								viewer
							</li>
							<li>
								<RegularIcon />
								regular
							</li>
							<li>
								<AdminIcon />
								admin
							</li>
							<li>
								<OwnerIcon />
								owner
							</li>
						</AccessLevelUl>
					)}
				</MemberLi>
				<MemberLi red>
					<span>내보내기</span>
				</MemberLi>
			</MemberUl>
		</div>
	);
};

export default GroupLeaderManagement;
