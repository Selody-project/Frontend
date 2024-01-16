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

import AccessInfo from "./AccessInfo";
import {
	TitleUl,
	TitleLi,
	MemberUl,
	MemberLi,
	AccessLevelUl,
} from "./GroupLeaderManagement.styles";
import InnerDropdown from "./InnerDropdown";

const GroupLeaderManagement = () => {
	const [isAccessInfoOpen, setIsAccessInfoOpen] = useState(false);
	const [isAccessChangeOpen, setIsAccessChangeOpen] = useState(false);
	const [isInnerDropdownOpen, setIsInnerDropdownOpen] = useState(false);

	const accessInfoRef = useRef();
	const accessChangeRef = useRef();
	const innerDropdownRef = useRef();

	const handleAccessInfo = (e) => {
		const { target } = e;

		if (isAccessInfoOpen && !accessInfoRef.current.contains(target)) {
			setIsAccessInfoOpen(false);
		}
	};

	const handleAccessChange = (e) => {
		const { target } = e;

		if (isAccessChangeOpen && !accessChangeRef.current.contains(target)) {
			setIsAccessChangeOpen(false);
		}
	};

	const handleDropdown = (e) => {
		const { target } = e;

		if (isInnerDropdownOpen && !innerDropdownRef.current.contains(target)) {
			setIsInnerDropdownOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("click", handleAccessInfo);
		window.addEventListener("click", handleAccessChange);
		window.addEventListener("click", handleDropdown);

		return () => {
			window.removeEventListener("click", handleAccessInfo);
			window.removeEventListener("click", handleAccessChange);
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
					ref={accessInfoRef}
					onClick={() => {
						setIsAccessInfoOpen(!isAccessInfoOpen);
					}}
					click
				>
					멤버 권한
					<InfoIcon />
					{isAccessInfoOpen && <AccessInfo />}
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
				<MemberLi
					ref={innerDropdownRef}
					onClick={() => {
						setIsInnerDropdownOpen(!isInnerDropdownOpen);
					}}
					click
				>
					<span>1</span>
					{isInnerDropdownOpen && <InnerDropdown />}
				</MemberLi>
				<MemberLi>
					<span>4</span>
				</MemberLi>
				<MemberLi>
					<span>2023.10.13</span>
				</MemberLi>
				<MemberLi
					ref={accessChangeRef}
					onClick={() => {
						setIsAccessChangeOpen(!isAccessChangeOpen);
					}}
					click
				>
					<span>
						<ViewerIcon />
						viewer
						<AccessArrowIcon />
					</span>
					{isAccessChangeOpen && (
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
		</>
	);
};

export default GroupLeaderManagement;
