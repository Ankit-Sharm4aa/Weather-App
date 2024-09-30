import React from "react";
import "./logoutForm.css";
import { Logout } from "@/app/actions";
const LogoutForm = () => {
  return (
    <form action={Logout}>
      <button className="signout-btn" type="submit">
        Sign Out
      </button>
    </form>
  );
};

export default LogoutForm;
