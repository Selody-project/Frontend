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

export const Div = styled.div`
	overflow: hidden;
	/* display: flex; */
	/* mask-image: linear-gradient(
		to left,
		transparent 0,
		transparent 51px,
		#000 77px,
		#000 100%
	); */

	& > ul {
		display: inline-block;
		transition: all 0.3s ease-out;

		& > li {
			display: flex;
			flex-direction: row;
			margin-top: 30px;
			gap: 26px;
			cursor: pointer;
		}
	}
`;

export const ButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LeftButton = styled.button`
	width: 40px;
	height: 40px;
	text-align: center;
	border-radius: 50%;
	background-color: black;
	color: #fff;
	cursor: pointer;
	display: ${({ disabled }) => disabled && "none"};
`;

export const RightButton = styled(LeftButton)``;

export const ItemDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	width: 80px;

	& > h4 {
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 12px;
		text-align: center;
		max-width: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
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
