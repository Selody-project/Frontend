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
`;

export const RightSideDiv = styled(LeftSideDiv)``;

export const LogoContainerDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	font-family: "Montserrat";
	font-weight: 700;
	font-size: 45px;
	line-height: normal;
	color: black;
	margin-bottom: 90px;

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

	& > h3 {
		font-weight: 800;
		font-size: 40px;
		line-height: 49px;
		color: #6c55fe;
	}

	& > h4 {
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		color: #000000;
	}
`;
