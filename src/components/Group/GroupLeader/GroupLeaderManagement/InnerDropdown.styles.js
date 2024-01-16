import styled from "styled-components";

export const ContainerDiv = styled.div`
	position: absolute;
	top: 100%;
	right: -32px;
	z-index: 100;

	& > ul {
		padding: 10px 15px;
		position: absolute;
		top: 24px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		max-width: 240px;
		max-height: 160px;
		box-sizing: border-box;
		overflow-y: scroll;

		& > li {
			display: flex;
			flex-direction: column;
			line-height: normal;
		}
	}
`;

export const TitleDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_03};
		font-size: 12px;
		font-size: ${({ theme: { typography } }) => typography.size.s1};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
	}

	& > span {
		color: ${({ theme: { colors } }) => colors.disabled_text};
		font-size: 10px;
	}
`;

export const ContentDiv = styled.div`
	color: ${({ theme: { colors } }) => colors.text_02};
	font-size: 10px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
