import styled from "styled-components";

import { SubHeaderDiv } from "@/components/Header/SubHeader/SubHeader.style";

export const TabUl = styled.ul`
	display: flex;
	align-items: center;
	gap: 48px;
	font-weight: ${({ theme: { typography } }) => typography.weight.medium};

	&.header {
		font-family: Poppins;
		line-height: 180%;
		position: relative;
		margin-left: 48px;

		& > li:hover ${SubHeaderDiv} {
			display: block;
		}
	}

	&.subheader {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-family: Inter;
		line-height: normal;
		margin-top: 60px;
		white-space: nowrap;
	}
`;

export const TabButton = styled.button`
	cursor: pointer;
	color: ${({ isActive, theme: { colors } }) =>
		isActive ? colors.primary : colors.text_02};

	&.header {
		font-weight: ${({ isActive, theme: { typography } }) =>
			isActive ? typography.weight.semibold : typography.weight.medium};
		border-bottom: ${({ isActive, theme: { colors } }) =>
			isActive ? `2px solid ${colors.primary}` : 0};
		padding: 10px 0;

		&:hover {
			color: ${({ theme: { colors } }) => colors.primary};
		}
	}
`;
