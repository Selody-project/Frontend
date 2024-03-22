import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { OptionThreeDotIcon } from "@/constants/iconConstants";
import { deleteGroupMember } from "@/features/group/group-service";

import {
	MemberInnerDiv,
	MemberH3,
	MemberUl,
} from "./GroupMember.Shared.styles";
import { OptionMenuDiv } from "./GroupMember.styles";

const MemberList = ({ groupId }) => {
	const [optionMenuOpenedMemberIndex, setOptionMenuOpenedMemberIndex] =
		useState(null);

	const dispatch = useDispatch();

	const groupInfo = useSelector((state) => state.group.groupInfo);

	const handleOption = (num) =>
		setOptionMenuOpenedMemberIndex((prev) => (prev === num ? null : num));

	const deleteMember = (userId) => {
		dispatch(deleteGroupMember({ groupId, userId }));
	};

	return (
		<MemberInnerDiv>
			<MemberH3>그룹원</MemberH3>
			<MemberUl>
				{groupInfo?.information.memberInfo.map((info) => (
					<li key={info.userId}>
						<img src={info.image} alt="memberImg" />
						<h4>{info.nickname}</h4>
						<button type="button">
							<OptionThreeDotIcon
								onClick={() => {
									handleOption(info.userId);
								}}
							/>
							{optionMenuOpenedMemberIndex === info.userId && (
								<OptionMenuDiv
									onClick={() => {
										deleteMember(info.userId);
									}}
								>
									내보내기
								</OptionMenuDiv>
							)}
						</button>
					</li>
				))}
			</MemberUl>
		</MemberInnerDiv>
	);
};

export default MemberList;
