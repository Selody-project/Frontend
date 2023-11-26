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
	dislikeGroupPost,
	getUserGroupPost,
	likeGroupPost,
} from "@/features/post/post-service";
import useObserver from "@/hooks/useObserver";
import { useTimeStamp } from "@/hooks/useTimeStamp";

import {
	ContainerDiv,
	FeedDiv,
	OptionDiv,
	OptionMenuDiv,
	TopDiv,
	InfoDiv,
	BottomDiv,
	IconDiv,
	IconItemDiv,
} from "./MyGroupFeed.styles";

const MyGroupFeed = () => {
	const dispatch = useDispatch();

	const userGroupPost = useSelector((state) => state.post.userGroupPost);
	const lastRecordId = useSelector((state) => state.post.lastRecordId);

	const target = useRef(null);

	const isObserving = useObserver(target, { threshold: 0.3 });

	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const handleOption = (num) =>
		setOptionMenuOpenedFeedIndex((prev) => (prev === num ? null : num));

	const handleLikeClick = (isLike, groupId, postId) => {
		if (!isLike) {
			dispatch(likeGroupPost({ groupId, postId }));
		} else {
			dispatch(dislikeGroupPost({ groupId, postId }));
		}
	};

	useEffect(() => {
		const dispatchGetUserGroupPost = async () => {
			await dispatch(getUserGroupPost(lastRecordId));
		};
		if (isObserving) {
			dispatchGetUserGroupPost();
		}
	}, [isObserving, dispatch]);

	// console.log(userGroupPost);

	return (
		<ContainerDiv>
			{userGroupPost?.map((post) => (
				<FeedDiv key={post.postId}>
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
						<img src={post.image} alt="postImg" />
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
							<IconItemDiv
								onClick={() => {
									handleLikeClick(post.isLiked, post.groupId, post.postId);
								}}
							>
								{post.isLiked ? <HeartClickIcon /> : <HeartIcon />}
								<span>{post.likesCount}</span>
							</IconItemDiv>
							<IconItemDiv>
								<CommentIcon />
								<span>{post.commentCount}</span>
							</IconItemDiv>
						</IconDiv>
					</BottomDiv>
				</FeedDiv>
			))}
			<div ref={target} />
		</ContainerDiv>
	);
};

export default MyGroupFeed;
