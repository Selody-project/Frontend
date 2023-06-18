import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Root = () => {
	const { userLoading, user } = useSelector((state) => state.user);

	if (userLoading) {
		return <p>Loading,,,</p>;
	}
	if (!user) {
		return <Navigate to="/landing" />;
	}

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Root;
