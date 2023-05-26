import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px;
	margin: 2%;
	border-radius: 100px;
	background-color: white;
	box-shadow: 0px 5px 50px 4px rgba(0, 0, 0, 0.15);

	@media (max-width: 900px) {
		flex-wrap: wrap;
		padding: 0px 15px 0px 15px;
		border-radius: 10px;
	}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
`;

export const LogoImage = styled.img`
	height: 50px;
`;

export const Title = styled.h1`
	margin-left: 10px;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	line-height: 37px;

	@media (max-width: 900px) {
		font-size: 24px;
		line-height: 30px;
	}
`;

export const HamburgerMenu = styled.div`
	display: none;

	@media (max-width: 900px) {
		display: block;
		cursor: pointer;
		font-size: 24px;
		padding-top: 5px;
		align-items: center;
		justify-content: center;
	}
`;

export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin-top: 15px;
		width: 100%;
		max-height: ${(props) => (props.open ? "500px" : "0")};
		overflow: hidden;
		transition: max-height 0.3s ease-in-out;
	}
`;

export const NavLink = styled(RouterNavLink)`
	margin-right: 20px;
	text-decoration: none;
	cursor: pointer;
	color: #121127;
	font-family: "Poppins";
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 180%;
	opacity: 0.6;
	transition: color 0.3s ease, text-decoration-color 0.3s ease;

	&:hover {
		color: #6c55fe;
		font-weight: 700;
		opacity: 1;
		text-decoration: underline;
		text-underline-offset: 15px;
		text-decoration-color: #6c55fe;
	}

	&.active {
		color: #6c55fe;
		font-weight: 700;
		opacity: 1;
		text-decoration: underline;
		text-underline-offset: 15px;
		text-decoration-color: #6c55fe;
	}

	@media (max-width: 900px) {
		font-size: 14px;
		margin: 0px;
	}
`;

export const CreateButton = styled.button`
	padding: 13px 26px;
	cursor: pointer;
	color: white;
	border-radius: 100px;
	border-style: none;
	background: #6c55fe;
	box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 15px;
	text-align: center;
	text-transform: uppercase;
	transition: background 0.3s ease;

	&:hover {
		background: #4e3bce;
	}

	@media (max-width: 900px) {
		width: 50%;
		padding: 10px 20px;
		margin-top: 5px;
		margin-bottom: 5px;
		font-size: 10px;
		line-height: 12px;
		border-radius: 10px;
		box-shadow: none;
	}
`;
