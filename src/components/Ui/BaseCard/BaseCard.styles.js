import styled from "styled-components";

export const BaseCardLayoutDiv = styled.div`
	width: 100%;
	border-radius: ${({
		theme: {
			spacing: { borderRadius },
		},
	}) => borderRadius.default}px;
	background-color: ${({ theme: { colors } }) => colors.white};
	border: 1px solid #6c55fe;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
