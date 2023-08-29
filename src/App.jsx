import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
	Root,
	ErrorPage,
	LandingPage,
	LoginPage,
	SignUpPage,
	PersonalSchedulePage,
	GroupSchedulePage,
	SettingPage,
	CommunityPage,
} from "@/pages";

import { getCurrentUser } from "./features/auth/auth-service.js";

import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <PersonalSchedulePage /> },
			{ path: "share", element: <GroupSchedulePage /> },
			{ path: "community", element: <CommunityPage /> },
			{ path: "setting", element: <SettingPage /> },
		],
	},
	{ path: "/landing", element: <LandingPage /> },
	{ path: "/login", element: <LoginPage /> },
	{ path: "/signup", element: <SignUpPage /> },
]);

export default function App() {
	const dispatchFn = useDispatch();

	useEffect(() => {
		dispatchFn(getCurrentUser());
	}, []);

	return (
		<>
			<ToastContainer
				position="top-center"
				style={{ width: "auto" }}
				autoClose={800}
			/>
			<RouterProvider router={router} />
		</>
	);
}
