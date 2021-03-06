import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {styles} from "./headerStyles"

function MenuAppBar(props) {
  const { classes } = props;
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => props.onLeftMenuClick()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            EEP
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);