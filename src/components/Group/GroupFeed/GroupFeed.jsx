import React, { useState } from "react";

import Crown from "@/assets/icon/ic-crown.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import {
	ContainerDiv,
	TitleDiv,
	Button,
	FeedDiv,
	TopDiv,
	InfoDiv,
	BottomDiv,
} from "./GroupFeed.styles";

const GroupFeed = () => {
	const [sort, setSort] = useState("latest");

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
