import styled from "styled-components";

export const ModalWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: fit-content;
	z-index: 100;
	overflow: hidden;
	border-radius: 10px;
	padding: 2rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const BackdropWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.4);
`;

export const ModalHeaderDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;
	font-weight: 600;
	line-height: normal;
	position: relative;
	width: 100%;
	margin-bottom: 24px;
`;

export const IconButton = styled.button`
	all: unset;
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
`;
