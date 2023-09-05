import React from "react";

import Crown from "@/assets/icon/ic-crown.svg";

import { ContainerDiv, FeedDiv, ProfileDiv, TextDiv } from "./GroupFeed.styles";

const GroupFeed = () => {
	return (
		<ContainerDiv>
			<FeedDiv>
				<ProfileDiv />
				<TextDiv>
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
				</TextDiv>
			</FeedDiv>
			<FeedDiv>
				<ProfileDiv />
				<TextDiv>
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
				</TextDiv>
			</FeedDiv>
		</ContainerDiv>
	);
};

export default GroupFeed;
