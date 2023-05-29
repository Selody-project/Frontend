import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Landing from "../components/Home/Landing";
import LandingHeader from "../components/Header/LandingHeader";

const LandingPage = () => {
	const { user } = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user]);

	return (
		<>
			<LandingHeader />
			<Landing />
		</>
	);
};

export default LandingPage;
