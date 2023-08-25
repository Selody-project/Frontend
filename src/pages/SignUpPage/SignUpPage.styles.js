import styled from "styled-components";

export const ContainerDiv = styled.div`
	padding: 80px;
	padding-bottom: 0;
`;

export const ContentContainerDiv = styled.div`
	display: flex;
	align-items: start;
`;

export const LeftSideDiv = styled.div`
	flex: 1;
	margin-top: 28px;
`;

export const RightSideDiv = styled.div`
	flex: 1;
`;

export const LogoContainerDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	font-family: "Montserrat";
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	font-size: 45px;
	line-height: normal;
	color: ${({ theme: { colors } }) => colors.text_01};
	margin-bottom: 80px;

	& > h1 {
		margin: 0;
		& > span {
			color: ${(props) => props.theme.colors.primary};
		}
	}
`;

export const LeftTextDiv = styled.div`
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	font-family: "Montserrat";
	line-height: normal;

	& > h3 {
		font-weight: ${({ theme }) => theme.typography.weight.extrabold};
		font-size: 40px;
		color: ${(props) => props.theme.colors.primary};
	}

	& > h4 {
		margin-top: 16px;
		font-weight: ${({ theme }) => theme.typography.weight.bold};
		font-size: 20px;
		color: ${({ theme: { colors } }) => colors.text_01};
	}
`;
