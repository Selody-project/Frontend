import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	margin: 70px 30px;
	gap: 32px;
	font-family: "Inter";
	background-color: ${({ theme: { colors } }) => colors.white};
`;

export const TabsAside = styled.aside`
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-top: 70px;
	height: 100vh;

	& > h1 {
		font-size: 32px;
		font-weight: 600;
		margin: 20px 0px;
	}
`;

export const TabsUl = styled.ul`
	position: sticky;
	top: 320px;
`;

export const TabLi = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 132px;
	padding: 16px 32px;
	border-radius: 50px;
	background-color: ${({ isSelected, theme: { colors } }) =>
		isSelected ? colors.primary : "transparent"};
	color: ${({ isSelected, theme: { colors } }) =>
		isSelected ? colors.white : colors.text_02};
	font-weight: ${({
		isSelected,
		theme: {
			typography: { weight },
		},
	}) => (isSelected ? weight.semibold : weight.regular)};
	box-shadow: ${({ isSelected }) =>
		isSelected ? "0px 4px 2px rgba(0, 0, 0, 0.25)" : "none"};
	cursor: pointer;
`;

export const MainSection = styled.section`
	width: 100%;
	/* margin-left: 228px; */

	& > h1 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: 32px;
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.medium};
		line-height: normal;
		margin-bottom: 28px;
	}
`;
