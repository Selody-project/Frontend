import styled from "styled-components";

export const FeedMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	height: 100%;
	margin-left: 100px;
	font-family: "Inter", sans-serif;
`;

export const FeedMainHeader = styled.span`
	font-size: 22px;
	font-weight: 600;
	margin: 50px 0px 30px 0px;
`;

export const MyGroupListContainer = styled.div`
	display: flex;
	flex-direction: row;
	text-align: center;
	gap: 20px;
`;

export const GroupAvatarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	gap: 10px;
`;

export const AllGroupListContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
`;

export const GroupPaperContainer = styled.div`
	width: 100%;
	max-width: 300px;
`;
