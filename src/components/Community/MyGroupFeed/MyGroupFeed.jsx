import React, { useState } from "react";

import CrownIcon from "@/assets/icon/ic-crown.svg";
import CommentIcon from "@/assets/icon/ic-feed-comment.svg";
import HeartIcon from "@/assets/icon/ic-feed-heart.svg";
import OptionThreeDotIcon from "@/assets/icon/ic-feed-option.svg";
import ShareIcon from "@/assets/icon/ic-feed-share.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

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

const mockItems = [
	{
		id: 1,
		owner: "그룹리더",
		time: "15분전",
		description:
			"오늘은 개발 스터디 그룹에서 알고리즘 대회에 참가했어! 문제를 풀면서서로 도움을 주고 받으며 즐거운 시간을 보냈어. 성장하는 모습을 느낄수 있어 뿌듯해",
		leader: true,
	},
	{
		id: 2,
		owner: "그룹원",
		time: "43분전",
		description:
			"오늘은 개발 스터디 그룹에서 알고리즘 대회에 참가했어! 문제를 풀면서서로 도움을 주고 받으며 즐거운 시간을 보냈어. 성장하는 모습을 느낄수 있어 뿌듯해2222",
		leader: false,
	},
];

const MyGroupFeed = () => {
	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const handleOption = (num) =>
		optionMenuOpenedFeedIndex === num
			? setOptionMenuOpenedFeedIndex(null)
			: setOptionMenuOpenedFeedIndex(num);

	return (
		<ContainerDiv>
			{mockItems.map((info) => (
				<FeedDiv key={info.id}>
					<OptionDiv>
						<OptionThreeDotIcon
							onClick={() => {
								handleOption(info.id);
							}}
						/>
						{optionMenuOpenedFeedIndex === info.id && (
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
								{info.owner}
								{info.leader && <CrownIcon />}
							</h3>
							<h4>{info.time}</h4>
						</InfoDiv>
					</TopDiv>
					<BottomDiv>
						<p>{info.description}</p>

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
