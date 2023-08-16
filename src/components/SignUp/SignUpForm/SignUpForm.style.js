import styled from "styled-components";

export const StyledSignUpForm = styled.form`
	font-family: "Spoqa Han Sans Neo";
	font-weight: bold;
	font-size: 18px;
`;

export const InputContainerDiv = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin: 18px 0 32px 0;
`;

export const Input = styled.input`
	width: 100%;
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

const Button = styled.button`
	border: none;
	background-color: ${({ isActive, theme: { colors } }) =>
		isActive ? colors.primary : colors.disabled_02};
	cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};

	&:hover {
		background-color: ${({ isActive, theme: { colors } }) =>
			isActive ? "#5b46e0" : colors.disabled_02};
	}
`;

export const DuplicateCheckButton = styled(Button)`
	width: 150px;
	height: 48px;
	color: #ffffff;
	opacity: 0.8;
	border: none;
	border-radius: 0 4px 4px 0;
`;

export const SignUpButton = styled(Button)`
	width: 100%;
	margin-top: 40px;
	padding: 20px 0;
	color: #ffffff;
	font-size: 16px;
	font-weight: 700;
	border: none;
	border-radius: 5px;
`;
