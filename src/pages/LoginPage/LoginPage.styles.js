import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Arial, sans-serif;
	height: 100vh;
	padding: 0 180px;
	gap: 132px;
`;

export const LeftSideDiv = styled.div`
	flex: 1;
	margin-bottom: 120px;

	& > img {
		width: 196px;
		height: 196px;
	}

	& > h1 {
		margin: 20px 0;
		padding: 0;
		font-family: "Montserrat";
		font-size: 50px;
		font-weight: ${({ theme }) => theme.typography.weight.bold};
		color: ${({ theme: { colors } }) => colors.text_01};
		line-height: normal;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

		& > span {
			color: ${({ theme: { colors } }) => colors.primary};
		}
	}
	& > h3 {
		margin: 0;
		font-family: "Spoqa Han Sans Neo";
		font-style: normal;
		font-size: 28px;
		font-weight: ${({ theme }) => theme.typography.weight.semibold};
		line-height: normal;

		color: ${({ theme: { colors } }) => colors.text_01};
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}
`;

export const RightSideDiv = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const LoginForm = styled.form`
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

export const LoginButton = styled.button`
	padding: 16px 32px;
	background-color: ${({ theme: { colors } }) => colors.primary};
	color: ${({ theme: { colors } }) => colors.white};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	font-size: 16px;
	letter-spacing: 0.32px;
`;

export const SignUpButton = styled(LoginButton)`
	background-color: ${({ theme: { colors } }) => colors.white};
	color: ${({ theme: { colors } }) => colors.primary};
	border: 1.5px solid ${({ theme: { colors } }) => colors.primary};
`;

export const DividerHr = styled.hr`
	width: 100%;
	height: 1px;
	background-color: ${({ theme: { colors } }) => colors.disabled_text};
	border: none;
	margin: 18px 0;
`;

export const SocialLoginContainerDiv = styled.div`
	text-align: center;
	& > p {
		color: ${({ theme: { colors } }) => colors.text_02};
		margin: 10px;
	}
	& > div {
		margin-top: 28px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 60px;
	}
`;

export const SocialLoginBtnContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;

	& > button {
		width: 52px;
		height: 52px;
		margin-bottom: 8px;
	}

	& > span {
		font-size: 12px;
		color: ${({ theme }) => theme.colors.disabled_text};
		opacity: 0.7;
	}
`;
