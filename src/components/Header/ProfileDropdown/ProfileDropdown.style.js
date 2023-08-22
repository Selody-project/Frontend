import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const MenuWrapDiv = styled.div`
	position: absolute;
	top: calc(100% + 24px);
	right: 0;
	z-index: 99;
	height: 86px;
`;

export const MenuUl = styled.ul`
	position: absolute;
	top: 15px;
	width: 100%;
	height: calc(100% - 15px);

	& > li {
		height: 50%;
	}

	& > hr {
		border: 0;
		margin: 0 12px;
		height: 1px;
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

export const ItemButton = styled.button`
	all: unset;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	letter-spacing: 0.28px;
`;

export const BackdropDiv = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.4);
`;
