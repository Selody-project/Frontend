import { motion } from "framer-motion";
import styled from "styled-components";

export const UserInfoContainer = styled(motion.div)`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 600px;
	width: 800px;
	padding: 50px;
	margin: 50px auto;
	background-color: #ffffff;
	border: 2px solid #c69ace;
	border-radius: 20px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	font-family: "Inter", sans-serif;
`;

export const LeaderLabel = styled.span`
	background-color: #4caf50;
	color: white;
	border-radius: 30px;
	padding: 7px 15px;
	font-size: 0.8em;
	margin-left: 10px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1rem;
	& > div {
		display: flex;
		align-items: center;
	}
	& > div > svg {
		margin-left: 0.5rem;
		cursor: pointer;
	}

	& > hr {
		width: 100%;
		color: #c69ace;
	}
`;

export const InfoWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
		
		& > svg {
			margin-left: 0.5rem;
			cursor: pointer;
	}
`;

export const SwitchWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	margin-bottom: 1rem;
`;

export const HostButton = styled.button`
	background-color: #c69ace;
	color: white;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	font-size: 1em;
	margin-left: 10px;
	cursor: pointer;

	&:hover {
		background-color: #b76bb7;
	}
`;

export const MemberButton = styled.button`
	background-color: #c69ace;
	color: white;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	font-size: 1em;
	margin-left: 10px;
	cursor: pointer;

	&:hover {
		background-color: #b76bb7;
	}
`;

export const DelegateButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
	color: white;
	width: 300px;
	height: 50px;
`;
