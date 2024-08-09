"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData) {
  const action = formData.get("action");

  await signIn(action, { redirectTo: "/pages/weatherApp" });
  console.log(action);
}

export async function Logout() {
  await signOut({ redirectTo: "/" });
}
