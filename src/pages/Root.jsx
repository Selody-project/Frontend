import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import Header from "@/components/Header/Header/Header";

const Root = () => {
	const { userLoading, user } = useSelector((state) => state.user);

	if (userLoading) {
		return <p>Loading,,,</p>;
	}
	if (!user) {
		return <Navigate to="/landing" />;
	}

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Root;
