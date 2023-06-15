import styled from "styled-components";
import { motion } from "framer-motion";

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
`;
