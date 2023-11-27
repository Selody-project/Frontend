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
			font-weight: ${({
				theme: {
					typography: { weight },
				},
			}) => weight.medium};
		}
		& > .startBtn {
			margin-top: 40px;
			width: 174px;
			height: 59px;
			background-color: ${({ theme: { colors } }) => colors.white};
			border-radius: 5px;
			font-size: ${({
				theme: {
					typography: { size },
				},
			}) => size.m1};
			color: ${({ theme: { colors } }) => colors.primary_light};
			cursor: pointer;
			& > a {
				display: inline-block;
				width: 100%;
				height: 100%;
				line-height: 59px;
				text-align: center;
			}
		}
	}
	@media (max-width: 768px) {
		flex-direction: column;
		& > .content {
			align-items: center;
		}
	}
`;
