import styled from "styled-components";

export const ContainerMain = styled.main`
	font-family: Inter;
	margin: 110px 26px 0;
`;

export const ProfileSection = styled.section`
	display: flex;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	padding: 72px 0;
`;

export const ProfileLeftDiv = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;

	& > img {
		width: 110px;
		height: 110px;
		object-fit: cover;
		border-radius: 50%;
	}
`;

export const ProfileInfoDiv = styled.div`
	& > h3 {
		font-size: 22px;
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	}

	& > p {
		margin-top: 18px;
		font-size: 14px;
	}
`;

export const ProfileRightDiv = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 112px;
`;

export const ProfileRightInnerDiv = styled.div`
	text-align: center;
	position: relative;

	&::after {
		content: "";
		width: 1px;
		height: 70px;
		background-color: ${({ theme: { colors } }) => colors.btn_02};
		position: absolute;
		top: -10px;
		right: -56px;
	}

	&:last-of-type::after {
		content: none;
	}

	& > h3 {
		font-size: 22px;
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	}

	& > h4 {
		margin-top: 8px;
		font-size: ${({ theme: { typography } }) => typography.size.s3};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
	}
`;

export const TabDiv = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 32px;

	& > ul {
		display: flex;
		gap: 48px;
	}
`;

export const TabButton = styled.button`
	color: ${({ disabled, theme: { colors } }) =>
		disabled ? colors.text_01 : colors.disabled_text};
	font-size: 18px;
	font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	cursor: pointer;
`;

export const GroupSection = styled.section``;
