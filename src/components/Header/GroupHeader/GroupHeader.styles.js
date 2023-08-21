import styled from "styled-components";

export const GroupHeaderNav = styled.nav`
	margin-left: 196px;
`;

export const GroupHeaderUl = styled.ul`
	width: 227px;
	display: flex;
	justify-content: space-around;
	& > li > a {
		color: ${({ theme: { colors } }) => colors.text_01};
		&.activated {
			color: ${({ theme: { colors } }) => colors.primary};
			font-weight: ${({
				theme: {
					typography: {
						weight: { semibold },
					},
				},
			}) => semibold};
		}
	}
`;
