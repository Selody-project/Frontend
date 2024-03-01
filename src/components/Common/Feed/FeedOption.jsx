import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { OptionThreeDotIcon } from "@/constants/iconConstants";
import { deleteGroupPost } from "@/features/post/post-service";
import useOutsideClick from "@/hooks/useOutsideClick";

import { OptionDiv, OptionMenuDiv } from "./Feed.styles";

const FeedOption = ({ postId, groupId }) => {
	const dispatch = useDispatch();

	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const handleOptionMenuClick = () => {
		setOptionMenuOpenedFeedIndex((prev) => (prev === postId ? null : postId));
	};

	const optionMenuRef = useRef();

	useOutsideClick(optionMenuRef, () => setOptionMenuOpenedFeedIndex(null));

	const deletePost = () => {
		dispatch(deleteGroupPost({ postGroupId: groupId, postId }));
	};

	return (
		<OptionDiv ref={optionMenuRef}>
			<OptionThreeDotIcon onClick={handleOptionMenuClick} />

			{optionMenuOpenedFeedIndex === postId && (
				<OptionMenuDiv>
					<ul>
						<li>
							<button type="button">수정</button>
						</li>
						<li>
							<button type="button" onClick={deletePost}>
								삭제
							</button>
						</li>
					</ul>
				</OptionMenuDiv>
			)}
		</OptionDiv>
	);
};

export default FeedOption;
