"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData) {
  const action = formData.get("action");

  await signIn(action, { redirectTo: "/weatherApp/" });
}

export async function Logout() {
  await signOut({ redirectTo: "/" });
}
