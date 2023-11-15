import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { LandingHeaderContainerDiv } from "./LandingHeader.styles";

const LandingHeader = () => (
	<LandingHeaderContainerDiv>
		<motion.h1
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
		>
			Selody
		</motion.h1>
		<div className="auth-btn">
			<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
				<Link to="/login">Login</Link>
			</motion.div>
		</div>
	</LandingHeaderContainerDiv>
);

export default LandingHeader;
