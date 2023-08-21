import React from "react";
import { NavLink } from "react-router-dom";

import { GroupHeaderNav, GroupHeaderUl } from "./GroupHeader.styles";

const GroupHeader = () => {
	return (
		<GroupHeaderNav>
			<GroupHeaderUl>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "activated" : "")}
					>
						개인 일정
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/share"
						className={({ isActive }) => (isActive ? "activated" : "")}
					>
						그룹 일정
					</NavLink>
				</li>
			</GroupHeaderUl>
		</GroupHeaderNav>
	);
};

export default GroupHeader;
