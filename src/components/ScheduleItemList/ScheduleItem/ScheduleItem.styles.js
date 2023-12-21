import styled from "styled-components";

import BaseCard from "@/components/UI/BaseCard/BaseCard";

export const ScheduleItemLi = styled.li`
	width: 100%;
	cursor: pointer;
`;

export const CardDiv = styled(BaseCard)`
	display: flex;
	align-items: center;
	gap: 16px;
	width: 100%;
	height: 67px;
	min-height: 67px;
	padding-left: 15px;
`;

export const ColoredCircleDiv = styled.div`
	border-radius: 50%;
	border: 1px solid ${({ theme: { colors } }) => colors.disabled_text};
	background-color: ${(props) => props.bgColor};
	width: 24px;
	height: 24px;
`;

export const ScheduleItemContentDiv = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 38px;
	color: ${({ theme: { colors } }) => colors.text_03};
	font-size: ${({
		theme: {
			typography: { size },
		},
	}) => size.s2};
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.medium};
	& > div {
		display: flex;
		align-items: center;
		& > .recur {
			background-color: ${({ theme: { colors } }) => colors.primary};
			width: 39px;
			height: 17px;
			line-height: 17px;
			text-align: center;
			border-radius: 10px;
			color: ${({ theme: { colors } }) => colors.white};
			font-size: 10px;
		}
	}
`;

export const ScheduleItemRightButtonsDiv = styled.div`
	margin-right: 8px;
	display: flex;
	gap: 16px;
	& > button {
		display: flex;
		align-items: center;
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`;
