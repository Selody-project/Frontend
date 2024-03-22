import React, { useState } from "react";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import {
	CrownIcon,
	CommentIcon,
	HeartIcon,
	OptionThreeDotIcon,
} from "@/constants/iconConstants";

import {
	FeedSection,
	FeedArticle,
	OptionDiv,
	OptionMenuDiv,
	TopDiv,
	InfoDiv,
	BottomDiv,
	IconDiv,
	IconItemDiv,
} from "./GroupFeed.styles";
// import { useSelector } from "react-redux";

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

const GroupFeed = () => {
	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	const handleOption = (num) =>
		setOptionMenuOpenedFeedIndex((prev) => (prev === num ? null : num));

	return (
		<FeedSection>
			{/* 추후 Feed Landing에서 컴포넌트 가져와서 변경 */}
			{mockItems.map((info) => (
				<FeedArticle key={info.id}>
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
						</IconDiv>
					</BottomDiv>
				</FeedArticle>
			))}
		</FeedSection>
	);
};

export default GroupFeed;
