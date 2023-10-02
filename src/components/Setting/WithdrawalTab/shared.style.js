import styled from "styled-components";

export const ContentP = styled.p`
	margin-top: 64px;
	color: ${({ theme: { colors } }) => colors.text_02};
	font-size: 20px;
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.medium};
	line-height: 2;

	& > span {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.semibold};
	}
`;

export const ButtonWrapDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 86px;
	gap: 52px;
`;

export const WithdrawalButton = styled.button`
	padding: 12px 60px;
	background-color: ${({ theme: { colors } }) => colors.primary_light};
	border-radius: 5px;
	color: ${({ theme: { colors } }) => colors.white};
	font-size: 15px;
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.semibold};
	cursor: pointer;

	&:disabled {
		background-color: ${({ theme: { colors } }) => colors.btn_02};
		cursor: not-allowed;
	}
`;
