import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import styled from "styled-components";

const Landing = () => {
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
			<div className="content">
				<motion.div className="left" animate={bounceAnimation}>
					<img src="/logo.svg" alt="logo" />
				</motion.div>
				<div className="right">
					<motion.h1
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
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
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #3f72af;
	height: 100vh;
	overflow: hidden;
	line-height: 1.3;

	.content {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 80%;
		max-width: 1200px;
		margin: auto;

		.left {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40%;

			img {
				width: 80%;
				max-width: 400px;
			}
		}

		.right {
			width: 60%;

			h1 {
				font-weight: 600;
				font-size: 2.5rem;
				margin-bottom: 2rem;
			}

			.typing-animation {
				font-size: 1.25rem;
				line-height: 1.5;
				color: #000;
				margin-bottom: 2rem;
			}

			.auth-btn {
				font-size: 1.25rem;
				font-weight: 600;
				color: #fff;
				background-color: #3f72af;
				padding: 1rem 2rem;
				border-radius: 0.25rem;
				transition: background-color 0.3s ease;
				text-decoration: none;

				&:hover {
					background-color: #112d4e;
				}
			}
		}
	}
`;

export default Landing;
