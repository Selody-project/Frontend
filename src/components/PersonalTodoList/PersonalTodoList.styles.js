import styled from "styled-components";

export const TodoContainer = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: auto;
	min-width: 450px;
	max-width: 800px;
	background-color: #f5f5f5;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	font-family: "Inter";
	padding: 20px;
`;

export const TodoHeader = styled.div`
	display: flex;
	margin-bottom: 20px;
	width: 100%;
`;

export const TodoTabs = styled.div`
	width: 100%;
	display: flex;
	height: 40px;
	border-bottom: 1px solid #e5e5e5;
`;

export const TodoTab = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	background: ${(props) => (props.selected ? "#A495FF" : "white")};
	border: 1px solid #e5e5e5;
	border-bottom: none;
	border-radius: 5px;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
	color: ${(props) => (props.selected ? "white" : "#121127")};
	opacity: ${(props) => (props.selected ? "1" : "0.6")};
	transition: opacity 0.3s ease, background 0.3s ease, color 0.3s ease;
	padding: 10px 0;

	&:hover {
		opacity: 1;
		background: #a495ff;
		color: white;
	}
`;

export const AddEventButton = styled.button`
	display: flex;
	align-items: center;
	background: none;
	border: none;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	color: #6c55fe;
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.7;
	}
`;

export const TodoBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: #fff;
	height: auto;
	width: 100%;
	border-radius: 15px;
	padding: 20px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const TodoTitle = styled.h2`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-weight: 700;
	font-size: 24px;
	line-height: 24px;
	color: #313131;
	margin-top: 0px;
	margin-bottom: 10px;
`;

export const TodoSubtitle = styled.h3`
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #777;
	margin-bottom: 20px;
`;

export const TodoButton = styled.button`
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	border-radius: 10px;
	border: 1px solid #6c55fe;
	font-size: 14px;
	font-weight: 600;
	line-height: 16px;
	cursor: pointer;
	color: #30374f;
	margin-top: 20px;
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
	gap: 20px;
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
