import styled from "styled-components";

export const GroupDiv = styled.div`
	display: flex;
	flex-direction: column;
	font-family: Inter;

	& > h3 {
		font-size: 18px;
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	}
`;

export const ListDiv = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 30px;
	gap: 34px;
	cursor: pointer;
`;

export const ItemDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	& > h4 {
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 12px;
		text-align: center;
	}
`;

export const CircleDiv = styled.div`
	width: 62px;
	height: 62px;
	background-color: ${({ theme: { colors } }) => colors.btn_02};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	& > img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
		border: 1px solid ${({ theme: { colors } }) => colors.white};
	}
`;
