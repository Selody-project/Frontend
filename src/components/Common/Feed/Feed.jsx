import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	CrownIcon,
	CommentIcon,
	EmptyHeartIcon,
	OptionThreeDotIcon,
	FillHeartIcon,
} from "@/constants/iconConstants";
import {
	deleteGroupPost,
	cancelLikeGroupPost,
	likeGroupPost,
} from "@/features/post/post-service";
import { useTimeStamp } from "@/hooks/useTimeStamp";

import {
	FeedArticle,
	OptionDiv,
	OptionMenuDiv,
	TopDiv,
	InfoDiv,
	BottomDiv,
	IconDiv,
	IconItemButton,
} from "./Feed.styles";

const Feed = ({
	groupId,
	post,
	optionOpenedFeedIndex,
	onThreeDotClick,
	leaderName,
}) => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	const [isPostLiked, setIsPostLiked] = useState(post.isLiked);
	const [postLikesCount, setPostLikesCount] = useState(post.likesCount);

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

	const deletePost = () => {
		dispatch(deleteGroupPost({ postGroupId: groupId, postId: post.postId }));
	};

	return (
		<FeedArticle key={post.postId}>
			{user.nickname === post.author && (
				<OptionDiv>
					<OptionThreeDotIcon onClick={onThreeDotClick} />
					{optionOpenedFeedIndex === post.postId && (
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
