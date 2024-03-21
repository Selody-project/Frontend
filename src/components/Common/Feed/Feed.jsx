import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import FeedOption from "@/components/Common/Feed/FeedOption";
import {
	CrownIcon,
	CommentIcon,
	EmptyHeartIcon,
	FillHeartIcon,
} from "@/constants/iconConstants";
import {
	cancelLikeGroupPost,
	likeGroupPost,
} from "@/features/post/post-service";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useTimeStamp } from "@/hooks/useTimeStamp";

import {
	FeedArticle,
	TopDiv,
	InfoDiv,
	BottomDiv,
	IconDiv,
	IconItemButton,
} from "./Feed.styles";

const Feed = ({ post, groupId, leaderName }) => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	const [isPostLiked, setIsPostLiked] = useState(post.isLiked);
	const [postLikesCount, setPostLikesCount] = useState(post.likesCount);
	const [isOptionOpen, setIsOptionOpen] = useState(false);

	const optionMenuRef = useRef();

	useOutsideClick(optionMenuRef, () => setIsOptionOpen(false));

	const likeClick = async () => {
		try {
			await dispatch(
				likeGroupPost({ postGroupId: groupId, postId: post.postId }),
			).unwrap();
		} catch (error) {
			setIsPostLiked(false);
			setPostLikesCount((prev) => prev - 1);
		}
	};

	const disLikeClick = async () => {
		try {
			await dispatch(
				cancelLikeGroupPost({ postGroupId: groupId, postId: post.postId }),
			).unwrap();
		} catch (error) {
			setIsPostLiked(true);
			setPostLikesCount((prev) => prev + 1);
		}
	};

	const handleLikeClick = () => {
		if (!isPostLiked) {
			setIsPostLiked(true);
			setPostLikesCount((prev) => prev + 1);
			likeClick();
		} else {
			setIsPostLiked(false);
			setPostLikesCount((prev) => prev - 1);
			disLikeClick();
		}
	};

	return (
		<FeedArticle key={post.postId}>
			{user.nickname === post.author && (
				<FeedOption
					postId={post.postId}
					groupId={groupId}
					optionMenuRef={optionMenuRef}
					isOptionOpen={isOptionOpen}
					handleOptionClick={() => setIsOptionOpen((prev) => !prev)}
				/>
			)}
			<TopDiv>
				<img src={post.authorImage} alt={`${post.author}님의 프로필 이미지`} />
				<InfoDiv>
					<h3>
						{post.author}
						{post.author === leaderName && <CrownIcon />}
					</h3>
					<h4>{useTimeStamp(post.createdAt)}</h4>
				</InfoDiv>
			</TopDiv>
			<BottomDiv>
				<p>{post.content}</p>
				<IconDiv>
					<IconItemButton onClick={handleLikeClick}>
						{isPostLiked ? <FillHeartIcon /> : <EmptyHeartIcon />}
						<span>{postLikesCount}</span>
					</IconItemButton>
					<IconItemButton>
						<CommentIcon />
						<span>{post.commentCount}</span>
					</IconItemButton>
				</IconDiv>
			</BottomDiv>
		</FeedArticle>
	);
};

export default Feed;
