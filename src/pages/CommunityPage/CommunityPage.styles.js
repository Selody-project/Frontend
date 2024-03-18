import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 90px 82px 40px;
	font-family: Inter;
`;

export const FeedDiv = styled.div`
	margin-top: 50px;
`;

export const TabUl = styled.ul`
	display: flex;
	align-items: center;
	gap: 24px;
`;

export const TabButton = styled.button`
	font-size: 18px;
	font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	cursor: pointer;
	color: ${({ isActive, theme: { colors } }) =>
		isActive ? colors.text_01 : colors.disabled_text};
`;

export const FeedTitleDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 42px;
	min-height: 44.5px;

	& > ul {
		display: flex;
		gap: 24px;
		align-items: center;
	}
`;

export const SearchDiv = styled.div`
	border: 1px solid ${({ theme: { colors } }) => colors.text_01};
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 8px;
`;

export const Input = styled.input`
	width: 310px;
	border: none;
	outline: none;

	&::placeholder {
		color: ${({ theme: { colors } }) => colors.disabled_text};
		font-family: Poppins;
		font-size: 15px;
		letter-spacing: 0.5px;
		line-height: 24px;
	}
`;

export const SearchButton = styled.button`
	cursor: pointer;
`;
