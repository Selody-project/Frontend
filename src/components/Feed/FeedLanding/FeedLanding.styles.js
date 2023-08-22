import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 82px;
`;

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

export const CircleAddDiv = styled(CircleDiv)`
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	background-color: #313131;
`;

export const FeedDiv = styled.div`
	margin-top: 50px;

	& > ul {
		display: flex;
		gap: 24px;
	}
`;

export const Button = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
	color: ${(props) => (props.disabled ? "#000" : "rgba(0,0,0,0.33)")};
	font-family: Inter;
	font-size: 18px;
	font-weight: 600;
	cursor: pointer;
	padding: 0;
`;
