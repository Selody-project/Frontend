import styled from "styled-components";

export const MenuWrapDiv = styled.div`
	position: absolute;
	top: calc(100% + 16px);
	right: calc(-100% - 24px);
	z-index: 99;
`;

export const DropdownWrapDiv = styled.div`
	position: absolute;
	padding: 14px 8px;
	top: 8px;
	width: calc(100% - 16px);
	height: calc(100% - 46px);
	overflow: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const HeaderDiv = styled.div`
	position: fixed;
	background-color: white;
	width: 224px;
	padding: 8px 12px;
	border-bottom: 1px solid black;

	& > h3 {
		font-family: Inter;
		font-size: 20px;
		font-weight: 600;
		line-height: 150%;
		letter-spacing: 0.4px;
	}
`;

export const BodyDiv = styled.div`
	margin-top: 68px;
`;
