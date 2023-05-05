import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Root, ErrorPage, LandingPage, LoginPage, SignUpPage, PersonalSchedulePage } from "./pages/index";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./store/user/user-slice.jsx";

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
