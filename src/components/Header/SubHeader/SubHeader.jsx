import React from "react";

import Tab from "@/components/Common/Tab/Tab";

import { SubHeaderDiv } from "./SubHeader.style";

const SubHeader = ({ data }) => {
	return (
		<SubHeaderDiv>
			<Tab data={data} name="subheader" />
		</SubHeaderDiv>
	);
};

export default SubHeader;
