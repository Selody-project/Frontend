import styled from "styled-components";

export const ContainerDiv = styled.div`
	border: 1px solid ${({ theme: { colors } }) => colors.disabled_text};
	border-radius: 50px;
	padding: 36px 48px;
	color: ${({ theme: { colors } }) => colors.text_01};
	line-height: normal;

	& > h3 {
		font-size: 20px;
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.semibold};
	}
`;

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

export const AgreeLabel = styled.label`
	margin-top: 36px;
	width: fit-content;
	display: flex;
	align-items: center;
	cursor: pointer;

	#hidden-checkbox {
		display: none;
	}
	#shown-checkbox {
		background-color: ${({ theme: { colors } }) => colors.white};
		width: 20px;
		height: 20px;
		border: 1px solid black;
		border-radius: 4px;
	}
	#hidden-checkbox:checked + #shown-checkbox {
		background-image: url("src/assets/icon/ic-checked-mark.svg");
		background-size: contain;
	}

	& > span {
		margin-left: 8px;
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 20px;
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
