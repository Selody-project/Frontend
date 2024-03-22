import styled from "styled-components";

export const ContainerDiv = styled.div`
	font-family: Inter;
	text-align: center;
	line-height: normal;
	padding: 0 22px 6px;

	&.delete-modal {
		padding-bottom: 0;
	}
`;

export const TitleH2 = styled.h2`
	margin-top: 32px;
	font-size: 18px;
	font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const ContentDiv = styled.div`
	&.delegate-modal {
		margin-top: 14px;

		& > p {
			margin: 0;
		}
	}

	&.delete-modal > p {
		margin: 36px 0;
	}

	& > p {
		color: ${({ theme }) => theme.colors.disabled_text};
		font-size: 14px;
		font-weight: ${({ theme }) => theme.typography.weight.medium};
		margin: 48px 0;
	}
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.btn_01};
	color: ${({ theme }) => theme.colors.white};
	font-size: 15px;
	font-weight: ${({ theme }) => theme.typography.weight.regular};
	width: 324px;
	height: 48px;
	border-radius: 5px;
	cursor: pointer;

	&:disabled {
		background-color: ${({ theme: { colors } }) => colors.disabled_text};
		cursor: not-allowed;
	}
`;

export const BottomDiv = styled.div`
	margin-top: 16px;
	font-size: 12px;
	font-weight: ${({ theme }) => theme.typography.weight.medium};
	color: ${({ theme }) => theme.colors.sunday};
`;

export const SelectWrapUl = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 290px;
	overflow: auto;
	gap: 16px;
	padding: 32px 0;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const SelectBoxLi = styled.li`
	background-color: ${({ isSelected, theme: { colors } }) =>
		isSelected ? colors.disabled_text : colors.white};
	width: 324px;
	display: flex;
	align-items: center;
	padding: 10px;
	border: 1px solid ${({ theme }) => theme.colors.disabled_text};
	cursor: pointer;

	& > div {
		width: 24px;
		height: 24px;
		border: 1px solid ${({ theme }) => theme.colors.disabled_text};
		border-radius: 50%;
		overflow: hidden;

		& > svg {
			width: 24px;
			height: 24px;
		}
	}

	& > span {
		margin-left: 16px;
		font-size: 15px;
		color: ${({ isSelected, theme: { colors } }) =>
			isSelected ? colors.white : colors.text_02};
	}
`;
