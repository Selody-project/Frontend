import styled from "styled-components";

export const MyPageContainer = styled.div`
	display: flex;
	margin: 50px 50px 0px 50px;
	font-family: "Inter", sans-serif;
`;

export const TabsContainer = styled.div`
	display: flex;
	flex-direction: column;

	& > h1 {
		font-size: 32px;
		font-weight: 600;
		margin: 20px 0px;
	}
`;

export const Tab = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 160px;
	padding: 12px 20px;
	margin-right: 10px;
	margin-bottom: 5px;
	border-radius: 50px;
	background-color: ${(props) => (props.selected ? "#6c63ff" : "transparent")};
	color: ${(props) => (props.selected ? "white" : "gray")};
	font-weight: ${(props) => (props.selected ? "bold" : "normal")};
	box-shadow: ${(props) =>
		props.selected ? "0px 4px 2px rgba(0, 0, 0, 0.25)" : "none"};
	cursor: pointer;
	transition: all 0.2s ease-in-out;
`;
