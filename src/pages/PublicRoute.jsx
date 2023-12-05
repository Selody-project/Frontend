import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const PublicRoute = () => {
	const { isLoading, user } = useSelector((state) => state.auth);

	if (isLoading) {
		return <p>Loading,,,</p>;
	}

	if (user) {
		toast.success(`안녕하세요! ${user.nickname}님`);
	}

	return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
