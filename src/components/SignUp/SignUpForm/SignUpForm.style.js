import styled from "styled-components";

export const StyledSignUpForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 32px;
	font-family: "Spoqa Han Sans Neo";
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	font-size: 18px;
	line-height: normal;

	& label {
		color: ${({ theme: { colors } }) => colors.text_01};
	}
`;

export const InputContainerDiv = styled.div``;

export const InputInnerDiv = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-top: 18px;
`;

export const Input = styled.input`
	width: 100%;
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

const Button = styled.button`
	border: none;
	background-color: ${({ isActive, theme: { colors } }) =>
		isActive ? colors.primary : colors.disabled_text};
	cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
	color: ${({ theme: { colors } }) => colors.white};
	font-family: Spoqa Han Sans Neo;
	font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const DuplicateCheckButton = styled(Button)`
	padding: 16px 28px;
	white-space: nowrap;
	opacity: 0.8;
	border: none;
	border-radius: 0 4px 4px 0;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.5px;
`;

export const SignUpButton = styled(Button)`
	width: 100%;
	margin-top: 40px;
	padding: 20px 0;
	text-align: center;
	font-size: 16px;
	line-height: normal;
	letter-spacing: 0.32px;
	border: none;
	border-radius: 5px;

	&:not(:disabled):hover {
		background-color: #${({ theme: { colors } }) => colors.btn_04};
	}

	&:not(:disabled):active {
		background-color: #${({ theme: { colors } }) => colors.btn_05};
	}
`;
