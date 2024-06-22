import Image from "next/image";
import SignUp from "@/pages/signUp";
import SignIn from "@/pages/signIn";
import WeatherApp from "@/pages/weatherApp";
import "./globals.css";
export default function Home() {
  return (
    <main className=".App">
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <WeatherApp />
    </main>
  );
}
