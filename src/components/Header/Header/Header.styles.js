import styled from "styled-components";

import { SubHeaderDiv } from "../SubHeader/SubHeader.style";

export const ContainerHeader = styled.header`
	position: sticky;
	top: 0px;
	z-index: 90;
	background-color: white;
	padding-top: 60px;
`;

export const WrapDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 600;
	padding: 28px 32px;
	border-radius: 100px;
	box-shadow: 0px 5px 50px 4px rgba(0, 0, 0, 0.1);
`;

export const LeftDiv = styled.div`
	display: flex;
	align-items: center;
`;

export const LogoDiv = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

	& > img {
		width: 48px;
		height: 48px;
		margin-right: 4px;
	}

	& > h1 {
		color: ${({ theme }) => theme.colors.text_01};
		font-family: Montserrat;
		font-size: 30px;
		font-weight: 700;
		line-height: normal;
		& > span {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const TabUl = styled.ul`
	margin-left: 48px;
	display: flex;
	align-items: center;
	gap: 48px;
	font-size: 16px;
	font-family: Poppins;
	font-weight: 500;
	line-height: 180%;
	position: relative;

	& > li {
		height: 48px;
	}

	& > li:hover ${SubHeaderDiv} {
		display: block;
	}
`;

export const TabButton = styled.button`
	cursor: pointer;
	color: ${({ isActive, theme: { colors } }) =>
		isActive ? colors.primary : colors.text_02};
	font-weight: ${({ isActive }) => (isActive ? "600" : "500")};
	border-bottom: ${({ isActive, theme: { colors } }) =>
		isActive ? `2px solid ${colors.primary}` : 0};
	padding: 10px 8px 8px;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const RightDiv = styled(LeftDiv)``;

export const GroupCreateButton = styled.button`
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 100px;
	padding: 12px 36px;
	background-color: white;
	color: ${({ theme }) => theme.colors.primary};
	font-size: 13px;
	font-family: Inter;
	font-weight: 700;
	box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const ProfileDiv = styled.div`
	position: relative;
	margin-left: 28px;
`;

export const ProfileImg = styled.img`
	cursor: pointer;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	object-fit: contain;
`;
