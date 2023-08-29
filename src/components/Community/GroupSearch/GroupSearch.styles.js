import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px 26px;
	margin-top: 28px;
`;

export const GroupDiv = styled.div`
	height: 204px;
	border-radius: 10px;
	border: 1px solid #c9ccd7;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > img {
		width: 58px;
		height: 58px;
		margin-top: 24px;
		border-radius: 50%;
		object-fit: cover;
	}

	& > h3 {
		color: #000;
		font-family: Inter;
		font-size: 20px;
		font-weight: 600;
		margin: 12px 0 0;
	}

	& > p {
		color: #2f2f2f;
		text-align: center;
		font-family: Inter;
		font-size: 14px;
		font-weight: 400;
		line-height: normal;
		margin: 4px 0 0;
	}

	& > h4 {
		color: #9ca4ad;
		font-family: Inter;
		font-size: 14px;
		font-weight: 500;
		margin: 10px 0 0;
	}
`;
