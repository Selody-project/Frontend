import styled from "styled-components";

export const ContainerDiv = styled.div`
	position: absolute;
	bottom: calc(100% + 12px);
	left: -36px;
	z-index: 99;

	& > ul {
		padding: 15px;
		position: absolute;
		top: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;

		& > li {
			display: flex;
			gap: 18px;
			align-items: center;
		}
	}
`;

export const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	line-height: normal;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: 10px;
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	}

	& > h4 {
		color: ${({ theme: { colors } }) => colors.disabled_text};
		font-size: 8px;
	}
`;
