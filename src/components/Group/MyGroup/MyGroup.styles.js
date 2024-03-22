import styled from "styled-components";

export const GroupDiv = styled.div`
	display: flex;
	flex-direction: column;
	font-family: Inter;
	position: relative;

	& > h3 {
		font-size: 18px;
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	}
`;

export const EmptyGroupDiv = styled.div`
	margin-top: 30px;

	& > svg {
		cursor: pointer;
	}

	& > h4 {
		font-size: 12px;
		margin-top: 6px;
	}
`;

export const WrapperDiv = styled.div`
	overflow-x: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const InnerDiv = styled.div`
	display: inline-block;
	transition: all 0.3s ease-out;

	& > ul {
		display: flex;
		gap: 26px;
		margin-top: 30px;

		& > li {
			cursor: pointer;
		}
	}
`;

export const LeftButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	z-index: 2;
	cursor: pointer;
`;

export const RightButton = styled(LeftButton)`
	right: 0;
`;

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
