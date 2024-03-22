import styled from "styled-components";

export const SecretSection = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	border-radius: 10px;
	font-family: Inter;

	& > h3 {
		font-size: ${({ theme: { typography } }) => typography.size.m2};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		color: ${({ theme: { colors } }) => colors.text_01};
		margin-top: 20px;
	}

	& > h4 {
		font-size: ${({ theme: { typography } }) => typography.size.s2};
		color: ${({ theme: { colors } }) => colors.text_02};
		margin-top: 12px;
	}
`;
