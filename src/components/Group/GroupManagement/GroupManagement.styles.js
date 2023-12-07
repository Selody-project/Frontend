import styled from "styled-components";

export const ContainerDiv = styled.div`
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	font-family: Inter;
	width: 100%;
`;

export const InnerDiv = styled.div`
	padding: 40px 30px;

	& > ul {
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
	}
`;

export const TitleButton = styled.button`
	color: ${({ disabled, theme: { colors } }) =>
		disabled ? colors.text_01 : colors.disabled_text};
	font-size: 18px;
	font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	cursor: pointer;
`;

export const InfoDiv = styled.div`
	margin-top: 40px;
	display: flex;
	align-items: center;
	gap: 30px;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		width: 50px;
	}

	& > img {
		width: 80px;
		height: 80px;
		border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
		border-radius: 50%;
		object-fit: cover;
	}

	& > label {
		color: ${({ theme: { colors } }) => colors.disabled_text};
		font-size: 14px;
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		text-decoration: underline;
		cursor: pointer;
	}

	& > textarea {
		width: 745px;
		height: 84px;
		background-color: ${({ theme: { colors } }) => colors.bg_01};
		border: 0;
		padding: 12px;
	}
`;

export const ProfileInput = styled.input`
	display: none;
`;

export const InfoInput = styled.input`
	width: 280px;
	background-color: ${({ theme: { colors } }) => colors.bg_01};
	border: 0;
	padding: 12px;

	&:focus {
		outline: 1px solid ${({ theme: { colors } }) => colors.primary};
	}
`;

export const PublicDiv = styled.div`
	margin-top: 40px;
	display: flex;
	align-items: center;
	gap: 30px;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
	}
`;

export const ButtonDiv = styled.div``;
