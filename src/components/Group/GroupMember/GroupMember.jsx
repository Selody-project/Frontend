import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Option from "@/assets/icon/ic-feed-option.svg";
import RequestCheck from "@/assets/icon/ic-request-check.svg";
import RequestClose from "@/assets/icon/ic-request-close.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import {
	getGroupInfoDetail,
	getGroupRequestMemberList,
} from "@/features/group/group-service";

import {
	ContainerDiv,
	MemberDiv,
	MemberInnerDiv,
	MemberH3,
	MemberUl,
	ButtonDiv,
	ButtonInnerDiv,
	OptionMenuDiv,
} from "./GroupMember.styles";

const GroupMember = () => {
	const [open, setOpen] = useState(false);
	const [openArr, setOpenArr] = useState([false]);

	const { user } = useSelector((state) => state.auth);
	const dispatchFn = useDispatch();

	const groupInfoDetail = useSelector((state) => state.group.groupInfoDetail);

	const groupRequestMemberList = useSelector(
		(state) => state.group.groupRequestMemberList,
	);

	const handleOption = (num) => {
		const newOpen = [...openArr];
		newOpen[num] = !open;
		setOpenArr(newOpen);
		setOpen(!open);
	};

	useEffect(() => {
		// 추후 유저 그룹 조회 api를 통해 group id를 받아오고 해당 group id로 파라미터 수정
		dispatchFn(getGroupInfoDetail(2));
		dispatchFn(getGroupRequestMemberList(2));
	}, []);

	return (
		<ContainerDiv>
			<MemberDiv>
				<MemberInnerDiv>
					<MemberH3>내 프로필</MemberH3>
					<MemberUl>
						<li>
							<img src={SampleImg} alt="sampleImg" />
							<h4>{user?.nickname}</h4>
						</li>
					</MemberUl>
				</MemberInnerDiv>
			</MemberDiv>
			<MemberDiv>
				<MemberInnerDiv>
					<MemberH3>그룹원 신청</MemberH3>
					<MemberUl>
						{groupRequestMemberList.map((info) => (
							<li key={info.member.userId}>
								<img src={SampleImg} alt="sampleImg" />
								<h4>{info.member.nickname}</h4>
								<ButtonDiv>
									<ButtonInnerDiv>
										<button type="button">
											<RequestCheck />
										</button>
										<h5>수락</h5>
									</ButtonInnerDiv>
									<ButtonInnerDiv>
										<button type="button">
											<RequestClose />
										</button>
										<h5>거절</h5>
									</ButtonInnerDiv>
								</ButtonDiv>
							</li>
						))}
					</MemberUl>
				</MemberInnerDiv>
				<hr />
				<MemberInnerDiv>
					<MemberH3>그룹원</MemberH3>
					<MemberUl>
						{groupInfoDetail?.information.memberInfo.map((info) => (
							<li key={info.userId}>
								<img src={SampleImg} alt="sampleImg" />
								<h4>{info.nickname}</h4>
								<button type="button">
									<Option
										onClick={() => {
											handleOption(info.userId);
										}}
									/>
									<OptionMenuDiv
										style={{ display: openArr[info.userId] ? "flex" : "none" }}
									>
										내보내기
									</OptionMenuDiv>
								</button>
							</li>
						))}
					</MemberUl>
				</MemberInnerDiv>
			</MemberDiv>
		</ContainerDiv>
	);
};

export default GroupMember;
