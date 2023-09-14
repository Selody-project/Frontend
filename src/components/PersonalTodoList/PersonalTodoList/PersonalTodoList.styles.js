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
	font-size: ${({
		theme: {
			typography: { size },
		},
	}) => size.s2};
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
`;

export const TodoBody = styled.div`
	display: flex;
	gap: 29px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	min-height: 549px;
	padding: 26px 22px 26px 20px;
	border-radius: ${({
		theme: {
			typography: { size },
		},
	}) => size.l3};
	background-color: ${({ theme: { colors } }) => colors.bg_02};
`;

export const TodoBodyHeader = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	& > div {
		height: 43px;
	}
`;

export const TodoH2 = styled.h2`
	font-size: ${({
		theme: {
			typography: { size },
		},
	}) => size.m1};
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.bold};
	line-height: ${({
		theme: {
			typography: { size },
		},
	}) => size.m2};
	color: ${({ theme: { colors } }) => colors.text_01};
	margin-bottom: 4px;
`;
export const TodoH3 = styled.h3`
	color: ${({ theme: { colors } }) => colors.text_02};
	font-size: ${({
		theme: {
			typography: { size },
		},
	}) => size.s1};
	line-height: 15px;
	color: ${({ theme: { colors } }) => colors.text_02};
`;

export const ScheduleAddButton = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 47px;
	height: 47px;
	margin-top: -2px;
	margin-right: -7px;
	font-size: ${({
		theme: {
			typography: { size },
		},
	}) => size.s1};
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

export const TodoButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 186px;
	background: white;
	border-radius: ${({
		theme: {
			spacing: { borderRadius },
		},
	}) => borderRadius.default}px;
	border: 1px solid ${({ theme: { colors } }) => colors.primary};
	padding: 15px;
	font-size: ${({
		theme: {
			typography: { size },
		},
	}) => size.s2};
	font-weight: ${({ theme: { typography } }) => typography.medium};
	line-height: 16px;
	color: ${({ theme: { colors } }) => colors.disabled_text};
	cursor: pointer;
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
