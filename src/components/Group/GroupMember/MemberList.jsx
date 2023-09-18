import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Option from "@/assets/icon/ic-feed-option.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import { deleteGroupMember } from "@/features/group/group-service";

import {
	MemberInnerDiv,
	MemberH3,
	MemberUl,
	OptionMenuDiv,
} from "./GroupMember.styles";

const MemberList = () => {
	const [optionMenuOpenedMemberIndex, setOptionMenuOpenedMemberIndex] =
		useState(null);

	const dispatch = useDispatch();

	const groupInfoDetail = useSelector((state) => state.group.groupInfoDetail);

	const handleOption = (num) =>
		setOptionMenuOpenedMemberIndex((prev) => (prev === num ? null : num));

	const deleteMember = (groupId, userId) => {
		dispatch(deleteGroupMember({ groupId, userId }));
	};

	return (
		<MemberInnerDiv>
			<MemberH3>그룹원</MemberH3>
			<MemberUl>
				{groupInfoDetail?.information.memberInfo.map((info) => (
					<li key={info.userId}>
						<img src={SampleImg} alt="sampleImg" />
						<h4>{info.nickname}</h4>
						<button type="button">
							<Option
								onClick={() => {
									handleOption(info.userId);
								}}
							/>
							{optionMenuOpenedMemberIndex === info.userId && (
								<OptionMenuDiv
									onClick={() => {
										deleteMember(20, info.userId);
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
