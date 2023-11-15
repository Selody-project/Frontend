import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

import { motion } from "framer-motion";

import { SelodyLogoIcon } from "@/constants/iconConstants";

import { LandingMainContainerDiv } from "./LandingMain.styles";

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
		<LandingMainContainerDiv>
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
		</LandingMainContainerDiv>
	);
};

export default LandingMain;
