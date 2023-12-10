import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { OptionThreeDotIcon } from "@/constants/iconConstants";
import { openModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	GroupDiv,
	OptionDiv,
	OptionMenuDiv,
} from "./GroupInfoList.styles";
import GroupRequestCancelModal from "../GroupRequestCancelModal/GroupRequestCancelModal";

const GroupInfoList = ({ groups, scrollRef, index }) => {
	const dispatch = useDispatch();
	const { openedModal } = useSelector((state) => state.ui);

	const navigate = useNavigate();

	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const handleOption = (num) => {
		setOptionMenuOpenedFeedIndex((prev) => (prev === num ? null : num));
	};

	return (
		<ContainerDiv>
			{groups.map((info) => (
				<GroupDiv
					key={info.groupId}
					onClick={() => {
						navigate(`/group/${info.groupId}`);
					}}
				>
					{index && (
						<OptionDiv>
							<OptionThreeDotIcon
								onClick={() => {
									handleOption(info.groupId);
								}}
							/>
							{optionMenuOpenedFeedIndex === info.groupId && (
								<OptionMenuDiv
									onClick={() => dispatch(openModal({ type: "REQUESTCANCEL" }))}
								>
									요청취소
								</OptionMenuDiv>
							)}
							{openedModal === "REQUESTCANCEL" && (
								<GroupRequestCancelModal groupId={info.groupId} />
							)}
						</OptionDiv>
					)}
					<img src={info.image} alt="groupImg" />
					<h3>{info.name}</h3>
					<p>{info.description}</p>
					<h4>{info.member}명의 그룹원</h4>
				</GroupDiv>
			))}
			<div ref={scrollRef} />
		</ContainerDiv>
	);
};

export default GroupInfoList;
