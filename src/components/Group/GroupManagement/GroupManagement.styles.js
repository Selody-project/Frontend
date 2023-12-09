import styled from "styled-components";

export const ContainerDiv = styled.div`
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	font-family: Inter;
	width: 100%;
`;

export const InnerDiv = styled.div`
	padding: 40px;

	& > hr {
		margin: 40px 0 0 0;
		border: none;
		border-top: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	}
`;

export const TitleUl = styled.ul`
	display: flex;
	gap: 24px;

	& > li {
		position: relative;

		&::after {
			content: "";
			position: absolute;
			top: 0;
			right: -13px;
			width: 2px;
			height: 18px;
			background-color: ${({ theme: { colors } }) => colors.disabled_text};
		}

		&:last-of-type::after {
			content: none;
		}
	}
`;

export const TitleButton = styled.button`
	color: ${({ disabled, theme: { colors } }) =>
		disabled ? colors.text_01 : colors.disabled_text};
	font-size: 18px;
	font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	cursor: pointer;
`;
