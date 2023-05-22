import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "./store/user/user-slice";
import { ToastContainer } from "react-toastify";
import router from "./Router";

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
