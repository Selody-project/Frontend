import { createBrowserRouter } from "react-router-dom";
import SharePage from "./pages/SharePage";
import {
	ErrorPage,
	LandingPage,
	LoginPage,
	PersonalSchedulePage,
	Root,
	SignUpPage,
} from "@/pages";

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
	{ path: "/share", element: <SharePage /> },
]);

export default router;
