import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px 26px;
	margin-top: 28px;
	font-family: Inter;
`;

export const GroupDiv = styled.div`
	/* height: 204px; */
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px 0;

	& > img {
		width: 58px;
		height: 58px;
		border-radius: 50%;
		object-fit: cover;
	}

	& > h3 {
		max-width: 260px;
		overflow: hidden;
		text-overflow: ellipsis;
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: ${({ theme: { typography } }) => typography.size.m1};
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
		margin-top: 12px;
	}

	& > p {
		max-width: 260px;
		height: 34px;
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: ${({ theme: { typography } }) => typography.size.s2};
		line-height: normal;
		margin-top: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& > h4 {
		color: #9ca4ad;
		color: ${({ theme: { colors } }) => colors.disabled_text};
		font-size: ${({ theme: { typography } }) => typography.size.s2};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		margin-top: 10px;
	}
`;
