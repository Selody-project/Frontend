import styled from "styled-components";

import BaseCard from "@/components/Base/BaseCard/BaseCard";

export const ScheduleItemDiv = styled(BaseCard)`
	display: flex;
	align-items: center;
	gap: 16px;
	height: 67px;
	min-height: 67px;
	padding-left: 15px;
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
