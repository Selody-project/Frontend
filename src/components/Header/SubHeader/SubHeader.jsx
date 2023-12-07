import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { SubHeaderDiv, SubTabUl, TabButton } from "./SubHeader.style";

const SubHeader = ({ tabData }) => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<SubHeaderDiv>
			<SubTabUl role="tablist">
				{tabData.map(({ id, title, link }) => (
					<li key={id} role="tab">
						<TabButton
							onClick={() => navigate(link)}
							isActive={location.pathname.includes(link)}
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
