import styled from "styled-components";

export const MemberInnerDiv = styled.div`
	padding: 0 16px;
`;

export const MemberH3 = styled.h3`
	color: ${({ theme: { colors } }) => colors.text_01};
	font-size: 15px;
	font-weight: ${({ theme: { typography } }) => typography.weight.medium};
`;

export const MemberUl = styled.ul`
	margin-top: 12px;
	display: flex;
	flex-direction: column;
	gap: 16px 0;

	& > li {
		display: flex;
		align-items: center;

		> img {
			width: 42px;
			height: 42px;
			border-radius: 50%;
			object-fit: cover;
		}

		> h4 {
			color: ${({ theme: { colors } }) => colors.text_03};
			font-size: 15px;
			font-weight: ${({ theme: { typography } }) => typography.weight.medium};
			margin: 0 10px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 60px;
			min-width: 60px;
			max-width: 100px;
		}

		> button {
			margin-left: 32px;
			cursor: pointer;
			position: relative;
		}
	}
`;
