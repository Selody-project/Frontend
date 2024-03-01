import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import EmptyFeed from "@/components/Common/Feed/EmptyFeed/EmptyFeed";
import Feed from "@/components/Common/Feed/Feed";
import ScrollBottom from "@/components/Common/ScrollBottom";
import { getGroupAllPosts } from "@/features/post/post-service";

import { FeedSection } from "./GroupFeed.styles";

const GroupFeed = ({ groupId, leaderName }) => {
	const dispatch = useDispatch();

	const { allGroupPosts, allGroupPostsIsEnd } = useSelector(
		(state) => state.post,
	);

	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const groupPostFetching = async () => {
			await dispatch(getGroupAllPosts(groupId));
			setIsLoading(false);
		};

		groupPostFetching();
	}, []);

	const handleOnView = () => {
		if (!allGroupPostsIsEnd) {
			dispatch(getGroupAllPosts(groupId));
		}
	};

	if (isLoading) {
		return <div>로딩중</div>;
	}

	if (allGroupPosts.length === 0) {
		return <EmptyFeed />;
	}

	return (
		<FeedSection>
			{allGroupPosts.map((post) => (
				<Feed
					post={post}
					key={post.postId}
					groupId={groupId}
					optionOpenedFeedIndex={optionMenuOpenedFeedIndex}
					onThreeDotClick={() =>
						setOptionMenuOpenedFeedIndex((prev) =>
							prev === post.postId ? null : post.postId,
						)
					}
					leaderName={leaderName}
				/>
			))}
			<ScrollBottom onView={handleOnView} />
		</FeedSection>
	);
};

export default GroupFeed;
