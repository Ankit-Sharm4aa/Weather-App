"use client";
import React from "react";
import SignIn from "@/pages/signIn";
import SignUp from "@/pages/signUp";
import WeatherApp from "@/pages/weatherApp";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const Routes: React.FC = () => {
  const Router = createBrowserRouter([
    {
      path: "",
      element: <Navigate to="/Signup" />,
    },
    {
      path: "/Signup",
      element: <SignUp />,
    },
    {
      path: "/Signin",
      element: <SignIn />,
    },
    {
      path: "/Weather/Dashboard",
      element: <WeatherApp city="London,uk" />,
    },
  ]);
  return <RouterProvider router={Router} />;
};

export default Routes;
