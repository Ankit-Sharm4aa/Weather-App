import React from "react";
import { Card } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function Forecast() {
  return (
    <>
      <h4>7 days Forecast</h4>
      <Card
        sx={{
          height: "300px",
          width: "300px",
          backgroundColor: "black",
          borderRadius: "15px",
        }}
      >
        <List sx={{ color: "white" }}>
          <ListItem>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="1" />
          </ListItem>
          <ListItem>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="2" />
          </ListItem>
          <ListItem>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="3" />
          </ListItem>
          <ListItem>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="4" />
          </ListItem>
        </List>
        <Card
          sx={{
            height: "60px",
            width: "280px",
            backgroundColor: "grey",
            margin: "auto",
          }}
        ></Card>
      </Card>
    </>
  );
}

export default Forecast;
