import styled from "styled-components";

export const ContainerDiv = styled.div`
	font-family: Inter;
	text-align: center;
	padding: 0 22px 6px;

	& > img {
		width: 58px;
		height: 58px;
		border-radius: 50%;
		object-fit: cover;
		margin-top: 32px;
	}

	& > h2 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: 20px;
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
		margin-top: 12px;
	}

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 14px;
		margin: 12px 0 20px;
	}
`;
