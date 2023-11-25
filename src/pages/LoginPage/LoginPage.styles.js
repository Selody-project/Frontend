import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Arial, sans-serif;
	height: 100vh;
	padding: 0 180px;
	gap: 132px;
`;

export const LeftSideDiv = styled.div`
	flex: 1;
	margin-bottom: 120px;

	& > img {
		width: 196px;
		height: 196px;
	}

	& > h1 {
		margin: 20px 0;
		padding: 0;
		font-family: "Montserrat";
		font-size: 50px;
		font-weight: ${({ theme: { typography } }) => typography.weight.bold};
		color: ${({ theme: { colors } }) => colors.text_01};
		line-height: normal;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

		& > span {
			color: ${({ theme: { colors } }) => colors.primary};
		}
	}
	& > h3 {
		margin: 0;
		font-family: "Spoqa Han Sans Neo";
		font-style: normal;
		font-size: 28px;
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		line-height: normal;

		color: ${({ theme: { colors } }) => colors.text_01};
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}
`;

export const RightSideDiv = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const DividerHr = styled.hr`
	width: 100%;
	height: 1px;
	background-color: ${({ theme: { colors } }) => colors.disabled_text};
	border: none;
	margin: 18px 0;
`;

export const SocialLoginContainerDiv = styled.div`
	text-align: center;
	& > p {
		color: ${({ theme: { colors } }) => colors.text_02};
		margin: 10px;
	}
	& > div {
		margin-top: 28px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 60px;
	}
`;

export const SocialLoginBtnContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;

	& > button {
		width: 52px;
		height: 52px;
<<<<<<< HEAD
		margin-bottom: 8px;
=======
		cursor: pointer;
>>>>>>> 2c38f58f57d4777289446ed6444a9f0c9ad4e049
	}

	& > span {
		margin-top: 8px;
		font-size: 12px;
		color: ${({ theme: { colors } }) => colors.disabled_text};
		opacity: 0.7;
	}
`;
