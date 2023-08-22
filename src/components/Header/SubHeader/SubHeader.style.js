import styled from "styled-components";

export const SubHeaderDiv = styled.div`
	display: none;
	position: absolute;
	top: 100%;
	z-index: 2;

	&:hover {
		display: block;
	}
`;

export const SubTabUl = styled.ul`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.text_02};
	font-family: Inter;
	font-size: 16px;
	font-weight: 500;
	line-height: normal;
	gap: 48px;
	margin-top: 60px;

	& > li {
		white-space: nowrap;
		cursor: pointer;
	}

	.isActive {
		color: ${({ theme }) => theme.colors.primary};
		font-weight: 600;
	}
`;

export const NotificationButton = styled.button`
	all: unset;
	cursor: pointer;
`;
