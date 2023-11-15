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
				<div className="typing">
					<TypeAnimation
						sequence={[
							"Selody는 개인 일정 관리 및 그룹 일정을 관리하는 플랫폼입니다.",
						]}
						wrapper="span"
						cursor={true}
					/>
					<TypeAnimation
						sequence={[
							"공동 작업에서 일정을 단순화히여 더 쉽고 체계적으로 관리합니다.",
						]}
						wrapper="span"
						cursor={true}
					/>
				</div>
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
