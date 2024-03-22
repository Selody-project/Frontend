import styled from "styled-components";

export const TitleUl = styled.ul`
	display: flex;
	gap: 80px;
	margin-top: 40px;
`;

export const TitleLi = styled.li`
	color: ${({ theme: { colors } }) => colors.disabled_text};
	font-size: ${({ theme: { typography } }) => typography.size.s1};
	font-weight: ${({ theme: { typography } }) => typography.weight.medium};
	width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};

	& > svg {
		margin-left: 2px;
	}
`;

export const MemberUl = styled.ul`
	display: flex;
	gap: 80px;
	margin-top: 30px;
`;

export const MemberLi = styled.li`
	width: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme: { colors }, red }) =>
		red ? colors.sunday : colors.text_03};
	position: relative;
	cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};

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
			margin-right: 4px;
		}

		& > button {
			cursor: pointer;
		}
	}
`;

export const AccessLevelUl = styled.ul`
	width: 105px;
	height: 80px;
	position: absolute;
	top: 10px;
	left: calc(100% + 6px);
	z-index: 50;
	background-color: ${({ theme: { colors } }) => colors.white};
`;

export const AccessLevelLi = styled.li`
	background-color: ${({ isAccessLevel, theme: { colors } }) =>
		isAccessLevel ? colors.bg_01 : "transparent"};

	&:last-of-type {
		border-bottom: 1px solid ${({ theme: { colors } }) => colors.disabled_text};
	}

	&:hover {
		background-color: ${({ theme: { colors } }) => colors.bg_01};
	}

	& > button {
		width: 100%;
		color: #4b4b4b;
		font-size: 12px;
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		display: flex;
		align-items: center;
		gap: 12px;
		height: 20px;
		border: 1px solid ${({ theme: { colors } }) => colors.disabled_text};
		border-bottom: none;

		& > svg {
			width: 10px;
			margin-left: 12px;
		}
	}
`;
