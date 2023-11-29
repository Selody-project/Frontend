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

	const deletePost = (isMine, groupId, postId) => {
		if (isMine) {
			dispatch(deleteGroupPost({ groupId, postId }));
		}
	};

	useEffect(() => {
		const dispatchGetUserGroupPost = async () => {
			await dispatch(getUserGroupPost(lastRecordId)).unwrap();
		};
		if (isObserving) {
			dispatchGetUserGroupPost();
		}
	}, [isObserving, dispatch]);

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
