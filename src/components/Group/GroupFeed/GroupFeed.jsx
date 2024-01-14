import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Feed from "@/components/Common/Feed/Feed";
import { getGroupAllPosts } from "@/features/post/post-service";
import useObserver from "@/hooks/useObserver";

import { FeedSection } from "./GroupFeed.styles";

const GroupFeed = ({ groupId, isEnd }) => {
	const dispatch = useDispatch();

	const { allGroupPosts, allGroupPostslastRecordId } = useSelector(
		(state) => state.post,
	);

	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const postRef = useRef(null);

	const isObserving = useObserver(postRef, { threshold: 0.3 });

	useEffect(() => {
		const dispatchgetGroupAllPosts = () => {
			dispatch(
				getGroupAllPosts({ groupId, lastRecordId: allGroupPostslastRecordId }),
			);
		};

		if (isEnd && isObserving) {
			dispatchgetGroupAllPosts();
		}
	}, [isObserving, dispatch]);

	return (
		<FeedSection ref={postRef}>
			{allGroupPosts &&
				allGroupPosts?.map((post) => (
					<Feed
						post={post}
						key={post.postId}
						groupId={groupId}
						optionOpenedFeedIndex={optionMenuOpenedFeedIndex}
						onThreeDotClick={(postId) => setOptionMenuOpenedFeedIndex(postId)}
					/>
				))}
		</FeedSection>
	);
};

export default GroupFeed;
