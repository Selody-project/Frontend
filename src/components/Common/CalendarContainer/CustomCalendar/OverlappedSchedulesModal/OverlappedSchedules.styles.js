import styled from "styled-components";

export const ContainerDiv = styled.div`
	position: absolute;
	z-index: 99;
	border: 1px solid ${({ theme: { colors } }) => colors.disabled_text};
	padding: 34px 17px;
	background-color: ${({ theme: { colors } }) => colors.white};
	// 반응형 아님
	top: ${({ position }) => position.top}px;
	left: ${({ position }) => position.left}px;
	width: 350px;
`;

export const RelativeDiv = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
