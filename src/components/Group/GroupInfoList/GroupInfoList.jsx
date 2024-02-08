import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import GroupRequestCancelModal from "@/components/Common/GroupModal/GroupRequestCancelModal/GroupRequestCancelModal";
import { OptionThreeDotIcon } from "@/constants/iconConstants";
import { openRequestCancelModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	GroupDiv,
	OptionDiv,
	OptionMenuDiv,
} from "./GroupInfoList.styles";

const GroupInfoList = ({ groups, scrollRef, isRequest }) => {
	const dispatch = useDispatch();
	const { openedModal } = useSelector((state) => state.ui);

	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const handleOption = (num) => {
		setOptionMenuOpenedFeedIndex((prev) => (prev === num ? null : num));
	};

	return (
		<ContainerDiv>
			{groups.map((info) => (
				<GroupDiv key={info.groupId}>
					{isRequest && (
						<OptionDiv>
							<OptionThreeDotIcon
								onClick={() => {
									handleOption(info.groupId);
								}}
							/>
							{optionMenuOpenedFeedIndex === info.groupId && (
								<OptionMenuDiv
									onClick={() => dispatch(openRequestCancelModal())}
								>
									요청취소
								</OptionMenuDiv>
							)}
							{openedModal === "REQUEST_CANCEL" && (
								<GroupRequestCancelModal groupId={info.groupId} />
							)}
						</OptionDiv>
					)}
					<Link to={!optionMenuOpenedFeedIndex && `/group/${info.groupId}`}>
						<img src={info.image} alt="groupImg" />
						<h3>{info.name}</h3>
						<p>{info.description}</p>
						<h4>{info.member}명의 그룹원</h4>
					</Link>
				</GroupDiv>
			))}
			<div ref={scrollRef} />
		</ContainerDiv>
	);
};

export default GroupInfoList;
