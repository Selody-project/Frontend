import React from "react";
import { useDispatch } from "react-redux";

import { OptionThreeDotIcon } from "@/constants/iconConstants";
import { deleteGroupPost } from "@/features/post/post-service";

import { OptionDiv, OptionMenuDiv } from "./Feed.styles";

const FeedOption = ({
	postId,
	groupId,
	optionMenuRef,
	isOptionOpen,
	handleOptionClick,
}) => {
	const dispatch = useDispatch();

	const deletePost = () => {
		dispatch(deleteGroupPost({ postGroupId: groupId, postId }));
	};

	return (
		<OptionDiv ref={optionMenuRef}>
			<OptionThreeDotIcon onClick={handleOptionClick} />

			{isOptionOpen && (
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
