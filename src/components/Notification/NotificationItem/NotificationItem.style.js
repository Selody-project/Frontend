import styled from "styled-components";

export const ContainerDiv = styled.div`
	cursor: pointer;
	padding: 8px 12px;

	&:hover {
		background-color: ${({ theme: { colors } }) => colors.primary_light};
	}
`;

export const HeaderDiv = styled.div`
	display: flex;
	align-items: center;
`;

export const NameSpan = styled.span`
	font-family: Inter;
	font-size: 16px;
	font-weight: 500;
	line-height: 150%;
	letter-spacing: 0.32px;
`;

export const TimeSpan = styled.span`
	color: #a9a9a9;
	font-family: Inter;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	letter-spacing: 0.26px;
	margin-left: 16px;
`;

export const TextP = styled.p`
	margin-top: 8px;
	color: #7b7b7b;
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 150%;
	letter-spacing: 0.28px;
`;
