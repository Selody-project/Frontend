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
	deleteGroupPost,
	cancelLikeGroupPost,
	getMyGroupPosts,
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
} from "./MyGroupFeed.styles";

const MyGroupFeed = () => {
	const dispatch = useDispatch();

	const { myGroupPosts, lastRecordId, isEnd } = useSelector(
		(state) => state.post,
	);

	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const target = useRef(null);

	const isObserving = useObserver(target, { threshold: 0.3 });

	const handleOption = (num) =>
		setOptionMenuOpenedFeedIndex((prev) => (prev === num ? null : num));

	const handleLikeClick = (isLike, postGroupId, postId) => {
		if (!isLike) {
			dispatch(likeGroupPost({ postGroupId, postId }));
		} else {
			dispatch(cancelLikeGroupPost({ postGroupId, postId }));
		}
	};

	const deletePost = (isMine, postGroupId, postId) => {
		if (isMine) {
			dispatch(deleteGroupPost({ postGroupId, postId }));
		}
	};

	useEffect(() => {
		const dispatchGetMyGroupPosts = async () => {
			await dispatch(getMyGroupPosts(lastRecordId));
		};
		if (isObserving && !isEnd) {
			dispatchGetMyGroupPosts();
		}
	}, [isObserving, dispatch]);

	return (
		<FeedSection>
			{myGroupPosts?.map((post) => (
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
									<li>
										<button type="button">수정</button>
									</li>
									<li>
										<button
											type="button"
											onClick={() => {
												deletePost(post.isMine, post.groupId, post.postId);
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
						<img src={post.authorImage} alt="postImg" />
						<InfoDiv>
							<h3>
								{post.author}
								{post.isMine && <CrownIcon />}
							</h3>
							<h4>{useTimeStamp(post.createdAt)}</h4>
						</InfoDiv>
					</TopDiv>
					<BottomDiv>
						<p>{post.content}</p>
						<IconDiv>
							<IconItemButton
								onClick={() => {
									handleLikeClick(post.isLiked, post.groupId, post.postId);
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

export default MyGroupFeed;