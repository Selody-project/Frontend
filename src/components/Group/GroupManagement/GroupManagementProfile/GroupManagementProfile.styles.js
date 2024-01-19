import styled from "styled-components";

export const InfoDiv = styled.div`
	margin-top: 40px;
	display: flex;
	align-items: center;
	gap: 30px;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		width: 56px;
	}

	& > img {
		width: 80px;
		height: 80px;
		border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
		border-radius: 50%;
		object-fit: cover;
	}

	& > label {
		color: ${({ theme: { colors } }) => colors.disabled_text};
		font-size: 14px;
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		text-decoration: underline;
		cursor: pointer;
	}

	& > textarea {
		width: calc(100% - 110px);
		height: 84px;
		background-color: ${({ theme: { colors } }) => colors.bg_01};
		border: 0;
		padding: 12px;

		&:focus {
			outline: 1px solid ${({ theme: { colors } }) => colors.primary};
		}
	}
`;

export const ProfileInput = styled.input`
	display: none;
`;

export const InfoInput = styled.input`
	width: 280px;
	background-color: ${({ theme: { colors } }) => colors.bg_01};
	border: 0;
	padding: 12px;

	&:focus {
		outline: 1px solid ${({ theme: { colors } }) => colors.primary};
	}
`;

export const ToggleButtonDiv = styled.div``;

export const SaveButtonDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 40px;
`;

export const SaveButton = styled.button`
	padding: 12px 28px;
	background-color: ${({ theme: { colors } }) => colors.primary_light};
	border-radius: 5px;
	color: ${({ theme: { colors } }) => colors.white};
	font-size: 15px;
	font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	cursor: pointer;

	&:disabled {
		background-color: ${({ theme: { colors } }) => colors.disabled_text};
		cursor: not-allowed;
	}
`;

export const BottomButtonDiv = styled.div`
	margin-top: 40px;
	display: flex;
	gap: 26px;
`;

export const DividerHr = styled.hr`
	margin: 40px 0 0 0;
	border: none;
	border-top: 1px solid ${({ theme: { colors } }) => colors.btn_02};
`;

export const ExitButton = styled.button`
	width: 150px;
	padding: 12px 0;
	text-align: center;
	border: 1px solid ${({ theme: { colors } }) => colors.primary_light};
	border-radius: 5px;
	color: ${({ theme: { colors } }) => colors.primary_light};
	font-size: 15px;
	font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	box-sizing: border-box;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme: { colors } }) => colors.bg_02};
	}
`;

export const DeleteButton = styled(ExitButton)`
	background-color: ${({ theme: { colors } }) => colors.sunday};
	color: ${({ theme: { colors } }) => colors.white};
	border: none;
`;
