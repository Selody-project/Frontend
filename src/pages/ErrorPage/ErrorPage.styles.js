// errorpage styled-component

import styled from "styled-components";

export const ErrorPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background-color: #f5f5f5;
`;

export const ErrorPageTitle = styled.h1`
	font-size: 3rem;
	font-weight: 700;
	margin-bottom: 1rem;
`;

export const ErrorPageText = styled.p`
	font-size: 1.5rem;
	font-weight: 500;
	margin-bottom: 1rem;
`;

export const ErrorPageButton = styled.button`
	font-size: 1.5rem;
	font-weight: 500;
	padding: 0.5rem 1rem;

	&:hover {
		cursor: pointer;
	}
`;
