import React from "react";

import { accessData } from "@/constants/accessConstants";
import { AccessInfoIcon } from "@/constants/iconConstants";

import { ContainerDiv, TextDiv } from "./AccessInfo.styles";

const AccessInfo = () => {
	return (
		<ContainerDiv>
			<AccessInfoIcon />
			<ul>
				{accessData.map((data) => (
					<li key={data.id}>
						{data.icon}
						<TextDiv>
							<h3>{data.id}</h3>
							<h4>{data.text}</h4>
						</TextDiv>
					</li>
				))}
			</ul>
		</ContainerDiv>
	);
};

export default AccessInfo;
