import React from "react";

import { EmptyGroupMemberIcon } from "@/constants/iconConstants";

import { LayoutDiv } from "./EmptyGroupMember.style";

const EmptyGroupMember = () => {
	return (
		<LayoutDiv>
			<EmptyGroupMemberIcon />
			<h3>그룹원이 없습니다.</h3>
			<h4>‘링크 생성하기’를 통해 그룹원을 초대해 보세요.</h4>
		</LayoutDiv>
	);
};

export default EmptyGroupMember;
