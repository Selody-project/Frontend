import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

import { motion } from "framer-motion";
import styled from "styled-components";

import { SelodyLogoIcon } from "@/constants/iconConstants";

const LandingMain = () => {
	const bounceAnimation = {
		scale: [1, 1.1, 1],
		transition: {
			scale: {
				duration: 1,
				repeat: Infinity,
				ease: "easeInOut",
			},
		},
	};

	return (
		<Wrapper>
			<motion.div className="left" animate={bounceAnimation}>
				<SelodyLogoIcon width="250" height="250" />
			</motion.div>
			<div className="right">
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Selody와 함께 그룹 일정 공유 및 관리를 해보세요 !
				</motion.h1>
				<motion.div
					className="typing-animation"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
				>
					<ReactTypingEffect
						text={[
							"Selody는 개인 일정 관리 및 그룹 일정을 관리하는 플랫폼입니다. 프로젝트 공동 작업에서 이벤트 계획에 이르기까지 Selody는 일정을 단순화하여 더 쉽고 체계적으로 관리할 수 있습니다. 오늘 Selody와 함께 시작하세요!",
						]}
						speed={25}
						eraseSpeed={30}
						typingDelay={500}
						eraseDelay={5000}
						cursor=" "
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5 }}
				>
					<Link to="/login" className="auth-btn">
						시작하기
					</Link>
				</motion.div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 4rem);
	background: linear-gradient(
		90deg,
		rgba(108, 85, 254, 1) 0%,
		rgba(17, 45, 78, 1) 100%
	);

	color: #fff;

	.left {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 50%;
			max-width: 100%;
		}
	}

	.right {
		flex: 1;
		padding: 50px;
		font-family: "Poppins", sans-serif;

		h1 {
			font-size: 2.5rem;
			margin-bottom: 2rem;
			line-height: 1.3;
		}

		.typing-animation {
			font-size: 1.25rem;
			margin-bottom: 4rem;
			// height: 150px;
			line-height: 1.3;
			height: 3.75rem;
			// overflow: hidden;
		}

		.auth-btn {
			font-size: 1.25rem;
			color: #6c55fe;
			background-color: #fff;
			padding: 1rem 2rem;
			border-radius: 0.25rem;
			transition: background-color 0.3s ease, color 0.3s ease;
			text-decoration: none;

			&:hover {
				color: #fff;
				background-color: #6c55fe;
			}
		}
	}
`;

export default LandingMain;
