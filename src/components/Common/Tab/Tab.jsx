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
			{contents.map((tabContents) => (
				<li role="tab" key={tabContents.title}>
					<TabButton
						isActive={
							path.split("?")[0] === tabContents.link.split("?")[0] ||
							path.split("?")[0] === tabContents.link2?.split("?")[0]
						}
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
