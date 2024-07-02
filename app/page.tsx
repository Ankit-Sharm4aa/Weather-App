"use client";
import Image from "next/image";
import SignUp from "@/pages/signUp";
import SignIn from "@/pages/signIn";
import WeatherApp from "@/pages/weatherApp";
import Bgimage from "./images/valentin-muller-bWtd1ZyEy6w-unsplash.jpg";
import "./globals.css";

export default function Home() {
  return (
    <main className=".App">
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <WeatherApp city="London,uk" />
    </main>
  );
}
