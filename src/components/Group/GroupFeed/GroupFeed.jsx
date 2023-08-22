import React from "react";

import Crown from "@/assets/icon/ic-crown.svg";

import {
	ContainerDiv,
	TitleDiv,
	SortDiv,
	FeedDiv,
	ProfileDiv,
	InfoDiv,
} from "./GroupFeed.styles";

const GroupFeed = () => {
	return (
		<ContainerDiv>
			<TitleDiv>
				<h2>그룹 피드</h2>
				<SortDiv>
					<h3>최신순</h3>
					<h3>좋아요 순</h3>
				</SortDiv>
			</TitleDiv>

			{/* 추후 Feed Landing에서 컴포넌트 가져와서 변경 */}
			<FeedDiv>
				<ProfileDiv />
				<InfoDiv>
					<h3>
						그룹리더
						<span>
							<Crown />
						</span>
					</h3>
					<h4>15분 전</h4>
					<p>
						오늘은 개발 스터디 그룹에서 알고리즘 대회에 참가했어! 문제를 풀면서
						서로 도움을 주고 받으며 즐거운 시간을 보냈어. 성장하는 모습을 느낄
						수 있어 뿌듯해
					</p>
				</InfoDiv>
			</FeedDiv>
		</ContainerDiv>
	);
};

export default GroupFeed;
