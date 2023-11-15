import styled from "styled-components";

export const LandingMainContainerDiv = styled.div`
	height: calc(100vh - 74px);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 101px;
	color: ${({ theme: { colors } }) => colors.white};
	& > .content {
		display: flex;
		flex-direction: column;
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.semibold};
		& > .heading2 {
			font-size: ${({
				theme: {
					typography: { size },
				},
			}) => size.l2};
		}
		& > .typing {
			margin-top: 30px;
			display: flex;
			flex-direction: column;
			font-size: ${({
				theme: {
					typography: { size },
				},
			}) => size.m2};
		}
		& > .startBtn {
			margin-top: 40px;
			width: 174px;
			height: 59px;
			background-color: ${({ theme: { colors } }) => colors.white};
			border-radius: 5px;
			text-align: center;
			font-size: ${({
				theme: {
					typography: { size },
				},
			}) => size.m1};
			font-weight: ${({
				theme: {
					typography: { weight },
				},
			}) => weight.regular};
			color: ${({ theme: { colors } }) => colors.primary_light};
			cursor: pointer;
		}
	}
	@media (max-width: 768px) {
		flex-direction: column;
		& > .content {
			align-items: center;
		}
	}
`;
