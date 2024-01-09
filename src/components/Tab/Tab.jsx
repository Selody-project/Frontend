import React, { useState } from "react";

import { TabDiv, TabButton } from "./Tab.styles";

const Tab = ({
	defaultOption,
	tabOption,
	defaultTitle,
	tabTitle,
	tabIndex,
	setTabIndex,
}) => {
	const [tab, setTab] = useState(defaultOption);
	const [title, setTitle] = useState(defaultTitle);

	const handleTabClick = () => {
		setTab((prev) => (prev === defaultOption ? tabOption : defaultOption));
		setTitle((prev) => (prev === defaultTitle ? tabTitle : defaultTitle));
		setTabIndex(tabIndex === 0 ? 1 : 0);
	};

	return (
		<TabDiv>
			<ul>
				<li>
					<TabButton
						type="button"
						onClick={handleTabClick}
						disabled={tab === defaultOption && title === defaultTitle}
					>
						{defaultTitle}
					</TabButton>
				</li>
				<li>
					<TabButton
						type="button"
						onClick={handleTabClick}
						disabled={tab === tabOption && title === tabTitle}
					>
						{tabTitle}
					</TabButton>
				</li>
			</ul>
		</TabDiv>
	);
};

export default Tab;
