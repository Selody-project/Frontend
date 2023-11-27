import React from "react";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	TextDiv,
} from "./CreateGroupLink.styles";

const CreateGroupLink = () => {
	return (
		<ContainerDiv>
			<TopDiv>
				<h3>그룹 A</h3>
				<h4>생성하기</h4>
			</TopDiv>
			<MiddleDiv>
				<TextDiv>(링크)</TextDiv>
				<button type="button">확인</button>
			</MiddleDiv>
			<h3>* 24시간이 지나거나 새로 생성 시 기존 코드는 만료됩니다.</h3>
		</ContainerDiv>
	);
};

export default CreateGroupLink;
