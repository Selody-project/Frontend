import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PublicRoute = () => {
	const navigate = useNavigate();

	const { userLoading, user } = useSelector((state) => state.auth);

	if (userLoading) {
		return <p>Loading,,,</p>;
	}

	if (user) {
		toast.success(`안녕하세요! ${user.nickname}님`);
		navigate("/");
	}

	return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
