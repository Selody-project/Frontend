import React from "react";

import { ACCESS_LEVEL_DATA } from "@/constants/accessConstants";
import { AccessInfoIcon } from "@/constants/iconConstants";

import { ContainerDiv, TextDiv } from "./AccessLevelInfo.styles";

const AccessLevelInfo = () => {
	return (
		<ContainerDiv>
			<AccessInfoIcon />
			<ul>
				{ACCESS_LEVEL_DATA.map((data) => (
					<li key={data.accessLevel}>
						{data.icon}
						<TextDiv>
							<h3>{data.accessLevel}</h3>
							<h4>{data.text}</h4>
						</TextDiv>
					</li>
				))}
			</ul>
		</ContainerDiv>
	);
};

export default AccessLevelInfo;
