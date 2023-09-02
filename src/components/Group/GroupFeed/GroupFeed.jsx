import React, { useState } from "react";
// import { useSelector } from "react-redux";

import Crown from "@/assets/icon/ic-crown.svg";
import Option from "@/assets/icon/ic-feed-option.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import {
	ContainerDiv,
	TitleDiv,
	Button,
	FeedDiv,
	OptionMenuDiv,
	TopDiv,
	InfoDiv,
	BottomDiv,
} from "./GroupFeed.styles";

const GroupFeed = () => {
	const [sort, setSort] = useState("latest");

	const [open, setOpen] = useState(false);
	const [openArr, setOpenArr] = useState([false]);

	// const groupInfoDetail = useSelector((state) => state.group.groupInfoDetail);
	// const { user } = useSelector((state) => state.auth);

	// console.log(groupInfoDetail?.leaderInfo.userId);
	// console.log(user?.userId);

	const handleOption = (num) => {
		const newOpen = [...openArr];
		newOpen[num] = !open;
		setOpenArr(newOpen);
		setOpen(!open);
	};

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
			<FeedDiv>
				<Option
					onClick={() => {
						handleOption(0);
					}}
				/>
				<OptionMenuDiv style={{ display: openArr[0] ? "block" : "none" }}>
					<ul>
						<li>수정</li>
						<li>삭제</li>
					</ul>
				</OptionMenuDiv>
				<TopDiv>
					<img src={SampleImg} alt="sampleimg" />
					<InfoDiv>
						<h3>
							그룹리더
							<Crown />
						</h3>
						<h4>15분 전</h4>
					</InfoDiv>
				</TopDiv>
				<BottomDiv>
					<p>
						오늘은 개발 스터디 그룹에서 알고리즘 대회에 참가했어! 문제를 풀면서
						서로 도움을 주고 받으며 즐거운 시간을 보냈어. 성장하는 모습을 느낄
						수 있어 뿌듯해
					</p>
				</BottomDiv>
			</FeedDiv>
			<FeedDiv>
				<Option
					onClick={() => {
						handleOption(1);
					}}
				/>
				<OptionMenuDiv style={{ display: openArr[1] ? "block" : "none" }}>
					<ul>
						<li>수정</li>
						<li>삭제</li>
					</ul>
				</OptionMenuDiv>
				<TopDiv>
					<img src={SampleImg} alt="sampleimg" />
					<InfoDiv>
						<h3>
							그룹리더
							<Crown />
						</h3>
						<h4>15분 전</h4>
					</InfoDiv>
				</TopDiv>
				<BottomDiv>
					<p>
						오늘은 개발 스터디 그룹에서 알고리즘 대회에 참가했어! 문제를 풀면서
						서로 도움을 주고 받으며 즐거운 시간을 보냈어. 성장하는 모습을 느낄
						수 있어 뿌듯해
					</p>
				</BottomDiv>
			</FeedDiv>
		</ContainerDiv>
	);
};

export default GroupFeed;
