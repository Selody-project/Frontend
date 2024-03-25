import styled from "styled-components";

export const GroupMenuDiv = styled.div`
	position: absolute;
	top: 61px;
	right: 0;

	height: 33px;

	display: flex;
	gap: 10px;

	& > .groupMembers {
		display: flex;
		align-items: center;
	}
`;
export const GroupMemberAvatar = styled.div`
	width: 26px;
	height: 26px;

	&:not(:last-child) {
		position: relative;
		z-index: ${({ priority }) => priority};
		margin-right: -5px;
	}

	// 그룹장
	&:first-child > svg {
		position: absolute;
		top: -16px;
	}

	background-color: ${({ theme: { colors } }) => colors.bg_01};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;