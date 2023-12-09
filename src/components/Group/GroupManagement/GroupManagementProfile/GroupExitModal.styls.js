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
	margin-top: 48px;
	margin: 48px 0 14px;

	& > p {
		color: ${({ theme }) => theme.colors.disabled_text};
		font-size: 14px;
		font-weight: ${({ theme }) => theme.typography.weight.medium};
	}

	.margin {
		margin-bottom: 40px;
	}

	.leave-modal {
		margin: 48px 0;
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
