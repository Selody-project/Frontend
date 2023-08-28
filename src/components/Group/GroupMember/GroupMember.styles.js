import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const MemberDiv = styled.div`
	width: 168px;
	padding: 14px 20px;
	border-radius: 4px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
`;

export const MemberH3 = styled.h3`
	color: ${({ theme: { colors } }) => colors.text_01};
	font-family: Inter;
	font-size: ${(props) => (props.list === "member" ? "20px" : "15px")};
`;

export const MemberUl = styled.ul`
	margin-top: ${(props) => (props.list === "member" ? "30px" : "12px")};
	display: flex;
	flex-direction: column;
	gap: 16px 0;

	& > li {
		display: flex;
		align-items: center;
		gap: 160px 0;

		> img {
			width: 42px;
			height: 42px;
			border-radius: 50%;
			object-fit: cover;
		}

		> h4 {
			color: ${({ theme: { colors } }) => colors.text_03};
			font-family: Inter;
			font-size: 15px;
			margin-left: 10px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
`;
