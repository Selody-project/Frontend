import styled from "styled-components";

export const TitleUl = styled.ul`
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
`;

export const TitleLi = styled.li`
	color: ${({ theme: { colors }, red }) =>
		red ? colors.sunday : colors.disabled_text};
	font-size: ${({ theme: { typography } }) => typography.size.s1};
	font-weight: ${({ theme: { typography } }) => typography.weight.medium};
	width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: ${({ click }) => (click ? "pointer" : "default")};

	& > svg {
		margin-left: 2px;
	}
`;

export const MemberUl = styled.ul`
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
`;

export const MemberLi = styled.li`
	width: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme: { colors }, red }) =>
		red ? colors.sunday : colors.text_03};

	& > img {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		object-fit: cover;
	}

	& > span {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: ${({ theme: { typography } }) => typography.size.s1};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};

		& > svg {
			width: 10px;
			margin-right: 2px;
		}
	}
`;

export const MemberDiv = styled.div``;
