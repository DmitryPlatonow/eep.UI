import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


export const Header = () => {
  return (
    <AppBar
     >
      <Toolbar >
        <Typography color="inherit">Company name</Typography>
        <Button position="center" variant="outlined" color="inherit" >Login</Button>
      </Toolbar>
    </AppBar>
  )
}