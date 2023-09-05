import styled from "styled-components";

export const ContainerDiv = styled.div``;

export const FeedDiv = styled.div`
	display: flex;
	border-radius: 10px;
	border: 1px solid #c9ccd7;
	width: 1276px;
	height: 100%;
	margin-top: 14px;

	&:first-of-type {
		margin-top: 0;
	}
`;

export const ProfileDiv = styled.div`
	width: 58px;
	height: 58px;
	border-radius: 50%;
	background-color: #eff0f4;
	margin: 24px 0 0 18px;
`;

export const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 14px;

	& > h3 {
		color: #000;
		font-family: Inter;
		font-size: 14px;
		font-weight: 500;
		margin: 34px 0 0;

		> span {
			margin-left: 4px;
		}
	}

	& > h4 {
		color: #75808d;
		font-family: Inter;
		font-size: 12px;
		margin: 5px 0 0 0;
	}

	& > p {
		color: #2f2f2f;
		font-family: Inter;
		font-size: 15px;
		font-weight: 400;
		margin: 18px 0 32px 0;
	}
`;
