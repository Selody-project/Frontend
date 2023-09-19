import styled from "styled-components";

export const ContainerDiv = styled.div`
	border-radius: 10px;
	/* opacity: 0.6; */
	filter: blur(0.6);
	background: ${({ theme: { colors } }) => colors.bg_01};
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	padding: 20px 32px;
`;

export const UpperDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const GroupNameDiv = styled.div`
	display: flex;
	align-items: center;

	& > span {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: 18px;
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.semibold};
	}

	& > svg {
		margin: 0px 18px 0px 9px;
		cursor: pointer;
	}

	& > div {
		padding: 5px 20px;
		border: 1px solid ${({ theme: { colors } }) => colors.primary};
		border-radius: 14px;
		color: ${({ theme: { colors } }) => colors.primary};
		font-size: 14px;
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.medium};
	}
`;

export const ButtonWrapDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const Button = styled.button`
	background-color: ${({ theme: { colors } }) => colors.primary_light};
	border-radius: 5px;
	color: ${({ theme: { colors } }) => colors.white};
	font-size: 14px;
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.semibold};
	width: 140px;
	padding: 8px 0;
	text-align: center;
	cursor: pointer;
`;

export const DelegateButton = styled(Button)`
	background-color: ${({ theme: { colors } }) => colors.bg_01};
	border: 1px solid ${({ theme: { colors } }) => colors.primary};
	color: ${({ theme: { colors } }) => colors.text_02};
`;

export const DividerHr = styled.hr`
	border: 0;
	height: 1px;
	background-color: ${({ theme: { colors } }) => colors.btn_02};
	margin: 20px 0;
`;

export const LowerDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 125px;
	padding-left: 36px;
`;

export const ToggleDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 48px;
	cursor: pointer;
`;

export const TitleSpan = styled.span``;
