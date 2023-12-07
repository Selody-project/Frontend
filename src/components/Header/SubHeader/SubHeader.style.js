import styled from "styled-components";

export const SubHeaderDiv = styled.div`
	display: none;
	position: absolute;
	top: 100%;
	z-index: 2;

	&:hover {
		display: block;
	}
`;

export const SubTabUl = styled.ul`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.text_01};
	font-family: Inter;
	font-size: 16px;
	font-weight: 500;
	line-height: normal;
	gap: 48px;
	margin-top: 60px;
	white-space: nowrap;
`;

export const TabButton = styled.button`
	cursor: pointer;
	color: ${({ isActive, theme: { colors } }) => isActive && colors.primary};
`;
