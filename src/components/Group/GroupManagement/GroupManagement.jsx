import React, { useState } from "react";

import { ContainerDiv, InnerDiv, TitleButton } from "./GroupManagement.styles";

const GroupManagement = () => {
	const [menu, setMenu] = useState("그룹 프로필");

	return (
		<ContainerDiv>
			<InnerDiv>
				<ul>
					<li>
						<TitleButton
							onClick={() => setMenu("그룹 프로필")}
							disabled={menu === "그룹 프로필"}
						>
							그룹 프로필
						</TitleButton>
					</li>
					<li>
						<TitleButton
							onClick={() => setMenu("그룹원 관리")}
							disabled={menu === "그룹원 관리"}
						>
							그룹원 관리
						</TitleButton>
					</li>
				</ul>
			</InnerDiv>
		</ContainerDiv>
	);
};

export default GroupManagement;
