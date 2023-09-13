import React, { useState } from "react";
// import { useSelector } from "react-redux";

import CrownIcon from "@/assets/icon/ic-crown.svg";
import CommentIcon from "@/assets/icon/ic-feed-comment.svg";
import HeartIcon from "@/assets/icon/ic-feed-heart.svg";
import OptionThreeDotIcon from "@/assets/icon/ic-feed-option.svg";
import ShareIcon from "@/assets/icon/ic-feed-share.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import {
	ContainerDiv,
	TitleDiv,
	Button,
	FeedDiv,
	OptionDiv,
	OptionMenuDiv,
	TopDiv,
	InfoDiv,
	BottomDiv,
	IconDiv,
	IconItemDiv,
} from "./GroupFeed.styles";

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
	const [sort, setSort] = useState("latest");

	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	// const groupInfoDetail = useSelector((state) => state.group.groupInfoDetail);
	// const { user } = useSelector((state) => state.auth);

	// console.log(groupInfoDetail?.leaderInfo.userId);
	// console.log(user?.userId);

	const handleOption = (num) =>
		optionMenuOpenedFeedIndex === num
			? setOptionMenuOpenedFeedIndex(null)
			: setOptionMenuOpenedFeedIndex(num);

	return (
		<ContainerDiv>
			<TitleDiv>
				<h2>그룹 피드</h2>
				<ul>
					<li>
						<Button
							type="button"
							onClick={() => setSort("latest")}
							disabled={sort === "latest"}
						>
							최신순
						</Button>
					</li>
					<li>
						<Button
							type="button"
							onClick={() => setSort("like")}
							disabled={sort === "like"}
						>
							좋아요순
						</Button>
					</li>
				</ul>
			</TitleDiv>

			{/* 추후 Feed Landing에서 컴포넌트 가져와서 변경 */}
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

export default GroupFeed;
