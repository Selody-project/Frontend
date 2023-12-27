import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SubHeader from "@/components/Header/SubHeader/SubHeader";

import { TabUl, TabButton } from "./Tab.styles";

const Tab = ({ data, name }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	return (
		<TabUl role="tablist" className={name}>
			{data.map(({ ...tabData }) => (
				<li role="tab" key={tabData.id}>
					<TabButton
						isActive={path.includes(tabData.link)}
						onClick={() => navigate(tabData.link)}
						className={name}
					>
						{tabData.title}
					</TabButton>
					{name === "header" && <SubHeader data={tabData.subHeader} />}
				</li>
			))}
		</TabUl>
	);
};

export default Tab;
