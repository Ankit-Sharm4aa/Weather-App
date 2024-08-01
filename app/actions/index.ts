"use server";

import { signIn } from "@/auth";

export async function doSocialLogin(formData) {
  const action = formData.get("action");

  await signIn(action, { redirectTo: "/Weather/Dashboard" });
  console.log(action);
}

export async function Logout() {}
