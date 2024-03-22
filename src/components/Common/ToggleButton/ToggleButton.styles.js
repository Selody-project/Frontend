import styled from "styled-components";

export const OuterDiv = styled.div`
	width: 64px;
	height: 30px;
	border-radius: 20px;
	background-color: ${({ isActive, theme: { colors } }) =>
		isActive ? colors.primary_light : colors.disabled_text};
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;

	& > div {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background-color: ${({ theme: { colors } }) => colors.white};
		position: absolute;
		left: ${({ isActive }) => (isActive ? "calc(100% - 26px)" : "4px")};
		transition: left 0.5s ease;
	}
`;
