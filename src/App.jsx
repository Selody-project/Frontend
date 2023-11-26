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
	GroupPage,
} from "@/pages";

import { getCurrentUser } from "./features/auth/auth-service.js";
import PublicRoute from "./pages/PublicRoute.jsx";
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
			{ path: "group/:id", element: <GroupPage /> },
		],
	},
	{
		path: "/",
		element: <PublicRoute />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "landing", element: <LandingPage /> },
			{ path: "login", element: <LoginPage /> },
			{ path: "signup", element: <SignUpPage /> },
			{ path: "group", element: <GroupPage /> },
		],
	},
]);

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrentUser());
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
