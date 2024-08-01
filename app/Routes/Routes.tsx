"use client";
import React from "react";
import SignIn from "@/pages/signIn";
import WeatherApp from "@/pages/weatherApp";
import Navbar from "@/components/navbar";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const Routes: React.FC = () => {
  const Router = createBrowserRouter([
    {
      path: "",
      element: <Navigate to="/Signin" />,
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
