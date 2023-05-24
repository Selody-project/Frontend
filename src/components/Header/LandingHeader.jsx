import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	height: 5rem;
	max-width: 100vw;
	background: #ffffff;

	a {
		text-decoration: none;
	}

	h1 {
		font-size: 2.5rem;
		color: #3f72af;
	}

	.menu {
		a {
			color: #112d4e;
			margin: 0 1rem;
			padding-bottom: 0.5rem;
			font-size: 1.15rem;
			font-weight: 500;
			text-transform: uppercase;
			transition: all 0.3s;
			border-bottom: 4px solid transparent;
			&:hover {
				color: #3f72af;
				border-color: #3f72af;
			}
		}
	}

	.auth-btn {
		a {
			font-size: 1.25rem;
			font-weight: 700;
			color: #3f72af;
			transition: all 0.3s;
			&:hover {
				color: #112d4e;
			}
		}
	}
`;

export default LandingHeader;
