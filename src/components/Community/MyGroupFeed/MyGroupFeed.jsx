import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CrownIcon from "@/assets/icon/ic-crown.svg";
import CommentIcon from "@/assets/icon/ic-feed-comment.svg";
import HeartIcon from "@/assets/icon/ic-feed-heart.svg";
import OptionThreeDotIcon from "@/assets/icon/ic-feed-option.svg";
import ShareIcon from "@/assets/icon/ic-feed-share.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import { getUserGroupPost } from "@/features/post/post-service";
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
	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const handleOption = (num) =>
		optionMenuOpenedFeedIndex === num
			? setOptionMenuOpenedFeedIndex(null)
			: setOptionMenuOpenedFeedIndex(num);

	const dispatch = useDispatch();

	const userGroupPost = useSelector((state) => state.post.userGroupPost?.feed);

	useEffect(() => {
		// dispatch(getGroupPost({ groupId: 31, postId: 3 }));
		dispatch(getUserGroupPost(0));
	}, []);

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
						<img src={SampleImg} alt="sampleimg" />
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
							{/* 추후 api 연결 후 매핑 고려해볼 예정 */}
							<IconItemDiv>
								<HeartIcon />
								<span>12</span>
							</IconItemDiv>
							<IconItemDiv>
								<CommentIcon />
								<span>2</span>
							</IconItemDiv>
							<IconItemDiv>
								<ShareIcon />
								<span>3</span>
							</IconItemDiv>
						</IconDiv>
					</BottomDiv>
				</FeedDiv>
			))}
		</ContainerDiv>
	);
};

export default MyGroupFeed;
