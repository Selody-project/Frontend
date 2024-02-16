import React, { useState, forwardRef } from "react";

import Feed from "@/components/Common/Feed/Feed";

import { FeedSection } from "./MyGroupFeed.styles";

const MyGroupFeed = forwardRef(({ myGroupPosts }, ref) => {
	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	return (
		<FeedSection>
			{myGroupPosts &&
				myGroupPosts.map((post) => (
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
			<div ref={ref} />
		</FeedSection>
	);
});

export default MyGroupFeed;
