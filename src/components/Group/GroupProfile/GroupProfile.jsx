import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AddIcon from "@/assets/icon/ic-group-add.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import { inqueryUserGroup } from "@/features/user/user-service";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	MiddleInnerDiv,
	BottomDiv,
} from "./GroupProfile.styles";

const GroupProfile = ({ groupInfo }) => {
	const param = useParams();
	const dispatch = useDispatch();

	const userGroup = useSelector((state) => state.user.userGroupList);

	const [isGroupMember, setIsGroupMember] = useState(false);

	useEffect(() => {
		dispatch(inqueryUserGroup());
	}, []);

	useEffect(() => {
		userGroup?.groupList?.forEach((info) => {
			if (info.groupId === Number(param.id)) {
				setIsGroupMember(true);
			}
		});
	}, [userGroup]);

	return (
		<ContainerDiv>
			<TopDiv>
				<img src={SampleImg} alt="sampleimg" />
				<h3>{groupInfo?.information.name}</h3>
				<p>{groupInfo?.information.description}</p>
			</TopDiv>
			<MiddleDiv>
				<MiddleInnerDiv>
					<h3>{groupInfo?.information.member.toLocaleString()}</h3>
					<h4>그룹원</h4>
				</MiddleInnerDiv>
				<MiddleInnerDiv>
					<h3>{groupInfo?.information.feed.toLocaleString()}</h3>
					<h4>작성된 피드</h4>
				</MiddleInnerDiv>
			</MiddleDiv>
			<BottomDiv>
				<button type="button">
					{isGroupMember ? (
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
