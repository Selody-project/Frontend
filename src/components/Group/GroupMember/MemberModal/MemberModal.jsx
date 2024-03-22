import React from "react";

import BaseModal from "@/components/Common/Modal/BaseModal";
import { ACCESS_LEVEL_DATA } from "@/constants/accessConstants";

import {
	ContainerDiv,
	TitleH2,
	ContentDiv,
	MemberUl,
	MemberLi,
	ProfileDiv,
	InfoDiv,
} from "./MemberModal.styles";

const MemberModal = ({ memberList }) => {
	return (
		<BaseModal>
			<ContainerDiv>
				<TitleH2>그룹원</TitleH2>
				<ContentDiv>
					<MemberUl>
						{memberList.map((memberData) => (
							<MemberLi key={memberData.member.nickname}>
								<ProfileDiv>
									<img
										src={memberData.member.image}
										alt={`${memberData.member.nickname}님의 이미지`}
									/>
									<h3>{memberData.member.nickname}</h3>
								</ProfileDiv>
								<InfoDiv>
									{ACCESS_LEVEL_DATA.map(
										(data) =>
											memberData.accessLevel === data.accessLevel && (
												<span key={data.accessLevel}>{data.icon}</span>
											),
									)}
									<h4>{memberData.accessLevel}</h4>
								</InfoDiv>
							</MemberLi>
						))}
					</MemberUl>
				</ContentDiv>
			</ContainerDiv>
		</BaseModal>
	);
};

export default MemberModal;
