import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ACCESS_LEVEL_DATA } from "@/constants/accessConstants";
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
import useOutsideClick from "@/hooks/useOutsideClick";

import AccessLevelInfo from "./AccessLevelInfo";
import CommentList from "./CommentList";
import {
	TitleUl,
	TitleLi,
	MemberUl,
	MemberLi,
	AccessLevelUl,
} from "./GroupMemberManagement.styles";

const GroupMemberManagement = ({ groupInfo }) => {
	const dispatch = useDispatch();

	const { groupMemberList } = useSelector((state) => state.group);

	const [isAccessInfoOpen, setIsAccessInfoOpen] = useState(false);
	const [isCommentListOpen, setIsCommentListOpen] = useState(false);

	const [isAccessChangeOpenIndex, setIsAccessChangeOpenIndex] = useState(null);

	const accessInfoRef = useRef(null);
	const commentListRef = useRef(null);

	const groupId = groupInfo?.information.group.groupId;
	const memberList = groupMemberList?.filter(
		(item) => item.accessLevel !== "owner",
	);

	useOutsideClick(accessInfoRef, () => setIsAccessInfoOpen(false));

	useOutsideClick(commentListRef, () => setIsCommentListOpen(false));

	const handleAccessChange = (num) =>
		setIsAccessChangeOpenIndex((prev) => (prev === num ? null : num));

	const handleChangeLevelClick = (userId, accessLevel) => {
		dispatch(changeAccessLevel({ groupId, userId, accessLevel }));
	};

	const deleteMember = (userId) => {
		dispatch(deleteGroupMember({ groupId, userId }));
	};

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
					{isAccessInfoOpen && <AccessLevelInfo />}
				</TitleLi>
				<TitleLi red>내보내기</TitleLi>
			</TitleUl>
			{memberList?.map((memberInfo) => (
				<MemberUl key={memberInfo.member.userId}>
					<MemberLi>
						<img
							src={memberInfo.member.image}
							alt={`${memberInfo.member.nickname}님의 프로필`}
						/>
					</MemberLi>
					<MemberLi>
						<span>{memberInfo.member.nickname}</span>
					</MemberLi>
					<MemberLi
						ref={commentListRef}
						onClick={() => {
							setIsCommentListOpen(!isCommentListOpen);
						}}
						click
					>
						<span>1</span>
						{isCommentListOpen && <CommentList />}
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
								{ACCESS_LEVEL_DATA.map((data) => (
									<li key={data.accessLevel}>
										<button
											type="button"
											onClick={() => {
												handleChangeLevelClick(
													memberInfo.member.userId,
													data.accessLevel,
												);
											}}
										>
											{data.icon}
											{data.accessLevel}
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

export default GroupMemberManagement;
