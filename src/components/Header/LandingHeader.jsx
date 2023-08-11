import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import styled from "styled-components";

import { links } from "../../utils/links";

const LandingHeader = () => (
	<Wrapper>
		<motion.h1
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
		>
			Selody
		</motion.h1>
		<div className="menu">
			<motion.ul
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
			>
				{links.map((link) => (
					<Link to={link.route} key={link.name}>
						{link.name}
					</Link>
				))}
			</motion.ul>
		</div>
		<div className="auth-btn">
			<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
				<Link to="/login">Login</Link>
			</motion.div>
		</div>
	</Wrapper>
);

const Wrapper = styled.div`
	margin-top: -1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 2rem 0 2rem;
	height: 5rem;
	max-width: 100vw;
	background: linear-gradient(
		90deg,
		rgba(108, 85, 254, 1) 0%,
		rgba(17, 45, 78, 1) 100%
	);

	a {
		text-decoration: none;
	}

	h1 {
		font-size: 2.5rem;
		color: #ffffff;
	}

	.menu {
		a {
			color: #ffffff;
			margin: 0 1rem;
			padding-bottom: 0.5rem;
			font-size: 1.15rem;
			font-weight: 500;
			text-transform: uppercase;
			transition: all 0.3s;
			border-bottom: 2px solid transparent;
			&:hover {
				color: #ffffff;
				border-color: #ffffff;
			}
		}
	}

	.auth-btn {
		a {
			font-size: 1.25rem;
			font-weight: 700;
			color: #ffffff;
			transition: all 0.3s;
			&:hover {
				color: #ffffff;
			}
		}
	}
`;

export default LandingHeader;
