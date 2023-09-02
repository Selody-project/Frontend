import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
`;

export const TitleDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > h2 {
		font-family: Inter;
		font-size: 20px;
	}

	& > ul {
		display: flex;
		gap: 18px;
	}
`;

export const Button = styled.button`
	color: ${(props) => (props.disabled ? "#121127" : "#9ca0ab")};
	font-family: Inter;
	font-size: 14px;
	cursor: pointer;
`;

export const FeedDiv = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	padding: 24px 18px 30px;
	position: relative;

	& > svg {
		position: absolute;
		right: 12px;
		top: 12px;
		cursor: pointer;
	}
`;

export const OptionMenuDiv = styled.div`
	position: absolute;
	right: -30px;
	top: 32px;
	z-index: 2;

	& > ul > li {
		width: 60px;
		height: 30px;
		border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${({ theme: { colors } }) => colors.white};
		color: ${({ theme: { colors } }) => colors.sunday};
		font-family: Inter;
		font-size: 12px;

		&:first-of-type {
			border-bottom: none;
			color: ${({ theme: { colors } }) => colors.text_01};
		}
	}
`;

export const TopDiv = styled.div`
	display: flex;

	& > img {
		width: 58px;
		height: 58px;
		border-radius: 50%;
		object-fit: cover;
	}
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

		> svg {
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
