import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 90px 82px 0;
`;

export const FeedDiv = styled.div`
	margin-top: 50px;

	& > ul {
		display: flex;
		gap: 24px;
	}
`;

export const Button = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
	color: ${(props) => (props.disabled ? "#000" : "rgba(0,0,0,0.33)")};
	font-family: Inter;
	font-size: 18px;
	font-weight: 600;
	cursor: pointer;
	padding: 0;
`;
