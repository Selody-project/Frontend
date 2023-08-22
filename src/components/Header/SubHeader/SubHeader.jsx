import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { NotificationButton, SubHeaderDiv, SubTabUl } from "./SubHeader.style";
import NotificationDropdown from "../../Notification/NotificationDropdown/NotificationDropdown";

const SubHeader = ({ tab }) => {
	const buttonRef = useRef();
	const dropdownRef = useRef();

	const [isNotiTabOpen, setIsNotiTabOpen] = useState(false);

	const getListItems = () =>
		tab === "schedule"
			? [
					{ path: "/", title: "개인일정" },
					{ path: "/share", title: "공유일정" },
			  ]
			: [
					{ path: "/community", title: "홈" },
					{ path: null, title: "알림" },
					{ path: "/mypage", title: "마이페이지" },
			  ];

	const closeDropdown = (e) => {
		if (
			!buttonRef.current.contains(e.target) &&
			!dropdownRef.current.contains(e.target)
		) {
			setIsNotiTabOpen(false);
		}
	};

	useEffect(() => {
		if (isNotiTabOpen) {
			window.addEventListener("click", closeDropdown);
		}

		return () => {
			window.removeEventListener("click", closeDropdown);
		};
	});

	return (
		<>
			<SubHeaderDiv>
				<SubTabUl>
					{getListItems().map(({ path, title }, idx) => (
						// eslint-disable-next-line react/no-array-index-key
						<li key={idx}>
							{path === null ? (
								<NotificationButton
									ref={buttonRef}
									onClick={() => setIsNotiTabOpen(true)}
								>
									{title}
								</NotificationButton>
							) : (
								<NavLink
									to={path}
									className={({ isActive }) => (isActive ? "isActive" : "")}
								>
									{title}
								</NavLink>
							)}
						</li>
					))}
				</SubTabUl>
			</SubHeaderDiv>
			<NotificationDropdown ref={dropdownRef} isOpen={isNotiTabOpen} />
		</>
	);
};

export default SubHeader;
