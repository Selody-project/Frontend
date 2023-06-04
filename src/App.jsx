import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
	Root,
	ErrorPage,
	LandingPage,
	LoginPage,
	SignUpPage,
	PersonalSchedulePage,
	MyPage,
} from "@/pages";
import { getCurrentUser } from "./features/user/user-service.js";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <PersonalSchedulePage /> },
			{ path: "mypage", element: <MyPage /> },
		],
	},
	{ path: "/landing", element: <LandingPage /> },
	{ path: "/login", element: <LoginPage /> },
	{ path: "/signup", element: <SignUpPage /> },
]);

export default function App() {
	const dispatchFn = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatchFn(getCurrentUser())
			.unwrap()
			.finally(() => {
				setLoading(false);
			});
	}, [dispatchFn]);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<ToastContainer position="top-center" style={{ width: "auto" }} />
			<RouterProvider router={router} />
		</>
	);
}
