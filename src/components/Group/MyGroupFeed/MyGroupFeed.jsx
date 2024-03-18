import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import EmptyFeed from "@/components/Common/Feed/EmptyFeed/EmptyFeed";
import Feed from "@/components/Common/Feed/Feed";
import ScrollBottom from "@/components/Common/ScrollBottom";
import { getMyGroupPosts } from "@/features/post/post-service";

import { FeedSection } from "./MyGroupFeed.styles";

const MyGroupFeed = () => {
	const dispatch = useDispatch();

	const { myGroupPosts, myGroupPostslastRecordId, myGroupPostsIsEnd } =
		useSelector((state) => state.post);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const myGroupPostFetching = async () => {
			await dispatch(getMyGroupPosts(myGroupPostslastRecordId));
			setIsLoading(false);
		};

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

	if (myGroupPosts.length === 0) {
		return <EmptyFeed isCommunity />;
	}

	return (
		<FeedSection>
			{myGroupPosts.map((post) => (
				<Feed post={post} key={post.postId} groupId={post.groupId} />
			))}
			<ScrollBottom onView={handleOnView} />
		</FeedSection>
	);
};

export default MyGroupFeed;
