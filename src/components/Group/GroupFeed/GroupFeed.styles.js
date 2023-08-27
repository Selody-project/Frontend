import styled from "styled-components";

export const ContainerDiv = styled.div``;

export const TitleDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;

	& > h2 {
		font-family: Inter;
		font-size: 20px;
		font-weight: 500;
	}
`;

export const SortDiv = styled.div`
	display: flex;
	gap: 18px;

	& > h3 {
		font-family: Inter;
		font-size: 14px;
		font-weight: 500;
	}
`;

export const FeedDiv = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	border: 1px solid #c9ccd7;
	padding: 24px 18px 30px;
`;

export const TopDiv = styled.div`
	display: flex;
`;

export const ProfileDiv = styled.div`
	min-width: 58px;
	height: 58px;
	border-radius: 50%;
	background-color: #eff0f4;
`;

export const InfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 14px;

	& > h3 {
		color: #000;
		font-family: Inter;
		font-size: 14px;

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
`;

export const BottomDiv = styled.div`
	margin-top: 6px;
	& > p {
		color: #2f2f2f;
		font-family: Inter;
		font-size: 15px;
		font-weight: 400;
		margin-left: 72px;
		line-height: normal;
	}
`;
