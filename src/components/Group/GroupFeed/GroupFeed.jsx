import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	CrownIcon,
	CommentIcon,
	HeartIcon,
	OptionThreeDotIcon,
} from "@/constants/iconConstants";
import { getGroupAllPost } from "@/features/post/post-service";
import useObserver from "@/hooks/useObserver";
import { useTimeStamp } from "@/hooks/useTimeStamp";

import {
	FeedSection,
	FeedArticle,
	OptionDiv,
	OptionMenuDiv,
	TopDiv,
	InfoDiv,
	BottomDiv,
	IconDiv,
	IconItemDiv,
} from "./GroupFeed.styles";

const GroupFeed = ({ groupId }) => {
	const dispatch = useDispatch();

	const allGroupPost = useSelector((state) => state.post.allGroupPost);
	const recordId = useSelector((state) => state.post.lastRecordId);

	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const target = useRef(null);
	const isObserving = useObserver(target, { threshold: 0.3 });

	const handleOption = (num) =>
		setOptionMenuOpenedFeedIndex((prev) => (prev === num ? null : num));

	useEffect(() => {
		const dispatchGetGroupAllPost = async () => {
			await dispatch(getGroupAllPost({ groupId, recordId })).unwrap();
		};
		if (isObserving) {
			dispatchGetGroupAllPost();
		}
	}, [isObserving, dispatch]);

	return (
		<FeedSection>
			{allGroupPost?.map((post) => (
				<FeedArticle key={post.postId}>
					<OptionDiv>
						<OptionThreeDotIcon
							onClick={() => {
								handleOption(post.postId);
							}}
						/>
						{optionMenuOpenedFeedIndex === post.postId && (
							<OptionMenuDiv>
								<ul>
									<li>수정</li>
									<li>삭제</li>
								</ul>
							</OptionMenuDiv>
						)}
					</OptionDiv>
					<TopDiv>
						<img src={post.authorImage} alt="postImg" />
						<InfoDiv>
							<h3>
								{post.author}
								{post.leader && <CrownIcon />}
							</h3>
							<h4>{useTimeStamp(post.createdAt)}</h4>
						</InfoDiv>
					</TopDiv>
					<BottomDiv>
						<p>{post.content}</p>
						<IconDiv>
							<IconItemDiv>
								<HeartIcon />
								<span>{post.likesCount}</span>
							</IconItemDiv>
							<IconItemDiv>
								<CommentIcon />
								<span>{post.commentCount}</span>
							</IconItemDiv>
						</IconDiv>
					</BottomDiv>
				</FeedArticle>
			))}
			<div ref={target} />
		</FeedSection>
	);
};

export default GroupFeed;
