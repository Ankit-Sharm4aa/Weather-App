import React from "react";
import { Avatar, IconButton } from "@mui/material";
import "./navbar.css";
import profilepic from "./images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import LogoutForm from "../logoutForm";
import { auth } from "@/auth";
const Navbar: React.FC = async () => {
  const session = await auth();
  return (
    <>
      <div className="heading">WEATHER APP</div>
      <div className="user-image">
        <IconButton>
          <Avatar src={session?.user?.image} />
        </IconButton>
        <LogoutForm />
      </div>
    </>
  );
};

export default Navbar;
