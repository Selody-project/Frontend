import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@/assets/icon/ic-group-add.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import { getGroupInfo } from "@/features/group/group-service";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	MiddleInnerDiv,
	BottomDiv,
} from "./GroupProfile.styles";

const GroupProfile = () => {
	const inGroup = true;
	const dispatchFn = useDispatch();

	const groupInfo = useSelector((state) => state.group.groupInfo);
	// const groupList = useSelector((state) => state.group.groupList);

	useEffect(() => {
		// dispatchFn(
		// 	createGroup({
		// 		name: "testGroup112131",
		// 		description: "그룹 description 테스트123123",
		// 	}),
		// );
		// dispatchFn(getGroupList(2));

		// 추후 유저 그룹 조회 api를 통해 group id를 받아오고 해당 group id로 파라미터 수정
		dispatchFn(getGroupInfo(2));
	}, []);

	// console.log(groupInfo);

	return (
		<ContainerDiv>
			<TopDiv>
				<img src={SampleImg} alt="sampleimg" />
				<h3>{groupInfo?.name}</h3>
				<p>
					당신의 개발 열정을 키우고 함께
					<br />
					성장할 수 있는 공간, CodeCrafters
				</p>
			</TopDiv>
			<MiddleDiv>
				<MiddleInnerDiv>
					<h3>{groupInfo?.member}</h3>
					<h4>그룹원</h4>
				</MiddleInnerDiv>
				<MiddleInnerDiv>
					<h3>{groupInfo?.feed}</h3>
					<h4>작성된 피드</h4>
				</MiddleInnerDiv>
			</MiddleDiv>
			<BottomDiv>
				<button type="button">
					{inGroup ? (
						"그룹 나가기"
					) : (
						<>
							<AddIcon />
							그룹 참여 요청
						</>
					)}
				</button>
			</BottomDiv>
		</ContainerDiv>
	);
};

export default GroupProfile;
