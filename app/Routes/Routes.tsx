import React from "react";
import SignIn from "@/pages/signIn";
import SignUp from "@/pages/signUp";
import WeatherApp from "@/pages/weatherApp";

export default function Routes() {
  return (
    <>
      {/* <SignIn /> */}

      {/* <SignUp /> */}

      <WeatherApp city="London,uk" />
    </>
  );
}
