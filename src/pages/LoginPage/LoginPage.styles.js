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
	margin-bottom: 60px;

	& > img {
		width: 196px;
		height: 196px;
	}

	& > h1 {
		margin: 20px 0;
		padding: 0;
		font-family: "Montserrat";
		font-size: 50px;
		font-weight: 700;
		color: #000000;
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
		font-weight: 500;
		line-height: 34px;
		color: #000000;
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
		font-weight: 800;
		font-size: 36px;
		line-height: 44px;
		color: #6c55fe;
	}
`;

export const Input = styled.input`
	padding: 16px;
	background-color: ${({ theme: { colors } }) => colors.primary_light};
	border: 1px solid transparent;
	border-radius: 4px;
	font-size: 14px;
	font-weight: 700;
	color: ${({ theme: { colors } }) => colors.primary};
	outline: none;

	&:focus {
		border-color: ${({ theme: { colors } }) => colors.primary};
	}

	&::placeholder {
		color: ${({ theme: { colors } }) => colors.disabled_02};
	}
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
		background-color: ${({ theme: { colors } }) => colors.primary_light};
		width: 20px;
		height: 20px;
		border-radius: 4px;
	}

	#hidden-checkbox:checked + #shown-checkbox {
		background-image: url("src/assets/icon/ic-checked-mark.svg");
		background-size: contain;
	}

	& > span {
		margin-left: 10px;
		color: black;
		font-size: 14px;
		font-weight: 500;
	}
`;

export const FindPasswordDiv = styled.div`
	text-align: right;

	& > span {
		color: #5c5e67;
		cursor: pointer;
		padding: 10px 0;
		font-size: 14px;
		font-weight: 500;
		font-family: "Montserrat";
		text-decoration: underline;
	}
`;

export const LoginButton = styled.button`
	padding: 16px 32px;
	background-color: ${({ theme: { colors } }) => colors.primary};
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 700;
	font-size: 16px;

	&:hover {
		background-color: #5b46e0;
	}
`;

export const SignUpButton = styled(LoginButton)`
	background-color: white;
	color: ${({ theme: { colors } }) => colors.primary};
	border: 1.5px solid ${({ theme: { colors } }) => colors.primary};

	&:hover {
		background-color: #f2f2f2;
	}
`;

export const DividerHr = styled.hr`
	width: 100%;
	height: 1px;
	background-color: #d9d9d9;
	border: none;
	margin: 18px 0;
`;

export const SocialLoginContainerDiv = styled.div`
	text-align: center;
	& > p {
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

	& > button {
		all: unset;
		width: 52px;
		height: 52px;
		margin-bottom: 8px;
		cursor: pointer;
	}

	& > span {
		font-size: 12px;
		color: #a1a1a1;
		opacity: 0.7;
	}
`;
