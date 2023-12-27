import React from "react";

import Tab from "@/components/Common/Tab/Tab";

import { SubHeaderDiv } from "./SubHeader.style";

const SubHeader = ({ contents }) => {
	return (
		<SubHeaderDiv>
			<Tab contents={contents} name="subheader" />
		</SubHeaderDiv>
	);
};

export default SubHeader;
