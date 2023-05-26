import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {
	ErrorPage,
	LandingPage,
	LoginPage,
	PersonalSchedulePage,
	Root,
	SignUpPage,
} from "@/pages";
import { unwrapResult } from "@reduxjs/toolkit";
import { getCurrentUser } from "./store/user/user-slice";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [{ index: true, element: <PersonalSchedulePage /> }],
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
