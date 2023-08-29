import styled from "styled-components";

export const GroupDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;

	& > h3 {
		font-family: Inter;
		font-size: 18px;
		font-weight: 600;
	}
`;

export const ListDiv = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 30px;
	gap: 34px;
`;

export const ItemDiv = styled.div`
	display: flex;
	flex-direction: column;

	& > h4 {
		color: #2f2f2f;
		font-family: Inter;
		font-size: 12px;
		font-weight: 400;
		text-align: center;
		margin-top: 8px;
	}
`;

export const CircleDiv = styled.div`
	width: 62px;
	height: 62px;
	background-color: #dedede;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	& > img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
		border: 1px solid #fff;
	}
`;
