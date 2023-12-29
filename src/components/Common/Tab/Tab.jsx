import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SubHeader from "@/components/Header/SubHeader/SubHeader";

import { TabUl, TabButton } from "./Tab.styles";

const Tab = ({ contents, isSubHeader }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	return (
		<TabUl role="tablist" className={isSubHeader ? "header" : "subheader"}>
			{contents.map(({ ...tabContents }) => (
				<li role="tab" key={tabContents.id}>
					<TabButton
						isActive={path.includes(tabContents.link)}
						onClick={() => navigate(tabContents.link)}
						className={isSubHeader ? "header" : "subheader"}
					>
						{tabContents.title}
					</TabButton>
					{isSubHeader && <SubHeader contents={tabContents.subHeader} />}
				</li>
			))}
		</TabUl>
	);
};

export default Tab;
