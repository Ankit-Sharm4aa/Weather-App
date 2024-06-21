import Image from "next/image";
import SignUp from "@/pages/signUp";
import SignIn from "@/pages/signIn";
import "./globals.css";
export default function Home() {
  return (
    <main className=".App">
      <SignUp />
    </main>
  );
}
