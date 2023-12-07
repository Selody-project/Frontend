import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { SubHeaderDiv, SubTabUl, TabButton } from "./SubHeader.style";

const SubHeader = ({ tab }) => {
	const navigate = useNavigate();
	const location = useLocation();

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
			<SubTabUl role="tablist">
				{listItems.map(({ path, title }) => (
					<li key={title} role="tab">
						<TabButton
							onClick={() => navigate(path)}
							isActive={location.pathname.includes(path)}
						>
							{title}
						</TabButton>
					</li>
				))}
			</SubTabUl>
		</SubHeaderDiv>
	);
};

export default SubHeader;
