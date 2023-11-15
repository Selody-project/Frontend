import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { SelodyLogoIcon } from "@/constants/iconConstants";

import { LandingMainContainerDiv } from "./LandingMain.styles";

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

const LandingMain = () => {
	return (
		<LandingMainContainerDiv>
			<motion.div className="logo" animate={bounceAnimation}>
				<SelodyLogoIcon width="250" height="250" />
			</motion.div>
			<div className="content">
				<motion.h2
					className="heading2"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Selody와 함께 그룹 일정을 공유하고 관리하자!
				</motion.h2>
				<div className="typing">
					<TypeAnimation
						sequence={[
							"Selody는 개인 일정 관리 및 그룹 일정을 관리하는 플랫폼입니다.",
						]}
						wrapper="span"
						cursor={false}
						speed={60}
					/>
					<TypeAnimation
						sequence={[
							1900,
							"공동 작업의 일정을 단순화하여 더 쉽고 체계적으로 관리할 수 있습니다.",
						]}
						wrapper="span"
						cursor={false}
						speed={60}
					/>
				</div>
				<motion.button
					className="startBtn"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 3.8 }}
				>
					<Link to="/login" className="auth-btn">
						시작하기
					</Link>
				</motion.button>
			</div>
		</LandingMainContainerDiv>
	);
};

export default LandingMain;
