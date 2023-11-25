import React from "react";
import { NavLink } from "react-router-dom";

import { SubHeaderDiv, SubTabUl } from "./SubHeader.style";

const SubHeader = ({ tab }) => {
	const listItems =
		tab === "schedule"
			? [
					{ path: "/", title: "개인일정" },
					{ path: "/share", title: "공유일정" },
			  ]
			: [
					{ path: "/community", title: "홈" },
					{ path: "/mypage", title: "마이페이지" },
			  ];

	return (
		<SubHeaderDiv>
			<SubTabUl>
				{listItems.map(({ path, title }) => (
					<li key={title}>
						<NavLink
							to={path}
							className={({ isActive }) => (isActive ? "isActive" : "")}
						>
							{title}
						</NavLink>
					</li>
				))}
			</SubTabUl>
		</SubHeaderDiv>
	);
};

export default SubHeader;
