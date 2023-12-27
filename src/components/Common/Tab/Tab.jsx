import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SubHeader from "@/components/Header/SubHeader/SubHeader";

import { TabUl, TabButton } from "./Tab.styles";

const Tab = ({ contents, name }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	return (
		<TabUl role="tablist" className={name}>
			{contents.map(({ ...tabContents }) => (
				<li role="tab" key={tabContents.id}>
					<TabButton
						isActive={path.includes(tabContents.link)}
						onClick={() => navigate(tabContents.link)}
						className={name}
					>
						{tabContents.title}
					</TabButton>
					{name === "header" && <SubHeader contents={tabContents.subHeader} />}
				</li>
			))}
		</TabUl>
	);
};

export default Tab;
