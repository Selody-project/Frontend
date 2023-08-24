import styled from "styled-components";

export const ContainerDiv = styled.div``;

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
	color: ${({ theme }) => theme.colors.text_01};

	& > li {
		height: 50%;
	}

	& > hr {
		border: 0;
		margin: 0 12px;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.disabled_text};
	}
`;

export const ItemButton = styled.button`
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
