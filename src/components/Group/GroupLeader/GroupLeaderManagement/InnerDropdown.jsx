import React from "react";

import { InnerDropdownIcon } from "@/constants/iconConstants";

import { ContainerDiv, TitleDiv, ContentDiv } from "./InnerDropdown.styles";

const InnerDropdown = () => {
	return (
		<ContainerDiv>
			<InnerDropdownIcon />
			<ul>
				<li>
					<TitleDiv>
						<h3>홍길동</h3>
						<span>2023.10.17</span>
					</TitleDiv>
					<ContentDiv>
						오늘은 개발 스터디 그룹에서 알고리즘 대회에 참여했어. 좋은
						시간이였어
					</ContentDiv>
				</li>
				<li>
					<TitleDiv>
						<h3>홍길동</h3>
						<span>2023.10.17</span>
					</TitleDiv>
					<ContentDiv>
						오늘은 개발 스터디 그룹에서 알고리즘 대회에 참여했어. 좋은
						시간이였어
					</ContentDiv>
				</li>
				<li>
					<TitleDiv>
						<h3>홍길동</h3>
						<span>2023.10.17</span>
					</TitleDiv>
					<ContentDiv>
						오늘은 개발 스터디 그룹에서 알고리즘 대회에 참여했어. 좋은
						시간이였어
					</ContentDiv>
				</li>
				<li>
					<TitleDiv>
						<h3>홍길동</h3>
						<span>2023.10.17</span>
					</TitleDiv>
					<ContentDiv>
						오늘은 개발 스터디 그룹에서 알고리즘 대회에 참여했어. 좋은
						시간이였어
					</ContentDiv>
				</li>
				<li>
					<TitleDiv>
						<h3>홍길동</h3>
						<span>2023.10.17</span>
					</TitleDiv>
					<ContentDiv>
						오늘은 개발 스터디 그룹에서 알고리즘 대회에 참여했어. 좋은
						시간이였어
					</ContentDiv>
				</li>
			</ul>
		</ContainerDiv>
	);
};

export default InnerDropdown;
