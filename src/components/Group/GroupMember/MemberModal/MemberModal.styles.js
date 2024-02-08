import styled from "styled-components";

export const ContainerDiv = styled.div`
	font-family: Inter;
	max-height: 468px;
	overflow-y: auto;
	margin-top: -14px;
	scrollbar-width: none;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const TitleH2 = styled.h2`
	font-size: 18px;
	font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
`;

export const ContentDiv = styled.div`
	margin-top: 38px;
`;

export const MemberUl = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`;

export const MemberLi = styled.li`
	display: flex;
	gap: 110px;
	padding: 0 14px;
`;

export const ProfileDiv = styled.div`
	display: flex;
	gap: 24px;
	align-items: center;

	& > img {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		object-fit: cover;
	}

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: 15px;
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		width: 42px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const ButtonDiv = styled.div`
	display: flex;
	gap: 40px;

	& > button {
		cursor: pointer;
	}
`;

export const InfoDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-right: 18px;

	& > span > svg {
		width: 10px;
		height: 10px;
	}

	& > h4 {
		color: ${({ theme: { colors } }) => colors.text_03};
		font-size: 12px;
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
	}
`;
