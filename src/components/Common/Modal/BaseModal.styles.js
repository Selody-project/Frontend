import styled from "styled-components";

export const ModalDiv = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: fit-content;
	z-index: ${({ isUpper }) => Number(Boolean(isUpper)) + 100};
	overflow: hidden;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: ${({ theme: { colors } }) => colors.white};
	padding: 20px;
`;

export const BackdropDiv = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: ${({ isUpper }) => Number(Boolean(isUpper)) + 100};
	background: rgba(0, 0, 0, 0.4);
`;

export const IconButton = styled.button`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	display: flex;
`;
