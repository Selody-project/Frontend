import styled from "styled-components";

import lightTheme from "@/styles/theme";

export const GroupHeaderNav = styled.nav`
	margin-left: 196px;
`;

export const GroupHeaderUl = styled.ul`
	width: 227px;
	display: flex;
	justify-content: space-around;
	& > li > a {
		color: ${lightTheme.colors.text_01};
		&.activated {
			color: ${lightTheme.colors.primary};
			font-weight: ${lightTheme.typography.weight.semibold};
		}
	}
`;
