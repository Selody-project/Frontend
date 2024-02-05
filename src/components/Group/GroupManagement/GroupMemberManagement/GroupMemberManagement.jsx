import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { ACCESS_LEVEL_DATA } from "@/constants/accessConstants";
import { InfoIcon, AccessArrowIcon } from "@/constants/iconConstants";
import {
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
	AccessLevelLi,
} from "./GroupMemberManagement.styles";

const groupMemberManagementTitleData = [
	{
		title: "프로필",
	},
	{
		title: "이름",
	},
	{
		title: "댓글 내역",
	},
	{
		title: "공감 내역",
	},
	{
		title: "가입 날짜",
	},
];

const GroupMemberManagement = ({ groupId, memberList }) => {
	const dispatch = useDispatch();

	const [isAccessInfoOpen, setIsAccessInfoOpen] = useState(false);
	const [isCommentListOpen, setIsCommentListOpen] = useState(false);

	const [isAccessChangeOpenIndex, setIsAccessChangeOpenIndex] = useState(null);

	const accessInfoRef = useRef(null);
	const commentListRef = useRef(null);

	useOutsideClick(accessInfoRef, () => setIsAccessInfoOpen(false));
	useOutsideClick(commentListRef, () => setIsCommentListOpen(false));

	const handleAccessChange = (num) =>
		setIsAccessChangeOpenIndex((prev) => (prev === num ? null : num));

	const handleChangeLevelClick = (userId, accessLevel, memberAccessLevel) => {
		if (memberAccessLevel !== accessLevel) {
			dispatch(changeAccessLevel({ groupId, userId, accessLevel }));
		}
	};

	const deleteMember = (userId) => {
		dispatch(deleteGroupMember({ groupId, userId }));
	};

	const changeUtcDate = (time) => {
		const year = new Date(time).getFullYear();
		const month = new Date(time).getMonth() + 1;
		const date = new Date(time).getDate();

		if (month < 10) {
			return `${year}.0${month}.${date}`;
		}

		return `${year}.${month}.${date}`;
	};

	return (
		<>
			<TitleUl>
				{groupMemberManagementTitleData.map((data) => (
					<TitleLi key={data.title}>{data.title}</TitleLi>
				))}
				<TitleLi
					ref={accessInfoRef}
					onClick={() => {
						setIsAccessInfoOpen(!isAccessInfoOpen);
					}}
					isClickable
				>
					멤버 권한
					<InfoIcon />
					{isAccessInfoOpen && <AccessLevelInfo />}
				</TitleLi>
			</TitleUl>
			{memberList &&
				memberList.map((memberInfo) => (
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
							isClickable
						>
							<span>{memberInfo.member.commentCount}</span>
							{isCommentListOpen && <CommentList />}
						</MemberLi>
						<MemberLi>
							<span>{memberInfo.member.likeCount}</span>
						</MemberLi>
						<MemberLi>
							<span>{changeUtcDate(memberInfo.member.joinedDate)}</span>
						</MemberLi>
						<MemberLi
							onClick={() => {
								handleAccessChange(memberInfo.member.userId);
							}}
							isClickable
						>
							{ACCESS_LEVEL_DATA.map(
								(data) =>
									memberInfo.accessLevel === data.accessLevel && (
										<span key={data.accessLevel}>
											{data.icon}
											{data.accessLevel}
											<AccessArrowIcon />
										</span>
									),
							)}
							{isAccessChangeOpenIndex === memberInfo.member.userId && (
								<AccessLevelUl>
									{ACCESS_LEVEL_DATA.map((data) => (
										<AccessLevelLi
											key={data.accessLevel}
											isAccessLevel={
												data.accessLevel === memberInfo.accessLevel
											}
										>
											<button
												type="button"
												onClick={() => {
													handleChangeLevelClick(
														memberInfo.member.userId,
														data.accessLevel,
														memberInfo.accessLevel,
													);
												}}
											>
												{data.icon}
												{data.accessLevel}
											</button>
										</AccessLevelLi>
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