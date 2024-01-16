import React from "react";

import {
	AccessInfoIcon,
	ViewerIcon,
	RegularIcon,
	AdminIcon,
	OwnerIcon,
} from "@/constants/iconConstants";

import { ContainerDiv, TextDiv } from "./AccessInfo.styles";

const AccessInfo = () => {
	return (
		<ContainerDiv>
			<AccessInfoIcon />
			<ul>
				<li>
					<ViewerIcon />
					<TextDiv>
						<h3>viewer</h3>
						<h4>그룹 일정 투표만 가능</h4>
					</TextDiv>
				</li>
				<li>
					<RegularIcon />
					<TextDiv>
						<h3>regular</h3>
						<h4>커뮤니티에 글 등록</h4>
						<h4>본인이 작성한 글에 한해 수정 및 삭제</h4>
					</TextDiv>
				</li>
				<li>
					<AdminIcon />
					<TextDiv>
						<h3>admin</h3>
						<h4>그룹 일정을 등록, 수정, 삭제</h4>
						<h4>다른 그룹원이 작성한 글 삭제 가능</h4>
					</TextDiv>
				</li>
				<li>
					<OwnerIcon />
					<TextDiv>
						<h3>owner</h3>
						<h4>그룹원의 요청 수락, 내보내기, 그룹 삭제 가능</h4>
					</TextDiv>
				</li>
			</ul>
		</ContainerDiv>
	);
};

export default AccessInfo;
