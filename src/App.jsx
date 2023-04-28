import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Root,
  ErrorPage,
  LandingPage,
  LoginPage,
  SignUpPage,
  PersonalSchedulePage,
} from './pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '/personal', element: <PersonalSchedulePage /> },
]);

export default function App() {
  return (
    <>
      <ToastContainer position="top-center" style={{ width: 'auto' }} />
      <RouterProvider router={router} />
    </>
  );
}
