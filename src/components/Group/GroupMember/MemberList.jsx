import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CrownIcon } from "@/constants/iconConstants";
import { UI_TYPE } from "@/constants/uiConstants";
import { openMemberModal } from "@/features/ui/ui-slice";

import {
	MemberInnerDiv,
	MemberTitleDiv,
	MemberH3,
	MemberMoreSpan,
	MemberUl,
} from "./GroupMember.Shared.styles";
import MemberModal from "./MemberModal/MemberModal";

const MemberList = ({ leaderId, memberList }) => {
	const dispatch = useDispatch();

	const { openedModal } = useSelector((state) => state.ui);

	return (
		<MemberInnerDiv>
			<MemberTitleDiv>
				<MemberH3>그룹원</MemberH3>
				{memberList.length > 5 && (
					<MemberMoreSpan onClick={() => dispatch(openMemberModal())}>
						더보기
					</MemberMoreSpan>
				)}
			</MemberTitleDiv>
			<MemberUl>
				{memberList.slice(0, 5).map((info) => (
					<li key={info.member.userId}>
						<img
							src={info.member.image}
							alt={`${info.member.nickname}님의 이미지`}
						/>
						<h4>{info.member.nickname}</h4>
						{info.member.userId === leaderId && <CrownIcon />}
					</li>
				))}
			</MemberUl>
			{openedModal === UI_TYPE.MEMBER_MODAL && (
				<MemberModal memberList={memberList} />
			)}
		</MemberInnerDiv>
	);
};

export default MemberList;
