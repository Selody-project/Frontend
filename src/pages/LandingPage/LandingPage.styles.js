import styled from "styled-components";

export const LandingPageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background: ${({ theme: { colors } }) =>
		`linear-gradient(
		90deg,
		${colors.primary_light} 0%,
		#162F58 100%
		)`};
	& > .max-layout {
		width: 100%;
		max-width: 1440px;
		& > * {
			margin-left: 40px;
			margin-right: 40px;
		}
	}
`;
