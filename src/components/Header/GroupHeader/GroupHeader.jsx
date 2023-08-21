import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { GroupHeaderNav, GroupHeaderUl } from "./GroupHeader.styles";

const GroupHeader = () => {
	const location = useLocation();
	const isPersonal = location.pathname === "/";
	return (
		<GroupHeaderNav>
			<GroupHeaderUl>
				<li>
					<NavLink to="/" className={`${isPersonal ? "activated" : ""}`}>
						개인 일정
					</NavLink>
				</li>
				<li>
					<NavLink to="/share" className={`${!isPersonal ? "activated" : ""}`}>
						그룹 일정
					</NavLink>
				</li>
			</GroupHeaderUl>
		</GroupHeaderNav>
	);
};

export default GroupHeader;
