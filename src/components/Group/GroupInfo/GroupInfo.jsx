import React, { useState } from "react";

import { OptionThreeDotIcon } from "@/constants/iconConstants";

import {
	ContainerDiv,
	GroupDiv,
	OptionDiv,
	OptionMenuDiv,
} from "./GroupInfo.styles";

const GroupInfo = ({ groupInfo, target, menu }) => {
	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const handleOption = (num) => {
		setOptionMenuOpenedFeedIndex((prev) => (prev === num ? null : num));
	};

	return (
		<ContainerDiv>
			{groupInfo?.map((info) => (
				<GroupDiv key={info.groupId}>
					{menu && (
						<OptionDiv>
							<OptionThreeDotIcon
								onClick={() => {
									handleOption(info.groupId);
								}}
							/>
							{optionMenuOpenedFeedIndex === info.groupId && (
								<OptionMenuDiv>요청취소</OptionMenuDiv>
							)}
						</OptionDiv>
					)}
					<img src={info.image} alt="groupImg" />
					<h3>{info.name}</h3>
					<p>{info.description}</p>
					<h4>{info.member}명의 그룹원</h4>
				</GroupDiv>
			))}
			<div ref={target} />
		</ContainerDiv>
	);
};

export default GroupInfo;
