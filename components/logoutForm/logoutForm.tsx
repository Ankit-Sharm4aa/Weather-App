import React from "react";
import "./logoutForm.css";
import { Logout } from "@/app/actions";
const LogoutForm = () => {
  return (
    <form action={Logout}>
      <button className="signout-btn" type="submit">
        SignOut
      </button>
    </form>
  );
};

export default LogoutForm;
