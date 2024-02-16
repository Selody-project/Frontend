import React, { useState, forwardRef } from "react";

import Feed from "@/components/Common/Feed/Feed";

import { FeedSection } from "./GroupFeed.styles";

const GroupFeed = forwardRef(({ allGroupPosts, groupId, leaderName }, ref) => {
	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	return (
		<FeedSection>
			{allGroupPosts &&
				allGroupPosts.map((post) => (
					<Feed
						post={{ ...post, groupId }}
						key={post.postId}
						optionOpenedFeedIndex={optionMenuOpenedFeedIndex}
						onThreeDotClick={() =>
							setOptionMenuOpenedFeedIndex((prev) =>
								prev === post.postId ? null : post.postId,
							)
						}
						leaderName={leaderName}
					/>
				))}
			<div ref={ref} />
		</FeedSection>
	);
});

export default GroupFeed;
