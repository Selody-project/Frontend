import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Feed from "@/components/Common/Feed/Feed";
import ScrollBottom from "@/components/Common/ScrollBottom";
import { getMyGroupPosts } from "@/features/post/post-service";

import { FeedSection } from "./MyGroupFeed.styles";

const MyGroupFeed = () => {
	const dispatch = useDispatch();

	const { myGroupPosts, myGroupPostslastRecordId, myGroupPostsIsEnd } =
		useSelector((state) => state.post);

	const [isLoading, setIsLoading] = useState(true);
	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const myGroupPostFetching = async () => {
		await dispatch(getMyGroupPosts(myGroupPostslastRecordId));
		setIsLoading(false);
	};

	useEffect(() => {
		myGroupPostFetching();
	}, []);

	const handleOnView = () => {
		if (!myGroupPostsIsEnd) {
			dispatch(getMyGroupPosts(myGroupPostslastRecordId));
		}
	};

	if (isLoading) {
		return <div>로딩중</div>;
	}

	return (
		<FeedSection>
			{myGroupPosts.map((post) => (
				<Feed
					post={post}
					key={post.postId}
					optionOpenedFeedIndex={optionMenuOpenedFeedIndex}
					onThreeDotClick={() =>
						setOptionMenuOpenedFeedIndex((prev) =>
							prev === post.postId ? null : post.postId,
						)
					}
				/>
			))}
			<ScrollBottom onView={handleOnView} />
		</FeedSection>
	);
};

export default MyGroupFeed;
