import styled from "styled-components";

export const StyledLoginForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	gap: 18px;

	& > h1 {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: ${({ theme }) => theme.typography.weight.extrabold};
		font-size: 36px;
		line-height: 44px;
		color: ${({ theme: { colors } }) => colors.primary};
	}
`;

export const InputContainerDiv = styled.div`
	margin-top: 34px;
	display: flex;
	flex-direction: column;
	gap: 18px;
`;

export const Input = styled.input`
	padding: 16px;
	background-color: ${({ theme: { colors } }) => colors.bg_01};
	border: 1px solid transparent;
	border-radius: 4px;
	font-size: 16px;
	font-weight: ${({ theme }) => theme.typography.weight.regular};
	font-family: Inter;
	line-height: 24px;
	letter-spacing: 0.5px;
	color: ${({ theme: { colors } }) => colors.text_01};
	outline: none;

	&:focus {
		border-color: ${({ theme: { colors } }) => colors.primary};
		background-color: ${({ theme: { colors } }) => colors.white};
	}

	&::placeholder {
		color: ${({ theme: { colors } }) => colors.disabled_text};
	}
`;

export const LoginAssistanceDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const EmailSaveLabel = styled.label`
	width: fit-content;
	display: flex;
	align-items: center;
	cursor: pointer;

	#hidden-checkbox {
		display: none;
	}

	#shown-checkbox {
		background-color: ${({ theme: { colors } }) => colors.white};
		width: 15px;
		height: 15px;
		border: 1px solid black;
		border-radius: 4px;
	}

	#hidden-checkbox:checked + #shown-checkbox {
		background-image: url("src/assets/icon/ic-checked-mark.svg");
		background-size: contain;
	}

	& > span {
		margin-left: 8px;
		font-family: Inter;
		font-size: 14px;
		font-weight: ${({ theme }) => theme.typography.weight.regular};
		line-height: normal;
	}
`;

export const FindPasswordDiv = styled.div`
	text-align: right;
	margin: 10px 0;

	& > span {
		color: ${({ theme: { colors } }) => colors.text_02};
		cursor: pointer;
		font-size: 14px;
		font-weight: ${({ theme }) => theme.typography.weight.semibold};
		font-family: Spoqa Han Sans Neo;
		line-height: normal;
		text-decoration: underline;
	}
`;

export const Button = styled.button`
	padding: 16px 32px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	font-size: 16px;
	letter-spacing: 0.32px;
`;

export const LoginButton = styled(Button)`
	background-color: ${({ theme: { colors } }) => colors.primary};
	color: ${({ theme: { colors } }) => colors.white};

	&:hover {
		background-color: #4c2fff;
	}

	&:active {
		background-color: #3515fa;
	}
`;

export const SignUpButton = styled(Button)`
	background-color: ${({ theme: { colors } }) => colors.white};
	color: ${({ theme: { colors } }) => colors.primary};
	border: 1.5px solid ${({ theme: { colors } }) => colors.primary};
`;
