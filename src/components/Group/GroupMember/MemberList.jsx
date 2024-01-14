import React from "react";

import { CrownIcon } from "@/constants/iconConstants";

import {
	MemberInnerDiv,
	MemberH3,
	MemberUl,
} from "./GroupMember.Shared.styles";

const MemberList = ({ groupInfo, leaderId }) => {
	return (
		<MemberInnerDiv>
			<MemberH3>그룹원</MemberH3>
			<MemberUl>
				{groupInfo.information.memberInfo.map((info) => (
					<li key={info.userId}>
						<img src={info.image} alt="memberImg" />
						<h4>{info.nickname}</h4>
						{info.userId === leaderId && <CrownIcon />}
					</li>
				))}
			</MemberUl>
		</MemberInnerDiv>
	);
};

export default MemberList;
