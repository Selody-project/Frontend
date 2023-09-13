import styled from "styled-components";

export const PersonalTodoListLayoutAside = styled.aside`
	position: sticky;
	top: 290px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 19px;
	width: 100%;
	max-width: 422px;
	height: 100%;
	border-radius: 15px;
	font-family: "Inter";
`;

export const TodoHeader = styled.header`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 33px;
	padding: 0 17px;
	font-size: 14px;
	& * {
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.medium};
	}
`;

export const TodoTab = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	background: ${({ selected, theme: { colors } }) =>
		selected ? colors.primary : colors.white};
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	color: ${({ selected, theme: { colors } }) =>
		selected ? colors.white : colors.text_01};
	opacity: ${({ selected }) => (selected ? "1" : "0.7")};
	transition: opacity 0.3s ease, background 0.3s ease, color 0.3s ease;
	padding: ${({
			theme: {
				spacing: { padding },
			},
		}) => padding.small}px
		0;
	cursor: pointer;
	&:hover,
	&[aria-selected="true"] {
		opacity: 1;
		background: ${({ theme: { colors } }) => colors.primary};
		color: white;
	}
`;

export const ScheduleAddButton = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 47px;
	height: 47px;
	font-size: 12px;
	cursor: pointer;
	color: ${({ theme: { colors } }) => colors.primary};
	transition: opacity 0.3s ease;
	& > span {
		line-height: 1;
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.bold};
	}
	&:hover {
		opacity: 0.7;
	}
`;

export const TodoBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	height: auto;
	border-radius: 15px;
	padding: ${({
		theme: {
			spacing: { padding },
		},
	}) => padding.medium}px;
	background-color: ${({ theme: { colors } }) => colors.bg_02};
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const TodoTitle = styled.h2`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-weight: ${({ theme: { typography } }) => typography.bold};
	font-size: 24px;
	line-height: 24px;
	color: ${({ theme: { colors } }) => colors.text_01};
	margin-top: 0px;
	margin-bottom: ${({
		theme: {
			spacing: { padding },
		},
	}) => padding.small}px;
`;

export const TodoSubtitle = styled.h3`
	font-weight: ${({ theme: { typography } }) => typography.medium};
	font-size: 14px;
	line-height: 20px;
	color: ${({ theme: { colors } }) => colors.text_02};
	margin-bottom: ${({
		theme: {
			spacing: { padding },
		},
	}) => padding.medium}px;
`;

export const TodoButton = styled.button`
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.primary};
	font-size: 14px;
	font-weight: ${({ theme: { typography } }) => typography.medium};
	line-height: 16px;
	cursor: pointer;
	color: ${({ theme: { colors } }) => colors.disabled_text};
	margin-top: ${({
		theme: {
			spacing: { padding },
		},
	}) => padding.medium}px;
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.7;
	}
`;

export const TodoList = styled.ul`
	width: 100%;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border-radius: 10px;
	gap: ${({
		theme: {
			spacing: { padding },
		},
	}) => padding.medium}px;
	padding: 0;
	margin: 0;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	&::-webkit-scrollbar-thumb {
		background: #888;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;
