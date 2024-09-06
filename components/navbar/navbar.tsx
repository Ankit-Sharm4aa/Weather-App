import React from "react";
import { Avatar, IconButton } from "@mui/material";
import "./navbar.css";
import profilepic from "./images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import LogoutForm from "../logoutForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
const Navbar: React.FC = () => {
  return (
    <>
      <div className="heading">WEATHER APP 🌞</div>
      <div
        className="user-image"
        style={{ display: "flex", alignItems: "center" }}
      >
        <IconButton>
          <Avatar variant="rounded" sx={{ height: "40px", width: "40px" }} />
        </IconButton>
        <LogoutForm />
      </div>
    </>
  );
};

export default Navbar;
