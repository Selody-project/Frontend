import styled from "styled-components";

export const LandingHeaderContainerDiv = styled.div`
	margin-top: 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme: { colors } }) => colors.white};
	font-family: Montserrat;
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.bold};
	& > .logo {
		font-size: 50px;
	}
	& > .login {
		width: 81px;
		height: 29px;
		font-size: ${({
			theme: {
				typography: { size },
			},
		}) => size.m2};
	}
`;
