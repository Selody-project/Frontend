import styled from "styled-components";

export const ContainerDiv = styled.div`
	border: 1px solid ${({ theme: { colors } }) => colors.disabled_text};
	border-radius: 50px;
	padding: 36px 48px;
	color: ${({ theme: { colors } }) => colors.text_01};
	line-height: normal;
	margin-top: 78px;

	& > h3 {
		font-size: 20px;
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.semibold};
	}
`;

export const ItemWrapDiv = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const SkeletonDiv = styled.div`
	width: 100%;
	height: 148px;
	background-color: ${({ theme }) => theme.colors.btn_02};
	opacity: 0.5;
	border-radius: 10px;
`;
