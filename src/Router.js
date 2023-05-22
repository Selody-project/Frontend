const { createBrowserRouter } = require("react-router-dom");
const {
	Root,
	ErrorPage,
	PersonalSchedulePage,
	LandingPage,
	LoginPage,
	SignUpPage,
} = require("./pages");

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

export default router;
