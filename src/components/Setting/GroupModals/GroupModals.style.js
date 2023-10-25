import styled from "styled-components";

export const ContainerDiv = styled.div`
	padding: 0 40px;
	font-family: Inter;
	text-align: center;
	line-height: normal;
`;

export const TitleHeader = styled.header`
	margin-top: 18px;
	font-size: 18px;
	font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const ContentMain = styled.main`
	margin-top: 14px;

	& > p {
		color: ${({ theme }) => theme.colors.disabled_text};
		font-size: 14px;
		font-weight: ${({ theme }) => theme.typography.weight.medium};
	}

	.margin {
		margin-bottom: 40px;
	}
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.btn_01};
	color: ${({ theme }) => theme.colors.white};
	font-size: 15px;
	font-weight: ${({ theme }) => theme.typography.weight.regular};
	padding: 16px 0;
	width: 100%;
	border-radius: 5px;
	cursor: pointer;

	&:disabled {
		background-color: ${({ theme: { colors } }) => colors.disabled_text};
		cursor: not-allowed;
	}
`;

export const ModalFooter = styled.footer`
	margin-top: 12px;
	font-size: 12px;
	font-weight: ${({ theme }) => theme.typography.weight.medium};

	& > p {
		color: ${({ theme }) => theme.colors.disabled_text};
		margin-bottom: 4px;
	}

	& > button {
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: underline;
		cursor: pointer;
	}
`;

export const SelectWrapDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 32px 0;
`;

export const SelectBoxDiv = styled.div`
	background-color: ${({ isSelected, theme: { colors } }) =>
		isSelected ? colors.disabled_text : colors.white};
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
