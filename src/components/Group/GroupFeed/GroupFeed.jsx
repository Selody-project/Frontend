import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	CrownIcon,
	CommentIcon,
	HeartIcon,
	OptionThreeDotIcon,
	HeartClickIcon,
} from "@/constants/iconConstants";
import {
	getGroupAllPosts,
	deleteGroupPost,
	cancelLikeGroupPost,
	likeGroupPost,
} from "@/features/post/post-service";
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
	IconItemButton,
} from "./GroupFeed.styles";

const GroupFeed = ({ groupId }) => {
	const dispatch = useDispatch();

	const { allGroupPosts, lastRecordId, isEnd } = useSelector(
		(state) => state.post,
	);

	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const target = useRef(null);

	const isObserving = useObserver(target, { threshold: 0.3 });

	const handleOption = (num) =>
		setOptionMenuOpenedFeedIndex((prev) => (prev === num ? null : num));

	const handleLikeClick = (isLiked, postGroupId, postId) => {
		if (!isLiked) {
			dispatch(likeGroupPost({ postGroupId, postId }));
		} else {
			dispatch(cancelLikeGroupPost({ postGroupId, postId }));
		}
	};

	const deletePost = (postGroupId, postId) => {
		dispatch(deleteGroupPost({ postGroupId, postId }));
	};

	useEffect(() => {
		const dispatchgetGroupAllPosts = async () => {
			await dispatch(getGroupAllPosts({ groupId, lastRecordId }));
		};
		if (isObserving && !isEnd) {
			dispatchgetGroupAllPosts();
		}
	}, [isObserving, dispatch]);

	return (
		<FeedSection>
			{allGroupPosts.map((post) => (
				<FeedArticle key={post.postId}>
					<OptionDiv>
						<OptionThreeDotIcon
							onClick={() => {
								handleOption(post.postId);
							}}
						/>
						{optionMenuOpenedFeedIndex === post.postId && post.isMine && (
							<OptionMenuDiv>
								<ul>
									<li>
										<button type="button">수정</button>
									</li>
									<li>
										<button
											type="button"
											onClick={() => {
												deletePost(groupId, post.postId);
											}}
										>
											삭제
										</button>
									</li>
								</ul>
							</OptionMenuDiv>
						)}
					</OptionDiv>
					<TopDiv>
						<img
							src={post.authorImage}
							alt={`${post.author}님의 프로필 이미지`}
						/>
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
							<IconItemButton
								onClick={() => {
									handleLikeClick(post.isLiked, groupId, post.postId);
								}}
							>
								{post.isLiked ? <HeartClickIcon /> : <HeartIcon />}
								<span>{post.likesCount}</span>
							</IconItemButton>
							<IconItemButton>
								<CommentIcon />
								<span>{post.commentCount}</span>
							</IconItemButton>
						</IconDiv>
					</BottomDiv>
				</FeedArticle>
			))}
			<div ref={target} />
		</FeedSection>
	);
};

export default GroupFeed;
