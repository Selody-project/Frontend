import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import GroupCreateModal from "@/components/Common/GroupModal/GroupCreateModal/GroupCreateModal";
import { EmptyGroupListIcon } from "@/constants/iconConstants";
import { UI_TYPE } from "@/constants/uiConstants";
import { openCreateGroupModal } from "@/features/ui/ui-slice";

const EmptyUserGroup = ({ isRequest }) => {
	const dispatch = useDispatch();

	const { openedModal } = useSelector((state) => state.ui);

	const navigate = useNavigate();

	return (
		<LayoutDiv>
			<EmptyGroupListIcon />

			<h3>
				{isRequest ? "요청 중인 그룹이 없습니다." : "가입된 그룹이 없습니다."}
			</h3>
			<h4>
				{isRequest
					? "그룹 신청하기를 통해 그룹에 가입해 보세요."
					: "그룹을 만들거나 신청해 보세요."}
			</h4>
			<ButtonDiv>
				{!isRequest && (
					<button
						type="button"
						className="addButton"
						onClick={() => dispatch(openCreateGroupModal())}
					>
						그룹 만들기
					</button>
				)}
				<button type="button" onClick={() => navigate("/community?tab=search")}>
					그룹 신청하기
				</button>
			</ButtonDiv>

			{openedModal === UI_TYPE.CREATE_GROUP && <GroupCreateModal />}
		</LayoutDiv>
	);
};

export default EmptyUserGroup;

const LayoutDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	font-family: Inter;
	height: 486px;
	margin-top: 32px;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: 24px;
		font-weight: 500;
		margin-top: 18px;
	}

	& > h4 {
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 14px;
		margin-top: 14px;
	}
`;

export const ButtonDiv = styled.div`
	display: flex;
	gap: 20px;
	margin-top: 40px;

	& > button {
		text-align: center;
		background-color: ${({ theme: { colors } }) => colors.primary_light};
		width: 174px;
		height: 42px;
		color: ${({ theme: { colors } }) => colors.white};
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
		font-size: 15px;
		border-radius: 5px;
		cursor: pointer;

		&.addButton {
			background-color: ${({ theme: { colors } }) => colors.white};
			border: 1px solid ${({ theme: { colors } }) => colors.primary};
			color: ${({ theme: { colors } }) => colors.primary_light};
		}
	}
`;
