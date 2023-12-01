import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { accessData } from "@/constants/accessConstants";
import {
	InfoIcon,
	ViewerIcon,
	AccessArrowIcon,
	RegularIcon,
	AdminIcon,
	OwnerIcon,
} from "@/constants/iconConstants";
import {
	getGroupMemberList,
	changeAccessLevel,
	deleteGroupMember,
} from "@/features/group/group-service";

import AccessInfo from "./AccessInfo";
import {
	TitleUl,
	TitleLi,
	MemberUl,
	MemberLi,
	AccessLevelUl,
} from "./GroupLeaderManagement.styles";
import InnerDropdown from "./InnerDropdown";

const GroupLeaderManagement = ({ groupId }) => {
	const dispatch = useDispatch();

	const memberList = useSelector((state) => state.group.groupMemberList);

	const [isAccessInfoOpen, setIsAccessInfoOpen] = useState(false);
	const [isInnerDropdownOpen, setIsInnerDropdownOpen] = useState(false);

	const [isAccessChangeOpenIndex, setIsAccessChangeOpenIndex] = useState(null);

	const accessInfoRef = useRef();
	const innerDropdownRef = useRef();

	const handleAccessInfo = (e) => {
		const { target } = e;

		if (isAccessInfoOpen && !accessInfoRef.current.contains(target)) {
			setIsAccessInfoOpen(false);
		}
	};

	const handleDropdown = (e) => {
		const { target } = e;

		if (isInnerDropdownOpen && !innerDropdownRef.current.contains(target)) {
			setIsInnerDropdownOpen(false);
		}
	};

	const handleAccessChange = (num) =>
		setIsAccessChangeOpenIndex((prev) => (prev === num ? null : num));

	const handleChangeLevelClick = (userId, accessLevel) => {
		dispatch(changeAccessLevel({ groupId, userId, accessLevel }));
	};

	const deleteMember = (userId) => {
		dispatch(deleteGroupMember({ groupId, userId }));
	};

	useEffect(() => {
		window.addEventListener("click", handleAccessInfo);
		window.addEventListener("click", handleDropdown);

		return () => {
			window.removeEventListener("click", handleAccessInfo);
			window.removeEventListener("click", handleDropdown);
		};
	});

	useEffect(() => {
		dispatch(getGroupMemberList(groupId));
	}, []);

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
			{memberList?.map((memberInfo) => (
				<MemberUl key={memberInfo.member.userId}>
					<MemberLi>
						<img src={memberInfo.member.image} alt="profileImg" />
					</MemberLi>
					<MemberLi>
						<span>{memberInfo.member.nickname}</span>
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
						onClick={() => {
							handleAccessChange(memberInfo.member.userId);
						}}
						click
					>
						{/* eslint-disable-next-line no-nested-ternary */}
						{memberInfo.accessLevel === "viewer" ? (
							<span>
								<ViewerIcon />
								viewer
								<AccessArrowIcon />
							</span>
						) : // eslint-disable-next-line no-nested-ternary
						memberInfo.accessLevel === "regular" ? (
							<span>
								<RegularIcon />
								regular
								<AccessArrowIcon />
							</span>
						) : memberInfo.accessLevel === "admin" ? (
							<span>
								<AdminIcon />
								admin
								<AccessArrowIcon />
							</span>
						) : (
							<span>
								<OwnerIcon />
								owner
								<AccessArrowIcon />
							</span>
						)}
						{isAccessChangeOpenIndex === memberInfo.member.userId && (
							<AccessLevelUl>
								{accessData.map((data) => (
									<li key={data.id}>
										<button
											type="button"
											onClick={() => {
												handleChangeLevelClick(
													memberInfo.member.userId,
													data.id,
												);
											}}
										>
											{data.icon}
											{data.id}
										</button>
									</li>
								))}
							</AccessLevelUl>
						)}
					</MemberLi>
					<MemberLi red>
						<span>
							<button
								type="button"
								onClick={() => {
									deleteMember(memberInfo.member.userId);
								}}
							>
								내보내기
							</button>
						</span>
					</MemberLi>
				</MemberUl>
			))}
		</>
	);
};

export default GroupLeaderManagement;
