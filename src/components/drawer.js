import React from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

export const AppDrawer = props => {
  return (
    <Drawer
      open={props.open}
      docked="false"
      onClose={open => props.onToggle(open)}
    >
      <MenuItem  component={Link} to="/">
        Main Page
      </MenuItem>
      <MenuItem component={Link} to="/project">
        Add Project
      </MenuItem>
      <MenuItem component={Link} to="/projects">
        Projects
      </MenuItem>
    </Drawer>
  );
};
