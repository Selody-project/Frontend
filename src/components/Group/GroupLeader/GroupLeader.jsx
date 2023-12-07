import React, { useState } from "react";

import {
	ContainerDiv,
	InnerDiv,
	TitleUl,
	TitleButton,
} from "./GroupLeader.styles";
import GroupLeaderManagement from "./GroupLeaderManagement/GroupLeaderManagement";
import GroupLeaderProfile from "./GroupLeaderProfile/GroupLeaderProfile";

const GroupLeader = () => {
	const [menu, setMenu] = useState("그룹 프로필");

	return (
		<ContainerDiv>
			<InnerDiv>
				<TitleUl>
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
				</TitleUl>
				{menu === "그룹 프로필" ? (
					<GroupLeaderProfile />
				) : (
					<GroupLeaderManagement />
				)}
			</InnerDiv>
		</ContainerDiv>
	);
};

export default GroupLeader;
