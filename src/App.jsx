import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	ErrorPage,
	LandingPage,
	LoginPage,
	PersonalSchedulePage,
	Root,
	SignUpPage,
} from "@/pages";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "./store/user/user-slice";
import { ToastContainer } from "react-toastify";
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

	useEffect(() => {
		dispatchFn(getCurrentUser());
	}, []);

	return (
		<>
			<ToastContainer position="top-center" style={{ width: "auto" }} />
			<RouterProvider router={router} />
		</>
	);
}
