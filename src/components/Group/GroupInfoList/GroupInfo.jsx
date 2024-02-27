import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import GroupOption from "@/components/Group/GroupInfoList/GroupOption";
import useOutsideClick from "@/hooks/useOutsideClick";

import { GroupDiv } from "./GroupInfoList.styles";

const GroupInfo = ({ isRequest, info }) => {
	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const optionMenuRef = useRef();

	useOutsideClick(optionMenuRef, () => setOptionMenuOpenedFeedIndex(null));

	return (
		<GroupDiv>
			{isRequest && (
				<GroupOption
					groupId={info.groupId}
					groupName={info.name}
					optionMenuOpenedFeedIndex={optionMenuOpenedFeedIndex}
					onThreeDotClick={() =>
						setOptionMenuOpenedFeedIndex((prev) =>
							prev === info.groupId ? null : info.groupId,
						)
					}
					optionMenuRef={optionMenuRef}
				/>
			)}

			<Link
				to={`/group/${info.groupId}`}
				onClick={(e) => optionMenuOpenedFeedIndex && e.preventDefault()}
			>
				<img src={info.image} alt="groupImg" />
				<h3>{info.name}</h3>
				<p>{info.description}</p>
				<h4>{info.member}명의 그룹원</h4>
			</Link>
		</GroupDiv>
	);
};

export default GroupInfo;
