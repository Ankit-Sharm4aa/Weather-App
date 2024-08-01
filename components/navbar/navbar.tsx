import React from "react";
import { Avatar, IconButton } from "@mui/material";
import "./navbar.css";
import profilepic from "./images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="heading">WEATHER APP</div>
      <div className="user-image">
        <IconButton>
          <Avatar src={profilepic.src} />
        </IconButton>
      </div>
    </>
  );
};

export default Navbar;
