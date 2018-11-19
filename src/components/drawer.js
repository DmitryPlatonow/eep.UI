import React from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

function AppDrawer(props) {
  const { classes } = props;
  return (
    <Drawer
      className={classes.list}
      open={props.open}
      docked="false"
      onClose={open => props.onToggle(open)}
    >
      <MenuItem component={Link} to="/">
        Main Page
      </MenuItem>
      <MenuItem component={Link} to="/project">
        Add Project
      </MenuItem>
      <MenuItem component={Link} to="/projects">
        Projects
      </MenuItem>
      <MenuItem component={Link} to="/user">
        Add User
      </MenuItem>
    </Drawer>
  );
}

export default withStyles(styles)(AppDrawer);
